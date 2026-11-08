import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';
import { profileData } from '../data/profile';

export type NavSection = 'about' | 'projects' | 'skills' | 'journey' | 'badges' | 'contact';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  isDark: boolean;
  onToggleDark: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isDark,
  onToggleDark,
  isMuted,
  onToggleMute,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'journey', label: 'JOURNEY' },
    { id: 'badges', label: 'BADGES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (section: NavSection) => {
    soundManager.playSelect();
    onNavigate(section);
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#2d222b] dark:bg-[#16111d] text-white border-b-2 border-[#1f161e] dark:border-[#382b45] shadow-md select-none transition-colors duration-200">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          
          {/* Left Brand: Marighoul / Sharyap Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('about')}
              onMouseEnter={() => soundManager.playHover()}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#8b5aed] to-[#f472b6] flex items-center justify-center text-white font-mono font-black text-base shadow-[2px_2px_0px_#11111b] border-2 border-white/20 group-hover:rotate-6 transition-transform">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-white text-base sm:text-lg tracking-wide group-hover:text-[#d8b4e2] transition-colors">
                  {profileData.name}
                  <span className="font-hand text-xs text-[#d8b4e2] dark:text-[#cba6f7] ml-1.5 font-normal">
                    .desktop
                  </span>
                </span>
                <span className="text-[10px] text-[#a999a2] font-mono leading-none">
                  {profileData.status}
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links (Marighoul Bold Uppercase Style) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-sm font-bold tracking-wider">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`transition-colors duration-150 py-1 cursor-pointer relative ${
                    isActive
                      ? 'text-[#f5c2e7] dark:text-[#cba6f7]'
                      : 'text-white hover:text-[#d8b4e2]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#f5c2e7] dark:bg-[#cba6f7] rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: SFX, Dark Mode, Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">

            {/* SFX Toggle (Sharyap signature) */}
            <button
              onClick={() => {
                soundManager.playPop();
                onToggleMute();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-[#e8def8] hover:text-white transition-all cursor-pointer hover:scale-105 active:scale-90"
              title={isMuted ? 'Turn SFX ON' : 'Turn SFX OFF (Muted)'}
            >
              {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>

            {/* Dark / Light Mode Toggle (Sharyap signature) */}
            <button
              onClick={() => {
                soundManager.playThemeSwitch();
                onToggleDark();
              }}
              onMouseEnter={() => soundManager.playHover()}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-[#e8def8] hover:text-white transition-all cursor-pointer hover:scale-105 active:scale-90"
              title={isDark ? 'Switch to Light Mode (Graph Paper)' : 'Switch to Dark Mode (Midnight Desktop)'}
            >
              {isDark ? <Sun size={17} className="text-[#f9e2af]" /> : <Moon size={17} className="text-[#cba6f7]" />}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => {
                soundManager.playPop();
                setIsMobileOpen(!isMobileOpen);
              }}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white cursor-pointer ml-1"
              title="Toggle Menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>

        </div>

        {/* Mobile Accordion Dropdown (Marighoul Style) */}
        {isMobileOpen && (
          <div className="md:hidden py-4 border-t border-white/15 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg font-mono text-sm font-bold tracking-wider transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-white/20 text-[#f5c2e7] font-black'
                      : 'text-white hover:bg-white/10 hover:text-[#d8b4e2]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles size={14} className="text-[#f5c2e7]" />}
                </button>
              );
            })}
          </div>
        )}

      </div>
    </header>
  );
};
