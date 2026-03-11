import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Figma, Clock, User, Layout, Smartphone, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CaseStudy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg min-h-screen text-text-primary font-sans selection:bg-accent-blue/30 pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Main Page
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-accent-blue font-semibold mb-4 uppercase tracking-widest text-sm">Case Study</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Healthy – <span className="gradient-text">Food Delivery</span> App
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed mb-8">
            A clean, modern, and user-friendly mobile application designed to help users discover and order healthy meals effortlessly.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://www.figma.com/proto/5EAs40EgnU9z5pnDi7zq7F/Untitled?node-id=0-1&t=ACrxzGvKJypza6By-1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full font-bold text-sm hover:bg-white/10 transition-colors"
            >
              <Figma size={18} className="text-accent-purple" />
              View Figma Prototype
            </motion.a>
            <motion.a
              href="https://www.figma.com/design/5EAs40EgnU9z5pnDi7zq7F/Untitled?node-id=0-1&t=ttr4VtBzyK2qcXCV-1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full font-bold text-sm hover:bg-white/10 transition-colors"
            >
              <Figma size={18} className="text-accent-blue" />
              View Figma Design
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=2000" 
            alt="Healthy Food Delivery App"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* Project Overview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: 'Role', value: 'UI/UX Designer', icon: <User size={18} /> },
            { label: 'Tools', value: 'Figma', icon: <Figma size={18} /> },
            { label: 'Type', value: 'Mobile App', icon: <Smartphone size={18} /> },
            { label: 'Duration', value: '3 Days', icon: <Clock size={18} /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass-card p-6 flex flex-col gap-3"
            >
              <div className="text-accent-blue">{item.icon}</div>
              <div>
                <p className="text-[10px] text-text-secondary uppercase tracking-widest mb-1">{item.label}</p>
                <p className="font-bold text-sm">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-20">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-accent-blue rounded-full" />
              Project Overview
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              This project focuses on designing a clean, modern, and user-friendly food delivery mobile application that helps users easily discover and order healthy meals from nearby restaurants. The goal was to create an interface that is simple, visually appealing, and optimized for a smooth user experience.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="glass-card p-8 md:p-12 border-l-4 border-l-accent-purple">
            <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
            <p className="text-text-secondary leading-relaxed text-lg mb-8">
              Many existing food delivery apps have complex interfaces and cluttered layouts, making it difficult for users to quickly find healthy meal options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Too many choices on the screen",
                "Complicated checkout processes",
                "Poor navigation between sections"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-accent-purple shrink-0" />
                  <p className="text-sm font-medium">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Goals & Users */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">Project Goal</h2>
              <ul className="space-y-4">
                {[
                  "Create a clean and intuitive UI",
                  "Improve navigation and usability",
                  "Make discovering healthy food quick and simple",
                  "Provide a smooth ordering experience"
                ].map((goal, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle2 size={20} className="text-green-500" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-3xl font-bold mb-6">Target Users</h2>
              <div className="flex flex-wrap gap-3">
                {["Students", "Young professionals", "Fitness enthusiasts", "Health-conscious users"].map((user, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">
                    {user}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-blue">User Needs</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Quick discovery", "Simple ordering", "Clear tracking", "Easy payment"].map((need, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                      <Zap size={12} className="text-cta-yellow" />
                      {need}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* User Flow */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-12">User Flow</h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                "Open App", "Browse", "Select Meal", "Add to Cart", "Checkout", "Payment", "Track", "Receive"
              ].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <div className="px-6 py-3 bg-card border border-white/10 rounded-xl font-bold text-sm">
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight size={20} className="text-text-secondary hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* Design System */}
          <section>
            <h2 className="text-3xl font-bold mb-12">Design System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Color Palette</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Primary Green', hex: '#22C55E', desc: 'Freshness & Health' },
                    { name: 'Accent Orange', hex: '#F97316', desc: 'Call to Action' },
                    { name: 'Mint', hex: '#AAF0D1', desc: 'Cool & Refreshing' },
                    { name: 'Deep Green', hex: '#004D40', desc: 'Nature & Stability' },
                    { name: 'Neutral White', hex: '#FFFFFF', desc: 'Readability' },
                  ].map((color, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl border border-white/10" style={{ backgroundColor: color.hex }} />
                      <div>
                        <p className="font-bold text-sm">{color.name}</p>
                        <p className="text-xs text-text-secondary">{color.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">Typography</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">Heading</p>
                    <p className="text-3xl font-bold">Space Grotesk Bold</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">Body Text</p>
                    <p className="text-lg">Inter Regular - Optimized for readability</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">Accent Font</p>
                    <p className="text-3xl font-satoshi font-bold">Satoshi Bold</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 p-12 rounded-3xl text-center border border-white/10">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="text-text-secondary leading-relaxed text-lg max-w-2xl mx-auto mb-8">
              The Healthy Food Delivery App was designed to provide a simple and enjoyable food ordering experience. By focusing on usability, clean layout, and intuitive navigation, the design aims to make discovering and ordering healthy food quick and convenient for users.
            </p>
            <button 
              onClick={() => navigate('/')}
              className="btn-primary mx-auto"
            >
              Back to Main Page
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
