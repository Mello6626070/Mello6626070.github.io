import React from 'react';
import { Gamepad2, ShieldAlert, BarChart3, Code2, Star, Box, Lock } from 'lucide-react';
import type { ProjectOperation } from '../data/projects';
import { soundManager } from '../utils/soundEffects';

interface OperationCardProps {
  operation: ProjectOperation;
  onSelect: (op: ProjectOperation) => void;
}

export const OperationCard: React.FC<OperationCardProps> = ({ operation, onSelect }) => {
  const getDisciplineIcon = () => {
    switch (operation.discipline) {
      case 'gamedev':
        return operation.imageArt.iconName === 'Box' ? <Box size={18} /> : <Gamepad2 size={18} />;
      case 'cybersecurity':
        return operation.imageArt.iconName === 'Lock' ? <Lock size={18} /> : <ShieldAlert size={18} />;
      case 'datascience':
        return <BarChart3 size={18} />;
      case 'softwareeng':
      default:
        return <Code2 size={18} />;
    }
  };

  // Pre-configured Watch Dogs 2 theme header gradients & dither styles
  const getThemeGradient = () => {
    switch (operation.themeStyle) {
      case 'cyan-purple':
        return 'from-[#00f0ff] via-[#7928ca] to-[#12072b]';
      case 'purple-magenta':
        return 'from-[#8000ff] via-[#d9008f] to-[#1b0028]';
      case 'green-dark':
        return 'from-[#00ff66] via-[#0d5929] to-[#04170a]';
      case 'orange-cyan':
        return 'from-[#ff6a00] via-[#c2410c] to-[#041f38]';
      case 'yellow-red':
        return 'from-[#ffe600] via-[#dc2626] to-[#2b0808]';
      case 'blue-cyan':
      default:
        return 'from-[#00d2ff] via-[#004080] to-[#021429]';
    }
  };

  return (
    <div
      onClick={() => {
        soundManager.playConfirm();
        onSelect(operation);
      }}
      onMouseEnter={() => soundManager.playHover()}
      className="group relative cursor-pointer border-2 border-[#122e54] hover:border-[#00f0ff] bg-[#071325] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] overflow-hidden"
    >
      {/* Top Banner Graphic (Watch Dogs 2 Duotone Halftone Header) */}
      <div className={`relative h-44 sm:h-48 w-full bg-gradient-to-br ${getThemeGradient()} p-4 flex flex-col justify-between overflow-hidden`}>
        
        {/* Halftone dither overlay */}
        <div className="absolute inset-0 bg-halftone opacity-60 mix-blend-overlay pointer-events-none" />
        
        {/* Horizontal Scanlines */}
        <div className="absolute inset-0 bg-scanlines opacity-40 pointer-events-none" />

        {/* Top Header Row within art banner */}
        <div className="flex items-start justify-between relative z-10">
          <div className="bg-black/75 backdrop-blur-xs border border-white/20 px-2.5 py-1 text-[11px] font-mono tracking-widest text-white uppercase clip-tag">
            {operation.imageArt.graphicLabel}
          </div>

          {/* Top Right Badges (Orange notification number or Star badge from WD2 reference) */}
          <div className="flex items-center gap-1.5">
            {operation.starred && (
              <div className="w-7 h-7 bg-[#00f0ff] text-black flex items-center justify-center font-bold text-xs shadow-md clip-tag">
                <Star size={14} className="fill-black" />
              </div>
            )}
            {operation.notificationCount && (
              <div className="w-6 h-6 bg-[#ff6600] text-white flex items-center justify-center font-display font-black text-xs shadow-md rounded-full">
                {operation.notificationCount}
              </div>
            )}
          </div>
        </div>

        {/* Center Artwork Symbol / High-contrast Graphic Element */}
        <div className="relative z-10 flex flex-col items-center justify-center py-2 select-none">
          <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-center group-hover:scale-105 transition-transform duration-200">
            {operation.title.split('//')[0].trim()}
          </div>
          <div className="text-[11px] font-mono text-white/90 bg-black/60 px-2 py-0.5 mt-1 border border-white/10 uppercase tracking-widest">
            {operation.subtitle}
          </div>
        </div>

        {/* Bottom subtle bar of art banner */}
        <div className="relative z-10 flex justify-between items-end">
          <div className="text-[10px] font-mono text-white/75 bg-black/50 px-1.5 py-0.5">
            [CLICK TO INSPECT]
          </div>
        </div>
      </div>

      {/* Bottom Information Strip (Exact WD2 layout from Screenshot 1) */}
      <div className="p-3.5 bg-[#08152b] border-t-2 border-[#122e54] group-hover:border-[#00f0ff] transition-colors">
        <div className="flex items-center gap-3">
          
          {/* Left Category Icon */}
          <div className="p-2 border border-[#163f73] bg-[#051124] text-[#00f0ff] group-hover:text-white group-hover:bg-[#00f0ff]/20 transition-colors">
            {getDisciplineIcon()}
          </div>

          {/* Right Text Details */}
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-mono text-[#6c9cc2] uppercase tracking-wider truncate">
              {operation.category}
            </div>
            <div className="text-sm font-display font-bold text-white tracking-wide truncate group-hover:text-[#00f0ff] transition-colors">
              {operation.title}
            </div>
          </div>

          {/* Pill Badge */}
          <div className="hidden sm:block">
            <span className="text-[10px] font-mono px-2 py-1 bg-[#0c2448] text-[#9fc7ec] border border-[#143b6e] uppercase">
              {operation.badge}
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};
