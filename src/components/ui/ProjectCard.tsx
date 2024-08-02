"use client";
import { cn } from "@/lib/utils";
import {
  MotionValue,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type Props = {
  key: number;
  className?: string;
  project: {
    title: string;
    des: string;
    link: string;
    img: string;
    id: number;
  };
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
  //   parentDivProgress: MotionValue<number>;
};

function ProjectCard({
  key,
  className,
  progress,
  project,
  range,
  targetScale,
}: //   parentDivProgress,
Props) {
  const height = typeof project.id === "number" ? project.id * 25 : 0;
  const scale = useTransform(progress, range, [1, targetScale]);
  //   const ref = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress: parentDivProgress } = useScroll({
  //     offset: ["start end", "end end"],
  //     target: ref,
  //   });

  //   let opacity = useTransform(parentDivProgress, range, [0, 1]);

  return (
    <motion.article
      id={`project.id`}
      className="h-screen flex items-center justify-center sticky top-0 scroll-smooth snap-y"
    >
      <motion.div
        key={key}
        className={cn(
          `shadow-background  w-full h-[500px] relative  rounded-3xl flex flex-col p-[50px]   ${className}`
        )}
        style={{
          scale,
          top: `calc(-10% + ${height}px)`,
        }}
      >
        <h2 className="text-center m-0 text-2xl">{project.title}</h2>
        <div className="flex items-center justify-center gap-3">
          <div className=" flex h-full mt-[50px] gap-12">
            <div className="w-[40%] relative top-[10%]">
              <p className="text-lg ">{project.des}</p>
              <span className="flex items-center gap-5 ">
                <a
                  className="underline text-md cursor-pointer"
                  href="{project.link}"
                  target="_blank"
                >
                  See more
                </a>
                <svg
                  width={22}
                  height={12}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 13.5C8.5 14.3284 9.32843 15 10 15H14C14.6716 15 15.5 14.3284 15.5 13.5C15.5 12.6716 14.6716 12 14 12H10C9.32843 12 8.5 12.6716 8.5 13.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="w-2/3 h-full p-2 relative">
            <div className="w-full h-full">
              <Image
                width={500}
                height={500}
                alt={project.title}
                src={"/CodeEditor.svg"}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default ProjectCard;
