'use client';

import { navItems } from "@/data";
import dynamic from 'next/dynamic';
import ClientOnly from "@/components/ClientOnly";

// Dynamically import components that might use browser APIs
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar").then(mod => ({ default: mod.FloatingNav })), { ssr: false });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: false });

const Home = () => {
  return (
    <ClientOnly>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen">
        <div className="h-full w-full max-w-7xl mx-auto">
          <FloatingNav navItems={navItems} />
          <div className="pt-16 md:pt-24">
            <Hero />
            <Grid />
            <RecentProjects />
            <Clients />
            <Experience />
            <Pricing />
            <Approach />
            <Footer />
          </div>
        </div>
      </main>
    </ClientOnly>
  );
};

export default Home;
