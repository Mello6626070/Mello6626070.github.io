export interface RoadmapPhase {
  id: string;
  phaseCode: string;
  title: string;
  status: 'CURRENT TARGET' | 'COMPLETED' | 'IN PROGRESS';
  targetPeriod: string;
  description: string;
  keyDeliverables: string[];
}

export const roadmapData: RoadmapPhase[] = [
  {
    id: "ojt-internship",
    phaseCode: "PHASE 04 // TARGET",
    title: "OJT / Industry Internship Deployment",
    status: "CURRENT TARGET",
    targetPeriod: "2026 Academic Year",
    description: "Actively seeking an On-the-Job Training (OJT) or internship placement. Prepared to bring solid foundations in Godot/Blender game development, cybersecurity packet analysis, data science modeling, or software engineering into production engineering teams.",
    keyDeliverables: [
      "Immediate availability for remote or hybrid technical internship roles",
      "Eager to learn team development workflows, code reviews, and sprints",
      "Demonstrated ability to self-teach technologies across multiple CS domains",
      "Strong work ethic and collaborative communication",
    ],
  },
  {
    id: "cs-degree",
    phaseCode: "PHASE 03 // ACADEMIC",
    title: "B.S. in Computer Science Coursework",
    status: "IN PROGRESS",
    targetPeriod: "University Program",
    description: "Pursuing rigorous Computer Science degree coursework covering Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, and Software Design.",
    keyDeliverables: [
      "Solid algorithmic problem-solving and complexity analysis (Big-O)",
      "Systems understanding (Memory management, processes, threads)",
      "Consistent academic performance and collaborative project leads",
    ],
  },
  {
    id: "game-dev-lab",
    phaseCode: "PHASE 02 // CREATIVE",
    title: "Godot Engine & Blender Game Lab",
    status: "COMPLETED",
    targetPeriod: "Self-Directed Projects",
    description: "Built playable interactive games in Godot 4 and crafted custom 3D low-poly environment assets in Blender. Focused on tight player controllers, custom shaders, and cross-platform export.",
    keyDeliverables: [
      "Completed 2D/3D physics-based game prototypes",
      "Modular low-poly 3D models with clean UV unwraps",
      "Published playable web builds to itch.io",
    ],
  },
  {
    id: "security-data",
    phaseCode: "PHASE 01 // FOUNDATIONS",
    title: "Cybersecurity & Data Science Foundations",
    status: "COMPLETED",
    targetPeriod: "Practical Labs & Projects",
    description: "Completed packet-level network analysis labs, Python automated data cleaning pipelines, and supervised machine learning model evaluations.",
    keyDeliverables: [
      "Built custom packet sniffer and protocol dissection scripts",
      "Analyzed tabular datasets and trained ML models with Scikit-learn",
      "Linux terminal proficiency and automated Bash scripting",
    ],
  },
];
