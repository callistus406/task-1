import { axiosInstance } from "./axios.core";

export const findTransactions = async (url: string, token: string) => {
  const response = await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const findTransaction = async (transactionId: string, token: string) => {
  const response = await axiosInstance.get(
    `/admin/transactions/${transactionId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
export const transact = async (url: string, amount: number, token: string) => {
  const response = await axiosInstance.post(
    url,
    { amount: amount },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
export const findWallet = async (token: string) => {
  const response = await axiosInstance.get(
    "/wallet",

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
export const findTransactionsAnalytics = async (url: string, token: string) => {
  const response = await axiosInstance.get(
    url,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
export const findAnalyticsCount = async (url: string, token: string) => {
  const response = await axiosInstance.get(
    url,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
