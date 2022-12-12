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
// import { Link } from "react-scroll";

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
              <FcHome size={25} /> Home
            </li>
            <li className="nav-item">
              <FcNightPortrait size={25} /> About
            </li>
            <li className="nav-item">
              <FcFactory size={25} /> Work Experiance
            </li>
            <li className="nav-item">
              <MdBiotech size={25} color="orange" /> Tech Stack
            </li>
            <li className="nav-item">
              <MdCastForEducation size={25} color="orange" /> Education
            </li>
            <li className="nav-item">
              <FcTodoList size={25} /> Projects
            </li>
            <li className="nav-item">
              <FcSalesPerformance size={25} /> Testimonial
            </li>
            <li className="nav-item">
              <FcContacts size={25} /> Contact
            </li>
          </ul>
        </div>
      ) : (
        <div className="nav-items-only-icons">
          <ul>
            <li className="nav-item">
              <FcHome size={25} title="Home" />
            </li>
            <li className="nav-item">
              <FcNightPortrait size={25} title="About" />
            </li>
            <li className="nav-item">
              <FcFactory size={25} title="Work Experiance" />
            </li>
            <li className="nav-item">
              <MdBiotech size={25} color="orange" title="Tech Stack" />
            </li>
            <li className="nav-item">
              <MdCastForEducation size={25} color="orange" title="Education" />
            </li>
            <li className="nav-item">
              <FcTodoList size={25} title="Projects" />
            </li>
            <li className="nav-item">
              <FcSalesPerformance size={25} title="Testimonial" />
            </li>
            <li className="nav-item">
              <FcContacts size={25} title="Contact" />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarList;
