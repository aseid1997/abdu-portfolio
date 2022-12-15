import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./NavbarMobile.css";
import { Link } from "react-scroll";
import { MdCastForEducation } from "react-icons/md";
import {
  FcContacts,
  FcFactory,
  FcHome,
  FcNightPortrait,
  FcSalesPerformance,
  FcTodoList,
} from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className=" container mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
      </div>
      {open ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item-mobile">
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
            <li className="nav-item-mobile">
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
            <li className="nav-item-mobile">
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
            <li className="nav-item-mobile">
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
            <li className="nav-item-mobile">
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

            <li className="nav-item-mobile">
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

            <li className="nav-item-mobile">
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
            <li className="nav-item-mobile">
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
      ) : null}
    </div>
  );
};

export default NavbarMobile;
