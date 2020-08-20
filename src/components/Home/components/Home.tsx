import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import Landing from "./Landing";
import TotalInfo from "./TotalInfo";
import Courses from "./Courses";
import { Navigation, Footer } from "../../Navigation";


// Actions
import { getAllCoursesAction } from "../actions";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoursesAction());
  }, [dispatch]);
  return (
    <Fragment>
      <Navigation/>
      <Landing />
      <TotalInfo />
      <Courses />
      <Footer />
    </Fragment>
  );
};

export default Home;
