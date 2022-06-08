import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/footer.component";
import Header from "./components/layout/header.component";
import Home from "./routes/home.component";
import SkillsTab from "./components/skillsTab.component";
import ExperienceTab from "./components/experienceTab.component";
import AboutTab from "./components/aboutTab.component";

// this data will be passed to a context file
// Expertices Data
const experienceList = [
  {
    title: "Back End Web Developer",
    startingDate: "2014",
    endingDate: "2015",
    company: "Freelancer",
    aboutThisJob:
      "Designing responsive and dynamic website for small bussiness and friends.",
  },
  {
    title: "Front End Web Developer",
    startingDate: "2017",
    endingDate: "2019",
    company: "Queensborough Community Collage",
    aboutThisJob:
      "Designing and coding reusable components, fixing existent bugs on legacy code, designing icon sets ",
  },
];

const skillsList = [
  {
    title: "HTML / CSS / Sass / TailwindCSS",
    percentage: "30%",
  },
  {
    title: "JavaScript / React.js / Vue.js",
    percentage: "60%",
  },
  {
    title: "Express.js / MongoDB.js / Node.js",
    percentage: "10%",
  },
];

const aboutTabData = {
  title: "My Story",
  titleDesc:
    "I am from the Dominican Republic where I've live half of my life. I live now in the United States for about 15 years. In 2017 I joined the Queensborough Community College's marketing team, where my life as a web developer started to take shape and meaning. Maybe I could make it along, but I am glad I didn't. I am greaful to every member of that team because Thanks to these amazing people I have discover my passion not only for web development but my passion to create with others as a team.",
  subtitle: "I do Web Development since 2017",
  subtitleDesc:
    "In my time as a developer, I’ve done work both on premise and remote for colleges and companies to create web solutions for their businesses. I craft responsive, accessible sites built using HTML, CSS, SASS, and JavaScript  that are fast, friendly, and easy to use. I am growing my full-stack developer skillset with React, Next.js Vue.js, Nuxt.js, Express, Node.js and MondoDB in addition to my extensive front-end developer experience.",
};

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path=""
            element={<AboutTab aboutTabData={aboutTabData} />}
          ></Route>
          <Route
            path="/tab-skills"
            element={<SkillsTab skillsList={skillsList} />}
          ></Route>
          <Route
            path="/tab-experience"
            element={<ExperienceTab experienceList={experienceList} />}
          ></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
