import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TableContext from "../../context/table.context";
import useAuthToken from "../../hooks/useAuthToken";
import { findInvestments } from "../../core/investments.core";
import LoadingPage from "../../components/loader.comp";
import ErrorScreen from "../../components/errorPage";
import { InnerLayout } from "../../components/layout/inner.layout";
import { InvestmentTableView } from "../../components/table/investmentTableView";
import { findTransactions } from "../../core/transaction.core";
import { TransactionTableView } from "../../components/table/transactionTableView";
import { findSubscriptions } from "../../core/subscription.core";
import { SubscriptionTableView } from "../../components/table/subscritptionTableView";
import useTokenInfo from "../../hooks/useTokenInfo";

const Subscriptions: React.FC = () => {
  const { page, setPage, size, total } = useContext(TableContext);
  const { token } = useAuthToken();
  const navigate = useNavigate();

  const getUser = useTokenInfo();
  const user = getUser(token as string);
  const { isError, isFetched, isPending, data } = useQuery({
    queryKey: ["subscriptions", page, size],
    queryFn: () => {
      const url =
        user && user.user.role === 4451
          ? `/admin/plans/subscriptions?size=${size}&page=${page}`
          : `/plans/subscriptions?size=${size}&page=${page}`;
      return findSubscriptions(url, token as string);
    },
  });
  if (isPending) {
    return <LoadingPage />;
  }
  if (isError) {
    return (
      <ErrorScreen
        message="An unexpected error occurred. Please try again."
        onRetry={() => window.location.reload()}
      />
    );
  }

  if (isFetched) {
    console.log("from student list");
    console.log(data.payload);
  }
  return (
    <InnerLayout
      heading="List Of Subscriptions"
      section="Dashboard"
      page="Subscriptions"
      url="/dashboard/admin"
    >
      {data?.payload.subscriptions.length == 0 ? (
        <div className="flex justify-center items-center h-screen bg-gray-50">
          <div className="text-center p-6 py-8 rounded-lg shadow-custom2 bg-white w-[24rem] flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold mb-2 capitalize">
              No record found.
            </p>
            <p className="text-gray-500 mb-6 ">
              Please add a record to get started.
            </p>
          </div>
        </div>
      ) : (
        <SubscriptionTableView
          data={data?.payload?.subscriptions}
          metaData={{
            size: data.payload.size,
            page: data.payload.page,
            total: data.payload.total,
            pages: data.payload.pages,
            setPage: setPage,
          }}
        />
      )}
    </InnerLayout>
  );
};

export default Subscriptions;
