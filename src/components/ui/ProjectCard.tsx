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
import Link from "next/link";
import React, { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

type Props = {
  key: number;
  className?: string;
  project: {
    title: string;
    des: string;
    link: string;
    img: string;
    id: number;
    liveLink: string;
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
      id={`${project.id}`}
      className="h-[32rem] mt-16 w-full flex items-center justify-center sticky top-40 scroll-smooth snap-y"
    >
      <motion.div
        key={key}
        className={cn(
          `shadow-background  w-full h-[90%] relative  rounded-3xl flex flex-col gap-5 p-[50px]   ${className}`
        )}
        style={{
          scale,
          top: `calc(-10% + ${height}px)`,
        }}
      >
        <h2 className="text-center m-0 text-2xl">{project.title}</h2>
        <div className="min-h-full h-full min-w-full max-w-xl w-full flex justify-around items-center mb-10">
          <div className="w-full m-2 h-full flex flex-col gap-3 items-center justify-center">
            <h2 className="font-light tracking-wide text-base w-fit leading-normal">
              {project.des}
            </h2>
            <p className="text-sm font-bold tracking-wide leading-7 place-items-start text-start w-full">
              <Link href={project.link} target="_blank">
                <span className="text-sm pr-3">
                  Github <Github className="inline-block h-4 mb-1 w-4" /> :-
                </span>
                {project.link}{" "}
              </Link>
            </p>
            <p className="text-sm font-bold tracking-wide leading-7 place-items-start text-start w-full">
              <Link href={project.liveLink} target="_blank">
                <span className="text-sm pr-3">
                  Live <ExternalLink className="inline-block h-4 mb-1 w-4" /> :-
                </span>
                {project.link}{" "}
              </Link>
            </p>
          </div>
          <div className="w-full m-2 h-full py-5">
            <Image
              height={300}
              width={300}
              src={project.img}
              alt="image"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default ProjectCard;
