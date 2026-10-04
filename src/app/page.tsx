import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Founder } from "@/components/Founder";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { Industries } from "@/components/Industries";
import { Contact } from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Ventures | Corporate Website",
  description: "Accelerating Retail Growth Through Strategy, Marketing & Execution",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Founder />
      <Services />
      <Methodology />
      <Industries />
      <Contact />
    </main>
  );
}
