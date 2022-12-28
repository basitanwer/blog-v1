import "../styles/globals.css";
import "../styles/prismjs-onedark.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import GitHubCorner from "../components/githubCorner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Basit Anwer</title>
        <meta name="description" content="If you want to know more about me ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/b.ico" />
      </Head>
      <GitHubCorner compName={Component.name} />
      <div className="relative">
        <Component {...pageProps} />
      </div>
    </>
  );
}
