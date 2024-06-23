"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

type CategoryComponentProps = {
  category: any;
};

type CategoryProps = {
  image: string;
  name: string;
  _id: string;
};

const Categories: React.FC<CategoryComponentProps> = ({ category }) => {
  // console.log(category);

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
          {category.map(({ name, _id, image }: CategoryProps) => (
            <CarouselItem className="basis-1/4" key={_id}>
              <Link
                href={`/categories/${name}`}
                className="hover:scale-110 duration-200"
              >
                <div className=" border-2 border-primaryColor1 mb-5 w-fit">
                  <Image
                    src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${image}`}
                    width={200}
                    height={100}
                    alt={`${name}`}
                    className="w-[200px] bg-slate-500"
                  />

                  <div className="p-1 md:p-3 bg-primaryColor1">
                    <h1 className="font-medium text-white text-center capitalize">
                      {name}
                    </h1>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}

          {/* <CarouselItem className="basis-1/5">
            <Link
              href={"/categories/fish"}
              className="hover:scale-110 duration-200"
            >
              <div className=" border-2 border-primaryColor1 b-5 w-fit">
                <Image
                  src={"/categories/fish.jpg"}
                  width={200}
                  height={100}
                  alt="rice"
                  className="w-[200px] bg-slate-500"
                />

                <div className="p-1 md:p-3 bg-primaryColor1">
                  <h1 className="font-medium text-white text-center">Fish</h1>
                </div>
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="basis-1/5">
            <Link
              href={"/categories/beans"}
              className="hover:scale-110 duration-200"
            >
              <div className=" border-2 border-primaryColor1  mb-5 w-fit">
                <Image
                  src={"/categories/beans.jpg"}
                  width={200}
                  height={100}
                  alt="rice"
                  className="w-[200px] bg-slate-500"
                />

                <div className="p-1 md:p-3 bg-primaryColor1">
                  <h1 className="font-medium text-white text-center">Beans</h1>
                </div>
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="basis-1/5">
            <Link
              href={"/categories/rice"}
              className="hover:scale-110 duration-200"
            >
              <div className=" border-2 border-primaryColor1 mb-5 w-fit">
                <Image
                  src={"/categories/rice.jpg"}
                  width={200}
                  height={100}
                  alt="rice"
                  className="w-[200px] bg-slate-500"
                />

                <div className="p-1 md:p-3 bg-primaryColor1">
                  <h1 className="font-medium text-white text-center">Rice</h1>
                </div>
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="basis-1/5">
            <Link
              href={"/categories/fish"}
              className="hover:scale-110 duration-200"
            >
              <div className=" border-2 border-primaryColor1 b-5 w-fit">
                <Image
                  src={"/categories/fish.jpg"}
                  width={200}
                  height={100}
                  alt="rice"
                  className="w-[200px] bg-slate-500"
                />

                <div className="p-1 md:p-3 bg-primaryColor1">
                  <h1 className="font-medium text-white text-center">Fish</h1>
                </div>
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="basis-1/5">
            <Link
              href={"/categories/beans"}
              className="hover:scale-110 duration-200"
            >
              <div className=" border-2 border-primaryColor1  mb-5 w-fit">
                <Image
                  src={"/categories/beans.jpg"}
                  width={200}
                  height={100}
                  alt="rice"
                  className="w-[200px] bg-slate-500"
                />

                <div className="p-1 md:p-3 bg-primaryColor1">
                  <h1 className="font-medium text-white text-center">Beans</h1>
                </div>
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="basis-1/5">
            <Link
              href={"/categories/rice"}
              className="hover:scale-110 duration-200"
            >
              <div className=" border-2 border-primaryColor1 mb-5 w-fit">
                <Image
                  src={"/categories/rice.jpg"}
                  width={200}
                  height={100}
                  alt="rice"
                  className="w-[200px] bg-slate-500"
                />

                <div className="p-1 md:p-3 bg-primaryColor1">
                  <h1 className="font-medium text-white text-center">Rice</h1>
                </div>
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="basis-1/5">
            <Link
              href={"/categories/fish"}
              className="hover:scale-110 duration-200"
            >
              <div className=" border-2 border-primaryColor1 b-5 w-fit">
                <Image
                  src={"/categories/fish.jpg"}
                  width={200}
                  height={100}
                  alt="rice"
                  className="w-[200px] bg-slate-500"
                />

                <div className="p-1 md:p-3 bg-primaryColor1">
                  <h1 className="font-medium text-white text-center">Fish</h1>
                </div>
              </div>
            </Link>
          </CarouselItem>

          <CarouselItem className="basis-1/5">
            <Link
              href={"/categories/beans"}
              className="hover:scale-110 duration-200"
            >
              <div className=" border-2 border-primaryColor1  mb-5 w-fit">
                <Image
                  src={"/categories/beans.jpg"}
                  width={200}
                  height={100}
                  alt="rice"
                  className="w-[200px] bg-slate-500"
                />

                <div className="p-1 md:p-3 bg-primaryColor1">
                  <h1 className="font-medium text-white text-center">Beans</h1>
                </div>
              </div>
            </Link>
          </CarouselItem> */}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Categories;
