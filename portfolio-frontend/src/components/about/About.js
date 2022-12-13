import React from "react";
import "./About.css";
import aboutIMG from "../../assets/images/abdu2.jpg";
const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={aboutIMG} alt="about" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About Me</h5>
              <span className="line"></span>
            </div>
            <p>
              Iam a hard-working professional,passionate and fast learner who
              has been praised as proactive by myco-workers and management.I've
              developed a skill set directly relevant to application development
              throughout my career,including webdesign,mobile application
              development,and database design.Overall,I have consistently
              demonstrated problem solving, creative thinking, and multitasking
              abilities in every aspect of my software developer role at
              companies get hired.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
