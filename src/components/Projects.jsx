import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title" data-aos="fade-in" >PROJECTS</h2>
      <div className="underline"></div>
      <p className="section-subtitle">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>

      <div className="project-container" data-aos="slide-right" >
        <img
          src="home1.jpg"
          alt="Project Preview"
          className="project-image"
        />
        <div className="project-info">
          <h3 className="project-title">Attendify - QR and OTP Attendance</h3>
          <p className="project-description">
            The QR-Based Attendance System is an innovative solution designed to
            streamline the attendance process in educational institutions using
            QR codes and OTP verification. This system ensures accurate student
            tracking, prevents proxy attendance, and enhances security.
          </p>
          <button className="project-button">CASE STUDY</button>
        </div>
      </div>
      <div className="project-container" data-aos="slide-left" >
        <img
          src="four.png"
          alt="Project Preview"
          className="project-image"
        />
        <div className="project-info">
          <h3 className="project-title">Flipkart Clone</h3>
          <p className="project-description">
            This project is a fully functional e-commerce platform inspired by
            Flipkart, built using React. It features a user-friendly interface,
            product listings, search and filter functionalities, a shopping
            cart, and a secure checkout system. The frontend is designed with
            React and Redux for state management, ensuring seamless user
            experience. It mimics the core functionalities of an e-commerce
            website, providing an interactive and responsive UI for online
            shopping.
          </p>
          <button className="project-button">CASE STUDY</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
