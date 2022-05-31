const ExpertiseCard = ({ data }) => {
  
  return (
    <>
      {data.map(({ title, desc, imgPath, cardPathTo }) => (
        <div key={data.title} className="bg-white drop-shadow-sm rounded p-6">
          <div className="w-20">
            <img src={(imgPath).default} alt="" />
          </div>
          <h3 className="text-blue-500">{title}</h3>
          <p className="">{desc}</p>
          <a className="text-blue-500" href={cardPathTo}>Read More</a>
        </div>
      ))}
    </>
  );
};

export default ExpertiseCard;
