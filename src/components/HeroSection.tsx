import React from 'react';
import { Gamepad2, Sparkles, Send } from 'lucide-react';
import { profileData } from '../data/profile';
import { soundManager } from '../utils/soundEffects';
import { GithubIcon, LinkedinIcon } from './Icons';
import { DesktopLauncher } from './DesktopLauncher';
import type { DesktopWindowType } from './DesktopLauncher';
import type { NavSection } from './Navbar';
import heroAvatar from '../assets/hero.png';

interface HeroSectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenWindow: (windowType: DesktopWindowType) => void;
  onFilterDiscipline?: (discipline: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenWindow,
  onFilterDiscipline,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-8 border-b-2 border-dashed border-[#9e8492]/30 dark:border-[#5a4568]/40">
      
      {/* Background Illustrated Moon / Glow Rings (Adapts to Light / Dark) */}
      <div className="absolute right-[-10%] top-[-5%] sm:right-[2%] sm:top-[0%] w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] pointer-events-none select-none flex items-center justify-center opacity-30 dark:opacity-50">
        <div className="absolute w-full h-full rounded-full border border-[#8b5aed]/20 dark:border-[#cba6f7]/20 bg-[#8b5aed]/5" />
        <div className="absolute w-[80%] h-[80%] rounded-full border border-[#f472b6]/25 dark:border-[#b4befe]/25 bg-[#f472b6]/5" />
        <div className="absolute w-[55%] h-[55%] rounded-full border border-[#c084fc]/30 dark:border-[#f5c2e7]/30 bg-[#c084fc]/10" />
        <div className="absolute w-[36%] h-[36%] rounded-full bg-[#c084fc]/40 dark:bg-[#cba6f7]/40 blur-md" />
      </div>

      {/* Floating Doodle Clouds */}
      <div className="absolute right-[4%] top-[15%] w-48 h-10 rounded-full bg-white/70 dark:bg-[#201a2b]/80 border-2 border-[#e5dfd8] dark:border-[#4a3a55] pointer-events-none animate-float-slow shadow-[2px_2px_0px_rgba(48,35,42,0.1)] flex items-center px-4">
        <div className="w-6 h-6 rounded-full bg-[#e5dfd8]/50 dark:bg-[#4a3a55]/50 -mt-5 ml-2" />
        <div className="w-10 h-10 rounded-full bg-[#e5dfd8]/50 dark:bg-[#4a3a55]/50 -mt-7 ml-1" />
      </div>

      {/* Twinkling Doodle Stars */}
      <div className="absolute right-[22%] top-[8%] text-[#f59e0b] text-lg animate-pulse pointer-events-none select-none">✦</div>
      <div className="absolute right-[38%] top-[20%] text-[#8b5aed] dark:text-[#cba6f7] text-sm pointer-events-none select-none">★</div>
      <div className="absolute right-[8%] top-[60%] text-[#ec4899] text-base animate-bounce pointer-events-none select-none">✧</div>

      {/* Main Welcome Container */}
      <div className="relative z-10 max-w-[980px] mx-auto space-y-8 sm:space-y-12">
        
        {/* Welcome Flexbox (Marighoul Style) */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          
          {/* Left Text Section */}
          <div className="space-y-4 sm:space-y-5 text-center lg:text-left flex-1">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3e8ff] dark:bg-[#32234a] border-2 border-[#8b5aed]/40 text-[#7c3aed] dark:text-[#cba6f7] font-mono text-xs font-bold shadow-[2px_2px_0px_rgba(48,35,42,0.15)] select-none">
              <span>{profileData.school} • <span className="font-black text-[#16a34a] dark:text-[#a6e3a1]">4th Year CS Student</span></span>
            </div>

            {/* Big Friendly Header */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-display font-black text-[#30232a] dark:text-white tracking-tight leading-[1.08]">
                WELCOME!
              </h1>
              <div className="mt-2 text-lg sm:text-2xl font-hand font-bold text-[#8b5aed] dark:text-[#cba6f7]">
                Hi, I'm {profileData.name}! Computer Science Undergrad.
              </div>
            </div>

            {/* Conversational Bio (Marighoul Style) */}
            <p className="text-base sm:text-lg text-[#4a3946] dark:text-[#cdd6f4] leading-relaxed max-w-2xl">
              Welcome to my cozy personal corner of the web! Here you'll find a collection of my{' '}
              <button
                onClick={() => {
                  soundManager.playSelect();
                  if (onFilterDiscipline) onFilterDiscipline('gamedev');
                  onNavigate('projects');
                }}
                className="font-bold underline decoration-[#8b5aed] hover:text-[#8b5aed] dark:hover:text-[#cba6f7] cursor-pointer"
              >
                Godot game mechanics
              </button>
              ,{' '}
              <button
                onClick={() => {
                  soundManager.playSelect();
                  if (onFilterDiscipline) onFilterDiscipline('cybersecurity');
                  onNavigate('projects');
                }}
                className="font-bold underline decoration-[#0284c7] hover:text-[#0284c7] dark:hover:text-[#89dceb] cursor-pointer"
              >
                cybersecurity packet experiments
              </button>
              , and software projects all in one neat little place.
            </p>

            {/* Washi Tape Quote */}
            <div className="relative inline-block py-1.5 px-4 washi-tape rounded-md">
              <p className="font-hand text-lg sm:text-xl text-[#6b21a8] dark:text-[#f5e0dc] tracking-wide">
                "{profileData.doodleQuote}"
              </p>
            </div>

            {/* Social Media Link Icons (Marighoul & Sharyap Style) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                className="p-2.5 rounded-xl bg-white dark:bg-[#201a2b] border-2 border-[#30232a] dark:border-[#5a4568] text-[#30232a] dark:text-[#cdd6f4] hover:text-[#8b5aed] dark:hover:text-[#cba6f7] shadow-[2px_2px_0px_rgba(48,35,42,0.2)] hover:scale-105 active:scale-95 transition-all"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                className="p-2.5 rounded-xl bg-white dark:bg-[#201a2b] border-2 border-[#30232a] dark:border-[#5a4568] text-[#30232a] dark:text-[#cdd6f4] hover:text-[#8b5aed] dark:hover:text-[#cba6f7] shadow-[2px_2px_0px_rgba(48,35,42,0.2)] hover:scale-105 active:scale-95 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={profileData.links.itchio}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundManager.playHover()}
                className="p-2.5 rounded-xl bg-white dark:bg-[#201a2b] border-2 border-[#30232a] dark:border-[#5a4568] text-[#30232a] dark:text-[#cdd6f4] hover:text-[#f43f5e] shadow-[2px_2px_0px_rgba(48,35,42,0.2)] hover:scale-105 active:scale-95 transition-all"
                title="itch.io Game Lab"
              >
                <Gamepad2 size={18} />
              </a>

              <a
                href={`mailto:${profileData.links.email}`}
                onMouseEnter={() => soundManager.playHover()}
                className="px-4 py-2 rounded-xl bg-[#30232a] text-[#f7f4ee] dark:bg-[#cba6f7] dark:text-[#11111b] font-mono text-xs font-bold border-2 border-[#11111b] shadow-[2px_2px_0px_#11111b] hover:scale-105 active:scale-95 transition-transform flex items-center gap-1.5"
                title="Send Work Email"
              >
                <Send size={13} />
                <span>Contact / Email</span>
              </a>
            </div>

          </div>

          {/* Right Framed Welcome Portrait / Sketch Card */}
          <div className="shrink-0 w-64 sm:w-72">
            <div className="relative p-3 bg-white dark:bg-[#201a2b] border-2 border-[#30232a] dark:border-[#5a4568] rounded-2xl shadow-[6px_6px_0px_rgba(48,35,42,0.25)] dark:shadow-[6px_6px_0px_#09060d]">
              
              {/* Tape Accent Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 washi-tape rounded-xs rotate-[-2deg] border border-[#30232a]/20" />

              {/* Portrait Image */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#f5f1eb] dark:bg-[#1a1422] border border-[#e5dfd8] dark:border-[#382b45] flex items-center justify-center">
                <img
                  src={heroAvatar}
                  alt={profileData.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Caption Underneath */}
              <div className="mt-3 text-center space-y-1">
                <div className="font-hand font-bold text-base text-[#30232a] dark:text-white flex items-center justify-center gap-1">
                  <Sparkles size={13} className="text-[#8b5aed] dark:text-[#cba6f7]" />
                  <span>Mello's Desktop Workspace</span>
                </div>
                <div className="font-mono text-[10px] text-[#7e6977] dark:text-[#a6adc8]">
                  Godot 4 • Wireshark • Python • React
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Desktop Icon Launcher Deck (The Sharyap Desktop Signature) */}
        <div className="pt-6 sm:pt-10 border-t-2 border-dashed border-[#9e8492]/30 dark:border-[#5a4568]/40">
          <DesktopLauncher
            onOpenWindow={onOpenWindow}
            onNavigateSection={(sec) => onNavigate(sec as NavSection)}
          />
        </div>

      </div>
    </section>
  );
};
