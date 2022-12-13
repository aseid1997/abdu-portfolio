import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";
import "./Project.css";

const ProjectList = ({ name, desc, projectLink, techUsed }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div
      className={show ? "project-list-opened project-list" : "project-list"}
      onClick={handleShow}
      onMouseEnter={() => setShow(true)}
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
                <p>{tech.techname}</p>
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
  );
};

export default ProjectList;
