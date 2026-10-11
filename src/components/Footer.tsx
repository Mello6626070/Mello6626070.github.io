import React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playSelect();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-[#0e2a52] bg-[#020610] py-8 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Info */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00f0ff] inline-block animate-pulse"></span>
            <span>PORTFOLIO OS // COMPUTER SCIENCE OJT CANDIDATE</span>
          </div>

          {/* Center Info */}
          <div className="text-slate-500 text-[11px] text-center">
            P3R SLANTED GEOMETRY × WATCH DOGS 2 OPERATIONS DECK
          </div>

          {/* Right Action: Scroll To Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-[#123663] bg-[#061833] hover:bg-[#0c2b57] text-[#00f0ff] hover:text-white transition-colors cursor-pointer"
          >
            <span>TOP [RETURN]</span>
            <ArrowUp size={14} />
          </button>

        </div>
      </div>
    </footer>
  );
};
