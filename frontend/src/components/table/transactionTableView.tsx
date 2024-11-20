import { InvestmentData, Transaction } from "../../@types/type";
import useAuthToken from "../../hooks/useAuthToken";
import useTokenInfo from "../../hooks/useTokenInfo";
import { columns } from "../layout/transactionColumn.layout";
import { columns2 } from "../layout/transactionColumInvestor.comp";
import DataTable from "./DataTable.comp";


export const TransactionTableView = ({
  data,
  metaData,
}: {
  data: Transaction[];
  metaData: {
    size: string;
    page: string;
    total: number;
    pages: number;
    setPage: (newPage: number) => void;
  };
    }) => {
    const {token} = useAuthToken()
    const getUser = useTokenInfo()
    const user = getUser(token as string)
      return (
    <div className="flex flex-col w-full gap-8 px-4 md:px-8 py-8 bg-background rounded-lg">
      <div className="w-full flex flex-col items-start md:flex-row md:items-center justify-between gap-4">
        <h4 className="text-xl font-bold">Transaction Record</h4>
        <div className="flex flex-wrap gap-2 md:gap-4 items-center"></div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full">
          <DataTable
            title=""
            columns={ user && user.user.role === 4451 ? columns: columns2}
            data={data}
            metaData={metaData}
          />
        </div>
      </div>
    </div>
  );
};
