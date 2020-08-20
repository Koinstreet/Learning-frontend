import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Component
import Video from "./Video";
import Quiz from "./Quiz";

const CourseItem = (props) => {
  const [link, setLink] = useState<string>("");
  const [isLast, setIsLast] = useState<boolean>(false);
  const { module, modules } = useSelector((state) => state.courseModules);
  const { course } = useSelector((state) => state.currentCourse);

  useEffect(() => {
    if (module) {
      const moduleLength = modules.length;
      const moduleIndex = modules.findIndex(
        (el) => el.moduleId === props.moduleId
      );
      console.log(moduleLength, moduleIndex, "here");
      console.log(modules);
      console.log(module)

      if (moduleIndex !== -1 && moduleIndex < moduleLength - 1) {
        const text = `/course/${props.courseId}/${
          modules[moduleIndex + 1].moduleId
        }`;
        setLink(text);
      }
      //  else {
      //   const text = `/overview/${props.courseId}`;
      //   setLink(text);
      // }
      // if (moduleIndex === moduleLength - 1) {
      //   setIsLast(true);
      // } else {
      //   setIsLast(false);
      // }
    }
  }, [module, props.courseId, props.moduleId]);

  return (
    <div className="course-section__item">
      {module && course ? (
        <Fragment>
          {module.type === "video" && (
            <Fragment>
              <Video videoLink={module.content.link} height={500}/>
              <div className="course-section__item-btns">
                <span></span>
                <span>
                  <Link to={link} className="button mt-5">
                    Next
                  </Link>
                </span>
              </div>
            </Fragment>
          )}
          {module.type === "text" && (
            <Fragment>
              <div>{module.content.text}</div>
              <div className="course-section__item-btns">
                <span></span>
                <span>
                  <Link to={link} className="button mt-5">
                    Next
                  </Link>
                </span>
              </div>
            </Fragment>
          )}
          {module.type === "quiz" && <Quiz courseId={props.courseId} questions={module.content.questions} />}
        </Fragment>
      ) : null}
    </div>
  );
};

export default CourseItem;
