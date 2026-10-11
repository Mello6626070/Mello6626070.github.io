# Catppuccin Illustrated CS Portfolio

An interactive, hand-drawn sketchbook developer portfolio built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

Styled with the cozy, soothing **Catppuccin Palette** (Mocha Base `#1e1e2e`, Mauve `#cba6f7`, Lavender `#b4befe`, Peach `#fab387`, Mint `#a6e3a1`, and Sky `#89dceb`), combined with an artistic, illustrated drawing design inspired by whimsical floating clouds, concentric glowing moon rings, and hand-drawn doodle notes.

Crafted for an aspiring Computer Science student seeking internship / OJT opportunities across:
- **Game Development** (Godot Engine 4 & Blender 3D)
- **Cybersecurity** (Network Packet Telemetry & Auditing)
- **Data Science & Analytics** (Exploratory Data Analysis & Machine Learning)
- **Software Engineering** (Full-Stack TypeScript & React)

---

## Features

- **Illustrated Nightscape Hero**:
  - Soft concentric radiant moon rings and stylized floating clouds drifting across the night sky.
  - Hand-drawn doodle sparkles and stars (`✦`, `★`, `✨`).
  - Vertical `SCROLLDOWN` prompt and stacked `P O R / T F O / L I O` typography.
  - Interactive discipline shortcut cards.
- **Sketchbook Project Gallery**:
  - Illustrated project cards styled like sketchbook plates with organic borders and shadows.
  - Discipline filter pills (`All Works`, `Game Dev`, `Cybersecurity`, `Data Science`, `Software Eng`).
  - Detailed project inspect dialog with goals, architecture, highlights checklist, and live demo / GitHub links.
- **Skill & Knowledge Board**:
  - Illustrated sticker cards with confidence progress meters and practical context notes.
- **Learning Journey Roadmap**:
  - Step-by-step milestones tracing academic coursework, Godot game lab, security labs, and OJT readiness.
- **Interactive Lo-Fi Audio Player**:
  - Circular Play/Pause & Mute buttons with a live scrubber timeline.
  - Plays in-browser synthesized ambient lo-fi chord progressions via Web Audio API (zero external assets, zero latency).
- **Postcard Contact Section**:
  - 1-click email copy with pastel confetti animation.
  - Direct mail action and external links (GitHub, LinkedIn, itch.io, ArtStation).
- **Automated GitHub Pages Deployment**:
  - Configured with `.github/workflows/deploy.yml` for automated static deployments on push to `main`.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## Customizing Your Information

All personal content is stored in clean TypeScript files under `src/data/`:
- [`src/data/profile.ts`](src/data/profile.ts): Bio, university, email, social links, resume URL.
- [`src/data/projects.ts`](src/data/projects.ts): Your Godot games, Blender assets, security tools, and data projects.
- [`src/data/skills.ts`](src/data/skills.ts): Your tools, confidence percentages, and practical notes.
- [`src/data/roadmap.ts`](src/data/roadmap.ts): Your academic phases and internship deliverables.

---

## Deploying to GitHub Pages

1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY>.git
   git push -u origin main
   ```
2. In your repository on GitHub:
   - Go to **Settings** → **Pages**
   - Under **Build and deployment** → **Source**, select **GitHub Actions**
3. GitHub Actions will automatically compile and deploy your portfolio to `https://<YOUR_USERNAME>.github.io/<YOUR_REPOSITORY>/`!
