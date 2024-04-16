"use client";
import React from "react";
import CounterCard from "../../CardComponents/CounterCard";

import { GiSatelliteCommunication } from "react-icons/gi";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { IoFitness } from "react-icons/io5";
import { MdOnlinePrediction } from "react-icons/md";
const CounterComponent = () => {
  const counterDetails = [
    {
      id: 1,
      title: "Messages,Video Sessions",
      icon: <GiSatelliteCommunication size={60} />,
      start: 0,
      end: 500,
      operator: "+",
    },
    {
      id: 2,
      title: "Credentialled therapists ready to help!",
      icon: <FaHandsHelping size={60} />,
      start: 0,
      end: 500,
      operator: "+",
    },
    {
      id: 3,
      title: "People got help",
      icon: <IoFitness size={60} />,
      start: 0,
      end: 500,
      operator: "%",
    },
    {
      id: 4,
      title: "Active Members",
      icon: <MdOnlinePrediction size={60} />,
      start: 0,
      end: 500,
      operator: "+",
    },
  ];
  const [counter, setCounter] = useState(false);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="my-5 ">
        <ScrollTrigger
          onEnter={() => setCounter(true)}
          onExit={() => setCounter(false)}
        >
          <div className="text-center">
            <h1 className="font-medium md:text-5xl text-3xl ">
              “Empower Your Mind, Embrace Your Well-being!”{" "}
            </h1>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-center gap-10  p-16">
            {counter && (
              <>
                {counterDetails.map((item) => (
                  <CounterCard key={`counter__${item.id}`} {...item} />
                ))}
              </>
            )}
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default CounterComponent;
