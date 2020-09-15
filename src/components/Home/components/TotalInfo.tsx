import React from "react";
import Icons from '../../icons';

const TotalInfo: React.FC = () => {
  return (
    <section className="total-info">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="total-info__item py-2">
              <Icons.OnlineCourseIcon />
              <div className="total-info__desc">
                <h4>100,000 online courses</h4>
                <p>Explore a variety of fresh topics</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="total-info__item py-2">
              <Icons.EducationIcon />
              <div className="total-info__desc">
                <h4>Expert instruction</h4>
                <p>Find the right instructor for you</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="total-info__item py-2">
              <Icons.ReactIcon />
              <div className="total-info__desc">
                <h4>Lifetime access</h4>
                <p>Learn on your schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalInfo;
