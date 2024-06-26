"use client";

import { deleteCookie, getCookie } from "cookies-next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoPowerOutline } from "react-icons/io5";
const Navigation = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { key: 1, href: "/account", nav: "Account" },
    // { key: 2, href: "/cart", nav: "Cart" },
    { key: 3, href: "/orders", nav: "Orders" },
    { key: 4, href: "/saved", nav: "Saved" },
  ];

  const cookie = getCookie("x-auth-token");

  const LogOut = () => {
    deleteCookie("x-auth-token");
    router.refresh();
  };

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <section className="lg:flex lg:gap-4 md:px-5 px-0 py-5 max-w-[90rem] mx-auto">
        <main className=" lg:block hidden md:w-[15%]">
          <nav className="bg-primaryColor1 text-white py-6 text-center space-y-6">
            {navigation.map(({ key, nav, href }) => (
              <Link
                href={href}
                className={`${
                  pathname === `${href}`
                    ? " border-white border-2 text-white "
                    : ""
                } h-auto py-5 px-11 duration-200 flex items-center border-primaryColor1 border-2 font-medium gap-2 hover:border-white mx-5`}
                key={key}
              >
                {nav}
              </Link>
            ))}

            {domLoaded && cookie ? (
              <button
                onClick={LogOut}
                className={`h-auto py-5 px-11 duration-200 flex items-center border-transparent border-2 font-medium gap-2 hover:border-white mx-5 text-center`}
              >
                LogOut
              </button>
            ) : (
              <Link
                href={"/login"}
                className="`h-auto py-5 px-11 duration-200 flex items-center border-primaryColor1 border-2 font-medium gap-2 hover:border-white mx-5 text-cente"
              >
                Login
              </Link>
            )}
          </nav>
        </main>

        <main className="w-full lg:w-[85%]">{children}</main>
      </section>
    </>
  );
};

export default Navigation;
