import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../utils/api";
import { AuthContext } from "../context/AuthContext";

const FormJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "Full Time",
    job_tenure: "Permanent",
    job_status: 1,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });

  // Get Data for Edit
  useEffect(() => {
    if (id) {
      const fetchJob = async () => {
        try {
          const response = await api.get(`/jobs/${id}`);
          setFormData(response.data);
          setIsEdit(true);
        } catch (error) {
          console.error("Error fetching job:", error);
        }
      };
      fetchJob();
    }
  }, [id]);

  // Handle Input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    }));
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await api.put(`/jobs/${id}`, formData);
      } else {
        await api.post("/jobs", formData);
      }
      navigate("/dashboard/list-job-vacancy");
    } catch (error) {
      if (error.response?.status === 401) {
        logout();
      }
    }
  };

  return (
    <main className="md:ml-64 pt-20 px-4 h-screen">
      <div className="p-4">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">{isEdit ? "Edit Job Vacancy" : "Add New Job Vacancy"}</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Job Title */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6149C3] focus:border-[#6149C3] block w-full p-2.5"
                required
              />
            </div>

            {/* Job Description */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Job Description <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                name="job_description"
                value={formData.job_description}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6149C3] focus:border-[#6149C3] block w-full p-2.5"
                required
              />
            </div>

            {/* Job Qualification */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Job Qualification <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                name="job_qualification"
                value={formData.job_qualification}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6149C3] focus:border-[#6149C3] block w-full p-2.5"
                required
              />
            </div>

            {/* Company Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Company Image URL</label>
                <input
                  type="url"
                  name="company_image_url"
                  value={formData.company_image_url}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6149C3] focus:border-[#6149C3] block w-full p-2.5"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6149C3] focus:border-[#6149C3] block w-full p-2.5"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Company City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company_city"
                value={formData.company_city}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6149C3] focus:border-[#6149C3] block w-full p-2.5"
                required
              />
            </div>

            {/* Job Type and Tenure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Job Type <span className="text-red-500">*</span>
                </label>
                <select name="job_type" value={formData.job_type} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6149C3] focus:border-[#6149C3] block w-full p-2.5">
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Contract</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Job Tenure <span className="text-red-500">*</span>
                </label>
                <select name="job_tenure" value={formData.job_tenure} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6149C3] focus:border-[#6149C3] block w-full p-2.5">
                  <option>Permanent</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>

            {/* Salary Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Minimum Salary <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="salary_min"
                  value={formData.salary_min}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6149C3] focus:border-[#6149C3] block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Maximum Salary <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="salary_max"
                  value={formData.salary_max}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6149C3] focus:border-[#6149C3] block w-full p-2.5"
                  required
                />
              </div>
            </div>

            {/* Job Status */}
            <div className="flex items-center mb-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" name="job_status" checked={formData.job_status === 1} onChange={handleChange} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6149C3]" />
                <span className="ml-3 text-sm font-medium text-gray-900">Job Status: {formData.job_status ? "Open" : "Closed"}</span>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full text-white bg-[#6149C3] hover:bg-[#5039b3] focus:ring-4 focus:outline-none focus:ring-[#5039b3] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              {isEdit ? "Update Job" : "Submit Job"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default FormJob;
