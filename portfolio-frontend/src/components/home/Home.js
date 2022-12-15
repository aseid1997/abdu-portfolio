import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import CV from "../../assets/CV.pdf";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

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
          <h1>Hi I'm a</h1>
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
          <div className="button-for-action">
            <div className="hire-me-button">Hire Me</div>
            <div className="get-resume-button">
              <a href={CV} download="Abdu_CV">
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
