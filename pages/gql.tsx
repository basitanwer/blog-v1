import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import { useEffect } from "react";

import Prism from "prismjs";

require("prismjs/components/prism-javascript");

require("prismjs/components/prism-css");

require("prismjs/components/prism-jsx");

// import "prismjs/themes/prism-twilight.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import { RoughNotation } from "react-rough-notation";
import { getPostBySlug } from "../lib/posts";

export async function getStaticProps({ params }: Params) {
  let post = await getPostBySlug("asdf");
  return {
    props: post,
  };
}

interface Props {
  contentHtml: string;
  data: unknown;
  coverImage: string;
  title: string;
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
        className="relative flex flex-col space-y-10 md:items-center justify-center shadow-2xl shadow-slate-700/70 border-spacing-2 rounded-lg mb-8  sm:mx-4 -mt-20  bg-white pt-20 p-4"
      >
        <div className="max-w-3xl ">
          <RoughNotation
            strokeWidth={6}
            type="highlight"
            color="#fff36c"
            animationDelay={1000}
            iterations={1}
            show={true}
            multiline={true}
          >
            <div className="relative text-5xl text-gray-500 font-bold max-w-3xl ">
              {props.title}
            </div>
          </RoughNotation>
        </div>
        <article
          className="prose prose-slate prose-img:rounded-lg  max-w-3xl"
          dangerouslySetInnerHTML={{ __html: props.contentHtml }}
        ></article>
      </div>
    </div>
  );
}
