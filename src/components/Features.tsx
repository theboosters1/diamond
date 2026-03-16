import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Gem, Clock } from 'lucide-react';

const features = [
  {
    icon: <Gem className="w-8 h-8" />,
    title: "Natural Diamonds",
    description: "Every stone is hand-selected for its unique character and brilliance, ethically sourced and certified."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Expert Appraisals",
    description: "IGS certified specialists providing accurate valuations for insurance, estate, and resale purposes."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Secure Transactions",
    description: "A private and secure environment for buying and selling high-value jewelry and precious metals."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Legacy of Trust",
    description: "Serving the community since 1977 with transparency, integrity, and unmatched jewelry expertise."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6 text-navy group-hover:text-gold transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl mb-4 text-navy">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
