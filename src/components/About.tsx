"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24 bg-white text-charcoal">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              Retail Strategy Meets <br/>
              <span className="text-gold italic">Real-World Execution</span>
            </h2>
            <div className="w-16 h-1 bg-gold mb-8"></div>
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
              Retail Ventures is a retail-focused advisory and consulting firm helping businesses improve profitability, customer engagement, operational efficiency, and long-term growth.
            </p>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Our advisory approach combines market intelligence, retail expertise, customer insights, and practical implementation frameworks to deliver measurable business outcomes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-beige p-8 border-l-2 border-gold">
              <h3 className="text-xl font-medium mb-3">Vision</h3>
              <p className="text-gray-600 font-light text-sm">To be the trusted growth partner for retail brands defining the future of commerce.</p>
            </div>
            <div className="bg-beige p-8 border-l-2 border-gold mt-8">
              <h3 className="text-xl font-medium mb-3">Mission</h3>
              <p className="text-gray-600 font-light text-sm">Empowering retail businesses with actionable strategies and operational excellence.</p>
            </div>
            <div className="bg-beige p-8 border-l-2 border-gold">
              <h3 className="text-xl font-medium mb-3">Core Values</h3>
              <p className="text-gray-600 font-light text-sm">Integrity, Insight-driven, Execution Excellence, and Long-term Partnership.</p>
            </div>
            <div className="bg-beige p-8 border-l-2 border-gold mt-8">
              <h3 className="text-xl font-medium mb-3">Approach</h3>
              <p className="text-gray-600 font-light text-sm">Combining analytical rigor with hands-on retail implementation.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
