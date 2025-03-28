import React from "react";
import "./Projects.css";
import StorinabImage from "../../assets/storinab.png";
import TasteImage from "../../assets/taste-express.png";
import SharerImage from "../../assets/sharer.png";

const Projects = ({ scroll }) => {
  return (
    <div className="Projects" id="project">
      <p className="title">My Projects</p>
      <div className="project-wrapper">
        <img src={StorinabImage} alt="" />
        <p className="project-name">Storinab - E-commerce store</p>
        <div className="project-description">
          Storinab is a modern e-commerce platform designed to empower
          businesses by providing a seamless online store setup without
          subscription fees. With built-in payment processing and intuitive
          store management, Storinab makes selling online effortless while
          taking only a small commission per sale. 🚀
        </div>
        <a
          href="https://storinab.onrender.com"
          target="_blank"
          className="project-link"
        >
          <i className="fa-light fa-link"></i> Check out STORINAB live site
        </a>
      </div>
      <div className="project-wrapper">
        <img src={TasteImage} alt="" />

        <p className="project-name">
          Taste Express - Food Ordering and Delivery app
        </p>
        <div className="project-description">
          Taste Express is a food ordering and delivery website built in just 5
          days. It connects users with local restaurants, offering a seamless
          experience to browse menus, place orders, and track deliveries.
          Designed for simplicity and efficiency, Taste Express delivers quick
          access to favorite meals, ensuring a smooth experience for both
          customers and restaurant partners.
        </div>
        <a
          href="https://taste-express.onrender.com"
          target="_blank"
          className="project-link"
        >
          <i className="fa-light fa-link"></i> Check out TASTE EXPRESS live site
        </a>
      </div>
      <div className="project-wrapper">
        <img src={SharerImage} alt="" />
        <p className="project-name">Sharer - Free file transfer web app</p>
        <div className="project-description">
          Sharer is a fast and secure browser-based file-sharing application
          that enables seamless peer-to-peer transfers across devices. With
          built-in file categorization, a recent files tab, and clipboard
          syncing, Sharer makes sharing documents, media, and apps effortless—no
          installations required. 🚀
        </div>
        <a
          href="https://movie-app-d23x.onrender.com"
          target="_blank"
          className="project-link"
        >
          <i className="fa-light fa-link"></i> Check out SHARER live site
        </a>
      </div>
    </div>
  );
};

export default Projects;
