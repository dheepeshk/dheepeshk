/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { initialPortfolioData, PortfolioData } from "./data";
import { NavigationItem } from "./types";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import JourneyTimeline from "./components/JourneyTimeline";
import Education from "./components/Education";
import SkillsGrid from "./components/SkillsGrid";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import ExperienceSection from "./components/Experience";
import Vision from "./components/Vision";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import ResumeViewer from "./components/ResumeViewer";

export default function App() {
  const [portfolio] = useState<PortfolioData>(initialPortfolioData);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const hasJourney = portfolio.timeline.length > 0;
  const hasSkills = portfolio.skills.length > 0;
  const hasProjects = portfolio.projects.length > 0;
  const hasAchievements = portfolio.achievements.length > 0;
  const hasExperience = portfolio.experiences.length > 0;
  const hasVision = Boolean(
    portfolio.personal.visionStatement ||
    portfolio.personal.future1Year ||
    portfolio.personal.future3Year ||
    portfolio.personal.future5Year
  );
  const hasGallery = portfolio.gallery.length > 0;

  const navigationItems: NavigationItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    ...(hasJourney ? [{ label: "Journey", href: "#journey" }] : []),
    { label: "Education", href: "#education" },
    ...(hasSkills ? [{ label: "Skills", href: "#skills" }] : []),
    ...(hasProjects ? [{ label: "Projects", href: "#projects" }] : []),
    ...(hasAchievements ? [{ label: "Achievements", href: "#achievements" }] : []),
    ...(hasExperience ? [{ label: "Experience", href: "#experience" }] : []),
    ...(hasVision ? [{ label: "Vision", href: "#vision" }] : []),
    ...(hasGallery ? [{ label: "Gallery", href: "#gallery" }] : []),
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-300 font-sans transition-colors duration-300">
      <Header
        name={portfolio.personal.name}
        navigationItems={navigationItems}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="relative">
        <Hero
          name={portfolio.personal.name}
          tagline={portfolio.personal.tagline}
          subTaglines={portfolio.personal.subTaglines}
          intro={portfolio.personal.intro}
          github={portfolio.personal.github}
          linkedin={portfolio.personal.linkedin}
          hasJourney={hasJourney}
          hasProjects={hasProjects}
        />

        <About
          story={portfolio.personal.story}
          name={portfolio.personal.name}
        />

        {hasJourney && <JourneyTimeline events={portfolio.timeline} />}

        <Education education={portfolio.education} />

        {hasSkills && (
          <SkillsGrid
            skills={portfolio.skills}
          />
        )}

        {hasProjects && (
          <Projects
            projects={portfolio.projects}
          />
        )}

        {hasAchievements && <Achievements achievements={portfolio.achievements} />}

        {hasExperience && <ExperienceSection experiences={portfolio.experiences} />}

        {hasVision && (
          <Vision
            visionStatement={portfolio.personal.visionStatement}
            future1Year={portfolio.personal.future1Year}
            future3Year={portfolio.personal.future3Year}
            future5Year={portfolio.personal.future5Year}
          />
        )}

        {hasGallery && (
          <Gallery
            galleryItems={portfolio.gallery}
          />
        )}

        <Contact
          email={portfolio.personal.email}
          secondaryEmail={portfolio.personal.secondaryEmail}
          phone={portfolio.personal.phone}
          address={portfolio.personal.address}
          github={portfolio.personal.github}
          linkedin={portfolio.personal.linkedin}
          instagram={portfolio.personal.instagram}
        />
      </main>

      <footer className="py-12 bg-zinc-950 border-t border-zinc-900 text-center text-xs text-zinc-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 {portfolio.personal.name}. All rights reserved.</p>
          <button
            onClick={() => setIsResumeOpen(true)}
            className="hover:text-emerald-400 transition-colors cursor-pointer hover-pop-soft"
          >
            [ DOWNLOAD RESUME PDF ]
          </button>
        </div>
      </footer>

      <ResumeViewer
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        portfolio={portfolio}
      />
    </div>
  );
}
