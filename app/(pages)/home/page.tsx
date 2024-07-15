import React from "react";
import Navbar from "../../components/Navbar";
import AdBanners from "./components/AdBanners";
import Link from "next/link";
import Categories from "./components/Categories";
import ProductCard from "./components/RecentProduct";
import PopularProduct from "./components/PopularProduct";
import Footer from "@/app/components/Footer";
import MobileCategories from "./components/MobileCategories";
import { getCategories, getProducts } from "@/app/helpers/Apihelper";
import Products from "./components/Products";

export const revalidate = 0;

const Homepage = async () => {
  const categories = await getCategories();
  const recentOrders = await getProducts();
  const popularOrders = await getProducts();
 

  return (
    <>
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>
      {/* Section 0 [AdBanner] */}
      <section className="max-w-[90rem] mx-auto ">
        <AdBanners />
      </section>

      {/* Section 1 [AdBanner] || [Categories]*/}
      <section className="max-w-[90rem] mx-auto w-full p-4 md:p-8">
        <div className="flex h-auto items-center mb-3 justify-between">
          <h1 className="text-xl md:text-2xl font-medium text-primaryColor1">
            Categories
          </h1>

          <Link
            href={"/categories"}
            className="active:scale-90 duration-200 text-primaryColor1"
          >
            <h1 className="text-sm md:text-base"> View All</h1>
          </Link>
        </div>

        <div className="w-full hidden md:block mt-7">
          <Categories category={categories.data.data.categories} />
        </div>

        <div className="w-full md:hidden mt-7 md:mt-0">
          <MobileCategories category={categories.data.data.categories} />
        </div>
      </section>

      {/* Section 2 Recent Orders */}

      <section className="max-w-[90rem] mx-auto w-full p-4 md:p-8">
        <h1 className="pb-6 text-xl font-medium md:font-semibold">
          Recent Orders
        </h1>

        <div>
          <ProductCard products={recentOrders.data.data.products} />
        </div>
      </section>

      {/* Section 3 Popular This week */}

      <section className="max-w-[90rem] mx-auto w-full p-4 md:p-8 pb-0">
        <h1 className="pb-6 text-xl font-medium md:font-semibold">
          Popular this Week
        </h1>

        <div>
          <PopularProduct products={popularOrders.data.data.products} />
        </div>
      </section>

      {/* Product sections, looping through each other  */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 ">
        <Products category={categories.data.data.categories} />
      </section>

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default Homepage;
