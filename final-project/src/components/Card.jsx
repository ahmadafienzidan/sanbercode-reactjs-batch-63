// src/components/Card.jsx
import { Link } from "react-router-dom";

const Card = ({ job }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img src={job.company_image_url} alt={job.company_name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <span className="absolute top-4 left-4 bg-[#6149C3] text-white px-3 py-1 rounded-full text-sm font-medium"> 🔥 Urgently Hiring </span>
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="bg-gradient-to-r from-purple-500 to-[#B65BC2] text-white px-3 py-1 rounded-full text-sm"> {job.company_name} </span>
          <span className="text-sm text-gray-500">{job.company_city}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
        <div className="flex items-center text-[#B65BC2] mb-4">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold">
            Rp{job.salary_min.toLocaleString()} - Rp{job.salary_max.toLocaleString()}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{job.job_description}</p>
        <p className="text-gray-600 mb-6">
          <strong>Qualification:</strong> {job.job_qualification}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-purple-100 text-[#6149C3] rounded-full text-sm">{job.job_type}</span>
            <span className="px-3 py-1 bg-purple-100 text-[#6149C3] rounded-full text-sm">{job.job_tenure}</span>
          </div>

          <Link to={`/job/${job._id}`} className="flex items-center text-[#6149C3] hover:text-[#B65BC2] font-semibold transition-colors">
            Apply Now
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
