import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import { AuthContext } from "../context/AuthContext";

const JobVacancies = () => {
  const [jobs, setJobs] = useState([]);
  const { logout } = useContext(AuthContext);

  const fetchJobs = async () => {
    try {
      const response = await api.get("/jobs");
      setJobs(response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/jobs/${id}`);
      fetchJobs();
    } catch (error) {
      if (error.response?.status === 401) {
        logout();
      }
    }
  };

  // Format Salary
  const formatSalary = (min, max) => {
    return `Rp${min.toLocaleString()} - Rp${max.toLocaleString()}`;
  };

  return (
    <main className="md:ml-64 pt-20 px-4 h-screen">
      <div className="p-4">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Job Vacancies</h1>
            <Link to="/dashboard/list-job-vacancy/form" className="text-white bg-[#6149C3] hover:bg-[#5039b3] focus:ring-4 focus:ring-[#5039b3] font-medium rounded-lg text-sm px-5 py-2.5">
              Add New Job
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">No</th>
                  <th className="px-6 py-3">Job</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Qualification</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Tenure</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Company</th>
                  <th className="px-6 py-3">Location</th>
                  <th className="px-6 py-3">Salary Range</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr key={job._id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{job.title}</td>
                    <td className="px-6 py-4">{job.job_description.substring(0, 50)}...</td>
                    <td className="px-6 py-4">{job.job_qualification.substring(0, 30)}...</td>
                    <td className="px-6 py-4">{job.job_type}</td>
                    <td className="px-6 py-4">{job.job_tenure}</td>
                    <td className="px-6 py-4">
                      <span className={`${job.job_status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} text-xs font-medium px-2.5 py-0.5 rounded`}>{job.job_status ? "Active" : "Inactive"}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img src={job.company_image_url} className="w-8 h-8 mr-2" alt={job.company_name} />
                        {job.company_name}
                      </div>
                    </td>
                    <td className="px-6 py-4">{job.company_city}</td>
                    <td className="px-6 py-4">{formatSalary(job.salary_min, job.salary_max)}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Link to={`/dashboard/list-job-vacancy/form/${job._id}`} className="text-blue-600 hover:underline">
                          Edit
                        </Link>
                        <button onClick={() => handleDelete(job._id)} className="text-red-600 hover:underline">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobVacancies;
