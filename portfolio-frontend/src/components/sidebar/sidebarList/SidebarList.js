import React from "react";
import "./SidebarList.css";
import profilePic from "../../../assets/images/abdu.jpg";
const SidebarList = ({ expandSidebar }) => {
  return (
    <>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilePic} alt="Profile" />
          </div>
          <ul></ul>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SidebarList;
