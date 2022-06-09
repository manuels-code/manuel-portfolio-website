const ExperienceTab = ({ experienceList }) => {
  return (
    <div>
      <h2>Experience</h2>
      <p>In my time as a developer, I’ve work both on premise and remote for colleges and companies to create web solutions for their businesses. I craft responsive, accessible sites built using HTML, CSS, SASS, and JavaScript  that are fast, friendly, and easy to use. I am growing my full-stack developer skillset with React, Next.js Vue.js, Nuxt.js, Express, Node.js and MondoDB in addition to my extensive front-end developer experience."</p>
      {experienceList.map(({ title, period, aboutThisJob, company }) => (
        <div key={title}>
          <h3 className="font-bold text-[20px] pb-1">{title}</h3>
          <p className="pb-1">
            <span className="block"> {company}</span>
            <span className="text-blue-500 font-bold text-xs">{period}</span>
          </p>
          <p className="text-[#999] pb-6">{aboutThisJob}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTab;
