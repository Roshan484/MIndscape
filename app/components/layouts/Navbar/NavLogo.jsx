import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavLogo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/images/mindscape.svg"
          alt="logo"
          width={60}
          height={60}
          style={{ width: "60px", height: "60px" }}
        />
      </Link>
    </div>
  );
};

export default NavLogo;
