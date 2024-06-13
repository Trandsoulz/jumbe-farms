import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

const ProductPage = () => {
  return (
    <>
      {/* Navigation panel */}
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      <main className="h-[80vh] flex justify-center items-center">
      <h1>This is the product page</h1>
      </main>

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default ProductPage;