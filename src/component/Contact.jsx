import React, { useState } from 'react';
import './Contact.css';  // Importing the CSS file for Contact Us page
import contactImage from '../assets/contact_us.png';  // Example image

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    suggestion: '',
    donation: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Message Sent by ${formData.name}`);
    setFormData({
      name: '',
      email: '',
      message: '',
      suggestion: '',
      donation: ''
    });
  };

  return (
    <div className="contact-us">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below to get in touch.</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <img src={contactImage} alt="Contact Us" />
          <div className="info-text">
            <h2>Get in Touch</h2>
            <p>
              Whether you have a question about features, pricing, or anything else, 
              our team is ready to answer all your questions. We also appreciate your feedback 
              and suggestions to improve our platform.
            </p>
            <p>Address: 123 Main St, City, Country</p>
            <p>Email:  ritesh2005@gmail.com</p>
            <p>Phone:  +91-7275056945</p>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="suggestion">Suggestion:</label>
              <input
                type="text"
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="donation">Donation Amount:</label>
              <input
                type="number"
                name="donation"
                value={formData.donation}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
