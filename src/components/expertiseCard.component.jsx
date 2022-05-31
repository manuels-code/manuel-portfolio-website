const ExpertiseCard = ({ data }) => {
  
  return (
    <>
      {data.map((data) => (
        <div key={data.title} className="bg-white drop-shadow-sm rounded p-6">
          <div className="w-20">
            <img src={require(`../assets/svg/design-icon.svg`).default} alt="" />
          </div>
          <h3 className="text-blue-500">{data.title}</h3>
          <p className="">{data.desc}</p>
          <a className="text-blue-500" href={data.cardPathTo}>Read More</a>
        </div>
      ))}
    </>
  );
};

export default ExpertiseCard;
