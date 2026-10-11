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
    <header className="relative z-40 border-b border-[#1d202b] bg-[#090a0f]/95 backdrop-blur-md sticky top-0">
      {/* Watch Dogs 2 Electric Magenta & Lime top edge */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff007f] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Watch Dogs 2 Dark Carbon Status Card */}
          <div className="flex items-center gap-4">
            <div className="relative border border-[#ff007f]/50 bg-[#12141c] px-3.5 py-1.5 shadow-[0_0_15px_rgba(255,0,127,0.15)] clip-tag">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#00ff66] flex items-center gap-1.5 font-bold">
                <span className="inline-block w-2 h-2 bg-[#00ff66] animate-pulse"></span>
                <span>OJT 2026 // CANDIDATE</span>
              </div>
              <div className="text-xs sm:text-sm font-display font-bold tracking-wider text-white">
                {statusText}
              </div>
            </div>
          </div>

          {/* Center/Right: Slanted Tabs with Watch Dogs 2 Contrast */}
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
                      ? 'bg-white text-black shadow-[0_0_20px_rgba(255,0,127,0.5)] translate-y-[-2px] border-l-4 border-[#ff007f]'
                      : 'bg-[#12141c] text-[#9ca2b5] hover:bg-[#1a1d28] hover:text-white border border-[#222634]'
                  }`}
                >
                  <span className="inline-block transform skew-x-12">
                    <span className="text-[10px] font-mono mr-1.5 text-[#00ff66]">
                      {tab.p3rKey}
                    </span>
                    {tab.label}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-[#00ff66]"></span>
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
              className="p-2 border border-[#222634] bg-[#12141c] hover:bg-[#1a1d28] text-[#00ff66] transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 border border-[#222634] bg-[#12141c] text-white hover:bg-[#1a1d28]"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#1d202b] bg-[#090a0f] px-4 pt-3 pb-6 space-y-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full text-left px-4 py-3 font-display font-bold text-sm tracking-widest transition-all ${
                  isActive
                    ? 'bg-white text-black border-l-4 border-[#ff007f]'
                    : 'bg-[#12141c] text-[#a0a6b8] border border-[#222634]'
                }`}
              >
                <span className="text-xs font-mono mr-2 text-[#00ff66]">{tab.p3rKey}</span>
                {tab.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
