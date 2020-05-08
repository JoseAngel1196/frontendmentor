// Imports
import React from "react";

// App Imports
import "../../styles/jobs.scss";

const Job = ({ job, handleClick }) => {
  const { logo, company, isNew, isFeatured, languages } = job;
  return (
    <div className="card">
      <img src={logo} alt={company} />
      <div>
        <ul>
          <li className="company">{company}</li>
          {isNew && <li className="new">New!</li>}
          {isFeatured && <li className="featured">Featured</li>}
        </ul>
        <p className="position">{job.position}</p>
        <ul className="requirements">
          <li>{job.postedAt}</li>
          <li>{job.contract}</li>
          <li>{job.location}</li>
        </ul>
      </div>
      <ul className="roles">
        <li className="role" onClick={handleClick}>
          {job.role}
        </li>
        <li className="level" onClick={handleClick}>
          {job.level}
        </li>
      </ul>
      {languages && (
        <ul className="languages">
          {languages.map((language, index) => (
            <li key={index} onClick={handleClick}>
              {language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Job;
