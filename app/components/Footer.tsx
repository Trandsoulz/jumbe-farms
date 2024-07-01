"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";

type FooterType = {
  link: string;
  name: string;
  key: number;
}[];

const Footer = () => {
  const [email, setEmail] = useState<string>("");

  const footerLinks: FooterType = [
    {
      link: "/",
      name: "Home",
      key: 0,
    },
    {
      link: "/",
      name: "Our Story",
      key: 1,
    },
  ];

  const footerLinks1: FooterType = [
    {
      link: "#",
      name: "Shipping & policies",
      key: 0,
    },
    {
      link: "#",
      name: "Terms & Conditions",
      key: 1,
    },
  ];

  //   Handle newslettter subscrition email
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //   Handle the submit
  const handleSubmit = async () => {
    console.log(email, "SUBMITTED");
  };

  return (
    <>
      <footer className="">
        <section className="flex lg:flex-row flex-col-reverse gap-8 lg:gap-0">
          <div className="w-full lg:w-[65%] px-0 gap-10 lg:px-16 flex lg:flex-row flex-col lg:gap-20">
            <div className=" space-y-2 lg:space-y-5">
              <h1 className="text-lg font-semibold text-primaryColor">
                Information
              </h1>

              <div className="space-y-2 flex flex-col ">
                {footerLinks.map(({ key, link, name }) => (
                  <Link
                    href={link}
                    className="hover:font-semibold duration-200 inline-block text-base md:text-lg"
                    key={key}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <div className=" space-y-2 lg:space-y-5">
              <h1 className="text-lg font-semibold text-primaryColor">Legal</h1>

              <div className="space-y-2 flex flex-col">
                {footerLinks1.map(({ key, link, name }) => (
                  <Link
                    href={link}
                    className="hover:font-semibold duration-200 inline-block text-base md:text-lg"
                    key={key}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <div className=" space-y-2 lg:space-y-5">
              <h1 className="text-lg font-semibold text-primaryColor">
                Office
              </h1>

              <div className="space-y-2 flex flex-col">
                <h1 className="duration-200 inline-block text-base md:text-lg">
                  <span>Nigeria:</span> Rivers, Port Harcourt{" "}
                  <span className="font-semibold">
                    <Link href={"tel:+2347088405410"}>+23481234567</Link>
                  </span>
                </h1>
                <h1 className="duration-200 inline-block text-base md:text-lg">
                  <span>Nigeria:</span> Lagos, Lekki{" "}
                  <span className="font-semibold">
                    <Link href={"tel:+23481234590"}>+23481234590 </Link>
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[35%]">
            <h1 className="text-xl font-semibold text-primaryColor ">
              Subscribe to our newsletter
            </h1>
            <p>Stay upto date with the latest from Jumbo Farms</p>

            <div className=" w-[86%] mt-4">
              <div className="flex border bg-[#ecebf382]">
                <input
                  type="email"
                  required
                  name="email"
                  className=" p-3 h-12 bg-transparent text-sm md:text-base block outline-none w-full placeholder:text-sm"
                  onChange={handleInput}
                  placeholder="*Enter Email"
                />
                <h1
                  className="relative top-3 pr-5 cursor-pointer"
                  onClick={handleSubmit}
                >
                  <VscSend className="relative top-1 scale-150 active:scale-[1.3] duration-200" />
                </h1>
              </div>
            </div>

            <p className="text-xs mt-2 w-[85%]">
              By providing your email address, you agree to our{" "}
              <Link href={"/"} className="underline">
                {" "}
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href={"/"} className="underline">
                Terms of Service
              </Link>{" "}
              .
            </p>
          </div>
        </section>

        <section className=" mt-6 pt-1 md:pt-5 border-t-2 border-black md:px-[3.7rem]">
          <h1 className=" text-base md:text-xl">
            Payment method we accept{" "}
            <span className="pl-4 inline-flex space-x-4">
              <FaCcVisa className="payment-style" />{" "}
              <FaCcMastercard className="payment-style" />
            </span>
          </h1>
        </section>

        <section className="text-center md:pt-9 pt-5 md:pb-2 pb-4 flex md:flex-row flex-col-reverse md:justify-between items-center gap-2 md:space-y-0 md:px-[3.7rem]">
          <p>© {new Date().getFullYear()} jumbofoods</p>

          <div className="flex gap-5">
            <Link
              target="_blank"
              rel="noreferrer"
              href={"https://www.facebook.com/"}
            >
              <FaFacebook className="footer-icons" />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={"https://twitter.com/"}
            >
              <FaXTwitter className="footer-icons" />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={"https://www.instagram.com/"}
            >
              <FaInstagram className="footer-icons" />
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={"https://www.instagram.com/"}
            >
              <FaWhatsapp className="footer-icons" />
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
