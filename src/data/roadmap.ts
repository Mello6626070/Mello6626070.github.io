export interface JourneyMilestone {
  id: string;
  step: string;
  title: string;
  timeframe: string;
  status: 'Current Goal' | 'In Progress' | 'Completed';
  color: string;
  description: string;
  bulletPoints: string[];
}

export const roadmapData: JourneyMilestone[] = [
  {
    id: "ojt-internship",
    step: "04",
    title: "Internship / OJT Placement",
    timeframe: "2026 Academic Season",
    status: "Current Goal",
    color: "#f5c2e7", // Pink / Mauve
    description: "Actively seeking an On-the-Job Training (OJT) or technical internship where I can contribute to game development, security analysis, data engineering, or software development.",
    bulletPoints: [
      "Ready to join production engineering workflows, code reviews, and sprints",
      "Quick to learn new frameworks and adapt across domains",
      "Strong work ethic, curious mindset, and reliable communication",
    ],
  },
  {
    id: "academic-degree",
    step: "03",
    title: "B.S. in Computer Science",
    timeframe: "University Coursework",
    status: "In Progress",
    color: "#cba6f7", // Mauve
    description: "Deepening theoretical and practical foundations in Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, and Relational Databases.",
    bulletPoints: [
      "Algorithmic problem solving and Big-O computational analysis",
      "Systems architecture, concurrency, and operating systems memory models",
      "Consistently active in technical coursework and collaborative projects",
    ],
  },
  {
    id: "game-3d-lab",
    step: "02",
    title: "Godot Engine & 3D Modeling Lab",
    timeframe: "Creative Exploration",
    status: "Completed",
    color: "#fab387", // Peach
    description: "Built playable game prototypes in Godot 4 and modeled low-poly 3D environmental assets in Blender, focusing on player feel and asset pipeline efficiency.",
    bulletPoints: [
      "Crafted 2D/3D physics character controllers with state machines",
      "Created modular low-poly models with clean UV unwraps in Blender",
      "Published interactive playable web builds to itch.io",
    ],
  },
  {
    id: "cyber-data-foundations",
    step: "01",
    title: "Cybersecurity & Data Science Foundations",
    timeframe: "Core Labs & Projects",
    status: "Completed",
    color: "#a6e3a1", // Green
    description: "Completed hands-on packet capture labs, written Python network sniffers, and developed automated data analysis pipelines.",
    bulletPoints: [
      "Implemented packet sniffer and ARP detection scripts with Scapy",
      "Conducted exploratory data analyses and trained Scikit-learn models",
      "Linux command line proficiency and automated Bash scripting",
    ],
  },
];
