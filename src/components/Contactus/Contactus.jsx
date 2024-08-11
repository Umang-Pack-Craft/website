import React from "react";
import "./Contact.css";
import "../Whyus/CoreValue.css";
import "../Whyus/Vision.css";
const Contactus = () => {
  return (
    <div id="contactus" className="container-fluid">
      <div className="row">
        <div className="col-12 whyuscnt w-100">
          <h2 className="contact">Contact Us</h2>
        </div>
      </div>
      <div className="my-5">
        <div className="containerf">
          <form id="contactForm">
            <div className="formouter">
              <div className="form-group w-100 marginRemoveAtSmall">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-100"
                  required
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
                />
              </div>
              <div className="form-group w-100  marginRemoveAtSmall">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-100"
                  required
                />
              </div>
            </div>
            <div className="form-group  marginRemoveAtSmall">
              <textarea
                id="message"
                name="message"
                rows="8"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            {/* <div className="form-group">
                <label htmlFor="captcha">What's 5 + 16 = ?</label>
                <input
                  type="number"
                  id="captcha"
                  name="captcha"
                  placeholder="Your Answer"
                  style={{ width: "10%" }}
                  className="w-25"
                  required
                />
              </div> */}
            <div className="form-group d-flex justify-content-end">
              <button
                type="submit"
                style={{ backgroundColor: "rgb(0,29,100)" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
