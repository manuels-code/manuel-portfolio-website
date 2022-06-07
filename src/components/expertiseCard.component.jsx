const ExpertiseCard = ({ expertiseList }) => {
  
  return (
    <>
      {expertiseList.map(({ title, desc, imgPath }) => (
        <div key={title} className="bg-white drop-shadow-sm rounded p-6">
          <div className="w-20">
            <img src={(imgPath).default} alt="" />
          </div>
          <h3 className="text-blue-500">{title}</h3>
          <p className="">{desc}</p>
        </div>
      ))}
    </>
  );
};

export default ExpertiseCard;
