const ExperienceTab = ({data}) => {

  return (
    <div>
      {data.map((data) => (
        <div>
          <h3 className="font-bold text-[20px] pb-1">
            {data.title}
          </h3>
          <p className="pb-6">
            <span className="text-blue-500 font-bold text-xs">
              {data.startingDate} - {data.endingDate}
            </span>{" "}
            at 
            <span> {data.company}</span>
          </p>
          <p className="text-[#999] pb-6">{data.aboutThisJob}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTab;
