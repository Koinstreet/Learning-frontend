import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Player, BigPlayButton } from "video-react";
import { ITopSection } from "../types";
import Video from "../../CourseView/components/Video";

// assets
import userImg from "../../../assets/images/face.png";

const SectionInfo = (props) => {
  return (
    <div className="container h-100">
      <div className="row h-100 align-items-center pt-5">
        <div className="col-md-6 py-5">
          <div className="h-100">
            <div className="overview-top__desc mb-5">
              <h1>{props.courseName}</h1>
              <h4>{props.overview}</h4>
            </div>
            <div className="overview-top__author mt-5">
              <img src={userImg} alt="author" />
              <span>{`by ${props.authorName}`}</span>
            </div>
            <p className="mb-5 mt-3">
              <span>{props.students}</span> students enrolled
            </p>
            <Link to={`/course/${props.id}/${props.courseIntroId}`} className="button mt-5">
              START COURSE
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          {/* {console.log(props.videoLink)} */}
          <Video videoLink={props.videoLink} height={400}/>
        </div>
      </div>
    </div>
  );
};

const TopSection = () => {
  const { course, loading } = useSelector((state) => state.currentCourse);
  const {modules} = useSelector((state) => state.courseModules);
  let link = useRef("");
  
  useEffect(() => {
    for(let i = 0; i < modules.length; i++) {
      if(modules[i].type === "video") {
        link.current = modules[i].content.link;
        break;
      }
    }
  }, [modules]);

  return (
    <div className="overview-top">
      {course && !loading && !modules.loading && (
        <SectionInfo
          id={course.id}
          courseName={course.name}
          authorName={`${course.author.firstName} ${course.author.lastName}`}
          overview={course.overview}
          // authorImg={``}
          students={0}
          videoLink={link.current}
          courseIntroId={modules.length > 0 ? modules[0].moduleId : ""}
        />
      )}
    </div>
  );
};

export default TopSection;
