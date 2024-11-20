import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoadingPage from "../loader.comp";


const ProtectedRoute = ({ role }: { role: number }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
console.log("======================================",user)
  if (loading) {
    return <LoadingPage />;
  }
  return user && user?.role === role ? (
    <Outlet />
  ) : user && user.accessToken ? (
    <Navigate to="/auth-error" state={{ from: location }} replace />
  ) : (
    <Navigate
      to={role === 890 ? "/admin/sign-in" : "/sign-in"}
      state={{ from: location }}
      replace
    />
  );
};

export default ProtectedRoute;
