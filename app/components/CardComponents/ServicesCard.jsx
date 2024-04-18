import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const ServicesCard = ({
  name,
  description,
  notHoveredImage,
  hoverdImage,
  style,
  hovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`group relative w-[350px]  h-80 rounded-3xl hover:border-[2px] hover:border-white bg-cover ${style} `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        backgroundImage: `url(${hovered ? hoverdImage : notHoveredImage})`,
      }}
    >
      <p className="absolute top-10 left-7 text-3xl text-white">{name}</p>
      <p className="text-[18px] absolute mt-7 top-14 left-7 gap-3 text-white flex items-center">
        {description}
        <span className="border border-white rounded-full p-[2px] group-hover:bg-white group-hover:text-black ">
          <FaArrowRight size={15} className="group-hover:text-black" />
        </span>
      </p>
    </div>
  );
};

export default ServicesCard;
