import React, { useEffect, useState } from "react";
import vectorImage1 from "../../assets/All Images/Vector.png";
import vectorImage2 from "../../assets/All Images/Vector-1.png";
import "./AppliedJobs.css";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import ErrorPage from "../ErrorPage/ErrorPage";
const AppliedJobs = () => {
  const savedJobs = useLoaderData();


  const [filteredJobs, setFilteredJobs] = useState(null);
  const handleShowOnsite = () => {
    const onsiteJobs = savedJobs.filter(
      (job) => job.remote_or_onsite === "Onsite"
    );
    setFilteredJobs(onsiteJobs);
  };
  const handleShowRemote = () => {
    const onsiteJobs = savedJobs.filter(
      (job) => job.remote_or_onsite === "Remote"
    );
    setFilteredJobs(onsiteJobs);
  };

  return (
    <div>
      <div className="applied-job-banner">
        <div className="img-container">
          <img src={vectorImage1} alt="vector photo" />
          <img src={vectorImage2} alt="vector photo" />
        </div>
        <h2 className="applied-job-text">Applied Jobs</h2>
        <div className="filter-btn">
          <button className="btn-apply" onClick={() => handleShowOnsite()}>
            Show Onsite jobs
          </button>
          <button className="btn-apply" onClick={() => handleShowRemote()}>
            Show Remote jobs
          </button>
        </div>
        <div className="applied-jobs-container">
          {filteredJobs || savedJobs ? (
            (filteredJobs || savedJobs).map((jb) => (
              <AppliedJob key={jb.id} jb={jb}></AppliedJob>
            ))
          ) : (
            <ErrorPage></ErrorPage>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
