"use client";
import { Separator } from "@radix-ui/react-separator";
import router from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import loading from "../loading";
import { useRouter } from "next/navigation";
import {
  incrementCurrentItem,
  decrementCurrentItem,
  deleteCartItem,
  fetchCart,
} from "../helpers/Apihelper";
import { useCartIdStore } from "../store/Store";
import Image from "next/image";

type CartItemProps = {
  setMainCart: any;
};

const CartItem: React.FC<CartItemProps> = ({ setMainCart }) => {
// const CartItem = () => {
  const { setCartId } = useCartIdStore();
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  const router = useRouter();

  const fetchCartInCart = async () => {
    try {
      const res = await fetchCart();
      const cartItems = res.data.data.cart.items;
      const totalPrice = res.data.data.cart.totalPrice;
      const user = res.data.data.cart.user;

      setCart(cartItems);
      setMainCart(cartItems)

      setTotalPrice(totalPrice);

      setUser(user);

      // Get all the productIds in the cart and set them to a global state
      const productIds = cartItems.map(({ product }: any) => {
        return product._id;
      });

      // console.log(productIds);
      setCartId(productIds);
      // Get all the productIds in the cart and set them to a global state
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCartLists = useCallback(async () => {
    await fetchCartInCart();
  }, []);

  useEffect(() => {
    fetchCartLists();
  }, [fetchCartLists]);

  // Increment Item in the cart
  const incrementItem = async (id: string, amount: number) => {
    try {
      const res = await incrementCurrentItem(id, amount);
      console.log(res);
      setLoading((prevLoading) => ({ ...prevLoading, [id]: true }));
      await fetchCartInCart();
      setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
    } catch (error) {
      setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
      console.log(error);
    }
  };
  // Decrement Item in the cart
  const decrementItem = async (id: string, amount: number) => {
    try {
      const res = await decrementCurrentItem(id, amount);
      console.log(res);
      setLoading((prevLoading) => ({ ...prevLoading, [id]: true }));
      await fetchCartInCart();
      setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
    } catch (error) {
      setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
      console.log(error);
    }
  };

  // Delete Item in the cart
  const deleteItem = async (id: string) => {
    try {
      const res = await deleteCartItem(id);
      console.log(res);
      // setLoading((prevLoading) => ({ ...prevLoading, [id]: true }));
      await fetchCartInCart();
      // setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
    } catch (error) {
      // setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
      console.log(error);
    }
  };

  return (
    <>
      {cart.length !== 0 ? (
        <main>
          <section className="border-2 border-primaryColor1 p-1 my-3">
            <h1>Total Price : ₦{totalPrice.toLocaleString("en-US")} </h1>
          </section>

          <section className="cart space-y-5">
            {cart.map(({ product, quantity, _id }: any) => (
              <div
                className="border-2 border-primaryColor1 flex gap-4"
                key={_id}
              >
                <div
                  className="w-[35%] cursor-pointer"
                  onClick={() => router.push(`/product/${product._id}`)}
                >
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
                      alt={`image of ${product.name}`}
                      priority
                      height={100}
                      width={150}
                      className="w-full"
                    />
                  )}
                </div>
                <div className="py-2 space-y-2 w-[65%]">
                  <h1>{`${product.name} [${product.size}kg]`}</h1>
                  <h1>₦{`${product.price.toLocaleString("en-US")}`}</h1>
                  <div className=" flex justify-between h-auto items-center pr-4">
                    <div className="border-2 border-primaryColor1 flex text-center w-fit">
                      <button
                        className="w-[25px] flex justify-center h-auto items-center bg-primaryColor1 text-white disabled:opacity-30 active:bg-primaryColor2"
                        disabled={quantity <= 1 || loading[product._id]}
                        onClick={() => decrementItem(product._id, 1)}
                      >
                        <FaMinus />
                      </button>
                      <Separator orientation="vertical" />
                      <h1 className="w-[25px] text-center flex justify-center">
                        {" "}
                        {loading[product._id] ? (
                          <AiOutlineLoading className="animate-spin my-1" />
                        ) : (
                          quantity
                        )}{" "}
                      </h1>
                      <Separator orientation="vertical" />
                      <button
                        className="w-[25px] flex justify-center h-auto items-center bg-primaryColor1 text-white disabled:opacity-30 active:bg-primaryColor2"
                        disabled={quantity >= 15 || loading[product._id]}
                        onClick={() => incrementItem(product._id, 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <button>
                      <RiDeleteBinLine
                        className="text-primaryColor1 text-xl"
                        onClick={() => deleteItem(product._id)}
                      />
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
    </>
  );
};

export default CartItem;
