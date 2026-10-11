import React from 'react';
import { ArrowUp, Box } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playSelect();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-[#d0d0d5] bg-[#f4f4f4] py-4 text-black font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Left Info */}
          <div className="flex items-center gap-2 text-slate-800 font-bold">
            <span className="w-2 h-2 bg-black inline-block animate-pulse"></span>
            <span>PORTFOLIO OS // COMPUTER SCIENCE OJT CANDIDATE</span>
          </div>

          {/* Center Hexagonal Icon (from WD2 bottom bar) */}
          <div className="text-slate-500 flex items-center gap-1.5 font-bold">
            <Box size={16} className="text-slate-600" />
            <span className="text-[11px] uppercase tracking-wider">WATCH DOGS 2 UI ARCHITECTURE</span>
          </div>

          {/* Right Action: Return ESC Keycap Button (from WD2 bottom bar) */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-2 px-3 py-1 bg-[#18181c] hover:bg-black text-white font-mono text-xs cursor-pointer font-bold shadow-sm"
          >
            <span>Return</span>
            <span className="px-1.5 py-0.2 bg-[#2d2d35] text-[10px] text-slate-200 border border-white/20">
              ESC
            </span>
            <ArrowUp size={12} className="ml-1" />
          </button>

        </div>
      </div>
    </footer>
  );
};
