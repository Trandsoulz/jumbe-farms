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
import { PaystackButton, usePaystackPayment } from "react-paystack";
import { AiOutlineLoading } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import {
  createOrder,
  decrementCurrentItem,
  deleteCart,
  deleteCartItem,
  fetchCart,
  incrementCurrentItem,
} from "../helpers/Apihelper";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "../helpers/Toast";
import { RiDeleteBinLine } from "react-icons/ri";
import { useCartIdStore } from "../store/Store";
import CartItem from "./CartItem";
import Address from "./Address";
import Confirmation from "./Confirmation";

const Cart = () => {
  const { setCartId } = useCartIdStore();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [user, setUser] = useState<any>();

  // This is the address for the delivery that'll be passed as props to the confirmation page
  const [globalAddress, setGlobalAddress] = useState({
    full_name: "",
    street: "",
    city: "",
    state: "",
    tel: "",
    tel_2: "",
  });

  const [orderState, setOrderState] = useState<string>("cart");

  const publicKey = process.env.NEXT_PUBLIC_JUMBO_FARM_PAYSTACK_PUBLIC_KEY;
  const test_publicKey =
    process.env.NEXT_PUBLIC_JUMBO_FARM_PAYSTACK_PUBLIC_KEY_LIVE;

  const fetchCartInCart = async () => {
    try {
      const res = await fetchCart();
      const cartItems = res.data.data.cart.items;
      const totalPrice = res.data.data.cart.totalPrice;
      const user = res.data.data.cart.user;
      setTotalPrice(totalPrice);
      setCart(cartItems);
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

  // Create Order & Delete Cart
  const createUserOrder = async () => {
    try {
      const order = {
        ...globalAddress,
        items: cart,
        totalPrice,
      };

      console.log("This is the ", order);
      const res = await createOrder(order);
      const deletedCart = await deleteCart();
      console.log("This is the cart that has been deleted ", deletedCart);
      console.log("This is the order ", res);

      // Set Success Toast.
      SuccessToast(
        "Thanks for doing business with us! Check your mail for your reciept and come back soon!!"
      );

      // Reload page
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error: any) {
      console.log(error);
      ErrorToast(error.response.data.message);
    }
  };

  // Paystack
  const componentProps = {
    email: user?.email,
    amount: totalPrice * 100, // Convert from kobo naira
    metadata: {
      name: user?.name,
      // number: "08113848299",
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => createUserOrder(),
    // SuccessToast("Thanks for doing business with us! Come back soon!!"),
    onClose: () => ErrorToast("We're sorry your order wasn't successful."),
  };

  // const config = {
  //   email: user?.email,
  //   amount: totalPrice * 100,
  //   metadata: {
  //     name: user?.name,
  //     // number: "08113848299",
  //   },
  //   publicKey,
  //   text: "Check Out",
  // };

  // // you can call this function anything
  // const onSuccess = () => {
  //   SuccessToast("Thanks for doing business with us! Come back soon!!");
  //   console.log("Thanks for doing business with us! Come back soon!!");
  //   // Implementation for whatever you want to do with reference and after success call.
  //   // console.log(reference);
  // };

  // // you can call this function anything
  // const onClose = () => {
  //   ErrorToast("Wait! Don't leave");
  //   // implementation for  whatever you want to do when the Paystack dialog closed.
  //   // console.log("closed");
  // };

  // // @ts-ignore
  // const initializePayment = usePaystackPayment(config);

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
            <SheetTitle>
              {orderState === "cart"
                ? "Your Cart"
                : orderState === "address"
                ? "Your Address"
                : orderState === "confirmation"
                ? "Confirm Your Order"
                : ""}
            </SheetTitle>
            <SheetDescription className="text-black text-md">
              {orderState === "cart" ? (
                <CartItem setMainCart={setCart} />
              ) : orderState === "address" ? (
                <Address
                  setGlobalAddress={setGlobalAddress}
                  globalAddress={globalAddress}
                />
              ) : orderState === "confirmation" ? (
                <Confirmation
                  address={globalAddress}
                  totalPrice={totalPrice}
                  cart={cart}
                />
              ) : (
                ""
              )}
            </SheetDescription>
          </SheetHeader>

          {cart.length !== 0 && (
            // <button
            //   className="bg-primaryColor1 text-white mt-5 text-xl md:py-4 w-full py-7"
            //   onClick={() => alert("Checked Out")}
            // >
            //   Checkout Now
            // </button>
            <SheetFooter>
              {orderState === "cart" ? (
                // This button will show when your in the cart component
                <button
                  className="bg-primaryColor1 text-white mt-5 text-xl w-full py-4"
                  onClick={() => setOrderState("address")}
                >
                  Confirm Your Order
                </button>
              ) : orderState === "address" ? (
                // This button will show when your in the address component
                <div className="flex justify-between gap-5 w-full">
                  <button
                    className="bg-primaryColor1 text-white mt-5 text-xl w-1/2 py-4"
                    onClick={() => setOrderState("cart")}
                  >
                    Back
                  </button>
                  <button
                    className="bg-primaryColor1 text-white mt-5 text-xl w-1/2 py-4"
                    onClick={() => setOrderState("confirmation")}
                  >
                    Check Out
                  </button>
                </div>
              ) : (
                ""
              )}

              {/* @ts-ignore */}
              {/* <button
                  onClick={() => {
                    // @ts-ignore
                    initializePayment(onSuccess, onClose);
                    }}
                  className="bg-primaryColor1 text-white mt-5 text-xl w-full py-4"
                >
                  Check Out
                </button> */}

              {orderState === "confirmation" && (
                // This button will show when your in the confirmations component
                <div className="flex justify-between gap-5 w-full">
                  <button
                    className="bg-primaryColor1 text-white mt-5 text-xl w-1/2 py-4"
                    onClick={() => setOrderState("address")}
                  >
                    Back
                  </button>
                  <SheetClose asChild className="w-1/2">
                    <button className="bg-primaryColor1 text-white mt-5 text-xl w-full py-4">
                      {/* @ts-ignore */}
                      <PaystackButton {...componentProps} />
                    </button>
                  </SheetClose>
                </div>
              )}

              {/* <button className="bg-primaryColor1 text-white mt-5 text-xl w-full py-4">
                  @ts-ignore
                  <PaystackButton {...componentProps} />
                </button> */}
            </SheetFooter>
          )}
          {/* <Link href={"/checkout"} className="bg-primaryColor1 absolute left-0 text-center text-white text-xl font-medium right-0 p-6 bottom-0">Checkout Now</Link> */}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Cart;
