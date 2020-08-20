import React from "react";
import { useSelector } from "react-redux";

// Component
import { CourseCard } from "../../CourseCard";
import defImg from "../../../assets/images/DeFi-Crash-Course.png";

const ViewedCourses = () => {
  const { viewedCourse } = useSelector((state) => state.currentCourse);
  return (
    <div className="dashboard__viewedCourses">
      <div className="container">
        <h2>Viewed courses</h2>
        <div className="dashboard__viewedCourses-list">
          {viewedCourse.map((el) => (
            <div className="dashboard__viewedCourses-item" key={el.id}>
              <CourseCard
                image={el.course.image}
                name={el.course.name}
                author={`Gideon Nnalue`}
                id={el.courseId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewedCourses;
