"use client";
import Typed from "typed.js";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function SplashScreen() {
  useEffect(() => {
    gsap.to("#skills", {
      display: "none",
    });
    gsap.to("#about", {
      display: "none",
    });
    //
    gsap.to(".container-contain-splash", {
      duration: 1,
      delay: 2,
      opacity: 0,
      overflow: "hidden",
      onComplete: () => {
        gsap.to(".container-contain-splash", {
          width: "0px",
          height: "0px",
          duration: 1,
          onComplete: () => {
            gsap.to(".container-splash", {
              display: "none",
            });
            //
            gsap.to("#skills", {
              display: "flex",
            });
            gsap.to("#about", {
              display: "flex",
            });
          },
        });
      },
    });

    // typed
    const welcome_text = new Typed(".welcome-text", {
      strings: ["Welcome"],
      typeSpeed: 70,
      showCursor: false,
      startDelay: 500,
    });
  }, []);

  return (
    <>
      <div
        className={`container-splash absolute w-full h-screen z-[9999] flex justify-center items-center bg-none`}
      >
        <div
          className={`container-contain-splash w-full h-screen flex justify-center items-center bg-dark`}
        >
          <h1
            className={`welcome-text text-[50px] font-bold text-center text-nowrap text-white`}
          ></h1>
        </div>
      </div>
    </>
  );
}
