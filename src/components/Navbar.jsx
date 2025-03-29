import React, { useState } from "react";
import "./Navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); 
  };

  return (
    <nav className="navbar" data-aos="fade-in" >
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrS0QKeIHqSCyTZdtYAg9kcvZ3RMSomljf2g&s"
          alt="" 
          data-aos="slide-right"
          className="profile-img"
        />
        <span className="logo-text" data-aos="slide-left">YASH LOKHANDE</span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li data-aos="slide-right"><a onClick={() => handleScroll("home")}>HOME</a></li>
        <li data-aos="slide-right"><a onClick={() => handleScroll("about")}>ABOUT</a></li>
        <li data-aos="slide-right"><a onClick={() => handleScroll("projects")}>PROJECTS</a></li>
        <li data-aos="slide-right"><a onClick={() => handleScroll("contact")}>CONTACT</a></li>
      </ul>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
    </nav>
  );
};

export default Navbar;
