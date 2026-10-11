import React from 'react';
import { Gamepad2, ShieldAlert, BarChart3, Code2, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { profileData } from '../data/profile';
import { soundManager } from '../utils/soundEffects';
import type { NavSection } from './Navbar';

interface HeroSectionProps {
  onNavigate: (section: NavSection) => void;
  onFilterDiscipline?: (discipline: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onFilterDiscipline }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-[#1e1e2e] bg-sketch-paper border-b-2 border-[#313244]">
      
      {/* =========================================================================
          Illustrated Moonscape & Floating Cloud Layers (Catppuccin Palette)
          ========================================================================= */}
      
      {/* Concentric Radiant Illustrated Moon (Inspired by Reference Image 2) */}
      <div className="absolute right-[-10%] top-[5%] md:right-[2%] md:top-[0%] w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] md:w-[680px] md:h-[680px] pointer-events-none select-none flex items-center justify-center opacity-40 md:opacity-60">
        {/* Ring 4 (Outermost soft Mauve halo) */}
        <div className="absolute w-full h-full rounded-full border border-[#cba6f7]/20 bg-[#cba6f7]/5" />
        {/* Ring 3 */}
        <div className="absolute w-[80%] h-[80%] rounded-full border border-[#b4befe]/25 bg-[#b4befe]/8" />
        {/* Ring 2 */}
        <div className="absolute w-[60%] h-[60%] rounded-full border border-[#f5c2e7]/30 bg-[#f5c2e7]/10" />
        {/* Center Radiant Moon */}
        <div className="absolute w-[42%] h-[42%] rounded-full bg-gradient-to-br from-[#f5c2e7] via-[#cba6f7] to-[#b4befe] shadow-[0_0_100px_rgba(203,166,247,0.35)]" />
      </div>

      {/* Hand-Drawn Floating Clouds drifting across the Moon (Inspired by Image 1 & 2) */}
      <div className="absolute right-[4%] top-[22%] w-56 h-12 rounded-full bg-[#181825]/90 backdrop-blur-xs border-2 border-[#313244] pointer-events-none animate-float-slow shadow-[3px_3px_0px_#11111b] flex items-center px-4">
        <div className="w-8 h-8 rounded-full bg-[#313244]/40 -mt-6 ml-4" />
        <div className="w-12 h-12 rounded-full bg-[#313244]/40 -mt-8 ml-2" />
      </div>
      <div className="absolute right-[16%] top-[48%] w-72 h-14 rounded-full bg-[#181825]/95 backdrop-blur-xs border-2 border-[#313244] pointer-events-none animate-float-delayed shadow-[3px_3px_0px_#11111b] flex items-center px-4">
        <div className="w-10 h-10 rounded-full bg-[#313244]/40 -mt-8 ml-8" />
        <div className="w-14 h-14 rounded-full bg-[#313244]/40 -mt-10 ml-3" />
      </div>

      {/* Twinkling Doodle Stars & Sparkles */}
      <div className="absolute right-[28%] top-[12%] text-[#f9e2af] text-xl animate-pulse pointer-events-none select-none">✦</div>
      <div className="absolute right-[42%] top-[28%] text-[#cba6f7] text-sm pointer-events-none select-none">★</div>
      <div className="absolute right-[8%] top-[70%] text-[#f5c2e7] text-lg animate-bounce pointer-events-none select-none">✨</div>
      <div className="absolute left-[34%] top-[16%] text-[#89dceb] text-base pointer-events-none select-none">✦</div>

      {/* Vertical 'SCROLLDOWN' on Left Edge (from Image 2) */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 text-[#6c7086] font-mono text-[10px] tracking-widest select-none">
        <span className="[writing-mode:vertical-lr] uppercase tracking-[0.3em] font-semibold">
          SCROLLDOWN
        </span>
        <div className="w-[1px] h-12 bg-[#45475a]" />
      </div>

      {/* Vertical Stacked 'P O R / T F O / L I O' on Right Edge (from Image 1) */}
      <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-1 text-[#6c7086] font-display font-black text-xs tracking-widest select-none opacity-50">
        <span>P O R</span>
        <span>T F O</span>
        <span>L I O</span>
      </div>

      {/* =========================================================================
          Main Hero Content
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Left Text Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Pill Sticker */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181825] border-2 border-[#313244] shadow-[2px_2px_0px_#11111b] sketch-sticker">
              <span className="w-2 h-2 rounded-full bg-[#a6e3a1] animate-ping" />
              <span className="font-mono text-xs text-[#cdd6f4] font-medium">
                {profileData.school} • <span className="text-[#a6e3a1] font-bold">Open for OJT</span>
              </span>
            </div>

            {/* Headline with Hand-Drawn Charm */}
            <div className="space-y-2">
              <div className="font-hand text-2xl sm:text-3xl text-[#cba6f7] flex items-center gap-2">
                <span>Hello, I'm {profileData.name}</span>
                <span className="inline-block animate-wave">👋</span>
              </div>
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05]">
                Computer Science Undergrad &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cba6f7] via-[#f5c2e7] to-[#fab387]">
                  Creative Developer.
                </span>
              </h1>
            </div>

            {/* Hand-Drawn Washi Tape Note */}
            <div className="relative inline-block py-1.5 px-4 washi-tape rounded-md">
              <p className="font-hand text-xl text-[#f5e0dc] tracking-wide">
                "{profileData.doodleQuote}"
              </p>
            </div>

            {/* Elevator Pitch */}
            <p className="text-[#bac2de] font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
              {profileData.bio}
            </p>

            {/* 4 Illustrated Discipline Cards */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#a6adc8] mb-3 flex items-center gap-1.5 font-bold">
                <Sparkles size={14} className="text-[#f9e2af]" />
                <span>WHAT I LOVE BUILDING & STUDYING</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {profileData.disciplines.map((item, idx) => {
                  const icons = [Gamepad2, ShieldAlert, BarChart3, Code2];
                  const Icon = icons[idx] || Sparkles;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        soundManager.playSelect();
                        if (onFilterDiscipline) {
                          const discKeys = ['gamedev', 'cybersecurity', 'datascience', 'softwareeng'];
                          onFilterDiscipline(discKeys[idx]);
                        }
                        onNavigate('projects');
                      }}
                      onMouseEnter={() => soundManager.playHover()}
                      className="text-left p-3.5 rounded-2xl bg-[#181825] border-2 border-[#313244] hover:border-[#cba6f7] hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-[3px_3px_0px_#11111b] group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#313244]/60 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                        <Icon size={16} style={{ color: item.accent }} />
                      </div>
                      <div className="font-display font-bold text-xs text-white tracking-wide truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] font-mono text-[#a6adc8] truncate mt-0.5">
                        {item.tag}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={() => {
                  soundManager.playConfirm();
                  onNavigate('projects');
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-6 py-3.5 rounded-full bg-[#cba6f7] text-[#11111b] font-display font-extrabold text-sm tracking-wide shadow-[3px_3px_0px_#11111b] border-2 border-[#11111b] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  soundManager.playSelect();
                  onNavigate('skills');
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-6 py-3.5 rounded-full bg-[#181825] text-white hover:bg-[#313244] font-display font-bold text-sm tracking-wide shadow-[3px_3px_0px_#11111b] border-2 border-[#313244] hover:border-[#b4befe] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Skill Board</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playSelect();
                  onNavigate('contact');
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="px-5 py-3.5 rounded-full bg-transparent text-[#cdd6f4] hover:text-white font-display font-semibold text-sm hover:underline cursor-pointer"
              >
                <span>Contact & Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Sketchbook Illustrated Profile Card */}
          <div className="lg:col-span-4">
            <div className="sketch-card p-6 relative bg-[#181825] border-2 border-[#313244]">
              
              {/* Top Tape Sticker */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#fab387]/30 border-dashed border-x-2 border-[#fab387]/60 rounded-sm" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b-2 border-[#313244] pb-4 mb-4 mt-2">
                <div>
                  <div className="text-xs font-mono text-[#a6adc8] uppercase">Student Profile</div>
                  <div className="font-display font-extrabold text-xl text-white">OJT Candidate</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#cba6f7]/20 border-2 border-[#cba6f7]/40 flex items-center justify-center text-[#cba6f7]">
                  <Heart size={18} className="fill-[#cba6f7]" />
                </div>
              </div>

              {/* Profile Details List */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-[#313244]/60">
                  <span className="text-[#a6adc8]">Focus</span>
                  <span className="text-white font-bold">Game Dev & CS</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#313244]/60">
                  <span className="text-[#a6adc8]">Engine</span>
                  <span className="text-[#cba6f7] font-bold">Godot 4 (GDScript)</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#313244]/60">
                  <span className="text-[#a6adc8]">3D Art</span>
                  <span className="text-[#fab387] font-bold">Blender 3D</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#313244]/60">
                  <span className="text-[#a6adc8]">Security</span>
                  <span className="text-[#a6e3a1] font-bold">Python / Scapy</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#313244]/60">
                  <span className="text-[#a6adc8]">Analytics</span>
                  <span className="text-[#89dceb] font-bold">Pandas / ML</span>
                </div>
              </div>

              {/* Warm Doodle Footer Note */}
              <div className="mt-5 p-3.5 rounded-xl bg-[#313244]/40 border-2 border-dashed border-[#45475a]">
                <div className="font-hand text-base text-[#f9e2af] font-semibold">
                  "Ready to learn, build, and contribute to an engineering team with passion!"
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
