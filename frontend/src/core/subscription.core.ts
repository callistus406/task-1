import { InvestmentSubscription } from "../@types/type";
import { axiosInstance } from "./axios.core";

export const findSubscriptions = async (url: string, token: string) => {
  const response = await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const createSubscription = async (
  data: InvestmentSubscription,
  token: string
) => {
  const response = await axiosInstance.post("/plan/subscribe", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const removeSubscription = async (
  id: string,
  token: string
) => {
  const response = await axiosInstance.delete(`/plan/unsubscribe/${id}`,  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
