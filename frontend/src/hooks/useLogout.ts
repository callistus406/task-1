import Cookies from "js-cookie";
import { useAuth } from "./useAuth";

const useLogout = () => {
  const { setUser } = useAuth();
  const logout = (token = "authToken") => {
    Cookies.remove(token);
    setUser(null);
  };
  return logout;
};
export default useLogout;
