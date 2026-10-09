"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Founder() {
  return (
    <section className="py-24 bg-beige text-charcoal">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-16 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="md:w-1/3">
            <div className="w-full aspect-[3/4] bg-gray-200 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3149&auto=format&fit=crop" 
                alt="Abdul M. Raqshan" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/10 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-serif mb-2">Meet Abdul M. Raqshan</h2>
            <p className="text-gold font-medium tracking-wide text-sm uppercase mb-6">Founder & Principal Consultant</p>
            
            <p className="text-gray-600 font-light text-lg mb-6 leading-relaxed">
              Abdul M. Raqshan is a Business Strategist and Sales & Marketing Professional with extensive experience helping retail brands improve performance, strengthen market positioning, and scale successfully.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm font-light text-gray-700 mb-10">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Retail Strategy</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Brand Development</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Marketing Transformation</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Customer Engagement</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Business Growth Planning</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Retail Operations</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Franchise Development</div>
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Performance Analytics</div>
            </div>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors font-medium">
              Connect on LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
