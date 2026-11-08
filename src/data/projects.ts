export type DisciplineType = 'all' | 'gamedev' | 'cybersecurity' | 'datascience' | 'softwareeng';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  discipline: DisciplineType;
  categoryName: string;
  badge: string;
  accentColor: string; // Catppuccin color hex
  bannerBg: string; // Solid Catppuccin tinted background
  summary: string;
  objective: string;
  architecture: string;
  techStack: string[];
  keyHighlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  doodleIcon: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "chrono-rift",
    title: "Chrono Rift // 2D/3D Action Game",
    subtitle: "Physics-Driven Platformer in Godot 4",
    discipline: "gamedev",
    categoryName: "Game Development",
    badge: "Godot 4 & GDScript",
    accentColor: "#cba6f7", // Mauve
    bannerBg: "#232030",
    summary: "A snappy action platformer featuring custom state machines, screen-shake juice, particle FX, and tight controller input buffering.",
    objective: "Build a responsive character controller and modular combat loop using Godot 4's custom physics layers and event-driven signal bus architecture.",
    architecture: "Engineered in Godot 4.3 with pure GDScript. Decoupled UI, audio, and entity state using an Event-Bus pattern. Created custom 2D canvas shaders for chromatic hit-stops, coyote time, and pixel-accurate collision layers.",
    techStack: ["Godot 4", "GDScript", "Custom Shaders", "Physics Engine", "Aseprite"],
    keyHighlights: [
      "Hierarchical Finite State Machine for Player Controller",
      "Decoupled Event-Bus Architecture via Godot Signals",
      "Dynamic Camera Framing & Screen Shake Mechanics",
      "Tight Controller Input Buffering & Jump Arcs",
    ],
    demoUrl: "https://itch.io",
    githubUrl: "https://github.com",
    doodleIcon: "Gamepad2",
  },
  {
    id: "cyber-sanctuary",
    title: "Cyber Sanctuary // 3D Low-Poly Kit",
    subtitle: "Stylized Environment & Asset Suite",
    discipline: "gamedev",
    categoryName: "Game Development",
    badge: "Blender 3D",
    accentColor: "#fab387", // Peach
    bannerBg: "#28211e",
    summary: "A hand-crafted modular 3D environment pack with clean low-poly topology, baked ambient occlusion, and game-engine export pipelines.",
    objective: "Design, model, sculpt, and UV-unwrap modular 3D assets in Blender, ensuring clean draw-call performance and immediate drag-and-drop Godot integration.",
    architecture: "Crafted in Blender 3D utilizing non-destructive modifiers (Bevel, Weighted Normal), custom vertex color palettes, and unified texture atlases. Rigged and optimized for direct .GLTF export into Godot 4.",
    techStack: ["Blender 3D", "Low-Poly Modeling", "UV Unwrapping", "PBR Texturing", "Godot Asset Pipeline"],
    keyHighlights: [
      "Clean low-poly topology under 4K triangles per asset",
      "Modular grid snapping for rapid level layouts",
      "Custom vertex color palette workflow",
      "Seamlessly imported & verified in Godot 4 3D viewport",
    ],
    demoUrl: "https://artstation.com",
    githubUrl: "https://github.com",
    doodleIcon: "Box",
  },
  {
    id: "packet-sentinel",
    title: "Packet Sentinel // Network Sniffer",
    subtitle: "Real-Time Protocol Telemetry Tool",
    discipline: "cybersecurity",
    categoryName: "Cybersecurity",
    badge: "Python & Wireshark",
    accentColor: "#a6e3a1", // Green
    bannerBg: "#1c2621",
    summary: "A real-time network packet analyzer that captures live network interfaces, decodes protocol headers, and flags suspicious broadcast traffic.",
    objective: "Inspect live layer 2-4 headers (Ethernet, IPv4/v6, TCP/UDP), detect ARP spoofing attempts, and output structured PCAP audit logs.",
    architecture: "Written in Python utilizing raw socket captures and Scapy dissection. Detects unauthorized ARP reply broadcasts, flags anomalous TCP SYN scan signatures, and exports structured PCAP logs for incident response review.",
    techStack: ["Python", "Scapy", "Wireshark", "Raw Sockets", "TCP/IP Protocol", "Linux"],
    keyHighlights: [
      "Live packet sniffing with zero third-party GUI dependencies",
      "ARP spoofing & TCP SYN flood detection heuristics",
      "Protocol distribution & bandwidth telemetry",
      "Export to industry-standard PCAP format",
    ],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    doodleIcon: "ShieldAlert",
  },
  {
    id: "crypto-vault",
    title: "Crypto Vault // Key & Hash Auditor",
    subtitle: "Zero-Knowledge Encryption Utility",
    discipline: "cybersecurity",
    categoryName: "Cybersecurity",
    badge: "Cryptography",
    accentColor: "#f38ba8", // Red / Rose
    bannerBg: "#271b21",
    summary: "A secure credential storage utility implementing AES-256-GCM, Argon2id key derivation, and Shannon entropy password evaluation.",
    objective: "Implement modern cryptographic primitives and memory-safe secret handling for proactive credential security auditing.",
    architecture: "Command-line utility implementing AES-256-GCM authenticated encryption and Argon2id memory-hard password hashing. Computes Shannon entropy scores to help users audit weak passwords before deployment.",
    techStack: ["Python", "Argon2id", "AES-256-GCM", "Cryptography", "Bash"],
    keyHighlights: [
      "AES-256-GCM Authenticated Encryption with nonce rotation",
      "Argon2id memory-hard password hashing",
      "Shannon entropy analysis for credential strength scoring",
      "Zero-persistence memory wiping on process exit",
    ],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    doodleIcon: "Lock",
  },
  {
    id: "neural-insight",
    title: "Neural Insight // Data Analytics",
    subtitle: "Exploratory EDA & ML Modeling Pipeline",
    discipline: "datascience",
    categoryName: "Data Science",
    badge: "Pandas & Scikit-Learn",
    accentColor: "#89dceb", // Sky
    bannerBg: "#1a242c",
    summary: "An automated data pipeline for cleaning raw multi-variate datasets, performing exploratory feature analysis, and evaluating ML models.",
    objective: "Transform noisy tabular data into clear visual insights, engineer predictive features, and benchmark supervised machine learning algorithms.",
    architecture: "Jupyter-based pipeline using Python, Pandas, NumPy, and Scikit-Learn. Handles automated missing value imputation, multi-collinearity checks, and compares Random Forest vs. Gradient Boosted models with cross-validation metrics.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
    keyHighlights: [
      "Automated Missing Value Imputation & Feature Scaling",
      "Pearson & Spearman Correlation Heatmap Generation",
      "ROC-AUC, Precision-Recall, and F1 Score Evaluation",
      "Interactive Seaborn & Plotly visualization charts",
    ],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    doodleIcon: "BarChart3",
  },
  {
    id: "nexus-engine",
    title: "Nexus Platform // Full-Stack Web",
    subtitle: "Type-Safe Modern Web Application",
    discipline: "softwareeng",
    categoryName: "Software Engineering",
    badge: "TypeScript & React",
    accentColor: "#f5c2e7", // Pink
    bannerBg: "#261e27",
    summary: "A high-performance web platform featuring strict type safety, responsive design, modular state management, and CI/CD pipelines.",
    objective: "Engineer a clean full-stack web application with fast client-side rendering, accessible components, and automated GitHub Actions deployment.",
    architecture: "Built with React, TypeScript, and modern styling. Employs component composition, strict types across all props and data stores, and automated production build testing on push.",
    techStack: ["TypeScript", "React", "Tailwind CSS", "Vite", "Node.js", "Git"],
    keyHighlights: [
      "100% Strict Type Safety across state and props",
      "Automated GitHub Actions CI/CD deployment pipeline",
      "Sub-second initial load and responsive layout",
      "Accessible design with smooth micro-interactions",
    ],
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    doodleIcon: "Code2",
  },
];
