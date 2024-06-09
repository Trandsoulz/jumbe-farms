import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <>
      <div className="flex h-auto items-center mb-3 justify-between">
        <h1 className="text-xl md:text-2xl font-medium text-primaryColor1">
          Categories
        </h1>

        <Link
          href={"/"}
          className="active:scale-90 duration-200 text-primaryColor1"
        >
          <h1 className="text-sm md:text-base"> View All {">"}</h1>
        </Link>
      </div>

      {/* Categories list */}

      {[...Array(3)].map((key) => (
        <main key={key} className="flex gap-2 md:gap-4 justify-between">
          <Link
            href={"/categories/rice"}
            className="hover:scale-110 duration-200"
          >
            <div className=" border-2 border-primaryColor1 mb-5 w-fit">
              <Image
                src={"/categories/rice.jpg"}
                width={130}
                height={100}
                alt="rice"
                className="w-[150px] md:w-[130px]"
              />

              <div className="p-1 md:p-3 bg-primaryColor1">
                <h1 className="font-medium text-white text-center">Rice</h1>
              </div>
            </div>
          </Link>

          <Link
            href={"/categories/fish"}
            className="hover:scale-110 duration-200"
          >
            <div className=" border-2 border-primaryColor1 b-5 w-fit">
              <Image
                src={"/categories/fish.jpg"}
                width={130}
                height={100}
                alt="rice"
                className="w-[150px] md:w-[130px]"
              />

              <div className="p-1 md:p-3 bg-primaryColor1">
                <h1 className="font-medium text-white text-center">Fish</h1>
              </div>
            </div>
          </Link>

          <Link
            href={"/categories/beans"}
            className="hover:scale-110 duration-200"
          >
            <div className=" border-2 border-primaryColor1  mb-5 w-fit">
              <Image
                src={"/categories/beans.jpg"}
                width={130}
                height={100}
                alt="rice"
                className="w-[150px] md:w-[130px]"
              />

              <div className="p-1 md:p-3 bg-primaryColor1">
                <h1 className="font-medium text-white text-center">Beans</h1>
              </div>
            </div>
          </Link>
        </main>
      ))}
    </>
  );
};

export default Categories;
