"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Navigation from "@/app/components/Navigation";
import React, { useEffect, useState } from "react";
import Address from "./components/Address";
import { getAddress } from "@/app/helpers/Apihelper";
import Loading from "@/app/loading";
import { ErrorToast } from "@/app/helpers/Toast";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [address, setAddress] = useState<AddressProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAddress = async () => {
      setLoading(true);
      setError(null); // reset error before new fetch

      try {
        const res = await getAddress();
        console.log(res.data.profile);
        setAddress(res.data.profile);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, []);

  console.log(address);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* Navigation panel */}
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>
      <Navigation>
        <div className="flex justify-between py-4 px-3">
          <h1 className="text-xl md:text-2xl ">Account overview</h1>
          <Address currentaddress={address} />
        </div>

        {error && (
          <main className="h-[60vh] flex flex-col justify-center items-center text-center">
            <h1 className="md:text-xl text-base font-medium">
              You are unauthorised. Try refreshing the page.
            </h1>
            <p className="text-base">
              If the issue persists, then go to the Login page
            </p>
          </main>
        )}

        {error ? (
          ""
        ) : address?.full_name ? (
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
