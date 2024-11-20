import { ColumnDef } from "@tanstack/react-table";



import { InvestmentData } from "../../@types/type";

export const columns: ColumnDef<InvestmentData>[] = [
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
    accessorKey: "verified",
    header: "Status",
    cell: (info) => {
      const isClassTeacher = info.getValue() as boolean;
      return isClassTeacher ? "ACTIVE" : "INACTIVE";
    },
  },
  {
    accessorKey: "createdBy",
    header: "Created BY",
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
  // {
  //   accessorKey: "actions",
  //   header: "Actions",
  //   cell: (info) => {
  //     const studentId = info.row.original._id;
  //     return (
  //       <div className="flex gap-2 items-center">
  //         <ViewResource modal="pupil" id={studentId} />
  //         <EditResource url={`/students/edit/${studentId}`} />
  //         <DeleteResource
  //           id={studentId}
  //           apiCall={deletePupil}
  //           entity="admin"
  //           queryKey="pupils-admin"
  //         />
  //       </div>
  //     );
  //   },
  // },
];

// const EditResource = ({ id }: { id: string }) => {
//   const navigate = useNavigate();

//   // Handler to navigate to the edit page
//   const handleEditClick = () => {
//     navigate(`/students/edit/${id}`);
//   };

//   return (
//     <button
//       onClick={handleEditClick}
//       className="h-8 w-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center"
//     >
//       <EditIcon />
//     </button>
//   );
// };
