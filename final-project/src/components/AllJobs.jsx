import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const AllJobs = ({ filters }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://final-project-api-alpha.vercel.app/api/jobs")
      .then((res) => {
        setJobs(res.data);
        setFilteredJobs(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesTitle = job.title.toLowerCase().includes(filters.jobTitle.toLowerCase());
      const matchesCompany = job.company_name.toLowerCase().includes(filters.company.toLowerCase());
      const matchesLocation = job.company_city.toLowerCase().includes(filters.location.toLowerCase());
      return matchesTitle && matchesCompany && matchesLocation;
    });
    setFilteredJobs(filtered);
  }, [filters, jobs]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="mb-12 text-3xl text-center font-extrabold text-gray-900 md:text-4xl lg:text-5xl">
          Talk Less <span className="bg-gradient-to-r from-purple-500 to-[#B65BC2] text-transparent bg-clip-text">Do More</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map((job) => (
            <Card key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
