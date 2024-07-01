"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LuHeart, LuSearch, LuShoppingBag, LuUser } from "react-icons/lu";
import MobileNav from "./MobileNav";
import Cart from "./Cart";

const Navbar = () => {
  const pathname = usePathname();

  // Sticky navbar
  const [sticky, setSticky] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 40) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <>
      <nav className="max-w-[90rem] mx-auto bg-primaryColor1 text-white shadow-lg">
        {/* 1st menu */}

        <div className="item bg-primaryColor text-white p-2 text-center text-xs md:text-sm">
          {" "}
          <h1>
            Call to order :{" "}
            <span>
              <Link
                className="underline decoration-white underline-offset-1"
                href={"tel:09137701799"}
              >
                09137701799
              </Link>
            </span>{" "}
          </h1>
        </div>
        {/* 1st menu */}

        {/* Mobile menu */}
        <nav className=" flex justify-between border-b-2 border-gray-500 p-4">
          <nav className="day-logo flex gap-2 h-auto items-center">
            <MobileNav />

            {/* <MobileNav /> */}

            {/* Logo */}
            <Link href={"/"}>
              <Image
                priority
                src={"/logo.png"}
                width={55}
                height={50}
                alt="logo"
                className={` ${
                  sticky ? "w-[30px] " : " md:w-[65px] "
                } duration-200 hover:scale-110 `}
              />
            </Link>
          </nav>

          {/* Cart and search and saved items and account & currency */}
          <nav className="flex h-auto items-center space-x-6">
            <Link
              href={"/account"}
              className="hover:underline underline-offset-1 duration-200 hover:text-primaryColor3 decoration-primaryColor3 md:block hidden"
            >
              My Account
            </Link>
            <Link
              href={"/account"}
              className="scale-[1.4] active:scale-[1.3] hover:scale-[1.6] duration-200 md:hidden block"
            >
              <LuUser className="hover:text-primaryColor duration-200" />
            </Link>
            <Link
              href={"/saved"}
              className="scale-[1.4] active:scale-[1.3] hover:scale-[1.6] duration-200"
            >
              {" "}
              <LuHeart className="hover:text-primaryColor duration-200" />
            </Link>
            <Link
              href={"/search"}
              className="scale-[1.4] active:scale-[1.3] hover:scale-[1.6] duration-200"
            >
              {" "}
              <LuSearch className="hover:text-primaryColor duration-200" />
            </Link>
            <Cart />
          </nav>
        </nav>
        {/* Mobile menu */}
      </nav>
    </>
  );
};

export default Navbar;

// {/*  2nd menu */}
// <nav className=" py-4 px-8 h-auto items-center justify-between border-b-2 border-gray-500 md:flex hidden">
// {/* Nav links new, men, women, day series */}
// {/* <nav className="space-x-5">
//   {navLink1.map(({ name, href, key }) => (
//     <Link
//       href={href}
//       key={key}
//       className={`${
//         pathname === `${href}` ? "active" : ""
//       } hover:underline underline-offset-1 duration-200 hover:text-primaryColor decoration-primaryColor`}
//     >
//       {name}
//     </Link>
//   ))}
// </nav> */}

// {/* Logo */}
// <nav className="day-logo ">
//   <Link href={"/"}>
//     <Image
//       priority
//       src={"/logo.png"}
//       width={65}
//       height={60}
//       alt="logo"
//       className={` ${
//         sticky ? "w-[30px]" : ""
//       } duration-200 hover:scale-110`}
//     />
//   </Link>
// </nav>

// {/* Cart and search and saved items and account & currency */}
// <nav className="flex h-auto items-center space-x-6">
//   <Link
//     href={"/account"}
//     className="hover:underline underline-offset-1 duration-200 hover:text-primaryColor3 decoration-primaryColor3"
//   >
//     My Account
//   </Link>
//   <Link
//     href={"/saved"}
//     className="scale-[1.4] active:scale-[1.3] hover:scale-[1.6] duration-200"
//   >
//     {" "}
//     <LuHeart className="hover:text-primaryColor3 duration-200" />
//   </Link>
//   <Link
//     href={"/search"}
//     className="scale-[1.4] active:scale-[1.3] hover:scale-[1.6] duration-200"
//   >
//     {" "}
//     <LuSearch className="hover:text-primaryColor3 duration-200" />
//   </Link>
//   <Cart />
// </nav>
// </nav>
// {/*  2nd menu */}
