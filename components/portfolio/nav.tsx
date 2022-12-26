import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-transparent  sm:px-4 py-2.5 bg-fixed w-auto fixed z-20 top-0 left-0 right-0 ">
      {/* <div className="ml-auto w-min"></div> */}
      <div className="container flex flex-wrap  ml-auto w-min ">
        <div className="flex ">
          <Link
            href="/blog"
            type="button"
            className=" w-max text-sky-500 bg-white hover:border-sky-500  rounded-lg hover:shadow-lg font-normal px-5 py-2.5 text-center mr-3 md:mr-0 shadow-md"
          >
            Blog &gt;&gt;
          </Link>
        </div>
      </div>
    </nav>
  );
}
