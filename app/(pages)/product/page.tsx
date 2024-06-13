"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Rate } from "antd";
import Image from "next/image";
import { useState, useEffect } from "react";

import { IoCheckmarkDone, IoHeart } from "react-icons/io5";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductCard from "../home/components/RecentProduct";

const ProductPage = () => {
  const [currentImg, setCurrentImg] = useState<any>(0);

  const imgs = [
    "/categories/rice.jpg",
    "/categories/fish.jpg",
    "/categories/beans.jpg",
    "/categories/rice.jpg",
  ];

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const ShareProduct = async () => {
    const url = window.location.href;
    if (domLoaded) {
      try {
        await navigator.share({
          // Title that occurs over
          // web share dialog
          title: "Jumbo farms product",

          // URL to share
          url: `${url}`,
        });
        // alert("Thanks for sharing!");
      } catch (err) {
        // Handle errors, if occurred
        // alert("Error while using Web share API:");
        // alert(err);
      }
    } else {
      // Alerts user if API not available
      await navigator.clipboard?.writeText(`${url}`);
      //   alert("Browser doesn't support sharing. But we copied it to clipboard");
    }
  };

  return (
    <>
      {/* Navigation panel */}
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      {/* Breadcrumbs */}

      <section className="md:px-8 p-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Rice</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* Product images and descriptions */}

      <main className="p-4 max-w-[90rem] mx-auto">
        <section className="flex md:flex-row flex-col justify-between gap-4">
          <div className="md:w-1/2 w-full flex justify-center">
            <div>
              <Image
                src={`${imgs[currentImg]}`}
                alt={`image of ${"asun rice"}`}
                height={300}
                width={500}
                className="w-[500px] duration-300"
              />

              <section className=" md:scrollbar-thin overflow-hidden overflow-x-scroll w-full md:w-[400px] mx-auto pb-2">
                <div className="flex gap-4 pt-4 px-2">
                  {imgs.map((img, index) => (
                    <>
                      <Image
                        key={index}
                        src={img}
                        alt="img-name"
                        width={100}
                        height={70}
                        className={`rounded hover:cursor-pointer ${
                          currentImg === index
                            ? "border-2 border-primaryColor1"
                            : ""
                        }`}
                        onClick={() => setCurrentImg(index)}
                      />
                    </>
                  ))}
                </div>
              </section>
            </div>
          </div>
          <div className="md:w-1/2 w-full p-4">
            <h1 className="text-2xl">A bag of rice [50kg]</h1>

            <div className="flex justify-between mt-6 border-b-2 pb-2 border-slate-600 ">
              <h1>₦15,500</h1>

              <div>
                {" "}
                <Rate
                  disabled
                  defaultValue={5}
                  className="hidden md:block md:text-xs "
                />
              </div>
            </div>

            <Accordion type="single" collapsible className="mt-5">
              <AccordionItem value="item-1">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  Rice is a staple food for over half the world&apos;s
                  population, especially in Asia. Grown mainly in flooded
                  paddies, it comes in varieties like white rice, which is
                  milled, and nutrient-rich brown rice. It is a major
                  carbohydrate source, providing energy and essential nutrients.
                  Economically and culturally significant, rice supports
                  millions of farmers worldwide.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent>
                  Free return within 3 days for Official Store items and 1 day
                  for other eligible items.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Deliveries</AccordionTrigger>
                <AccordionContent>
                  All deliveries made within PORT-HARCOURT, come at a standard
                  charge of ₦1,500
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* In stock and share */}
            <div className="flex justify-between py-4 h-auto items-center">
              <h1 className="mt-6 inline-flex">
                {" "}
                <IoCheckmarkDone className="text-xl mr-2 relative top-1" /> In
                stock
              </h1>

              <button
                className="border-2 border-primaryColor1 px-4 py-2"
                onClick={ShareProduct}
              >
                Share
              </button>
            </div>

            {/* Buttons */}
            <div className="flex space-x-6">
              <button
                onClick={() => alert("Added to cart")}
                className="w-[80%] bg-primaryColor px-5 py-3 text-white"
              >
                {" "}
                <h1 className="duration-200 hover:scale-[1.2] active:scale-90">
                  Add to Cart{" "}
                </h1>
              </button>
              <button
                onClick={() => alert("Added to saved")}
                className="w-[20%] bg-primaryColor px-5 py-3 text-xl text-white"
              >
                <IoHeart className="inline-flex justify-center duration-200 hover:scale-125 active:scale-90" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <section className="mt-4 md:px-8 p-4">
        <h1 className="md:text-2xl font-medium mb-8">You May Also Like</h1>
        <ProductCard />
      </section>

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default ProductPage;
