import React, { useEffect, useState } from "react";
import vectorImage1 from "../../assets/All Images/Vector.png";
import vectorImage2 from "../../assets/All Images/Vector-1.png";
import "./AppliedJobs.css";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
const AppliedJobs = () => {
  const savedJobs = useLoaderData();
  //   savedJobs.map((jb) => console.log(jb.company_logo));
  return (
    <div>
      <div className="applied-job-banner">
        <div className="img-container">
          <img src={vectorImage1} alt="vector photo" />
          <img src={vectorImage2} alt="vector photo" />
        </div>
        <h2 className="applied-job-text">Applied Jobs</h2>
        <div className="applied-jobs-container">
          {savedJobs.map((jb) => (
            <AppliedJob key={jb.id} jb={jb}></AppliedJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
