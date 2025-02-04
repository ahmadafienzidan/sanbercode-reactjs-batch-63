import { Outlet } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import SideBar from "../components/SideBar";

const DashboardLayout = () => {
  return (
    <>
      <NavbarDashboard />
      <SideBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
