import React from "react";
import "./SingleJobData.css";
const SingleJobData = ({ singleJobData }) => {
  const { category_logo, category_name, jobsAvailable } = singleJobData;
  console.log(singleJobData.jobsAvailable);
  return (
    <div>
      <div className="job-data">
        <img src={category_logo} alt="category logo" />
        <h3>{category_name}</h3>
        <h5>
          <span>{jobsAvailable}</span> Jobs Available
        </h5>
      </div>
    </div>
  );
};

export default SingleJobData;
