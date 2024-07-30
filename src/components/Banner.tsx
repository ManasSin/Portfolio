import { convertTo12Hour } from "@/lib/utils";
import React from "react";

type Props = {};

function Banner({}: Props) {
  const time = "Tuesday June 30, 2024";
  return (
    <div className="font-extrabold text-base tracking-wider text-gray-800 dark:bg-orange-300 grid items-center relative z-10 h-[3rem] ">
      <p className="text-center mx-auto">
        This is still under development. {"I'm working to deliver it ASAP"}{" "}
        <span className="text-sm font-light tracking-normal absolute right-0 bottom-0 px-4">
          {"Last updated: " + time}
        </span>
      </p>
    </div>
  );
}

export default Banner;
