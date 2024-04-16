import React from "react";

const NavlLogs = () => {
  return (
    <div className="lg:flex hidden items-center gap-5">
      <button
        className={`p-2 border w-20 rounded-full text-black bg-green-400`}
      >
        Log In
      </button>
      <button className={`p-2 border  rounded-full text-black bg-green-400 `}>
        Get Started
      </button>
    </div>
  );
};

export default NavlLogs;
