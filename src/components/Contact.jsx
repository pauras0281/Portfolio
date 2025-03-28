import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qjll2zi", // Replace with your actual Service ID
        "template_iu8d3bc", // Replace with your actual Template ID
        formData,
        "FdqHHHYYbnBs61tp2" // Replace with your actual Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <h2 className="contact-title" data-aos="fade-in" >CONTACT</h2>
      <div className="underline"></div>
      <p className="contact-subtitle">
        Feel free to Contact me by submitting the form below and I will get
        back to you as soon as possible.
      </p>
      <form className="contact-form" onSubmit={sendEmail}>
        <label  data-aos="fade-up" >Name</label>
        <input
          type="text" 
          data-aos="fade-up" 
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label data-aos="fade-down" >Message</label>
        <textarea
          name="message" 
          data-aos="fade-down" 
          placeholder="Enter Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="submit-btn" data-aos="fade-in" >
          SUBMIT
        </button>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;
