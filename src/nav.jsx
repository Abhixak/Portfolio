import { NavLink } from "react-router";
import React from "react";
const nav = () => {
  return (
    <>
      <nav className="w-screen h-[10vw] text-[#474554] relative z-10 top-2 flex items-center justify-center">
        <ul className="w-[60vw] h-[2em] bg-[#efefef] font-bold rounded-[20px] [box-shadow:0px_2px_2px_#474554] flex items-center justify-center gap-[2em] text-[.8em] hover:cursor-pointer">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" end>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" end>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default nav;
