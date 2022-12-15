import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";
import "./Project.css";
import Zoom from "react-reveal/Zoom";
const ProjectList = ({ name, desc, projectLink, techUsed }) => {
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
  ];

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Zoom>
      <div
        className={show ? "project-list-opened project-list" : "project-list"}
        onClick={handleShow}
      >
        <div className="title-and-collapse-option">
          <h1>{name}</h1>
          <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
        </div>
        <div className="description">
          {show ? <p>{desc}</p> : <p>{desc.substring(0, 50)}...</p>}
          {/* <p style={{ color: "green" }}>Read More</p>{" "} */}
        </div>

        <div className="row">
          {techUsed &&
            techUsed.map((tech, index) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="tech-used-in-project">
                  <p style={{ backgroundColor: colors[index] }}>
                    {tech.techname}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="live-demo-button">
          <a href={projectLink} target="_">
            Live Demo
          </a>
        </div>
        <p></p>
      </div>
    </Zoom>
  );
};

export default ProjectList;
