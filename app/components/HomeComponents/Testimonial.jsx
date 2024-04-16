import React from "react";
import TestiomonialCard from "../CardComponents/TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Micheal Gough",
      image: "/images/mindscape.png",
      company: "CEO at Google",
      description:
        "Flowbite is just awesome. It contains tons of predesignedcomponents and pages starting from login screen to complexdashboard. Perfect choice for your next SaaS application.",
    },
    // {
    //   id: 2,
    //   name: "Micheal Gough",
    //   company: "CEO at Google",
    //   description:
    //     "Flowbite is just awesome. It contains tons of predesignedcomponents and pages starting from login screen to complexdashboard. Perfect choice for your next SaaS application.",
    // },
    // {
    //   id: 3,
    //   name: "Micheal Gough",
    //   company: "CEO at Google",
    //   description:
    //     "Flowbite is just awesome. It contains tons of predesignedcomponents and pages starting from login screen to complexdashboard. Perfect choice for your next SaaS application.",
    // },
    // {
    //   id: 4,
    //   name: "Micheal Gough",
    //   company: "CEO at Google",
    //   description:
    //     "Flowbite is just awesome. It contains tons of predesignedcomponents and pages starting from login screen to complexdashboard. Perfect choice for your next SaaS application.",
    // },
  ];
  return (
    <>
      <section className="bg-white ">
        <div className="px-4 py-8 mx-auto text-center lg:py-8 lg:px-6">
          {testimonials.map((item) => (
            <TestiomonialCard {...item} key={`testimonial__${item.id}`} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
