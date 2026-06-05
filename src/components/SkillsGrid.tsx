import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Skill } from "../types";
import { Settings, Code, BrainCircuit, Users, MessageSquare, Zap } from "lucide-react";

interface SkillsGridProps {
  skills: Skill[];
}

const getSkillMark = (skillName: string) => {
  const compactName = skillName.replace(/[^A-Za-z0-9+]/g, "");
  if (compactName.length > 0 && compactName.length <= 4) {
    return compactName.toUpperCase();
  }

  const initials = skillName
    .split(/[^A-Za-z0-9+]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return initials || skillName.slice(0, 2).toUpperCase();
};

const categoryAccent: Record<Skill["category"], string> = {
  technical: "from-cyan-400/20 via-emerald-400/15 to-cyan-400/5 border-emerald-500/20",
  creative: "from-orange-400/20 via-amber-300/15 to-orange-400/5 border-orange-400/20",
  leadership: "from-sky-400/20 via-indigo-400/15 to-sky-400/5 border-sky-400/20",
  communication: "from-teal-400/20 via-lime-300/15 to-teal-400/5 border-teal-400/20",
  tools: "from-fuchsia-400/20 via-pink-400/15 to-fuchsia-400/5 border-fuchsia-400/20"
};

export default function SkillsGrid({ skills }: SkillsGridProps) {
  const [activeTab, setActiveTab] = useState<"technical" | "creative" | "leadership" | "communication" | "tools">("technical");

  const tabs = [
    { value: "technical", label: "Technical Skills", icon: <Code className="w-4 h-4" /> },
    { value: "creative", label: "Creative Skills", icon: <BrainCircuit className="w-4 h-4" /> },
    { value: "leadership", label: "Leadership Core", icon: <Users className="w-4 h-4" /> },
    { value: "communication", label: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
    { value: "tools", label: "Tools & Apps", icon: <Settings className="w-4 h-4" /> }
  ] as const;

  const currentSkills = skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-18 md:py-20 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left" id="skills-title">
          <div>
            <div className="inline-flex items-center space-x-2 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Skill Matrix Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
              My Skills & Competencies
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full"></div>
          </div>
          <p className="max-w-xs text-zinc-460 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed font-sans font-normal">
            A comprehensive visual index charting technical literacy, creative versatility, and teamwork systems.
          </p>
        </div>

        {/* Tab Controls Navigation */}
        <div className="flex flex-wrap items-center gap-1 mb-10 border-b border-zinc-850 pb-2" id="skills-tabs">
          <div className="flex flex-wrap items-center gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer hover-pop-soft ${
                    isActive
                      ? "bg-zinc-900 text-emerald-400 border border-zinc-800 shadow-md shadow-emerald-500/5"
                      : "text-zinc-500 hover:text-zinc-350 bg-transparent border border-transparent"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Layout Grid container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5" id="skills-list">
          <AnimatePresence mode="popLayout">
            {currentSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`rounded-2xl border bg-gradient-to-br ${categoryAccent[skill.category]} p-4 md:p-5 transition-all shadow-inner hover:border-zinc-700/80 hover-pop hover-pop-card`}
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/70 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
                    {getSkillMark(skill.name)}
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">
                      {tabs.find((tab) => tab.value === skill.category)?.label}
                    </span>
                    <span className="block text-sm md:text-base font-semibold leading-snug text-zinc-100">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
