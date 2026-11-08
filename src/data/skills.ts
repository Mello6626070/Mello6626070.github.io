export interface SkillItem {
  id: string;
  name: string;
  category: 'Game Dev & 3D' | 'Cybersecurity' | 'Data Science' | 'Software Engineering';
  level: string; // "Proficient" | "Advanced" | "Comfortable"
  levelPercent: number; // 70 to 95
  color: string; // Catppuccin color hex
  bgPill: string;
  tools: string[];
  note: string;
}

export const skillsData: SkillItem[] = [
  // Game Dev
  {
    id: "godot-engine",
    name: "Godot Engine 4",
    category: "Game Dev & 3D",
    level: "Advanced",
    levelPercent: 92,
    color: "#cba6f7", // Mauve
    bgPill: "bg-[#cba6f7]/15 text-[#cba6f7] border-[#cba6f7]/30",
    tools: ["Godot 4.x", "GDScript", "2D/3D Physics", "Shaders"],
    note: "Crafting player controllers, state machines, signals, and juice effects.",
  },
  {
    id: "blender-3d",
    name: "Blender 3D",
    category: "Game Dev & 3D",
    level: "Proficient",
    levelPercent: 84,
    color: "#fab387", // Peach
    bgPill: "bg-[#fab387]/15 text-[#fab387] border-[#fab387]/30",
    tools: ["Blender", "Low-Poly Modeling", "UV Unwrapping", "PBR Materials"],
    note: "Hard-surface props, modular game kits, clean topology, and .GLTF exports.",
  },
  {
    id: "game-design",
    name: "Game Feel & Mechanics",
    category: "Game Dev & 3D",
    level: "Proficient",
    levelPercent: 86,
    color: "#f9e2af", // Yellow
    bgPill: "bg-[#f9e2af]/15 text-[#f9e2af] border-[#f9e2af]/30",
    tools: ["Input Buffering", "Coyote Time", "Camera Shake", "Hit-Pause"],
    note: "Translating mechanical design into punchy, responsive player feedback.",
  },

  // Cybersecurity
  {
    id: "network-security",
    name: "Network Traffic & Protocols",
    category: "Cybersecurity",
    level: "Proficient",
    levelPercent: 85,
    color: "#a6e3a1", // Green
    bgPill: "bg-[#a6e3a1]/15 text-[#a6e3a1] border-[#a6e3a1]/30",
    tools: ["Wireshark", "Scapy", "TCP/IP Handshake", "ARP & DNS"],
    note: "Packet sniffing, protocol dissection, and anomaly detection in Python.",
  },
  {
    id: "linux-bash",
    name: "Linux Systems & Bash",
    category: "Cybersecurity",
    level: "Advanced",
    levelPercent: 90,
    color: "#94e2d5", // Teal
    bgPill: "bg-[#94e2d5]/15 text-[#94e2d5] border-[#94e2d5]/30",
    tools: ["Ubuntu/Debian", "Bash Scripting", "Permissions", "SSH"],
    note: "Comfortable with Linux shell pipelines, cron, and system admin.",
  },
  {
    id: "crypto-security",
    name: "Security Fundamentals",
    category: "Cybersecurity",
    level: "Comfortable",
    levelPercent: 78,
    color: "#f38ba8", // Red
    bgPill: "bg-[#f38ba8]/15 text-[#f38ba8] border-[#f38ba8]/30",
    tools: ["OWASP Top 10", "Argon2id", "AES-256-GCM", "Entropy Checks"],
    note: "Understanding common web vulnerabilities, cipher rotation, and auth flows.",
  },

  // Data Science
  {
    id: "python-pandas",
    name: "Python & Pandas",
    category: "Data Science",
    level: "Advanced",
    levelPercent: 92,
    color: "#89dceb", // Sky
    bgPill: "bg-[#89dceb]/15 text-[#89dceb] border-[#89dceb]/30",
    tools: ["Python 3", "Pandas", "NumPy", "Jupyter Notebooks"],
    note: "Data cleaning, tabular indexing, transformations, aggregations, and EDA.",
  },
  {
    id: "data-vis",
    name: "Data Visualization",
    category: "Data Science",
    level: "Proficient",
    levelPercent: 85,
    color: "#74c7ec", // Sapphire
    bgPill: "bg-[#74c7ec]/15 text-[#74c7ec] border-[#74c7ec]/30",
    tools: ["Matplotlib", "Seaborn", "Correlation Heatmaps", "Plotly"],
    note: "Turning raw numbers into clear, readable charts and visual stories.",
  },
  {
    id: "ml-scikit",
    name: "Machine Learning (Scikit-Learn)",
    category: "Data Science",
    level: "Comfortable",
    levelPercent: 78,
    color: "#b4befe", // Lavender
    bgPill: "bg-[#b4befe]/15 text-[#b4befe] border-[#b4befe]/30",
    tools: ["Random Forests", "Regression", "Cross-Validation", "F1/ROC"],
    note: "Preprocessing pipelines, hyperparameter evaluation, and benchmark models.",
  },

  // Software Engineering
  {
    id: "typescript-react",
    name: "TypeScript & React",
    category: "Software Engineering",
    level: "Advanced",
    levelPercent: 90,
    color: "#f5c2e7", // Pink
    bgPill: "bg-[#f5c2e7]/15 text-[#f5c2e7] border-[#f5c2e7]/30",
    tools: ["TypeScript", "React 19", "Tailwind CSS", "Vite"],
    note: "Writing strictly typed, modular components and modern web applications.",
  },
  {
    id: "git-devops",
    name: "Git & GitHub CI/CD",
    category: "Software Engineering",
    level: "Advanced",
    levelPercent: 88,
    color: "#f2cdcd", // Flamingo
    bgPill: "bg-[#f2cdcd]/15 text-[#f2cdcd] border-[#f2cdcd]/30",
    tools: ["Git Branching", "GitHub Actions", "Pull Requests", "CI/CD"],
    note: "Automated deployment workflows, semantic commits, and version control.",
  },
  {
    id: "backend-apis",
    name: "REST APIs & Databases",
    category: "Software Engineering",
    level: "Proficient",
    levelPercent: 82,
    color: "#cba6f7", // Mauve
    bgPill: "bg-[#cba6f7]/15 text-[#cba6f7] border-[#cba6f7]/30",
    tools: ["Node.js", "Express", "REST Standards", "SQL / SQLite"],
    note: "Designing clean endpoints, relational queries, and server integration.",
  },
];
