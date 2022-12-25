import Image from "next/image";
import profilePic from "../../public/basit.jpg";
import capabl from "../../public/capabl.png";
import vectara from "../../public/vectara.png";
import newTab from "../../public/newTab.svg";
import lmkr from "../../public/lmkr.png";
import ncache from "../../public/ncache.jpeg";
import ss from "../../public/ss2.png";
import linkedinPic from "../../public/linkedin.png";
import soPic from "../../public/so.png";
import Typewriter from "typewriter-effect";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

let xp = [
  {
    title: "Solution Architect",
    company: "Capabl",
    location: "USA (Remote)",
    companyLink: "https://capabl.com",
    image: "../../public/capabl.svg",
    date: "2021 - present",
    description: [
      "Designed & built an analytics SaaS product serving 1000+ database queries per second.",
      "Hired and trained Dev and QA team to build and maintain the SaaS product.",
      "Architectured the SaaS product to provide 99.9% uptime with strong reliability & resilience.",
      "Designed and built public & internal GraphQL APIs with backward compatibility.",
      "Established a minimum code coverage requirement of 90% & implemented tools to automatically track and enforce it.",
    ],
    tech: [
      "Typescript",
      "NodeJS",
      "Docker",
      "GitHub Actions",
      "Postgres",
      "Redis",
      "AWS",
      "Digital Ocean",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Vectara",
    location: "USA (Remote)",
    image: "../../public/capabl.svg",
    companyLink: "https://vectara.com/",
    date: "2020 - 2021",
    description: [
      "Startup by ExGoogle Engineers.",
      "Developed backend & frontend of the SaaS product.",
      "Designed & developed a document converter accurate up to 99% with speeds reaching up to 800+ docs/minute",
      "Created a fully automated testing solution to benchmark and test our APIs.",
    ],
    tech: ["Python", "React.js", "Protobuf", "Java", "JavaScript"],
  },
  {
    title: "Team Lead",
    company: "LMKR / Halliburton",
    location: "Pakistan (Hybrid)",
    image: "../../public/capabl.svg",
    companyLink: "https://www.lmkr.com/",
    date: "2019 - 2020",
    description: [
      "Maintained and improved the company's SDK exposed for external and internal use within the suite of products.",
      "Overhauled legacy deployments into CI/CD methodology.",
      "Improved the DevOps process and implemented various methodologies to make deployment and testing faster. ",
      "Oversaw the WFH transition when COVID-19 struck. This included the whole deployment process and how technology was deeply involved throughout the company.",
    ],
    tech: ["DirectX", "Microsoft Azure", "Python", "C++", "C#", ".NET"],
  },
  {
    title: "Application Architect",
    company: "LMKR / Halliburton",
    location: "Pakistan (Islamabad)",
    image: "../../public/capabl.svg",
    companyLink: "https://www.lmkr.com/",
    date: "2017 - 2019",
    description: [
      "Improved application performance by 200% by performing refactoring & architectural changes.",
      "Overhauled legacy deployments into CI/CD methodology.",
      "Reduced cloud costs by analysing usage in Azure by 60%.",
      "Programmed GPU shaders in C in an in-house built 3D engine for modelling terrain.",
    ],
    tech: ["DirectX", "C++", "C#", ".NET", "WPF", "Telerik"],
  },
  {
    title: "Solution Architect",
    company: "Alachisoft (NCache)",
    location: "Pakistan (Islamabad)",
    image: "../../public/capabl.svg",
    companyLink: "https://www.alachisoft.com/",
    date: "2015 - 2017",
    description: [
      "Introduced MapReduce in NCache as a distributed computing framework.",
      "Part of a team developing a NoSQL database.",
      "I paired up with the marketing team to double customer feedback & input.",
    ],
    tech: ["NoSQL", "Distributed Computing", "Python", "Protobuf", "Redis", "Java", "C#", ".NET"],
  },
  {
    title: "CoFounder",
    company: "SocialSynopsis",
    location: "Pakistan (Islamabad)",
    image: "../../public/capabl.svg",
    companyLink: "https://basitanwer.xyz",
    date: "2013 - 2016",
    description: [
      "Built a Data/ML pipeline that sifts through 100 million tweets & Facebook posts to provide business intelligence reports.",
      "Increased user retention by 2x by engaging customers & updating the dashboard UX.",
      "Automated machine provisioning in AWS using SDK.",
    ],
    tech: ["Node.js", "Python", "Java", "Redis", "MySQL", "Linux", "HTML", "CSS"],
  },
  {
    title: "Team Lead",
    company: "Alachisoft (NCache)",
    location: "Pakistan (Islamabad)",
    image: "../../public/capabl.svg",
    companyLink: "https://www.alachisoft.com/",
    date: "2009 - 2013",
    description: [
      "Major improvements in JGroups Cluster algorithm to split-brain problems and fixed 5 major clustering issues.",
      "Implemented SQL queries & indexes on a Key-Value store.",
      "Improved performance of NCache by 20%.",
    ],
    tech: ["Distributed Computing", "Protobuf", "Java", "C#", ".NET", "C++"],
  },
];

let imps = [capabl, vectara, lmkr, lmkr, ncache, ss, ncache];

export default function XP() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center items-center overflow-hidden bg-slate-100 py-6 sm:py-12 font-sans font-light text-lg">
      <div>
        <RoughNotation
          type="highlight"
          color="#fff36c"
          multiline={true}
          animationDelay={4000}
          iterations={2}
          show={true}
        >
          <h1 className="text-6xl font-extrabold text-sky-900">Experience</h1>
        </RoughNotation>
      </div>
      <div className="w-full">
        <div className="font-extralight">
          <VerticalTimeline layout="1-column-left" className=" ">
            {xp.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="drop-shadow-md"
                contentStyle={{ background: "white", color: "black" }}
                date={item.date}
                iconStyle={{ background: "#0c4a6e", color: "#fff" }}
                icon={
                  <Image
                    src={imps[index]}
                    alt="pic"
                    className="relative rounded-full overflow-hidden"
                  />
                }
              >
                <h3 className="text-xl font-bold text-sky-500">{item.title}</h3>
                <h4 className="text-xl font-bold text-slate-500">
                  <Link href={item.companyLink} target={"_blank"} passHref>
                    {item.company}
                    <Image src={newTab} alt="opens in new tab" className="w-2 inline -mt-2 mx-1" />
                  </Link>
                </h4>
                <div className="text-sm ">{item.location}</div>
                <ul className="pt-4 pl-6 list-disc list-outside text-base text-slate-700">
                  {item.description.map((desc, index) => (
                    <li key={index}>{item.description[index]}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap justify-start gap-2 pt-4 ">
                  {item.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-full text-black bg-sky-100 font-light text-xs flex align-center w-max border-2 border-sky-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}
