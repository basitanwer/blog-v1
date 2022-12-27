import { Inter } from "@next/font/google";
import Head from "next/head";
import XP from "../components/portfolio/experience";
import Intro from "../components/portfolio/intro";
import Me from "../components/portfolio/me";
import Nav from "../components/portfolio/nav";
import Volunteer from "../components/portfolio/volunterring";

// import { Avatar } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <main>
        <Nav href="/blog" name="Blog" />
        <Intro />
        <Me />
        <XP />
        <Volunteer />
        <footer className="bg-sky-500 items-center justify-center flex flex-col text-white font-thin text-sm">
          <div className="basis-0">Made in NextJS</div>
          <div className="basis-1">Deployed on Vercel</div>
          <div className="basis-2">2022</div>
        </footer>
      </main>
    </>
  );
}
