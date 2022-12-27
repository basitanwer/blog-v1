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
      <div className="">
        <Component {...pageProps} />
        {Component.name === "Home" ? (
          <div className="z-20">
            <GithubCorner
              direction="left"
              href="https://github.com/basitanwer/blog-v1"
              bannerColor="#0ca5e9"
              octoColor="white"
            />
          </div>
        ) : (
          <div className="z-20">
            <GithubCorner
              direction="left"
              href="https://github.com/basitanwer/blog-v1"
              bannerColor="white"
              octoColor="#0ca5e9"
            />
          </div>
        )}
      </div>
    </>
  );
}
