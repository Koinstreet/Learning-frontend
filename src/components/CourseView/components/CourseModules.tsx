import React from "react";
import CourseNavigation from "./CourseNavigation";
import CourseItem from "./CourseItem";

const CourseModules = props => {
  return (
    <div className="course-section__modules">
      <div className="container course-section__modules-container">
        <CourseNavigation />
        <CourseItem moduleId={props.moduleId} courseId={props.courseId} />
      </div>
    </div>
  );
};

export default CourseModules;
