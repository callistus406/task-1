import { ICreateInvestment } from "../@types/type";
import { axiosInstance } from "./axios.core";

export const adminCreteInvestment = async (
  data: ICreateInvestment,
  token: string
) => {
  const response = await axiosInstance.post(`/investment`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const findInvestments = async (
size= 10,page= 1, sort:string, sortDirection= 1,
  token: string
) => {
  const response = await axiosInstance.get(`/investments?size=${size}&sort=${sort}&sortDirection=${sortDirection}&page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
