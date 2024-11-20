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
export const adminUpdateInvestment = async (
  data: ICreateInvestment,
  id: string,
  token: string
) => {
  const response = await axiosInstance.patch(
    `/admin/update/investment/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
export const findInvestments = async (url: string, token: string) => {
  const response = await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const findInvestment = async (id: string, token: string) => {
  const response = await axiosInstance.get(`/admin/investment/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const updateTransaction = async (
  status: string,
  transactionsId: string,
  token: string
) => {
  const response = await axiosInstance.patch(
    `/admin/update/transaction/${transactionsId}`,
    { action: status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const investmentStatistics = async (token: string) => {
  const response = await axiosInstance.get(
    `/admin/inv/analytics`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
