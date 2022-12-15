import React from "react";
import "./SidebarList.css";
import {
  FcContacts,
  FcTodoList,
  FcHome,
  FcFactory,
  FcSalesPerformance,
  FcNightPortrait,
} from "react-icons/fc";
import { MdBiotech, MdCastForEducation } from "react-icons/md";
// import { FiSlack } from "react-icons/fi";
import { Link } from "react-scroll";

import profilePic from "../../../assets/images/abdu.jpg";
const SidebarList = ({ expandSidebar }) => {
  return (
    <>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilePic} alt="Profile" />
          </div>
          <ul>
            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="home"
              >
                <FcHome size={25} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={-100}
                smooth={true}
                to="about"
              >
                {" "}
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="experiance"
              >
                <FcFactory size={25} /> Work Experiance
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="techstack"
              >
                {" "}
                <MdBiotech size={25} color="orange" /> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="projects"
              >
                {" "}
                <FcTodoList size={25} /> Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="education"
              >
                {" "}
                <MdCastForEducation size={25} color="orange" /> Education
              </Link>
            </li>

            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="testimonial"
              >
                <FcSalesPerformance size={25} /> Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="contact"
              >
                {" "}
                <FcContacts size={25} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="nav-items-only-icons">
          <ul>
            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="home"
              >
                <FcHome size={25} title="Home" />
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link
                spy={true}
                duration={100}
                offset={-100}
                smooth={true}
                to="about"
              >
                <FcNightPortrait size={25} title="About" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="experiance"
              >
                <FcFactory size={25} title="Work Experiance" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="techstack"
              >
                <MdBiotech size={25} color="orange" title="Tech Stack" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="projects"
              >
                <FcTodoList size={25} title="Projects" />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="education"
              >
                <MdCastForEducation
                  size={25}
                  color="orange"
                  title="Education"
                />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="testimonial"
              >
                <FcSalesPerformance size={25} title="Testimonial" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                spy={true}
                duration={100}
                offset={100}
                smooth={true}
                to="contact"
              >
                <FcContacts size={25} title="Contact" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarList;
