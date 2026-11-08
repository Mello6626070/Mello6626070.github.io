import React from 'react';
import { soundManager } from '../utils/soundEffects';
import { User, Compass, Mail } from 'lucide-react';

export type ActiveModalType = 'about' | 'radar' | 'contact' | null;

interface HomeWindowProps {
  onOpenModal: (modal: ActiveModalType) => void;
  openWindows?: Record<string, boolean>;
  activeWindow?: string | null;
  isDark: boolean;
}

export const HomeWindow: React.FC<HomeWindowProps> = ({
  onOpenModal,
  openWindows = {},
  activeWindow = null,
}) => {
  const navButtons = [
    {
      id: 'about' as const,
      label: 'about',
      icon: User,
    },
    {
      id: 'radar' as const,
      label: 'radar',
      icon: Compass,
    },
    {
      id: 'contact' as const,
      label: 'contact',
      icon: Mail,
    },
  ];

  return (
    <div className="relative w-[92vw] max-w-[560px] select-none z-10 animate-in fade-in zoom-in-95 duration-200">
      
      {/* Main Window Container */}
      <div className="rounded-xl overflow-hidden border-2 border-[#4c4f69] dark:border-[#313244] shadow-[0px_6px_0px_rgba(76,79,105,0.22)] dark:shadow-[0px_8px_0px_#11111b] bg-[#eff1f5] dark:bg-[#181825]">
        
        {/* Retro Window Titlebar (Clean 'home' with no extra text) */}
        <div className="bg-[#4c4f69] dark:bg-[#11111b] text-[#eff1f5] dark:text-[#cdd6f4] px-6 py-2.5 flex items-center justify-between border-b-2 border-[#4c4f69] dark:border-[#313244]">
          <span className="font-mono text-base sm:text-lg font-bold tracking-wider">
          </span>
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          </div>
        </div>

        {/* Window Body Card */}
        <div className="bg-[#eff1f5] dark:bg-[#181825] px-4 sm:px-6 py-8 sm:py-12 md:py-14 text-center transition-colors duration-200">
          
          {/* Main Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#4c4f69] dark:text-[#cdd6f4] tracking-tight">
            hi! <span className="text-[#fe640b] dark:text-[#fab387] font-bold">i’m anthony</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base font-body text-[#6c6f85] dark:text-[#a6adc8] font-normal tracking-wide max-w-md mx-auto">
            4th year computer science student
          </p>

          {/* Action Navigation Buttons */}
          <div className="mt-6 sm:mt-10 md:mt-12 flex items-center justify-center gap-4 sm:gap-8 md:gap-10">
            {navButtons.map((btn) => {
              const IconComponent = btn.icon;
              const isOpen = !!openWindows[btn.id];
              const isActive = activeWindow === btn.id;

              return (
                <div key={btn.id} className="flex flex-col items-center group">
                  <button
                    onClick={() => {
                      onOpenModal(btn.id);
                    }}
                    onMouseEnter={() => soundManager.playHover()}
                    className={`w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-white dark:bg-[#201a2b] border-2 ${
                      isActive
                        ? 'border-[#fe640b] dark:border-[#fab387] ring-2 ring-[#fe640b]/30 dark:ring-[#fab387]/30 shadow-[0px_3px_0px_#fe640b] sm:shadow-[0px_4px_0px_#fe640b]'
                        : isOpen
                        ? 'border-[#4c4f69] dark:border-[#89b4fa] shadow-[0px_3px_0px_rgba(76,79,105,0.22)] sm:shadow-[0px_4px_0px_rgba(76,79,105,0.22)]'
                        : 'border-[#4c4f69] dark:border-[#45475a] shadow-[0px_3px_0px_rgba(76,79,105,0.22)] dark:shadow-[0px_3px_0px_#11111b] sm:shadow-[0px_4px_0px_rgba(76,79,105,0.22)] dark:sm:shadow-[0px_4px_0px_#11111b]'
                    } flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 hover:-translate-y-0.5 sm:hover:scale-110 sm:hover:-translate-y-1 relative`}
                    title={`Open ${btn.label}`}
                  >
                    <IconComponent
                      className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${
                        isActive
                          ? 'text-[#fe640b] dark:text-[#fab387]'
                          : 'text-[#4c4f69] dark:text-[#cdd6f4]'
                      } group-hover:text-[#fe640b] dark:group-hover:text-[#fab387] transition-colors`}
                    />
                    {isOpen && (
                      <span
                        className={`absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2 h-2 rounded-full ${
                          isActive
                            ? 'bg-[#40a02b] dark:bg-[#a6e3a1] animate-ping'
                            : 'bg-[#40a02b] dark:bg-[#a6e3a1]'
                        }`}
                      />
                    )}
                  </button>
                  <div className="flex items-center gap-1 mt-1.5 sm:mt-2">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#4c4f69] dark:text-[#cdd6f4] group-hover:text-[#fe640b] dark:group-hover:text-[#fab387] transition-colors">
                      {btn.label}
                    </span>
                    {isOpen && (
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isActive
                            ? 'bg-[#40a02b] dark:bg-[#a6e3a1] animate-pulse'
                            : 'bg-[#9399b2] dark:bg-[#585b70]'
                        }`}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
};
