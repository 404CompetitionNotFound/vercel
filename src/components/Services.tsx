import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layout, Smartphone, Search, RefreshCcw, Globe } from 'lucide-react';

const services = [
  {
    icon: <Layout className="text-cta-yellow" size={32} />,
    title: "Website UI Design",
    desc: "Responsive, user-centric website interfaces that reflect your brand and convert visitors into customers.",
    color: "border-cta-yellow/20 hover:bg-cta-yellow/5"
  },
  {
    icon: <Smartphone className="text-orange-500" size={32} />,
    title: "Mobile App UI/UX Design",
    desc: "Modern and interactive designs for iOS and Android apps focused on seamless user experiences.",
    color: "border-orange-500/20 hover:bg-orange-500/5"
  },
  {
    icon: <RefreshCcw className="text-green-500" size={32} />,
    title: "UI/UX Redesign",
    desc: "Revamping outdated or underperforming designs into functional, trendy, and user-friendly interfaces.",
    color: "border-green-500/20 hover:bg-green-500/5"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full glow-blue opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center mb-8">
        <p className="text-accent-blue font-semibold mb-2 uppercase tracking-widest text-sm">My Services</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Offer</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          I design user-centered digital experiences that are not only visually appealing but also effective in achieving your business goals.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass-card p-8 flex flex-col items-center text-center group transition-all duration-500 border-2 ${service.color}`}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-sm text-text-secondary mb-8 leading-relaxed">
              {service.desc}
            </p>
            <button className="mt-auto flex items-center gap-2 text-sm font-bold hover:text-accent-blue transition-colors">
              Let's Work <ExternalLink size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
