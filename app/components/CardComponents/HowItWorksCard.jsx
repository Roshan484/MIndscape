import React from "react";

const HowItWorksCard = ({ number, titlle, description }) => {
  return (
    <div className="w-full p-1.5">
      <div className="flex flex-wrap -m-6">
        <div className="w-auto p-6">
          <div className="relative mb-3 w-10 h-10 text-lg text-white font-bold bg-indigo-600 rounded-full">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {number}
            </span>
          </div>
        </div>
        <div className="flex-1 p-6">
          <div className="md:max-w-xs">
            <h3 className="mb-3 text-2xl font-semibold leading-snug">
              {titlle}
            </h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
