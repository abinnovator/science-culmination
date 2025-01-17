import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Animals from "@/components/Animals";
import { FaHome } from "react-icons/fa";
import { CardHoverEffectDemo } from "@/components/dichotomous_key";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{name: 'Home', link: './', icon: <FaHome />}]}/>
        <Hero />
        <Grid />
        <div className="py-2">
          <Animals type="Bird" />
          <Animals type="Mammal" />
          <Animals type="Reptile" />
          <Animals type="Key" />
        </div>
        
        <CardHoverEffectDemo />
      </div>
    </main>
  );
}
