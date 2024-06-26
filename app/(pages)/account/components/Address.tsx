"use client";

import { updateAddress } from "@/app/helpers/Apihelper";
import { SuccessToast, ErrorToast } from "@/app/helpers/Toast";
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
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type AddressProps = {
  currentaddress: any;
};

const Address: React.FC<AddressProps> = ({ currentaddress }) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [address, setAddress] = useState({
    full_name: "",
    street: "",
    city: "",
    state: "",
    tel: "",
    tel_2: "",
  });

  useEffect(() => {
    // Set address
    console.log(address);

    setTimeout(() => {
      setAddress(currentaddress);
    }, 5000);
  }, [address, currentaddress]);

  const handleInput = async (e: ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Set Loading state
    setLoading(true);

    // Make request to login user
    try {
      const res = await updateAddress(address);
      console.log(res);

      setLoading(false);
      SuccessToast(res?.data?.message);
      router.refresh();
    } catch (errMessage: any) {
      console.error(errMessage);
      setLoading(false);

      const err = errMessage?.response?.data?.error;
      ErrorToast(err);
    }
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button className=" border-2  px-3 py-2 active:scale-[1] hover:scale-[.8] duration-200">
            Add/Edit Address
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add/Edit your Address</SheetTitle>
            <SheetDescription>
              {/* <h1>Your Address is empty</h1> */}
              <form
                onSubmit={HandleSubmit}
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
                      required
                      name="tel_2"
                      placeholder="812 234 4567"
                      className=" p-3 h-12 bg-transparent text-sm md:text-base block outline-none w-full"
                      onChange={handleInput}
                      value={address?.tel_2}
                    />
                  </div>
                </div>

                <button
                  className="px-7 py-3 bg-primaryColor text-white rounded-sm hover:scale-110 active:scale-90 duration-200 disabled:opacity-75 disabled:scale-100 disabled:cursor-wait"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Save Changes"}
                </button>
              </form>
            </SheetDescription>
          </SheetHeader>

          {/* <SheetFooter>
            <SheetClose asChild></SheetClose>
            <Link
              href={"/checkout"}
              className="bg-primaryColor1 absolute left-0 text-center text-white text-xl font-medium right-0 p-6 bottom-0"
            >
              Checkout Now
            </Link>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Address;
