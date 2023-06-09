import React from "react";

const Home = () => {
  return (
    <>
      <div className="h-[700px] xl:h-[740px] bg-[#FAF0E4]">
        <div className="flex flex-col 520:flex-row justify-evenly pt-52 900:pt-40 xl:-mt-10 pl-4 xl:pl-0">
          <h1 className="xl:text-5xl text-3xl 600:text-5xl  font-poppins tracking-wider text-neutral-600">
            Hello,
          </h1>
          <h1 className="xl:text-5xl text-3xl  600:text-5xl text-neutral-600">
            I'm{" "}
            <span className="text-neutral-800 font-poppins font-medium">
              SNEHA
            </span>
          </h1>
        </div>
        <div className="flex 520:justify-center items-center pt-5 900:pt-10 pl-4 xl:pl-0">
          <div className="bg-neutral-600 h-[1px] w-64 520:w-[410px] lg:w-[530px] xl:w-[1000px] items-center"></div>
        </div>
        <div>
          <h1 className="xl:text-[200px] 600:text-7xl 820:text-[100px] lg:text-[140px] xl:leading-[180px] text-5xl 520:text-6xl font-robotoMono 520:text-center tracking-wider pt-5 pl-4 xl:pl-0">
            FRONT-END <br />
            DEVELOPER
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;


// style={{
//   color: '#000000',
//   backgroundImage: '-webkit-radial-gradient(circle, #000000 8%, #9e662e 60%, #000000 79%)',
//   backgroundClip: 'text',
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',


// }}