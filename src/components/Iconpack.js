import React from "react";

const Iconpack = () => {
  return (
    <>
      <div className="flex justify-end fixed right-0 mr-2 h-40 -mt-8 900:-mt-0">
      <div className="bg-black w-28 h-[1px] rotate-90 sm:-mr-[72px] -mr-[70px] mt-20"></div>
        <div className="flex flex-col gap-4 mt-40 sm:-mr-[77px] -mr-[75px]">
          <div>
            <a href="https://twitter.com/SnehaPurkayast8" target="_blank">
              <img src="../images/twitter.png" className="w-7 hover:scale-125 transition duration-500" />
            </a>
          </div>
          <div>
            <a href="https://github.com/snehap02" target="_blank">
              <img src="../images/github.png" className="w-10 -ml-1 hover:scale-125 transition duration-500" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/sneha-purkayastha-3b3aa1160/" target="_blank">
              <img src="../images/linkedin.png" className="w-7 hover:scale-125 transition duration-500" />
            </a>
          </div>
          <div>
            <a href="https://hashnode.com/@snehapurkayastha" target="_blank">
              <img src="../images/hashnode.png" className="w-6 ml-1 mt-1 hover:scale-125 transition duration-500" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/sneha_purkayastha/" target="_blank">
              <img src="../images/instagram.png" className="w-6 ml-1 mt-2 hover:scale-125 transition duration-500" />
            </a>
          </div>
        </div>
        <div className="bg-black w-28 h-[1px] mt-[450px] rotate-90 -mr-10 sm:-mr-0"></div>
      </div>
    </>
  );
};

export default Iconpack;
