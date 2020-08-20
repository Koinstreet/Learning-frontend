import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CourseCardProps } from "../types";

const CourseCard = ({ image, name, author, id }: CourseCardProps) => {
  return (
    <div className="course-card">
      <img src={image} alt="" />
      <div className="course-card__body">
        <div>
          <h3>{name}</h3>
          <p>{author}</p>
        </div>
        <Link to={`/overview/${id}`}>View Lesson</Link>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
};

export default CourseCard;
