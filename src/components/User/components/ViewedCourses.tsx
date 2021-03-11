import React from "react";
import { useSelector } from "react-redux";

// Component
import { CourseCard } from "../../CourseCard";
import defImg from "../../../assets/images/DeFi-Crash-Course.png";

const ViewedCourses = () => {
  const { viewedCourse } = useSelector((state) => state.currentCourse);
  return (
    <div className="dashboard__viewedCourses">
      <div className="container dashboard__viewedCourses-container">
        <h2>Viewed courses</h2>
        <div className="dashboard__viewedCourses-list">
          {viewedCourse.map((el) => (
            <div className="dashboard__viewedCourses-item" key={el._id}>
              <CourseCard
                image={el.courseId.image}
                name={el.courseId.name}
                author={`${el.courseId.authorId.firstName} ${el.courseId.authorId.lastName}`}
                id={el.courseId._id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewedCourses;
