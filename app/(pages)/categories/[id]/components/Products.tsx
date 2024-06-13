"use client";

import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";

// Define the type for the props
interface ProductsProps {
  id: string;
}

const Products: React.FC<ProductsProps> = ({ id }) => {
  return (
    <main className="max-w-[90rem] grid gap-4 grid-cols-2 lg:grid-cols-3 mx-auto w-[90%] md:w-[95%]">
      {[...Array(6)].map((key) => (
        <div
          className="flex flex-col md:flex-row p-2 md:p-4 gap-2 md:gap-4 border-2 border-primaryColor1/60 hover:border-primaryColor active:border-primaryColor2 rounded-lg w-fit md:[w-400px] mb-4"
          key={key}
        >
          <Link
            href={`/product`}
            className="flex flex-col md:flex-row gap-2 md:gap-4"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={`/categories/${id}.jpg`}
                width={400}
                height={400}
                alt="rice"
                className="w-[150px] md:w-[200px] hover:scale-110 duration-200"
              />
            </div>

            <div className="w-full md:w-[170px]">
              <h1 className="flex items-center font-medium text-sm ">
                10kg of {id}
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

          <button className="bg-primaryColor1 h-fit w-[150px] text-white p-2 rounded hover:scale-110 duration-200 active:scale-90 text-sm py-2 px-4 ">
            Add to Cart
          </button>
        </div>
      ))}
    </main>
  );
};

export default Products;
