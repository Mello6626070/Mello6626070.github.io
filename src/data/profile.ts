export interface ProfileData {
  name: string;
  handle: string;
  headline: string;
  status: string;
  degree: string;
  school: string;
  location: string;
  tagline: string;
  bio: string;
  doodleQuote: string;
  links: {
    github: string;
    linkedin: string;
    itchio: string;
    artstation: string;
    email: string;
    resumeUrl: string;
  };
  disciplines: {
    title: string;
    tag: string;
    color: string;
    accent: string;
    desc: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Mello",
  handle: "@mello.codes",
  headline: "Aspiring Computer Science Student & Creative Developer",
  status: "Open for OJT & Internship (2026)",
  degree: "B.S. in Computer Science",
  school: "College of Computer Studies",
  location: "Remote / Hybrid / On-Site",
  tagline: "Building games, breaking down network packets, exploring data, and crafting thoughtful code.",
  bio: "Hi there! I'm an aspiring CS student looking for an internship/OJT opportunity. I love bringing together creative and technical worlds: sculpting 3D assets in Blender, scripting game physics in Godot, analyzing network traffic in cybersecurity, training data pipelines, and shipping clean software.",
  doodleQuote: "always curious, building one sketch & prototype at a time ✨",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    itchio: "https://itch.io",
    artstation: "https://artstation.com",
    email: "student.developer@example.com",
    resumeUrl: "#resume",
  },
  disciplines: [
    {
      title: "Game Development",
      tag: "Godot 4 & Blender",
      color: "bg-[#cba6f7]/20 text-[#cba6f7] border-[#cba6f7]/40",
      accent: "#cba6f7",
      desc: "GDScript mechanics, custom 2D/3D physics, game juice, and low-poly asset modeling.",
    },
    {
      title: "Cybersecurity",
      tag: "Packet Analysis & Defense",
      color: "bg-[#a6e3a1]/20 text-[#a6e3a1] border-[#a6e3a1]/40",
      accent: "#a6e3a1",
      desc: "Network packet sniffing, protocol inspection with Wireshark & Scapy, and Linux hardening.",
    },
    {
      title: "Data Science",
      tag: "EDA & Machine Learning",
      color: "bg-[#89dceb]/20 text-[#89dceb] border-[#89dceb]/40",
      accent: "#89dceb",
      desc: "Exploratory data analysis with Pandas, predictive modeling with Scikit-learn, and data visual narratives.",
    },
    {
      title: "Software Engineering",
      tag: "Full-Stack Web & Tools",
      color: "bg-[#fab387]/20 text-[#fab387] border-[#fab387]/40",
      accent: "#fab387",
      desc: "Clean architecture, React, TypeScript, RESTful endpoints, and automated CI/CD workflows.",
    },
  ],
};
