import Container from "./common/containers/container.component";
import ExpertiseCard from "./expertiseCard.component";

const Expertise = () => {
  const expertiseList = [
    {
      title: "Web Design",
      desc: "I desing web components believing that software and web application should be elegant, interactive and accessible, but also they can be very fun. I use Adobe Illustrator, Adobe Xd, or Figma to implement my desings.",
      imgPath: require("../assets/svg/design-icon.svg"),
    },
    {
      title: "Front End Development",
      desc: "I can translate complex UI designs to code using technologies from the web standards HTML, CSS and JavaScript to advance preprocesors, libraries and frameworks such as SASS, Tailwind, React.js or Vue.js for  web applications.",
      imgPath: require("../assets/svg/design-icon.svg"),
    },
    {
      title: "Back End Development",
      desc: "Basic of Back-End knowledge working with Express.js, Node.js, MongoDB and Firebase",
      imgPath: require("../assets/svg/design-icon.svg"),
    },
  ];
  return (
    <section>
      <Container>
        <h2 className="text-center">My Expertise</h2>
        <div className="flex flex-col gap-2">
          <ExpertiseCard expertiseList={expertiseList} />
        </div>
      </Container>
    </section>
  );
};

export default Expertise;
