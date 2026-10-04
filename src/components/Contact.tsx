"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section className="bg-charcoal text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gold p-10 md:p-16 text-center text-charcoal mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">Ready to Build a Stronger Retail Brand?</h2>
            <p className="text-lg md:text-xl font-light mb-10 opacity-90">
              Schedule a strategic consultation and discover actionable growth opportunities for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-charcoal text-white hover:bg-black px-8 py-4 transition-all duration-300 font-medium tracking-wide">
                Schedule Consultation
              </button>
              <button className="bg-transparent border border-charcoal hover:bg-charcoal/10 text-charcoal px-8 py-4 transition-all duration-300 font-medium tracking-wide">
                info@retailventures.in
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer info */}
        <div className="grid md:grid-cols-3 gap-12 mb-16 border-b border-white/10 pb-16">
          <div>
            <h3 className="text-2xl font-serif mb-6"><span className="text-gold">Retail</span> Ventures</h3>
            <p className="text-gray-400 font-light text-sm mb-6 max-w-xs leading-relaxed">
              Accelerating growth through strategic planning, retail marketing, sales transformation, and operational excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <div className="space-y-4 font-light text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Madhurawada, Visakhapatnam,<br/>Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+91 92463 08601</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>info@retailventures.in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <p className="text-gray-400 font-light text-sm mb-4">
              Follow Abdul M. Raqshan and Retail Ventures for insights on retail growth strategy.
            </p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-gold transition-colors">
              <Linkedin className="w-5 h-5" /> LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Retail Ventures. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </section>
  );
}
