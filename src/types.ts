export interface TimelineEvent {
  id: string;
  year: string;
  period: string; // e.g. "Sep 2024 - Present"
  title: string;
  subtitle: string;
  description: string;
  category: "milestone" | "tech" | "education" | "creative" | "future";
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  impact: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-100 indicating confidence
  category: "technical" | "creative" | "leadership" | "communication" | "tools";
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "award" | "certificate" | "competition" | "role";
  description: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "club" | "volunteer" | "internship" | "event" | "academic";
  points: string[];
  skillsLearned: string[];
}

export interface MemoryItem {
  id: string;
  url: string;
  caption: string;
  category: "Hackathons" | "Seminars" | "Teamwork" | "Personal";
  date: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}
