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
import { PaystackButton } from "react-paystack";
import { useCallback, useEffect, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import {
  decrementCurrentItem,
  fetchCart,
  incrementCurrentItem,
} from "../helpers/Apihelper";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "../helpers/Toast";

const Cart = () => {
  const router = useRouter();
  const publicKey = process.env.NEXT_PUBLIC_JUMBO_FARM_PAYSTACK_PUBLIC_KEY;
  const totalPrice = 100000;

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
      const res = await incrementCurrentItem(id, amount);
      console.log(res);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const decrementItem = async (id: string, amount: number) => {
    try {
      const res = await decrementCurrentItem(id, amount);
      console.log(res);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

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
              {cart.length !== 0 ? (
                <main>
                  <section className="border-2 border-primaryColor1 p-1 my-3">
                    <h1>
                      Total Price : ₦{totalPrice.toLocaleString("en-US")}{" "}
                    </h1>
                  </section>

                  <section className="cart space-y-5">
                    {cart.map(({ product, quantity, _id }: any) => (
                      <div
                        className="border-2 border-primaryColor1 flex gap-4"
                        key={_id}
                      >
                        <div className="w-[35%]">
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
                  </section>
                </main>
              ) : (
                <h1>Your cart is empty</h1>
              )}
            </SheetDescription>
          </SheetHeader>

          <SheetFooter>
            {cart.length !== 0 && (
              // <button
              //   className="bg-primaryColor1 text-white mt-5 text-xl md:py-4 w-full py-7"
              //   onClick={() => alert("Checked Out")}
              // >
              //   Checkout Now
              // </button>
              // @ts-ignore
              <PaystackButton
                {...componentProps}
                className="bg-primaryColor1 text-white mt-5 text-xl md:py-4 w-full py-7"
              />
            )}
            {/* <SheetClose asChild></SheetClose> */}
            {/* <Link href={"/checkout"} className="bg-primaryColor1 absolute left-0 text-center text-white text-xl font-medium right-0 p-6 bottom-0">Checkout Now</Link> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Cart;
