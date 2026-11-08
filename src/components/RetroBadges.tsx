import React, { useState } from 'react';
import { soundManager } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Check,
  Bookmark,
  Gamepad2,
  Atom,
  Shield,
  Box,
  Terminal,
  Cpu,
  Heart,
  Globe,
} from 'lucide-react';

interface BadgeItem {
  id: string;
  label: string;
  sub: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  icon: React.ReactNode;
  tooltip: string;
}

export const RetroBadges: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const badges: BadgeItem[] = [
    {
      id: 'godot',
      label: 'GODOT 4',
      sub: 'GAME ENGINE',
      bgColor: 'bg-[#478cbf]',
      textColor: 'text-white',
      borderColor: 'border-[#2f5c7e]',
      icon: <Gamepad2 size={16} />,
      tooltip: 'Built with Godot Engine 4 & GDScript',
    },
    {
      id: 'react',
      label: 'REACT 19',
      sub: 'TYPESCRIPT',
      bgColor: 'bg-[#23272f]',
      textColor: 'text-[#58c4dc]',
      borderColor: 'border-[#149eca]',
      icon: <Atom size={16} />,
      tooltip: 'Crafted with React 19 & TypeScript',
    },
    {
      id: 'cybersec',
      label: 'WIRESHARK',
      sub: 'PACKET LAB',
      bgColor: 'bg-[#1b2a47]',
      textColor: 'text-[#64b5f6]',
      borderColor: 'border-[#0d47a1]',
      icon: <Shield size={16} />,
      tooltip: 'Deep packet inspection & telemetry',
    },
    {
      id: 'blender',
      label: 'BLENDER',
      sub: '3D ART',
      bgColor: 'bg-[#ea7600]',
      textColor: 'text-white',
      borderColor: 'border-[#a85200]',
      icon: <Box size={16} />,
      tooltip: 'Low-poly 3D modeling & assets',
    },
    {
      id: 'python',
      label: 'PYTHON 3',
      sub: 'DATA & SEC',
      bgColor: 'bg-[#3776ab]',
      textColor: 'text-[#ffd43b]',
      borderColor: 'border-[#234c6f]',
      icon: <Terminal size={16} />,
      tooltip: 'Scripting, packet dissection, and ML pipelines',
    },
    {
      id: 'linux',
      label: 'LINUX OS',
      sub: 'CLI DRIVEN',
      bgColor: 'bg-[#1f2937]',
      textColor: 'text-[#fca5a5]',
      borderColor: 'border-[#111827]',
      icon: <Cpu size={16} />,
      tooltip: 'Terminal driven & CLI ready',
    },
    {
      id: 'human',
      label: 'HUMAN MADE',
      sub: 'NO ALGORITHMS',
      bgColor: 'bg-[#7c3aed]',
      textColor: 'text-[#f3e8ff]',
      borderColor: 'border-[#5b21b6]',
      icon: <Heart size={16} />,
      tooltip: 'Handcrafted personal indie website',
    },
    {
      id: 'indieweb',
      label: 'INDIE WEB',
      sub: 'DIGITAL GARDEN',
      bgColor: 'bg-[#db2777]',
      textColor: 'text-white',
      borderColor: 'border-[#9d174d]',
      icon: <Globe size={16} />,
      tooltip: 'Long live the open personal web!',
    },
  ];

  const handleBadgeClick = (badge: BadgeItem) => {
    soundManager.playConfirm();
    setCopiedId(badge.id);

    try {
      confetti({
        particleCount: 28,
        spread: 50,
        origin: { y: 0.75 },
        colors: ['#cba6f7', '#89dceb', '#f9e2af', '#fab387', '#a6e3a1'],
      });
    } catch {
      // Confetti fallback
    }

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="w-full space-y-4">
      
      {/* Title */}
      <div className="flex items-center justify-between border-b border-[#ccd0da] dark:border-[#313244] pb-2">
        <div className="flex items-center gap-2">
          <Bookmark size={15} className="text-[#fe640b] dark:text-[#fab387]" />
          <h4 className="font-mono font-bold text-sm sm:text-base text-[#4c4f69] dark:text-[#cdd6f4]">
            88×31 RETRO WEB BUTTONS
          </h4>
        </div>
        <span className="font-mono text-[11px] text-[#6c6f85] dark:text-[#a6adc8] hidden sm:inline">
          click to inspect
        </span>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 place-items-center pt-1">
        {badges.map((b) => {
          const isCopied = copiedId === b.id;
          return (
            <button
              key={b.id}
              onClick={() => handleBadgeClick(b)}
              onMouseEnter={() => soundManager.playHover()}
              title={b.tooltip}
              className={`w-[130px] h-[34px] sm:w-[138px] sm:h-[36px] ${b.bgColor} ${b.textColor} border-2 ${b.borderColor} rounded-sm flex items-center justify-between px-2 cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(0,0,0,0.45)] active:translate-y-0.5 active:shadow-[1px_1px_0px_rgba(0,0,0,0.3)] transition-all select-none overflow-hidden relative group`}
            >
              {/* Icon */}
              <span className="leading-none select-none shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center">
                {isCopied ? <Check size={16} /> : b.icon}
              </span>

              {/* Text */}
              <div className="flex flex-col text-right leading-none min-w-0 flex-1 pl-1">
                <span className="font-mono font-black text-[10px] tracking-tight truncate uppercase">
                  {b.label}
                </span>
                <span className="font-mono font-bold text-[8px] opacity-80 tracking-wider truncate uppercase">
                  {isCopied ? 'COPIED!' : b.sub}
                </span>
              </div>

              {/* Copied flash */}
              {isCopied && (
                <div className="absolute inset-0 bg-white/30 flex items-center justify-center animate-in fade-in duration-100">
                  <Check size={14} className="text-white drop-shadow-md stroke-[3]" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <p className="text-[11px] font-mono text-[#6c6f85] dark:text-[#a6adc8] text-center pt-1 flex items-center justify-center gap-1.5">
        <Sparkles size={11} className="text-[#7287fd] dark:text-[#cba6f7]" />
        <span>Authentic 88×31 pixel badges celebrating the indie personal web!</span>
      </p>

    </div>
  );
};
