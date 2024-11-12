import React from "react";
import { useLocation } from "react-router-dom";
import jobs from "../jobs.json";
import DetailPage from "./DetailPage";
import PaginationLink from "../components/PaginationLink";

function HomePage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const jobsPerPage = 4;
  const startIndex = (page - 1) * jobsPerPage;
  const paginatedJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div>
      <DetailPage jobs={paginatedJobs} />
      <PaginationLink totalJobs={jobs.length} jobsPerPage={jobsPerPage} />
    </div>
  );
}

export default HomePage;
