import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";
const Project = () => {
  const data = [
    {
      name: "MERN Stack POS",
      desc: "Ability to write software documentation such as SRS, SDD, and User Manual Ability to write software documentation such as SRS, SDD, and User Manual ",
      projectLink: "",

      techUsed: [
        {
          techname: "NodeJS",
        },
        {
          techname: "ExpressJS",
        },
        {
          techname: "ReactJS",
        },
      ],
    },
    {
      name: "Full Stack Company Website",
      desc: "Knowledge of basic database system installation and management, IIS configuration Ability to write software documentation such as SRS, SDD, and User Manual ",
      projectLink: "",
      techUsed: [
        {
          techname: "Strapi",
        },
        {
          techname: "Tailwind CSS",
        },
        {
          techname: "NextJs",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <div className="section-title">
        <h5>Project</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
