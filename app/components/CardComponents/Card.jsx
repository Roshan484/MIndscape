import Link from "next/link";
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <article className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
      <img src={image} className="h-56 w-full object-cover" alt="" />
      <div className="flex-auto px-6 py-5">
        <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">{title}</h3>
        <p className="mb-4 text-base font-light">{description}</p>
        <Link
          href=""
          className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
};

export default Card;
