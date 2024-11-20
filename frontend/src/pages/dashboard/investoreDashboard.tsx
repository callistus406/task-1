import React, { useState } from "react";
import {
  ChalkBoardTeacherIcon,
  DashboardIcon,
  FeMaleIcon,
  GraduateIcon,
  NairaIcon,
} from "../../icons/icons";
import { Button } from "../../components/button.comp";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
    findAnalyticsCount,
  findTransactionsAnalytics,
  findWallet,
  transact,
} from "../../core/transaction.core";
import useTokenInfo from "../../hooks/useTokenInfo";
import useAuthToken from "../../hooks/useAuthToken";
import { toast } from "react-toastify";
import LoadingPage from "../../components/loader.comp";
import ErrorScreen from "../../components/errorPage";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const InvestorDashboard = () => {
  const data = "undefined";
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const handleModalSubmit = (value: string) => {
    alert(`Submitted: ${value}`);
  };
  const {
    data: data1,
    isLoading: l,
    error,
  } = useQuery({
    queryKey: ["ee"],
    queryFn: () => findTransactionsAnalytics("/transaction/analytics",token as string),
  });

  //   if (isLoading) return <p>Loading...</p>;
  //   if (error || !data?.success) return <p>Error loading data.</p>;

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

  const COLORS = ["#4CAF50", "#F44336", "#FFC107", "#2196F3"];
  const retry = () => window.location.reload();
  const { token } = useAuthToken();
  const {
    isError,
    isLoading,
    data: wallet,
  } = useQuery({
    queryKey: ["wallet"],
    queryFn: () => findWallet(token as string),
    enabled: !!token,
  });
 const {
    isError:e,
    isLoading:l1,
    data: data2,
  } = useQuery({
    queryKey: ["token"],
    queryFn: () => findAnalyticsCount("/transaction/stat",token as string),
    enabled: !!token,
  });

  if (isLoading || l ||l1) {
    return <LoadingPage />;
  }

  if (isError || error||e) {
    return (
      <ErrorScreen
        message="An unexpected error occurred. Please try again."
        onRetry={retry}
      />
    );
  }
  return (
    <div className="p-5">
      <div className="relative">
        {/* Deposit Modal */}
        <SlidingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Deposit Funds"
          type="deposit"
          placeholder="Enter deposit amount"
          animationClass="animate-slide-down"
        />

        {/* Withdraw Modal */}
        <SlidingModal
          isOpen={isModalOpen2}
          onClose={() => setIsModalOpen2(false)}
          title="Withdraw Funds"
          type="withdraw"
          placeholder="Enter withdrawal amount"
          animationClass="animate-slide-down"
        />
      </div>

      {/* Header Section */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="text-2xl font-bold flex items-center">
          Welcome Investor! <DashboardIcon className="ml-2" />
        </div>
        <div className="text-sm text-gray-600 mt-2 sm:mt-0">
          Home / Dashboard
        </div>
      </header>

      {/* Action Buttons */}
      <div className="flex gap-x-4 my-6 ml-auto">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Deposit
        </Button>
        <Button
          onClick={() => setIsModalOpen2(true)}
          className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600"
        >
          Withdraw
        </Button>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Balance Card */}
        <div className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center box-border mb-5">
          <div className="text-left">
            <h3 className="text-lg text-muted-foreground">Balance</h3>
            <p className="text-2xl font-bold">
              {wallet.payload ? wallet.payload.balance : 0}
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
          <FeMaleIcon className="w-12 h-12 text-yellow-500" />
        </div>
      </div>

      <div className="p-4 bg-white rounded-md">
        <h2 className="text-xl font-bold mb-4">Transaction Analytics</h2>
        <div className=" grid grid-cols-2">
          {/* Area Chart */}
          <div className="mb-8">
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
          </div>

          {/* Pie Chart */}
          <div>
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
    </div>
  );
};

interface SlidingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  placeholder?: string;
  type: string;
  animationClass?: string;
}

type State = "init" | "mutating" | "error" | "success";

const SlidingModal: React.FC<SlidingModalProps> = ({
  isOpen,
  onClose,
  title = "Enter Details",
  type,
  placeholder = "Type something...",
  animationClass = "animate-slide-down",
}) => {
  const queryClient = useQueryClient();
  const { token } = useAuthToken();
  const [currentState, setCurrentState] = useState<State>("init");
  const [inputValue, setInputValue] = useState("");

  const createMutation = useMutation({
    mutationFn: async (data: { amount: number }) =>
      transact(
        type === "deposit" ? "/transaction/deposit" : "/transaction/withdrawal",
        data.amount,
        token as string
      ),
    onSuccess: (res: any) => {
      queryClient.invalidateQueries({ queryKey: ["wallet"] });
      toast.success(res.payload);
      setCurrentState("success");
      setInputValue("");
      onClose();
    },
    onMutate: () => {
      setCurrentState("mutating");
    },
    onError: (error: any) => {
      if (error?.response) {
        const message = error.response.data?.error;
        toast.error(message || "An error occurred.");
      } else {
        toast.error("An error occurred.");
      }
      setCurrentState("error");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const amount = parseFloat(inputValue);
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }
    createMutation.mutate({ amount });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50">
      <div
        className={`bg-white w-full max-w-md rounded-lg shadow-lg p-6 transform transition-transform ${animationClass}`}
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <input
          type="number"
          className="w-full border px-4 py-2 rounded mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          disabled={currentState === "mutating"}
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            disabled={currentState === "mutating"}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            disabled={currentState === "mutating"}
          >
            {currentState === "mutating" ? "Processing..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};
