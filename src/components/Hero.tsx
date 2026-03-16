import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-zinc-50">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Diamond Jewelry"
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.4em] font-semibold text-gold mb-4">
              Est. 1977 • Certified Specialists
            </span>
            <h1 className="font-serif text-6xl md:text-8xl leading-[1.1] mb-8 text-navy">
              Elegance <br /> 
              <span className="italic font-normal">Redefined</span>
            </h1>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed max-w-lg">
              Discover a curated collection of the world's finest natural diamonds and rare gemstones. 
              DeHermes brings decades of expertise to every appraisal and custom design.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-navy text-white px-10 py-5 rounded-sm text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-3 group"
              >
                Explore Collection
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-navy text-navy px-10 py-5 rounded-sm text-xs uppercase tracking-[0.2em] font-bold"
              >
                Book Appraisal
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium opacity-50">Scroll</span>
        <div className="w-[1px] h-12 bg-navy/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-navy" />
        </div>
      </motion.div>
    </section>
  );
}
