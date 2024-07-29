import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-start overflow-hidden mx-auto sm:px-10 px-5  bg-black-100">
      <Hero />
    </main>
  );
}
