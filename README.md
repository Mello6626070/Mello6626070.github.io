# Persona 3 Reload × Watch Dogs 2 Portfolio

An interactive, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. 

Inspired by the visual design language of **Watch Dogs 2's Operations Deck** (duotone halftone project cards, `[ OBJECTIVE ]` & `[ BRIEF ]` mission deep dives) and **Persona 3 Reload** (dynamic slanted trapezoid menu tabs, midnight aquatic blue theme, and Social Link style skill rankings).

Tailored for an aspiring Computer Science student seeking internship / OJT opportunities across:
- **Game Development** (Godot Engine 4 & Blender 3D)
- **Cybersecurity** (Network traffic analysis & vulnerability auditing)
- **Data Science & Analytics** (Exploratory data analysis & machine learning)
- **Software Engineering** (Full-stack architecture & web platforms)

---

## Features

- **Watch Dogs 2 Operations Deck**:
  - 2-Column responsive grid featuring duotone / halftone art cards with high-contrast colorways.
  - Notification badges (`NEW`, `GODOT 4`, `BLENDER 3D`, `★`).
  - Interactive **Mission Briefing Modal** with neon green brackets for `[ OBJECTIVE ]`, `[ BRIEF ]`, `[ TECH STACK ]`, and direct demo/GitHub links.
  - Keyboard navigation (`ESC` to return, `←` / `→` arrows to cycle through projects).
- **Persona 3 Reload UI Polish**:
  - Cascading slanted trapezoid navigation ribbons (`-skew-x-12`) with high-contrast active tab highlight.
  - Skill Matrix formatted as P3R Social Link / Party Status rank bars (`MAX`, `RANK 8`) with interactive inspect details.
  - Academic & OJT Roadmap timeline.
- **Audio Feedback**:
  - Built-in zero-latency Web Audio API synthesizer for snappy menu clicks and hover ticks, with a 1-click global mute toggle.
- **Easy Customization**:
  - All profile details, projects, skills, and roadmap milestones are stored in isolated data files under `src/data/`.
- **Automated GitHub Pages Deployment**:
  - Pre-configured `.github/workflows/deploy.yml` GitHub Actions pipeline.

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
Open your browser at `http://localhost:5173` to test the site.

### 3. Build for Production
```bash
npm run build
```

---

## Customizing Your Information

You do not need to touch UI layout code to update your portfolio. Simply edit the TypeScript files in `src/data/`:

| File | What to update |
|---|---|
| [`src/data/profile.ts`](src/data/profile.ts) | Your name, school, degree, bio, email, GitHub/LinkedIn/Itch.io links, resume URL. |
| [`src/data/projects.ts`](src/data/projects.ts) | Add, edit, or reorder your projects across Game Dev, Cybersecurity, Data Science, and Software Eng. |
| [`src/data/skills.ts`](src/data/skills.ts) | Adjust your tools (Godot, Blender, Python, etc.), ranks (`MAX`, `RANK 8`), and descriptions. |
| [`src/data/roadmap.ts`](src/data/roadmap.ts) | Customize your academic phases, certifications, and OJT objectives. |

---

## Deploying to GitHub Pages

This repository is ready for automatic deployment using GitHub Actions:

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: P3R x WD2 Portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in Repository Settings**:
   - Go to your GitHub repository on github.com.
   - Navigate to **Settings** → **Pages** (under the "Code and automation" section).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.

3. **Automatic Deployment**:
   - Every time you push to `main`, GitHub Actions will automatically compile and publish your site!
   - Your live site will be available at:
     `https://<YOUR_USERNAME>.github.io/<YOUR_REPOSITORY>/`
