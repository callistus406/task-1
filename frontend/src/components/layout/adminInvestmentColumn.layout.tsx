import { ColumnDef } from "@tanstack/react-table";



import { InvestmentData } from "../../@types/type";
import { EditResource, ViewResource } from "../actionButtons.comp";
import { EditIcon } from "../../icons/table.icons";

export const column2: ColumnDef<InvestmentData>[] = [
  {
    accessorKey: "id",
    header: "SN",
    cell: (info) => info.row.index + 1,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "minimumAmount",
    header: "Min Amount",
    cell: (info) => {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(info.getValue() as any);
    },
  },
  {
    accessorKey: "interestRate",
    header: "Interest Rate",
  },
  {
    accessorKey: "durationInMonths",
    header: "Duration",
  },
 
  {
    accessorKey: "createdBy",
    header: "Created BY",
    cell: (info) => {
 
      const res = info.getValue() as any;
      return <>{res? "ADMIN":"---"}</>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: (info) => {
      const date = new Date(info.getValue() as string);
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: (info) => {
      const id = info.row.original._id;
      return (
        <div className="flex gap-2 items-center">
          <EditResource url={`/admin/edit-investment/${id}`} isAdmin={true} />
        
        </div>
      );
    },
  },
];
