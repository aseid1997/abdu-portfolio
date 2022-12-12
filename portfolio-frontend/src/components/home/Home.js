import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      <div className="container-fluid home">
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
        </div>
      </div>
    </>
  );
};

export default Home;
