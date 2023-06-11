import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <>
      <div className="z-50 w-screen top-0 h-screen bg-neutral-600 opacity-95 absolute flex justify-center items-center">
        <div className="bg-white px-10 py-3 flex flex-col">
          <div className="cursor-pointer flex justify-end">
            <ion-icon
              name="close-outline"
              size="large"
              onClick={() => closeModal(false)}
            ></ion-icon>
          </div>
          <div className="flex flex-col justify-center items-center xl:hidden">
            <img src="../images/blog1.png" className="w-16" />
            <h1 className="text-xl md:text-3xl font-inter tracking-wider pt-4 uppercase font-bold">
              Welcome to my Blog
            </h1>
            <a
              href="https://snehapurkayastha.hashnode.dev/"
              target="_blank"
              className="mt-7 mb-8 bg-black text-white font-poppins tracking-wider px-8 py-4 cursor-pointer"
            >
              Find Out More
            </a>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-inter tracking-widest pt-2 uppercase font-bold xl:flex hidden">
              Welcome to my Blog
            </h1>
          </div>
          <div className="main-content xl:grid xl:grid-cols-2 mt-6 hidden gap-2">
            {/* 1st */}
            <div class="bg-black bg-opacity-40 p-1 flex w-[560px] h-72">
              <div class="flex bg-black px-3 pb-6 w-full gap-9">
                <div class="flex flex-col">
                  <div class="img-part bg-white flex flex-col justify-center items-center px-4 mx-2 my-3 hover:scale-105 transition duration-500 ease-in-out w-52">
                    <img
                      src="/images/firstblog.png"
                      alt=""
                      class="hover:scale-75 transition ease-in-out duration-700"
                    />
                    <span class="font-raleway font-bold text-lg tracking-wider">
                      {" "}
                      JS Arrays
                    </span>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href="https://snehapurkayastha.hashnode.dev/javascript-arrays"
                      target="_blank"
                      class="bg-black ring-2 ring-yellow rounded-lg text-white text-sm font-poppins px-2 py-2 hover:scale-105 transition duration-500 ease-in-out"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
                <div class="text-white overflow-y-scroll scrollbar-none font-raleway tracking-wider py-5 w-52">
                  <div class="flex justify-center items-center gap-2">
                    <h1 class="text-3xl -ml-8">➊</h1>
                    <span>What is an Array?</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl -ml-8">➋</h1>
                    <span>Creating an Array</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl -ml-4">➌</h1>
                    <span>Accessing an Array</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl -ml-[16px]">➍</h1>
                    <span>Modifying an Array</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl ml-[3px]">➎</h1>
                    <span class="">Some of the basic array methods</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl ml-1">➏</h1>
                    <span class="">
                      Reference types and Equality testing of Arrays
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div class="bg-black bg-opacity-40 p-1 flex w-[560px] h-72">
              <div class="flex bg-black px-3 pb-6 w-full gap-9">
                <div class="flex flex-col">
                  <div class="img-part bg-white flex flex-col justify-center items-center px-4 mx-2 my-3 hover:scale-105 transition duration-500 ease-in-out w-52">
                    <img
                      src="/images/secondblog.png"
                      alt=""
                      class="hover:scale-75 transition ease-in-out duration-700"
                    />
                    <span class="font-raleway font-bold text-sm text-center tracking-wider">
                      Getting started with Tailwind CSS
                    </span>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href="https://snehapurkayastha.hashnode.dev/everything-you-need-to-know-from-installing-tailwindcss-to-deploying-a-tailwind-website-to-production"
                      target="_blank"
                      class="bg-black ring-2 ring-yellow rounded-lg text-white text-sm font-poppins px-2 py-2 hover:scale-105 transition duration-500 ease-in-out"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
                <div class="text-white overflow-y-scroll scrollbar-none font-raleway tracking-wider py-5 w-52">
                  <div class="flex justify-center items-center gap-2">
                    <h1 class="text-3xl -ml-5">➊</h1>
                    <span>Why TailwindCSS ?</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl">➋</h1>
                    <span>Easiest way to install Tailwindcss</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl">➌</h1>
                    <span>Deploying your tailwind website to production</span>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div class="bg-black bg-opacity-40 p-1 flex w-[560px] h-72">
              <div class="flex bg-black px-3 pb-6 w-full gap-9">
                <div class="flex flex-col">
                  <div class="img-part bg-white flex flex-col justify-center items-center px-4 mx-2 my-3 hover:scale-105 transition duration-500 ease-in-out w-52">
                    <img
                      src="/images/thirdblog.png"
                      alt=""
                      class="hover:scale-75 transition ease-in-out duration-700"
                    />
                    <span class="font-raleway font-bold text-sm text-center tracking-wider">
                      Top 10 VS Code extension for Web Devs
                    </span>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href="https://snehapurkayastha.hashnode.dev/10-amazing-vs-code-extensions-for-web-developers"
                      target="_blank"
                      class="bg-black ring-2 ring-yellow rounded-lg text-white text-sm font-poppins px-2 py-2 hover:scale-105 transition duration-500 ease-in-out"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
                <div class="text-white overflow-y-scroll scrollbar-none font-raleway tracking-wider py-5 w-52">
                  <div class="flex justify-center items-center gap-2">
                    <h1 class="text-3xl -ml-8">➊</h1>
                    <span>Auto Rename Tag</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl -ml-24">➋</h1>
                    <span>Quokka.js</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl -ml-[83px]">➌</h1>
                    <span>Bookmarks</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl -ml-[88px]">➍</h1>
                    <span>CodeSnap</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl -ml-[105px]">➎</h1>
                    <span class="">colorize</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl -ml-[59px]">➏</h1>
                    <span class="">CSS Snippets</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl -ml-[45px]">➐</h1>
                    <span class="">indent-rainbow</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl -ml-[79px]">➑</h1>
                    <span class="">Live server</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl ml-1">➒</h1>
                    <span class="">Tailwind CSS IntelliSense</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl -ml-10">➓</h1>
                    <span class="">Thunder Client</span>
                  </div>
                </div>
              </div>
            </div>
            {/* 4th */}
            <div class="bg-black bg-opacity-40 p-1 flex w-[560px] h-72">
              <div class="flex bg-black px-3 pb-6 w-full gap-9">
                <div class="flex flex-col">
                  <div class="img-part bg-white flex flex-col justify-center items-center px-4 mx-2 my-3 hover:scale-105 transition duration-500 ease-in-out w-52">
                    <img
                      src="/images/fourthblog.png"
                      alt=""
                      class="hover:scale-75 transition ease-in-out duration-700"
                    />
                    <span class="font-raleway font-bold text-sm text-center tracking-wider">
                      Exploring The Window Console
                    </span>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href="https://snehapurkayastha.hashnode.dev/exploring-the-window-console"
                      target="_blank"
                      class="bg-black ring-2 ring-yellow rounded-lg text-white text-sm font-poppins px-2 py-2 hover:scale-105 transition duration-500 ease-in-out"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
                <div class="text-white overflow-y-scroll scrollbar-none font-raleway tracking-wider py-5 w-52">
                  <div class="flex justify-center items-center gap-2">
                    <h1 class="text-3xl">➊</h1>
                    <span>The word - WINDOW</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl ml-[2px]">➋</h1>
                    <span>Window Console Object</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl">➌</h1>
                    <span>Opening the Console</span>
                  </div>
                  <div class="flex justify-center items-center gap-2 pt-4">
                    <h1 class="text-3xl ml-[2px]">➍</h1>
                    <span>Accessing Console Object</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
