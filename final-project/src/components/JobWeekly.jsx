import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const JobWeekly = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://final-project-api-alpha.vercel.app/api/jobs")
      .then((res) => {
        setJobs(res.data.slice(0, 3));
        console.log(res);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="mb-12 text-3xl text-center font-extrabold text-gray-900 md:text-4xl lg:text-5xl">
          Top Week<span className="bg-gradient-to-r from-purple-500 to-[#B65BC2] text-transparent bg-clip-text"> Job Vacancies</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <Card key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobWeekly;
