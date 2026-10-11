import React from 'react';
import { Gamepad2, ShieldAlert, BarChart3, Code2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { soundManager } from '../utils/soundEffects';
import type { NavTab } from './P3RNavbar';

interface HeroSectionProps {
  onNavigate: (tab: NavTab) => void;
  onFilterDiscipline?: (discipline: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onFilterDiscipline }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#0f294d] bg-gradient-to-b from-[#030914] via-[#051429] to-[#030914]">
      {/* Decorative P3R diagonal speed line overlays */}
      <div className="absolute inset-0 bg-scanlines opacity-40 pointer-events-none" />
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#00aaff]/10 blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 -bottom-12 w-80 h-80 rounded-full bg-[#7928ca]/10 blur-3xl pointer-events-none" />

      {/* Large faint background angled typographic watermark like P3R main menu */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 font-display font-black text-8xl md:text-[14rem] tracking-tighter text-white transform -rotate-12 translate-x-20">
        RELOAD
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 border border-[#00f0ff]/50 bg-[#061830] px-3 py-1 font-mono text-xs tracking-wider text-[#00f0ff] clip-tag">
              <span className="w-1.5 h-1.5 bg-[#00f0ff] animate-ping" />
              <span>{profileData.school} // {profileData.degree}</span>
            </div>

            {/* Slanted High-Contrast Display Heading */}
            <div className="space-y-1">
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
                <span className="block transform -skew-x-6 text-white drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                  {profileData.name}
                </span>
                <span className="block transform -skew-x-6 text-[#00f0ff] mt-2">
                  INTERNSHIP / OJT READY
                </span>
              </h1>
            </div>

            {/* Elevator pitch description */}
            <p className="text-slate-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
              {profileData.bio}
            </p>

            {/* Discipline Badges Grid */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#6c9cc2] mb-3">
                // CORE DISCIPLINES & FOCUS AREAS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'gamedev', label: 'GAME DEV', sub: 'Godot 4 & Blender', icon: Gamepad2, color: 'hover:border-[#00f0ff] hover:text-[#00f0ff]' },
                  { id: 'cybersecurity', label: 'CYBERSECURITY', sub: 'Packets & Defense', icon: ShieldAlert, color: 'hover:border-[#00ff66] hover:text-[#00ff66]' },
                  { id: 'datascience', label: 'DATA SCIENCE', sub: 'Analytics & ML', icon: BarChart3, color: 'hover:border-[#00d2ff] hover:text-[#00d2ff]' },
                  { id: 'softwareeng', label: 'SOFTWARE ENG', sub: 'Full-Stack Apps', icon: Code2, color: 'hover:border-[#ffe600] hover:text-[#ffe600]' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        soundManager.playSelect();
                        if (onFilterDiscipline) onFilterDiscipline(item.id);
                        onNavigate('operations');
                      }}
                      onMouseEnter={() => soundManager.playHover()}
                      className={`text-left p-2.5 border border-[#113159] bg-[#071933]/80 hover:bg-[#0d2a52] transition-all cursor-pointer group clip-tag ${item.color}`}
                    >
                      <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-white mb-1">
                        <Icon size={14} />
                        <span className="font-display font-bold text-xs tracking-wider">{item.label}</span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 truncate">
                        {item.sub}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => {
                  soundManager.playConfirm();
                  onNavigate('operations');
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-6 py-3 font-display font-bold text-sm tracking-widest bg-white text-black hover:bg-[#00f0ff] hover:text-black transition-all transform -skew-x-12 shadow-[0_0_20px_rgba(0,240,255,0.4)] cursor-pointer"
              >
                <span className="inline-block transform skew-x-12">
                  EXPLORE OPERATIONS
                </span>
              </button>

              <button
                onClick={() => {
                  soundManager.playSelect();
                  onNavigate('skills');
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-6 py-3 font-display font-bold text-sm tracking-widest bg-[#0a2347] text-white hover:bg-[#11386e] border border-[#00f0ff]/40 transition-all transform -skew-x-12 cursor-pointer"
              >
                <span className="inline-block transform skew-x-12">
                  SKILL MATRIX
                </span>
              </button>

              <button
                onClick={() => {
                  soundManager.playSelect();
                  onNavigate('contact');
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-5 py-3 font-display font-bold text-sm tracking-widest bg-transparent text-[#00f0ff] hover:text-white border border-[#00f0ff]/20 hover:border-[#00f0ff] transition-all transform -skew-x-12 cursor-pointer"
              >
                <span className="inline-block transform skew-x-12">
                  CONTACT / RESUME
                </span>
              </button>
            </div>

          </div>

          {/* Right Column: Persona 3 Stylized Stat Card */}
          <div className="lg:col-span-4">
            <div className="relative border-2 border-[#00f0ff]/40 bg-[#051730]/90 p-5 shadow-[0_0_30px_rgba(0,170,255,0.15)] clip-p3r-card">
              
              {/* Corner tech badge */}
              <div className="flex items-center justify-between border-b border-[#0f3261] pb-3 mb-4">
                <span className="font-mono text-xs text-[#00f0ff] tracking-widest font-bold">
                  // CANDIDATE PROFILE
                </span>
                <span className="font-mono text-[10px] bg-[#00f0ff]/20 text-[#00f0ff] px-2 py-0.5">
                  ACTIVE
                </span>
              </div>

              {/* Stat rows */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-[#0d274a]">
                  <span className="text-slate-400">TARGET ROLE</span>
                  <span className="text-white font-bold text-right">OJT / INTERN</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#0d274a]">
                  <span className="text-slate-400">GAME ENGINE</span>
                  <span className="text-[#00f0ff] font-bold">GODOT 4 (GDScript)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#0d274a]">
                  <span className="text-slate-400">3D PIPELINE</span>
                  <span className="text-[#ff9900] font-bold">BLENDER 3D</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#0d274a]">
                  <span className="text-slate-400">SECURITY & DATA</span>
                  <span className="text-[#00ff66] font-bold">PYTHON / WIRESHARK</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#0d274a]">
                  <span className="text-slate-400">CORE ARCHITECTURE</span>
                  <span className="text-white font-bold">REACT / TS / LINUX</span>
                </div>
              </div>

              {/* Ready status banner */}
              <div className="mt-5 p-3 bg-gradient-to-r from-[#00f0ff]/10 to-transparent border-l-4 border-[#00f0ff]">
                <div className="text-[11px] font-mono text-[#00f0ff] uppercase tracking-wider font-bold">
                  Ready to deploy
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  Prepared to contribute to production projects and grow rapidly with your engineering team.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
