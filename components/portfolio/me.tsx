import Image from "next/image";
import profilePic from "../../public/basit.jpg";
import githubPic from "../../public/github.png";
import linkedinPic from "../../public/linkedin.png";
import soPic from "../../public/so.png";
import Typewriter from "typewriter-effect";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

let skills = [
  {
    name: "Javascript",
    icon: "devicon-javascript-plain",
  },
  {
    name: "Typescript",
    icon: "devicon-typescript-plain",
  },
  {
    name: "NodeJS",
    icon: "devicon-nodejs-plain",
  },
  {
    name: "ReactJS",
    icon: "devicon-react-plain",
  },
  {
    name: "TailwindCSS",
    icon: "devicon-tailwindcss-plain",
  },
  {
    name: "NextJS",
    icon: "devicon-nextjs-plain",
  },
  {
    name: "GraphQL",
    icon: "devicon-graphql-plain",
  },
  {
    name: "Python",
    icon: "devicon-python-plain",
  },
  {
    name: "AWS",
    icon: "devicon-amazonwebservices-plain",
  },
  {
    name: "Docker",
    icon: "devicon-docker-plain",
  },
  {
    name: "DigitalOcean",
    icon: "devicon-digitalocean-plain",
  },
  {
    name: "Django",
    icon: "devicon-django-plain",
  },
  {
    name: ".Net",
    icon: "devicon-dotnetcore-plain",
  },
  {
    name: "Java",
    icon: "devicon-java-plain",
  },
  {
    name: "Linux",
    icon: "devicon-linux-plain",
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain",
  },
  {
    name: "MySQL",
    icon: "devicon-mysql-plain",
  },
  {
    name: "PostgreSQL",
    icon: "devicon-postgresql-plain",
  },
  {
    name: "Redis",
    icon: "devicon-redis-plain",
  },
];

export default function Me() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-sky-600 py-6 sm:py-12 text-white font-ligh text-lg">
      <div className="relative border-white bg-sky-600 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:border-2 sm:px-12">
        <div className="flex-col ">
          <div className="divide-y divide-gray-light">
            <div className="space-y-6 py-8 leading-7 text-gray-600 text-justify break-before-avoid">
              <h1 className="text-6xl font-extrabold text-white">About Me</h1>
              {/* <h2 className="text-3xl font-extralight">I love building software products</h2> */}
              <div className="">
                Hello, my name is Basit Anwer and I am a software engineer with over 13 years of
                experience. I started my career back in 2009 and never looked back on programming.
              </div>
              <div className=" inline-block">
                Fast forward today, i have had the privilege of working with some of the best minds
                in the industry and have been able to build some amazing products. I have worked
                on&nbsp;
                <div className="inline font-bold">
                  <RoughNotation
                    type="box"
                    color="white"
                    multiline={true}
                    animationDelay={4000}
                    iterations={2}
                    show={true}
                  >
                    Distributed Caches, Oil & Gas Industry, E-Commerce, SaaS products.{" "}
                  </RoughNotation>
                </div>
              </div>
              <div className="text-white">
                My recent experience was designing, building and leading a team to build a SaaS
                product from the ground up. The product is successfully serving a 1000 queries a
                second to every customer. I also hired and trained a team of 5 engineers to maintain
                the product.
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-4 ">
              {skills.map((skill) => (
                <div key={skill.name} className="text-center skills-tile">
                  <i className={"text-2xl " + skill.icon}></i>
                  <p className="font-extralight text-xs">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
