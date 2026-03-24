/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ArrowRight, CheckCircle2, ChevronRight, ChevronDown, Menu, X } from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const Noise = () => (
  <div 
    className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.04] mix-blend-overlay" 
    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-ink/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-display font-bold text-xl tracking-tighter uppercase flex items-center gap-2">
          <div className="w-3 h-3 bg-brand rounded-full animate-pulse" />
          A Bot Production
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="px-5 py-2.5 bg-white text-ink hover:bg-zinc-200 transition-colors rounded-full font-semibold">
            Start Project
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/80 to-ink z-10" />
        <img 
          src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=3542&auto=format&fit=crop" 
          alt="Cinematic Set" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-brand" />
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-300">Global Production House</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-display font-bold leading-[0.85] tracking-tighter mb-8 uppercase">
            Defy the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Ordinary.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 font-light leading-relaxed">
            We engineer visual masterpieces for brands that refuse to blend in. Global production, unmatched precision, cinematic execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-brand text-white rounded-full font-semibold uppercase tracking-wide hover:bg-brand-hover transition-all">
              Discuss Your Vision
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-semibold uppercase tracking-wide hover:bg-zinc-800 transition-all">
              <Play className="w-5 h-5 fill-current" />
              View Showreel
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    { title: "Neon Horizon", client: "TechNova", category: "Commercial", image: "https://images.unsplash.com/photo-1535016120720-40c746a6580c?q=80&w=3400&auto=format&fit=crop" },
    { title: "Echoes of Time", client: "Aura Watch Co.", category: "3D Animation", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=3464&auto=format&fit=crop" },
    { title: "The Catalyst", client: "Apex Athletics", category: "Brand Doc", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=3540&auto=format&fit=crop" }
  ];

  return (
    <section id="work" className="py-32 bg-ink relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">Selected Work</h2>
            <p className="text-zinc-400 text-lg">We don't just make videos; we solve business problems through cinematic storytelling. Explore our case studies to see how we turn creative vision into measurable ROI.</p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors">
            View All Projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-6 bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand/90 flex items-center justify-center backdrop-blur-sm transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-1">{project.title}</h3>
                  <p className="text-zinc-500 text-sm">{project.client}</p>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 border border-zinc-800 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "High-End Commercials",
      feature: "8K Cinema Cameras & Elite Crew",
      benefit: "Broadcast-ready quality that elevates brand perception.",
      meaning: "You don't just look like a player; you look like the industry leader."
    },
    {
      title: "3D Animation & VFX",
      feature: "Photorealistic rendering and physics simulations.",
      benefit: "Impossible visuals brought to life without physical constraints.",
      meaning: "Your imagination is the only limit to your marketing."
    },
    {
      title: "Brand Documentaries",
      feature: "Intimate, narrative-driven storytelling.",
      benefit: "Builds deep emotional connections with your audience.",
      meaning: "Customers buy into your 'why', creating lifelong loyalty."
    }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">Capabilities</h2>
            <p className="text-zinc-400 text-lg mb-12">We bridge the gap between disruptive creative and flawless technical execution.</p>
            
            <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
              <h4 className="font-display font-bold uppercase tracking-wide mb-6 text-sm text-zinc-300">Overcoming Objections</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  <div>
                    <strong className="block text-sm text-white">Budget Transparency</strong>
                    <span className="text-xs text-zinc-500">No hidden fees. Flat-rate project pricing.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  <div>
                    <strong className="block text-sm text-white">Agile Timelines</strong>
                    <span className="text-xs text-zinc-500">Streamlined post-production for faster delivery.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  <div>
                    <strong className="block text-sm text-white">Collaborative Control</strong>
                    <span className="text-xs text-zinc-500">Iterative review cycles ensure your vision is met.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-6">
            {services.map((service, i) => (
              <div key={i} className="group p-8 md:p-10 bg-ink border border-zinc-800 hover:border-zinc-600 transition-colors rounded-2xl">
                <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-6 group-hover:text-brand transition-colors">{service.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">Feature</span>
                    <p className="text-sm text-zinc-300">{service.feature}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">Benefit</span>
                    <p className="text-sm text-zinc-300">{service.benefit}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand block mb-2">Meaning</span>
                    <p className="text-sm text-white font-medium">{service.meaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
              We Architect <br/><span className="text-zinc-600">Emotions.</span>
            </h2>
            <div className="prose prose-invert prose-lg text-zinc-400">
              <p className="font-medium text-white text-xl leading-relaxed">
                We don't just press record. In a world of endless scrolling, we create the moments that make them stop, stare, and act.
              </p>
              <p>
                A Bot Production was founded on a simple premise: premium visuals should drive premium results. We are a collective of filmmakers, strategists, and technologists who believe that every frame must serve a purpose.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-sm font-mono uppercase tracking-widest text-brand mb-8">The A Bot Difference</h3>
            
            <div className="flex gap-6">
              <div className="text-4xl font-display font-bold text-zinc-800">01</div>
              <div>
                <h4 className="text-xl font-bold uppercase tracking-wide mb-2">Zero-Friction Production</h4>
                <p className="text-zinc-400">We handle the chaos so you don't have to. From permitting to post-production, our process is invisible to you.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="text-4xl font-display font-bold text-zinc-800">02</div>
              <div>
                <h4 className="text-xl font-bold uppercase tracking-wide mb-2">Conversion-Obsessed</h4>
                <p className="text-zinc-400">Beautiful visuals mean nothing if they don't drive ROI. Every creative decision is backed by strategy.</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="text-4xl font-display font-bold text-zinc-800">03</div>
              <div>
                <h4 className="text-xl font-bold uppercase tracking-wide mb-2">Global Talent Network</h4>
                <p className="text-zinc-400">We assemble the perfect bespoke team for every unique brief, scaling up or down as your project demands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-brand text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
              Ready to <br/>Disrupt?
            </h2>
            <p className="text-xl opacity-90 mb-12 max-w-md font-light">
              Don't settle for industry standard. Tell us about your vision, and we'll show you how to make it unforgettable.
            </p>
            
            <div className="space-y-6 opacity-80">
              <p className="flex items-center gap-4 uppercase tracking-wider text-sm font-bold">
                <span className="w-8 h-[1px] bg-white/50" /> Global Operations
              </p>
              <p className="flex items-center gap-4 uppercase tracking-wider text-sm font-bold">
                <span className="w-8 h-[1px] bg-white/50" /> Response within 24h
              </p>
            </div>
          </div>
          
          <div className="bg-ink p-8 md:p-12 rounded-3xl shadow-2xl">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="name" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-brand transition-colors peer placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 top-3 text-zinc-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Full Name</label>
                </div>
                <div className="relative">
                  <input type="text" id="company" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-brand transition-colors peer placeholder-transparent" placeholder="Company" />
                  <label htmlFor="company" className="absolute left-0 top-3 text-zinc-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Company</label>
                </div>
              </div>
              
              <div className="relative">
                <input type="email" id="email" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-brand transition-colors peer placeholder-transparent" placeholder="Email" />
                <label htmlFor="email" className="absolute left-0 top-3 text-zinc-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Work Email</label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-brand transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected className="text-zinc-500 bg-ink">Project Type</option>
                    <option value="commercial" className="bg-ink">Commercial</option>
                    <option value="3d" className="bg-ink">3D Animation</option>
                    <option value="doc" className="bg-ink">Brand Documentary</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-4 w-4 h-4 text-zinc-500 pointer-events-none" />
                </div>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-brand transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected className="text-zinc-500 bg-ink">Estimated Budget</option>
                    <option value="10-25" className="bg-ink">$10k - $25k</option>
                    <option value="25-50" className="bg-ink">$25k - $50k</option>
                    <option value="50+" className="bg-ink">$50k+</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-4 w-4 h-4 text-zinc-500 pointer-events-none" />
                </div>
              </div>
              
              <div className="relative">
                <textarea id="challenge" rows={3} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-brand transition-colors peer placeholder-transparent resize-none" placeholder="Challenge"></textarea>
                <label htmlFor="challenge" className="absolute left-0 top-3 text-zinc-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">What is the core challenge we are solving?</label>
              </div>
              
              <button className="w-full py-4 bg-white text-ink font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-lg mt-4">
                Request Project Discovery
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-ink py-12 border-t border-zinc-900 text-center md:text-left">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="font-display font-bold text-xl tracking-tighter uppercase flex items-center gap-2">
        <div className="w-3 h-3 bg-brand rounded-full" />
        A Bot Production
      </div>
      <div className="text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} A Bot Production. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-ink selection:bg-brand selection:text-white">
      <Noise />
      <Navbar />
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

