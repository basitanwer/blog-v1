import Head from "next/head";
import { Inter } from "@next/font/google";
import Intro from "../components/portfolio/intro";
import Me from "../components/portfolio/me";

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
        <Intro />
        <Me />
        <div className="min-h-screen bg-white"></div>
      </main>
    </>
  );
}
