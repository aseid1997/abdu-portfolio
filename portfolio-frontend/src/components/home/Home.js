import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import CV from "../../assets/CV.pdf";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

import { Link } from "react-scroll";

const Home = ({ theme, changeTheme }) => {
  return (
    <>
      <div className=" container-fluid home" id="home">
        <div className="theme-change" onClick={changeTheme}>
          {theme === "light" ? (
            <p>
              <BsFillMoonStarsFill size={30} />
            </p>
          ) : (
            <p>
              <BsSunFill size={30} className="sun-theme-icon" />
            </p>
          )}
        </div>
        <div className="container pl-4 home-content">
          <Fade right>
            <h1>Hi I'm Abdu Seid</h1>
            <h3>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Software Developer",
                    "MERN Stack Developer",
                    "MEAN Stack Developer",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 5,
                }}
              />
            </h3>
          </Fade>
          <Fade right>
            <div className="button-for-action">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="contact"
              >
                <div className="hire-me-button">Hire Me</div>
              </Link>
              <div className="get-resume-button">
                <a href={CV} download="Abdu_CV">
                  Get Resume
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
