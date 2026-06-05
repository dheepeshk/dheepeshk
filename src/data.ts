import { TimelineEvent, Project, Skill, Achievement, Experience, MemoryItem } from "./types";

export interface PortfolioData {
  personal: {
    name: string;
    tagline: string;
    subTaglines: string[];
    email: string;
    secondaryEmail?: string;
    phone: string;
    address: string;
    linkedin: string;
    github: string;
    instagram: string;
    intro: string;
    story: string;
    visionStatement: string;
    future1Year: string;
    future3Year: string;
    future5Year: string;
  };
  education: {
    institution: string;
    degree: string;
    department: string;
    period: string;
    gpa: string;
    highlights: string[];
    interests: string[];
  };
  timeline: TimelineEvent[];
  projects: Project[];
  skills: Skill[];
  achievements: Achievement[];
  experiences: Experience[];
  gallery: MemoryItem[];
}

export const initialPortfolioData: PortfolioData = {
  personal: {
    name: "Dheepesh K",
    tagline: "First-year B.E. Mechatronics Engineering student",
    subTaglines: ["Robotics", "Automation", "Embedded Systems", "Entrepreneurship"],
    email: "dheepeshkuppusamy@gmail.com",
    secondaryEmail: "dheepeshk.25mts@kongu.edu",
    phone: "+91 9940900999",
    address: "",
    linkedin: "https://linkedin.com/in/dheepeshk",
    github: "https://github.com/DheepeshK",
    instagram: "https://instagram.com/dheeps._",
    intro: "Interested in Robotics, Embedded Systems, Product Development, Research & Development, and Entrepreneurship.",
    story: "First-year B.E. Mechatronics Engineering student with interests in Robotics, Embedded Systems, Product Development, Research & Development, and Entrepreneurship. Passionate about applying engineering principles to real-world challenges through innovation, prototyping, and interdisciplinary problem solving. Seeking opportunities to contribute to research-driven and startup-oriented environments while gaining practical industry experience.\n\nAreas of interest: Robotics, Automation, Embedded Systems, Research & Development, Entrepreneurship.\n\nLanguages: Tamil (Native), English (Fluent).\n\nWorkshops & technical exposure: 2-Day Workshop on Critical & Design Thinking (IEF@KEC); Design Thinking and Problem Identification Workshop (TBI@KEC).",
    visionStatement: "",
    future1Year: "",
    future3Year: "",
    future5Year: ""
  },
  education: {
    institution: "Kongu Engineering College (Autonomous)",
    degree: "Bachelor of Engineering (B.E.)",
    department: "Mechatronics Engineering",
    period: "Expected Graduation: 2029",
    gpa: "8.96/10.00",
    highlights: [
      "Affiliated to Anna University.",
      "First-year undergraduate student.",
      "Expected graduation in 2029."
    ],
    interests: ["Robotics", "Automation", "Embedded Systems", "Research & Development", "Entrepreneurship"]
  },
  timeline: [],
  projects: [],
  skills: [
    { name: "C", level: 80, category: "technical" },
    { name: "C++", level: 80, category: "technical" },
    { name: "Python", level: 80, category: "technical" },
    { name: "MATLAB", level: 80, category: "technical" },
    { name: "HTML", level: 75, category: "technical" },
    { name: "CSS", level: 75, category: "technical" },
    { name: "Simulink", level: 75, category: "technical" },
    { name: "Arduino", level: 80, category: "technical" },
    { name: "ESP32", level: 80, category: "technical" },
    { name: "Sensor Interfacing", level: 78, category: "technical" },
    { name: "Motor Drivers", level: 78, category: "technical" },
    { name: "DC Motor Control", level: 78, category: "technical" },
    { name: "Breadboard Prototyping", level: 78, category: "technical" },
    { name: "SolidWorks", level: 78, category: "technical" },
    { name: "Canva", level: 75, category: "creative" },
    { name: "Adobe Photoshop", level: 75, category: "creative" },
    { name: "DaVinci Resolve", level: 75, category: "creative" },
    { name: "OBS Studio", level: 75, category: "creative" },
    { name: "Tamil", level: 100, category: "communication" },
    { name: "English", level: 90, category: "communication" },
    { name: "Microsoft Word", level: 80, category: "tools" },
    { name: "Microsoft Excel", level: 80, category: "tools" },
    { name: "Microsoft PowerPoint", level: 80, category: "tools" },
    { name: "Google Sheets", level: 80, category: "tools" },
    { name: "Visual Studio Code (VS Code)", level: 80, category: "tools" },
    { name: "GitHub", level: 80, category: "tools" }
  ],
  achievements: [
    {
      id: "a1",
      title: "First Place - MATLAB Cody Contest",
      issuer: "",
      date: "",
      category: "competition",
      description: ""
    },
    {
      id: "a2",
      title: "Second Place - C Programming Contest",
      issuer: "",
      date: "",
      category: "competition",
      description: ""
    },
    {
      id: "a3",
      title: "MATLAB Onramp",
      issuer: "",
      date: "",
      category: "certificate",
      description: ""
    },
    {
      id: "a4",
      title: "Simulink Onramp",
      issuer: "",
      date: "",
      category: "certificate",
      description: ""
    },
    {
      id: "a5",
      title: "SolidWorks Training & Certification",
      issuer: "",
      date: "",
      category: "certificate",
      description: ""
    }
  ],
  experiences: [
    {
      id: "e1",
      role: "Secretary",
      organization: "Science & Humanities Association (Cluster 3)",
      period: "",
      type: "club",
      points: [
        "Coordinated and led six department-level academic and technical events.",
        "Assisted in planning, organizing, and executing student engagement activities."
      ],
      skillsLearned: []
    },
    {
      id: "e2",
      role: "Executive Member",
      organization: "Technical Team, Self Development Club",
      period: "",
      type: "club",
      points: [],
      skillsLearned: []
    },
    {
      id: "e3",
      role: "Executive Member",
      organization: "Media Team, Institution's Innovation Council (IIC)",
      period: "",
      type: "club",
      points: [],
      skillsLearned: []
    },
    {
      id: "e4",
      role: "Volunteer",
      organization: "IDE Bootcamp",
      period: "",
      type: "volunteer",
      points: [],
      skillsLearned: []
    },
    {
      id: "e5",
      role: "Volunteer",
      organization: "Entrepreneurship Development and Innovation Institute (EDII-TN) Programs",
      period: "",
      type: "volunteer",
      points: [],
      skillsLearned: []
    }
  ],
  gallery: []
};
