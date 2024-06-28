"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Navigation from "@/app/components/Navigation";
import { getAllOrders } from "@/app/helpers/Apihelper";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Image from "next/image";

const Order = () => {
  const [orders, setOrders] = useState<any>([]);
  const fetchAllOrders = async () => {
    const order = await getAllOrders();
    const orderReversed = order.data.data.orders.reverse();
    setOrders(orderReversed);
    console.log(orderReversed);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <>
      {/* Navigation panel */}
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      <Navigation>
        <div className="p-4 px-3">
          <h1 className="text-xl md:text-2xl ">Orders Made</h1>
        </div>

        {orders.length === 0 ? (
          <main className="flex justify-center items-center lg:h-[60vh] h-[70vh]">
            <div className="text-center">
              <h1>You dont have any orders.</h1>
              <h1>Continue shopping, to order an item. </h1>
              Click on{" "}
              <Link
                className="text-primaryColor1 underline"
                href={"/categories"}
              >
                Categories
              </Link>
            </div>
          </main>
        ) : (
          <main className="space-y-8 px-4 w-full md:w-1/2">
            {orders.map(({ createdAt, fulfilled, items, _id }: any) => (
              <section key={_id}>
                <div className="flex justify-between items-center h-auto border-b-2 border-primaryColor1 mb-4">
                  <h1 className="md:text-xl font-medium">
                    {/* {moment(createdAt).format("dddd, MMMM Do, YYYY")} <br />
                    {moment(createdAt).format("h:mm A")} */}
                    {moment(createdAt).format("MMMM Do, YYYY h:mm A")}
                  </h1>

                  <h1 className="text-sm md:text-base">
                    Order Status :{" "}
                    {fulfilled
                      ? "Your order has been delivered"
                      : "Not delivered"}
                  </h1>
                </div>

                <h1 className="pb-2">Number of Items : {items.length}</h1>

                <div className="space-y-4">
                  {items.map(({ product, _id, quantity }: any) => (
                    <div
                      key={_id}
                      className="flex gap-4 border-2 border-primaryColor1 rounded-md "
                    >
                      <div className="w-[40%] md:w-[35%]">
                        {product.images.length === 0 ? (
                          <Image
                            src={`/assets/jumbo-ad1.jpg`}
                            alt={`image of ${product.name}`}
                            priority
                            height={100}
                            width={150}
                            className="w-full rounded-l-md"
                          />
                        ) : (
                          <Image
                            src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${product.images[0]}`}
                            alt={`image of ${product.name}`}
                            priority
                            height={100}
                            width={150}
                            className="w-full rounded-l-md"
                          />
                        )}
                      </div>
                      <div className="py-2 space-y-1 md:space-y-2 w-[60%] md:w-[65%] flex flex-col">
                        <h1>{`${product.name} [${product.size}kg]`}</h1>
                        <h1>₦{`${product.price.toLocaleString("en-US")}`}</h1>
                        <h1>Quantity Ordered : {quantity} </h1>
                        <div className="h-full" />
                        <Link
                          href={`/product/${product._id}`}
                          className="px-3 py-2 bg-primaryColor1 rounded-md w-fit text-white"
                        >
                          {" "}
                          Go to Product
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </main>
        )}
      </Navigation>

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default Order;
