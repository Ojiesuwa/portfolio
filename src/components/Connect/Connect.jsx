import React from "react";
import "./Connect.css";

const Connect = ({ scroll }) => {
  return (
    <div className="Connect">
      <p className={`${scroll < 2820 ? "opac-0" : "opac-1"}`}>
        Let’s Build Something Great
      </p>
      <p>Connect with me</p>
      <div className="socials" style={{ marginTop: "50px" }}>
        <i
          className={`fa-brands fa-whatsapp ${
            scroll < 2890 ? " down-hide opac-0" : " opac-1"
          }`}
          onClick={() => {
            window.open("https://wa.link/9esq44", "_blank");
          }}
        ></i>
        <i
          className={`fa-brands fa-instagram  ${
            scroll < 2890 ? " down-hide opac-0" : " opac-1"
          }`}
          onClick={() => {
            window.open(
              "https://www.instagram.com/oluwarotimitemidire?igsh=MWNzM3o4N2k2ZWt3OQ==",
              "_blank"
            );
          }}
        ></i>
        <i
          className={`fa-brands fa-linkedin  ${
            scroll < 2890 ? " down-hide opac-0" : " opac-1"
          }`}
          onClick={() => {
            window.open("https://www.linkedin.com/in/ojiesuwa", "_blank");
          }}
        ></i>
        <i
          className={`fa-regular fa-envelope  ${
            scroll < 2890 ? " down-hide opac-0" : " opac-1"
          }`}
          onClick={() => {
            window.open("mailto:oluwarotimiadeola@gmail.com", "_blank");
          }}
        ></i>
      </div>
    </div>
  );
};

export default Connect;
