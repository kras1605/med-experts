import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const NotFound = () => {
  return (
    <section className="flex items-center h-full min-h-screen">
      <div className="container flex flex-col items-center justify-center px-5 my-8">
        <div className="max-w-md text-center">
          
          <h2 className="mb-8 font-extrabold text-6xl md:text-7xl lg:text-8xl ">
            <span className="sr-only">Error</span>404
          </h2>

          <h6 className="text-xl md:text-2xl lg:text-3xl mb-4 !leading-snug !tracking-wider font-semibold">
            Sorry, we <span className="uppercase text-main-main font-bold">couldn't find</span> this page.
          </h6>

          <p className="mt-4 mb-8 !leading-snug text-base max-w-[80%] mx-auto">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <Link href="/">
          <button className="inline-flex tracking-wider items-center cursor-pointer group uppercase align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full bg-text-main hover:bg-transparent border-2 border-text-main hover:text-text-main text-white outline-none font-bold">
           back to homepage <HiOutlineArrowLongRight className="w-[18px] h-[18px] ml-2 group-hover:ml-4 transition-all"/>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
