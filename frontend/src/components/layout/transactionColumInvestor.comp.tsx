import { ColumnDef } from "@tanstack/react-table";

import { InvestmentData, Transaction } from "../../@types/type";
import { EditResource, ViewResource } from "../actionButtons.comp";

export const columns2: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "SN",
    cell: (info) => info.row.index + 1,
  },
  {
    accessorKey: "wallet",
    header: "Wallet Id",
  },
  {
    accessorKey: "user",
    header: "Email",
    cell: (info) => {
      const user = info.getValue() as any
 
      return <p> { user.email}</p>
    },
  },
  {
    accessorKey: "user",
    header: "Name",
    cell: (info) => {
      const user = info.getValue() as any
 
      return <p> {user.first_name} { user.last_name}</p>
    },
  },
  {
    accessorKey: "amount",
    header: " Amount",
    cell: (info) => {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(info.getValue() as any);
    },
  },
  {
    accessorKey: "type",
    header: "Transaction Type",
  },
  {
    accessorKey: "status",
    header: "Transaction Status",
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
 
];


