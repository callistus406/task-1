import useCookie from "./useCookie";


const useAuthToken = () => {
  const { getAuthToken } = useCookie();

  const token = getAuthToken("authToken");

  return { token };
};

export default useAuthToken;
