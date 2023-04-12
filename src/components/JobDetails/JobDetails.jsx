import React, { useEffect, useState } from "react";
import "./JobDetails.css";
import { useLoaderData, useParams } from "react-router-dom";
import vectorImage1 from "../../assets/All Images/Vector.png";
import vectorImage2 from "../../assets/All Images/Vector-1.png";
const JobDetails = () => {
  const { jobDetailsId } = useParams();

  const data = useLoaderData();

  const [jobData, setJobData] = useState({});
  useEffect(() => {
    const newData = data?.find((db) => db.id === parseInt(jobDetailsId));
    setJobData(newData);
  }, []);

  console.log(jobData);
  return (
    <div>
      <div className="job-details-container">
        <div className="img-container">
          <img src={vectorImage1} alt="vector photo" />
          <img src={vectorImage2} alt="vector photo" />
        </div>
        <h2 className="job-details-text">Job Details</h2>
      </div>
    </div>
  );
};

export default JobDetails;
