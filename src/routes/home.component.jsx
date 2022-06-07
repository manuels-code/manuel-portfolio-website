import React from "react";
import About from "../components/about.component";
import Contact from "../components/contact.component";
import Expertise from "../components/expertise.component";
import Hero from "../components/hero.component";
import Portfolio from "../components/portfolio.component";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Expertise />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
