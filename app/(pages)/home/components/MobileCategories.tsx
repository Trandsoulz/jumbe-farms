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

const MobileCategories: React.FC<CategoryComponentProps> = ({ category }) => {
  return (
    <>
      {/* Categories list */}

      <main className="grid grid-cols-3 gap-4">
        {category?.map(({ name, _id, image }: CategoryProps) => (
          <Link
            key={_id}
            href={`/categories/${name}`}
            className="hover:scale-110 duration-200"
          >
            <div className=" border-2 border-primaryColor1 mb-5 w-fit">
              <Image
                src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${image}`}
                width={130}
                height={100}
                alt="rice"
                className="w-[150px] md:w-[130px]"
              />

              <div className="p-1 md:p-3 bg-primaryColor1">
                <h1 className="font-medium text-white text-center capitalize">
                  {name}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
};

export default MobileCategories;
