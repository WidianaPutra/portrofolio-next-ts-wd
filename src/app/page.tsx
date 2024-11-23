"use client";
import NavigationBar from "@/components/navbar";

import AOS from "aos";
import SplashScreen from "@/components/splashScreen";
import Home from "@/components/home";
import Skills from "@/components/skiils";
import AboutMe from "@/components/about";
import Achievement from "@/components/achievement";

import "@/app/globals.css";
import "aos/dist/aos.css";

AOS.init();

export default function App() {
  return (
    <div className="">
      <SplashScreen />
      <div className="flex justify-center bg-black bg-no-repeat flex-col items-center">
        <NavigationBar />
        <Home />
        <div className="max-w-ultrawide w-full justify-center flex-col">
          <div className="">
            <AboutMe />
            <Skills />
            <Achievement />
          </div>
        </div>
      </div>
    </div>
  );
}
