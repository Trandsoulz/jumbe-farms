import Navbar from "@/app/components/Navbar";
import React from "react";
import Products from "./components/Products";
import Footer from "@/app/components/Footer";

const ProductPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>
      <h1 className="max-w-[90rem] mx-auto text-2xl md:text-3xl p-4 md:p-8 font-medium capitalize">
        {" "}
        {params.id}{" "}
      </h1>

      <Products id={params.id} />

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default ProductPage;
