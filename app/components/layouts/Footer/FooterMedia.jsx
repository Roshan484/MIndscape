import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const FooterMedia = () => {
  return (
    <>
      <ul className="flex items-center space-x-3 mt-9">
        <li>
          <Link
            href="#"
            title=""
            className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
          >
            <FaXTwitter className="w-4 h-4" />
          </Link>
        </li>

        <li>
          <Link
            href="#"
            title=""
            className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
          >
            <FaFacebook className="w-4 h-4" />
          </Link>
        </li>

        <li>
          <Link
            href="#"
            title=""
            className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
          >
            <FaInstagramSquare className="w-4 h-4" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default FooterMedia;
