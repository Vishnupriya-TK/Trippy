import React, { useState } from "react";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import aboutImg from "../assets/n.jpg";
import "../Component/ContactStyles.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload

    // Show alert after form submission
    alert(
      `Thank you, ${formData.name}! Your message has been received. We will get back to you soon.`
    );

    // Optionally, reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutImg} title="Contact Us" btnClass="hide" />

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions? Need help planning your next trip? Contact us and we'll be happy to assist you!</p>
          <div className="contact-details">
            <p>📍 Address: 123 Travel Street, City, Country</p>
            <p>📞 Phone: +123 456 7890</p>
            <p>📧 Email: support@trippy.com</p>
            <p>⏰ Hours: Mon-Fri, 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
