import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import AEOSection from './components/AEOSection';
import Footer from './components/Footer';

/**
 * SEO & AEO Optimization:
 * - Semantic HTML structure (header, main, section, footer)
 * - Structured Data (JSON-LD) for Organization and LocalBusiness
 * - Responsive design with high-quality imagery
 * - Interactive elements using motion/react
 */

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Structured Data for SEO/AEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          "name": "DeHermes Luxury Jewelry",
          "image": "https://dehermes.com/wp-content/uploads/2025/05/logo.png",
          "@id": "",
          "url": "https://dehermes.com",
          "telephone": "(561) 889-3333",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "561 Luxury Way, Suite 100",
            "addressLocality": "Palm Beach",
            "addressRegion": "FL",
            "postalCode": "33480",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.7153,
            "longitude": -80.0534
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "10:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://www.facebook.com/dehermes",
            "https://www.instagram.com/dehermes",
            "https://twitter.com/dehermes"
          ]
        })}
      </script>

      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Interactive Banner Section */}
        <section className="py-20 bg-navy overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-white z-10">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Expert Appraisals</span>
              <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                Know the True Value of Your <span className="italic">Legacy</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Our GIA-certified gemologists provide comprehensive appraisal services for insurance, 
                estate planning, and resale. We combine scientific precision with decades of market expertise.
              </p>
              <button className="bg-gold text-navy px-10 py-5 rounded-sm text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors">
                Schedule Appointment
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop" 
                  alt="Jewelry Appraisal"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        <ProductGrid />
        
        {/* Trust Logos Section */}
        <section className="py-16 border-y border-zinc-100 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://dehermes.com/wp-content/uploads/2025/04/download-1.png" alt="IGS Specialist" className="h-16 object-contain" referrerPolicy="no-referrer" />
              <img src="https://dehermes.com/wp-content/uploads/2025/11/2025_JVC_MemberLogo-01-2-200x200-1.png" alt="JVC Member" className="h-16 object-contain" referrerPolicy="no-referrer" />
              <img src="https://dehermes.com/wp-content/uploads/2025/04/download.png" alt="IGS Pro" className="h-16 object-contain" referrerPolicy="no-referrer" />
              <img src="https://dehermes.com/wp-content/uploads/2025/05/MetalsDaily-Logo2.svg" alt="Metals Daily" className="h-16 object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        <AEOSection />

        {/* Newsletter Section */}
        <section className="py-24 bg-gold-light">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl text-navy mb-6">Join the Inner Circle</h2>
            <p className="text-zinc-600 mb-10">
              Receive exclusive access to new arrivals, private events, and expert jewelry insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="flex-grow bg-white border border-zinc-200 px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-navy transition-colors"
                required
              />
              <button className="bg-navy text-white px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
