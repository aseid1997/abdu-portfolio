import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Education = () => {
  const data = [
    {
      name: "Jimma University",
      degree: "BSc. Software Engineering",
      year: "2017-2021",
      desc: "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals",
    },
    {
      name: "BPSS",
      degree: "High School Graduation",
      year: "2013-2017",
      desc: "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals",
    },
    {
      name: "BPSS",
      degree: "High School Graduation",
      year: "2013-2017",
      desc: "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organization's mission and goals",
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
    <div className="container education-section">
      <div className="section-title">
        <h5>Education </h5>
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
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "gold" }}
              >
                {item.degree}
              </h4>
              <p>{item.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
