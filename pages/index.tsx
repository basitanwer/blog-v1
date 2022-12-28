import { Inter } from "@next/font/google";
import Head from "next/head";
import Script from "next/script";
import GitHubCorner from "../components/githubCorner";
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
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></Script>
      <Script id="gscript">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
      </Script>

      <Head>
        <title>Basit Anwer</title>
        <meta name="description" content="If you want to know more about me ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/b.ico" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <main>
        <GitHubCorner bgWhite={false} />
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
