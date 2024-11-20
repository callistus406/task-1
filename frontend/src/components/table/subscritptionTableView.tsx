import { InvestmentData, ISubscription, Transaction } from "../../@types/type";
import { columns } from "../layout/subscriptionColum.layout";
import DataTable from "./DataTable.comp";


export const SubscriptionTableView = ({
  data,
  metaData,
}: {
  data: ISubscription[];
  metaData: {
    size: string;
    page: string;
    total: number;
    pages: number;
    setPage: (newPage: number) => void;
  };
}) => {
  return (
    <div className="flex flex-col w-full gap-8 px-4 md:px-8 py-8 bg-background rounded-lg">
      <div className="w-full flex flex-col items-start md:flex-row md:items-center justify-between gap-4">
        <h4 className="text-xl font-bold">Subscription Record</h4>
        <div className="flex flex-wrap gap-2 md:gap-4 items-center"></div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full">
          <DataTable
            title=""
            columns={columns}
            data={data}
            metaData={metaData}
          />
        </div>
      </div>
    </div>
  );
};
