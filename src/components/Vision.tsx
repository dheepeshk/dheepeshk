import React from "react";
import { Compass, Lightbulb, Target, Trophy, Sparkles } from "lucide-react";

interface VisionProps {
  visionStatement: string;
  future1Year: string;
  future3Year: string;
  future5Year: string;
}

export default function Vision({ visionStatement, future1Year, future3Year, future5Year }: VisionProps) {
  return (
    <section id="vision" className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full filter blur-[110px]"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left" id="vision-heading">
          <div className="inline-flex items-center space-x-2 text-indigo-400 font-mono text-xs tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Futuristic Forecasts</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            My Mission & Vision
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mt-4 rounded-full"></div>
        </div>

        {/* Vision Statement block */}
        <div className="p-6 md:p-10 rounded-2xl bg-zinc-900/40 border border-zinc-850 shadow-inner mb-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-indigo-500/10 opacity-30 select-none">
            <Lightbulb className="w-24 h-24" />
          </div>

          <div className="space-y-4 relative z-10 max-w-3xl">
            <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase font-semibold">
              The North Star Statement
            </span>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-sans font-medium italic">
              "{visionStatement}"
            </p>
          </div>
        </div>

        {/* Grid milestones (1-3-5 Year Horizon map) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="vision-horizons">
          
          {/* Year 1 */}
          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-855 hover:border-zinc-800 transition-all flex flex-col justify-between space-y-6 relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-teal-400 uppercase">
                  Horizon One
                </span>
                <span className="text-xs font-sans font-semibold text-zinc-500 font-mono">1-Year Target</span>
              </div>
              <h3 className="text-base sm:text-lg font-sans font-extrabold text-white group-hover:text-teal-450 transition-colors">
                The Open Source Launch
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {future1Year}
              </p>
            </div>
            <div className="w-8 h-8 rounded bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mt-4">
              <Target className="w-4 h-4 text-teal-400" />
            </div>
          </div>

          {/* Year 3 */}
          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-855 hover:border-zinc-805 transition-all flex flex-col justify-between space-y-6 relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-400 uppercase">
                  Horizon Two
                </span>
                <span className="text-xs font-sans font-semibold text-zinc-500 font-mono">3-Year Blueprint</span>
              </div>
              <h3 className="text-base sm:text-lg font-sans font-extrabold text-white group-hover:text-indigo-400 transition-colors">
                Co-Founding SaaS Venture
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal flex-grow">
                {future3Year}
              </p>
            </div>
            <div className="w-8 h-8 rounded bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mt-4">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
          </div>

          {/* Year 5 */}
          <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-855 hover:border-zinc-805 transition-all flex flex-col justify-between space-y-6 relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-pink-400 uppercase">
                  Horizon Three
                </span>
                <span className="text-xs font-sans font-semibold text-zinc-500 font-mono">5-Year Impact</span>
              </div>
              <h3 className="text-base sm:text-lg font-sans font-extrabold text-white group-hover:text-pink-400 transition-colors">
                Empowering Maker Communities
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {future5Year}
              </p>
            </div>
            <div className="w-8 h-8 rounded bg-pink-500/10 flex items-center justify-center border border-pink-500/20 mt-4">
              <Trophy className="w-4 h-4 text-pink-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
