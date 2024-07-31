"use client";

import { navItems } from "@/data";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

type Props = {};

function NavbarSlef({}: Props) {
  return (
    <nav className="w-[90vw] sm:max-w-2xl  md:w-full mx-auto dark:bg-black/20 backdrop-blur-sm overflow-visible border border-black/[0.2] dark:border-white/[0.1] z-40  min-h-[4rem] h-full rounded-full sticky top-10 mt-5 flex items-center justify-center">
      <NavMenu />
    </nav>
  );
}

function NavMenu() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseEnter={(e) => {
        // console.log(e.pageX);
        mouseX.set(e.pageX);
      }}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="absolute z-50 flex flex-row items-center justify-center space-x-4 w-full sm:w-[70%] h-full px-3 mx-auto "
    >
      {navItems.map((item) => (
        <NavMenuItems
          mouseX={mouseX}
          key={item.name}
          name={item.name}
          link={item.link}
        />
      ))}
    </div>
  );
}

function NavMenuItems({
  mouseX,
  name,
  link,
}: {
  mouseX: MotionValue;
  name: string;
  link: string;
}) {
  let widthAccordingToLetters = name.split("").length * 11;
  if (widthAccordingToLetters < 60) widthAccordingToLetters = 60;
  let ref = useRef<HTMLAnchorElement>(null);
  const distance = useTransform(mouseX, (val) => {
    let bounds = ref?.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };

    // console.log(bounds.width, bounds.x);
    return val - bounds.x - bounds.width / 2;
  });
  let widthSync = useTransform(
    distance,
    [-200, 0, 200],
    [widthAccordingToLetters, 110, widthAccordingToLetters]
  );
  let widthSyncSpan = useTransform(
    distance,
    [-200, 0, 200],
    [
      widthAccordingToLetters,
      100 > widthAccordingToLetters ? 100 : widthAccordingToLetters + 10,
      widthAccordingToLetters,
    ]
  );
  let width = useSpring(widthSync, { mass: 0.3, stiffness: 200, damping: 15 });
  let widhtSpan = useSpring(widthSyncSpan, {
    mass: 0.3,
    stiffness: 200,
    damping: 15,
  });

  return (
    <motion.a
      ref={ref}
      className="flex flex-row items-center group justify-center px-2 w-full h-full text-white/80  truncate rounded-full hover:text-white"
      style={{ width }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.span
        className="h-[1px] bg-white-200/20 group-hover:bg-white/35 absolute bottom-4 mx-2"
        style={{ width: widhtSpan }}
      ></motion.span>
      {name}
    </motion.a>
  );
}

export default NavbarSlef;
