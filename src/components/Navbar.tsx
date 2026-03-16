import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'What We Buy', href: '#buy' },
  { name: 'Jewelry', href: '#jewelry' },
  { name: 'Diamonds', href: '#diamonds' },
  { name: 'Gemstones', href: '#gemstones' },
  { name: 'Appraisals', href: '#appraisals' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 border-zinc-200 shadow-sm' 
          : 'bg-transparent py-6 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-sm group-hover:rotate-45 transition-transform duration-500">
            <span className="text-white font-serif text-xl font-bold">H</span>
          </div>
          <span className={cn(
            "font-serif text-2xl tracking-widest uppercase transition-colors duration-300",
            isScrolled ? "text-navy" : "text-navy"
          )}>
            DeHermes
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors duration-300",
                isScrolled ? "text-zinc-600" : "text-zinc-800"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button className="p-2 hover:text-gold transition-colors"><Search size={20} /></button>
          <button className="p-2 hover:text-gold transition-colors hidden sm:block"><Heart size={20} /></button>
          <button className="p-2 hover:text-gold transition-colors hidden sm:block"><User size={20} /></button>
          <button className="p-2 hover:text-gold transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-navy text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 lg:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest font-medium flex items-center justify-between group"
                >
                  {item.name}
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
