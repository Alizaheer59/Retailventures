"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  "Retail", "FMCG", "Fashion", "Lifestyle Brands", "Food & Beverage", 
  "Consumer Products", "Franchise Businesses", "Specialty Retail", "Multi-Store Operations"
];

const reasons = [
  "Deep Retail Expertise", "Data-Driven Decision Making", "Strategic + Execution Focus",
  "Customized Growth Frameworks", "Practical Business Solutions", "Long-Term Partnership Approach"
];

export function Industries() {
  return (
    <section className="py-24 bg-white text-charcoal">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Industries Served */}
          <div>
            <h2 className="text-3xl font-serif font-light mb-6">Industries We Serve</h2>
            <div className="w-16 h-1 bg-gold mb-10"></div>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-5 py-3 border border-gray-200 text-sm font-medium hover:border-gold hover:text-gold transition-colors cursor-default"
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-beige p-10 md:p-12 border-t-4 border-gold">
            <h2 className="text-3xl font-serif font-light mb-6">Why Choose Retail Ventures</h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 border-b border-gray-200/50 pb-4 last:border-0 last:pb-0"
                >
                  <ArrowRight className="w-5 h-5 text-gold shrink-0" />
                  <span className="font-medium text-gray-800">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
