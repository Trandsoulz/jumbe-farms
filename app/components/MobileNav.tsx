"use client";

import Image from "next/image";
import { LuAlignJustify, LuUser } from "react-icons/lu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { MdOutlineFavoriteBorder, MdOutlineHome } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPowerOutline } from "react-icons/io5";
import { deleteCookie, getCookie } from "cookies-next";

type NavLinks = { key: number; nav: string; href: string; Icon: IconType }[];

const MobileNav = () => {
  const cookie = getCookie("x-auth-token");

  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const openLinks: NavLinks = [
    {
      key: 1,
      nav: "Home",
      href: "/",
      Icon: MdOutlineHome,
    },
    {
      key: 2,
      nav: "Categories",
      href: "/categories",
      Icon: BiCategoryAlt,
    },
    {
      key: 3,
      nav: "Saved",
      href: "/saved",
      Icon: MdOutlineFavoriteBorder,
    },
    {
      key: 4,
      nav: "Orders",
      href: "/orders",
      Icon: MdOutlineShoppingCart,
    },
    // {
    //   key: 5,
    //   nav: "Vouchers",
    //   href: "/vouchers",
    //   Icon: RxIdCard,
    // },
    // {
    //   key: 6,
    //   nav: "Help Center",
    //   href: "/help-center",
    //   Icon: RxIdCard,
    // },
    // {
    //   key: 7,
    //   nav: "Address Book",
    //   href: "/address",
    //   Icon: FaRegAddressCard,
    // },
    {
      key: 8,
      nav: "My account",
      href: "/account",
      Icon: LuUser,
    },
  ];

  const LogOut = () => {
    deleteCookie("x-auth-token");
    // router.refresh();
    window.location.reload();
  };

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <main className="md:hidden block">
      {/* Navigation bar on mobile device */}
      <LuAlignJustify
        className="scale-[1.4] active:scale-[1.3] hover:scale-[1.6] duration-200 hover:cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      <section
        className={`${
          open ? "w-full" : " w-0"
        } duration-300 fixed top-0 bottom-0 left-0 bg-transparent/30 backdrop-blur-[2px] z-30 lg:hidden flex`}
      >
        <div
          className={`${
            open ? "px-8" : ""
          } w-[80%] duration-300 bg-primaryColor1 h-full overflow-y-auto`}
        >
          <div className={`${open ? "block" : "hidden duration-400"} py-8`}>
            <Image
              priority
              src={"/logo.png"}
              width={80}
              height={100}
              alt="logo"
              className="relative right-2"
            />
          </div>

          {/* Navbar content */}
          <div className={`${open ? "block" : "hidden duration-400"}`}>
            {/* LINKS */}
            <div className="flex flex-col space-y-3 text-left mb-10">
              {openLinks.map(({ href, nav, key, Icon }) => (
                <Link
                  href={href}
                  key={key}
                  className={` ${
                    pathname === `${href}` ? " border-primaryColor" : ""
                  }  border-2 py-4 px-2 active:scale-90 duration-200`}
                >
                  <Icon className="hover:text-inherit inline-flex text-2xl relative bottom-[2px] mr-1" />{" "}
                  {nav}
                </Link>
              ))}
            </div>
            {/* LINKS */}
          </div>

          <div>
            {domLoaded && cookie && (
              <button
                onClick={LogOut}
                className={`border-2 w-full py-4 px-2 active:scale-90 duration-200`}
              >
                <IoPowerOutline className="hover:text-inherit inline-flex text-2xl relative bottom-[2px] mr-1" />{" "}
                LogOut
              </button>
            )}
          </div>
        </div>

        {/* Close button */}
        <div
          className={`w-[20%] duration-300 h-screen`}
          onClick={() => setOpen(!open)}
        ></div>
      </section>
    </main>
  );
};
export default MobileNav;
