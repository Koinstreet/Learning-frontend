import React from "react";
import { IDescription } from "../types";
import PropTypes from "prop-types";

const Description = (props: IDescription) => {
  return (
    <div className="course-description">
      <div className="container">
        <div className="course-description__item">
          <h4>Overview</h4>
          <p>{props.courseOverview}</p>
        </div>
        <div className="course-description__item">
          <h4>Audience</h4>
          <p>{props.courseAudience}</p>
        </div>
        <div className="course-description__item">
          <h4>Perequisites</h4>
          <p>{props.perequisites}</p>
        </div>
        <div className="course-description__item">
          <h4>What you’ll learn</h4>
          <ul>
            {props.learningList.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Description.propTypes = {
  courseOverview: PropTypes.string.isRequired,
  courseAudience: PropTypes.string.isRequired,
  perequisites: PropTypes.string.isRequired,
  learningList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Description;
