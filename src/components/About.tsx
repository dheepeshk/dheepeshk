import React from "react";
import { Sparkles } from "lucide-react";

interface AboutProps {
  story: string;
  name: string;
}

export default function About({ story, name }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-[80px]"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col mb-12 text-left" id="about-heading">
          <div className="inline-flex items-center space-x-2 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Backstory</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full"></div>
        </div>

        <div className="max-w-4xl space-y-6 text-zinc-300 leading-relaxed text-sm sm:text-base" id="about-grid">
          <p className="font-sans font-medium text-white text-lg">
            Hello there! I'm <span className="text-emerald-350">{name}</span>.
          </p>

          {story.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
