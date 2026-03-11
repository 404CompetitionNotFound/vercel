import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at TechFlow",
    text: "Nova's ability to translate complex requirements into intuitive designs is unmatched. Our user engagement increased by 40% after the redesign.",
    image: "https://picsum.photos/seed/t1/100/100"
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager at Innovate",
    text: "Working with Nova was a breeze. The attention to detail and the futuristic aesthetic they brought to our app was exactly what we needed.",
    image: "https://picsum.photos/seed/t2/100/100"
  },
  {
    name: "Michael Chen",
    role: "Founder of GreenGrid",
    text: "The best UI/UX designer we've worked with. Professional, creative, and always on time. Highly recommended for any high-end project.",
    image: "https://picsum.photos/seed/t3/100/100"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-blue font-semibold mb-4 uppercase tracking-widest text-sm">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 relative group"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent-blue rounded-full flex items-center justify-center text-white shadow-lg">
                <Quote size={20} fill="currentColor" />
              </div>
              
              <p className="text-text-secondary italic mb-8 leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-12 h-12 rounded-full border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
