import Image from "next/image";
import icfj from "../../public/icfj.jpeg";
import hh from "../../public/hh.jpeg";
import hrcp from "../../public/hrcp.jpeg";
import cfp from "../../public/cfp.png";
import coursera from "../../public/coursera.jpeg";
import newTab from "../../public/newTab.svg";

import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

let volunteer = [
  {
    title: "Product Lead",
    company: "International Center for Journalists (ICFJ)",
    location: "Remote",
    companyLink: "https://www.icfj.org",
    image: "../../public/icfj.jpeg",
    date: "2020 - 2021",
    description: [
      "'Shikari' is a SaaS product that removes Twitter bots from hashtags using machine learning. Challenges Fake news.",
    ],
    tech: ["Django", "Python", "Docker", "AWS", "ML", "Redis"],
  },
  {
    title: "Data Engineer",
    company: "International Center for Journalists (ICFJ)",
    location: "Remote",
    companyLink: "https://www.dawn.com/in-depth/spam-sms",
    image: "../../public/icfj.jpeg",
    date: "2020 - 2021",
    description: [
      "https://www.dawn.com/in-depth/spam-sms",
      "Your price tag has a number , a data-based report published by DAWN about how spam SMS messages thrive in Pakistan.",
    ],
    tech: ["Django", "Python", "Docker", "AWS", "ML", "Redis"],
  },
  {
    title: "Data Engineer",
    company: "Human Rights Commission of Pakistan",
    location: "Remote",
    image: "../../public/humanrights.jpeg",
    companyLink: "https://hrcp-web.org/hrcpweb/",
    date: "2018 - 2019",
    description: [
      "Categorizing Human rights violations in rural areas using data science with FIR cases.",
    ],
    tech: ["Python", "Microsoft Azure"],
  },
  {
    title: "President",
    company: "Hacks/Hackers Islamabad",
    location: "Pakistan (Islamabad)",
    image: "../../public/hh.jpeg",
    companyLink: "https://www.hackshackers.com",
    date: "2017 - 2019",
    description: [
      "'International community Hacks' (journalists) and 'hackers' (technologists) work together to create physical and digital spaces for exploring new ways to tell stories.",
    ],
    tech: ["Python", "Javascript"],
  },
  {
    title: "Software Engineer",
    company: "Civic Hackathon (Awaaz)",
    location: "Pakistan (Islamabad)",
    image: "../../public/cfp.png",
    companyLink: "https://codeforpakistan.org",
    date: "2015 - 2017",
    description: [
      "Awaaz is all about giving voice to the under-represented issues in the Pakistani community through social media data analysis and data visualizations",
    ],
    tech: ["MySQL", "Python", "Javascript", "Redis", "Java"],
  },
];

let imps = [icfj, icfj, hrcp, hh, cfp];

let certs = [
  {
    title: "AWS Fundementals Specialization",
    company: "Coursera",
    location: "",
    companyLink:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/TDAB7238DQU4",
    image: "",
    date: "2021",
    description: ["Certificate ID: TDAB7238DQU4"],
    tech: [],
  },
  {
    title: "AWS Fundamentals: Addressing Security Risk",
    company: "Coursera",
    location: "",
    companyLink: "https://www.coursera.org/account/accomplishments/certificate/VYZUXHMDEUEF",
    image: "",
    date: "2021",
    description: ["Certificate ID: VYZUXHMDEUEF"],
    tech: [],
  },
  {
    title: "AWS Fundamentals: Building Serverless Applications",
    company: "Coursera",
    location: "",
    companyLink: "https://www.coursera.org/account/accomplishments/certificate/CRAFGMRHDY9P",
    image: "",
    date: "2021",
    description: ["Certificate ID: CRAFGMRHDY9P"],
    tech: [],
  },
  {
    title: "AWS Fundamentals: Migrating to the Cloud",
    company: "Coursera",
    location: "",
    companyLink: "https://www.coursera.org/account/accomplishments/certificate/6UJY8WKVVJ5Q",
    image: "",
    date: "2021",
    description: ["Certificate ID: 6UJY8WKVVJ5Q"],
    tech: [],
  },
  {
    title: "AWS Fundamentals: Going Cloud-Native",
    company: "Coursera",
    location: "",
    companyLink: "https://www.coursera.org/account/accomplishments/certificate/YK2B53TFZBH7",
    image: "",
    date: "2021",
    description: ["Certificate ID: YK2B53TFZBH7"],
    tech: [],
  },
  {
    title: "Machine Learning",
    company: "Coursera",
    location: "",
    companyLink: "https://www.coursera.org/account/accomplishments/verify/3PT7DLMPRBH6",
    image: "",
    date: "2019",
    description: ["Certificate ID: 3PT7DLMPRBH6"],
    tech: [],
  },
  {
    title: "Text Mining and Analytics",
    company: "Coursera",
    location: "",
    companyLink: "https://www.coursera.org/account/accomplishments/verify/GAC5TD8AU4BK",
    image: "",
    date: "2016",
    description: ["Certificate ID: GAC5TD8AU4BK"],
    tech: [],
  },
  {
    title: "Text Retrieval and Search Engines",
    company: "Coursera",
    location: "",
    companyLink: "https://www.coursera.org/account/accomplishments/verify/YS2HM5ZSJ7GS",
    image: "",
    date: "2021",
    description: ["Certificate ID: YS2HM5ZSJ7GS"],
    tech: [],
  },
];

let impsCerts = Array(8).fill(coursera);

export default function Volunteer() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center items-center overflow-hidden bg-slate-100 py-6 sm:py-12 font-sans font-light text-lg ">
      <div className="flex-row sm:flex base-2 sm:space-x-6 sm:p-8">
        <div className="font-extralight p-2 basis-1/2 ">
          <div className="w-min mr-auto">
            <RoughNotation
              type="highlight"
              color="#fff36c"
              multiline={true}
              animationDelay={4000}
              iterations={1}
              show={true}
            >
              <h1 className="text-5xl font-extrabold text-sky-900">Volunteer</h1>
            </RoughNotation>
          </div>
          <div className="flex-col space-y-4 ">
            {volunteer.map((item, index) => (
              <div
                key={index}
                className="border-2 border-sky-500 rounded-lg bg-white pt-2 pl-2 pb-2 mt-4 shadow-md"
              >
                <div className="font-semibold text-slate-500 ml-2 text-sm ">{item.date}</div>
                <div className="font-bold text-sky-500 mt-2 ml-2 text-lg">
                  <Link href={item.companyLink} target={"_blank"} passHref>
                    {item.company}
                    <Image src={newTab} alt="opens in new tab" className="w-2 inline -mt-2 mx-1" />
                  </Link>
                </div>
                <div className="font-semibold text-slate-500 ml-2 text-sm ">{item.title}</div>
                <ul className="pt-4 pl-6 pr-2 list-disc list-outside text-base text-slate-700">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
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
              </div>
            ))}
          </div>
        </div>
        <div className="font-extralight p-2 basis-1/2 ">
          <div className="w-min sm:ml-auto ">
            <RoughNotation
              type="highlight"
              color="#fff36c"
              multiline={true}
              animationDelay={5000}
              iterations={2}
              show={true}
            >
              <h1 className="text-5xl font-extrabold text-sky-900">Certification</h1>
            </RoughNotation>
          </div>
          <div className="flex-col space-y-4 ">
            {certs.map((item, index) => (
              <div
                key={index}
                className="border-2 border-sky-500 rounded-lg bg-white pt-2 pl-2 pb-2 mt-4 shadow-md"
              >
                <div className="font-semibold text-slate-500 ml-2 text-sm ">{item.date}</div>
                <div className="font-bold text-sky-500 mt-2 ml-2 text-lg">
                  <Link href={item.companyLink} target={"_blank"} passHref>
                    {item.title}
                    <Image src={newTab} alt="opens in new tab" className="w-2 inline -mt-2 mx-1" />
                  </Link>
                </div>
                <div className="font-semibold text-slate-500 ml-2 text-sm ">{item.company}</div>
                <ul className="pt-4 pl-6 list-disc list-outside text-base text-slate-700">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
