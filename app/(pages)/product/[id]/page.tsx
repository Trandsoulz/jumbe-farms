import React from "react";
import ProductPageComponent from "./components/ProductPage";
import { getProductById } from "@/app/helpers/Apihelper";

type ProductUrl = { params: { id: string } };

export const revalidate = 0

const ProductPage: React.FC<ProductUrl> = async ({ params }) => {
  const productDetail = await getProductById(params.id);
  // console.log(productDetail.data.data.product);

  return (
    <>
      {/* <h1>This is {params.id}</h1> */}
      <ProductPageComponent product={productDetail.data.data.product} />
    </>
  );
};

export default ProductPage;
