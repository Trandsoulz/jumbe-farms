"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Navigation from "@/app/components/Navigation";
import { getSavedItems } from "@/app/helpers/Apihelper";
import Link from "next/link";
import React, { useEffect } from "react";

const SavedPage = () => {
  const getAllSavedItems = async () => {
    try {
      const res = await getSavedItems();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   // getAllSavedItems();
  // }, []);

  return (
    <>
      {/* Navigation panel */}
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      <Navigation>
        <main className="flex justify-center items-center lg:h-[60vh] h-[70vh]">
          <div className="text-center">
            <h1>You dont have any saved items.</h1>
            <h1>Continue shopping, to save an item. </h1>
            Click on{" "}
            <Link className="text-primaryColor1 underline" href={"/categories"}>
              Categories
            </Link>
          </div>
        </main>

        {/* <main>

        </main> */}
      </Navigation>

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default SavedPage;
