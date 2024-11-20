import { JwtPayload, jwtDecode } from "jwt-decode";

interface DecodedToken extends JwtPayload {
  user: {
    role: string;
  };
}

const useTokenInfo = () => {
  const decodeToken = (token: string) => {
    const decodedToken = jwtDecode<any>(token);

    return decodedToken;
  };

  return decodeToken;
};

export default useTokenInfo;
