import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigation } from "../../Navigation";
import ViewedCourses from "./ViewedCourses";

import { actions } from "../../CourseOverview";
const { getViewedCourses } = actions;

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getViewedCourses());
  });
  return (
    <Fragment>
      <Navigation />
      <div className="dashboard-section">
        <div className="dashboard-section__top">
          <div className="container">
            <h1>Welcome, Gideon Nnalue</h1>
          </div>
        </div>
        <ViewedCourses />
      </div>
    </Fragment>
  );
};

export default Dashboard;
