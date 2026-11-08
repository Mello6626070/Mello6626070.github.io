export interface ToolItem {
  name: string;
  category: string;
  iconName: string;
  color: string;
}

export const everydayTools: ToolItem[] = [
  { name: "Godot 4", category: "Game Engine", iconName: "Gamepad2", color: "#cba6f7" },
  { name: "Blender", category: "3D Modeling", iconName: "Box", color: "#fab387" },
  { name: "Figma", category: "UI & Layout Design", iconName: "Palette", color: "#f5c2e7" },
  { name: "Android Studio", category: "Mobile Development", iconName: "Smartphone", color: "#a6e3a1" },
  { name: "Arduino IDE", category: "Microcontrollers", iconName: "Cpu", color: "#89dceb" },
  { name: "Git & GitHub", category: "Version Control", iconName: "Code2", color: "#fe640b" },
];

export const languagesBeingStudied: string[] = [
  "Rust",
  "C++",
  "GDScript",
  "Kotlin",
  "Python",
  "Java",
  "C#",
  "TypeScript",
  "JavaScript",
  "HTML / CSS",
];

export const frameworksBeingStudied: string[] = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bevy Engine",
  ".NET Framework",
];

