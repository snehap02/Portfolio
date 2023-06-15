import React from "react";

const Contact = () => {
  return (
    <>
      <div className="h-[680px]">
        <div className="flex flex-col md:flex-row pt-10 sm:pt-16 lg:pt-32 xl:pt-24">
          <h1 className="flex font-robotoMono text-3xl md:text-5xl ml-8 sm:ml-14 md:ml-20 pt-10 md:pt-7 xl:ml-28">
            03.
          </h1>
          <div className="flex flex-col w-[280px] md-2:w-[380px] 520:w-[390px] sm:w-[450px] lg:w-[580px] xl:w-[690px] ml-8 sm:ml-14">
            <div>
              <h1 className="text-[30px] sm:text-6xl pt-3 font-georgian tracking-wider font-bold md:text-7xl relative">
                Let's Get In Touch
              </h1>
              <div class="absolute hidden lg:flex w-32 h-[1px] bg-black -mt-5 lg:ml-[340px] lg:-mt-8 xl:-mt-7"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center pt-6">
              <div className="text-white bg-black flex flex-col justify-center items-center px-20 py-2">
                  <h1>Conatact Me</h1>
                  <div>
                    
                  </div>
              </div>
              <div className="border border-black mx-2 -mt-2 bg-white">
                <form>cscdc</form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
