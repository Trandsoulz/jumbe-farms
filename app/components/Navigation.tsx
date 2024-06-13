"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Navigation = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  console.log(pathname);

  const navigation = [
    { key: 1, href: "/account", nav: "Account" },
    { key: 2, href: "/orders", nav: "Orders" },
    { key: 3, href: "/saved", nav: "Saved" },
  ];
  return (
    <>
      <section className="lg:flex lg:gap-4 md:px-5 px-0 py-5 max-w-[90rem] mx-auto">
        <main className=" lg:block hidden md:w-[15%]">
          <nav className="bg-primaryColor1 text-white py-6 text-center space-y-6">
            {navigation.map(({ key, nav, href }) => (
              <>
                <Link
                  href={href}
                  className={`${
                    pathname === `${href}`
                      ? " border-white border-2 text-white "
                      : ""
                  } h-auto py-5 px-11 duration-200 flex items-center hover:border-2 font-medium gap-2 hover:border-white mx-5 text-center`}
                  key={key}
                >
                  {nav}
                </Link>
              </>
            ))}
          </nav>
        </main>

        <main className="w-full lg:w-[85%]">{children}</main>
      </section>
    </>
  );
};

export default Navigation;
