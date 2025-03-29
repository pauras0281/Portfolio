import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-in">
      <div className="footer-content">
        <div className="footer-left">
          <h2>YASH LOKHANDE</h2>
          <p>
            A Frontend-focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
        </div>
        <div className="footer-right">
          <h3>SOCIAL</h3>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/pauras-lokhande-681210301"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/pauras_281/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="https://github.com/pauras0281/" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h3>PHONE</h3>
          <div className="social-icons">
            <a
              href="https://wa.me/+918605578198"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="tel:+919209983485" target="_blank">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Copyright 2025. Made by <strong>YASH LOKHANDE</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
