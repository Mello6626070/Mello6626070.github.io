import React from 'react';
import { Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface TopNavControlsProps {
  isDark: boolean;
  isMuted: boolean;
  onToggleDark: () => void;
  onToggleMute: () => void;
}

export const TopNavControls: React.FC<TopNavControlsProps> = ({
  isDark,
  isMuted,
  onToggleDark,
  onToggleMute,
}) => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto select-none">
      
      {/* 1. Light / Dark Mode Switcher (Lucide Sun / Moon) */}
      <button
        onClick={onToggleDark}
        onMouseEnter={() => soundManager.playHover()}
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/90 dark:bg-[#181825]/90 border-2 border-[#ccd0da] dark:border-[#313244] text-[#4c4f69] dark:text-[#cdd6f4] flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 sm:hover:scale-110 active:scale-90 shadow-[0px_2px_4px_rgba(76,79,105,0.15)] dark:shadow-[0px_2px_6px_rgba(0,0,0,0.5)]"
        title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
      >
        {isDark ? (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[#cba6f7]" />
        ) : (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-[#fe640b]" />
        )}
      </button>

      {/* 2. Sound FX Toggle (Lucide Volume2 / VolumeX) */}
      <button
        onClick={onToggleMute}
        onMouseEnter={() => soundManager.playHover()}
        className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white/90 dark:bg-[#181825]/90 border-2 border-[#ccd0da] dark:border-[#313244] text-[#4c4f69] dark:text-[#cdd6f4] flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 sm:hover:scale-110 active:scale-90 shadow-[0px_2px_4px_rgba(76,79,105,0.15)] dark:shadow-[0px_2px_6px_rgba(0,0,0,0.5)] ${
          isMuted ? 'opacity-40' : ''
        }`}
        title={isMuted ? "Unmute Sound FX" : "Mute Sound FX"}
      >
        {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
      </button>

    </div>
  );
};


