import React from "react";

const PortfolioCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map(({ title, type, Technologies, imgPath, linkPathUrl }) => {
        return (
          <a href={linkPathUrl} key={title} className="h-[300px] relative">
            <img className="h-full w-full" src={imgPath} alt="" />
            <div className="opacity-0 hover:opacity-100 flex flex-col justify-center absolute left-0 top-0 w-full h-full text-center text-white bg-blue-500/95 transition ease-out duration-[.5s]">
              <h4>{title}</h4>
              <h5 className="text-white/80">{type}</h5>
              <p className="text-white">{Technologies}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default PortfolioCard;
