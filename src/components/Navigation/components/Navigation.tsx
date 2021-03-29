import React, { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Slider } from "react-burgers";
import { actions } from "../../Auth"
import store from "../../../redux/store"

import logo from "../../../assets/images/logo.png";
import cancel from "../../../assets/icons/cancel.svg";
import logoblue from "../../../assets/images/logoblue.png";

const Navigation: React.FC = () => {
  const [isPageTop, setIsPageTop] = useState<boolean>(true);
  const [isNavActive, setIsNavActive] = useState<boolean>(false);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const toggleNavActive = () => {
    setIsNavActive(!isNavActive);
  };

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

  const logoutUser = () => {
    localStorage.removeItem("jwtToken");
    store.dispatch(actions.authSuccess({}));
    window.location.href = "/";
  }

  const authLinks = () => {
    if (isAuthenticated) {
      return (
        <Fragment>
        <li>
          <NavLink to="/dashboard">
            <UserOutlined style={{ fontSize: 20 }} />{" "}
            <span className="pl-3">User</span>
          </NavLink>
        </li>
        <ul>
        <Link to="/" onClick={() => logoutUser()}>
          <LogoutOutlined style={{ fontSize: 20 }} />{" "}
          <span className="pl-3">Logout</span>
        </Link>
      </ul>
      </Fragment>
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
      <div
        className={`navigation__backdrop ${isNavActive && "--active"}`}
        onClick={toggleNavActive}
      ></div>
      {/* <div className="navigation__burger" onClick={toggleNavActive}>
        <Slider padding="0" active={isNavActive} />
      </div> */}
      <ul>
        <li className="navigation__burger" onClick={toggleNavActive}>
          <Slider padding="0" active={isNavActive} color={isPageTop ? "#eee" : '#1e1e1e' } width={30} lineHeight={2} />
        </li>
        <li>
          <NavLink to="/">
            <img src={isPageTop ? logo : logoblue} alt="Koinstreet" />
          </NavLink>
        </li>
        <li>
          <ul className={`navigation__wrapper ${isNavActive && "--active"}`}>
            <div className="navigation__cancel">
              <img src={cancel} alt="cancel" onClick={toggleNavActive} />
            </div>
            <li>
              <NavLink to="/" onClick={() => setIsNavActive(false)}>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" onClick={() => setIsNavActive(false)}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" onClick={() => setIsNavActive(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <div className="navigation__auth">
        <ul>{authLinks()}</ul>
      </div>
    </nav>
  );
};

export default Navigation;
