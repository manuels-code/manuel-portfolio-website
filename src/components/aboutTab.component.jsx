const AboutTab = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.titleDesc}</p>
      <h3>{data.subtitle}</h3>
      <p>{data.subtitleDesc}</p>
    </div>
  );
};

export default AboutTab;
