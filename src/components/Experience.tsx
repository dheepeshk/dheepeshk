import React from "react";
import { Experience } from "../types";
import { Briefcase, Building, ChevronRight, Bookmark } from "lucide-react";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-18 md:py-20 bg-zinc-950 relative border-t border-zinc-900">
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-[100px]"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left" id="experience-heading">
          <div>
            <div className="inline-flex items-center space-x-2 text-emerald-450 font-mono text-xs tracking-wider uppercase mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Real World Operations</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
              Experience & Responsibilities
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full"></div>
          </div>

          <p className="max-w-xs text-zinc-460 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed font-sans font-normal">
            Roles and responsibilities listed in the resume.
          </p>
        </div>

        {/* Timeline Stack list */}
        <div className="space-y-8" id="experience-stack">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-855 hover:border-zinc-800 transition-all shadow-sm group hover-pop hover-pop-card"
            >
              
              {/* Header section (Role, Company, duration) */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-zinc-850 pb-4 mb-4">
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] font-mono font-medium tracking-wider text-emerald-400 bg-emerald-500/5 px-2.5 py-0.5 rounded-md uppercase">
                      {exp.type === "internship" ? "Academic Internship" : "Leadership Role"}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-xl font-sans font-bold text-white group-hover:text-emerald-350 transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex items-center space-x-2 text-xs text-zinc-400">
                    <Building className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="font-semibold">{exp.organization}</span>
                  </div>
                </div>

                {exp.period && (
                  <div className="text-right md:pt-1">
                    <span className="inline-block text-xs font-mono text-zinc-450 bg-zinc-950 border border-zinc-850 px-3 py-1 rounded-lg">
                      {exp.period}
                    </span>
                  </div>
                )}
              </div>

              {/* Core Description Points list */}
              {exp.points.length > 0 && (
                <div className="space-y-3.5">
                  <h4 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                    Listed responsibilities:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-zinc-350 leading-relaxed font-normal">
                        <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills learned sub-indicators */}
              {exp.skillsLearned && exp.skillsLearned.length > 0 && (
                <div className="pt-6 mt-6 border-t border-zinc-850/60 flex flex-wrap items-center gap-2">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mr-2">
                    Gained Mastery In:
                  </span>
                  {exp.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-[10px] font-mono text-zinc-450 bg-zinc-950 border border-zinc-850"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
