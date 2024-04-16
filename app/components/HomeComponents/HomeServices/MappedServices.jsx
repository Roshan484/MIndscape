"use client";
import React, { useState } from "react";
import ServicesCard from "../../CardComponents/ServicesCard";

const MappedServices = () => {
  const [hoveredIndividual, setHoveredIndividual] = useState(false);
  const [hoveredCouple, setHoveredCouple] = useState(false);
  const [hoveredTeen, setHoveredTeen] = useState(false);

  const handleIndividualMouseEnter = () => {
    setHoveredIndividual(true);
  };

  const handleIndividualMouseLeave = () => {
    setHoveredIndividual(false);
  };

  const handleCoupleMouseEnter = () => {
    setHoveredCouple(true);
  };

  const handleCoupleMouseLeave = () => {
    setHoveredCouple(false);
  };

  const handleTeenMouseEnter = () => {
    setHoveredTeen(true);
  };

  const handleTeenMouseLeave = () => {
    setHoveredTeen(false);
  };

  const categories = [
    {
      id: 1,
      name: "Individual",
      description: "For Myself",
      hovered: hoveredIndividual,
      style: "bg-green-500",
      hoverdImage: "/images/Individual.png",
      notHoveredImage: "/images/IndividualNotHovered.png",
      onMouseEnter: handleIndividualMouseEnter,
      onMouseLeave: handleIndividualMouseLeave,
    },
    {
      id: 2,
      name: "Couples",
      description: "For me and my partner",
      hovered: hoveredCouple,
      style: "bg-slate-500",
      hoverdImage: "/images/hoveredCouples.png",
      notHoveredImage: "/images/couplesNotHovered.png",
      onMouseEnter: handleCoupleMouseEnter,
      onMouseLeave: handleCoupleMouseLeave,
    },
    {
      id: 3,
      name: "Teen",
      description: "For my child",
      hovered: hoveredTeen,
      style: "bg-orange-500",
      hoverdImage: "/images/hoveredTeen.png",
      notHoveredImage: "/images/notHoveredTeen.png",
      onMouseEnter: handleTeenMouseEnter,
      onMouseLeave: handleTeenMouseLeave,
    },
  ];

  return (
    <div className="relative bg-[url('/images/bg-texture.png')] bg-primary  h-fit  flex flex-col items-center justify-center">
      <div className="absolute bottom-0 left-0 right-0 bg-[url('/images/divider.png')] h-[4.5rem]"></div>
      <div className=" mx-20 py-44 ">
        <div className="text-white font-medium">
          <h1 className="text-4xl text-center">
            “Embrace Your Journey, Every Mind Matters”
          </h1>
          <p className="text-lg text-center pt-5">
            What type of therapy are you looking for?
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-10">
          {categories.map((category) => (
            <ServicesCard key={`services__${category.id}`} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MappedServices;
