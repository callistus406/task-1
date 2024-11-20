import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoadingPage from "../loader.comp";

interface ProtectedRouteProps {
  roles: number[]; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles }) => {
  const { user, loading } = useAuth(); 
  const location = useLocation();

  if (loading) {
    return <LoadingPage />;
  }

  if (user && roles.includes(user.user.role)) {
    return <Outlet />;
  }

  if (user && user.accessToken) {
    return <Navigate to="/auth-error" state={{ from: location }} replace />;
  }

  return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default ProtectedRoute;
