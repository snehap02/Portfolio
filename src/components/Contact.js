import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t5yxu9j",
        "template_mlyt2kk",
        form.current,
        "KZSIUGFyp8aFatKAL"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="h-[680px]">
        <div className="flex flex-col 520:flex-row pt-[34px] 640:pt-14 lg:pt-20">
          <h1 className="flex font-robotoMono text-3xl lg:text-5xl ml-14 md:ml-20 pt-10 xl:ml-28">
            03.
          </h1>
          <div className="flex flex-col w-[280px] md-2:w-[390px] 520:w-[390px] sm:w-[450px] md:w-[500px] lg:w-[580px] xl:w-[900px] ml-14">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-5xl xl:text-6xl pt-1 520:pt-9 520:-ml-9 font-georgian tracking-wider font-bold relative uppercase">
                Let's Get In Touch
              </h1>
              <div class="absolute hidden 740:flex w-32 h-[1px] bg-black -mt-5 ml-[380px] lg:ml-[520px] xl:ml-[630px] lg:-mt-6"></div>
            </div>
          </div>
          
        </div>
<div>
<div className="flex justify-center items-center lg:mt-8">
            <div className="lg:flex lg:flex-row pt-6">
              <div className="text-white bg-black flex flex-col justify-center items-center 400:px-24 md-2:px-28 520:px-36 380:px-[86px] py-2 lg:-mt-2">
                <h1 className="text-lg font-raleway tracking-wider font-medium lg:text-2xl">
                  Contact Me
                </h1>
                <div className="contact-info pt-4 pb-4 flex flex-col justify-center items-center">
                  <div className="flex gap-6">
                    {/* <ion-icon name="logo-whatsapp"></ion-icon> */}
                    <a
                      href="https://api.whatsapp.com/send?phone=917002969688"
                      target="_blank"
                    >
                      <ion-icon name="logo-whatsapp" size="large"></ion-icon>
                    </a>
                    <a
                      href="mailto:sneha.purkayastha96@gmail.com"
                      target="_blank"
                    >
                      <ion-icon name="mail-outline" size="large"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
              <div className="shadow-lg shadow-neutral-600 -mt-2 bg-white lg:w-96 lg:shadow-none lg:border lg:border-neutral-400">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="pt-5 px-8 flex flex-col">
                    <label
                      for="name"
                      className="font-poppins font-medium tracking-wider"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      className="border-b border-b-neutral-400 outline-none pt-1" required minlength="3" maxlength="100"
                    />
                  </div>
                  <div className="pt-8 px-8 flex flex-col">
                    <label
                      for="email"
                      className="font-poppins font-medium tracking-wider"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      className="border-b border-b-neutral-400 outline-none pt-1" required
                    />
                  </div>
                  <div className="pt-8 px-8 pb-8 flex flex-col">
                    <label
                      for="message"
                      className="font-poppins font-medium tracking-wider"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="border border-neutral-400 outline-none mt-2 lg:h-24" required 
                    />
                  </div>
                  <div className="pt- px-8 pb-8 flex flex-col">
                    <input
                      type="submit"
                      value="Send"
                      className="cursor-pointer bg-black text-white py-2 font-raleway uppercase tracking-widest font-medium"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
</div>
      </div>
    </>
  );
};

export default Contact;
