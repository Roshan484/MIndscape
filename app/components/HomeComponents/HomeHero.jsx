import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

const HomeHero = () => {
  return (
    <section className="sm:my-16 lg:my-10 mx-2 sm:mx-8 lg:mx-14 bg-gradient-to-b from-[PapayaWhip] from-85% to-white rounded-t-3xl">
      <div className="container  mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-items-end justify-items-center gap-4">
          <div className="">
            <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Shaping Minds, Transforming Lives: Your Mental Health Matters!
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              &quot;Single Solution. Trusted Ally.&quot;
            </p>
            <div className="mt-8 flex gap-5 items-center mb-5">
              <Link
                href="/about"
                className="flex items-center justify-center bg-green-500 w-32 rounded-full p-3 font-medium"
              >
                About Us
                <MdChevronRight size={25} />
              </Link>
              <Link
                href="/contact-us"
                className="flex items-center justify-center bg-green-500 w-32 rounded-full p-3 font-medium"
              >
                Contact
                <MdChevronRight size={25} />
              </Link>
            </div>
          </div>
          <div className=" md:mt-0 ">
            <Image
              src="/images/mental.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
