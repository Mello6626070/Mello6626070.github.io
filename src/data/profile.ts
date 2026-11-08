export interface ProfileData {
  name: string;
  preferredName: string;
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
    email: string;
    secondaryEmail: string;
    alternateEmail?: string;
    phone: string;
    instagram: string;
    facebook: string;
    github: string;
    linkedin?: string;
    itchio?: string;
    artstation?: string;
    twitter?: string;
    youtube?: string;
    discord?: string;
    kofi?: string;
    bluesky?: string;
    artprints?: string;
    merch?: string;
    resumeUrl?: string;
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
  name: "Jesus Anthony G. Alarcon",
  preferredName: "Anthony",
  handle: "@anthony",
  headline: "4th Year BS Computer Science Student",
  status: "4th Year CS Student",
  degree: "4th Year, B.S. in Computer Science",
  school: "STI College Lucena",
  location: "Lucena City, Quezon",
  tagline: "Learning Godot, 3D modeling in Blender, and exploring code, science, and math.",
  bio: "Hi! I'm Anthony, a 4th-year Computer Science student at STI College Lucena. When I'm not studying or learning new languages and tools, I enjoy playing video games, listening to music, watching anime and shows, reading, 3D modeling in Blender, photography, and exploring science and math.",
  doodleQuote: "exploring games, 3d art, code, and science",
  links: {
    email: "j.anthonyalarcon@proton.me",
    secondaryEmail: "j.anthonyalarcon@gmail.com",
    alternateEmail: "jesusanthonygicana@proton.me",
    phone: "09624605483",
    instagram: "https://www.instagram.com/j.anthonyalarcon/",
    facebook: "https://www.facebook.com/profile.php?id=61568805702116",
    github: "https://github.com/Mello6626070",
    discord: "https://discord.gg",
    twitter: "https://twitter.com",
    bluesky: "https://bsky.app",
    youtube: "https://youtube.com",
    kofi: "https://ko-fi.com",
    artprints: "https://www.inprnt.com",
    merch: "https://shop.example.com",
    linkedin: "https://linkedin.com",
    itchio: "https://itch.io",
    artstation: "https://artstation.com",
    resumeUrl: "#resume",
  },
  disciplines: [
    {
      title: "3D Art & Photography",
      tag: "Blender 3D & Photography",
      color: "bg-[#fab387]/20 text-[#fab387] border-[#fab387]/40",
      accent: "#fab387",
      desc: "Low-poly 3D models in Blender and photography, shared on Instagram.",
    },
    {
      title: "Game Development",
      tag: "Godot 4 & Bevy Engine",
      color: "bg-[#cba6f7]/20 text-[#cba6f7] border-[#cba6f7]/40",
      accent: "#cba6f7",
      desc: "Studying game mechanics, GDScript, physics, shaders, and Rust-based Bevy Engine concepts.",
    },
    {
      title: "Systems & Networking",
      tag: "Shell & Microcontrollers",
      color: "bg-[#a6e3a1]/20 text-[#a6e3a1] border-[#a6e3a1]/40",
      accent: "#a6e3a1",
      desc: "Shell scripting, networking fundamentals, and Arduino IDE.",
    },
    {
      title: "Programming Stack",
      tag: "Multi-Language Study",
      color: "bg-[#89dceb]/20 text-[#89dceb] border-[#89dceb]/40",
      accent: "#89dceb",
      desc: "Actively studying languages across paradigms: Rust, C++, C#, Java, Python, TypeScript, and React.",
    },
  ],
};
