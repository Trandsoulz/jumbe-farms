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
import Autoplay from "embla-carousel-autoplay";

const Rice = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="">
          <CarouselItem className="basis-1/2">
            {" "}
            <div className="flex flex-col md:flex-row p-2 md:p-4 gap-2 md:gap-4 border-2 border-primaryColor1/60 hover:border-primaryColor active:border-primaryColor2 rounded-lg w-fit mb-4">
              <Link
                href={"/product"}
                className="flex flex-col md:flex-row gap-2 md:gap-4"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={"/categories/rice.jpg"}
                    width={400}
                    height={400}
                    alt="rice"
                    className="w-full md:w-[170px] hover:scale-110 duration-200"
                  />
                </div>

                <div className="w-full md:w-[150px]">
                  <h1 className="flex items-center h-11 font-medium text-sm ">
                    1kg of Asun Rice
                  </h1>
                  <p className="text-sm md:text-base"> ₦2,500</p>
                  <div>
                    <Rate
                      disabled
                      defaultValue={5}
                      className="hidden md:block md:text-xs "
                    />
                    <h3 className="hidden md:block text-sm">Excellent</h3>
                  </div>
                </div>
              </Link>

              <button className="bg-primaryColor1 h-fit text-white p-2 rounded hover:scale-110 duration-200 active:scale-90 text-sm py-2 px-4">
                Add to Cart
              </button>
            </div>{" "}
          </CarouselItem>

          <CarouselItem className="basis-1/2">
            {" "}
            <div className="flex flex-col md:flex-row p-2 md:p-4 gap-2 md:gap-4 border-2 border-primaryColor1/60 hover:border-primaryColor active:border-primaryColor2 rounded-lg w-fit mb-4">
              <Link
                href={"/product"}
                className="flex flex-col md:flex-row gap-2 md:gap-4"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={"/categories/rice.jpg"}
                    width={400}
                    height={400}
                    alt="rice"
                    className="w-full md:w-[170px] hover:scale-110 duration-200"
                  />
                </div>

                <div className="w-full md:w-[150px]">
                  <h1 className="flex items-center h-11 font-medium text-sm ">
                    1 bag of Rice [50kg]
                  </h1>
                  <p className="text-sm md:text-base"> ₦60,500</p>
                  <div>
                    <Rate
                      disabled
                      defaultValue={5}
                      className="hidden md:block md:text-xs "
                    />
                    <h3 className="hidden md:block text-sm">Excellent</h3>
                  </div>
                </div>
              </Link>

              <button className="bg-primaryColor1 h-fit text-white p-2 rounded hover:scale-110 duration-200 active:scale-90 text-sm py-2 px-4">
                Add to Cart
              </button>
            </div>{" "}
          </CarouselItem>

          <CarouselItem className="basis-1/2">
            {" "}
            <div className="flex flex-col md:flex-row p-2 md:p-4 gap-2 md:gap-4 border-2 border-primaryColor1/60 hover:border-primaryColor active:border-primaryColor2 rounded-lg w-fit mb-4">
              <Link
                href={"/product"}
                className="flex flex-col md:flex-row gap-2 md:gap-4"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={"/categories/rice.jpg"}
                    width={400}
                    height={400}
                    alt="rice"
                    className="w-full md:w-[170px] hover:scale-110 duration-200"
                  />
                </div>

                <div className="w-full md:w-[150px]">
                  <h1 className="flex items-center h-11 font-medium text-sm ">
                    10kg of Asun Rice
                  </h1>
                  <p className="text-sm md:text-base"> ₦15,500</p>
                  <div>
                    <Rate
                      disabled
                      defaultValue={5}
                      className="hidden md:block md:text-xs "
                    />
                    <h3 className="hidden md:block text-sm">Excellent</h3>
                  </div>
                </div>
              </Link>

              <button className="bg-primaryColor1 h-fit text-white p-2 rounded hover:scale-110 duration-200 active:scale-90 text-sm py-2 px-4">
                Add to Cart
              </button>
            </div>{" "}
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Rice;
