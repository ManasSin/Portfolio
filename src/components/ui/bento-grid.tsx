import { cn } from "@/lib/utils";
import IdOne from "./GridBackgroundElement/IdOne";
import IdTwo from "./GridBackgroundElement/IdTwo";
import IdThree from "./GridBackgroundElement/IdThree";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(max-content,10rem)] md:auto-rows-[8rem] lg:auto-rows-[10rem] grid-cols-1 tablet:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  img,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  img?: React.ImgHTMLAttributes<HTMLImageElement>;
  id?: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl relative group/bento hover:shadow-xl  transition-all duration-200 shadow-input dark:shadow-none p-4 dark:bg-black-200/30  dark:border-white/[0.1] bg-white border border-transparent justify-end flex flex-col space-y-4 min-w-full overflow-hidden",
        className
      )}
    >
      <span className="sr-only">{header}</span>
      <div className="group-hover/bento:translate-x-2 flex flex-col justify-around basis-full md:basis-[40%] gap-0 transition duration-200 mb-5 z-10 ">
        <div className="font-sans text-neutral-600 text-sm font-extralight w-[50%] md:w-[70%] lg:w-[50%] self-start leading-relaxed tracking-wider dark:text-neutral-300">
          {description}
        </div>
        <div className="font-sans font-bold text-2xl text-neutral-600 dark:text-neutral-200 sm:w-full lg:w-[80%]  tracking-wide">
          {title}
        </div>
      </div>
      {id === 1 ? (
        <IdOne className="absolute -top-30 md:-top-10 right-0 group-hover/bento:transform  group-hover/bento:scale-110 group-hover/bento:-translate-x-2  transition" />
      ) : id === 2 ? (
        <IdTwo className="flex items-end justify-center absolute -bottom-40 md:bottom-20 md:scale-150 lg:scale-100 lg:-bottom-20" />
      ) : id === 3 ? (
        <IdThree className="absolute -top-10 md:top-0 lg:-top-10 right-8 md:right-0 lg:right-8 -rotate-3 group-hover/bento:rotate-0 group-hover/bento:transition-all transition " />
      ) : null}
      {/* <IdOne className="absolute bottom-0 right-0 " /> */}
    </div>
  );
};
