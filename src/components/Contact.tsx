"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-charcoal text-white pt-24 pb-12 border-t border-white/10">
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

        {/* Enquiry Form and Contact Details */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light mb-2">Send an Enquiry</h2>
            <p className="text-gray-400 font-light mb-8">Fill out the form below and our team will get back to you shortly.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm placeholder-gray-500" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm placeholder-gray-500" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm placeholder-gray-500" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Company / Brand</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm placeholder-gray-500" placeholder="Retail Co." />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm resize-none placeholder-gray-500" placeholder="How can we help you grow?"></textarea>
              </div>
              <button type="submit" className="bg-gold text-charcoal hover:bg-gold-hover px-8 py-4 font-medium tracking-wide w-full transition-colors mt-2">
                Submit Enquiry
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-12 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-serif mb-8">Get in Touch</h3>
            
            <div className="space-y-8 font-light text-gray-300 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Headquarters</h4>
                  <p className="text-gray-400 text-sm">Madhurawada, Visakhapatnam,<br/>Andhra Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm">+91 92463 08601</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">info@retailventures.in</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Connect with Founder</h4>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm">
                Abdul M. Raqshan on LinkedIn <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light border-t border-white/10 pt-8">
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
