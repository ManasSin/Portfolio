import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = { className?: string };

function IdOne({ className }: Props) {
  return (
    <div
      className={cn(
        `absolute w-[80%] sm:w-[80%] lg:w-[50%] p-2 aspect-square rounded-lg border-[2px] border-transparent z-0 ${className}`
      )}
    >
      <Image
        alt="picture of a code editor"
        src="/CodeEditor.svg"
        fill
        className="object-cover opacity-55"
      />
      <div className="absolute top-0 right-0 w-full  h-1/3 bg-[linear-gradient(360deg,transparent,#000319)]" />
    </div>
  );
}

export default IdOne;
