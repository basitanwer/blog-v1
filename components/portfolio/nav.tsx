import Link from "next/link";

/**
 * @param param0 point to page
 */
export default function Nav({ href, name }: { href: string; name: string }) {
  return (
    <nav className="fixed bg-transparent  sm:px-4 py-2.5 w-auto top-0 left-0 right-0 z-10">
      {/* <div className="ml-auto w-min"></div> */}
      <div className="container flex flex-wrap  ml-auto w-min ">
        <div className="flex ">
          <Link
            href={href}
            type="button"
            className=" w-max text-sky-500 bg-white hover:border-sky-500  rounded-lg hover:shadow-lg font-normal px-5 py-2.5 text-center mr-3 md:mr-0 shadow-md"
          >
            {name} &gt;&gt;
          </Link>
        </div>
      </div>
    </nav>
  );
}
