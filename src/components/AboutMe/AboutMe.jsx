import React from "react";
import "./AboutMe.css";

const AboutMe = ({ scroll = 500 }) => {
  return (
    <div className="AboutMe">
      <div
        className={`about-card ${
          scroll < 700 && scroll > 300 ? "opac-1" : "opac-0"
        }`}
      >
        <div className="text-cont">
          <p
            className={`left-skew ${
              scroll < 820 && scroll > 300 ? "opac-1" : "left-hide opac-0"
            }`}
          >
            Hi, I'm <span>Oluwarotimi Temidire,</span>
            <br /> a MERN stack developer based in Lagos, Nigeria
          </p>
        </div>
        <div className="text-cont">
          <p
            className={`right-skew ${
              scroll < 820 && scroll > 300 ? "opac-1" : "right-hide opac-0"
            }`}
          >
            {" "}
            With more than a year plus <span>experience </span>
            in multiple disciplines, I work with companies to create solutions
            to problems
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
