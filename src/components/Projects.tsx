import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Figma } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 'healthy-app',
    title: "Healthy – Food Delivery App",
    category: "UI/UX Design • Mobile App",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=800",
    link: "/case-study",
    designLink: "https://www.figma.com/design/5EAs40EgnU9z5pnDi7zq7F/Untitled?node-id=0-1&t=ttr4VtBzyK2qcXCV-1",
    protoLink: "https://www.figma.com/proto/5EAs40EgnU9z5pnDi7zq7F/Untitled?node-id=0-1&t=ACrxzGvKJypza6By-1",
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-blue font-inter font-bold mb-2 uppercase tracking-widest text-sm">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary max-w-md md:text-right"
          >
            A selection of my recent work, focusing on user-centric design and functional aesthetics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center glass-card p-6 md:p-10 overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />
              
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-accent-blue font-poppins-light font-light text-sm mb-2 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                  <p className="text-text-secondary leading-relaxed mt-4">
                    A clean, modern, and user-friendly food delivery mobile application that helps users easily discover and order healthy meals.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => navigate(project.link)}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-accent-blue hover:text-white transition-all"
                  >
                    View Case Study <ArrowRight size={18} />
                  </button>
                  
                  <a 
                    href={project.designLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
                  >
                    <Figma size={18} /> View Design
                  </a>

                  <a 
                    href={project.protoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
                  >
                    <Figma size={18} /> View Prototype
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
