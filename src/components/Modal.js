import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <>
      <div className="z-50 w-screen top-0 h-screen bg-neutral-600 opacity-95 absolute flex justify-center items-center">
        <div className="bg-white px-10 py-6 flex flex-col">
          <div className="cursor-pointer flex justify-end">
            <ion-icon
              name="close-outline"
              size="large"
              onClick={() => closeModal(false)}
            ></ion-icon>
          </div>
          <div className="flex flex-col justify-center items-center 900:hidden">
            <img src="../images/blog1.png" className="w-16" />
            <h1 className="text-xl font-inter tracking-wider pt-4 uppercase font-bold">
              Welcome to my Blog
            </h1>
            <a
              href="https://snehapurkayastha.hashnode.dev/"
              target="_blank"
              className="mt-7 bg-black text-white font-poppins tracking-wider px-8 py-4 cursor-pointer"
            >
              Find Out More
            </a>
          </div>
          <h1 className="text-xl font-inter tracking-wider pt-4 uppercase font-bold 900:flex hidden">
            Welcome to my Blog
          </h1>
          <div className="main-content flex flex-col">
            {/* 1st */}

            {/* 2nd */}
            {/* 3rd */}
            {/* 4th */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
