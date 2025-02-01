import { useState } from "react";
import SearchForm from "../components/SearchForm";
import Hero from "../components/Hero";
import AllJobs from "../components/AllJobs";

const JobVacancy = () => {
  const [filters, setFilters] = useState({
    jobTitle: "",
    company: "",
    location: "",
  });

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Hero variant="job-vacancy" />
      <SearchForm onSearch={handleSearch} />
      <AllJobs filters={filters} />
    </>
  );
};

export default JobVacancy;
