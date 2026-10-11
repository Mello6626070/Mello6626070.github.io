export interface SkillItem {
  id: string;
  name: string;
  category: 'GAME DEV & 3D' | 'CYBERSECURITY' | 'DATA SCIENCE' | 'SOFTWARE ENG';
  arcana: string; // P3R style Arcana Roman numeral + name
  rank: 'MAX' | 'RANK 9' | 'RANK 8' | 'RANK 7';
  roleContext: string;
  description: string;
  tools: string[];
  levelNumber: number; // 1 to 10
}

export const skillsData: SkillItem[] = [
  // Game Dev & 3D
  {
    id: "godot-engine",
    name: "Godot Engine 4",
    category: "GAME DEV & 3D",
    arcana: "VII CHARIOT",
    rank: "MAX",
    roleContext: "Game Programmer",
    description: "Proficient in GDScript, scene instancing, signals, 2D/3D physics engines, particle systems, and shader authoring for game feel.",
    tools: ["Godot 4.x", "GDScript", "Physics Layers", "Custom Shaders"],
    levelNumber: 10,
  },
  {
    id: "blender-3d",
    name: "Blender 3D",
    category: "GAME DEV & 3D",
    arcana: "IV EMPEROR",
    rank: "RANK 8",
    roleContext: "3D Asset Artist",
    description: "Hard-surface low-poly modeling, UV mapping, texture baking, procedural materials, and export pipeline to game engines.",
    tools: ["Blender", "Low-Poly Modeling", "UV Unwrapping", "PBR Baking"],
    levelNumber: 8,
  },
  {
    id: "game-design",
    name: "Game Feel & Mechanics",
    category: "GAME DEV & 3D",
    arcana: "I MAGICIAN",
    rank: "RANK 8",
    roleContext: "System Designer",
    description: "Hit-pause, screenshake, coyote time, input buffering, jump arcs, and finite state machines for responsive gameplay.",
    tools: ["Game Math", "State Machines", "Juice & Polish", "Input Buffering"],
    levelNumber: 8,
  },

  // Cybersecurity
  {
    id: "network-security",
    name: "Network Defense & Analysis",
    category: "CYBERSECURITY",
    arcana: "XI JUSTICE",
    rank: "RANK 8",
    roleContext: "Security Analyst",
    description: "Packet capture with Wireshark, TCP 3-way handshake dissection, ARP spoofing detection, firewall rules, and subnetting.",
    tools: ["Wireshark", "Scapy", "TCP/IP", "Nmap", "DNS/DHCP"],
    levelNumber: 8,
  },
  {
    id: "linux-systems",
    name: "Linux Systems & Bash",
    category: "CYBERSECURITY",
    arcana: "IX HERMIT",
    rank: "MAX",
    roleContext: "System Operator",
    description: "POSIX shell scripting, file permissions (chmod/chown), daemon monitoring with systemd, SSH hardening, and grep/awk/sed tooling.",
    tools: ["Ubuntu/Debian", "Bash Scripting", "System Administration", "SSH"],
    levelNumber: 10,
  },
  {
    id: "app-security",
    name: "Vulnerability Auditing",
    category: "CYBERSECURITY",
    arcana: "XVI TOWER",
    rank: "RANK 7",
    roleContext: "Security Researcher",
    description: "OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF), password hashing standards (Argon2id, bcrypt), and cryptographic primitives.",
    tools: ["OWASP Top 10", "Argon2id", "AES-256", "CTF Challenges"],
    levelNumber: 7,
  },

  // Data Science
  {
    id: "python-pandas",
    name: "Python & Pandas",
    category: "DATA SCIENCE",
    arcana: "XVII STAR",
    rank: "MAX",
    roleContext: "Data Analyst",
    description: "Data manipulation, handling missing values, indexing, aggregation, merge/joins, and multi-dimensional tabular feature engineering.",
    tools: ["Python 3", "Pandas", "NumPy", "Jupyter Notebooks"],
    levelNumber: 10,
  },
  {
    id: "data-vis",
    name: "Exploratory Data Analysis",
    category: "DATA SCIENCE",
    arcana: "XVIII MOON",
    rank: "RANK 8",
    roleContext: "Insights Specialist",
    description: "Translating raw numerical patterns into clear visual narratives using distribution plots, heatmaps, and trend projections.",
    tools: ["Matplotlib", "Seaborn", "Statistical Analysis", "Outlier Detection"],
    levelNumber: 8,
  },
  {
    id: "ml-foundations",
    name: "Machine Learning Models",
    category: "DATA SCIENCE",
    arcana: "XX JUDGEMENT",
    rank: "RANK 7",
    roleContext: "ML Practitioner",
    description: "Supervised learning models (Random Forest, Logistic Regression, Linear Regression), cross-validation, and performance metrics (ROC-AUC, F1).",
    tools: ["Scikit-Learn", "Model Evaluation", "Hyperparameter Tuning"],
    levelNumber: 7,
  },

  // Software Engineering
  {
    id: "typescript-react",
    name: "TypeScript & React",
    category: "SOFTWARE ENG",
    arcana: "XIV TEMPERANCE",
    rank: "MAX",
    roleContext: "Frontend Engineer",
    description: "Type-safe modern component development, hooks, state management, responsive UI with Tailwind CSS, and performance optimization.",
    tools: ["TypeScript", "React 19", "Tailwind CSS", "Vite"],
    levelNumber: 10,
  },
  {
    id: "git-devops",
    name: "Git & GitHub CI/CD",
    category: "SOFTWARE ENG",
    arcana: "X WHEEL OF FORTUNE",
    rank: "RANK 9",
    roleContext: "Version Control",
    description: "Branching strategies, semantic commits, PR reviews, merge conflict resolution, and automated deployment with GitHub Actions.",
    tools: ["Git", "GitHub Actions", "CI/CD Workflows", "Linting & Build"],
    levelNumber: 9,
  },
  {
    id: "backend-apis",
    name: "REST APIs & Databases",
    category: "SOFTWARE ENG",
    arcana: "XV DEVIL",
    rank: "RANK 8",
    roleContext: "Backend Engineer",
    description: "RESTful endpoint architecture, CRUD operations, relational schema modeling with SQL, and asynchronous server workflows.",
    tools: ["Node.js", "Express", "SQLite / PostgreSQL", "REST Standards"],
    levelNumber: 8,
  },
];
