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
                {/* <img
                  src="../images/mainlogo.png"
                  className="sm:w-40 w-28 -mt-8 -ml-5"
                /> */}
                <div className="eye">
                  <div className="eyelid">
                    <span></span>
                  </div>
                  <div className="pupil"></div>
                </div>
              </a>
              <div onClick={()=>setOpen(!open)} className='pt-5 lg:hidden cursor-pointer mr-10'>
                            <ion-icon name={`${open ? 'close' : 'menu-outline'}`} size="large"></ion-icon>
                        </div>
            </div>
            <div className="lg:flex hidden justify-center leading-[80px]">
              <ul className="flex gap-20 cursor-pointer font-lato uppercase font-bold tracking-wider px-10 leading-[60px]">
                <li className="hover:scale-105 transition duration-500">
                  <a href="/about">About</a>
                </li>
                <li className="hover:scale-105 transition duration-500">
                  <a href="/skills">Skills</a>
                </li>
                <li className="hover:scale-105 transition duration-500">
                  <a href="/projects">Projects</a>
                </li>
                <li className="hover:scale-105 transition duration-500">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* mobile */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
