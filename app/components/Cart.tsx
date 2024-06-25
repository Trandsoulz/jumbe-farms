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
import { useCallback, useEffect, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { fetchCart, incrementCurrentTime } from "../helpers/Apihelper";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const fetchCartLists = useCallback(async () => {
    try {
      const res = await fetchCart();
      const cartItems = res.data.data.cart.items;
      setCart(cartItems);

      console.log(res.data.data.cart);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCartLists();
  }, [fetchCartLists]);

  const incrementItem = async (id: string, amount: number) => {
    try {
      const res = await incrementCurrentTime(id, amount);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button className="scale-[1.4] active:scale-[1.3] hover:scale-[1.6] duration-200">
            <LuShoppingBag className="hover:text-primaryColor3 duration-200" />
          </button>
        </SheetTrigger>
        <SheetContent className="w-[90%] overflow-y-scroll">
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
            <SheetDescription className="text-black text-md">
              {/* <h1>Your cart is empty</h1> */}

              <main className="cart space-y-5">
                {cart.map(({ product, quantity, _id }: any) => (
                  <div className="border-2 border-primaryColor1 flex gap-4" key={_id}>
                    <div className="w-[30%]">
                      {/* <Image
                        src={"/assets/jumbo-ad1.jpg"}
                        alt={"item-1"}
                        width={150}
                        height={100}
                        className="w-full"
                        priority
                      /> */}

                      {product.images.length === 0 ? (
                        <Image
                          src={`/assets/jumbo-ad1.jpg`}
                          alt={`image of ${product.name}`}
                          priority
                          height={100}
                          width={150}
                          className="w-full"
                        />
                      ) : (
                        <Image
                          src={`https://jumbofarmsbucket.s3.eu-central-1.amazonaws.com/${product.images[0]}`}
                          alt={`image of ${name}`}
                          priority
                          height={100}
                          width={150}
                          className="w-full"
                        />
                      )}
                    </div>
                    <div className="py-2 space-y-2">
                      <h1>{`${product.name} [${product.size}kg]`}</h1>
                      <h1>₦{`${product.price.toLocaleString("en-US")}`}</h1>

                      <div className="border-2 border-primaryColor1 flex text-center w-fit">
                        <button
                          className="w-[25px] flex justify-center h-auto items-center bg-primaryColor1 text-white disabled:opacity-30"
                          disabled={quantity <= 1 || quantity >= 9}
                        >
                          <FaMinus />
                        </button>
                        <Separator orientation="vertical" />
                        <h1 className="w-[25px]"> {quantity} </h1>
                        <Separator orientation="vertical" />
                        <button
                          className="w-[25px] flex justify-center h-auto items-center bg-primaryColor1 text-white disabled:bg-primaryColor2"
                          onClick={() => incrementItem(_id, quantity + 1)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </main>
            </SheetDescription>
          </SheetHeader>

          <SheetFooter>
            <button className="fixed bg-primaryColor1 left-0 right-0 py-7 ">
              Checkout Now
            </button>
            {/* <SheetClose asChild></SheetClose> */}
            {/* <Link href={"/checkout"} className="bg-primaryColor1 absolute left-0 text-center text-white text-xl font-medium right-0 p-6 bottom-0">Checkout Now</Link> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Cart;
