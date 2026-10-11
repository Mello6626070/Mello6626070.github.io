export interface ProfileData {
  name: string;
  handle: string;
  headline: string;
  status: string;
  degree: string;
  school: string;
  location: string;
  walletBadge: string;
  bio: string;
  links: {
    github: string;
    linkedin: string;
    itchio: string;
    artstation: string;
    email: string;
    resumeUrl: string;
  };
  disciplines: string[];
}

export const profileData: ProfileData = {
  name: "CS Student & Developer",
  handle: "DEV_PORTFOLIO",
  headline: "Aspiring Computer Science Undergrad seeking OJT / Internship",
  status: "STATUS: READY FOR OJT / INTERNSHIP",
  degree: "B.S. in Computer Science",
  school: "College of Computer Studies",
  location: "Available for Remote & On-Site OJT",
  walletBadge: "OJT 2026 // CS CANDIDATE",
  bio: "Passionate Computer Science student with a strong drive for hands-on creation. I bridge multiple worlds: crafting games and 3D assets with Godot & Blender, analyzing network traffic and defending systems in Cybersecurity, transforming complex datasets into insights through Data Science, and shipping clean, robust applications in Software Engineering.",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    itchio: "https://itch.io",
    artstation: "https://artstation.com",
    email: "student.developer@example.com",
    resumeUrl: "#resume",
  },
  disciplines: [
    "Game Dev (Godot & Blender)",
    "Cybersecurity",
    "Data Science / Analytics",
    "Software Engineering"
  ],
};
