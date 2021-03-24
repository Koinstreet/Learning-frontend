import React, { Fragment } from "react";
import { Navigation, Footer } from "../../Navigation";
import newImage from "../../../assets/images/cryptimage.png";

const About = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="dashboard-section">
        <div className="dashboard-section__top">
          <div className="container">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <section className="about-section">
        <div className="container">
          <div className="about-section__top">
            <h2>We Make It Easy For Anyone to Make Money</h2>
            <p>
              KoinStreet is A Democratizing Access to Financial Assets and
              Bringing Digital Assets to the World.
            </p>
          </div>
          <div className="row py-5 mt-5">
            <div className="col-md-6">
              <h4>
                We Began with a Belief in Decentralized and Incentivized Systems
              </h4>
              <p>
                Decentralized Finance (DeFi) enables a better economy. ‍
                Throughout history, only the rich had access to financial
                services and the tools available to multiply their wealth.
                KoinStreet is an attempt to educate people about how these new
                system are designed to benefit them. The development of
                blockchain technology paved a path for many applications that
                are set to change how the world interacts with one another.
                There is a major gap in the blockchains industry preventing
                growth. ‍ There is a large knowledge gap in the world of
                blockchain and cryptocurrency. Not many are well versed in this
                rising digital world. KoinStreet provides an onboarding for
                people to better understand the benefits in a fun way. We are a
                team of passionate crypto enthusiasts who believe blockchain
                will change the world. Will you join us on our journey?
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

export default About;
