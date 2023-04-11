import React, { useEffect, useState } from "react";
import "./FeaturedJobs.css";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
const FeaturedJobs = () => {
  const [jobsData, setJobsData] = useState([]);
  useEffect(() => {
    fetch("jobData.json")
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Featured Jobs</h1>
      <p style={{ textAlign: "center" }}>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="jobs-container">
        {jobsData.slice(0, 4).map((jobData) => (
          <FeaturedJob key={jobData.id} jobData={jobData}></FeaturedJob>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
