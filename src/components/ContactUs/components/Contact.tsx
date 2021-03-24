import React, { Fragment } from "react";
import { Navigation, Footer } from "../../Navigation";
import newImage from "../../../assets/images/cryptimage.png";

const Contact = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="dashboard-section">
        <div className="dashboard-section__top">
          <div className="container">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      <section className="contact-section">
        <div className="container">
          <div className="contact-section__top">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fuga pariatur labore ipsum tempore harum.
            </p>
          </div>
          <div className="row py-5 mt-5">
            <div className="col-md-6">
              <h4>
                Lorem ipsum, dolor sit amet consectetur.
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias a earum nihil? Officia aut dolores consequatur, neque ratione nesciunt numquam excepturi ipsa.
              </p>
              <h4>
                Lorem ipsum, dolor sit amet consectetur.
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias a earum nihil? Officia aut dolores consequatur, neque ratione nesciunt numquam excepturi ipsa.
              </p>
              <h4>
                Lorem ipsum, dolor sit amet consectetur.
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias a earum nihil? Officia aut dolores consequatur, neque ratione nesciunt numquam excepturi ipsa.
              </p>
            </div>
            <div className="col-md-6">
              <img src={newImage} alt="crypto" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Contact;
