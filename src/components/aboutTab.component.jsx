const AboutTab = ({ aboutTabData }) => {
  return (
    <div>
      <h2>{aboutTabData.title}</h2>
      <p>{aboutTabData.titleDesc}</p>
      <h3>{aboutTabData.subtitle}</h3>
      <p>{aboutTabData.subtitleDesc}</p>
    </div>
  );
};

export default AboutTab;
