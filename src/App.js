import About from "./components/about.component";
import Contact from "./components/contact.component";
import Expertise from "./components/expertise.component";
import Hero from "./components/hero.component";
import Footer from "./components/layout/footer.component";
import Header from "./components/layout/header.component";
import Portfolio from "./components/portfolio.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
