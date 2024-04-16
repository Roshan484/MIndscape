import Image from "next/image";
import React from "react";

const GetStarted = () => {
  const customStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 7,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
  return (
    <section className="sm:my-16 lg:my-24 mx-2 sm:mx-8 lg:mx-14 bg-gradient-to-b from-[PapayaWhip] from-85% to-white rounded-t-3xl">
      <div className="container  mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Expert therapists, licensed and vetted, providing trusted care for
              your mental health needs.
            </h2>
            <p className={`mt-4 text-gray-600 text-lg ${customStyle}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus in dolorem commodi voluptas quibusdam reprehenderit
              cum voluptate obcaecati unde deserunt ipsum cupiditate esse, nemo
              animi quae error illo autem sint! Labore enim corrupti sint quae
              maxime, laudantium quidem delectus adipisci dicta accusamus
            </p>
            <div className="mt-8 mb-5">
              <button className="bg-green-400 px-6 sm:px-10 py-2 sm:py-3 rounded-3xl font-medium hover:bg-green-300">
                Find Your Ideal Therapist
              </button>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <Image
              src="/images/dummy.jpeg"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
              width={800}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
