import "../styles/globals.css";
import "../styles/prismjs-onedark.css";
import GithubCorner from "react-github-corner";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
