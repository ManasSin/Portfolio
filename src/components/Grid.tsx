import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

type Props = {};

function Grid({}: Props) {
  return (
    <section id="about" className="w-full h-screen border-2 border-red-50">
      <BentoGrid className="">
        {[
          {
            title: "About me",
            description: "I am a full stack developer",
            id: `${Math.random().toString()}`,
          },
          {
            title: "About me",
            description: "I am a full stack developer",
            id: `${Math.random().toString()}`,
          },
          {
            title: "About me",
            description: "I am a full stack developer",
            id: `${Math.random().toString()}`,
          },
        ].map((item) => (
          <BentoGridItem
            title={item.title}
            description={item.description}
            key={item.id}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
