"use client";

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import IMG1 from "@/public/assets/asset-2.jpg";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { getCategories, searchProduct } from "@/app/helpers/Apihelper";
import Loading from "./loading";
import Products from "../categories/[id]/components/Products";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get params value from the URL, and store in a query string
  const queryWord: any = searchParams.get("query");

  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>();

  // Functionality for the search query
  const searchProductFunc = async (id: string) => {
    try {
      setLoading(true);
      const res = await searchProduct(id); // id is the query input we're searching

      setProducts(res.data.data.results);

      console.log(products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Search Product Functionality By Query
  const searchProductByQuery = async (id: string) => {
    // Set the query
    const params = new URLSearchParams(searchParams);
    params.set("query", id); // id is the query input we're searching

    // Set the params and push it to the url
    const queryString = params.toString();
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath);

    // Functionality for the search query
    searchProductFunc(id); // id is the query input we're searching
  };

  useEffect(() => {
    const getCategoriesForSearch = async () => {
      try {
        setLoading(true);
        const res = await getCategories();

        setCategories(res.data.data.categories);

        console.log(res.data.data.categories);
        console.log(categories);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCategoriesForSearch();
    searchProductFunc(queryWord); // queryWord, is to get the query from the url
    console.log(products);
  }, []);

  // console.log("This is the categories", categories);

  // Handle Changes
  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Handle Submitting
  const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setSearch(search);
    searchProductByQuery(search); // search, is query you're setting from the state
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <nav className="sticky top-0 z-10">
        <Navbar />
      </nav>

      <main className="max-w-[90rem] mx-auto p-8 border-b-2 border-primaryColor">
        <form
          action=""
          onSubmit={HandleSubmit}
          className=" md:mx-auto flex border bg-[#ecebf382] rounded-md md:w-3/4"
        >
          <input
            type="text"
            name="search"
            onChange={HandleChange}
            className=" p-3 h-12 bg-transparent text-sm md:text-base block outline-none w-full placeholder:text-sm"
            placeholder="Search..."
          />
          <button className=" px-3 cursor-pointer"> Search </button>
        </form>

        {/* <div className="flex border bg-[#ecebf382] rounded-md">
              <input
              type={password ? "password" : "text"}
              required
              name="password"
              className=" p-3 h-12 bg-transparent text-sm md:text-base block outline-none w-full placeholder:text-sm"
              onChange={handleInput}
              placeholder="* minimum 8 charecters"
              />
              <h1
              className="relative top-3 pr-3 cursor-pointer"
              onClick={() => setPassword(!password)}
              >
              {password ? "Show" : "Hide"}
              </h1>
            </div> */}
      </main>

      {products && (
        <>
          <h1 className="text-center md:text-2xl text-base p-8">
            Showing Results of &quot;{queryWord}&quot;
          </h1>

          <Products products={products} />
        </>
      )}

      {/* footer section */}
      <footer className="max-w-[90rem] mx-auto pt-10 lg:pt-16 px-4 lg:px-16 bg-[#f1f3f5]">
        <Footer />
      </footer>
    </>
  );
};

export default Search;
