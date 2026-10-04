"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal text-white overflow-hidden pt-20">
      {/* Background Image Overlay (Simulated) */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
            Accelerating Retail Growth Through <span className="text-gold italic">Strategy, Marketing & Execution</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Helping retail brands build stronger market positions, improve customer engagement, optimize performance, and expand with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gold hover:bg-gold-hover text-white px-8 py-4 flex items-center justify-center gap-2 transition-all duration-300 font-medium tracking-wide">
              Book Strategy Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/30 hover:border-white hover:bg-white hover:text-charcoal text-white px-8 py-4 transition-all duration-300 font-medium tracking-wide">
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
