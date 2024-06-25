"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { fetchCart } from "../helpers/Apihelper";

const Cart = () => {
  const fetchCartLists = useCallback(async () => {
    try {
      const res = await fetchCart();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCartLists();
  }, [fetchCartLists]);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button className="scale-[1.4] active:scale-[1.3] hover:scale-[1.6] duration-200">
            <LuShoppingBag className="hover:text-primaryColor3 duration-200" />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
            <SheetDescription>
              <h1>Your cart is empty</h1>
              {/* <form onSubmit={handleSubmit} className="space-y-5 my-4">
                <div className="">
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    type="text"
                    required
                    name="full_name"
                    className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full"
                    onChange={handleInput}
                    placeholder="John Doe"
                  />
                </div>
                <div className="">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    required
                    name="email"
                    className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full"
                    onChange={handleInput}
                    placeholder="me@myself.com"
                  />
                </div>

                <div className="">
                  <label htmlFor="phone_number">Phone Number</label>
                  <div className="flex border bg-[#ecebf382] rounded-md">
                    <h1 className="relative top-3 pl-3">+234</h1>
                    <input
                      type="text"
                      required
                      name="tel"
                      placeholder="812 234 4567"
                      className=" p-3 h-12 bg-transparent text-sm md:text-base block outline-none w-full"
                      onChange={handleInput}
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="date_of_birth">Date of Birth</label>
                  <div className="flex border bg-[#ecebf382] rounded-md">
                    <DatePicker
                      className=" p-3 h-12 bg-transparent text-sm md:text-base block outline-none w-full"
                      //   name="dob"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <button
                  className="px-7 py-3 bg-primaryColor text-white rounded-sm hover:scale-110 active:scale-90 duration-200"
                  //   onClick={() => {
                  //     console.log("Submitted");
                  //   }}
                >
                  Save changes
                </button>
              </form> */}
            </SheetDescription>
          </SheetHeader>

          <SheetFooter>
            {/* <SheetClose asChild></SheetClose> */}
            {/* <Link href={"/checkout"} className="bg-primaryColor1 absolute left-0 text-center text-white text-xl font-medium right-0 p-6 bottom-0">Checkout Now</Link> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Cart;
