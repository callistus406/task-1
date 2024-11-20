import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { LeftIcon, RightIcon } from "../../icons/table.icons";
import { Button } from "../button.comp";

interface DataTableProps<T extends object> {
  columns: ColumnDef<T, any>[];
  data: T[];
  title: string;
  metaData: {
    size: string;
    page: string;
    total: number;
    pages: number;
    setPage: (newPage: number) => void;
  };
}

const DataTable = <T extends object>({
  columns,
  data,
  title,
  metaData,
}: DataTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState(""); // For global filtering
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  }); // For pagination
  const [entriesPerPage] = useState(10);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      pagination, 
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-4 border rounded-md bg-background ">
      <div className="flex flex-col md:flex-row md:px-4 items-start md:items-center gap-2 justify-between w-full">
        <p className="font-bold text-2xl">{title}</p>
        <input
          type="text"
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="mb-4 p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-6 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:bg-accent hover:rounded-md"
                  >
                    <p className="flex items-center gap-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {/* <ToggleIcon className="rotate-90" /> */}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row, idx) => (
              <tr key={row.id} className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4 w-fit ml-auto gap-4">
        <span className="mr-4">
          Page{" "}

         
          <strong>
            {metaData.page} of {metaData.pages}
          </strong>
        </span>
        <Button
          onClick={() => metaData.setPage(parseInt(metaData.page) - 1)}
          disabled={parseInt(metaData.page) == 1}
          variant="outline"
          size="icon"
        >
          <LeftIcon />
        </Button>
        <Button
          onClick={() => {
            console.log(metaData, "llllll");
            metaData.setPage(parseInt(metaData.page) + 1);
          }}
          // onClick={() =>
          //   console.log(typeof metaData.page, parseInt(metaData.page) + 1)
          // }
          disabled={parseInt(metaData.page) == metaData.pages}
          variant="outline"
          size="icon"
        >
          <RightIcon />
        </Button>
      </div>
    </div>
  );
};

export default DataTable;
