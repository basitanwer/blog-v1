import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/portfolio/nav";
import { getAllPosts } from "../lib/posts";

interface PostData {
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

export async function getStaticProps({ params }: Params) {
  let p = await getAllPosts();
  let posts: PostData[] = [];
  p.forEach((x) => {
    posts.push({
      title: x.data.title,
      date: x.data.date,
      description: x.data.excerpt,
      image: x.data.coverImage,
      link: x.fileName,
    });
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog(props: { posts: PostData[] }) {
  props.posts.slice(1);
  return (
    <section className="bg-neutral-200 h-screen w-screen">
      <Nav href="/" name="About Me"></Nav>
      <div className=" h-[50vh] max-h-96 bg-sky-500 text-white text-5xl flex items-center justify-center">
        <div className="pb-14 font-bold">Personal Blog</div>
      </div>
      <div
        id="main-box"
        className="flex flex-col space-y-10 items-center justify-center shadow-2xl shadow-slate-700/70 border-spacing-2 rounded-lg mb-8  sm:mx-4 -mt-20 z-20 bg-white pt-20 p-4 "
      >
        <div id="articles" className="max-w-4xl">
          <Link href={`blog/${props.posts[0].link}`}>
            <div
              id="pinned"
              className="flex drop-shadow-3xl  p-2 rounded-lg bg-white h-full space-x-6  hover:border-2 hover:border-sky-300"
            >
              <div className=" -mt-6 ml-4 ">
                <Image
                  src={props.posts[0].image}
                  alt="asdf"
                  width={360}
                  height={240}
                  className=" rounded-md shadow-lg shadow-slate-800/50"
                ></Image>
              </div>
              <div className="max-w-lg p-2">
                <div className="font-bold text-2xl text-slate-600">{props.posts[0].title}</div>
                <div className="font-thin text-md text-slate-500 pt-4 ">
                  {props.posts[0].description}
                </div>
              </div>
            </div>
          </Link>
          <div>
            {props.posts.slice(1).map((x, index) => {
              return (
                <Link key={index} href={`blog/${x.link}`}>
                  <div className="flex flex-col pt-8 pb-14">
                    <div className="flex  space-x-2 justify-center sm:justify-between pt-8 rounded-lg hover:shadow-lg p-2">
                      <div className="grow max-w-sm sm:max-w-lg">
                        <div className="vlex flex-col basis-1/2 ">
                          <div className="font-bold text-2xl text-slate-600">{x.title}</div>
                          <div className="font-thin text-md text-slate-500 pt-4 ">
                            {x.description}
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <Image
                          src={x.image}
                          alt={x.link}
                          width={300}
                          height={200}
                          className="object-none rounded-md drop-shadow-3xl shadow-slate-800/50 "
                        ></Image>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <footer className=" bg-sky-500 items-center justify-center flex flex-col text-white font-thin text-sm w-full bottom-0">
        <div className="basis-0">Made in NextJS</div>
        <div className="basis-1">Deployed on Vercel</div>
        <div className="basis-2">2022</div>
      </footer>
    </section>
  );
}
