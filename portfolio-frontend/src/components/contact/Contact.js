import React, { useState } from "react";
import "./Contact.css";
import img from "../../assets/images/img10.jpg";
import { RiSendPlaneFill } from "react-icons/ri";
import Fade from "react-reveal/Fade";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const API = "http://localhost:8000/sendemail";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobType, setJobType] = useState("");
  const [messge, setMessge] = useState("");

  const sendEmailInfo = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobType,
        messge,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
            draggable: true,
          });
        } else {
          toast.success("Succesfully sent", {
            position: toast.POSITION.TOP_RIGHT,
            draggable: true,
          });
          setName("");
          setEmail("");
          setJobType("");
          setMessge("");
        }
      })
      .catch((err) => {
        console.log(err.messege);
      });
  };
  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-image">
              <img src={img} alt="contact" />
            </div>
          </div>
        </Fade>
        <Fade right>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="contact-form">
                  <label htmlFor="jobtype" className="form-label">
                    Job Types
                  </label>
                  <select
                    className="custom-select-tag"
                    id="jobtype"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                  >
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
                    value={messge}
                    onChange={(e) => setMessge(e.target.value)}
                  ></textarea>
                </div>
                <div className="button-submit" onClick={sendEmailInfo}>
                  <p>
                    Send <RiSendPlaneFill size={20} />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default Contact;
