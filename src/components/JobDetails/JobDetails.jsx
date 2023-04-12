import React, { useEffect, useState } from "react";
import "./JobDetails.css";
import { useLoaderData, useParams } from "react-router-dom";
import vectorImage1 from "../../assets/All Images/Vector.png";
import vectorImage2 from "../../assets/All Images/Vector-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollarSign,
  faCalendar,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const JobDetails = () => {
  const { jobDetailsId } = useParams();

  const data = useLoaderData();

  const [jobData, setJobData] = useState({});
  useEffect(() => {
    const newData = data?.find((db) => db.id === parseInt(jobDetailsId));
    setJobData(newData);
  }, []);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    phone,
    email,
    address,
  } = jobData;
  return (
    <div>
      <div className="job-details-banner">
        <div className="img-container">
          <img src={vectorImage1} alt="vector photo" />
          <img src={vectorImage2} alt="vector photo" />
        </div>
        <h2 className="job-details-text">Job Details</h2>
      </div>
      <div className="job-details-container">
        <div>
          <p>
            <span>Job Description:</span> {job_description}
          </p>
          <p>
            <span>Job Responsibility:</span> {job_responsibility}
          </p>
          <p>
            <span>Educational Requirements:</span> <br />{" "}
            {educational_requirements}
          </p>
          <p>
            <span>Experiences:</span> <br />
            {experiences}
          </p>
        </div>
        <div className="job-details-card">
          <h2>Job details</h2>
          <hr />
          <h3 className="job-info-title">
            <FontAwesomeIcon icon={faDollarSign} /> Salary:{" "}
            <span className="job-info-text">{salary}</span>
          </h3>
          <h3 className="job-info-title">
            <FontAwesomeIcon icon={faCalendar} /> Job Title:{" "}
            <span className="job-info-text">{job_title}</span>
          </h3>
          <h2 style={{ marginTop: "30px" }}>Contact Information</h2>
          <hr style={{ marginTop: "24px" }} />
          <h3 className="job-info-title">
            <FontAwesomeIcon icon={faPhone} /> Phone:{" "}
            <span className="job-info-text">{phone}</span>
          </h3>
          <h3 className="job-info-title">
            <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
            <span className="job-info-text">{email}</span>
          </h3>
          <h3 className="job-info-title">
            <FontAwesomeIcon icon={faLocationDot} /> Address:{" "}
            <span className="job-info-text">{address}</span>
          </h3>
 
          <button className="job-btn-apply btn-apply">Apply Now</button>
 
          </div>
      </div>
    </div>
  );
};

export default JobDetails;
