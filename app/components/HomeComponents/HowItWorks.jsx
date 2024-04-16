import React from "react";
import HowItWorksCard from "../CardComponents/HowItWorksCard";
import Image from "next/image";
const HowItWorks = () => {
  const WorkingMechanism = [
    {
      id: 1,
      number: "1",
      titlle: "Shop",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis, praesentium!",
    },
    {
      id: 2,
      number: "2",
      titlle: "Shop",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis, praesentium!",
    },
    {
      id: 3,
      number: "3",
      titlle: "Shop",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis, praesentium!",
    },
    {
      id: 4,
      number: "4",
      titlle: "Shop",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis, praesentium!",
    },
  ];
  return (
    <section className="relativev h-full mt-10">
      <Image
        src="https://assets-global.website-files.com/5f6b627361bad8cad0fc5c99/64c7d5965f31590cf1fe75a5_green-wave.svg"
        alt=""
        width={1920}
        height={1080}
        className="w-full -mb-5"
      />

      <div className="py-32 bg-[#E1F0EE] pt-5  overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center -m-8">
            <div className="w-full  md:w-1/2 px-12">
              <h2 className="mb-20 text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-px-n leading-tight">
                How Flaro helps you to launch your business in no time and grow.
              </h2>
              <div className="flex flex-wrap -m-1.5">
                {WorkingMechanism.map((item) => (
                  <HowItWorksCard {...item} key={`works___${item.id}`} />
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 ">
              <Image
                className="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000"
                src="/images/iphone.png"
                alt=""
                width={500}
                height={500}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
