import React from "react";

const Iconpack = () => {
  return (
    <>
      <div className="flex justify-end fixed right-0 mr-2 h-40">
      <div className="bg-black w-28 h-[1px] rotate-90 sm:-mr-[72px] mt-20"></div>
        <div className="flex flex-col gap-4 mt-40 sm:-mr-[77px]">
          <div>
            <a href="">
              <img src="../images/twitter.png" className="w-7" />
            </a>
          </div>
          <div>
            <a href="">
              <img src="../images/github.png" className="w-10 -ml-1" />
            </a>
          </div>
          <div>
            <a href="">
              <img src="../images/linkedin.png" className="w-7" />
            </a>
          </div>
          <div>
            <a href="">
              <img src="../images/hashnode.png" className="w-6 ml-1 mt-1" />
            </a>
          </div>
          <div>
            <a href="">
              <img src="../images/instagram.png" className="w-6 ml-1 mt-2" />
            </a>
          </div>
          
        </div>
        <div className="bg-black w-28 h-[1px] mt-[450px] rotate-90 -mr-10 sm:-mr-0"></div>
      </div>
    </>
  );
};

export default Iconpack;
