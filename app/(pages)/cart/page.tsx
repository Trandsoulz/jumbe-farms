"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Navigation from "@/app/components/Navigation";
import { fetchCart } from "@/app/helpers/Apihelper";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import { useRouter } from "next/navigation";
import { PaystackButton } from "react-paystack";
import { SuccessToast, ErrorToast } from "@/app/helpers/Toast";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const router = useRouter();
  const publicKey = process.env.NEXT_PUBLIC_JUMBO_FARM_PAYSTACK_PUBLIC_KEY;
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCartLists = useCallback(async () => {
    try {
      const res = await fetchCart();
      const cartItems = res.data.data.cart.items;
      const totalPrice = res.data.data.cart.totalPrice;
      setTotalPrice(totalPrice);
      setCart(cartItems);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCartLists();
  }, [fetchCartLists]);

  // Paystack
  const componentProps = {
    email: "bethrand2019@gmail.com",
    amount: totalPrice * 100,
    metadata: {
      name: "Bethrand Nnaemeka",
      number: "08113848299",
    },
    publicKey,
    text: "Check Out",
    onSuccess: () =>
      SuccessToast("Thanks for doing business with us! Come back soon!!"),
    onClose: () => ErrorToast("Wait! Don't leave "),
  };

  return (
    <>
      {/* Navigation panel */}
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      <Navigation>
        {/* <main className="flex justify-center items-center lg:h-[60vh] h-[70vh]">
          <div className="text-center">
            <h1>You dont have any item in your cart.</h1>
            <h1>Continue shopping, to add an item. </h1>
            Click on{" "}
            <Link className="text-primaryColor1 underline" href={"/categories"}>
              Categories
            </Link>
          </div>
        </main> */}

        <main className="px-4 md:px-0">
          <section className="border-2 border-primaryColor1 p-1 my-3">
            <h1>Total Price : ₦{totalPrice.toLocaleString("en-US")} </h1>
          </section>
          <CartItem cart={cart} />
          <section>
            {cart.length !== 0 && (
              // @ts-ignore
              <PaystackButton
                {...componentProps}
                className="bg-primaryColor1 text-white mt-5 text-xl w-full py-4"
              />
            )}
          </section>
        </main>
      </Navigation>

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default Cart;
