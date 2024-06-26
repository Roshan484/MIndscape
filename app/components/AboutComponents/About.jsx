import Image from "next/image";
import Link from "next/link";
import React from "react";
import Design from "../DesignComponent/Design";
import AboutTeam from "./AboutTeam";
const About = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 mt-10 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <h1 className="block mb-4 text-4xl font-semibold text-primary">
                  About Us
                </h1>
                <h2 className="mb-5 text-xl font-bold text-dark  sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-5 text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="mb-8 text-base ">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <Link
                  href=""
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/images/mental.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/images/mental.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="/images/mental.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                      width={500}
                      height={500}
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <Design />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AboutTeam />
        </div>
      </section>
    </>
  );
};

export default About;
