"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { projects } from "@/data";
import ProjectCard from "./ui/ProjectCard";

type Props = {};

function Projects({}: Props) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: container,
  });

  return (
    <main className="h-full w-full md:max-w-3xl lg:max-w-5xl mx-auto my-40">
      <div className="w-full my-14 px-8 z-10 relative grid items-center">
        <h1 className="text-3xl tracking-wider leading-5 text-white-200 font-bold mx-auto">
          Most Recent Projects
        </h1>
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        const range = [i * 0.25, 1];
        return (
          <ProjectCard
            range={range}
            progress={scrollYProgress}
            targetScale={targetScale}
            className={project.className}
            key={project.id}
            project={project}
            // parentDivProgress={parentDivProgress}
          />
        );
      })}
    </main>
  );
}

export default Projects;
