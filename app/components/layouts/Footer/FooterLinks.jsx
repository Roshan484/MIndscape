import React from "react";
import Link from "next/link";
const FooterLinks = () => {
  return (
    <>
      <div>
        <h3 className="text-sm font-semibold tracking-widest  uppercase">
          Company
        </h3>

        <ul className="mt-6 space-y-4">
          <li>
            <Link
              href="#"
              title=""
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="#"
              title=""
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Features
            </Link>
          </li>

          <li>
            <Link
              href="#"
              title=""
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Works
            </Link>
          </li>

          <li>
            <Link
              href="#"
              title=""
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Career
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold tracking-widest uppercase">
          Help
        </h3>

        <ul className="mt-6 space-y-4">
          <li>
            <Link
              href="#"
              title=""
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Customer Support
            </Link>
          </li>

          <li>
            <Link
              href="#"
              title=""
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Delivery Details
            </Link>
          </li>

          <li>
            <Link
              href="#"
              title=""
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Terms & Conditions
            </Link>
          </li>

          <li>
            <Link
              href="#"
              title=""
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
