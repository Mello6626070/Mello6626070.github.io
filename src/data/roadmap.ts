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
    id: "continuous-learning",
    step: "04",
    title: "Continuous Learning & Exploration",
    timeframe: "4th Year & Beyond",
    status: "Current Goal",
    color: "#f5c2e7", // Pink / Mauve
    description: "Deepening knowledge in game engine architectures (Godot 4, Bevy), 3D art workflows in Blender, and exploring system programming with Rust and C++.",
    bulletPoints: [
      "Working with Linux and customizing shell environments",
      "Learning GDScript mechanics, shaders, and procedural systems",
      "Studying software engineering, mathematics, and science principles",
    ],
  },
  {
    id: "academic-degree",
    step: "03",
    title: "B.S. in Computer Science (4th Year)",
    timeframe: "STI College Lucena",
    status: "In Progress",
    color: "#cba6f7", // Mauve
    description: "Deepening theoretical and practical foundations in Data Structures & Algorithms, Operating Systems, Database Management, and Software Design.",
    bulletPoints: [
      "Algorithmic problem solving and computational analysis",
      "Operating systems concepts, memory management, and networks",
      "Collaborative academic coursework and computer science fundamentals",
    ],
  },
  {
    id: "creative-3d-art",
    step: "02",
    title: "Blender 3D Modeling & Photography",
    timeframe: "Visual Creations",
    status: "Completed",
    color: "#fab387", // Peach
    description: "Modeling stylized low-poly props in Blender and capturing photography, published to Instagram.",
    bulletPoints: [
      "Low-poly environmental modeling and color palette design in Blender",
      "Sharing renders and photo collections on @planck6626070",
      "Exploring lighting, composition, and visual storytelling",
    ],
  },
  {
    id: "systems-foundations",
    step: "01",
    title: "Systems & Programming Foundations",
    timeframe: "Core Studies",
    status: "Completed",
    color: "#a6e3a1", // Green
    description: "Studying core programming across languages (Java, Python, C++, C#) and working with Linux tools.",
    bulletPoints: [
      "Command-line proficiency and terminal workflows in Linux",
      "Packet captures and protocol inspection in Wireshark",
      "Microcontroller tinkering using Arduino IDE",
    ],
  },
];
