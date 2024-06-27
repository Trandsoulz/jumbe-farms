"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Rate } from "antd";
import Image from "next/image";
import { useState, useEffect, Key } from "react";

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
import ProductCard from "@/app/(pages)/home/components/RecentProduct";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { addToCart, getProductsByCategories } from "@/app/helpers/Apihelper";
import ProductComponent from "@/app/(pages)/home/components/ProductComp";
import { ErrorToast, SuccessToast } from "@/app/helpers/Toast";
import { useRouter } from "next/navigation";

type ProductProps = {
  product: any;
};

const ProductPageComponent: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();
  const { category, images, name, price, size, _id } = product;

  //   const [products, setProducts] = useState([]);

  const [currentImg, setCurrentImg] = useState<any>(0);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);

    // const fetchCategoriesProducts = async () => {
    //   const products = await getProductsByCategories(category);
    //   console.log(products.data.data.products);
    //   setProducts(products.data.data.products);
    // };
    // fetchCategoriesProducts();
  }, []);

  const ShareProduct = async () => {
    const url = window.location.href;
    if (domLoaded) {
      try {
        await navigator.share({
          // Title that occurs over
          // web share dialog
          title: `${name} [${size}kg]`,

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

  // Adding Item to Cart
  const items: any = {
    item: { product: _id, quantity: 1 },
  };
  console.log;

  const addItemToCart = async () => {
    try {
      const res = await addToCart(items);
      console.log(res.data.message);
      SuccessToast(res.data.message);
      // router.refresh();
      //Force a hard reload to clear the cache if supported by the browser
      window.location.reload();
    } catch (error: any) {
      console.log(error);
      ErrorToast(error.response.data.message);
    }
  };

  return (
    <>
      {/* Navigation panel */}
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      {/* Breadcrumbs */}

      <section className="max-w-[90rem] mx-auto md:px-8 p-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/categories/${category}`}>
                Categories
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="capitalize">{category}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* Product images and descriptions */}

      <main className="p-4 max-w-[90rem] mx-auto">
        <section className="flex md:flex-row flex-col justify-between gap-4">
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
            {images.length === 0 ? (
              <Image
                src={`/assets/jumbo-ad1.jpg`}
                alt={`image of ${name}`}
                priority
                height={300}
                width={500}
                className="w-[400px] duration-300"
              />
            ) : (
              <Image
                src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${images[currentImg]}`}
                alt={`image of ${name}`}
                priority
                height={300}
                width={500}
                className="w-[250px] md:w-[400px] md:h-auto duration-300"
              />
            )}

            <section className=" md:scrollbar-thin overflow-hidden overflow-x-scroll w-full md:w-[400px] mx-auto pb-2">
              <div className="flex gap-4 pt-4 px-2 justify-center">
                {images.map((img: string, i: number) => (
                  <Image
                    key={i}
                    src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${img}`}
                    alt={`images of ${name}`}
                    priority
                    width={100}
                    height={70}
                    className={`rounded hover:cursor-pointer ${
                      currentImg === i ? "border-2 border-primaryColor1" : ""
                    }`}
                    onClick={() => setCurrentImg(i)}
                  />
                ))}
              </div>
            </section>
          </div>
          <div className="md:w-1/2 w-full p-4">
            <h1 className="text-2xl">
              {name} [{size}kg]
            </h1>

            <div className="flex justify-between mt-6 border-b-2 pb-2 border-slate-600 ">
              <h1>₦{`${price.toLocaleString("en-US")}`}</h1>
              {/* 
              <div>
                {" "}
                <Rate
                  disabled
                  defaultValue={5}
                  className="hidden md:block md:text-xs "
                />
              </div> */}
            </div>

            <Accordion type="single" collapsible className="mt-5">
              {/* <AccordionItem value="item-1">
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
              </AccordionItem> */}

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
                onClick={addItemToCart}
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

      <section className="max-w-[90rem] mx-auto mt-4 md:px-8 p-4">
        <h1 className="md:text-2xl font-medium mb-8">You May Also Like</h1>
        <ProductComponent name={category} />
      </section>

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default ProductPageComponent;
