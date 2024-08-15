import React, { useRef, useState } from "react";
import "./Contact.css";
import "../Whyus/CoreValue.css";
import "../Whyus/Vision.css";
import emailjs from '@emailjs/browser';

const Contactus = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    emailjs
      .sendForm('service_1f4jmnb', 'template_kid67nr', form.current, {
        publicKey: '8z9im9et8qSgyq6F7',
      })
      .then(
        () => {
          setSubmitMessage('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitMessage('An error occurred. Please try again later.');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="formouter">
              <div className="form-group w-100 marginRemoveAtSmall">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-100"
                  required
                />
              </div>
              <div className="form-group mx-2 w-100 marginRemoveAtSmall">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Email Address"
                  className="w-100"
                  required
                />
              </div>
              <div className="form-group w-100 marginRemoveAtSmall">
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  placeholder="Phone Number"
                  className="w-100"
                  required
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