import { useNavigate } from "react-router-dom";

const JobDetailCard = ({ job }) => {
  const navigate = useNavigate();

  if (!job) return <div className="text-center p-8">Job data is not available</div>;

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 ">
      <div className="h-[50px]"></div>
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <button onClick={() => navigate(-1)} className="mb-6 flex items-center text-[#6149C3] hover:text-[#B65BC2] transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Jobs
        </button>

        <div className="flex items-center gap-6 mb-8">
          <img src={job.company_image_url} alt={job.company_name} className="w-20 h-20 object-contain border rounded-lg p-2" />
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{job.title}</h1>
            <div className="flex items-center gap-3 mt-2">
              <p className="text-2xl text-[#6149C3] font-semibold">{job.company_name}</p>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${job.job_status === 1 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                {job.job_status === 1 ? "Available" : "Not Available"}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div>
            <p className="text-gray-500">Location</p>
            <p className="font-semibold">{job.company_city}</p>
          </div>
          <div>
            <p className="text-gray-500">Job Type</p>
            <p className="font-semibold">{job.job_type}</p>
          </div>
          <div>
            <p className="text-gray-500">Tenure</p>
            <p className="font-semibold">{job.job_tenure}</p>
          </div>
          <div>
            <p className="text-gray-500">Posted Date</p>
            <p className="font-semibold">{new Date(job.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Salary Range */}
        <div className="bg-purple-50 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-2 text-[#B65BC2]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xl font-bold">
              Rp{job.salary_min?.toLocaleString()} - Rp{job.salary_max?.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Job Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-3">Job Description</h3>
            <p className="text-gray-600 leading-relaxed">{job.job_description}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Qualifications</h3>
            <p className="text-gray-600 leading-relaxed">{job.job_qualification}</p>
          </div>
          <div className="pt-6">
            <button className="w-full bg-[#6149C3] text-white py-4 rounded-xl text-lg font-semibold hover:bg-[#B65BC2] transition-colors">Apply Now</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobDetailCard;
