import React, { useEffect, useState } from "react";
import "./FeaturedJobs.css";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
const FeaturedJobs = () => {
  const [jobsData, setJobsData] = useState([]);

  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => setShowAll(true);
  useEffect(() => {
    fetch("jobData.json")
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Featured Jobs</h1>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="jobs-container">
        {jobsData.slice(0, showAll ? 6 : 4).map((jobData) => (
          <FeaturedJob key={jobData.id} jobData={jobData}></FeaturedJob>
        ))}
      </div>
      <div
        style={{ display: "grid", justifyContent: "center", marginTop: "40px" }}
      >
        {!showAll && (
          <span>
            <button
              onClick={handleShowAll}
              style={{ textAlign: "center" }}
              className="btn-show-all"
            >
              See all Jobs
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;
