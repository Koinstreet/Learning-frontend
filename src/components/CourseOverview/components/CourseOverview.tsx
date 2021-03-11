import React, { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import TopSection from "./TopSection";
import Description from "./Description";

import { Navigation, Footer } from "../../Navigation";


// Actions
import { getCourseAction } from "../actions";
import { actions } from '../../CourseView';

const {data, getModulesAction} = actions;

const CourseOverview = (props) => {
  const dispatch = useDispatch();
  const { course, loading } = useSelector((state) => state.currentCourse);
  useEffect(() => {
    console.log(props.match.params)
    dispatch(getCourseAction(props.match.params.id));
    dispatch(getModulesAction(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <Fragment>
      <Navigation />
      <TopSection />
      {course && !loading && (
        <Description
          courseOverview={course.overview}
          courseAudience={course.audience}
          perequisites={course.perequisites}
          learningList={course.objectives}
        />
      )}
      <Footer />
    </Fragment>
  );
};

export default CourseOverview;
