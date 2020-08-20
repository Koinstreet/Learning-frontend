import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const RightArrow: React.FC = () => (
  <svg
    width="24"
    height="16"
    viewBox="0 0 24 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.8535 7.64648L16.3535 0.14647C16.1582 -0.0488588 15.8418 -0.0488588 15.6465 0.14647C15.4512 0.341798 15.4512 0.658204 15.6465 0.853486L22.293 7.49999H0.500016C0.223641 7.49999 0 7.72363 0 8.00001C0 8.27638 0.223641 8.50002 0.500016 8.50002H22.293L15.6465 15.1465C15.4512 15.3418 15.4512 15.6582 15.6465 15.8535C15.7441 15.9511 15.8721 16 16 16C16.128 16 16.2559 15.9511 16.3536 15.8535L23.8536 8.35349C24.0488 8.15821 24.0488 7.8418 23.8535 7.64648Z"
      fill="black"
    />
  </svg>
);

const Landing: React.FC = () => {
  const settings = {
    className: "landing__slide",
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="landing-container">
      <Slider {...settings}>
        <div className="landing__slide-item --slide1">
          <h1>1</h1>
        </div>
        <div className="landing__slide-item --slide1">
          <h1>1</h1>
        </div>
      </Slider>
      <div className="landing__info">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="landing__info-container">
              <h1>
                Making Digital Assets Easier to Understand and More Approachable
              </h1>
              <p>
                KoinStreet helps you learn about digital assets in a fun
                interactive way opening the door to a new form of investing. We
                believe mass adoption will come when people start understanding
                the true benefits of digital assets.
              </p>

              <form className="landing__form">
                {/* <input placeholder="you@email.com" /> */}
                <Link to="/about" className="button">
                  LEARN MORE
                  <RightArrow />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
