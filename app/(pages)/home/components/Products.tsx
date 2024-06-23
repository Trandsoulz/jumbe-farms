import Link from "next/link";
import React from "react";
import ProductComponent from "./ProductComp";

// Define the type for the props

interface ProductsProps {
  category: any;
}
interface productType {
  image: string;
  _id: string;
  name: string;
}
[];

const Products: React.FC<ProductsProps> = ({ category }) => {
  return (
    <>
      {category.map(({ name, _id }: productType) => (
        <main key={_id}>
          <section className=" pb-6 flex h-auto items-center justify-between">
            <h1 className=" text-xl font-medium md:font-semibold capitalize">
              {name}
            </h1>
            <Link
              href={`/categories/${name}`}
              className="active:scale-90 duration-200 text-primaryColor1"
            >
              <h1 className="text-sm md:text-base"> View More</h1>
            </Link>
          </section>
          <section>
            <ProductComponent name={name} />
          </section>
        </main>
      ))}
    </>
  );
};

export default Products;
