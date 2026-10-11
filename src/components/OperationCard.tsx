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

  // Watch Dogs 2 duotone header gradients
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
      className="group relative cursor-pointer border-2 border-[#1e222f] hover:border-[#ff007f] bg-[#0f1118] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,0,127,0.35)] overflow-hidden"
    >
      {/* Top Banner Graphic (Watch Dogs 2 Duotone Halftone Header) */}
      <div className={`relative h-44 sm:h-48 w-full bg-gradient-to-br ${getThemeGradient()} p-4 flex flex-col justify-between overflow-hidden`}>
        
        {/* Halftone dither overlay */}
        <div className="absolute inset-0 bg-halftone opacity-60 mix-blend-overlay pointer-events-none" />
        
        {/* Horizontal Scanlines */}
        <div className="absolute inset-0 bg-scanlines opacity-40 pointer-events-none" />

        {/* Top Header Row within art banner */}
        <div className="flex items-start justify-between relative z-10">
          <div className="bg-black/80 backdrop-blur-xs border border-white/20 px-2.5 py-1 text-[11px] font-mono tracking-widest text-white uppercase clip-tag font-bold">
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
          <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] text-center group-hover:scale-105 transition-transform duration-200">
            {operation.title.split('//')[0].trim()}
          </div>
          <div className="text-[11px] font-mono text-white/90 bg-black/70 px-2 py-0.5 mt-1 border border-white/10 uppercase tracking-widest font-semibold">
            {operation.subtitle}
          </div>
        </div>

        {/* Bottom subtle bar of art banner */}
        <div className="relative z-10 flex justify-between items-end">
          <div className="text-[10px] font-mono text-white/80 bg-black/60 px-1.5 py-0.5 border border-white/10">
            [CLICK TO INSPECT]
          </div>
        </div>
      </div>

      {/* Bottom Information Strip (Exact WD2 layout from Screenshot 1) */}
      <div className="p-3.5 bg-[#12141c] border-t-2 border-[#1e222f] group-hover:border-[#ff007f] transition-colors">
        <div className="flex items-center gap-3">
          
          {/* Left Category Icon */}
          <div className="p-2 border border-[#272c3d] bg-[#171a25] text-[#00ff66] group-hover:text-black group-hover:bg-[#00ff66] transition-colors">
            {getDisciplineIcon()}
          </div>

          {/* Right Text Details */}
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate">
              {operation.category}
            </div>
            <div className="text-sm font-display font-bold text-white tracking-wide truncate group-hover:text-[#ff007f] transition-colors">
              {operation.title}
            </div>
          </div>

          {/* Pill Badge */}
          <div className="hidden sm:block">
            <span className="text-[10px] font-mono px-2 py-1 bg-[#181b26] text-[#b0b8cb] border border-[#272c3d] uppercase font-bold">
              {operation.badge}
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};
