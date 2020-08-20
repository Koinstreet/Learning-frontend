import React, { Fragment } from "react";
import { Navigation } from "../../Navigation";
import LoadingBar from "react-redux-loading-bar";

const Loading = () => (
  <LoadingBar
    style={{
      backgroundColor: "#509F99",
      height: "3px",
      position: "fixed",
      zIndex: 2,
    }}
  />
);


const Layout = (props) => {
  const { location, children } = props;

  let UserNavigation = <div/>;

  if (!(location.pathname === "/signin") || !(location.pathname === "/signup")) {
    UserNavigation = <Navigation/>
  }
  
  return (
    <Fragment>
      <Loading />
      {/* {UserNavigation} */}
      {children}
    </Fragment>
  );
};

export default Layout;
