import Banner from "@/components/Banner";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="flex flex-col items-center justify-start overflow-hidden mx-auto sm:px-10 px-5  dark:bg-black-100">
        <div className="max-w-6xl w-full">
          <Hero />
          <Grid />
        </div>
      </main>
    </>
  );
}
