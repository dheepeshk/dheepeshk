import React, { useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { PortfolioData } from "../data";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  portfolio: PortfolioData;
}

export default function ResumeViewer({ isOpen, onClose, portfolio }: ResumeViewerProps) {
  const printAreaRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const skillGroups = [
    { label: "Engineering", items: portfolio.skills.filter((skill) => skill.category === "technical").slice(0, 6) },
    { label: "Design & Media", items: portfolio.skills.filter((skill) => skill.category === "creative").slice(0, 4) },
    { label: "Communication", items: portfolio.skills.filter((skill) => skill.category === "communication").slice(0, 4) },
    { label: "Tools", items: portfolio.skills.filter((skill) => skill.category === "tools").slice(0, 5) },
  ].filter((group) => group.items.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md overflow-hidden" id="resume-workspace">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="w-full max-w-4xl h-[90vh] rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-col justify-between overflow-hidden text-left"
          >
            <div className="px-6 py-4 border-b border-zinc-850 flex items-center justify-between bg-zinc-900/60 z-10">
              <div className="space-y-0.5">
                <h3 className="text-base sm:text-lg font-sans font-extrabold text-white">
                  Resume Preview
                </h3>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  Preview and export a printable resume
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-750 text-zinc-200 border border-zinc-700 hover:border-zinc-650 transition-all cursor-pointer active:scale-95"
                  title="Open print dialog"
                  id="print-resume-btn"
                >
                  <Printer className="w-3.5 h-3.5 text-emerald-450" />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-zinc-800 border border-zinc-750 text-zinc-400 hover:text-white hover:border-zinc-700"
                  title="Close Resume Preview"
                  id="close-resume-btn"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-zinc-950/40" id="printable-resume-scrollarea">
              <div
                ref={printAreaRef}
                className="print-section p-6 md:p-10 rounded-xl bg-white text-zinc-900 shadow-xl max-w-3xl mx-auto font-sans text-xs border border-zinc-200 leading-normal"
                id="resume-print-node"
              >
                <style dangerouslySetInnerHTML={{ __html: `
                  @media print {
                    body * {
                      visibility: hidden !important;
                    }
                    .print-section, .print-section * {
                      visibility: visible !important;
                    }
                    .print-section {
                      position: absolute !important;
                      left: 0 !important;
                      top: 0 !important;
                      width: 100% !important;
                      background: white !important;
                      color: black !important;
                      padding: 15px !important;
                      border: none !important;
                      box-shadow: none !important;
                    }
                  }
                ` }} />

                <div className="border-b-2 border-zinc-900 pb-5 mb-5 flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 uppercase">
                      {portfolio.personal.name}
                    </h1>
                    <p className="text-xs font-mono font-bold text-zinc-600 tracking-wider">
                      {portfolio.personal.tagline}
                    </p>
                  </div>

                  <div className="text-left md:text-right space-y-1 text-[10px] font-mono text-zinc-600">
                    <div className="flex items-center md:justify-end gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{portfolio.personal.email}</span>
                    </div>
                    {portfolio.personal.secondaryEmail && (
                      <div className="flex items-center md:justify-end gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{portfolio.personal.secondaryEmail}</span>
                      </div>
                    )}
                    <div className="flex items-center md:justify-end gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{portfolio.personal.phone}</span>
                    </div>
                    {portfolio.personal.address && (
                      <div className="flex items-center md:justify-end gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{portfolio.personal.address}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 space-y-6 border-r-0 md:border-r border-zinc-200 md:pr-4">
                    <div className="space-y-3">
                      <h2 className="text-[11px] font-mono font-bold tracking-widest text-zinc-800 uppercase border-b border-zinc-300 pb-1 flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Education</span>
                      </h2>

                      <div className="space-y-2">
                        <div>
                          <h3 className="font-extrabold text-zinc-900 leading-tight">
                            {portfolio.education.institution}
                          </h3>
                          <p className="text-[10px] text-zinc-600 font-medium">
                            {portfolio.education.degree} - {portfolio.education.department}
                          </p>
                          <p className="text-[9px] font-mono text-zinc-500">{portfolio.education.period}</p>
                          <p className="text-[10px] font-semibold text-zinc-700 mt-1">GPA: {portfolio.education.gpa}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-[11px] font-mono font-bold tracking-widest text-zinc-800 uppercase border-b border-zinc-300 pb-1">
                        <span>Skills Matrix</span>
                      </h2>

                      <div className="space-y-2.5">
                        {skillGroups.map((group) => (
                          <div key={group.label} className="space-y-1">
                            <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase">{group.label}</span>
                            <p className="text-[10px] leading-relaxed text-zinc-800 font-medium">
                              {group.items.map((item) => item.name).join(", ")}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {portfolio.achievements.length > 0 && (
                      <div className="space-y-3">
                        <h2 className="text-[11px] font-mono font-bold tracking-widest text-zinc-800 uppercase border-b border-zinc-300 pb-1">
                          <span>Credentials</span>
                        </h2>

                        <ul className="space-y-1.5 text-[10px] text-zinc-750">
                          {portfolio.achievements.map((achievement) => (
                            <li key={achievement.id} className="leading-tight">
                              <span className="font-extrabold text-zinc-900 block">{achievement.title}</span>
                              {achievement.issuer && (
                                <span className="text-[9px] font-mono text-zinc-650 block mb-1">{achievement.issuer}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2 space-y-6">
                    {portfolio.experiences.length > 0 && (
                      <div className="space-y-4">
                        <h2 className="text-[11px] font-mono font-bold tracking-widest text-zinc-800 uppercase border-b border-zinc-300 pb-1 flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                          <span>Work & Leadership</span>
                        </h2>

                        <div className="space-y-4">
                          {portfolio.experiences.map((experience) => (
                            <div key={experience.id} className="space-y-1.5">
                              <div className="flex items-center justify-between gap-3">
                                <h3 className="font-extrabold text-zinc-950 text-sm">
                                  {experience.role}
                                </h3>
                                {experience.period && (
                                  <span className="text-[9px] font-mono text-zinc-500">{experience.period}</span>
                                )}
                              </div>

                              <p className="text-[10px] font-mono text-zinc-600 block leading-none font-bold">
                                {experience.organization}
                              </p>

                              {experience.points.length > 0 && (
                                <ul className="list-disc list-outside pl-4 space-y-1 text-[10px] text-zinc-700 leading-normal font-sans">
                                  {experience.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {portfolio.projects.length > 0 && (
                      <div className="space-y-4">
                        <h2 className="text-[11px] font-mono font-bold tracking-widest text-zinc-800 uppercase border-b border-zinc-300 pb-1">
                          <span>Featured Labs & Projects</span>
                        </h2>

                        <div className="space-y-3">
                          {portfolio.projects.slice(0, 3).map((project) => (
                            <div key={project.id} className="space-y-1">
                              <h3 className="font-extrabold text-zinc-950 text-xs">
                                {project.title}
                              </h3>
                              <p className="text-[10px] text-zinc-700 leading-normal">
                                {project.description}
                              </p>
                              <p className="text-[9px] font-medium text-zinc-550 italic">
                                Goal / Metrics: {project.problem} Impacting: {project.impact}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-zinc-200 pt-3 mt-6 text-center text-[8px] font-mono text-zinc-400 uppercase tracking-widest flex items-center justify-between">
                  <span>Resume generated from portfolio content</span>
                  <span>Prepared for sharing and print</span>
                </div>
              </div>
            </div>

            <div className="px-6 py-3 border-t border-zinc-850 bg-zinc-950 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
              <span>* Designed for standard A4 Single Page configurations</span>
              <span className="text-emerald-400 font-bold">Save as PDF inside the print dialog!</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
