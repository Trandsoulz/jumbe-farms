import Navbar from "@/app/components/Navbar";
import React from "react";
import Products from "./components/Products";
import Footer from "@/app/components/Footer";
import { getProductsByCategories } from "@/app/helpers/Apihelper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const revalidate = 0;

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const productsid = await getProductsByCategories(params.id);

  return (
    <>
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      <section className="max-w-[90rem] mx-auto md:px-8 p-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            {/* <BreadcrumbItem>
              <BreadcrumbLink
                className="capitalize"
                href={`/categories/${params.id}`}
              >
                
              </BreadcrumbLink>
            </BreadcrumbItem> */}

            <BreadcrumbItem>
              <BreadcrumbPage className="capitalize">
                {params.id}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* products={productsid} */}
      <Products id={params.id} products={productsid.data.data.products} />

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default ProductPage;
