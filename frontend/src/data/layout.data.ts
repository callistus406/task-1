import { MenuItem } from "../@types/type";
import { ReceiptIcon, ResultIcon, TimeTableIcon } from "../icons/icons";
import {
  DashboardIcon,
  InvestmentIcon,
  MoneyIcon,
  PaymentIcon,
} from "../icons/navigation.icons";

// admin menu
export const adminMenuItems: MenuItem[] = [
  {
    label: "Dashboard",
    to: "/dashboard/admin",
    icon: DashboardIcon,
  },
  {
    label: "Investments",
    to: "admin/investments",
    icon: InvestmentIcon,
  },
  {
    label: "Create Investment",
    to: "/create-investment-plan",
    icon: ReceiptIcon,
  },
  {
    label: "Transactions",
    to: "/admin/transactions",
    icon: MoneyIcon,
  },
  {
    label: "Subscriptions",
    to: "/admin/subscriptions",
    icon: PaymentIcon,
  },
];

// teacher menu
export const investorMenuItems: MenuItem[] = [
  {
    label: "Dashboard",
    to: "dashboard/investor",
    icon: DashboardIcon,
  },
  {
    label: "Investments",
    to: "/investments",
    icon: PaymentIcon,
  },

  {
    label: "Transactions",
    to: "/transactions",
    icon: MoneyIcon,
 
  },



  
];
