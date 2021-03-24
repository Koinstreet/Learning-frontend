import React from "react";
import { useSelector } from 'react-redux';
import CourseSection from "./CourseSection";

const Courses: React.FC = () => {
  const {courses} = useSelector(state => state.allCourses);
  return (
    <section className="all-courses" id="course-selection"
    >
      <div className="container">
        <CourseSection
          title="Free courses to grow your skills"
          courses={courses}
        />
        {/* <CourseSection
          title="Courses about Crypto"
          courses={courses}
        />
        <CourseSection
          title="Courses about tech"
          courses={courses}
        /> */}
      </div>
    </section>
  );
};

export default Courses;
