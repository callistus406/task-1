import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { createContext, ReactNode, useEffect, useState } from "react";

// export interface AuthContextType {
//   user: any | null;
//   setUser: (value: any) => void;
//   loading: boolean;
// }

const AuthContext = createContext<any>({});

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp && decodedToken.exp > currentTime) {
          setUser(decodedToken);
        } else {
          Cookies.remove("authToken");
        }
      } catch (error) {
        console.error("Invalid token", error);
        Cookies.remove("authToken");
      }
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
