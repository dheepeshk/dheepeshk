import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { ExternalLink, Github, Search, Sparkles, AlertCircle, TrendingUp, X } from "lucide-react";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [activeDetailProject, setActiveDetailProject] = useState<Project | null>(null);

  // Gather unique tags
  const allTags = ["all", ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = selectedTag === "all" || p.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <section id="projects" className="py-18 md:py-20 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute right-0 top-[15%] w-80 h-80 bg-cyan-550/5 rounded-full filter blur-[90px]"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left" id="projects-heading">
          <div>
            <div className="inline-flex items-center space-x-2 text-emerald-450 font-mono text-xs tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Blueprint Showcase</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
              My Works & Labs
            </h2>
            <div className="h-1 w-20 bg-emerald-550 mt-4 rounded-full"></div>
          </div>

          <p className="max-w-sm text-zinc-460 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed font-sans font-normal">
            Clean client prototypes, scalable utilities, and research scripts solving real architectural blocks.
          </p>
        </div>

        {/* Searching & Tool Area */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-4 border-b border-zinc-900" id="projects-controls">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search specs, tech or titles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900/60 border border-zinc-850 rounded-xl py-2 pl-10 pr-4 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20"
            />
          </div>

        </div>

        {/* Project Tags Sub-Filters */}
        <div className="flex flex-wrap gap-1.5 mb-10 max-h-24 overflow-y-auto" id="projects-tag-filters">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-md text-[10px] font-mono font-medium uppercase tracking-wider cursor-pointer hover-pop-soft ${
                selectedTag === tag
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                  : "text-zinc-500 hover:text-zinc-350 bg-zinc-900/40 border border-transparent"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Output Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col h-full rounded-2xl bg-zinc-900/30 border border-zinc-855 hover:border-zinc-800 transition-all overflow-hidden relative hover-pop hover-pop-card"
              >
                {/* Visual Glass Header with Cover Image */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-95/40 to-transparent"></div>

                  {/* Highlights/Featured tag */}
                  {p.featured && (
                    <span className="absolute top-4 left-4 inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest font-semibold uppercase bg-emerald-500 text-zinc-950 shadow-md">
                      Featured Work
                    </span>
                  )}
                </div>

                {/* Card Core Content */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-sans font-bold text-white group-hover:text-emerald-350 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm block font-normal">
                      {p.description}
                    </p>
                  </div>

                  {/* Tech stack badging */}
                  <div className="flex flex-wrap gap-1">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[9px] font-mono text-zinc-500 bg-zinc-950 border border-zinc-850"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dual Bottom row actions */}
                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                    <button
                      onClick={() => setActiveDetailProject(p)}
                      className="text-[11px] font-mono font-bold tracking-wider text-emerald-400 hover:text-emerald-350 cursor-pointer"
                    >
                      [ DETAIL SPECS ]
                    </button>

                    <div className="flex space-x-4">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-zinc-950 border border-zinc-850 text-zinc-500 hover:text-white transition-all hover-pop-soft hover-pop-icon"
                          title="View Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-zinc-950 border border-zinc-850 text-zinc-500 hover:text-emerald-400 shortcut-link hover-pop-soft hover-pop-icon"
                          title="Launch Dynamic Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-zinc-500 border border-dashed border-zinc-800 rounded-3xl mt-6">
            <span>No project prototypes matched your active filters. Try refining your tags.</span>
          </div>
        )}

      </div>

      {/* Structured Specification Drawers Model */}
      <AnimatePresence>
        {activeDetailProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm" id="project-detail-modal">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden text-left"
            >
              {/* Cover visual Banner */}
              <div className="relative h-32 bg-zinc-950">
                <img
                  src={activeDetailProject.image}
                  alt={activeDetailProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-50"
                />
                <button
                  onClick={() => setActiveDetailProject(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-white hover-pop-soft hover-pop-icon"
                  title="Close Spec"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-lg font-sans font-bold text-white leading-tight">
                    {activeDetailProject.title}
                  </h4>
                </div>
              </div>

              {/* Specs parameters container */}
              <div className="p-6 space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 block uppercase">
                    Architecture overview
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-350 leading-relaxed font-normal">
                    {activeDetailProject.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-850 space-y-4">
                  <div className="flex items-start space-x-3.5">
                    <div className="p-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-455 mt-0.5">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase leading-none">Target Challenge / Friction:</span>
                      <p className="text-xs text-zinc-350 leading-relaxed font-sans">{activeDetailProject.problem}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="p-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-455 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase leading-none">System Impact & Metric:</span>
                      <p className="text-xs text-zinc-350 leading-relaxed font-sans">{activeDetailProject.impact}</p>
                    </div>
                  </div>
                </div>

                {/* CTA rows inside drawer */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {activeDetailProject.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[9px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-850"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2 pl-3">
                    {activeDetailProject.github && (
                      <a
                        href={activeDetailProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover-pop-soft hover-pop-button"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repo</span>
                      </a>
                    )}
                    {activeDetailProject.link && (
                      <a
                        href={activeDetailProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 text-zinc-950 font-bold hover-pop hover-pop-button"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
