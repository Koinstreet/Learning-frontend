import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import facebook from "../../../assets/images/facebook-white-icon.svg";
import twitter from "../../../assets/images/twitter-white-icon.svg";
import instagram from "../../../assets/images/instagram-white-icon.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="container">
          <ul className="row footer__list">
            <li className="col-3 footer__item">
              <Link to="/">
                <img src={logo} alt="koinstreet" />
              </Link>
            </li>
            <li className="col-3 footer__item">
              <Link to="/">Home</Link>
            </li>
            <li className="col-3 footer__item">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="col-3 footer__item">
              <span className="socials">
                <a href="https://www.facebook.com/KoinStreetOfficial/">
                <img src={facebook} alt="facebook" />
                </a>
                <a href="https://twitter.com/KoinStreet">
                <img src={twitter} alt="twitter" />
                </a>
                <a href="https://www.instagram.com/koinstreet/">
                <img src={instagram} alt="instagram" />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">Copyright @Koinstreet</div>
    </Fragment>
  );
};

export default Footer;
