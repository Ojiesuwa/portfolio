import React from "react";
import "./Hero.css";
import MyImage from "../../assets/my-picture.png";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="header drop-animation">
        <div className="drop-down-container">
          <i className="fa-brands fa-linkedin"></i>
        </div>
        <div className="drop-down-container">
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <img src={MyImage} alt="" className="fade up" />
      <div className="hero-wrapper fade-up">
        <div className="inner-hero-wrapper">
          <p className="my-name fade-up">OLUWAROTIMI TEMIDIRE</p>
          <div>
            <div className="contact-container">
              <p className="developer-title fade-right">MERN Stack Developer</p>
              <div className="get-in-touch fade-left">
                <p>Get in touch</p>
                <i className="fa-light fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
