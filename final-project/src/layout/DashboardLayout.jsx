import { Outlet } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";

const DashboardLayout = () => {
  return (
    <>
      <NavbarDashboard />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
