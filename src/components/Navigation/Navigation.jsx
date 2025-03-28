import React from "react";
import "./Navigation.css";
import MyImage from "../../assets/my-picture.png";

const Navigation = () => {
  return (
    <div className="Navigation fade-right">
      <div className="nav-box">
        <img src={MyImage} alt="" />
      </div>
      <a href="#project">Projects</a>
    </div>
  );
};

export default Navigation;
