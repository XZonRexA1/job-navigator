import React from "react";
import "./AppliedJob.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";    
const AppliedJob = ({ jb }) => {
  const {
    id,
    job_title,
    company_logo,
    company_name,
    remote_or_onsite,
    fulltime_or_part_time,
    location,
    salary,
  } = jb;
  return (
    <div>
      <div className="applied-job-container">
        <img src={company_logo} alt="company logo" />
        <div style={{marginTop: "30px"}}>
          <p className="job-title">{job_title}</p>
          <p className="company-name">{company_name}</p>
          <div style={{ display: "flex" }}>
            <p className="remote-or-onsite">{remote_or_onsite}</p>
            <p className="fulltime-or-part-time">{fulltime_or_part_time}</p>
          </div>
          <div style={{ display: "flex", marginTop: "25px" }}>
            <p>
              <span className="icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </span> <span></span>
              {location}
            </p>
            <p>
              <span className="icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </span> <span></span>
              {salary}
            </p>
          </div>
        </div>
        <button className="btn-view-details btn-apply">View Details</button>
      </div>
    </div>
  );
};

export default AppliedJob;
