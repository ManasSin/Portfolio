import Banner from "@/components/Banner";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import NavbarSelf from "@/components/ui/NavbarSelf";

export default function Home() {
  return (
    <>
      <Banner />
      {/* <Navbar className="" /> */}
      <NavbarSelf />
      <main className="flex flex-col items-center justify-start overflow-hidden mx-auto sm:px-10 px-5  dark:bg-black-100">
        <div className="max-w-6xl w-full">
          <Hero />
          <Grid />
        </div>
      </main>
      <div className="min-w-full  grid grid-rows-[fit-content] grid-cols-1  items-center top-0  sm:px-10 px-5 z-9 dark:bg-black-100">
        <Projects />
      </div>
      <div className="h-screen w-full"></div>
    </>
  );
}
