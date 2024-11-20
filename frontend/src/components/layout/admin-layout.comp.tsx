import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./adminSidebar.comp";
import { Header } from "./header.comp";


const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex flex-row min-h-screen">
        <AdminSidebar
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="w-full p-4 bg-muted overflow-y-scroll pt-[84px]">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
