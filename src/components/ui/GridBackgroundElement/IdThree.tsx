import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = { className?: string };

function IdThree({ className }: Props) {
  return (
    <div
      className={cn(
        `absolute w-fit p-2 aspect-square border border-red-200  z-0 ${className}`
      )}
    >
      <Image
        alt="picture of a code editor"
        src=""
        fill
        className="object-cover w-10"
      />
    </div>
  );
}

export default IdThree;
