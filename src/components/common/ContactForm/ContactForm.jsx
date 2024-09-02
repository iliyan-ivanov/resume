import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_iytsd2z", "template_z3bw7ai", formData, "90A3nK08FbJJtElfA")
      .then(
        () => {
          alert("Email sent successfully!");
          setFormData({ subject: "", email: "", message: "" });
        },
        (error) => {
          alert("Error sending email: " + error.text);
        }
      );
  };

  return (
    <section className="contact-form-section">
      <h2>Contact me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-message">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="contact-form-button">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
