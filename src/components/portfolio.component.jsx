import React from "react";
import Container from "./common/containers/container.component";
import PortfolioCard from "./portfolioCard.component";

const portfolioData = [
  {
    title: "Branding And Illustration Design",
    type: "Web Design",
    Technologies: "Illustrator, HTML, CSS, Vanilla JS",
    imgPath: require("../assets/imgs/projects/xproject-1.jpg"),
    linkPathUrl: '/'
  },
  {
    title: "MERN Application",
    type: "Web Design",
    Technologies: "Illustrator, HTML, CSS, Vanilla JS",
    imgPath: require("../assets/imgs/projects/xproject-2.jpg"),
    linkPathUrl: '/'
  },
  {
    title: "Vanilla JS Task Manager",
    type: "Web Design",
    Technologies: "Illustrator, HTML, CSS, Vanilla JS",
    imgPath: require("../assets/imgs/projects/xproject-3.jpg"),
    linkPathUrl: '/'
  },
  {
    title: "CSS Animations Practice",
    type: "Web Design",
    Technologies: "Illustrator, HTML, CSS, Vanilla JS",
    imgPath: require("../assets/imgs/projects/xproject-4.jpg"),
    linkPathUrl: '/'
  },
  {
    title: "Web Scroller",
    type: "Web Design",
    Technologies: "Illustrator, HTML, CSS, Vanilla JS",
    imgPath: require("../assets/imgs/projects/xproject-5.jpg"),
    linkPathUrl: '/'
  },
  {
    title: "Shopping Cart Application",
    type: "Web Design",
    Technologies: "Illustrator, HTML, CSS, Vanilla JS",
    imgPath: require("../assets/imgs/projects/xproject-6.jpg"),
    linkPathUrl: '/'
  },
];

const Portfolio = () => {
  return (
    <section>
      <Container>
        <h2>Portfolio</h2>
        <PortfolioCard data={portfolioData} />
      </Container>
    </section>
  );
};

export default Portfolio;
