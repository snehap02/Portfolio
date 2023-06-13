import React from "react";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col h-[600px] mt-20">
        <div className="flex flex-col md:flex-row -mt-10 lg:pt-16">
          <h1 className="flex font-robotoMono text-[30px] md:text-5xl ml-8 sm:ml-14 md:ml-20 mt-9 md:mt-10 xl:ml-28">
            02.
          </h1>
          <div className="flex flex-col w-[350px] 520:w-[390px] sm:w-[450px] lg:w-[580px] xl:w-[690px] ml-8 sm:ml-14">
            <h1 className="text-[38px] sm:text-6xl font-georgian tracking-wider font-bold md:text-7xl relative">
              MY SKILLS
            </h1>
            <div class="absolute hidden lg:flex w-32 h-[1px] bg-black lg:ml-[430px] lg:mt-16"></div>
          </div>
        </div>
        <div className="main-content flex flex-col md:flex-row">
          <div className="flex gap-4 ml-6 -mt-4">
            <div className="relative animate-fast-pulse text-xl mt-6 before:content-[''] before:absolute before:w-32 before:h-[1px] before:bg-black before:-ml-[50px] before:rotate-90 before:top-28">
              ❶
            </div>
            {/* <h1 className="mt-7 font-montserrat font-semibold w-56 md-2:w-full">
              Languages and Frameworks I Use
            </h1> */}
          </div>
          <div className="flex flex-col">
          <h1 className="-mt-7 ml-16 font-montserrat font-semibold w-56 md-2:w-full">
              Languages and Frameworks I Use
            </h1>
          <div className="inner-content ml-10 pt-3 grid grid-cols-3">
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                src="../images/html5 (1).png"
                alt=""
                className=" w-14 border-4 border-x-zinc-700 rounded-full p-1"
              />
              <h1 className="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest">
                HTML
              </h1>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                src="/images/css3.png"
                alt=""
                className=" w-14 border-4 border-x-zinc-700 rounded-full p-1 -ml-10"
              />
              <h1 className="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest -ml-10">
                CSS
              </h1>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                src="/images/javascript.png"
                alt=""
                class=" w-14 border-4 border-x-zinc-700 rounded-full p-1 -ml-24"
              />
              <h1 class="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest -ml-24">
                JavaScript
              </h1>
            </div>
            <div class="flex flex-col gap-3 justify-center items-center mt-4">
              <img
                src="/images/tailwind-css.png"
                alt=""
                class=" w-14 border-4 border-x-zinc-700 rounded-full p-1"
              />
              <h1 class="text-center md:hidden text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest">
                Tailwind <br />
                CSS
              </h1>
              <h1 class="hidden md:flex text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest">
                Tailwind CSS
              </h1>
            </div>
            <div class="flex flex-col gap-3 justify-center items-center md-4:mt-6">
              <img
                src="/images/bootstrap.png"
                alt=""
                class=" w-14 border-4 border-x-zinc-700 rounded-full p-1 md-2:mt-0 md:-mt-6 -ml-10"
              />
              <h1 class="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest -ml-10">
                Bootstrap
              </h1>
            </div>
          </div>
          </div>
          

          <div className="flex gap-4 ml-6 -mt-4">
            <div className="relative animate-fast-pulse text-xl mt-6 before:content-[''] before:absolute before:w-32 before:h-[1px] before:bg-black before:-ml-[50px] before:rotate-90 before:top-28">
              ❷
            </div>
          </div>
          <div className="flex flex-col">
          <h1 className="-mt-6 ml-16 font-montserrat font-semibold w-56">
              Tools and Editor I Use
            </h1>
            <div className="inner-content ml-10 pt-3 grid grid-cols-3">
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                src="../images/git.png"
                alt=""
                className=" w-14 border-4 border-x-zinc-700 rounded-full p-1"
              />
              <h1 className="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest">
                Git
              </h1>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                src="/images/github.png"
                alt=""
                className=" w-14 border-4 border-x-zinc-700 rounded-full p-1 -ml-10"
              />
              <h1 className="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest -ml-10">
                Github
              </h1>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                src="/images/figma-logo.png"
                alt=""
                class=" w-14 border-4 border-x-zinc-700 rounded-full p-1 -ml-24"
              />
              <h1 class="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest -ml-24">
                Figma
              </h1>
            </div>
            <div class="flex flex-col gap-3 justify-center items-center mt-2">
              <img
                src="/images/vs-code.png"
                alt=""
                class=" w-14 border-4 border-x-zinc-700 rounded-full p-1"
              />
              {/* <h1 class="text-center md:hidden text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest">
                Tailwind <br />
                CSS
              </h1> */}
              <h1 class="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest">
                VS Code
              </h1>
            </div>
            <div class="flex flex-col gap-3 justify-center items-center mt-2">
              <img
                src="/images/responsive-design.png"
                alt=""
                class=" w-14 border-4 border-x-zinc-700 rounded-full p-1 md-2:mt-0 md:-mt-6 -ml-10"
              />
              <h1 class="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest -ml-10">
                Responsive Designs
              </h1>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Skills;
