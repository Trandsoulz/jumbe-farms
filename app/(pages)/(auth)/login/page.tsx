"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

const Login = () => {
  const [password, setPassword] = useState(false);

  const handleInput = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form has been submitted. Check your email");
  };

  return (
    <>
      {/* Navigation panel */}
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      <main className="max-w-[90rem] w-[90%] md:w-[80%] flex md:flex-row flex-col-reverse mx-auto py-8">
        <div className="w-full md:w-1/2 flex justify-center h-auto items-center py-8">
          <div className="w-full md:w-[80%]">
            <h1 className="text-3xl pb-7">Log In</h1>

            <form onSubmit={HandleSubmit} className="space-y-12 ">
              {/* Email */}
              <div className="w-full">
                <input
                  type="email"
                  className="border-b-2 border-slate-600 outline-none p-3 w-full"
                  placeholder="*Email"
                  required
                  name="email"
                  onChange={handleInput}
                />
              </div>
              {/* Password */}
              <div className="">
                <div className="flex border-b-2 border-slate-500">
                  <input
                    type={password ? "password" : "text"}
                    required
                    name="password"
                    className=" p-3 outline-none w-full"
                    onChange={handleInput}
                    placeholder="*Password"
                  />
                  <h1
                    className="relative top-3 pr-3 cursor-pointer"
                    onClick={() => setPassword(!password)}
                  >
                    {password ? "Show" : "Hide"}
                  </h1>
                </div>
              </div>

              <button
                className="p-3 h-12 bg-primaryColor1 text-white text-center w-full active:scale-95 duration-200 disabled:opacity-75 disabled:scale-100 disabled:cursor-wait"
                // disabled={loading ? true : false}
              >
                {/* {loading ? "Loading..." : "Submit"} */}
                Log In
              </button>
              <h1 className="text-right">
                Don't have an account? {" "}
                <Link href={"/signup"}>
                  <span className="text-primaryColor font-medium cursor-pointer hover:scale-110 active:scale-90">
                    Create one
                  </span>
                </Link>
              </h1>
            </form>
          </div>
        </div>
        <div className="hidden w-full md:w-1/2 md:flex justify-center">
          <Image
            src={"/assets/jumbo-ad2.jpg"}
            alt="signup-img"
            width={500}
            height={500}
          />
        </div>
      </main>

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default Login;
