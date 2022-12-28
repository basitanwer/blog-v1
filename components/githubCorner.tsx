import GithubCorner from "react-github-corner";

export default function GitHubCorner({ compName }: { compName: string }) {
  console.log(compName);
  return (
    <div className="absolute z-40">
      {compName === "Home" ? (
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
  );
}
