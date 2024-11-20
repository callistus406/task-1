import { axiosInstance } from "./axios.core";

export const adminDashBoard = async (token: string) => {
  const response = await axiosInstance.get(`/admin/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
