import Image from "next/image";
import Nav from "../components/portfolio/nav";

var posts = [
  {
    title: "GraphQL vs REST",
    date: "2021-05-01",
    description: "GraphQL vs REST is something to test it out",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  },

  {
    title: "Handling State in React",
    date: "2021-05-01",
    description: "Handling State in React is something to test it out",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  },
];

export default function Blog() {
  return (
    <section className="bg-neutral-200 h-screen">
      <Nav></Nav>
      <div className=" h-[50vh] max-h-96 bg-sky-500 text-white text-5xl flex items-center justify-center">
        <div className="pb-14 font-bold">Personal Blog</div>
      </div>
      <div
        id="main-box"
        className="flex flex-col space-y-10 items-center justify-center shadow-2xl shadow-slate-700/70 border-spacing-2 rounded-lg mb-8  sm:mx-4 -mt-20 z-20 bg-white pt-20 p-4 "
      >
        <div id="articles" className="max-w-4xl">
          <div className="flex drop-shadow-3xl  p-2 rounded-lg bg-white h-full space-x-6  hover:border-2 hover:border-sky-300">
            <div className=" -mt-6 ml-4 ">
              <Image
                src="https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="asdf"
                width={360}
                height={240}
                className=" rounded-md shadow-lg shadow-slate-800/50"
              ></Image>
            </div>
            <div className="max-w-lg p-2">
              <div className="font-bold text-2xl text-slate-600">
                GraphQL Server: A Complete Guide
              </div>
              <div className="font-thin text-md text-slate-500 pt-4 ">
                GraphQL is an excellent tool to have when building APIs and saves a lot of
                development time when working in a team. The front-end can easily keep up with the
                changes the back-end engineers are making and keeps the team
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-8 pb-14">
            <div className="flex  space-x-2 justify-center sm:justify-between pt-8 rounded-lg hover:shadow-lg p-2">
              <div className="grow max-w-sm sm:max-w-lg">
                <div className="vlex flex-col basis-1/2 ">
                  <div className="font-bold text-2xl text-slate-600">
                    GraphQL Server: A Complete Guide
                  </div>
                  <div className="font-thin text-md text-slate-500 pt-4 ">
                    GraphQL is an excellent tool to have when building APIs and saves a lot of
                    development time when working in a team. The front-end can easily keep up with
                    the changes the back-end engineers are making and keeps the team
                  </div>
                </div>
              </div>
              <div className="">
                <Image
                  src="https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="asdf"
                  width={300}
                  height={200}
                  className="object-none rounded-md drop-shadow-3xl shadow-slate-800/50 "
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="fixed bg-sky-500 items-center justify-center flex flex-col text-white font-thin text-sm w-full bottom-0">
        <div className="basis-0">Made in NextJS</div>
        <div className="basis-1">Deployed on Vercel</div>
        <div className="basis-2">2022</div>
      </footer>
    </section>
  );
}
