import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import { AuthContextProvider } from "./context/auth.context";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import { LoadingScreenIcon } from "./icons/icons";
import { ToastContainer } from "react-toastify";
import { TableContextProvider } from "./context/table.context";
import Investments from "./pages/investments/investmentsTable.comp";
import Layout from "./components/layout/admin-layout.comp";
import Profile from "./pages/auth/profile";
import CreateInvestment from "./pages/investments/createInvestment";
import Transactions from "./pages/transactions/TransactionTable.comp";
import TransactionEdit from "./pages/transactions/transactionEdit.comp";
import Subscriptions from "./pages/subscriptions/SubscriptionTable.comp";
import Dashboard from "./pages/dashboard/adminDashboard";
import AdminLayout from "./components/layout/admin-layout.comp";
import InvestorLayout from "./components/layout/investore-layout.comp";
import PlanSubscription from "./pages/subscriptions/createSubscription.comp";
import { InvestorDashboard } from "./pages/dashboard/investoreDashboard";
import EditInvestment from "./pages/investments/editInvestment";

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
      <Route path="/" element={<Navigate to="/sign-in" replace />} />

      {/* Admin Routes */}
      <Route element={<ProtectedRoute roles={[4451]} />}>
        <Route element={<AdminLayout />}>
          <Route
            path="/dashboard/admin"
            element={
              <TableContextProvider>
                <Dashboard />
              </TableContextProvider>
            }
          />
          <Route
            path="/admin/investments"
            element={
              <TableContextProvider>
                <Investments />
              </TableContextProvider>
            }
          />
          <Route
            path="/admin/transactions"
            element={
              <TableContextProvider>
                <Transactions />
              </TableContextProvider>
            }
          />
          <Route
            path="/admin/subscriptions"
            element={
              <TableContextProvider>
                <Subscriptions />
              </TableContextProvider>
            }
          />
          <Route
            path="/edit-transaction/:txId"
            element={<TransactionEdit />}
              />
              <Route
            path="/admin/edit-investment/:id"
            element={<EditInvestment />}
          />
          <Route
            path="/create-investment-plan"
            element={<CreateInvestment />}
          />
          <Route path="/admin/profile" element={<Profile />} />
        </Route>
      </Route>

      {/* Investor Routes */}
      <Route element={<ProtectedRoute roles={[1002]} />}>
        <Route element={<InvestorLayout />}>
          <Route
            path="/dashboard/investor"
            element={
              <TableContextProvider>
                <InvestorDashboard />
              </TableContextProvider>
            }
          />
          <Route
            path="/investments"
            element={
              <TableContextProvider>
                <Investments />
              </TableContextProvider>
            }
          />
          <Route
            path="/subscriptions"
            element={
              <TableContextProvider>
                <Subscriptions />
              </TableContextProvider>
            }
          />
          <Route
            path="/transactions"
            element={
              <TableContextProvider>
                <Transactions />
              </TableContextProvider>
            }
              />
              <Route
            path="/profile"
            element={
                <Profile />
            }
          />
          <Route
            path="/plan-subscription/:subId"
            element={<PlanSubscription />}
          />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

      {/* Login Route */}
      <Route path="/sign-in" element={<Login />} />

      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
</AuthContextProvider>

  );
}

export default App;
