"use client";
import { useState, useEffect } from "react";
import { navbarContain } from "@/data/navbar";
import { icons } from "@/assets/assets";
import { gsap } from "gsap";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NavigationBar() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (showNavbar) {
      gsap.to(".nav-link", {
        width: "100%",
        height: "100%",
        borderRadius: "0px",
        duration: 0.7,
      });
      gsap.to("body", {
        overflow: "hidden",
        height: "100vh",
      });

      navbarContain.forEach((_, i) => {
        gsap.fromTo(
          `.nav-item-${i}`,
          {
            x: i % 2 === 0 ? "-100%" : "100%",
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 1 + i * 0.2,
            ease: "power3.out",
          }
        );
      });
    } else {
      gsap.to(".nav-link", {
        width: "0%",
        height: "0%",
        borderRadius: "0px 0px 0px 9999px",
        duration: 1.5,
      });
      gsap.to("body", {
        overflow: "auto",
        height: "auto",
      });

      // Animasi keluar tiap menu berdasarkan ganjil-genap
      navbarContain.forEach((_, i) => {
        gsap.to(`.nav-item-${i}`, {
          x: i % 2 === 0 ? "-100%" : "100%", // Arah keluar
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        });
      });
    }
  }, [showNavbar]);

  return (
    <div className="w-full">
      {/* Tombol untuk membuka navbar */}
      {!showNavbar && (
        <Image
          src={icons.humberger}
          alt="Hamburger Menu"
          width={40}
          height={40}
          className="fixed right-0 top-0 m-3 cursor-pointer"
          onClick={() => setShowNavbar(true)}
        />
      )}

      {/* Kontainer Navbar yang akan muncul */}
      <div className="nav-link absolute h-0 w-0 backdrop-blur-lg bg-blackTransparant z-[99] top-0 right-0 overflow-hidden rounded-nav">
        <div className="flex justify-end mx-3">
          {/* Tombol untuk menutup navbar */}
          <Image
            src={icons.close}
            alt="Close Menu"
            width={25}
            height={25}
            className="right-0 top-0 m-3 cursor-pointer"
            onClick={() => setShowNavbar(false)}
          />
        </div>

        {/* Daftar menu yang akan dianimasikan */}
        <div className="flex justify-center items-center h-screen flex-col">
          {navbarContain.map((data, i) => (
            <div
              key={i}
              className={`w-[200px] h-[40px flex justify-center my-2 overflow-hidden nav-item-${i}`}
            >
              <a
                href={data.link}
                className="text-white text-[1.5rem] text-center"
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"} // Animasi AOS
                data-aos-duration="1000"
                data-aos-delay="300"
                onClick={() => setShowNavbar(false)}
              >
                {data.contain}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
