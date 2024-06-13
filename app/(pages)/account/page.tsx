import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Navigation from "@/app/components/Navigation";
import React from "react";
import Address from "./components/Address";

const Account = () => {
  return (
    <>
      {/* Navigation panel */}
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>
      <Navigation>
        <div className="flex justify-between py-4 px-3">
          <h1 className="text-2xl ">Account overview</h1>
          <Address />
        </div>

        <main className="gap-4 grid md:grid-cols-2 ">
          {[...Array(3)].map((index) => (
            <>
              <section
                key={index}
                className="border-2 p-4 space-y-2 m-4 md:m-0"
              >
                <div className="flex justify-between">
                  {" "}
                  <h1>Your shipping Address:</h1>{" "}
                  <button className="active:scale-90 hover:scale-110 duration-200 border-2 border-red-600 text-red-300 px-3 py-2">
                    Delete
                  </button>
                </div>

                <p>John Doe</p>
                <p>
                  No. 1, chief ejuke-street, by chinda, off Ada-George road{" "}
                </p>
                <p>PORT-HARCOURT, RIVERS </p>
                <p>08123456789 | 08123456789 </p>
              </section>
            </>
          ))}
        </main>
      </Navigation>

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default Account;
