import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";
import CategoryComponent from "./components/Categories";
import { getCategories } from "@/app/helpers/Apihelper";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <>
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>
      <h1 className="text-2xl md:text-3xl p-4 md:p-8 font-medium max-w-[90rem] mx-auto">
        Categories
      </h1>

      <CategoryComponent category={categories.data.data.categories} />

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default Categories;
