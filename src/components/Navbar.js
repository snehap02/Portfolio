import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="w-full z-50 h-20">
        <div>
          {/* desktop */}
          <div className="lg:flex justify-between h-20 lg:px-14">
            <div className="flex justify-between">
              <a href="/">
                <div className="eye">
                  <div className="eyelid">
                    <span></span>
                  </div>
                  <div className="pupil"></div>
                </div>
              </a>
              <div
                onClick={() => setOpen(!open)}
                className="pt-5 lg:hidden cursor-pointer mr-4 sm:mr-12"
              >
                <ion-icon
                  name={`${open ? "close" : "menu-outline"}`}
                  size="large"
                ></ion-icon>
              </div>
            </div>
            <div className="lg:flex hidden justify-center leading-[80px]">
              <ul className="flex gap-20 cursor-pointer font-lato uppercase font-bold tracking-wider px-10 leading-[60px]">
                <li className="hover:scale-105 transition duration-500">
                  <a href="/about"><span className="font-robotoMono font-light">01. </span>About</a>
                </li>
                <li className="hover:scale-105 transition duration-500">
                  <a href="/skills"><span className="font-robotoMono font-light">02. </span>Skills</a>
                </li>
                <li className="hover:scale-105 transition duration-500">
                  <a href="/projects"><span className="font-robotoMono font-light">03. </span>Projects</a>
                </li>
                <li className="hover:scale-105 transition duration-500">
                  <a href="/contact"><span className="font-robotoMono font-light">04. </span>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* mobile */}
          <div
            className={`lg:hidden fixed bg-neutral-800 w-full h-screen flex flex-col justify-center items-center duration-700 z-50 ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            <ul className="uppercase font-lato -mt-24 px-7 flex flex-col text-xl md:text-3xl gap-14 cursor-pointer fixed text-white text-center md:tracking-widest">
              <li className="hover:scale-105 transition duration-500">
                <a href="/about"><span className="font-robotoMono font-light">01. </span>About</a>
              </li>
              <li className="hover:scale-105 transition duration-500">
                <a href="/skills"><span className="font-robotoMono font-light">02. </span>Skills</a>
              </li>
              <li className="hover:scale-105 transition duration-500">
                <a href="/projects"><span className="font-robotoMono font-light">03. </span>Projects</a>
              </li>
              <li className="hover:scale-105 transition duration-500">
                <a href="/contact"><span className="font-robotoMono font-light">04. </span>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
