import React from "react";
import TeamCard from "../CardComponents/TeamCard";

const AboutTeam = () => {
  const teams = [
    {
      id: 1,
      name: "Coriss Ambady",
      profession: "Web Developer",
      image: "/images/mindscape.png",
    },
    {
      id: 2,
      name: "Dries Vincent",
      profession: "Graphic Designer",
      image: "/images/mindscape.png",
    },
    {
      id: 3,
      name: "Jese Leos",
      profession: "SEO Analyst",
      image: "/images/mindscape.png",
    },
    {
      id: 4,
      name: "Erik Kross",
      profession: "Web Developer",
      image: "/images/mindscape.png",
    },
    {
      id: 5,
      name: "Erik Kross",
      profession: "Web Developer",
      image: "/images/mindscape.png",
    },
  ];
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-1 flex flex-wrap justify-center">
          {teams.map((team) => (
            <TeamCard key={team.id} {...team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
