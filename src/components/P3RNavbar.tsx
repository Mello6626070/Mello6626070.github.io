import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export type NavTab = 'operations' | 'skills' | 'roadmap' | 'contact';

interface P3RNavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  statusText: string;
}

export const P3RNavbar: React.FC<P3RNavbarProps> = ({
  activeTab,
  onTabChange,
  statusText,
}) => {
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs: { id: NavTab; label: string; p3rKey: string }[] = [
    { id: 'operations', label: 'OPERATIONS', p3rKey: '01' },
    { id: 'skills', label: 'SKILL MATRIX', p3rKey: '02' },
    { id: 'roadmap', label: 'ROADMAP', p3rKey: '03' },
    { id: 'contact', label: 'CONTACT', p3rKey: '04' },
  ];

  const handleTabClick = (tabId: NavTab) => {
    soundManager.playSelect();
    onTabChange(tabId);
    setIsMobileMenuOpen(false);
  };

  const handleMuteToggle = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="relative z-40 border-b border-[#0f294d] bg-[#030914]/90 backdrop-blur-md sticky top-0">
      {/* Persona 3 subtle top cyan accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Persona 3 Wallet-style Status Card */}
          <div className="flex items-center gap-4">
            <div className="relative border border-[#00f0ff]/40 bg-[#06162d] px-3.5 py-1.5 shadow-[0_0_15px_rgba(0,240,255,0.15)] clip-tag">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#00f0ff] flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 bg-[#00f0ff] animate-pulse"></span>
                <span>OJT 2026 // CANDIDATE</span>
              </div>
              <div className="text-xs sm:text-sm font-display font-bold tracking-wider text-white">
                {statusText}
              </div>
            </div>
          </div>

          {/* Center/Right: Desktop Persona 3 Reload Slanted Tabs */}
          <nav className="hidden md:flex items-center gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`relative px-5 py-2 font-display font-bold text-sm tracking-widest transition-all duration-200 transform -skew-x-12 cursor-pointer ${
                    isActive
                      ? 'bg-white text-black shadow-[0_0_20px_rgba(0,240,255,0.6)] translate-y-[-2px] border-l-4 border-[#ff003c]'
                      : 'bg-[#081b36] text-[#699cc9] hover:bg-[#0c2850] hover:text-white border border-[#0e3362]'
                  }`}
                >
                  <span className="inline-block transform skew-x-12">
                    <span className="text-[10px] font-mono mr-1.5 opacity-60">
                      {tab.p3rKey}
                    </span>
                    {tab.label}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-[#00f0ff]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Sound effect toggle & Mobile menu button */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleMuteToggle}
              title={isMuted ? 'Unmute UI Sound FX' : 'Mute UI Sound FX'}
              className="p-2 border border-[#0e3362] bg-[#07172e] hover:bg-[#0d2a52] text-[#00f0ff] transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 border border-[#0e3362] bg-[#07172e] text-white hover:bg-[#0d2a52]"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#0e3362] bg-[#030914] px-4 pt-3 pb-6 space-y-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full text-left px-4 py-3 font-display font-bold text-sm tracking-widest transition-all ${
                  isActive
                    ? 'bg-white text-black border-l-4 border-[#ff003c]'
                    : 'bg-[#081b36] text-[#7eb1df] border border-[#0e3362]'
                }`}
              >
                <span className="text-xs font-mono mr-2 opacity-60">{tab.p3rKey}</span>
                {tab.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
