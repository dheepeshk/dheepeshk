import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Skill } from "../types";
import { Settings, Sparkles, Code, BrainCircuit, Users, MessageSquare, Zap } from "lucide-react";

interface SkillsGridProps {
  skills: Skill[];
  onAddNewSkill: (newSkill: Skill) => void;
  onUpdateSkillLevel: (skillName: string, level: number) => void;
}

export default function SkillsGrid({ skills, onAddNewSkill, onUpdateSkillLevel }: SkillsGridProps) {
  const [activeTab, setActiveTab] = useState<"technical" | "creative" | "leadership" | "communication" | "tools">("technical");
  const [showAddForm, setShowAddForm] = useState(false);
  
  // States for adding a new custom skill live in GUI
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillCategory, setNewSkillCategory] = useState<"technical" | "creative" | "leadership" | "communication" | "tools">("technical");
  const [newSkillLevel, setNewSkillLevel] = useState(80);

  const tabs = [
    { value: "technical", label: "Technical Skills", icon: <Code className="w-4 h-4" /> },
    { value: "creative", label: "Creative Skills", icon: <BrainCircuit className="w-4 h-4" /> },
    { value: "leadership", label: "Leadership Core", icon: <Users className="w-4 h-4" /> },
    { value: "communication", label: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
    { value: "tools", label: "Tools & Apps", icon: <Settings className="w-4 h-4" /> }
  ] as const;

  const currentSkills = skills.filter((s) => s.category === activeTab);

  const handleCreateSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    onAddNewSkill({
      name: newSkillName.trim(),
      level: Number(newSkillLevel),
      category: newSkillCategory
    });
    setNewSkillName("");
    setShowAddForm(false);
  };

  return (
    <section id="skills" className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left" id="skills-title">
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
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-zinc-850 pb-2" id="skills-tabs">
          <div className="flex flex-wrap items-center gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
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

          <button
            onClick={() => {
              setNewSkillCategory(activeTab);
              setShowAddForm(!showAddForm);
            }}
            className="px-3 py-1.5 rounded-lg text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all cursor-pointer"
            id="open-add-skill-form-btn"
          >
            {showAddForm ? "Close Drawer" : "+ Add Live Custom Skill"}
          </button>
        </div>

        {/* Add Skill Form (Drawer style) */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-8"
              id="skill-adder-form"
            >
              <form onSubmit={handleCreateSkill} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-855 flex flex-wrap items-end gap-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-[11px] font-mono text-zinc-500 mb-1.5 uppercase font-medium">Skill Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Next.js App Routing, Color Grading"
                    value={newSkillName}
                    onChange={(e) => setNewSkillName(e.target.value)}
                    className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="min-w-[150px]">
                  <label className="block text-[11px] font-mono text-zinc-500 mb-1.5 uppercase font-medium">Category</label>
                  <select
                    value={newSkillCategory}
                    onChange={(e) => setNewSkillCategory(e.target.value as any)}
                    className="w-full text-xs text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="technical">Technical</option>
                    <option value="creative">Creative</option>
                    <option value="leadership">Leadership Core</option>
                    <option value="communication">Communication</option>
                    <option value="tools">Tools & Apps</option>
                  </select>
                </div>

                <div className="min-w-[150px]">
                  <label className="block text-[11px] font-mono text-zinc-500 mb-1.5 uppercase font-medium">Proficiency Level ({newSkillLevel}%)</label>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={newSkillLevel}
                    onChange={(e) => setNewSkillLevel(Number(e.target.value))}
                    className="w-full text-xs accent-emerald-500 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  Save and Test
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Layout Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="skills-list">
          <AnimatePresence mode="popLayout">
            {currentSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-855 hover:border-zinc-800 transition-all flex flex-col space-y-3 shadow-inner relative group"
              >
                {/* Title & Static/Editable Slider */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-450"></span>
                    <span className="text-sm font-sans font-semibold text-zinc-200">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400">{skill.level}%</span>
                </div>

                {/* Progress Visualizer */}
                <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                {/* Dynamic Proficiency tuner handles */}
                <div className="flex items-center justify-between pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest leading-none">
                    Fine-tune live:
                  </span>
                  <div className="flex items-center space-x-1.5">
                    {[60, 75, 90, 100].map((level) => (
                      <button
                        key={level}
                        onClick={() => onUpdateSkillLevel(skill.name, level)}
                        className={`px-1.5 py-0.5 rounded text-[8px] font-mono border ${
                          skill.level === level
                            ? "bg-emerald-500/10 text-emerald-450 border-emerald-500/30"
                            : "text-zinc-500 bg-zinc-900 border-zinc-800/60 hover:text-zinc-300"
                        }`}
                      >
                        {level}%
                      </button>
                    ))}
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
