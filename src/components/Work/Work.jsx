import React from "react";
import "./Work.css";

const Work = ({ scroll = 1000 }) => {
  return (
    <div className="Work">
      <div
        className={`about-card ${
          scroll < 1300 && scroll > 720 ? "opac-1" : "opac-0"
        }`}
      >
        <div className="text-cont">
          <p
            className={`left-skew ${
              scroll < 1300 && scroll > 800 ? "opac-1" : "down-hide opac-0"
            }`}
          >
            I have collaborated with:
          </p>
        </div>
        <div className="text-cont">
          <div
            className={`right-skew ${
              scroll < 1300 && scroll > 800 ? "opac-1" : " opac-0"
            }`}
          >
            <Item work={"Innovative Startups"} />
            <Item work={"Founders & Executives"} />
            <Item work={"Hackathon Teams & Projects"} />
            <Item work={"Cross-functional Development Teams"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = ({ work }) => {
  return (
    <div className="item">
      <i className="fa-thin fa-square-arrow-up-right"></i>
      <p>{work}</p>
    </div>
  );
};

export default Work;
