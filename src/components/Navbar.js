import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full z-50 h-20">
        <div>
          {/* desktop */}
            <div className="lg:flex justify-between h-20 lg:px-14">
                <div>
                <a href="/"><img src="../images/logo.png" className="w-40 -mt-8 -ml-5"/></a>
                </div>
                <div className="lg:flex hidden justify-center leading-[80px]">
                    <ul className="flex gap-20 cursor-pointer font-lato text-lg tracking-wider px-10 leading-[60px]">
                        <li className="hover:scale-105 transition duration-500"><a href="/about">About</a></li>
                        <li className="hover:scale-105 transition duration-500"><a href="/skills">Skills</a></li>
                        <li className="hover:scale-105 transition duration-500"><a href="/projects">Projects</a></li>
                        <li className="hover:scale-105 transition duration-500"><a href="/contact">Contact</a></li>
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
