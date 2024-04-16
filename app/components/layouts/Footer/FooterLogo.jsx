import React from "react";
import Image from "next/image";
const FooterLogo = () => {
  return (
    <>
      <div className="">
        <Image
          src="/images/mindscape.png"
          alt="logo"
          width={60}
          height={60}
          style={{ borderRadius: "50%", width: "auto", height: "auto" }}
        />
      </div>

      <h1 className="text-base leading-relaxed text-gray-600 mt-7">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </h1>
    </>
  );
};

export default FooterLogo;
