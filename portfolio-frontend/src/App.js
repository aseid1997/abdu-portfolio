import React, { useState, createContext } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import TechStack from "./components/tech-stack/TechStack";
import Project from "./components/projects/Project";
import WorkExperiance from "./components/work-experiance/WorkExperiance";
import Education from "./components/education/Education";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import NavbarMobile from "./components/sidebar/NavbarMobile";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme}>
        <NavbarMobile />
        <Sidebar changeTheme={changeTheme} theme={theme} />
        <About />
        <WorkExperiance />
        <TechStack />
        <Project />
        <Education />
        <Testimonial />
        <Contact />
      </div>

      <ScrollToTop
        smooth={true}
        top="600"
        color="white"
        height="20"
        width="20"
        style={{
          borderRadius: "90px",
          backgroundColor: "#38004c",
        }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
