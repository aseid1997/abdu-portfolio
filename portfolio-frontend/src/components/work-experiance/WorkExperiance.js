import React from "react";
import "./WorkExperiance.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdGroupWork } from "react-icons/md";

const WorkExperiance = () => {
  const data = [
    {
      companyName: "Google",
      position: "Full Stack Developer",
      desc: "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals.",
      year: "2021-2022",
      techskills: [
        {
          techname: "Node js",
        },
        {
          techname: "Express js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Tailwind CSS",
        },
      ],
    },
    {
      companyName: "Facebook",
      position: "Full Stack Developer",
      desc: "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals.",
      year: "2021-2022",
      techskills: [
        {
          techname: "Nest js",
        },
        {
          techname: "Angular js",
        },
        {
          techname: "Material UI",
        },
        {
          techname: "HTML5",
        },
      ],
    },
    {
      companyName: "Company",
      position: "Full Stack Developer",
      desc: "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals.",
      year: "2021-2022",
      techskills: [
        {
          techname: "Nest js",
        },
        {
          techname: "Angular js",
        },
        {
          techname: "Material UI",
        },
        {
          techname: "HTML5",
        },
      ],
    },
  ];
  const colors = [
    "#01DF74",
    "#29088A",
    "#58D3F7",
    "##FE9A2E",
    "#FE642E",
    "#181907",
  ];

  return (
    <div className="container work-experiance-section" id="experiance">
      <div className="section-title">
        <h5>Work Experiance </h5>
        <span className="line"></span>
      </div>
      <div className="timeline-section">
        {" "}
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              key={index}
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyName}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>
              <div className="row">
                {item.techskills &&
                  item.techskills.map((techskill, index) => (
                    <div
                      className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="tech-skils">
                        <p>{techskill.techname}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <p>{item.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperiance;
