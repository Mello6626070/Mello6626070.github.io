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
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#1f1f26] bg-gradient-to-b from-[#07070a] via-[#0d0d12] to-[#07070a]">
      {/* Decorative Watch Dogs 2 subtle scanlines and dither */}
      <div className="absolute inset-0 bg-scanlines opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

      {/* Large faint background angled typographic watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 font-display font-black text-8xl md:text-[14rem] tracking-tighter text-white transform -rotate-12 translate-x-20">
        OPERATIONS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 border border-[#2d2d38] bg-[#121217] px-3 py-1 font-mono text-xs tracking-wider text-[#01ef01] clip-tag font-bold">
              <span className="w-1.5 h-1.5 bg-[#01ef01] animate-ping" />
              <span>{profileData.school} // {profileData.degree}</span>
            </div>

            {/* Slanted High-Contrast Display Heading */}
            <div className="space-y-1">
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
                <span className="block transform -skew-x-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  {profileData.name}
                </span>
                <span className="inline-block transform -skew-x-6 text-white bg-black px-3 py-1 border-l-4 border-[#01ef01] mt-2 font-mono text-2xl sm:text-3xl tracking-widest">
                  [ STATUS: READY FOR OJT / INTERNSHIP ]
                </span>
              </h1>
            </div>

            {/* Elevator pitch description */}
            <p className="text-slate-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
              {profileData.bio}
            </p>

            {/* Discipline Badges Grid */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#01ef01] mb-3 font-bold">
                // CORE DISCIPLINES & FOCUS AREAS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'gamedev', label: 'GAME DEV', sub: 'Godot 4 & Blender', icon: Gamepad2, border: 'hover:border-[#1f9cf7]' },
                  { id: 'cybersecurity', label: 'CYBERSECURITY', sub: 'Packets & Defense', icon: ShieldAlert, border: 'hover:border-[#01ef01]' },
                  { id: 'datascience', label: 'DATA SCIENCE', sub: 'Analytics & ML', icon: BarChart3, border: 'hover:border-[#d97706]' },
                  { id: 'softwareeng', label: 'SOFTWARE ENG', sub: 'Full-Stack Apps', icon: Code2, border: 'hover:border-white' },
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
                      className={`text-left p-2.5 border border-[#24242e] bg-[#121217] hover:bg-[#191921] transition-all cursor-pointer group clip-tag ${item.border}`}
                    >
                      <div className="flex items-center gap-1.5 text-slate-300 group-hover:text-white mb-1">
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

            {/* Call To Action Buttons (Watch Dogs 2 Clean High-Contrast) */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => {
                  soundManager.playConfirm();
                  onNavigate('operations');
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-6 py-3 font-display font-black text-sm tracking-widest bg-white text-black hover:bg-[#01ef01] hover:text-black transition-all transform -skew-x-12 shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer"
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
                className="px-6 py-3 font-display font-bold text-sm tracking-widest bg-[#15151c] text-white hover:bg-[#22222b] border border-[#2f2f3d] hover:border-[#01ef01] transition-all transform -skew-x-12 cursor-pointer"
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
                className="px-5 py-3 font-display font-bold text-sm tracking-widest bg-transparent text-white hover:bg-white hover:text-black border border-white/30 transition-all transform -skew-x-12 cursor-pointer"
              >
                <span className="inline-block transform skew-x-12">
                  CONTACT / RESUME
                </span>
              </button>
            </div>

          </div>

          {/* Right Column: Watch Dogs 2 Dark Carbon Stat Card */}
          <div className="lg:col-span-4">
            <div className="relative border-2 border-[#262632] bg-[#101015] p-5 shadow-[0_4px_25px_rgba(0,0,0,0.7)] clip-p3r-card">
              
              {/* Corner tech badge */}
              <div className="flex items-center justify-between border-b border-[#21212b] pb-3 mb-4">
                <span className="font-mono text-xs text-[#01ef01] tracking-widest font-bold">
                  // CANDIDATE PROFILE
                </span>
                <span className="font-mono text-[10px] bg-[#1e1e26] text-white px-2 py-0.5 border border-[#30303c] font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Stat rows */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-[#1a1a22]">
                  <span className="text-slate-400">TARGET ROLE</span>
                  <span className="text-white font-bold text-right">OJT / INTERN</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#1a1a22]">
                  <span className="text-slate-400">GAME ENGINE</span>
                  <span className="text-[#1f9cf7] font-bold">GODOT 4 (GDScript)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#1a1a22]">
                  <span className="text-slate-400">3D PIPELINE</span>
                  <span className="text-[#d97706] font-bold">BLENDER 3D</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#1a1a22]">
                  <span className="text-slate-400">SECURITY & DATA</span>
                  <span className="text-[#01ef01] font-bold">PYTHON / WIRESHARK</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#1a1a22]">
                  <span className="text-slate-400">CORE ARCHITECTURE</span>
                  <span className="text-white font-bold">REACT / TS / LINUX</span>
                </div>
              </div>

              {/* Ready status banner with WD2 phosphor green accent */}
              <div className="mt-5 p-3 bg-[#01ef01]/10 border-l-4 border-[#01ef01]">
                <div className="text-[11px] font-mono text-[#01ef01] uppercase tracking-wider font-bold">
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
