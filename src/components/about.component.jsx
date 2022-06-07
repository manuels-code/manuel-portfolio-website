import AboutTab from "./aboutTab.component";
import TabButton from "./common/buttons/tabButton.component";
import Container from "./common/containers/container.component";
import ExperienceTab from "./experienceTab.component";
import SkillsTab from "./skillsTab.component";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";

const experienceList = [
  {
    title: "Front End Web Developer",
    startingDate: "2014",
    endingDate: "2015",
    company: "Queensborough Community Collage",
    aboutThisJob:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores, fugit quaerat veritatis nobis itaque vero illum quibusdam soluta optio?",
  },
  {
    title: "Back End Web Developer",
    startingDate: "2014",
    endingDate: "2015",
    company: "Queensborough Community Collage",
    aboutThisJob:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores, fugit quaerat veritatis nobis itaque vero illum quibusdam soluta optio?",
  },
];

const skillsList = [
  {
    title: "HTML / CSS",
    percentage: "95%",
  },
  {
    title: "JavaScript",
    percentage: "80%",
  },
  {
    title: "React.js",
    percentage: "50%",
  },
  {
    title: "Vue.js",
    percentage: "50%",
  },
];

const aboutTabData = {
  title: "My Story",
  titleDesc:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas obcaecati dolores perferendis provident nobis aperiam.",
  subtitle: "I do Web Development since 2017",
  subtitleDesc:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas obcaecati dolores perferendis provident nobis aperiam.",
};

const About = () => {
  return (
    <section className="bg-bg-light-700 py-14">
      <Container>
        <div className="">
          <div className="w-full h-[356px] m-auto bg-center bg-top bg-[length:190%] bg-[url('https://preview.colorlib.com/theme/knuford/images/xabout.jpg.pagespeed.ic.ROjPXqaKV7.webp')]"></div>

          <div className="flex gap-2 py-10 tab-button">
            <NavLink to="">About me</NavLink>
            <NavLink to="/tab-skills">Skills</NavLink>
            <NavLink to="/tab-experience">Experience</NavLink>
          </div>

          <Outlet />
        </div>
      </Container>
    </section>
  );
};

export default About;
