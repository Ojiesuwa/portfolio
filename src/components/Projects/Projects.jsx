import React from "react";
import "./Projects.css";

const Projects = ({ scroll }) => {
  return (
    <div className="Projects" id="project">
      <p className="title">My Projects</p>
      <div className="project-wrapper">
        <p className="project-name">LIC - 2nd Place Hackathon Winner</p>
        <div className="project-description">
          Learn In Comfort (LIC) is an AI-powered virtual learning platform that
          transforms study materials into interactive, voice-guided
          explanations. Designed for students and lifelong learners, LIC offers
          features like real-time Q&A, note-taking, quizzes, and curated
          resource recommendations to create a classroom-like experience at
          home, enhancing engagement and academic success.
        </div>
        <a
          href="https://kelvin-pi.vercel.app"
          target="_blank"
          className="project-link"
        >
          Link to LIC
        </a>
      </div>
      <div className="project-wrapper">
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
          Link to Taste Express
        </a>
      </div>
      <div className="project-wrapper">
        <p className="project-name">Movie Streaming App</p>
        <div className="project-description">
          My MovieStream app is a sleek and intuitive platform designed for
          streaming movies. It features a favorites system, allowing users to
          save and easily access their preferred films. The app’s intelligent
          search functionality offers personalized recommendations, ensuring
          users can discover new content based on their preferences. With a
          focus on simplicity and efficiency, MovieStream enhances the streaming
          experience, making it easier than ever to find and enjoy great movies.
        </div>
        <a
          href="https://movie-app-d23x.onrender.com"
          target="_blank"
          className="project-link"
        >
          Link to Movie App
        </a>
      </div>
    </div>
  );
};

export default Projects;
