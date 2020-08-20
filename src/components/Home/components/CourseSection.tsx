import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

// Component
import { CourseCard } from "../../CourseCard";
import defImg from "../../../assets/images/DeFi-Crash-Course.png";
import { CourseSectionProps } from "../types";

const CourseSection = ({ title, courses }: CourseSectionProps) => {
  const settings = {
    className: "courses-section__slide",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const renderCourses = () => {
    return courses.map((el) => (
      <CourseCard
        key={el.id}
        image={el.image}
        name={el.name}
        author={`${el.author.firstName} ${el.author.lastName}`}
        id={el.id}
      />
    ));
  };
  return (
    <div className="courses-section">
      <h2>Free courses to grow your skills</h2>
      <Slider {...settings}>{renderCourses()}</Slider>
    </div>
  );
};

CourseSection.propTypes = {
  title: PropTypes.string.isRequired,
  courses: PropTypes.array,
};

export default CourseSection;
