import { cn } from "@/lib/utils";
import { Variant, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
  el?: keyof JSX.IntrinsicElements;
  text: string | string[];
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
  filter?: boolean;
  y?: boolean;
  duration?: number;
  delay?: number;
};

const AnimatedText = React.memo(function Animated({
  text,
  el: Wrapper = "p",
  className,
  once = true,
  repeatDelay,
  animation,
  filter = false,
  y = false,
  duration,
  delay,
}: Props) {
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      filter: filter && "blur(10px)",
      y: y && 5,
    },
    visible: {
      opacity: 1,
      y: y && 0,
      filter: filter && "none",
      transition: {
        duration: duration || 0.15,
      },
    },
  };

  const delayAnimation = (delay: number) =>
    setTimeout(() => controls.start("visible"), delay);

  const TextArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const controls = useAnimation();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const show = () => {
      delay ? delayAnimation(delay) : controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };
    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);
  return (
    <Wrapper className={className} key={Math.random()}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
          hidden: {},
        }}
        animate={controls}
        aria-hidden
        ref={ref}
      >
        {TextArray.map((line, idx) => (
          <span className="block" key={line + idx}>
            {line.split(" ").map((word) => (
              <span key={Math.random()} className="inline-block">
                {word.split("").map((char) => (
                  <motion.span
                    // @ts-ignore
                    variants={defaultAnimation}
                    className={cn(
                      `inline-block dark:text-white font-bold text-2xl leading-snug tracking-wide ${
                        word === "MANAS"
                          ? `dark:text-blue-500 text-blue-500 font-extrabold text-4xl tracking-wide backdrop-blur-md bg-purple/90 bg-clip-text`
                          : ""
                      }`
                    )}
                    key={char}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
});

export default AnimatedText;
