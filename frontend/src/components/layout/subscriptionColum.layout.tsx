import { ColumnDef } from "@tanstack/react-table";

import { InvestmentData, ISubscription, Transaction } from "../../@types/type";
import { DeleteResource, EditResource, ViewResource } from "../actionButtons.comp";
import { removeSubscription } from "../../core/subscription.core";

export const columns: ColumnDef<ISubscription>[] = [
  {
    accessorKey: "id",
    header: "SN",
    cell: (info) => info.row.index + 1,
  },
  {
    accessorKey: "plan",
      header: "Plan Name",
      cell: (info) => {
        const user = info.getValue() as { name: string}; 
        return <p>{user? user.name: ""} </p>;
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
    accessorKey: "startDate",
    header: "Start Date",
    
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
  },  {
    accessorKey: "endDate",
    header: "Start Date",
    
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
          {/* <EditResource url={`/edit-subscription/${id}`} /> */}
          <DeleteResource
            id={id}
            apiCall={removeSubscription}
            entity="investor"
            queryKey="subscriptions"
          />
        </div>
      );
    },
  },
];

