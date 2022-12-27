---
title: "GraphQL Server: A Complete Guide"
excerpt: "GraphQL is an excellent tool to have when building APIs and saves a lot of development time when working in a team. The front-end can easily keep up with the changes the back-end engineers are making and keeps the team communication strong."
coverImage: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Basit Anwer
  picture: "/public/basit.jpg"
ogImage:
  url: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
---

# GraphQL Server: A Complete Guide

GraphQL is an excellent tool to have when building APIs and saves a lot of development time when working in a team. The front-end can easily keep up with the changes the back-end engineers are making and keeps the team communication strong.

If you’re still wondering if you should be using graphql for your next application, this blog will not be covering all of those reasons or you could just go ahead and trust me to pick it up.

Let’s dive into the walkthrough. We’ll be covering up 5 action items and these are

1. Create a NodeJS application
2. Setting up a GraphQL Server
3. Enhancing Resolvers with Queries & Mutations
4. Adding context
5. Authorisation

If you want to dive directly into the code then please head over to

[GitHub - basitanwer/graphql-demo](https://github.com/basitanwer/graphql-demo)

## Tools of trade

The tools we’ll be using are

1. [NodeJs](https://nodejs.dev/) (Language of choice)
2. [Typescript](https://typegraphql.com/) (Super charging javacript)
3. [Apollo-Server](https://www.apollographql.com/docs/apollo-server/) (GraphQL server)
4. [Type-Graphql](https://typegraphql.com/) (Generates types for apollo server / graphql)

## Step 1: Create a NodeJS Application

Assuming you have `yarn` installed and know your way around `npm` then please start away with the following command in a new folder.

```bash
yarn init
yarn add -D typescript
npx tsc --init
```

This will initiate a new project with typescript settings. Moving on lets update our `tsconfig.json` to place in rules to ensure our code is top quality.

```bash
yarn add -D tsconfig.json
npx tsconfig.json
```

The last command will prompt you to select your project type. Select NodeJS.

Next go on to add the following packages

```bash
yarn add -D ts-node
yarn add -D nodemon
yarn add -D @types/node
yarn add dotenv
yarn add express
yarn add -D @types/express
```

1. ts-node (Typescript execution)
2. nodemon (Restarting node server after changes)
3. [@types/node](http://twitter.com/types/node) (Types for Nodejs)
4. dotenv (Loads up env variables)
5. express (Web framework of choice)
6. [@types/expres](http://twitter.com/types/express) (Types for express)

Now we can start coding. Create an `index.ts` in a `src` folder and copy the following code.

```typescript
import express from "express";

let app = express();
let port = 3000;

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

And to start the application add the following scripts to `package.json` file and it will look something like

```json
{
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^17.0.13",
    "nodemon": "^2.0.15",
    "ts-node": "^10.4.0",
    "tsconfig.json": "^1.0.10",
    "typescript": "^4.5.5"
  },
  "dependencies": { "dotenv": "^14.3.2", "express": "^4.17.2" },
  "scripts": { "start": "nodemon -r dotenv/config --exec ts-node src/index.ts" }
}
```

Now in terminal hit yarn start and you’ll have a base express server up and running. You can see the working code in git history.

### Step 2: Setting up a GraphQL Server

First add all of the following packages

```bash
yarn add apollo-server
yarn add graphql@15.3.0yarn add -D @types/graphql
yarn add -D type-graphqlyarn add reflect-metadata
```

1. [apollo-server](https://www.apollographql.com/) (Apollo Server — helps you create a production ready graphql server with all the bells and whistles)
2. [graphql](https://graphql.org/) (The official graphql package)
3. [type-graphql](https://typegraphql.com/) (Helps you create graphql resolvers the typescript way)
4. [reflect-metadata](https://rbuckton.github.io/reflect-metadata/) (metadata reflection api — simply put; used for annotations)

Let’s start coding, first of all put this as the first line on `index.ts`

```typescript
import reflect-metadata;
```

This enables reflection throughout your code and now we can use annotations to enhance our graphql experience. Create a file named `graphQLServer.ts` and place the following code in it. Explanation follows

```typescript
import { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { DemoResolver } from "./resolvers/demoResolver";
export async function createApolloServer(app: Express) {
  let apolloServer = new ApolloServer({ schema: await buildSchema({ resolvers: [DemoResolver] }) });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  return apolloServer;
}
```

The `createApolloServer` initiates an apollo server and takes input the express instance to host its server on. When creating a new `ApolloServer` it takes a `buildSchema` as an input.

GraphQL works through resolvers. Resolvers work as entry points to all the queries and mutations in an API much like GET or REST in a REST API. For the moment have an empty file named demoResolver and a class named `DemoResolver` for simplicity. Also as you can see resolvers is an array and can host as many resolvers as you want.

Next outside the constructor is `apolloServer.start()` and the we apply the express middleware that we passed on.

Now in the `demoResolver.ts` you can paste the following code.

```typescript
import { Query, Resolver } from "type-graphql";
@Resolver()
export class DemoResolver {
  @Query(() => String) async hello() {
    return "hi!";
  }
}
```

Here the `type-graphql` plays a crucial role in making your graphql server maintainable. The `@Resolver()` makes the class available to the apollo server as a resolver which hosts Queries or Mutations. The function `hello()` is basic enough to understand. What really matters here is the `@Query(()=>String)` which informs the type-graphql that this query returns a `string`.

Lastly, call the `createApolloServer` method in `index.ts` file and thats it. You can see all the working code in the [git history](https://github.com/basitanwer/graphql-demo/commit/e2b712c93fd6c52b76db5da0063eae3f03be7aaf).

You can now do `yarn start` and get the server up and running. Head over to your browser and hit `<a href="http://localhost:3000/graphql">http://localhost:3000/graphql</a>` and you’ll see Apollo Server Studio where you can see all your queries and mutations listed there.

Working with apollo studio is pretty easy and intuitive. Simply select the query you want to execute and hit Run Query. You’ll see the result

![dashimage-1024x525.png](https://basitanwer.xyz/wp-content/uploads/2022/05/dashimage-1024x525.png)

### Step 3: Enhance your Resolvers

Now let’s create a Coffee Resolver that returns coffee types. To list down the things we want our resolver to provide.

1. Returns a single coffee type by id
2. Returns list of coffees
3. Updates/Inserts a Coffee object.

Let’s start by returning a coffee object by id. We’ll upgrade our resolver as we go along the way. Firstly let’s create a basic coffee model to work with.

```typescript
import axios from "axios";
/** * Coffee information from random-data-api.com */ interface CoffeeAPI {
  id: string;
  blend_name: string;
  origin: string;
  variety: string;
}

export class Coffee {
  id: number;
  blendName: string;
  origin: string;
  variety: string;

  /**
   * Randomly generates coffee object
   * @param id id to search for
   * @returns gets coffee object randomly then injects the same id.   */
  static async getById(id: number) {
    let coffee = new Coffee();
    try {
      let res = await axios.get("https://random-data-api.com/api/coffee/random_coffee");
      let json: CoffeeAPI = (await res.data) as CoffeeAPI;
      coffee.id = id;
      coffee.blendName = json.blend_name;
      coffee.origin = json.origin;
      coffee.variety = json.variety;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      return coffee;
    }
  }

  static async getList() {
    let coffees: Coffee[] = [];
    try {
      let res = await axios.get("https://random-data-api.com/api/coffee/random_coffee?size=10");
      let json: CoffeeAPI[] = (await res.data) as CoffeeAPI[];
      json.forEach((item) => {
        let coffee = new Coffee();
        coffee.id = parseInt(item.id);
        coffee.blendName = item.blend_name;
        coffee.origin = item.origin;
        coffee.variety = item.variety;
        coffees.push(coffee);
      });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      return coffees;
    }
  }

  static async updateCoffee(coffee: Coffee) {
    console.log(coffee);
    return true;
  }
}
```

The code is simple. We expose three functions `getById(id), getList(), updateCoffee(coffee)` which are pretty self explainatory. Now lets make this model available in our graphQL server. Ideally we want our resolver to return the whole Coffee object and also take it as an input. For that all we need to do is add in;

```typescript
import { Field, InputType, ObjectType } from "type-graphql";
@InputType("CoffeeInput")
@ObjectType()
export class Coffee {
    @Field()
    id: number;

    @Field()
    blendName: string;

    @Field()
    origin: string;

    @Field()
    variety: string;
    ...
}
```

Describing the annotations

1. **ObjectType** defines that this class will be used as a return object.
2. **InputType** with “CoffeeInput” defines this class will be used as an input. We added a `CoffeeInput` name when defining the input type is because graphql has a strong opinion that objects for input and output needs to be separate. So instead of duplicating the code all we did was change the name.
3. **Field** exposes the class members to the graphql object. If a member is missing that annotation, it’s not exposed. Field also have some usefull properties like `nullable` to define if the field can be null and `description` to add useful comments to the api.

Now lets add a `CoffeeResolver.ts` .

```typescript
import { Coffee } from "../model/coffee";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
@Resolver()
export class CoffeeResolver {
  @Query(() => Coffee) async getCoffee(@Arg("id") id: number) {
    return await Coffee.getById(id);
  }
  @Query(() => [Coffee]) async getListOfCoffee() {
    return await Coffee.getList();
  }
  @Mutation(() => Boolean) async updateCoffee(@Arg("coffee", () => Coffee) coffee: Coffee) {
    console.log(ctx.user);
    return await Coffee.updateCoffee(coffee);
  }
}
```

Here everything is similar to what we did before when defining a DemoResolver. The only difference here are we added a `@Mutation()` annotation and have a `[Coffee]` return type for `getListOfCoffee()` that defines this query will be returning an array of Coffee. You can now start your server and explore all the graphQL exposed apis on the apollo studio.

### Step 4: Adding context

What if we wanted to read the headers passed in the http request or you want to load and read the user every time before your code starts making db calls, for this specific reason apollo server provides a feature called Context. It builds up whenever a graphql call is made.

The code is simple, let’s create a context that loads up a dummy user every time a gql call is made so we can make decisions based on the use who made the call. First up is the User class.

```typescript
import axios from "axios";
import { Field, ObjectType, registerEnumType } from "type-graphql";
export enum Role {
  ADMIN = "ADMIN",
  VIEWER = "VIEWER",
}
@ObjectType()
export class User {
  @Field() id: string;
  @Field() name: string;
  @Field(() => Role) role: Role;
  static async createDummyUser() {
    let user = new User();
    try {
      let res = (await axios.get("https://random-data-api.com/api/users/random_user")).data as {
        first_name: string;
        id: string;
      };
      user.id = res.id;
      user.name = res.first_name;
    } finally {
      return user;
    }
  }
}
registerEnumType(Role, { name: "Role", description: "Available roles for users" });
```

There are two things to note here, first even though i did not need to define `@Field()` annotations but i did so anyway assuming at some point in future we might want to send the user information any way. So no harm in doing that. More importantly, i wanted to go through how we can also use enums in GraphQL. There are two steps to it. One is to obviously define an enum and the other is to register it specifically by

```typescript
registerEnumType(Role, { name: "Role", description: "Available roles for users" });
```

This registers the enum globally and can be seen as simple strings but accepts only these values. Now lets have a simple context interface

```typescript
import { User } from "../model/user";
import { Request, Response } from "express";
/*** Request and response is passed as is if needed.*/ export interface Context {
  req: Request;
  res: Response;
  user: User | null;
}
```

Lastly, we need to fill this context up whenever we have a graphql call and this needs to be provided when we’re creating the apollo server in our `graphQLServer.ts`

```typescript
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { DemoResolver } from "./resolvers/demoResolver";
import { User } from "./model/user";
import { Context } from "./util/context";
export async function createApolloServer(app: Express) {
  let apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [DemoResolver, CoffeeResolver],
    }),
    context: async ({ req, res }): Promise<Context> => {
      return {
        user: await User.createDummyUser(),
        req: req,
        res: res,
      };
    },
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
```

Only the `context` part is really important here. So what’s really left is to access the context in our every Query/Mutation.

```typescript
@Mutation(() => Boolean)
async updateCoffee(@Ctx() ctx: Context, @Arg("coffee", () => Coffee) coffee: Coffee) {
    console.log(ctx.user);
    return await Coffee.updateCoffee(coffee);
}
```

By just adding `@Ctx() ctx` we can access the context object everytime. This change-set can be found in the [git history](https://github.com/basitanwer/graphql-demo/commit/1604171322c4a90ab580d89496a09cfeade8d6f4).

### Step 5: Authorisation

One of the most important item or rather the necessary item to do is Authorisation & having all of that setup its really easy to do so.

Add `authChecker: authChecker` when creating your Apollo Server

```typescript
let apolloServer = new ApolloServer({
  schema: await buildSchema({
    resolvers: [DemoResolver, CoffeeResolver],
    authChecker: authChecker,
  }),
  context: async ({ req, res }): Promise<Context> => {
    return { user: await User.createDummyUser(), req: req, res: res };
  },
});
```

where the authChecker is

```typescript
const authChecker: AuthChecker<Context> = (authContext, roles) => {
  let user = authContext.context.user;
  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    return user !== null || user !== undefined;
  }

  if (!user) {
    // and if no user, restrict access
    return false;
  }

  if (roles.includes(user.role)) {
    // grant access if the roles overlap
    return true;
  }

  // no roles matched, restrict access
  return false;
};
```

The apollo Client exposes the roles as strings assigned to a method and your authChecker gets them in roles in every request. The authContext contains your context so you get the user loaded from the db every time for you to verify if it has access to those mutations. What’s left is to put authorisations on your Queries & Mutations. Fortunately this is very easy to keep track of and is done with the use of annotations `@Authorised()`.

```typescript
@Authorized() @Query(() => [Coffee]) async getListOfCoffee() {
  return await Coffee.getList();
}
@Authorized<Role>(Role.ADMIN) @Mutation(() => Boolean) async updateCoffee(
  @Ctx() ctx: Context,
  @Arg("coffee", () => Coffee) coffee: Coffee
) {
  console.log(ctx.user);
  return await Coffee.updateCoffee(coffee);
}
```

The methods annotated with just the `@Authorised` tags will just need to be authenticated whatever the roles are. If you want to be more sepecific on what type of role you want the method to be allowed to, provide `@Authorized<Role>(Role.ADMIN)` , you can also queue up multiple roles.

You can see the change-set specific to authorisations in the [git history](https://github.com/basitanwer/graphql-demo/commit/d9be7b9f3eedd5c53c4e01f8c2d461c55d7136f7).

## Conclusion

Hopefully by the end of this tutorial, you’ll have a working GraphQL server which can easily be extended to cater for more needs.
