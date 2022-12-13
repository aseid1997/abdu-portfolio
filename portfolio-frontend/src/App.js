import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import TechStack from "./components/tech-stack/TechStack";
import Project from "./components/projects/Project";
import WorkExperiance from "./components/work-experiance/WorkExperiance";
import Education from "./components/education/Education";
import Testimonial from "./components/testimonial/Testimonial";

const App = () => {
  return (
    <>
      <Sidebar />
      <About />
      <TechStack />
      <Project />
      <WorkExperiance />
      <Education />
      <Testimonial />
    </>
  );
};

export default App;
