import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Save, RotateCcw, Copy, CheckCircle, Edit, Settings, Trash2 } from "lucide-react";
import { PortfolioData } from "../data";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  portfolio: PortfolioData;
  onUpdatePortfolio: (target: Partial<PortfolioData["personal"]>) => void;
  onResetPortfolio: () => void;
}

export default function AdminPanel({ isOpen, onClose, portfolio, onUpdatePortfolio, onResetPortfolio }: AdminPanelProps) {
  
  const [copied, setCopied] = React.useState(false);

  const handleFieldChange = (field: keyof PortfolioData["personal"], value: string) => {
    onUpdatePortfolio({ [field]: value });
  };

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(JSON.stringify(portfolio, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end p-0 bg-zinc-950/80 backdrop-blur-xs" id="admin-panel-backdrop">
          
          {/* Slide-out Sidebar from the Right */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full max-w-xl h-screen bg-zinc-900 border-l border-zinc-800 shadow-2xl flex flex-col justify-between overflow-hidden text-left"
          >
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60 z-10">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <div>
                  <h3 className="text-sm font-sans font-extrabold text-white uppercase tracking-wider flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-emerald-450" />
                    <span>Real-Time Customizer</span>
                  </h3>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase">
                    Modify active variables or backing structures instantly
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-zinc-805 border border-zinc-750 text-zinc-450 hover:text-white"
                title="Save & Close Customizer"
                id="close-customizer-btn"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Configuration Fields */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-950/20" id="customizer-form-area">
              
              {/* Copy / Reset Actions Quick Bar */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-zinc-950 border border-zinc-850">
                <button
                  type="button"
                  onClick={handleCopyConfig}
                  className="px-3 py-2 rounded-lg text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center space-x-1.5 cursor-pointer"
                  id="copy-config-btn"
                >
                  {copied ? <CheckCircle className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied JSON Slate!" : "Export System JSON"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm("Restore portfolio back to default Alex Mercer NIT variables?")) {
                      onResetPortfolio();
                    }
                  }}
                  className="px-3 py-2 rounded-lg text-[11px] font-mono font-medium text-rose-450 bg-rose-500/5 hover:bg-rose-500/10 border border-rose-500/20 flex items-center justify-center space-x-1.5 cursor-pointer"
                  id="reset-config-btn"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restore Defaults</span>
                </button>
              </div>

              {/* Sub-inputs: Personal parameters */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest border-b border-zinc-850 pb-2 flex items-center gap-2">
                  <Edit className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Fundamental Personal Meta Fields</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase">Interactive Name</label>
                    <input
                      type="text"
                      value={portfolio.personal.name}
                      onChange={(e) => handleFieldChange("name", e.target.value)}
                      className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase">Direct Electronic Mail</label>
                    <input
                      type="email"
                      value={portfolio.personal.email}
                      onChange={(e) => handleFieldChange("email", e.target.value)}
                      className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase">Direct Telephone Line</label>
                    <input
                      type="text"
                      value={portfolio.personal.phone}
                      onChange={(e) => handleFieldChange("phone", e.target.value)}
                      className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase">Base Location Coordinates</label>
                    <input
                      type="text"
                      value={portfolio.personal.address}
                      onChange={(e) => handleFieldChange("address", e.target.value)}
                      className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase">The Prime Tagline</label>
                  <input
                    type="text"
                    value={portfolio.personal.tagline}
                    onChange={(e) => handleFieldChange("tagline", e.target.value)}
                    className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase">Intro Overview paragraph</label>
                  <textarea
                    rows={3}
                    value={portfolio.personal.intro}
                    onChange={(e) => handleFieldChange("intro", e.target.value)}
                    className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase">The Narrative Backstory / Story</label>
                  <textarea
                    rows={4}
                    value={portfolio.personal.story}
                    onChange={(e) => handleFieldChange("story", e.target.value)}
                    className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Sub-inputs: Vision block */}
              <div className="space-y-4 pt-4 border-t border-zinc-850">
                <h4 className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest border-b border-zinc-850 pb-2">
                  <span>Primary Vision Statement Parameters</span>
                </h4>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase">The North Star Statement</label>
                  <input
                    type="text"
                    value={portfolio.personal.visionStatement}
                    onChange={(e) => handleFieldChange("visionStatement", e.target.value)}
                    className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase">1-Year Objective Goal</label>
                  <textarea
                    rows={2}
                    value={portfolio.personal.future1Year}
                    onChange={(e) => handleFieldChange("future1Year", e.target.value)}
                    className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase">3-Year Objective Goal</label>
                  <textarea
                    rows={2}
                    value={portfolio.personal.future3Year}
                    onChange={(e) => handleFieldChange("future3Year", e.target.value)}
                    className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase">5-Year Objective Goal</label>
                  <textarea
                    rows={2}
                    value={portfolio.personal.future5Year}
                    onChange={(e) => handleFieldChange("future5Year", e.target.value)}
                    className="w-full text-xs text-white bg-zinc-950 border border-zinc-805 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Tips Callout */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 space-y-1.5 text-[11px] text-zinc-450 leading-relaxed font-sans mt-4">
                <span className="font-bold text-zinc-300 block">💡 Live Refresh:</span>
                <span>All edits render instantly in this developer window simulation. Simply scroll behind the sidebar to see changes in real time. Click system close to return back!</span>
              </div>

            </div>

            {/* Save Close Footer */}
            <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-850 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-500">Live variables active</span>
              
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-650 hover:to-emerald-700 text-white flex items-center space-x-1.5 select-none hover:scale-[1.02] active:scale-95 transition-all outline-none"
                id="save-finish-customizer-btn"
              >
                <Save className="w-4 h-4" />
                <span>Save and Close Panel</span>
              </button>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
