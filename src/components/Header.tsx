"use client";

import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 max-w-7xl h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-serif font-medium text-charcoal tracking-wide">
                Retail <span className="text-gold italic">Ventures</span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-700 tracking-wide">
                <a href="#about" className="hover:text-gold transition-colors">About</a>
                <a href="#services" className="hover:text-gold transition-colors">Services</a>
                <a href="#methodology" className="hover:text-gold transition-colors">Methodology</a>
                <a href="#founder" className="hover:text-gold transition-colors">Founder</a>
                <a href="#contact" className="bg-charcoal text-white px-5 py-2.5 hover:bg-gold transition-colors">Contact Us</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-charcoal p-2">
                <Menu className="w-6 h-6" />
            </button>
        </div>
    </header>
  );
}
