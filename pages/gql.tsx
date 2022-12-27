import fs from "fs";
import Image from "next/image";
import { join } from "path";
import matter from "gray-matter";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { remark } from "remark";
import html from "remark-html";
import prismjs from "remark-prism";
import { FunctionComponent } from "react";
import { ScriptProps } from "next/script";
import { useEffect } from "react";

import Prism from "prismjs";

require("prismjs/components/prism-javascript");

require("prismjs/components/prism-css");

require("prismjs/components/prism-jsx");
// import "prismjs/themes/prism-twilight.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";

export async function getStaticProps({ params }: Params) {
  let fields = ["title", "date", "slug", "author", "content", "ogImage", "coverImage"];
  const fileContents = fs.readFileSync(
    "_posts/apollgraphql-server-a-complete-tutorial-8e49e44f3b52.md",
    "utf8"
  );
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(prismjs)
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  return {
    props: {
      contentHtml,
      ...matterResult.data,
    },
  };
}

interface Props {
  contentHtml: string;
  data: unknown;
  coverImage: string;
}

export default function Gql(props: Props) {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism
    };
    highlight();
  }, []);
  console.log(props.contentHtml);

  let md = props.coverImage;
  return (
    <div>
      <div className="relative  h-[50vh] max-h-96 bg-sky-500 text-white text-5xl flexitems-center justify-center">
        <Image src={md} alt="cover image" className="object-cover bg-cover" fill />
      </div>
      <div
        id="main-box"
        className="relative flex flex-col space-y-10 items-center justify-center shadow-2xl shadow-slate-700/70 border-spacing-2 rounded-lg mb-8  sm:mx-4 -mt-20  bg-white pt-20 p-4"
      >
        <article
          className="prose prose-slate prose-img:rounded-lg prose-code:font-sm"
          dangerouslySetInnerHTML={{ __html: props.contentHtml }}
        ></article>
      </div>
    </div>
  );
}
