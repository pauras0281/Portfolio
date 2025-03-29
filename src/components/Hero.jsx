import React from "react";
import "./Hero.css"; 

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
      <h1 data-aos="slide-down" >HEY, I'M YASH LOKHANDE</h1>
      <p data-aos="fade-in" >your trusty Full Stack Companion! Whether it's
        crafting seamless user experiences or fine-tuning server-side magic, I'm
        here to guide you through the tech jungle. Let's embark on this journey
        together!🥰 </p>;
        <div className="me">
        <h3>Software Engineer</h3>
        <h3>Web/Mobile App Developer</h3>
        </div>
      <a href="Pauras_Lokhande.pdf" download="Pauras's Resume.pdf" className="hero-btn" data-aos="slide-up" >RESUME</a>
      </div>
    </section>
  );
};

export default Hero;
