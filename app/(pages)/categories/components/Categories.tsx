import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryComponent = () => {
  return (
    <>
      <main className="grid gap-4 grid-cols-2 lg:grid-cols-3 p-8 mx-auto w-[95%] md:w-[90%]">
        {[...Array(6)].map((key) => (
          <Link
            key={key}
            href={`/categories/${"rice"}`}
            className="hover:scale-105 duration-300"
          >
            <div className=" border-2 border-primaryColor1 mb-5 w-fit">
              <Image
                src={"/categories/rice.jpg"}
                width={500}
                height={100}
                alt="rice"
                className="w-[150px] md:w-[350px]"
              />

              <div className="p-1 md:p-3 bg-primaryColor1">
                <h1 className="font-medium text-white text-center">Rice</h1>
              </div>
            </div>
          </Link>
        ))}

        {[...Array(6)].map((key) => (
          <Link
            key={key}
            href={`/categories/${"beans"}`}
            className="hover:scale-105 duration-300"
          >
            <div className=" border-2 border-primaryColor1 mb-5 w-fit">
              <Image
                src={"/categories/beans.jpg"}
                width={500}
                height={100}
                alt="rice"
                className="w-[150px] md:w-[350px]"
              />

              <div className="p-1 md:p-3 bg-primaryColor1">
                <h1 className="font-medium text-white text-center">Beans</h1>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
};

export default CategoryComponent;
