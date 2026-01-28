import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div className="font-coke flex items-center justify-center gap-4">

      {/* PROJECT BUTTON */}
      <Link
        to="/project"
        className="text-[5vw] border-[5px] border-white rounded-full px-10 pt-1 pb-0 uppercase
                   text-white hover:bg-white hover:text-black hover:border-black 
                   transition-all duration-300"
      >
        Project
      </Link>

      {/* AGENCE BUTTON */}
      <Link
        to="/agence"
        className="text-[5vw] border-[5px] border-white rounded-full px-10 pt-1 pb-0 uppercase
                   text-white hover:bg-white hover:text-black hover:border-black
                   transition-all duration-300"
      >
        Agence
      </Link>

    </div>
  );
};

export default HomeBottom;
