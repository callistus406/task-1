import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./context/auth.context";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import { LoadingScreenIcon } from "./icons/icons";
import { ToastContainer } from "react-toastify";
import LandingScreen from "./pages/landing";
import { TableContextProvider } from "./context/table.context";
import { InvestmentTableView } from "./components/table/investmentTableView";
import Investments from "./pages/investmentsTable.comp";
import AdminLayout from "./components/layout/admin-layout.comp";
import Profile from "./pages/auth/profile";
const Login = lazy(() => import("./pages/auth/login.comp"));
const NotFound = lazy(() => import("./pages/auth/notFound.comp"));

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <LoadingScreenIcon />
  </div>
);
function App() {
  return (
    <AuthContextProvider>
      <ToastContainer />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Admin Routes */}
          <Route element={<ProtectedRoute role={4451} />}>
            <Route element={<AdminLayout />}>
              <Route
                path="/dashboard/admin"
                element={
                  <TableContextProvider>
                    <Investments />
                  </TableContextProvider>
                }
              ></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
          </Route>
          {/* <Route path="/" element={<LandingScreen />} /> */}
          <Route path="/sign-in" element={<Login />} />
          {/* <Route path="/sign-in" element={<Login />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AuthContextProvider>
  );
}

export default App;
