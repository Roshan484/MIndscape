import React from "react";
import CountUp from "react-countup";
const CounterCard = ({ icon, start, end, operator, title }) => {
  return (
    <div className="border-2 border-gray-700 border-dotted py-10 px-5 rounded-md">
      <span className="flex justify-center items-center mb-5">{icon}</span>
      <div className=" items-center justify-center flex gap-1">
        <CountUp
          className="text-5xl font-semibold"
          start={start}
          end={end}
          duration={2.5}
          delay={0}
        />
        <span className="text-3xl font-semibold">{operator}</span>
      </div>
      <p className="pt-5 font-medium text-xl text-wrap">{title}</p>
    </div>
  );
};

export default CounterCard;
