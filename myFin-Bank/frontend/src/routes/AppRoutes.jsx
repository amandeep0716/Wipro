import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/AdminDashboard";
import CustomerDashboard from "../pages/CustomerDashboard";
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";
import Transfer from "../pages/Transfer";
import Transactions from "../pages/Transactions";
import LoanApply from "../pages/LoanApply";
import Profile from "../pages/Profile";
import ChangePassword from "../pages/ChangePassword";
import MyLoans from "../pages/MyLoans";
import AdminCustomers from "../pages/AdminCustomers";
import AdminAccounts from "../pages/AdminAccounts";
import AdminPendingLoans from "../pages/AdminPendingLoans";
import SupportChat from "../pages/SupportChat";
import AdminChat from "../pages/AdminChat";
import AdminLoans from "../pages/AdminLoans";
import FixedDeposit from "../pages/FixedDeposit";
import RecurringDeposit from "../pages/RecurringDeposit";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Auth */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Dashboards */}
      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/customer-dashboard"
        element={<CustomerDashboard />}
      />

      {/* Banking */}
      <Route
        path="/deposit"
        element={<Deposit />}
      />

      <Route
        path="/withdraw"
        element={<Withdraw />}
      />

      <Route
        path="/transfer"
        element={<Transfer />}
      />

      <Route
        path="/transactions"
        element={<Transactions />}
      />

      {/* Loans */}
      <Route
        path="/loan-apply"
        element={<LoanApply />}
      />

      <Route
  path="/profile"
  element={<Profile />}
/>
<Route
  path="/change-password"
  element={<ChangePassword />}
/>
<Route
  path="/my-loans"
  element={<MyLoans />}
/>
<Route
  path="/admin-customers"
  element={<AdminCustomers />}
/>
<Route
  path="/admin-pending-loans"
  element={<AdminPendingLoans />}
/>

<Route
  path="/admin-accounts"
  element={<AdminAccounts />}
/>
<Route
  path="/support-chat"
  element={<SupportChat />}
/>

<Route
  path="/admin-chat"
  element={<AdminChat />}
/>
<Route
  path="/fd"
  element={<FixedDeposit />}
/>

<Route
  path="/rd"
  element={<RecurringDeposit />}
/>
      

      <Route
        path="/admin-loans"
        element={<AdminLoans />}
      />
    </Routes>
  );
};

export default AppRoutes;