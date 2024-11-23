"use client";
import Image from "next/image";
import { skillsContain } from "@/data/skillsContain";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
});

export default function Skills() {
  return (
    <div
      className="bg-dark w-full h-max flex flex-col justify-center items-center"
      id="skills"
    >
      <h1
        className="text-white text-[30px] text-center"
        data-aos="zoom-in"
        data-aos-duration={1500}
      >
        My Skills
      </h1>
      <div className="grid md:grid-cols-3 md:w-[90%] sm:grid-cols-2 sm:w-[90%] grid-cols-1 w-[85%] mt-[15px] p-5 gap-7">
        {skillsContain.map((data, index) => (
          <div
            className="w-full flex items-center border-2 border-blue rounded-[10px] p-4 hover:scale-105 cursor-pointer"
            key={index}
            data-aos="zoom-in"
            data-aos-duration={1500}
          >
            <Image
              src={data.img}
              alt="img"
              width={100}
              height={200}
              className="md:w-[70px] md:h-[70px] sm:w-[70px] sm:h-[70px] w-[50px] h-[50px]"
            />
            <p className="text-white px-5 md:text-[18px] text-wrap">
              {data.tilte}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
