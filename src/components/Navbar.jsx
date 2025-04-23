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
      <div className="logo-container" data-aos="slide-right">
        <div className="img-div">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrS0QKeIHqSCyTZdtYAg9kcvZ3RMSomljf2g&s"
          alt="" 
          
          className="profile-img"
        />
        </div>
        <span className="logo-text">PAURAS LOKHANDE</span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li data-aos="slide-left"><a onClick={() => handleScroll("home")}>HOME</a></li>
        <li data-aos="slide-left"><a onClick={() => handleScroll("about")}>ABOUT</a></li>
        <li data-aos="slide-left"><a onClick={() => handleScroll("projects")}>PROJECTS</a></li>
        <li data-aos="slide-left"><a onClick={() => handleScroll("contact")}>CONTACT</a></li>
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
