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

  // Watch Dogs 2 Duotone halftone banner gradients
  const getThemeGradient = () => {
    switch (operation.themeStyle) {
      case 'cyan-purple':
        return 'from-[#00f0ff] via-[#6b21a8] to-[#0d021c]';
      case 'purple-magenta':
        return 'from-[#7e22ce] via-[#a21caf] to-[#160024]';
      case 'green-dark':
        return 'from-[#01ef01] via-[#14532d] to-[#021206]';
      case 'orange-cyan':
        return 'from-[#ea580c] via-[#7c2d12] to-[#031526]';
      case 'yellow-red':
        return 'from-[#eab308] via-[#b91c1c] to-[#1c0404]';
      case 'blue-cyan':
      default:
        return 'from-[#0284c7] via-[#1e3a8a] to-[#030d1a]';
    }
  };

  // Watch Dogs 2 bottom strip styling (Online Operation vs DLC/Main Operation)
  const isDlcStyle = operation.discipline === 'datascience' || operation.imageArt.graphicLabel.includes('ASSET');

  return (
    <div
      onClick={() => {
        soundManager.playConfirm();
        onSelect(operation);
      }}
      onMouseEnter={() => soundManager.playHover()}
      className="group relative cursor-pointer border-2 border-[#1f1f28] hover:border-white bg-[#0e0e13] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden"
    >
      {/* Top Banner Graphic (Watch Dogs 2 Duotone Halftone Header) */}
      <div className={`relative h-44 sm:h-48 w-full bg-gradient-to-br ${getThemeGradient()} p-4 flex flex-col justify-between overflow-hidden`}>
        
        {/* Halftone dither overlay */}
        <div className="absolute inset-0 bg-halftone opacity-65 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-scanlines opacity-40 pointer-events-none" />

        {/* Top Header Row within art banner */}
        <div className="flex items-start justify-between relative z-10">
          <div className="bg-black/85 backdrop-blur-xs border border-white/20 px-2.5 py-1 text-[11px] font-mono tracking-widest text-white uppercase clip-tag font-bold">
            {operation.imageArt.graphicLabel}
          </div>

          {/* Top Right Badges (Red-Orange notification bubble or Cyan Star from Screenshot 1) */}
          <div className="flex items-center gap-1.5">
            {operation.starred && (
              <div className="relative">
                <div className="w-7 h-7 bg-[#00e5ff] text-black flex items-center justify-center font-bold text-xs shadow-md clip-tag">
                  <Star size={14} className="fill-black" />
                </div>
                {/* Paint drip accent */}
                <div className="w-1 h-2.5 bg-[#00e5ff] mx-auto -mt-0.5" />
              </div>
            )}
            {operation.notificationCount && (
              <div className="w-6 h-6 bg-[#ff3b1e] text-white flex items-center justify-center font-display font-black text-xs shadow-md rounded-full border border-black/30">
                {operation.notificationCount}
              </div>
            )}
          </div>
        </div>

        {/* Center Artwork Symbol / High-contrast Graphic Element */}
        <div className="relative z-10 flex flex-col items-center justify-center py-2 select-none">
          <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] text-center group-hover:scale-105 transition-transform duration-200">
            {operation.title.split('//')[0].trim()}
          </div>
          <div className="text-[11px] font-mono text-white/90 bg-black/75 px-2 py-0.5 mt-1 border border-white/10 uppercase tracking-widest font-semibold">
            {operation.subtitle}
          </div>
        </div>

        {/* Bottom subtle bar of art banner */}
        <div className="relative z-10 flex justify-between items-end">
          <div className="text-[10px] font-mono text-white/80 bg-black/70 px-1.5 py-0.5 border border-white/10">
            [CLICK TO INSPECT]
          </div>
        </div>
      </div>

      {/* Bottom Information Strip (Exact WD2 styling from Screenshot 1) */}
      <div className={`p-3.5 border-t-2 transition-colors ${
        isDlcStyle
          ? 'bg-[#26170e] border-[#3d2517] group-hover:border-[#d97706]'
          : 'bg-[#14131a] border-[#22212b] group-hover:border-white'
      }`}>
        <div className="flex items-center gap-3">
          
          {/* Left Category Icon */}
          <div className={`p-2 border transition-colors ${
            isDlcStyle
              ? 'border-[#4a2e1d] bg-[#1a0f09] text-[#ea9040]'
              : 'border-[#2d2c38] bg-[#1a1922] text-[#d5cbda]'
          }`}>
            {getDisciplineIcon()}
          </div>

          {/* Right Text Details */}
          <div className="flex-1 min-w-0">
            <div className={`text-[10px] font-mono uppercase tracking-wider truncate font-semibold ${
              isDlcStyle ? 'text-[#c26510]' : 'text-[#a89cb8]'
            }`}>
              {operation.category}
            </div>
            <div className={`text-sm font-display font-bold tracking-wide truncate ${
              isDlcStyle ? 'text-[#ea9040]' : 'text-white'
            }`}>
              {operation.title}
            </div>
          </div>

          {/* Pill Badge */}
          <div className="hidden sm:block">
            <span className={`text-[10px] font-mono px-2 py-1 border uppercase font-bold ${
              isDlcStyle
                ? 'bg-[#1c110a] text-[#ea9040] border-[#4a2e1d]'
                : 'bg-[#1c1b24] text-[#d5cbda] border-[#2e2d3b]'
            }`}>
              {operation.badge}
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};
