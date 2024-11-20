import Cookies from "js-cookie";
import { useAuth } from "./useAuth";

const useCookie = () => {
  const { setUser } = useAuth();
  const setAuthToken = (
    name: string,
    token: string,
    data?: { expTime?: number; secure?: boolean; sameSite?: string }
  ) => {
    Cookies.set(name, token, {
      expires: 1,
      secure: true,
      sameSite: "Strict",
    });
  };

  const getAuthToken = (name: string) => {
    return Cookies.get(name);
  };

  return { setAuthToken, getAuthToken };
};

export default useCookie;
