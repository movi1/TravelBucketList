import React, { useState } from "react";
import "./contact-us.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      // Simulate a successful form submission
      console.log("Form submitted:", { name, email, message });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Us</h2>
        {isSubmitted ? (
          <>
            <p>Thank you for your message, we'll be in touch!</p>
            <Link to="/">
            <img className="contact-image" src="images/bg-sea.png" alt="Mountain Sea Scenery" />
            <p>Back to Homepage</p>
            </Link>
          </>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}

            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}

            <button className="contact-submit-btn" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
