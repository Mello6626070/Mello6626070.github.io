import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, Send } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export type NavSection = 'projects' | 'skills' | 'journey' | 'contact';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (section: NavSection) => {
    soundManager.playSelect();
    onNavigate(section);
    setIsMobileOpen(false);
  };

  const handleMuteToggle = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#181825]/90 backdrop-blur-md border-b-2 border-[#313244]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Monogram / Name */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('projects')}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#cba6f7] to-[#f5c2e7] flex items-center justify-center text-[#11111b] font-display font-extrabold text-lg shadow-[2px_2px_0px_#11111b] border-2 border-[#45475a] group-hover:rotate-6 transition-transform">
                M
              </div>
              <div>
                <div className="font-display font-bold text-white text-base tracking-wide flex items-center gap-1.5">
                  <span>{profileData.name}</span>
                  <span className="font-hand text-sm text-[#cba6f7]">~ student</span>
                </div>
                <div className="text-xs text-[#a6adc8] font-mono">
                  {profileData.status}
                </div>
              </div>
            </button>
          </div>

          {/* Center: Clean Rounded Navigation Pills */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#1e1e2e] p-1.5 rounded-full border-2 border-[#313244] shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`px-5 py-2 rounded-full font-display font-semibold text-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#cba6f7] text-[#11111b] shadow-[2px_2px_0px_#11111b] font-bold'
                      : 'text-[#cdd6f4] hover:text-white hover:bg-[#313244]/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Social Icons + Hire Me / OJT Button + Sound FX Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              className="p-2.5 rounded-xl bg-[#1e1e2e] border-2 border-[#313244] text-[#cdd6f4] hover:text-[#cba6f7] hover:border-[#cba6f7] transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              className="p-2.5 rounded-xl bg-[#1e1e2e] border-2 border-[#313244] text-[#cdd6f4] hover:text-[#89b4fa] hover:border-[#89b4fa] transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            {/* Audio Toggle */}
            <button
              onClick={handleMuteToggle}
              title={isMuted ? 'Unmute Sound FX' : 'Mute Sound FX'}
              className="p-2.5 rounded-xl bg-[#1e1e2e] border-2 border-[#313244] text-[#cdd6f4] hover:text-[#a6e3a1] hover:border-[#a6e3a1] transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="text-[#a6e3a1]" />}
            </button>

            {/* Hire Me / OJT Button (from Image 2 inspiration!) */}
            <button
              onClick={() => handleNavClick('contact')}
              onMouseEnter={() => soundManager.playHover()}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#fab387] to-[#f9e2af] text-[#11111b] font-display font-extrabold text-sm tracking-wide shadow-[3px_3px_0px_#11111b] border-2 border-[#11111b] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Hire Me</span>
              <Sparkles size={14} className="text-[#11111b]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleMuteToggle}
              className="p-2 rounded-xl bg-[#1e1e2e] border-2 border-[#313244] text-[#cdd6f4]"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-xl bg-[#1e1e2e] border-2 border-[#313244] text-[#cdd6f4]"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="sm:hidden border-t-2 border-[#313244] bg-[#181825] px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-2xl font-display font-semibold text-sm transition-all ${
                activeSection === item.id
                  ? 'bg-[#cba6f7] text-[#11111b] font-bold shadow-[2px_2px_0px_#11111b]'
                  : 'text-[#cdd6f4] hover:bg-[#313244]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#fab387] to-[#f9e2af] text-[#11111b] font-display font-extrabold text-sm shadow-[2px_2px_0px_#11111b] flex items-center justify-center gap-2"
            >
              <span>Hire Me / OJT Inquiry</span>
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
