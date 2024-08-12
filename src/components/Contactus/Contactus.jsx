import React, { useState } from "react";
import "./Contact.css";
import "../Whyus/CoreValue.css";
import "../Whyus/Vision.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitMessage('Email sent successfully!');
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Failed to send email: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contactus" className="container-fluid">
      <div className="row">
        <div className="col-12 whyuscnt w-100">
          <h2 className="contact">Contact Us</h2>
        </div>
      </div>
      <div className="my-5">
        <div className="containerf">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="formouter">
              <div className="form-group w-100 marginRemoveAtSmall">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-100"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mx-2 w-100 marginRemoveAtSmall">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-100"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-100 marginRemoveAtSmall">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-100"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group marginRemoveAtSmall">
              <textarea
                id="message"
                name="message"
                rows="8"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
      
            <div className="form-group d-flex justify-content-end">
              <button
                type="submit"
                style={{ backgroundColor: "rgb(0,29,100)" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
          {submitMessage && (
            <div className={`mt-3 ${submitMessage.includes('successfully') ? 'text-success' : 'text-danger'}`}>
              {submitMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contactus;