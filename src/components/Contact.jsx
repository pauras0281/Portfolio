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
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    setSending(true)
    console.log(sending);

    emailjs
      .send(
        "service_qjll2zi", 
        "template_iu8d3bc",
        formData,
        "FdqHHHYYbnBs61tp2" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setSending(false)
        },
        (error) => {
          console.log("FAILED...", error);
          setSuccessMessage("Failed to send message. Please try again.");
          setSending(false)
        }
      );
      console.log(sending);
      
  };

  return (
    <section id="contact">
      <h2 className="contact-title" data-aos="fade-in" >CONTACT</h2>
      <div className="underline"></div>
      <p className="contact-subtitle">
        Feel free to Contact me by submitting the form below and I will get
        back to you as soon as possible.
      </p>
      {!sending && <form className="contact-form" onSubmit={sendEmail}>
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
      </form>}
      {sending && <div className="contact-form form-hide"><h1>Sending Message</h1></div>}
    </section>
  );
};

export default Contact;
