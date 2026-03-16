import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <span className="text-navy font-serif text-lg font-bold">H</span>
              </div>
              <span className="font-serif text-xl tracking-widest uppercase">DeHermes</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Exquisite jewelry, certified diamonds, and professional appraisal services since 1977. 
              Your trusted partner in luxury and legacy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-navy transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-navy transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-navy transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#jewelry" className="hover:text-gold transition-colors">Jewelry Collection</a></li>
              <li><a href="#diamonds" className="hover:text-gold transition-colors">Loose Diamonds</a></li>
              <li><a href="#appraisals" className="hover:text-gold transition-colors">Appraisal Services</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-8">Our Services</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-gold transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Jewelry Repair</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Estate Buying</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Watch Service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Insurance Valuation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-8">Contact Us</h4>
            <ul className="space-y-6 text-sm text-zinc-400">
              <li className="flex gap-4">
                <MapPin size={20} className="text-gold shrink-0" />
                <span>561 Luxury Way, Suite 100<br />Palm Beach, FL 33480</span>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-gold shrink-0" />
                <a href="tel:+15618893333" className="hover:text-gold transition-colors">(561) 889-3333</a>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-gold shrink-0" />
                <a href="mailto:customerservice@dehermes.com" className="hover:text-gold transition-colors">customerservice@dehermes.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
          <p>© 2025 DeHermes Luxury Jewelry. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
