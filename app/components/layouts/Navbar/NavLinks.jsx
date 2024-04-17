"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ scrolled }) => {
  const pathname = usePathname();
  return (
    <div className="md:flex items-center gap-10 hidden  font-medium">
      <Link
        href="/"
        className={`${
          pathname === "/"
            ? "relative after:absolute  after:top-full after:pt-1 after:left-0 after:border-b-2 after:border-red-500 after:w-full"
            : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about"
            ? "relative after:absolute  after:top-full after:pt-1 after:left-0 after:border-b-2 after:border-red-500 after:w-full"
            : ""
        }`}
      >
        About
      </Link>
      <Link
        href="/jobs"
        className={`${
          pathname === "/jobs"
            ? "relative after:absolute  after:top-full after:pt-1 after:left-0 after:border-b-2 after:border-red-500 after:w-full"
            : ""
        }`}
      >
        Jobs
      </Link>
      <Link
        href="/blogs"
        className={`${
          pathname === "/blogs"
            ? "relative after:absolute  after:top-full after:pt-1 after:left-0 after:border-b-2 after:border-red-500 after:w-full"
            : ""
        }`}
      >
        Blogs
      </Link>

      <Link
        href="/contact"
        className={`${
          pathname === "/contact"
            ? "relative after:absolute  after:top-full after:pt-1 after:left-0 after:border-b-2 after:border-red-500 after:w-full"
            : ""
        }`}
      >
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
