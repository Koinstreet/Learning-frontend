import React, { useEffect, useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import CourseTop from "./CourseTop";
import CourseModules from "./CourseModules";

import { Navigation, Footer } from "../../Navigation";

import { getCourseModuleAction, getModulesAction } from "../actions";
import { actions } from "../../CourseOverview";
// const {} = actions;

const CourseView = (props) => {
  const [courseId, setCourseId] = useState<number>();
  const [moduleId, setModuleId] = useState<number>();
  const dispatch = useDispatch();

  console.log(actions.getCourseAction)

  useEffect(() => {
    const { courseId, moduleId } = props.match.params;
    if (courseId && moduleId) {
      window.scrollTo(0, 0);
      setCourseId(courseId);
      setModuleId(moduleId);
      console.log(courseId, moduleId)
      dispatch(actions.getCourseAction(parseInt(courseId)));
      dispatch(getModulesAction(parseInt(courseId)));
      dispatch(getCourseModuleAction(parseInt(courseId), moduleId));
    }
  }, [dispatch, props.match.params]);
  return (
    <Fragment>
      <Navigation />
      <div className="course-section">
        <CourseTop />
        <CourseModules courseId={courseId} moduleId={moduleId} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default CourseView;
