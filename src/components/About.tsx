import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 glass-card p-4 flex flex-col items-center text-center">
            <div className="flex items-center gap-4 glass-card p-4 w-full">
              <div className="w-12 h-12 rounded-xl bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                <ShieldCheck size={28} />
              </div>
              <div className="text-left">
                <p className="font-bold">UI/UX Design</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cta-yellow/20 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://picsum.photos/seed/sig/100/100"
                alt="Signature"
                className="w-12 h-12 rounded-full border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold">Shreya</p>
                <p className="text-xs text-text-secondary">UI/UX Designer</p>
              </div>
            </div>
          </div>
          <p className="text-accent-blue font-inter font-bold mb-2 uppercase tracking-widest text-sm">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Designing delightful user experiences that truly work
          </h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            I'm a UI/UX designer focused on crafting clean, user-centric designs for web and mobile apps. 
            With a passion for usability and aesthetics, I help brands build intuitive and engaging digital products.
          </p>

          <div className="space-y-2 mb-6">
            {[
              "Expert in user-friendly interfaces",
              "Collaborative & Communicative"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-cta-yellow" />
                <span className="font-poppins-light font-light">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="glass-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-sm font-inter font-bold">Strategic Solutions</p>
                <p className="text-[10px] text-text-secondary">Business consulting consult us to provide expert advice.</p>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-sm font-inter font-bold">Profit Partners</p>
                <p className="text-[10px] text-text-secondary">Business consulting consult us to provide expert advice.</p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
