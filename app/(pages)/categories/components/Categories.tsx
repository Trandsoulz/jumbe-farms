"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type CategoryComponentProps = {
  category: any;
};

type CategoryProps = {
  image: string;
  name: string;
  _id: string;
};

const CategoryComponent: React.FC<CategoryComponentProps> = ({ category }) => {
  // console.log(category);

  return (
    <>
      <main className="grid gap-4 grid-cols-2 lg:grid-cols-3 p-8 mx-auto max-w-[90rem] w-[95%] md:w-[90%]">
        {category.map(({ image, name, _id }: CategoryProps) => (
          <Link
            key={_id}
            href={`/categories/${name}`}
            className="hover:scale-105 duration-300"
          >
            <div className=" border-2 border-primaryColor1 mb-5 w-fit">
              {!image ? (
                <Image
                  src={`/assets/jumbo-ad1.jpg`}
                  width={500}
                  height={100}
                  alt={`${name}`}
                  className="w-[150px] md:w-[350px]"
                />
              ) : (
                <Image
                  src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${image}`}
                  width={500}
                  height={100}
                  alt={`${name}`}
                  className="w-[150px] md:w-[350px]"
                />
              )}

              {/* <Image
                src={"/categories/rice.jpg"}
                width={500}
                height={100}
                alt="rice"
                className="w-[150px] md:w-[350px]"
              /> */}

              <div className="p-1 md:p-3 bg-primaryColor1">
                <h1 className="font-medium text-white text-center capitalize">{name}</h1>
              </div>
            </div>
          </Link>
        ))}

        {/* {[...Array(6)].map((key) => (
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
        ))} */}
      </main>
    </>
  );
};

export default CategoryComponent;
