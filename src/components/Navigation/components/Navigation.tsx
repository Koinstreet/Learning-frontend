import React, { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

import logo from '../../../assets/images/logo.png';
import logoblue from '../../../assets/images/logoblue.png';

const Navigation: React.FC = () => {
  const [isPageTop, setIsPageTop] = useState<boolean>(true);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsPageTop(false);
    } else {
      setIsPageTop(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const authLinks = () => {
    if (isAuthenticated) {
      return (
        <li>
          <NavLink to="/dashboard">
            <UserOutlined style={{ fontSize: 20 }} />{" "}
            <span className="pl-3">User</span>
          </NavLink>
        </li>
      );
    } else {
      return (
        <Fragment>
          <li>
            <NavLink to="/signin">Sign In</NavLink>
          </li>
          <li className="navigation__auth--btn">
            <NavLink to="/signup">Get started today</NavLink>
          </li>
        </Fragment>
      );
    }
  };

  return (
    <nav className={`navigation ${!isPageTop ? "--active" : null}`}>
      <ul>
        <li>
          <NavLink to="/"><img src={isPageTop ? logo : logoblue} alt="Koinstreet" /></NavLink>
        </li>
        <li>
          <NavLink to="/">Courses</NavLink>
        </li>
        {/* <li>
          <NavLink to="/">Customers</NavLink>
        </li>
        <li>
          <NavLink to="/">Pricing</NavLink>
        </li> */}
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
      <div className="navigation__auth">
        <ul>{authLinks()}</ul>
      </div>
    </nav>
  );
};

export default Navigation;
