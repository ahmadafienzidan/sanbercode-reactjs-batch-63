import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import JobVacancy from "./pages/JobVacancy";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobDetail from "./pages/JobDetail";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import JobVacanciesPage from "./pages/dashboard/JobVacanciesPage";
import AddNewJob from "./pages/dashboard/AddNewJob";
import Profile from "./pages/dashboard/Profile";
import ChangePass from "./pages/dashboard/ChangePass";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes (Home) */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="job-vacancy" element={<JobVacancy />} />
            <Route path="job/:id" element={<JobDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Protected Routes (Dashboard) */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="list-job-vacancy" element={<JobVacanciesPage />} />
            <Route path="list-job-vacancy/form" element={<AddNewJob />} />
            <Route path="list-job-vacancy/form/:id?" element={<AddNewJob />} />
            <Route path="profile" element={<Profile />} />
            <Route path="change-password" element={<ChangePass />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
