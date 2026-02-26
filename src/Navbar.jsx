import React from "react";
import AnimatedTabs from "./AnimatedTabs";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function gotolike() {
    navigate("/liked");
  }

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-neutral-900/80 bxshadow p-2">
      <div className="  w-[72%] mx-auto flex justify-between items-center">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-3xl font-bold text-[#f11d0d] tracking-wider"
        >
          Arplix
        </h1>

        <div className="flex justify-between items-center gap-x-5">
          <AnimatedTabs />
        </div>

        {/* <i class="fa-regular fa-bookmark"></i> */}
        <div className="flex justify-between gap-5 items-center">
          <i
            onClick={gotolike}
            className="ti ti-heart-filled text-3xl text-red-600"
          ></i>
          <i className="ti ti-bookmarks-filled text-3xl  text-gray-600"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
