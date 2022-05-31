import Container from "./common/containers/container.component";
import ExpertiseCard from "./expertiseCard.component";

const Expertise = () => {
  const expertiseCarsData = [
    {
      imgPath: "",
      title: "Web Design",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cardPathTo: "design-icon.svg",
    },
    {
      imgPath: "",
      title: "Front End Development",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cardPathTo: "",
    },
    {
      imgPath: "",
      title: "Back End Development",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cardPathTo: "",
    },
  ];
  return (
    <section>
      <Container>
        <h2 className="text-center">My Expertise</h2>
        <div className="flex flex-col gap-2">
          <ExpertiseCard data={expertiseCarsData} />
        </div>
      </Container>
    </section>
  );
};

export default Expertise;
