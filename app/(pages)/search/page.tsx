"use client";

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

import IMG1 from "@/public/assets/asset-2.jpg";
import Link from "next/link";

const Search = () => {
  const HandleChange = () => {};
  return (
    <>
     <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      <main className="max-w-[90rem] p-8 border-b-2 border-primaryColor">
        <div className=" md:mx-auto flex border bg-[#ecebf382] rounded-md md:w-3/4">
          <input
            type="text"
            name="search"
            onChange={HandleChange}
            className=" p-3 h-12 bg-transparent text-sm md:text-base block outline-none w-full placeholder:text-sm"
            placeholder="Search..."
          />
          <button className=" pr-3 cursor-pointer"> Search </button>

          {/* <div className="flex border bg-[#ecebf382] rounded-md">
              <input
              type={password ? "password" : "text"}
              required
              name="password"
              className=" p-3 h-12 bg-transparent text-sm md:text-base block outline-none w-full placeholder:text-sm"
              onChange={handleInput}
              placeholder="* minimum 8 charecters"
              />
              <h1
              className="relative top-3 pr-3 cursor-pointer"
              onClick={() => setPassword(!password)}
              >
              {password ? "Show" : "Hide"}
              </h1>
            </div> */}
        </div>
      </main>

      <h1 className="text-center md:text-2xl text-base p-8">
        Browse through our popular categories
      </h1>
      <main className="max-w-[90rem] md:overflow-hidden overflow-x-scroll w-[90%] mx-auto">
        <section className="max-w-[90rem] flex gap-10">
          <Link href={"/categories/rice"}>
            <div className="w-[270px]">
              <Image src={IMG1} width={270} height={250} alt="categories" />
              <h1 className=" w-full text-whtie font-medium text-xl text-white bg-primaryColor1 p-4 text-center">
                Rice
              </h1>
            </div>
          </Link>
          <Link href={"/categories/rice"}>
            <div className="w-[270px]">
              <Image src={IMG1} width={270} height={250} alt="categories" />
              <h1 className=" w-full text-whtie font-medium text-xl text-white bg-primaryColor1 p-4 text-center">
                Rice
              </h1>
            </div>
          </Link>
          <Link href={"/categories/rice"}>
            <div className="w-[270px]">
              <Image src={IMG1} width={270} height={250} alt="categories" />
              <h1 className=" w-full text-whtie font-medium text-xl text-white bg-primaryColor1 p-4 text-center">
                Rice
              </h1>
            </div>
          </Link>
          <Link href={"/categories/rice"}>
            <div className="w-[270px]">
              <Image src={IMG1} width={270} height={250} alt="categories" />
              <h1 className=" w-full text-whtie font-medium text-xl text-white bg-primaryColor1 p-4 text-center">
                Rice
              </h1>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Search;
