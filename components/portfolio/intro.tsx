import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import Typewriter from "typewriter-effect";
import profilePic from "../../public/basit.jpg";
import githubPic from "../../public/github.png";
import linkedinPic from "../../public/linkedin.png";
import soPic from "../../public/so.png";
import toptal from "../../public/toptal.svg";

export default function Intro() {
  return (
    <div className="flex min-h-screen flex-col justify-center overflow-hidden bg-white py-6 sm:py-12 font-sans font-light text-lg">
      <div className=" border-sky-500 bg-white px-6 pt-10 pb-8 shadow-xl drop-shadow-2xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-3xl sm:border-2 sm:px-10">
        <div className="flex-col ">
          <div className="flex items-center grayscale">
            <Image
              src={profilePic}
              className="w-40 h-40 object-cover rounded-full basis-0 "
              alt="Tailwind Play"
            />
          </div>
          <div className="divide-y divide-gray-light">
            <div className="space-y-6 py-8 leading-7 ">
              Hi, My name is
              <h1 className="text-6xl font-extrabold text-sky-500 -ml-1 ">Basit Anwer</h1>
              <div className="text-3xl font-extralight w-fit ">
                <RoughNotation
                  strokeWidth={6}
                  type="highlight"
                  color="#fff36c"
                  animationDelay={1000}
                  iterations={1}
                  show={true}
                >
                  <div className="">I love building software products</div>
                </RoughNotation>
              </div>
              <div>
                I&rsquo;m a software engineer and building software products is my jam! Whether
                it&rsquo;s for a startup or a big fancy enterprise, I love taking on the challenge
                of creating solutions that tackle real-world problems.
              </div>
              <div>
                I have the experience of building
                <span className="inline-block mx-1">
                  <Typewriter
                    options={{
                      deleteSpeed: 10,
                      delay: 100,
                      strings: [
                        "BI SaaS products",
                        "Admin Dashboards",
                        "Shopify Apps",
                        "Web Apps",
                        "Distributed Systems",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center pt-4">
              @ me on
              <Link href="https://www.linkedin.com/in/basitanwer/" target={"_blank"} passHref>
                <Image src={linkedinPic} alt="Linkedin" className="mx-2 saturate-0 w-6 h-6" />
              </Link>
              <Link href="https://github.com/basitanwer" target={"_blank"} passHref>
                <Image src={githubPic} alt="GitHub" className="mx-2 saturate-0 w-6 h-6" />
              </Link>
              <Link
                href="https://stackoverflow.com/users/364274/basit-anwer"
                target={"_blank"}
                passHref
              >
                <Image src={soPic} alt="StackOverflow" className="mx-2 saturate-0 w-6 h-6" />
              </Link>
              <Link href="https://www.toptal.com/resume/basit-anwer" target={"_blank"} passHref>
                <Image src={toptal} alt="Toptal" className="mx-2 saturate-0 w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
