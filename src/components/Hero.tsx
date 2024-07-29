"use client";

import { IndianFlag } from "@/lib/FlagIcon";
import AnimatedText from "./ui/AnimatedText";
import { Spotlight } from "./ui/spotlight";

type Props = {};

export default function Hero({}: Props) {
  const location = "India";
  const time = new Date().toLocaleTimeString().split(":").join(":");
  // const userloaction = UserTime();
  // console.log(userloaction);

  return (
    <div className="pb-20 pt-36 w-full">
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] rotate-45"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-[40rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute left-0 top-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center flex-col items-start gap-3 relative my-10 z-10 w-full h-full ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center">
          <h2 className="uppercase tracking-widest text-sm text-start w-full text-blue-100 max-w-80 my-4">
            Software Engineer from India{" "}
            <span>
              <IndianFlag />
            </span>
          </h2>
          <div className="flex flex-col items-start">
            <AnimatedText
              text={"Hello, My Name is MANAS"}
              once
              y
              el="h2"
              duration={0.3}
            />
            <AnimatedText
              el="p"
              text={"I'm a Software Engineer and a Full-Stack Developer"}
              once
              filter
              delay={1500}
              duration={0.5}
            />
            {/* <CoolTextEffect
              wordList={[
                "Software Engineer",
                "Full-Stack Developer",
                "Freelancer",
                "Open Source Contributor",
                "Web Designer",
              ]} 
            /> */}
          </div>
          {/* <p className="text-start text-xs tracking-wide my-4 text-white/50">
            {location} |{" "}
            {time.split(":")[0] > 12 ? `${time - 12} pm` : time + " am"}
          </p> */}
          {/* <UserTime /> */}
        </div>
      </div>
    </div>
  );
}
