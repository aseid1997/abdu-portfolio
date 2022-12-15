import React from "react";
import "./Contact.css";
import img from "../../assets/images/img10.jpg";
import { RiSendPlaneFill } from "react-icons/ri";

function Contact() {
  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="contact-form-image">
            <img src={img} alt="contact" />
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact Me</h5>
            </div>
            <form>
              <div className="contact-form">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="contact-form">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="contact-form">
                <label htmlFor="jobtype" className="form-label">
                  Job Types
                </label>
                <select className="custom-select-tag" id="jobtype">
                  <option value="">Select Job Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Working Student">Working Student</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
              <div className="contact-form">
                <label htmlFor="email" className="form-label">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="form-control"
                  id="email"
                  name="email"
                ></textarea>
              </div>
              <div className="button-submit">
                <p>
                  Send <RiSendPlaneFill size={20} />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
