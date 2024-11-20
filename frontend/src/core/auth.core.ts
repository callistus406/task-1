import { ILogin, IRegistration, IUpdateProfile } from "../@types/type";
import { axiosInstance } from "./axios.core";

export const login = async (data: ILogin) => {
  const response = await axiosInstance.post(`/sign-in`, data);
  return response.data;
};
export const registration = async (data: IRegistration) => {
  const response = await axiosInstance.post(`/sign-in`, data);
  return response.data;
};

export const requestOtp = async (email: string) => {
  const response = await axiosInstance.post(`/request-otp`, { email });
  return response.data;
};

export const verifyOtp = async (email: string, otp: string) => {
  const response = await axiosInstance.post(`/verify-otp`, { email, otp });
  return response.data;
};
export const getProfile = async (token: string) => {
  const response = await axiosInstance.get(`/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const updateProfile = async (data:IUpdateProfile,token: string) => {
  const response = await axiosInstance.patch(`/profile`, data,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
