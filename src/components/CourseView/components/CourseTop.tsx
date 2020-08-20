import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Progress } from "react-sweet-progress";

const Info = (props) => (
  <div className="container">
    <h2>{props.name}</h2>
    <h3>{props.courseTitle}</h3>
    <div className="course-section__top-progress">
      <p>Course progress</p>
      <Progress
        percent={props.progress}
        status="active"
        theme={{
          active: {
            color: "#E6AA67",
          },
        }}
      />
    </div>
  </div>
);

const CourseTop = () => {
  const [progress, setProgress] = useState<number>(0);
  const { course } = useSelector((state) => state.currentCourse);
  const { module, viewed, modules } = useSelector((state) => state.courseModules);
  useEffect(() => {
    if(course) {
      const progress = Math.ceil((viewed.length / modules.length) * 100);
      setProgress(progress)
    };
  }, [course, viewed, modules])
  return (
    <div className="course-section__top">
      {course && module && <Info name={course.name} courseTitle={module.name} progress={progress} />}
    </div>
  );
};

export default CourseTop;
