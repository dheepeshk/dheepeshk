import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Award, Github, Linkedin, Briefcase, Zap } from "lucide-react";

interface HeroProps {
  name: string;
  tagline: string;
  subTaglines: string[];
  intro: string;
  github: string;
  linkedin: string;
  hasJourney: boolean;
  hasProjects: boolean;
}

export default function Hero({ name, tagline, subTaglines, intro, github, linkedin, hasJourney, hasProjects }: HeroProps) {
  
  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-zinc-950 overflow-hidden pt-24 px-4 md:px-8 pb-10"
    >
      {/* Dynamic Futuristic Grid / Glow Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        {/* Soft elegant glowing overlays */}
        <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[450px] h-[450px] bg-indigo-500/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute top-[40%] left-[45%] w-80 h-80 bg-teal-500/10 rounded-full filter blur-[90px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-8" id="hero-content">
        {/* Digital Badge Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm shadow-inner"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-emerald-350 uppercase">
            Resume-aligned profile
          </span>
        </motion.div>

        {/* Super Title / Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-bold tracking-tight text-white mb-2 leading-none">
            {name}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {subTaglines.map((sub, idx) => (
              <span 
                key={idx}
                className="px-3.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-350 shadow-sm"
              >
                {sub}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Core Tagline statement */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-indigo-300 max-w-4xl tracking-tight leading-snug"
        >
          {tagline}
        </motion.h2>

        {/* Short Personal Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl px-4 font-normal leading-relaxed"
        >
          {intro}
        </motion.p>

        {/* Interactive Social + CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4 px-4 w-full"
          id="hero-actions"
        >
          {hasJourney && (
            <button
              onClick={() => handleScrollTo("journey")}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 active:scale-95 transition-all shadow-md shadow-emerald-500/10 cursor-pointer hover-pop hover-pop-button"
            >
              <span>View My Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {(hasProjects || subTaglines.length > 0) && (
            <button
              onClick={() => handleScrollTo(hasProjects ? "projects" : "skills")}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-850 hover:text-white border border-zinc-800 hover:border-zinc-700 active:scale-95 transition-all cursor-pointer shadow-sm hover-pop hover-pop-button"
            >
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>{hasProjects ? "Explore Projects" : "View Skills"}</span>
            </button>
          )}

          <button
            onClick={() => handleScrollTo("contact")}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-400 bg-transparent hover:text-white border border-transparent hover:border-zinc-800 transition-all cursor-pointer hover-pop-soft"
          >
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Social Icons Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center space-x-6 pt-4"
        >
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all active:scale-90 hover-pop-soft hover-pop-icon"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-emerald-400 hover:border-zinc-700 transition-all active:scale-90 hover-pop-soft hover-pop-icon"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          <div className="h-4 w-px bg-zinc-800"></div>
          <div className="flex items-center space-x-2 text-[11px] font-mono text-zinc-500">
            <Zap className="w-3.5 h-3.5 text-emerald-500 animate-bounce" />
            <span>Built with React + Vite</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Sparkle Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-zinc-500 cursor-pointer opacity-80 hover:opacity-100 transition-opacity hover-pop-soft" onClick={() => handleScrollTo("about")}>
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
