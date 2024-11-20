import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TableContext from "../context/table.context";
import useAuthToken from "../hooks/useAuthToken";
import { findInvestments } from "../core/investments.core";
import LoadingPage from "../components/loader.comp";
import ErrorScreen from "../components/errorPage";
import { InnerLayout } from "../components/layout/inner.layout";
import { InvestmentTableView } from "../components/table/investmentTableView";


const Investments: React.FC = () => {
  const { page, setPage, size, total } = useContext(TableContext);
  const { token } = useAuthToken();
  const navigate = useNavigate();

  const { isError, isFetched, isPending, data } = useQuery({
    queryKey: ["investments", page, size],
    queryFn: () => findInvestments(size,page,"createdAt", -1, token as string),
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
    console.log(data.payload.investments);
  }
  return (
    <InnerLayout
      heading="List Of Investments"
      section="Dashboard"
      page="Investments"
      url="/dashboard/admin"
    >
      {data?.payload.investments.length == 0 ? (
        <div className="flex justify-center items-center h-screen bg-gray-50">
          <div className="text-center p-6 py-8 rounded-lg shadow-custom2 bg-white w-[24rem] flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold mb-2 capitalize">
              No record found.
            </p>
            <p className="text-gray-500 mb-6 ">
              Please add a record to get started.
            </p>
            <button
              onClick={() => navigate("/students/add")}
              className="py-2 px-6 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition-colors"
            >
              Add Investment Plan
            </button>
          </div>
        </div>
      ) : (
        <InvestmentTableView
          data={data?.payload?.investments}
          metaData={{
            limit: data.limit,
            page: data.page,
            total: data.total,
            pages: data.pages,
            setPage: setPage,
          }}
        />
      )}
    </InnerLayout>
  );
};

export default Investments;
