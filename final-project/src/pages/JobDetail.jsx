import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import JobDetailCard from "../components/JobDetailCard";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`https://final-project-api-alpha.vercel.app/api/jobs/${id}`)
      .then((response) => {
        setJob(response.data);
      })
      .catch((err) => {
        console.error(err);
        navigate("/not-found");
      });
  }, [id, navigate]);

  if (!job) return <div className="text-center p-8">Loading...</div>;

  return <JobDetailCard job={job} />;
};

export default JobDetail;
