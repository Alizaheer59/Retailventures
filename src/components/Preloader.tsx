"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the preloader for a smooth initial load animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            animate={{ 
              scale: [0.98, 1.02, 0.98],
              opacity: [0.7, 1, 0.7] 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src="/logo-icon.png"
              alt="Loading Retail Ventures..."
              className="h-24 md:h-32 w-auto object-contain drop-shadow-sm"
            />
            <div className="flex flex-col items-center text-center">
                <span className="text-2xl md:text-4xl font-serif font-medium text-charcoal tracking-wide leading-none">
                    RETAIL <span className="text-gold">VENTURES</span>
                </span>
                <span className="text-xs md:text-sm text-gray-500 tracking-[0.3em] mt-3 font-medium uppercase">
                    Strategy | Marketing | Growth
                </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
