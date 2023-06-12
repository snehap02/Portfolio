import React from 'react'

const About = () => {
  return (
    <>
      <div>
      <div className='flex flex-col md:flex-row pt-10 lg:pt-16'>
        <h1 className='flex font-robotoMono text-3xl md:text-5xl ml-8 sm:ml-14 md:ml-20 mt-9 md:mt-10 xl:ml-28'>
          01.
        </h1>
        <div className='flex flex-col w-[350px] 520:w-[390px] sm:w-[450px] lg:w-[580px] xl:w-[690px] ml-8 sm:ml-14'>
        <div>
        <h1 className='text-6xl pt-7 font-georgian tracking-wider font-bold md:text-7xl relative'>README</h1>
        <div class="absolute hidden lg:flex w-32 h-[1px] bg-black -mt-5 lg:ml-[340px] lg:-mt-8 xl:-mt-7"></div>
        </div>
          <p className='pt-8 font-poppins text-sm 520:text-base tracking-wider lg:text-xl xl:pt-16'><span className='font-medium'>&lt; Hello World &gt;, </span> I'm Sneha Purkayastha, a Front-end Developer. I can turn your beautiful ideas into reality. My expertise is in the field of responsive designs and I love to engage myself with tailwind css. </p>
          <span className='pt-5 font-poppins text-sm 520:text-base tracking-wider lg:text-xl'>In addition to my attachment with making beautiful websites, I try to write some useful blogs.</span>
        </div>
      </div>
      </div>
    </>
  )
}

export default About