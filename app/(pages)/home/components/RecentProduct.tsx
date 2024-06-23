"use client";

import Image from "next/image";
import { Rate } from "antd";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

const ProductCard = () => {
  const router = useRouter();

  const goToProductPage = (e: MouseEvent<HTMLDivElement>, id: string) => {
    //@ts-ignore
    if (e.target.className.includes("addToCart")) {
      console.log("added to cart");
    } else {
      router.push(`/product/${id}`);
      // console.log("hello")
    }
  };

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          AutoScroll({
            playOnInit: true,
            stopOnInteraction: false,
            stopOnFocusIn: false,
            speed: 1.5,
          }),
        ]}
      >
        <CarouselContent className="mx-auto">
          <CarouselItem className="basis-1/2 lg:basis-1/3">
            <div
              className="flex flex-col cursor-pointer md:flex-row p-2 md:p-4 gap-2 md:gap-4 border-2 border-primaryColor1/60 hover:border-primaryColor active:border-primaryColor2 rounded-lg w-fit mb-4"
              // key={_id}
            >
              <div
                // onClick={(e)=>goToProductPage(e, _id)}
                className="flex flex-col md:flex-row gap-2 md:gap-4 w-[150px] md:w-full"
              >
                <div className="overflow-hidden rounded-lg md:w-1/2">
                  {/* {images.length === 0 ? ( */}
                  <Image
                    src={`/categories/rice.jpg`}
                    width={400}
                    height={400}
                    alt={`${`rice`}`}
                    className="w-full md:w-[150px] hover:scale-110 duration-200 rounded-lg"
                  />
                  {/* ) : (
                <Image
                  src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${images[0]}`}
                  width={400}
                  height={400}
                  alt={`${name}`}
                  className="w-full md:w-[150px] hover:scale-110 duration-200 rounded-lg"
                />
              )} */}
                </div>

                <div className="md:w-1/2 flex flex-col">
                  <h1 className="flex items-center font-medium text-sm ">{`Asun Rice`}</h1>
                  <h1>{`5`}kg </h1>
                  <p className="text-sm md:text-base">
                    ₦{`${Number(15000).toLocaleString("en-US")}`}
                  </p>
                  <div className="h-full" />
                  <button className="bg-primaryColor1 addToCart text-white py-2 px-4 rounded hover:scale-110 duration-200 active:scale-90 text-sm ">
                    Add to Cart
                  </button>
                  {/* <div >
                <Rate
                  disabled
                  defaultValue={5}
                  className="hidden md:block md:text-xs "
                />
                <h3 className="hidden md:block text-sm">Excellent</h3>
              </div> */}
                </div>
              </div>

              {/* <button className="bg-primaryColor1 h-fit w-full md:w-[150px] text-white p-2 rounded hover:scale-110 duration-200 active:scale-90 text-sm py-2 px-4 ">
            Add to Cart
          </button> */}
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 lg:basis-1/3">
            <div
              className="flex flex-col cursor-pointer md:flex-row p-2 md:p-4 gap-2 md:gap-4 border-2 border-primaryColor1/60 hover:border-primaryColor active:border-primaryColor2 rounded-lg w-fit mb-4"
              // key={_id}
            >
              <div
                // onClick={(e)=>goToProductPage(e, _id)}
                className="flex flex-col md:flex-row gap-2 md:gap-4 w-[150px] md:w-full"
              >
                <div className="overflow-hidden rounded-lg md:w-1/2">
                  {/* {images.length === 0 ? ( */}
                  <Image
                    src={`/categories/rice.jpg`}
                    width={400}
                    height={400}
                    alt={`${`rice`}`}
                    className="w-full md:w-[150px] hover:scale-110 duration-200 rounded-lg"
                  />
                  {/* ) : (
                <Image
                  src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${images[0]}`}
                  width={400}
                  height={400}
                  alt={`${name}`}
                  className="w-full md:w-[150px] hover:scale-110 duration-200 rounded-lg"
                />
              )} */}
                </div>

                <div className="md:w-1/2 flex flex-col">
                  <h1 className="flex items-center font-medium text-sm ">{`Asun Rice`}</h1>
                  <h1>{`5`}kg </h1>
                  <p className="text-sm md:text-base">
                    {" "}
                    ₦{`${Number(15000).toLocaleString("en-US")}`}
                  </p>
                  <div className="h-full" />
                  <button className="bg-primaryColor1 addToCart text-white py-2 px-4 rounded hover:scale-110 duration-200 active:scale-90 text-sm ">
                    Add to Cart
                  </button>
                  {/* <div >
                <Rate
                  disabled
                  defaultValue={5}
                  className="hidden md:block md:text-xs "
                />
                <h3 className="hidden md:block text-sm">Excellent</h3>
              </div> */}
                </div>
              </div>

              {/* <button className="bg-primaryColor1 h-fit w-full md:w-[150px] text-white p-2 rounded hover:scale-110 duration-200 active:scale-90 text-sm py-2 px-4 ">
            Add to Cart
          </button> */}
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 lg:basis-1/3">
            <div
              className="flex flex-col cursor-pointer md:flex-row p-2 md:p-4 gap-2 md:gap-4 border-2 border-primaryColor1/60 hover:border-primaryColor active:border-primaryColor2 rounded-lg w-fit mb-4"
              // key={_id}
            >
              <div
                // onClick={(e)=>goToProductPage(e, _id)}
                className="flex flex-col md:flex-row gap-2 md:gap-4 w-[150px] md:w-full"
              >
                <div className="overflow-hidden rounded-lg md:w-1/2">
                  {/* {images.length === 0 ? ( */}
                  <Image
                    src={`/categories/rice.jpg`}
                    width={400}
                    height={400}
                    alt={`${`rice`}`}
                    className="w-full md:w-[150px] hover:scale-110 duration-200 rounded-lg"
                  />
                  {/* ) : (
                <Image
                  src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${images[0]}`}
                  width={400}
                  height={400}
                  alt={`${name}`}
                  className="w-full md:w-[150px] hover:scale-110 duration-200 rounded-lg"
                />
              )} */}
                </div>

                <div className="md:w-1/2 flex flex-col">
                  <h1 className="flex items-center font-medium text-sm ">{`Asun Rice`}</h1>
                  <h1>{`5`}kg </h1>
                  <p className="text-sm md:text-base">
                    {" "}
                    ₦{`${Number(15000).toLocaleString("en-US")}`}
                  </p>
                  <div className="h-full" />
                  <button className="bg-primaryColor1 addToCart text-white py-2 px-4 rounded hover:scale-110 duration-200 active:scale-90 text-sm ">
                    Add to Cart
                  </button>
                  {/* <div >
                <Rate
                  disabled
                  defaultValue={5}
                  className="hidden md:block md:text-xs "
                />
                <h3 className="hidden md:block text-sm">Excellent</h3>
              </div> */}
                </div>
              </div>

              {/* <button className="bg-primaryColor1 h-fit w-full md:w-[150px] text-white p-2 rounded hover:scale-110 duration-200 active:scale-90 text-sm py-2 px-4 ">
            Add to Cart
          </button> */}
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 lg:basis-1/3">
            <div
              className="flex flex-col cursor-pointer md:flex-row p-2 md:p-4 gap-2 md:gap-4 border-2 border-primaryColor1/60 hover:border-primaryColor active:border-primaryColor2 rounded-lg w-fit mb-4"
              // key={_id}
            >
              <div
                // onClick={(e)=>goToProductPage(e, _id)}
                className="flex flex-col md:flex-row gap-2 md:gap-4 w-[150px] md:w-full"
              >
                <div className="overflow-hidden rounded-lg md:w-1/2">
                  {/* {images.length === 0 ? ( */}
                  <Image
                    src={`/categories/rice.jpg`}
                    width={400}
                    height={400}
                    alt={`${`rice`}`}
                    className="w-full md:w-[150px] hover:scale-110 duration-200 rounded-lg"
                  />
                  {/* ) : (
                <Image
                  src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${images[0]}`}
                  width={400}
                  height={400}
                  alt={`${name}`}
                  className="w-full md:w-[150px] hover:scale-110 duration-200 rounded-lg"
                />
              )} */}
                </div>

                <div className="md:w-1/2 flex flex-col">
                  <h1 className="flex items-center font-medium text-sm ">{`Asun Rice`}</h1>
                  <h1>{`5`}kg </h1>
                  <p className="text-sm md:text-base">
                    ₦{`${Number(15000).toLocaleString("en-US")}`}
                  </p>
                  <div className="h-full" />
                  <button className="bg-primaryColor1 addToCart text-white py-2 px-4 rounded hover:scale-110 duration-200 active:scale-90 text-sm ">
                    Add to Cart
                  </button>
                  {/* <div >
                <Rate
                  disabled
                  defaultValue={5}
                  className="hidden md:block md:text-xs "
                />
                <h3 className="hidden md:block text-sm">Excellent</h3>
              </div> */}
                </div>
              </div>

              {/* <button className="bg-primaryColor1 h-fit w-full md:w-[150px] text-white p-2 rounded hover:scale-110 duration-200 active:scale-90 text-sm py-2 px-4 ">
            Add to Cart
          </button> */}
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default ProductCard;
