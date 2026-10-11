export type DisciplineType = 'all' | 'gamedev' | 'cybersecurity' | 'datascience' | 'softwareeng';

export interface ProjectOperation {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  discipline: DisciplineType;
  badge: string;
  badgeColor: string; // 'orange' | 'purple' | 'cyan' | 'pink' | 'lime'
  notificationCount?: number;
  starred?: boolean;
  themeStyle: 'cyan-purple' | 'purple-magenta' | 'green-dark' | 'orange-cyan' | 'yellow-red' | 'blue-cyan';
  objective: string;
  brief: string;
  techStack: string[];
  keyFeatures: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageArt: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    iconName: string;
    graphicLabel: string;
  };
}

export const projectsData: ProjectOperation[] = [
  {
    id: "chrono-rift",
    title: "CHRONO RIFT // GODOT 4",
    subtitle: "Physics-Driven 2D/3D Action Platformer",
    category: "GAME DEV OPERATION",
    discipline: "gamedev",
    badge: "GODOT 4",
    badgeColor: "cyan",
    notificationCount: 1,
    starred: true,
    themeStyle: "cyan-purple",
    objective: "Architect a responsive action platformer in Godot 4.3 featuring custom character physics, finite state machines, hit-pause mechanics, and dynamic camera framing.",
    brief: "Engineered from the ground up utilizing GDScript and Godot 4's custom physics layers. Designed a decoupled event-driven signal architecture for UI, audio, and gameplay logic. Includes custom GLSL-inspired canvas shaders for chromatic hit effects, pixel-perfect collision detection, and tight gamepad controller input buffering.",
    techStack: ["Godot Engine 4", "GDScript", "Custom Shaders", "Physics Engine", "Aseprite"],
    keyFeatures: [
      "Decoupled Event-Bus Architecture via Godot Signals",
      "Hierarchical Finite State Machine for Player Controller",
      "Dynamic Camera Framing & Screen Shake Mechanics",
      "Pixel-Accurate Hitboxes & Hurtboxes",
    ],
    demoUrl: "https://itch.io",
    githubUrl: "https://github.com",
    imageArt: {
      primaryColor: "#00f0ff",
      secondaryColor: "#7928ca",
      accentColor: "#ff007f",
      iconName: "Gamepad2",
      graphicLabel: "GODOT 4 CORE",
    },
  },
  {
    id: "cyber-sanctuary",
    title: "CYBER SANCTUARY // 3D SUITE",
    subtitle: "Low-Poly Environment & Asset Kit",
    category: "GAME DEV OPERATION",
    discipline: "gamedev",
    badge: "BLENDER 3D",
    badgeColor: "orange",
    starred: true,
    themeStyle: "orange-cyan",
    objective: "Design, model, sculpt, and UV-unwrap modular 3D game assets and environmental props in Blender ready for direct export into real-time engines.",
    brief: "Crafted a stylized low-poly sci-fi modular kit in Blender. Utilized non-destructive modifiers (Bevel, Mirror, Weighted Normal), custom color palettes for zero-texture-lag draw calls, and optimized mesh topology. Assets were rigged, baked, and exported cleanly as .GLTF/.OBJ for seamless Godot Engine integration.",
    techStack: ["Blender 3D", "PBR Materials", "UV Unwrapping", "Low-Poly Modeling", "Godot Asset Pipeline"],
    keyFeatures: [
      "Low-Poly Topology under 4K triangles per asset",
      "Modular Grid Snapping for rapid level layout",
      "Custom Vertex Color Palette workflow",
      "Exported & Tested in Godot 4 3D scene renderer",
    ],
    demoUrl: "https://artstation.com",
    githubUrl: "https://github.com",
    imageArt: {
      primaryColor: "#ff6a00",
      secondaryColor: "#00d2ff",
      accentColor: "#ffe600",
      iconName: "Box",
      graphicLabel: "BLENDER ASSET",
    },
  },
  {
    id: "packet-sentinel",
    title: "PACKET SENTINEL // TELEMETRY",
    subtitle: "Real-Time Network Protocol Analyzer",
    category: "CYBERSECURITY LAB",
    discipline: "cybersecurity",
    badge: "SECURITY",
    badgeColor: "lime",
    notificationCount: 1,
    themeStyle: "green-dark",
    objective: "Inspect live network interfaces, dissect layer 2-4 headers (Ethernet, IPv4/v6, TCP/UDP), and detect suspicious port scans or ARP spoofing attempts.",
    brief: "Implemented a network telemetry tool written in Python utilizing raw socket captures and Scapy dissection. Detects unauthorized ARP reply broadcasts, flags anomalous TCP SYN scan signatures, and exports structured PCAP audit logs for incident response review.",
    techStack: ["Python", "Scapy", "Wireshark", "Raw Sockets", "TCP/IP Protocol", "Linux"],
    keyFeatures: [
      "Live Packet Sniffing with zero third-party GUI dependencies",
      "ARP Spoofing & TCP SYN flood detection heuristics",
      "Protocol Distribution & Bandwidth Statistics",
      "Export to industry-standard PCAP format",
    ],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    imageArt: {
      primaryColor: "#00ff66",
      secondaryColor: "#0a2212",
      accentColor: "#39ff14",
      iconName: "ShieldAlert",
      graphicLabel: "NET_SENTINEL",
    },
  },
  {
    id: "crypto-vault",
    title: "CRYPTO VAULT // KEY AUDITOR",
    subtitle: "Zero-Knowledge Encryption & Entropy Suite",
    category: "CYBERSECURITY LAB",
    discipline: "cybersecurity",
    badge: "CRYPTOGRAPHY",
    badgeColor: "purple",
    notificationCount: 3,
    themeStyle: "purple-magenta",
    objective: "Build an authenticated encryption utility and credential security auditor evaluating entropy and modern cipher resistance.",
    brief: "Engineered a command-line credential management utility implementing AES-256-GCM authenticated encryption and Argon2id key derivation. Includes a password entropy analysis engine based on NIST guidelines, memory-safe key erasure routines, and HMAC verification.",
    techStack: ["Python", "Argon2id", "AES-256-GCM", "Cryptography", "Bash"],
    keyFeatures: [
      "AES-256-GCM Authenticated Encryption with nonce rotation",
      "Argon2id memory-hard password hashing",
      "Shannon entropy analysis for credential strength scoring",
      "Zero-persistence memory wiping on process exit",
    ],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    imageArt: {
      primaryColor: "#c026d3",
      secondaryColor: "#00f0ff",
      accentColor: "#ff007f",
      iconName: "Lock",
      graphicLabel: "VAULT SEC",
    },
  },
  {
    id: "neural-insight",
    title: "NEURAL INSIGHT // PREDICTIVE",
    subtitle: "Exploratory Data Analysis & ML Pipeline",
    category: "DATA ANALYSIS OPERATION",
    discipline: "datascience",
    badge: "DATA SCIENCE",
    badgeColor: "cyan",
    starred: true,
    themeStyle: "blue-cyan",
    objective: "Execute comprehensive data cleansing, exploratory correlation analysis, and train supervised machine learning models on complex tabular datasets.",
    brief: "Developed an automated exploratory data analysis (EDA) pipeline utilizing Python, Pandas, NumPy, and Scikit-Learn. The system ingests multi-variable datasets, handles missingness and categorical encoding, detects outliers, and compares Random Forest vs. Gradient Boosted models with cross-validation metrics.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
    keyFeatures: [
      "Automated Missing Value Imputation & Feature Scaling",
      "Pearson & Spearman Correlation Heatmap Generation",
      "ROC-AUC, Precision-Recall, and F1 Score Evaluation",
      "Exportable summary reports with interactive plots",
    ],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    imageArt: {
      primaryColor: "#00d2ff",
      secondaryColor: "#004080",
      accentColor: "#00ffff",
      iconName: "BarChart3",
      graphicLabel: "DATA PIPELINE",
    },
  },
  {
    id: "nexus-engine",
    title: "NEXUS // FULL-STACK PLATFORM",
    subtitle: "High-Performance Modular Web Architecture",
    category: "SOFTWARE ENG OPERATION",
    discipline: "softwareeng",
    badge: "SOFTWARE ENG",
    badgeColor: "orange",
    starred: true,
    themeStyle: "yellow-red",
    objective: "Develop a type-safe web platform featuring authenticated endpoints, reactive component state, and CI/CD automated pipeline.",
    brief: "Created a full-stack developer portfolio and web utility platform built with React, TypeScript, and modern styling. Employs modular component patterns, accessible semantics, responsive layouts across devices, and automated GitHub Actions build verification.",
    techStack: ["TypeScript", "React 19", "Tailwind CSS", "Vite", "Node.js", "Git"],
    keyFeatures: [
      "100% Strict Type-Safety across state and component props",
      "Automated GitHub Actions CI/CD pipeline",
      "Zero-latency client-side transitions and sound design",
      "Mobile-responsive layout with sub-second initial load",
    ],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    imageArt: {
      primaryColor: "#ffe600",
      secondaryColor: "#ff0055",
      accentColor: "#ff6a00",
      iconName: "Code2",
      graphicLabel: "FULL STACK",
    },
  },
];
