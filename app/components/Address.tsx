"use client";

import React, { ChangeEvent, useState } from "react";

type AddressProps = {
  setGlobalAddress: any;
  globalAddress: any;
};

const Address: React.FC<AddressProps> = ({
  setGlobalAddress,
  globalAddress,
}) => {
  const [address, setAddress] = useState({
    full_name: globalAddress.full_name,
    street: globalAddress.street,
    city: globalAddress.city,
    state: globalAddress.state,
    tel: globalAddress.tel,
    tel_2: globalAddress.tel_2,
  });

  const handleInput = async (e: ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });

    setGlobalAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <h1>Please input your contact informations</h1>

      <form
        // onSubmit={HandleSubmit}
        className="space-y-5 my-4 text-black"
      >
        <div className="">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            required
            name="full_name"
            className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full"
            onChange={handleInput}
            value={address?.full_name}
            placeholder="John Doe"
          />
        </div>
        <div className="">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            required
            name="street"
            className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full"
            onChange={handleInput}
            value={address?.street}
            placeholder="No. 1, chief ejuke-street, by chinda, off Ada-George road"
          />
        </div>

        <div className="">
          <label htmlFor="city">City</label>
          <input
            type="text"
            required
            name="city"
            className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full"
            onChange={handleInput}
            value={address?.city}
            placeholder="Port Harcourt"
          />
        </div>
        <div className="">
          <label htmlFor="state">State</label>
          <input
            type="text"
            required
            name="state"
            className="border p-3 h-12 bg-[#ecebf382] rounded-md text-sm md:text-base block outline-none w-full"
            onChange={handleInput}
            value={address?.state}
            placeholder="Rivers"
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
              value={address?.tel}
            />
          </div>
        </div>

        <div className="">
          <label htmlFor="phone_number_2">2nd Phone Number</label>
          <div className="flex border bg-[#ecebf382] rounded-md">
            <h1 className="relative top-3 pl-3">+234</h1>
            <input
              type="text"
              // required
              name="tel_2"
              placeholder="812 234 4567"
              className=" p-3 h-12 bg-transparent text-sm md:text-base block outline-none w-full"
              onChange={handleInput}
              value={address?.tel_2}
            />
          </div>
        </div>
      </form>
    </main>
  );
};

export default Address;
