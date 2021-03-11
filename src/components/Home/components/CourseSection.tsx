import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Component
import { CourseCard } from "../../CourseCard";
import defImg from "../../../assets/images/DeFi-Crash-Course.png";
import { CourseSectionProps } from "../types";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CourseSection = ({ title, courses }) => {
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
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderCourses = () => {
    return courses.map((el) => (
      <CourseCard
        key={el._id}
        image={el.image}
        name={el.name}
        author={`${el.authorId.firstName} ${el.authorId.lastName}`}
        id={el._id}
      />
    ));
  };
  return (
    <div className="courses-section">
      <h2>Free courses to grow your skills</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {renderCourses()}
      </Carousel>
      {/* <Slider {...settings}>{renderCourses()}</Slider> */}
    </div>
  );
};

CourseSection.propTypes = {
  title: PropTypes.string.isRequired,
  courses: PropTypes.array,
};

export default CourseSection;
