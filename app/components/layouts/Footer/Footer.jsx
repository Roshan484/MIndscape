import React from "react";
import FooterLogo from "./FooterLogo";
import FooterMedia from "./FooterMedia";
import NewsLetter from "./NewsLetter";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <FooterLogo />

            <FooterMedia />
          </div>

          <FooterLinks />

          <NewsLetter />
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2021, All Rights Reserved by Postcraft
        </p>
      </div>
    </section>
  );
};

export default Footer;
