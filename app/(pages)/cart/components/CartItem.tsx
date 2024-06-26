"use client";

import {
  incrementCurrentItem,
  decrementCurrentItem,
} from "@/app/helpers/Apihelper";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa6";

type CartItemProps = {
  cart: any;
};

const CartItem: React.FC<CartItemProps> = ({ cart }) => {
  const router = useRouter();
  console.log(cart);

  // Increment Item in the cart
  const incrementItem = async (id: string, amount: number) => {
    try {
      const res = await incrementCurrentItem(id, amount);
      console.log(res);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  // Decrement Item in the cart
  const decrementItem = async (id: string, amount: number) => {
    try {
      const res = await decrementCurrentItem(id, amount);
      console.log(res);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {cart.length !== 0 ? (
        <main>
          <section className="cart space-y-5">
            {cart.map(({ product, quantity, _id }: any) => (
              <div
                className="border-2 border-primaryColor1 flex gap-4"
                key={_id}
              >
                <div className="w-[30%] md:w-[15%]">
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
                <div className="py-2 space-y-2 md:py-5 md:flex md:flex-col">
                  <h1>{`${product.name} [${product.size}kg]`}</h1>
                  <h1>₦{`${product.price.toLocaleString("en-US")}`}</h1>
                  <div className="md:h-[70%]" />

                  <div className="border-2 border-primaryColor1 flex text-center w-fit">
                    <button
                      className="w-[25px] flex justify-center h-auto items-center bg-primaryColor1 text-white disabled:opacity-30"
                      disabled={quantity <= 1}
                      onClick={() => decrementItem(product._id, 1)}
                    >
                      <FaMinus />
                    </button>
                    <Separator orientation="vertical" />
                    <h1 className="w-[25px]"> {quantity} </h1>
                    <Separator orientation="vertical" />
                    <button
                      className="w-[25px] flex justify-center h-auto items-center bg-primaryColor1 text-white disabled:bg-primaryColor2"
                      onClick={() => incrementItem(product._id, 1)}
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
    </>
  );
};

export default CartItem;
