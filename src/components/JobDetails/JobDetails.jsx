import React, { useEffect, useState } from "react";
import "./JobDetails.css";
import { useLoaderData, useParams } from "react-router-dom";
const JobDetails = () => {
  const { jobDetailsId } = useParams();

  const data = useLoaderData();

  const [jobData, setJobData] = useState({});
  useEffect(() => {
    const newData = data?.find((db) => db.id === parseInt(jobDetailsId));
    setJobData(newData)
  }, []);

  console.log(jobData);
  return (
    <div>
      <h2>Job Details</h2>
    </div>
  );
};

export default JobDetails;
