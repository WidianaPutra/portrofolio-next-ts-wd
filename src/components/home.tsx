"use client";
import { useEffect } from "react";

import AOS from "aos";

//
import "aos/dist/aos.css";

AOS.init({
  once: true,
});

export default function Home() {
  useEffect(() => {}, []);
  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center s overflow-hidden"
        id="home"
      >
        <div className="md:w-[70%] rounded-full sm:w-[80%] w-[85%] max-w-ultrawide lg:w-[70%]">
          <h1
            className="text-white md:text-[50px] text-[35px]"
            data-aos="zoom-out"
            data-aos-delay={2300}
            data-aos-duration={1400}
          >
            Im Surya Widiana
          </h1>
          <h1
            className="text-white md:text-[30px] text-[25px]"
            data-aos="zoom-out"
            data-aos-delay={2450}
            data-aos-duration={1400}
          >
            Coder and Student
          </h1>
          <p
            className="text-white md:text-[18px] sm:text-[15px] text-[13px]"
            data-aos="zoom-out"
            data-aos-delay={2600}
            data-aos-duration={1400}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            corporis in, eaque optio commodi quibusdam iste. Sit tempora
            dignissimos iure provident cupiditate, facilis deserunt praesentium
            eos? Ad libero quam maiores eum, doloremque adipisci tempore culpa
            necessitatibus sint earum porro nesciunt dignissimos dolore minima
            veniam soluta. Placeat nulla aliquam voluptas consequuntur!
          </p>
          <button
            className="bg-blue hover:bg-purple2 text-[18px] text-white px-[30px] py-[10px] rounded-[7px] mt-5"
            data-aos="fade-right"
            data-aos-delay={2750}
            data-aos-duration={1400}
          >
            <a href="#skills">My Skills</a>
          </button>
        </div>
      </div>
    </>
  );
}
