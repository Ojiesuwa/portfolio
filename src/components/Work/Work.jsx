import React from "react";
import "./Work.css";

const Work = ({ scroll }) => {
  return (
    <div className="Work">
      <div
        className={`about-card ${
          scroll < 1600 && scroll > 300 ? "opac-1" : "opac-0"
        }`}
      >
        <div className="text-cont">
          <p
            className={`left-skew ${
              scroll < 1660 && scroll > 400 ? "opac-1" : "left-hide opac-0"
            }`}
          >
            I have worked with:
          </p>
        </div>
        <div className="text-cont">
          <p
            className={`right-skew ${
              scroll < 1660 && scroll > 400 ? "opac-1" : "right-hide opac-0"
            }`}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Work;
