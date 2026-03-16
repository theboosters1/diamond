import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do I know my diamond is natural?",
    answer: "At DeHermes, all our natural diamonds come with GIA or IGS certification. We use advanced spectroscopic equipment to verify the natural origin of every stone we sell."
  },
  {
    question: "What is included in a jewelry appraisal?",
    answer: "A professional appraisal includes a detailed description of the item, metal purity testing, gemstone identification, weight estimation, and a current market valuation for insurance or estate purposes."
  },
  {
    question: "Do you buy gold and estate jewelry?",
    answer: "Yes, we are licensed buyers of gold, silver, platinum, and high-end estate jewelry. We offer competitive market rates based on daily spot prices."
  },
  {
    question: "Can I customize a ring design?",
    answer: "Absolutely. We specialize in custom jewelry design. Our master jewelers can work with you to create a unique piece from scratch or remount your existing stones into a new design."
  }
];

export default function AEOSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-navy mb-4">Expert Guidance</h2>
          <p className="text-zinc-500">Common questions about diamonds, appraisals, and our services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group border border-zinc-100 rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-zinc-50/50 hover:bg-zinc-50 transition-colors list-none">
                <span className="font-medium text-navy">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 text-zinc-600 leading-relaxed border-t border-zinc-100">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Structured Data for AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </div>
    </section>
  );
}
