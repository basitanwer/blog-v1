---
title: "Simple task scheduler deployed in a cluster"
excerpt: "Working in a startup poses a lot of challenges and the biggest one is time to market. This drives the development team to build things fast but of quality.
One such task that you come across is having a simple task scheduler."
coverImage: "https://images.unsplash.com/photo-1575467544611-470fa8053545?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzA4NDl8MHwxfGFsbHx8fHx8fHx8fDE2NTMxNTc2MjQ&ixlib=rb-1.2.1&q=85&raw_url=true&fit=crop&w=2560&h=1707"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Basit Anwer
  picture: "/public/basit.jpg"
ogImage:
  url: "https://images.unsplash.com/photo-1575467544611-470fa8053545?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzA4NDl8MHwxfGFsbHx8fHx8fHx8fDE2NTMxNTc2MjQ&ixlib=rb-1.2.1&q=85&raw_url=true&fit=crop&w=2560&h=1707"
---

Working in a startup poses a lot of challenges and the biggest one is time to market. This drives the development team to build things fast but of quality.

One such task that you come across is having a simple task scheduler.

Uses of a task scheduler could be many. You might want to

1. Send regular emails at set intervals
2. Perform heavy computations based on a set schedule
3. One off tasks such as deleting customer data at off-peak times.

There could be many more reasons you need a task scheduler for and these needs grow over time. Ideally you should probably go for RabbitMQ or Kafka (depending on the need) for message queuing but if you’re in for a quick solution you either opt in for a cron job. Problems with cron jobs or schedulers within an application lifetime is when you distribute your application across a cluster, you don’t want to send the same email twice or the number of times your application instances are running in a cluster.

Here I am presenting a simple solution or hack which works for a startup and is cluster freindly. Your tasks will also run only once and uses just a database which probably every application has.

So lets get down to business.

You’ll need a database table with the following columns

| **Id** | **Column**     |     | **Type**                |
| ------ | -------------- | --- | ----------------------- |
| 1      | scheduled_time |     | timestamp               |
| 2      | status         |     | IN_PROGRESS/WATING/DONE |
| 3      | start_time     |     | timestamp               |
| 4      | version        |     | int                     |
| 5      | meta_data      |     | jsonb (or string)       |

Now your pseudo code boils down to these simple steps

```typescript
jobs = getJobs(status = `WAITING` && scheduled_time < time.now)
for job in jobs:
	success = UPDATE status = 'IN_PROGRESS',
    				 version = job.version + 1
		    		   WHERE id = job.id
        		         AND status = 'WAITING'
                         AND version = job.version
    if(success):
    	job_type = job.getTypeFromMetaData()
        switch(job_type):
        	...
    UPDATE status = 'DONE' WHERE id = job.id
```

Just to explain the important bits of the pseudo code,

- The `version` is there to ensure only one update call succeeds if multiple of those are made.
- Updating `start_time` marks when the job was started
- The `status` fields marks the item.

I like to keep the status as `DONE` instead of deleting the rows right away, it works as a way of logs as how did the jobs go. You could perform a bulk delete when your `start_time` is past 1 month or whatever that suits you.

We need just another set of code that checks the failed jobs if the application was killed in the process.

```typescript
// Reset stale jobs
jobs = getJobs(status = `IN_PROGRESS`
				&& start_time - time.now > stale_time )
for job in jobs:
	UPDATE status = `WAITING`,
    	   version=job.version + 1
           WHERE version = job.version

// Clean old jobs
DELETE jobs WHERE scheduled_time - time.now > `3 months`
```

Here we are putting those jobs back in `WAITING` where the `start_time` was not updated to `DONE` for a time we expect it to have it completed. Consider it a TTL. We could also add a heartbeat column if we are expecting to have some task running for a long time.

Run thes pieces of code at a set interval of either a minute, 5 mintues or 10 minutes or whatever you think is best.

This solution is language agnostic hence no mention of implementation code.
