import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CourseNavigation = () => {
  const { modules, viewed } = useSelector((state) => state.courseModules);
  return (
    <div className="course-section__navigation">
      <h4>Course Modules</h4>
      <ul>
        {modules
          ? modules.map((el) => (
              <li key={el.id}>
                <Link
                  to={`/course/${el.courseId}/${el.moduleId}`}
                  // className={`course-section__navigation`}
                  className={`course-section__navigation ${viewed.indexOf(el.moduleId) === -1 ? null : "--viewed"}`}
                >
                  {el.name}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default CourseNavigation;
