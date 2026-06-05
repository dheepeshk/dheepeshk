import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";
import { NavigationItem } from "../types";

interface HeaderProps {
  name: string;
  navigationItems: NavigationItem[];
  onOpenResume: () => void;
}

export default function Header({ name, navigationItems, onOpenResume }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navigationItems.map((item) => item.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationItems]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="portfolio-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div
          className="flex items-center space-x-2 cursor-pointer group hover-pop-soft"
          onClick={() => scrollToSection("home")}
          id="brand-logo"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 via-teal-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-emerald-500/20 group-hover:rotate-12 transition-transform duration-300">
            {name.charAt(0)}
          </div>
          <span className="font-sans font-bold tracking-tight text-white text-lg group-hover:text-emerald-400 transition-colors">
            {name}
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
          {navigationItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all hover-pop-soft ${
                  isActive
                    ? "text-emerald-300 bg-emerald-500/10 border border-emerald-500/30"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/40 border border-transparent"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center space-x-3" id="header-ctas">
          <button
            onClick={onOpenResume}
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-zinc-900 hover:bg-zinc-850 hover:border-zinc-700 text-zinc-200 border border-zinc-800 transition-all shadow-md shadow-black/10 group active:scale-95 hover-pop hover-pop-button"
            id="nav-resume-btn"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </button>
        </div>

        <div className="flex items-center space-x-3 lg:hidden" id="mobile-util-controls">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-350 hover:text-white hover-pop-soft hover-pop-icon"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 shadow-xl z-40 lg:hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-2">
                {navigationItems.map((item) => {
                  const id = item.href.substring(1);
                  const isActive = activeSection === id;
                  return (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(id)}
                      className={`px-4 py-3 rounded-xl text-left text-xs font-medium tracking-wide transition-all hover-pop-soft ${
                        isActive
                          ? "text-emerald-300 bg-emerald-500/10 border border-emerald-500/20"
                          : "text-zinc-400 bg-zinc-900/40 border border-zinc-800/40 hover:text-white hover:bg-zinc-800"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-zinc-800/60 pt-4 flex flex-col space-y-2.5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-bold bg-zinc-900 border border-zinc-800 text-white hover-pop hover-pop-button"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
