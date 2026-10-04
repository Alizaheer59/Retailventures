"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Discover", items: ["Market Research", "Customer Insights", "Business Diagnostics"] },
  { step: "02", title: "Strategize", items: ["Growth Planning", "Positioning", "Market Opportunity Mapping"] },
  { step: "03", title: "Build", items: ["Execution Roadmaps", "Operational Frameworks", "Capability Development"] },
  { step: "04", title: "Execute", items: ["Implementation Support", "Campaign Deployment", "Performance Tracking"] },
  { step: "05", title: "Optimize", items: ["Analytics", "Reporting", "Continuous Improvement"] }
];

export function Methodology() {
  return (
    <section className="py-24 bg-charcoal text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">Advisory Methodology</h2>
            <div className="w-16 h-1 bg-gold mb-6"></div>
            <p className="text-gray-400 font-light text-lg">
              A structured, end-to-end framework transforming strategic vision into measurable market success.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0"></div>
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal border border-white/10 p-6 md:p-8 hover:border-gold transition-colors"
              >
                <div className="text-gold font-serif text-3xl opacity-50 mb-4">{phase.step}</div>
                <h3 className="text-xl font-medium mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-400 font-light border-l border-white/20 pl-3 py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
