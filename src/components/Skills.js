import React from "react";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col h-[600px]">
        <div className="flex flex-col md:flex-row -mt-5 lg:pt-16">
          <h1 className="flex font-robotoMono text-[30px] md:text-5xl ml-8 sm:ml-14 md:ml-20 mt-9 md:mt-10 xl:ml-28">
            02.
          </h1>
          <div className="flex flex-col w-[350px] 520:w-[390px] sm:w-[450px] lg:w-[580px] xl:w-[690px] ml-8 sm:ml-14">
            <h1 className="text-[60px] font-georgian tracking-wider font-bold md:text-7xl relative md:mt-6">
              MY SKILLS
            </h1>
            <div class="absolute hidden lg:flex w-32 h-[1px] bg-black lg:ml-[430px] lg:mt-16"></div>
          </div>
        </div>
        <div className="main-content flex flex-col md:flex-row">
        <div>
                    <div class="grid grid-cols-2 ml-7 gap-4 -mt-6">
                        <div class="relative animate-fast-pulse text-xl mt-6 before:content-[''] before:absolute before:w-48 before:h-[1px] before:bg-black before:-ml-[82px] before:rotate-90 before:top-36">❶</div>
                        <h1 class="mt-7 font-montserrat font-semibold ml-10">Languages and Frameworks I Use</h1>
                    </div>
                    <div class="relative -mt-2 h-52 grid grid-cols-3 py-5 px-20 md:mt-2 -ml-10">
                        <div class="flex flex-col gap-3 justify-center items-center">
                            <img src="/images/html5 (1).png" alt="" class=" w-16 border-4 border-x-zinc-700 rounded-full p-2"/>
                            <h1 class="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest text-white">HTML</h1>
                        </div>
                        <div class="flex flex-col gap-3 justify-center items-center">
                            <img src="/images/css3.png" alt="" class=" w-16 border-4 border-x-zinc-700 rounded-full p-2"/>
                            <h1 class="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest text-white">CSS</h1>
                        </div>
                        <div class="flex flex-col gap-3 justify-center items-center">
                            <img src="/images/javascript.png" alt="" class=" w-16 border-4 border-x-zinc-700 rounded-full p-2"/>
                            <h1 class="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest text-white">JavaScript</h1>
                        </div>
                        <div class="flex flex-col gap-3 justify-center items-center">
                            <img src="/images/tailwind-css.png" alt="" class=" w-16 border-4 border-x-zinc-700 rounded-full p-2"/>
                            <h1 class="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest text-white">Tailwind CSS</h1>
                        </div>
                        <div class="flex flex-col gap-3 justify-center items-center md-4:mt-6">
                            <img src="/images/bootstrap.png" alt="" class=" w-16 border-4 border-x-zinc-700 rounded-full p-3 -mt-4 md-2:mt-0 md:-mt-6"/>
                            <h1 class="text-center text-sm font-raleway font-semibold text-[bg-[#171717]] tracking-widest text-white">Bootstrap</h1>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
