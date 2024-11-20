import { createContext, ReactNode, useState } from "react";

interface ITableContext {
  children: ReactNode;
}

// Define the shape of your context state
interface ITableContextValue {
  pages: number;
  total: number;
  page: number;
  setPage: (newPage: number) => void;
  size: number;
}

const TableContext = createContext<ITableContextValue>({
  pages: 0,
  total: 0,
  page: 1,
  setPage: () => {},
  size: 10,
});

// Context provider component
export const TableContextProvider = ({ children }: ITableContext) => {
  const [page, setPage] = useState(1);
  const size = 10;

  return (
    <TableContext.Provider value={{ page, setPage, size, pages: 0, total: 0 }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContext;
