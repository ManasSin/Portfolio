// function RevileText({ wordList }: { wordList: string }) {
//   const [wordToDisplay, setWordToDisplay] = useState<boolean>(false);
//   const words = wordList.split(" ");
//   const interval = setInterval(() => {
//     // const index = (words.indexOf(wordToDisplay) + 1) % words.length;
//     setWordToDisplay(true);
//   }, 5000);
//   // useEffect(() => {
//   //   return () => clearInterval(interval);
//   // }, [words, wordToDisplay]);
//   return (
//     <div>
//       {words.map((word, index) => (
//         <TextGenerateEffect
//           key={index}
//           className={`text-start text-[40px] md:text-5xl lg:text-6xl ${
//             wordToDisplay ? "inline-block" : "hidden"
//           }`}
//           words={word}
//         />
//       ))}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedText from "./ui/AnimatedText";

export function CoolTextEffect({
  wordList,
  children,
  filter = true,
  duration = 0.5,
}: {
  wordList: string | string[];
  filter?: boolean;
  duration?: number;
  children?: React.ReactNode;
}) {
  const [scope, animate] = useAnimate();
  const words = Array.isArray(wordList) ? wordList : wordList.split(" ");
  const [currentWord, setCurrentWord] = useState<string>(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentWord === null || currentWord === words[words.length - 1]) {
        setCurrentWord(words[0]);
      } else {
        setCurrentWord(words[words.indexOf(currentWord) + 1]);
      }
    }, 4000);

    console.log(currentWord);
    return () => clearInterval(interval);
  }, [currentWord, words]);

  // useEffect(() => {
  //   // if ("span" in scope.current) {
  //   animate(
  //     "span",
  //     {
  //       opacity: 1,
  //       filter: filter ? "blur(0px)" : "none",
  //     },
  //     {
  //       duration: duration ? duration : 1,
  //       delay: stagger(0.2),
  //     }
  //   );
  //   // }
  // }, [scope.current]);
  const renderWord = () => {
    return (
      <motion.div ref={scope}>
        {currentWord.split(" ").map((letter) => {
          return (
            <AnimatedText
              key={Math.random()}
              text={letter}
              el="h3"
              once
              delay={0.25}
              className="inline"
            />
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "inline-block font-bold text-[40px] md:text-5xl lg:text-6xl"
      )}
    >
      {renderWord()}
    </div>
  );
}
{
  /*
    <motion.div ref={scope}>
        {currentWord.split("").length !== 0 &&
          currentWord.split("").map((letter, index) => {
            return (
              <motion.span
                key={letter + index}
                className="dark:text-white text-black opacity-0"
                style={{ filter: filter ? "blur(10px)" : "none" }}
              >
                {letter}
              </motion.span>
            );
          })}
      </motion.div>
     */
}
{
  /* {currentWord.split("").map((letter, index) => (
        <TextGenerateEffect
          key={index}
          className="inline-block font-bold text-[40px] md:text-5xl lg:text-6xl"
          words={letter}
        />
      ))} */
}

// export function CoolTextEffect({ textArray }: { textArray: string[] }) {
//   const [currentText, setCurrentText] = useState<string | null>(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (
//         currentText === null ||
//         currentText === textArray[textArray.length - 1]
//       ) {
//         setCurrentText(textArray[0]);
//       } else {
//         setCurrentText(textArray[textArray.indexOf(currentText) + 1]);
//       }
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [currentText, textArray]);

//   return <AnimatedText text={currentText ? currentText : textArray[0]} />;
// }
