import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "../data";

type Props = {};

function Grid({}: Props) {
  return (
    <section id="about" className="w-full h-full mt-10">
      <div className="w-full my-6 px-8 z-10 relative grid items-center">
        <h1 className="text-3xl tracking-wider leading-5 text-white-200 font-bold mx-auto">
          About Me
        </h1>
      </div>
      <BentoGrid className=" w-full py-20">
        {gridItems.map((item) => (
          <BentoGridItem
            title={item.title}
            description={item.description}
            key={item.id}
            className={item.className}
            id={item.id}
            header={item.title}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
