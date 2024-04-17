"use client";
import React, { useState } from "react";

function Faqcomp({ title, content, first }) {
  const [open, setOpen] = useState(first);
  return (
    <li
      className="relative flex flex-col overflow-hidden rounded-md border border-gray-100 text-left  shadow-md "
      onClick={() => setOpen(!open)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute right-0 top-4 ml-auto mr-5 h-4  transition duration-500 ${
          open && "rotate-180"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
        <h3 className="text-sm font-medium lg:text-base">{title}</h3>
      </div>
      <div
        className={`transition-all duration-500 ${
          open ? "h-fit max-h-40" : "h-0 max-h-0"
        }`}
      >
        <div className="p-5">
          <p className="text-sm">{content}</p>
        </div>
      </div>
    </li>
  );
}

export default Faqcomp;
