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
