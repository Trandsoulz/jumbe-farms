import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import AdBanners from "./components/AdBanners";
import Link from "next/link";
import Categories from "./components/Categories";
import ProductCard from "./components/RecentProduct";
import PopularProduct from "./components/PopularProduct";
import Rice from "./components/Rice";
import Beans from "./components/Beans";
import Fish from "./components/Fish";
import Footer from "@/app/components/Footer";

const Homepage = () => {
  return (
    <>
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      {/* Section 1 [AdBanner] */}
      <section className="max-w-[90rem] mx-auto w-full p-4 md:p-8 flex lg:flex-row flex-col gap-6">
        <div className="w-full md:w-[65%] md:h-[75vh]">
          <AdBanners />
        </div>

        <div className="w-full md:w-[35%]">
          <Categories />
        </div>
      </section>

      {/* Section 2 Popular This week */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 pb-8">
        <h1 className="pb-6 text-xl font-medium md:font-semibold">
          Recent Orders
        </h1>

        <div>
          <ProductCard />
        </div>
      </section>

      {/* Section 3 Popular This week */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 pb-8">
        <h1 className="pb-6 text-xl font-medium md:font-semibold">
          Popular this Week
        </h1>

        <div>
          <PopularProduct />
        </div>
      </section>

      {/* Ad banner again */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 pb-8">
        <Image
          src={"/assets/asset-3.jpg"}
          width={500}
          height={500}
          alt="ad-banner"
          className="object-cover w-full rounded h-[25vh] md:h-[50vh]"
        />
      </section>

      {/* Rice Section  */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 ">
        <div className=" pb-6 flex h-auto items-center justify-between">
          <h1 className=" text-xl font-medium md:font-semibold">Rice</h1>
          <Link
            href={"/"}
            className="active:scale-90 duration-200 text-primaryColor1"
          >
            <h1 className="text-sm md:text-base"> View More</h1>
          </Link>
        </div>

        <div>
          <Rice />
        </div>
      </section>

      {/* Beans Section  */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 ">
        <div className="pb-6 flex h-auto items-center justify-between">
          <h1 className=" text-xl font-medium md:font-semibold">Beans</h1>
          <Link
            href={"/"}
            className="active:scale-90 duration-200 text-primaryColor1"
          >
            <h1 className="text-sm md:text-base"> View More</h1>
          </Link>
        </div>

        <div>
          <Beans />
        </div>
      </section>

      {/* Fish Section */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 ">
        <div className="pb-6 flex h-auto items-center justify-between">
          <h1 className="text-xl font-medium md:font-semibold">Fish</h1>
          <Link
            href={"/"}
            className="active:scale-90 duration-200 text-primaryColor1"
          >
            <h1 className="text-sm md:text-base"> View More</h1>
          </Link>
        </div>
        <div>
          <Fish />
        </div>
      </section>

      {/* Rice Section  */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 ">
        <div className=" pb-6 flex h-auto items-center justify-between">
          <h1 className=" text-xl font-medium md:font-semibold">Rice</h1>
          <Link
            href={"/"}
            className="active:scale-90 duration-200 text-primaryColor1"
          >
            <h1 className="text-sm md:text-base"> View More</h1>
          </Link>
        </div>

        <div>
          <Rice />
        </div>
      </section>

      {/* Beans Section  */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 ">
        <div className="pb-6 flex h-auto items-center justify-between">
          <h1 className=" text-xl font-medium md:font-semibold">Beans</h1>
          <Link
            href={"/"}
            className="active:scale-90 duration-200 text-primaryColor1"
          >
            <h1 className="text-sm md:text-base"> View More</h1>
          </Link>
        </div>

        <div>
          <Beans />
        </div>
      </section>

      {/* Fish Section */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 ">
        <div className="pb-6 flex h-auto items-center justify-between">
          <h1 className="text-xl font-medium md:font-semibold">Fish</h1>
          <Link
            href={"/"}
            className="active:scale-90 duration-200 text-primaryColor1"
          >
            <h1 className="text-sm md:text-base"> View More</h1>
          </Link>
        </div>
        <div>
          <Fish />
        </div>
      </section>

      {/* Rice Section  */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 ">
        <div className=" pb-6 flex h-auto items-center justify-between">
          <h1 className=" text-xl font-medium md:font-semibold">Rice</h1>
          <Link
            href={"/"}
            className="active:scale-90 duration-200 text-primaryColor1"
          >
            <h1 className="text-sm md:text-base"> View More</h1>
          </Link>
        </div>

        <div>
          <Rice />
        </div>
      </section>

      {/* Beans Section  */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 ">
        <div className="pb-6 flex h-auto items-center justify-between">
          <h1 className=" text-xl font-medium md:font-semibold">Beans</h1>
          <Link
            href={"/"}
            className="active:scale-90 duration-200 text-primaryColor1"
          >
            <h1 className="text-sm md:text-base"> View More</h1>
          </Link>
        </div>

        <div>
          <Beans />
        </div>
      </section>

      {/* Fish Section */}

      <section className="max-w-[90rem] mx-auto w-full px-4 md:px-8 ">
        <div className="pb-6 flex h-auto items-center justify-between">
          <h1 className="text-xl font-medium md:font-semibold">Fish</h1>
          <Link
            href={"/"}
            className="active:scale-90 duration-200 text-primaryColor1"
          >
            <h1 className="text-sm md:text-base"> View More</h1>
          </Link>
        </div>
        <div>
          <Fish />
        </div>
      </section>

      <footer  className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default Homepage;
