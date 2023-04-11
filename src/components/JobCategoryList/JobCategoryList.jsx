import React, { useEffect, useState } from "react";
import SingleJobData from "../SingleJobData/SingleJobData";
import "./JobCategoryList.css";

const JobCategoryList = () => {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    fetch("jobCategoryList.json")
      .then((res) => res.json())
      .then((data) => setJobData(data));
  }, []);

  return (
    <div>
    <h1 style={{textAlign: 'center'}}>Job Category List</h1>
    <p style={{textAlign:'center'}}>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="job-container">
        {jobData.map((singleJobData) => (
          <SingleJobData
            key={singleJobData.id}
            singleJobData={singleJobData}
          ></SingleJobData>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
