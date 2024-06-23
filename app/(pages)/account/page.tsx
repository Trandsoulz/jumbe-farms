"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Navigation from "@/app/components/Navigation";
import React, { useEffect, useState } from "react";
import Address from "./components/Address";
import { getAddress } from "@/app/helpers/Apihelper";
import Loading from "@/app/loading";

type AddressProps = {
  _id: string;
  city: string;
  full_name: string;
  state: string;
  street: string;
  tel: string;
  tel_2: string;
};

const Account = () => {
  const [address, setAddress] = useState<AddressProps | null>(null);

  useEffect(() => {
    const fetchAddress = async () => {
      const profile = await getAddress();
      console.log(profile.data.data.profile);

      setAddress(profile.data.data.profile);
    };

    fetchAddress();
  }, []);

  console.log(address);

  // if (!address) {
  //   return <Loading />;
  // }

  return (
    <>
      {/* Navigation panel */}
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>
      <Navigation>
        <div className="flex justify-between py-4 px-3">
          <h1 className="text-2xl ">Account overview</h1>
          <Address currentaddress={address} />
        </div>

        {address ? (
          <main className="gap-4 grid md:grid-cols-2 ">
            <section className="border-2 p-4 space-y-2 m-4 md:m-0">
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
          </main>
        ) : (
          <main className="h-[50vh] flex flex-col justify-center items-center">
            <h1 className="text-xl font-medium">
              You don&apos;t have a shipping address
            </h1>

            <p>Click on the Add/Edit Address button, to create one</p>
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

export default Account;
