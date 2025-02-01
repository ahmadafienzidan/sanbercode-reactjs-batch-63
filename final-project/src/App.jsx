//App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import JobVacancy from "./pages/JobVacancy";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import JobDetail from "./pages/JobDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="job-vacancy" element={<JobVacancy />} />
          <Route path="job/:id" element={<JobDetail />} />
        </Route>
        {/*  */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
