import { useLocation, useNavigate } from "react-router-dom";

const useAdminLogin = () => {
  // const { set }: AuthContextType = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
};

export default useAdminLogin;
