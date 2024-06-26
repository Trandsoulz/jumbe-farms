import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Navigation from "@/app/components/Navigation";
import Link from "next/link";
import React from "react";

const Order = () => {
  return (
    <>
      {/* Navigation panel */}
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      <Navigation>
        <main className="flex justify-center items-center lg:h-[60vh] h-[70vh]">
          <div className="text-center">
            <h1>You dont have any orders.</h1>
            <h1>Continue shopping, to order an item. </h1>
            Click on{" "}
            <Link className="text-primaryColor1 underline" href={"/categories"}>
              Categories
            </Link>
          </div>
        </main>
      </Navigation>

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default Order;
