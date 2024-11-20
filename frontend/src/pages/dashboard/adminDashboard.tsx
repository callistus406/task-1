import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import { adminDashBoard } from "../../core/dashboard";
import { useAuth } from "../../hooks/useAuth";
import useAuthToken from "../../hooks/useAuthToken";
import LoadingPage from "../../components/loader.comp";
import ErrorScreen from "../../components/errorPage";
import {
  findAnalyticsCount,
  findTransactionsAnalytics,
} from "../../core/transaction.core";
import { FeMaleIcon, NairaIcon, PendingIcon } from "../../icons/icons";

export interface InvestmentTotal {
  _id: string | null;
  totalInvested: number;
}

export interface SubscriptionByUser {
  userId: string;
  totalSubscriptions: number;
  totalAmount: number;
  averageSubscriptionAmount: number;
  maxSubscriptionAmount: number;
  minSubscriptionAmount: number;
}

export interface TransactionStat {
  userId: string;
  totalSubscriptions: number;
  totalAmount: number;
  averageSubscriptionAmount: number;
  maxSubscriptionAmount: number;
  minSubscriptionAmount: number;
}

export interface AnalyticsData {
  payload: {
    investmentTotals: InvestmentTotal[];
    subscriptionByUser: SubscriptionByUser[];
    transactionStat: TransactionStat[];
  };
}

const Dashboard: React.FC = () => {
  const { token } = useAuthToken();

  const { data, isLoading, error } = useQuery<AnalyticsData>({
    queryKey: ["analytics"],
    queryFn: () => adminDashBoard(token as string),
  });

  const {
    data: data1,
    isLoading: l,
    error: analyticsError,
  } = useQuery({
    queryKey: ["ee"],
    queryFn: () =>
      findTransactionsAnalytics(
        "/admin/transaction/analytics",
        token as string
      ),
    enabled: !!token,
  });

  const {
    isError: e,
    isLoading: l1,
    data: data2,
  } = useQuery({
    queryKey: ["token"],
    queryFn: () =>
      findAnalyticsCount("/admin/transaction/stat", token as string),
    enabled: !!token,
  });
  const COLORS = ["#4CAF50", "#F44336", "#2196F3", "#FFC107"];

  if (isLoading || l || l1) return <LoadingPage />;
  if (error || e || analyticsError) {
    return (
      <ErrorScreen
        message="An unexpected error occurred. Please try again."
        onRetry={() => window.location.reload()}
      />
    );
  }

  const analytics = data1?.payload;

  const areaData = analytics?.map((item: any) => ({
    type: item._id,
    ...item.statuses?.reduce((acc: any, status: any) => {
      acc[status.status] = status.totalAmount;
      return acc;
    }, {}),
  }));

  const pieData = analytics?.flatMap((item: any) =>
    item.statuses?.map((status: any) => ({
      name: `${item._id} - ${status.status}`,
      value: status.totalAmount,
    }))
  );

  return (
    <div className="p-5">
      <div className="dashboard-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Balance Card */}
        <div className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center box-border mb-5">
          <div className="text-left">
            <h3 className="text-lg text-muted-foreground">All Transaction</h3>
            <p className="text-2xl font-bold">
              {data2.payload.withdrawals+ data2.payload.pending + data2.payload.deposits}
            </p>
          </div>
          <NairaIcon className="w-12 h-12 text-blue-500" />
        </div>

        {/* Deposits Card */}
        <div className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center box-border mb-5">
          <div className="text-left">
            <h3 className="text-lg text-muted-foreground">Deposits</h3>
            <p className="text-2xl font-bold">{data2.payload.deposits}</p>
          </div>
          <NairaIcon className="text-4xl text-green-500" />
        </div>

        {/* Withdrawals Card */}
        <div className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center box-border mb-5">
          <div className="text-left">
            <h3 className="text-lg text-muted-foreground">Withdrawals</h3>
            <p className="text-2xl font-bold">{data2.payload.withdrawals}</p>
          </div>
          <NairaIcon className="text-4xl text-red-500" />
        </div>

        {/* Pending Card */}
        <div className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center box-border mb-5">
          <div className="text-left">
            <h3 className="text-lg text-muted-foreground">Pending</h3>
            <p className="text-2xl font-bold">{data2.payload.pending}</p>
          </div>
          <PendingIcon className="w-12 h-12 text-yellow-500" />
        </div>
      </div>
      <div className="bg-white px-4 py-8 rounded-md">
      <h2 className="text-xl font-bold mb-4">Transaction Analytics</h2>
      <div className="grid grid-cols-2">
        {/* Area Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={areaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="PENDING"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="APPROVED"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="REJECTED"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Pie Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((_: any, index: any) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
          </ResponsiveContainer>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
