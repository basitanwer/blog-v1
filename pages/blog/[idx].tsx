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
import Nav from "../../components/portfolio/nav";
import { getAllPosts, getPostBySlug } from "../../lib/posts";

export async function getStaticProps({ params }: Params) {
  let post = await getPostBySlug(params.idx);
  return {
    props: post,
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts(["fileName"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          idx: post.fileName,
        },
      };
    }),
    fallback: false,
  };
}

interface Props {
  contentHtml: string;
  data: {
    title: string;
    coverImage: string;
    author: {
      name: string;
    };
  };
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
  //   console.log(props.contentHtml);

  let md = props.data.coverImage;
  return (
    <div>
      <Nav href="/blog" name="Blog" />
      <div className="relative  h-[50vh] max-h-96 bg-sky-500 text-white flex justify-center items-center">
        <Image src={md} alt="cover image" className="object-cover bg-cover" fill />

        {/* <div className="flex justify-center items-center">
          <div className="text-center bg-blue-400">{props.data.title}</div>
        </div> */}
        <div className="absolute w-full h-full bg-black/50"></div>
        <div className="absolute flex flex-col justify-center items-center pb-16">
          <div className=" text-4xl text-gray-500 font-bold  text-white  text-center bg-transparent ">
            {props.data.title}
          </div>
          <div className=" text-base text-gray-500 font-thin  text-white  text-center bg-transparent">
            posted by <span className="font-semibold">{props.data.author.name}</span>
          </div>
        </div>
      </div>

      <div
        id="main-box"
        className="relative flex flex-col space-y-10 md:items-center justify-center shadow-2xl shadow-slate-700/70 border-spacing-2 rounded-lg mb-8  sm:mx-4 -mt-20  bg-white pt-8 p-4"
      >
        <div className="max-w-3xl "></div>
        <article
          className="prose prose-slate prose-img:rounded-lg prose-p:font-extralight prose-li:font-extralight  max-w-3xl prose-p:text-black prose-li:text-black"
          dangerouslySetInnerHTML={{ __html: props.contentHtml }}
        ></article>
      </div>
    </div>
  );
}
