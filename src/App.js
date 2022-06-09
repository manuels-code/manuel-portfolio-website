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
    title: "Freelancer",
    period: "Current",
    company: "Freelancer",
    aboutThisJob:
      "Designing responsive and dynamic website for small bussiness and friends.",
  },
  {
    title: "Front End Web Developer",
    period: "2017 -2019",
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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<AboutTab />}></Route>
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
