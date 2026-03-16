import React from 'react';
import { motion } from 'motion/react';
import { Heart, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Classic Solitaire Ring",
    category: "Engagement",
    price: "$4,200",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sapphire Halo Pendant",
    category: "Necklaces",
    price: "$2,850",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emerald Cut Diamond",
    category: "Loose Stones",
    price: "$12,400",
    image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Vintage Gold Band",
    category: "Rings",
    price: "$1,150",
    image: "https://images.unsplash.com/photo-1603561591411-071c4f723918?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold mb-4 block">Curated Selection</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy">Bestselling Pieces</h2>
          </div>
          <a href="#" className="text-xs uppercase tracking-widest font-bold border-b border-navy pb-1 hover:text-gold hover:border-gold transition-all">
            View All Collections
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="group bg-white p-4 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden mb-6 bg-zinc-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-colors">
                    <Eye size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2 block">{product.category}</span>
                <h3 className="font-serif text-lg text-navy mb-2">{product.name}</h3>
                <p className="text-gold font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
