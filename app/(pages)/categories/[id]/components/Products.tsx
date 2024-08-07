"use client";

import { addToCart } from "@/app/helpers/Apihelper";
import { ErrorToast, SuccessToast } from "@/app/helpers/Toast";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

// Define the type for the props
interface ProductsProps {
  id?: string;
  products?: any;
}
interface productType {
  images: string[];
  name: string;
  price: number;
  size: number;
  _id: string;
  variant: string;
}
[];

const Products: React.FC<ProductsProps> = ({ products }) => {
  // console.log(products);
  const router = useRouter();

  const goToProductPage = (e: MouseEvent<HTMLDivElement>, id: string) => {
    //@ts-ignore
    if (e.target.className.includes("addToCart")) {
      console.log("added to cart");
      // Add item to cart

      // Adding Item to Cart
      const items: any = {
        item: { product: id, quantity: 1 },
      };

      const addItemToCart = async () => {
        try {
          const res = await addToCart(items);
          // console.log(res.data.message);
          SuccessToast(res.data.message);
          // router.refresh();
          //Force a hard reload to clear the cache if supported by the browser
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } catch (error: any) {
          console.log(error)
          if (error.response.data.message === "Item already in cart") {
            ErrorToast(error.response.data.message);
            // console.log(error.response.data.message);
          } else {
            // ErrorToast(error.response.data.error);
            ErrorToast("You're not logged In. Click on Account, to Login");
            setTimeout(() => {
              window.location.href = "/login";
            }, 2200);
          }
        }
      };

      addItemToCart();
    } else {
      router.push(`/product/${id}`);
      // console.log("hello")
    }
  };

  return (
    <main className="max-w-[90rem] grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto w-[90%] md:w-[95%]">
      {products?.map(
        ({ images, name, price, size, _id, variant }: productType) => (
          <div
            className="flex flex-col cursor-pointer md:flex-row p-2 md:p-4 gap-2 md:gap-4 border-2 border-primaryColor1/60 hover:border-primaryColor active:border-primaryColor2 rounded-lg w-fit mb-4"
            key={_id}
          >
            <div
              // href={`/product/${_id}`}
              onClick={(e) => goToProductPage(e, _id)}
              className="flex flex-col md:flex-row gap-2 md:gap-4 w-[150px] md:w-full"
            >
              <div className="overflow-hidden rounded-lg md:w-1/2">
                {images.length === 0 ? (
                  <Image
                    src={`/assets/jumbo-ad1.jpg`}
                    width={400}
                    height={400}
                    alt={`${name}`}
                    className="w-full md:w-[150px] hover:scale-110 duration-200 rounded-lg"
                  />
                ) : (
                  <Image
                    src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${images[0]}`}
                    width={400}
                    height={400}
                    alt={`${name}`}
                    className="w-full md:w-[150px] hover:scale-110 duration-200 rounded-lg"
                  />
                )}
              </div>

              <div className="md:w-1/2 flex flex-col">
                <h1 className="flex items-center font-medium text-sm ">
                  {name}
                </h1>
                <h1>
                  {size >= 0.001 && `${size}kg`} {variant}
                </h1>
                <p className="text-sm md:text-base">
                  {" "}
                  ₦{price.toLocaleString("en-US")}
                </p>
                <div className="h-full" />
                <button className="bg-primaryColor1 addToCart text-white py-2 px-4 rounded hover:scale-110 duration-200 active:scale-90 text-sm ">
                  Add to Cart
                </button>
                {/* <div >
                <Rate
                  disabled
                  defaultValue={5}
                  className="hidden md:block md:text-xs "
                />
                <h3 className="hidden md:block text-sm">Excellent</h3>
              </div> */}
              </div>
            </div>

            {/* <button className="bg-primaryColor1 h-fit w-full md:w-[150px] text-white p-2 rounded hover:scale-110 duration-200 active:scale-90 text-sm py-2 px-4 ">
            Add to Cart
          </button> */}
          </div>
        )
      )}
    </main>
  );
};

export default Products;
