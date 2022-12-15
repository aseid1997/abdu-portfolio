import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const TechStack = () => {
  const data = [
    {
      name: "Full Stack Developer",
    },
    {
      name: "Node js",
    },
    {
      name: "React Js",
    },
    {
      name: "Angular ",
    },
    {
      name: "NextJs ",
    },
    {
      name: "NestJs ",
    },
    {
      name: "Strapi ",
    },
    {
      name: "JavaScript ",
    },
    {
      name: "Typescript ",
    },

    {
      name: "Java ",
    },
    {
      name: "PHP ",
    },
    {
      name: "Flutter ",
    },
    {
      name: "HTML5 ",
    },
    {
      name: "CSS ",
    },
    {
      name: "Bootstrap ",
    },
    {
      name: "Tailwind Css ",
    },
  ];

  const colors = [
    "#E0E6F8",
    "#81BEF7",
    "#9F81F7",
    "#FBEFF2",
    "#FBEFF8",
    "#F6CECE",
    "#190707",
    "#40FF00",
    "#81BEF7",
    "#81F7F3",
    "#CEF6F5",
    "#E0E6F8",
    "#243B0B",
    "#3A2F0B",
    "#BFFF00",
    "#81F7F3",
    "#D0FA58",
    "#D8F781",
    "#F4FA58",
    "#81F79F",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(6);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };
  return (
    <div className="container tech-stack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <Fade right key={index}>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div
                className={
                  index === 0
                    ? "tech-content-marked tech-content"
                    : "tech-content"
                }
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>
                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <Zoom>
          <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
