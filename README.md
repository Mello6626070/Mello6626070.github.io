# Mello's Orbital Deck // Retro Space Station & CS Portfolio

An interactive, cosmic retro-desktop & indie web developer portfolio built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## Cosmic Features & System Highlights

1. **Retro Space Station Command Deck (`HomeWindow`)**:
   - Terminal frame (`orbit://station-deck`) with real-time status telemetry (`SYS: NOMINAL`).
   - Custom scalable vector navigation icons:
     - **`about`**: Astronaut Helmet & Flight Log
     - **`work`**: Orbital Space Station & Mission Vault
     - **`contact`**: Subspace Comms Dish & Deep Space Relay
   - Interactive **Orbi the Ringed Planet** mascot (replacing the old star) with orbital wobble, stardust confetti explosions, and cosmic celestial chimes!

2. **Roci the UFO Companion (`RociUfoMascot`)**:
   - Animated retro-futuristic flying saucer floating in the lower orbital dock (`animate-ufo`).
   - Glowing tractor beam cone (`animate-beam`), metallic hull trim, and blinking navigation LED lights.
   - Click to hail Roci and trigger cute synthesized UFO chirps (`playRociChirp`) and space transmissions regarding Godot game dev, Wireshark telemetry, and hydration in zero gravity!

3. **Planetary Horizon & Starchart Grid (`CosmicHorizon`)**:
   - Atmospheric celestial horizon line with soft glowing aurora rim replacing the old pond wave.
   - Distant ringed planet, twinkling cosmic particle stars, and coordinate latitude/longitude telemetry markers.
   - Smooth transition between **Retro Starchart Paper** (Light Mode) and **Deep Orbit / Nebula Deck** (Dark Mode).

4. **Orbital Beacon Radio (`MediaScrubberBar`)**:
   - Real-time synthesized ambient lo-fi synthesizer using zero external audio files via the native **Web Audio API**.
   - Frequency tuner (`1420.4 MHz // Hydrogen Line`), interactive track scrubber, and space mission track presets (Voyager 1, Cassini, Apollo, Pulsar).

5. **Mission Vault & Flight Blueprints (`WorkView` & `ProjectModal`)**:
   - Filterable mission dossiers: Godot 4 action platformers, Wireshark packet telemetry analyzers, Blender 3D modular habitat kits, cryptographic vaults, and data science pipelines.
   - Deep-dive blueprint inspection modals (`roci-os://missions/...`).

6. **Deep Space Relay & 88×31 Badges Deck (`ContactSection` & `RetroBadges`)**:
   - 1-click email dispatch frequency copy with stardust particle burst.
   - Authentic 88×31 retro pixel badges (`GODOT 4 ZERO-G`, `ROCI UFO FLIGHT READY`, `WIRESHARK PACKET RADAR`, `BLENDER 3D HABITATS`, `REACT 19 ORBITAL TS`).

---

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, Vite
- **Audio Synthesis**: Native Web Audio API (zero-latency, zero-asset synthesized chords & sound effects)
- **Icons & Visuals**: Custom scalable SVGs + Lucide React
- **Confetti**: canvas-confetti

---

## Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```
