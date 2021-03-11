import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Slider } from "react-burgers";

const CourseNavigation = () => {
  const [isNavActive, setIsNavActive] = useState<boolean>(false);
  const { modules, viewed } = useSelector((state) => state.courseModules);
  const toggleNavActive = () => {
    setIsNavActive(!isNavActive);
  };
  return (
    <div className="course-section__navigation">
      <h4 onClick={toggleNavActive}>
        <span>
          <Slider
            width={25}
            lineHeight={3}
            lineSpacing={3}
            padding="0"
            active={isNavActive}
            color='#1e1e1e'
            borderRadius={39}
          />
        </span>
        Course Modules
      </h4>
      <ul className={`${isNavActive ? "--active" : ""}`}>
        {modules
          ? modules.map((el) => (
              <li key={el._id}>
                <Link
                  to={`/course/${el.courseId}/${el._id}`}
                  // className={`course-section__navigation`}
                  className={`course-section__navigation ${
                    viewed.indexOf(el._id) === -1 ? null : "--viewed"
                  }`}
                  onClick={toggleNavActive}
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
