import axios from "axios";
import { getCookie } from "cookies-next";

// import {
//   LoginProps,
//   RegisterProps,
//   VerficationProps,
// } from "../types/authprops";

const api: string = "https://api.jumbo.farm/api/v1";
const token = getCookie("x-auth-token");

const config: any = {
  headers: {
    // "Content-Type": "application/json",
    // api_key: process.env.NEXT_PUBLIC_API_KEY,
    Authorization: `Bearer ${token}`,
  },
};

export const registerUser = async (payload: any) => {
  const res = await axios.post(`${api}/user`, payload);

  return res;
};

export const logUser = async (payload: any) => {
  const res = await axios.post(`${api}/user/login`, payload);

  return res;
};

export const getAddress = async () => {
  const res = await axios.get(`${api}/profile`, config);
  return res;
};

export const updateAddress = async (payload: any) => {
  const res = await axios.post(`${api}/profile`, payload, config);

  return res;
};

export const getCategories = async () => {
  const res = await axios.get(`${api}/category`);

  return res;
};

export const getProductsByCategories = async (url: string) => {
  const res = await axios.get(`${api}/product/?category=${url}`);

  return res;
};

export const getProductById = async (id: string) => {
  const res = await axios.get(`${api}/product/single?id=${id}`);

  return res;
};
