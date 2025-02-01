import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [formState, setFormState] = useState({
    jobTitle: "",
    company: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formState);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
      <div className="bg-white rounded-lg shadow-xl p-6 transform translate-y-1/3">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
            <input
              type="text"
              value={formState.jobTitle}
              onChange={(e) => setFormState({ ...formState, jobTitle: e.target.value })}
              placeholder="Web Developer"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6149C3] focus:border-[#6149C3]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input
              type="text"
              value={formState.company}
              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
              placeholder="Google"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6149C3] focus:border-[#6149C3]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              value={formState.location}
              onChange={(e) => setFormState({ ...formState, location: e.target.value })}
              placeholder="New York"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6149C3] focus:border-[#6149C3]"
            />
          </div>
          <div className="flex items-end">
            <button type="submit" className="w-full bg-[#6149C3] hover:bg-[#B65BC2] text-white py-2 px-6 rounded-lg transition-colors">
              Search Jobs
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
