import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import SideBar from "../components/SideBar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <NavbarDashboard onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <SideBar isOpen={isSidebarOpen} />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
