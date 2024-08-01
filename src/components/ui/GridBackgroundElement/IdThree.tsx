import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = { className?: string };

function IdThree({ className }: Props) {
  const leftLists = ["ReactJS", "Express", "Typescript", "NextJS"];
  const middleLists = ["BackEnd", "FrontEnd", "Animation", "AWS", "Docker"];
  const rightLists = ["PostgreSQL", "MongoDB", "SQL", "API Testing"];
  return (
    <div
      className={cn(
        `absolute aspect-square w-fit sm:w-full lg:w-fit p-2 z-0 flex justify-between items-start  ${className}`
      )}
    >
      <div className="flex sm:flex-col lg:flex-row gap-1 sm:gap-3 lg:gap-3  h-full sm:h-fit w-fit sm:w-full lg:w-fit lg:h-full items-start sm:items-center lg:items-start absolute -right-3 lg:-right-2">
        <div className="flex flex-col sm:flex-row w-fit sm:w-full lg:w-fit lg:flex-col gap-1 md:gap-2 lg:gap-3">
          {leftLists.map((item, i) => (
            <span
              key={i}
              className="sm:py-4 lg:py-3 grow lg:px-2 py-2 px-2 text-xs lg:text-base opacity-50 text-purple/60
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          ))}
          <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
        </div>
        <div className="flex flex-col sm:flex-row w-fit sm:w-full lg:w-fit lg:flex-col gap-1 md:gap-2 lg:gap-3">
          {/* <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span> */}
          {middleLists.map((item, i) => (
            <span
              key={i}
              className="sm:py-4 lg:py-3 lg:px-2 py-2 px-2 text-xs lg:text-base opacity-50 text-rose-500/60 grow
              lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          ))}
          {/* <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span> */}
        </div>
        <div className="flex flex-col w-fit sm:w-full lg:w-fit sm:flex-row lg:flex-col gap-1 md:gap-2 lg:gap-3">
          {rightLists.map((item, i) => (
            <span
              key={i}
              className="sm:py-4 lg:py-3 lg:px-2 py-2 px-2 text-xs lg:text-base opacity-50 text-orange-500/60 grow
            lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          ))}
          <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
        </div>
      </div>
    </div>
  );
}

export default IdThree;
