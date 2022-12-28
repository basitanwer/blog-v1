import GithubCorner from "react-github-corner";

export default function GitHubCorner({ bgWhite }: { bgWhite: boolean }) {
  return (
    <div className="absolute z-40">
      {bgWhite ? (
        <div className="">
          <GithubCorner
            direction="left"
            href="https://github.com/basitanwer/blog-v1"
            bannerColor="white"
            octoColor="#0ca5e9"
          />
        </div>
      ) : (
        <div className="bg-transparent">
          <GithubCorner
            direction="left"
            href="https://github.com/basitanwer/blog-v1"
            bannerColor="#0ca5e9"
            octoColor="white"
          />
        </div>
      )}
    </div>
  );
}
