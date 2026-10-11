import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playSelect();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#11111b] border-t-2 border-[#313244] py-8 text-xs font-mono text-[#a6adc8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Info */}
          <div className="flex items-center gap-2">
            <Heart size={14} className="text-[#f5c2e7] fill-[#f5c2e7]" />
            <span>Crafted with care by Mello • B.S. in Computer Science</span>
          </div>

          {/* Center Info */}
          <div className="text-[#6c7086] text-center font-hand text-base text-[#f9e2af] flex items-center gap-1">
            <Sparkles size={14} />
            <span>Catppuccin Illustrated Sketchbook Theme</span>
          </div>

          {/* Right Action: Scroll To Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#313244] bg-[#181825] hover:bg-[#313244] text-[#cdd6f4] hover:text-white transition-all shadow-[2px_2px_0px_#11111b] cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>

        </div>
      </div>
    </footer>
  );
};
