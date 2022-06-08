const ExperienceTab = ({ experienceList }) => {
  return (
    <div>
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
