"use client";

import Image from "next/image";
import React from "react";

type ConfirmationProp = {
  address: any;
  totalPrice: number;
  cart: any;
};

const Confirmation: React.FC<ConfirmationProp> = ({
  address,
  cart,
  totalPrice,
}) => {
  return (
    <main>
      <h1 className="mb-6">Confirm your order information</h1>

      <section className="border-2 border-primaryColor1 p-1 my-3">
        <h1>Total Price : ₦{totalPrice.toLocaleString("en-US")} </h1>
      </section>

      {address?.full_name ? (
        <section className="border-2 border-primaryColor1 p-4 space-y-2">
          <div className="flex justify-between">
            {" "}
            <h1>Your shipping Address:</h1>{" "}
            {/* <button className="active:scale-90 hover:scale-110 duration-200 border-2 border-red-600 text-red-300 px-3 py-2">
                  Delete
                </button> */}
          </div>

          <p>{address.full_name}</p>
          <p>{address.street}</p>
          <p>
            {address.city}, {address.state}{" "}
          </p>
          <p>
            {address.tel} | {address.tel_2}{" "}
          </p>
        </section>
      ) : (
        <main className="h-[15vh] flex flex-col justify-center text-center items-center border-primaryColor1 border-2">
          <h1 className="font-medium">
            You don&apos;t have a shipping address
          </h1>

          <p>Go back to add one</p>
        </main>
      )}

      <section className=" my-3 space-y-3">
        {cart.map(({ product, quantity, _id }: any) => (
          <div className="border-2 border-primaryColor1 flex gap-4" key={_id}>
            <div className="w-[35%] cursor-pointer">
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
              <h1>
                {`${product.name} [${product.size}kg]`} x {quantity}
              </h1>
              <h1>₦{`${product.price.toLocaleString("en-US")}`}</h1>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Confirmation;
