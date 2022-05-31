import { Button } from "./common/buttons/button.component";
import Container from "./common/containers/container.component";

const heroStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
};

const Hero = () => {
  return (
    <section className="h-screen bg-blue-400 text-white">
      <Container style={heroStyles}>
        <h1>
          <span className="text-lg block">Hello there! </span>I am Manuel Nunez
          <span className="block"> Web Developer</span>
        </h1>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          necessitatibus veritatis possimus iste error itaque praesentium velit
          debitis blanditiis maxime?
        </p>

        <div className="flex gap-1 pb-4 flex flex-col">
          <Button>Hire Me</Button>
          <Button color='white'>View Portfolio</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
