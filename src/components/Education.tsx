import React from "react";
import { GraduationCap, BookOpen, Star, Sparkles } from "lucide-react";

interface EducationProps {
  education: {
    institution: string;
    degree: string;
    department: string;
    period: string;
    gpa: string;
    highlights: string[];
    interests: string[];
  };
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-18 md:py-20 bg-zinc-950 relative border-t border-zinc-900">
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-teal-500/5 rounded-full filter blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-12 text-left" id="education-heading">
          <div className="inline-flex items-center space-x-2 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Anchorage</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            Academic Background
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full"></div>
        </div>

        {/* Structured Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch" id="education-grid">
          
          {/* Institution card & GPA badge */}
          <div className="lg:col-span-2 p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 transition-all flex flex-col justify-between relative group hover-pop hover-pop-card">
            {/* Top glass lighting */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                ACTIVE UNDERGRADUATE PERIOD
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-sans font-bold text-white group-hover:text-emerald-350 transition-colors">
                  {education.institution}
                </h3>
                <p className="text-xs font-mono text-zinc-450 mt-1 block">
                  {education.period}
                </p>
              </div>

              <div className="space-y-1 pt-2">
                <div className="text-xs text-zinc-400 font-sans font-semibold">
                  Course of Studies
                </div>
                <div className="text-sm font-semibold text-zinc-200">
                  {education.degree} — {education.department}
                </div>
              </div>
            </div>

            {/* GPA Callout box */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-850 shadow-inner mt-8 relative z-10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 block uppercase">
                  Current Cumulative GPA
                </span>
                <span className="text-lg font-sans font-extrabold text-white">
                  {education.gpa}
                </span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Highlights & Core Electives Area */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            
            {/* Academic Highlights */}
            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-855 shadow-sm space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase border-b border-zinc-850 pb-2.5 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Academic Milestones & Highlights</span>
              </h4>
              
              <ul className="space-y-3">
                {education.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-350 leading-relaxed">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Structured Academic Interest Pills */}
            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-855 shadow-sm space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase border-b border-zinc-850 pb-2.5 flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Primary Scholarly Focus & Interests</span>
              </h4>

              <div className="flex flex-wrap gap-2 pt-2">
                {education.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-emerald-350 bg-emerald-500/5 border border-emerald-500/20 shadow-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
