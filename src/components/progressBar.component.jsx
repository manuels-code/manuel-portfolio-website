import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="flex flex-col py-4">
      <div className="flex justify-between">
        <span>{props.title}</span>
        <span>{props.percentage}</span>
      </div>
      <div className="bg-gray-200 h-2 rounded-sm flex">
        <div className="h-full w-[80%] bg-blue-500" style={{width: props.percentage}}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
