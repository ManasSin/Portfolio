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
    <main className="mt-10 mb-[500px">
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
