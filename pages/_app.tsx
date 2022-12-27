import "../styles/globals.css";
import "../styles/prismjs-onedark.css";
import GithubCorner from "react-github-corner";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Basit Anwer</title>
        <meta name="description" content="If you want to know more about me ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/b.ico" />
      </Head>
      <div className="absolute z-40">
        {Component.name === "Home" ? (
          <div className="bg-transparent">
            <GithubCorner
              direction="left"
              href="https://github.com/basitanwer/blog-v1"
              bannerColor="#0ca5e9"
              octoColor="white"
            />
          </div>
        ) : (
          <div className="">
            <GithubCorner
              direction="left"
              href="https://github.com/basitanwer/blog-v1"
              bannerColor="white"
              octoColor="#0ca5e9"
            />
          </div>
        )}
      </div>
      <div className="relative">
        <Component {...pageProps} />
        {/* <div>asdfasdfasdfasdfas</div> */}
      </div>
    </>
  );
}
