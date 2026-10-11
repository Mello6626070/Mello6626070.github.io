import React, { useEffect } from 'react';
import type { ProjectOperation } from '../data/projects';
import { soundManager } from '../utils/soundEffects';
import { ChevronLeft, ChevronRight, X, Play, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface BriefingModalProps {
  operation: ProjectOperation;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const BriefingModal: React.FC<BriefingModalProps> = ({
  operation,
  onClose,
  onNext,
  onPrev,
}) => {
  // Keyboard navigation for authentic game feel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundManager.playBack();
        onClose();
      } else if (e.key === 'ArrowRight') {
        soundManager.playSelect();
        onNext();
      } else if (e.key === 'ArrowLeft') {
        soundManager.playSelect();
        onPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Color theme for modal art banner
  const getBannerGradient = () => {
    switch (operation.themeStyle) {
      case 'cyan-purple':
        return 'from-[#00f0ff] via-[#6b21a8] to-[#0a0216]';
      case 'purple-magenta':
        return 'from-[#7e22ce] via-[#a21caf] to-[#12001e]';
      case 'green-dark':
        return 'from-[#01ef01] via-[#14532d] to-[#011005]';
      case 'orange-cyan':
        return 'from-[#ea580c] via-[#7c2d12] to-[#021322]';
      case 'yellow-red':
        return 'from-[#eab308] via-[#b91c1c] to-[#180303]';
      case 'blue-cyan':
      default:
        return 'from-[#0284c7] via-[#1e3a8a] to-[#020b16]';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Container styled after Watch Dogs 2 Mission Briefing View (Screenshot 2 & 3) */}
      <div className="relative w-full max-w-2xl bg-[#08080b] border-2 border-[#2c2c36] shadow-[0_0_50px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header Graphic Banner with Halftone Dither Texture */}
        <div className={`relative h-44 sm:h-52 w-full bg-gradient-to-r ${getBannerGradient()} p-5 flex flex-col justify-between overflow-hidden shrink-0`}>
          
          {/* Halftone texture overlay */}
          <div className="absolute inset-0 bg-halftone opacity-65 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-scanlines opacity-40 pointer-events-none" />

          {/* Close button at top right */}
          <button
            onClick={() => {
              soundManager.playBack();
              onClose();
            }}
            className="absolute top-3 right-3 z-20 p-2 bg-black/80 hover:bg-black text-white hover:text-[#01ef01] border border-white/20 transition-colors cursor-pointer"
            title="Close Briefing (ESC)"
          >
            <X size={18} />
          </button>

          {/* Category Stamp */}
          <div className="relative z-10 text-[11px] font-mono tracking-widest text-white/90 bg-black/75 px-2.5 py-1 inline-block border border-white/10 uppercase self-start font-bold">
            {operation.category}
          </div>

          {/* Big Halftone Mission Title */}
          <div className="relative z-10 text-center my-auto">
            <div className="text-[11px] font-mono tracking-widest text-white/90 uppercase mb-1 font-bold">
              [ MAIN OPERATION ]
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-wider drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)]">
              {operation.title}
            </h3>
          </div>

          {/* Status strip */}
          <div className="relative z-10 flex justify-between items-center text-[11px] font-mono text-white/80">
            <span className="bg-black/60 px-2 py-0.5 border border-white/10 font-bold">{operation.badge}</span>
            <span className="bg-black/60 px-2 py-0.5 border border-white/10">ACTIVE CANDIDATE PROJECT</span>
          </div>

        </div>

        {/* Navigation Tabs Bar (< ! > directly from Screenshot 2 & 3) */}
        <div className="flex items-center justify-between bg-[#16161f] border-y-2 border-[#242430] px-4 py-2 shrink-0">
          <button
            onClick={() => {
              soundManager.playSelect();
              onPrev();
            }}
            className="flex items-center gap-1 px-3 py-1 bg-[#20202a] hover:bg-[#2c2c3a] text-white font-mono text-xs border border-[#30303e] cursor-pointer"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:inline">PREV</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-white">
            <span className="w-5 h-5 rounded-full bg-[#e82f41] text-white flex items-center justify-center font-bold text-[10px]">
              !
            </span>
            <span className="font-bold tracking-widest uppercase text-slate-200">
              {operation.subtitle}
            </span>
          </div>

          <button
            onClick={() => {
              soundManager.playSelect();
              onNext();
            }}
            className="flex items-center gap-1 px-3 py-1 bg-[#20202a] hover:bg-[#2c2c3a] text-white font-mono text-xs border border-[#30303e] cursor-pointer"
          >
            <span className="hidden sm:inline">NEXT</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Scrollable Briefing Content */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto font-mono text-sm leading-relaxed bg-[#07070a]">
          
          {/* Subtitle Header */}
          <div className="text-white font-bold text-base tracking-wide border-b border-[#1c1c24] pb-2 font-display uppercase">
            {operation.subtitle}
          </div>

          {/* [ OBJECTIVE ] - Signature WD2 neon green bracket */}
          <div className="space-y-2">
            <div className="text-[#01ef01] font-mono font-bold tracking-wider text-sm flex items-center gap-1.5">
              <span>[ OBJECTIVE ]</span>
            </div>
            <p className="text-white pl-2 border-l-2 border-[#01ef01]/40 font-mono text-sm leading-relaxed">
              {operation.objective}
            </p>
          </div>

          {/* [ BRIEF ] - Signature WD2 neon green bracket */}
          <div className="space-y-2">
            <div className="text-[#01ef01] font-mono font-bold tracking-wider text-sm flex items-center gap-1.5">
              <span>[ BRIEF ]</span>
            </div>
            <p className="text-slate-300 pl-2 border-l-2 border-[#01ef01]/40 font-mono text-sm leading-relaxed">
              {operation.brief}
            </p>
          </div>

          {/* [ KEY DELIVERABLES & ARCHITECTURE ] */}
          <div className="space-y-2">
            <div className="text-[#a0a0aa] font-mono font-bold tracking-wider text-sm flex items-center gap-1.5">
              <span>[ ARCHITECTURE & HIGHLIGHTS ]</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
              {operation.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-[#121217] p-2 border border-[#21212c]">
                  <CheckCircle2 size={14} className="text-[#01ef01] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* [ TECH STACK ] */}
          <div className="space-y-2">
            <div className="text-[#ea9040] font-mono font-bold tracking-wider text-sm flex items-center gap-1.5">
              <span>[ TECH STACK ]</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pl-2">
              {operation.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-[#16161e] text-white border border-[#262633]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Primary Action Button (Screenshot 2 Track Mission style) */}
        <div className="px-5 pt-3 pb-2 bg-[#0e0e13] border-t border-[#1e1e26]">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            {operation.demoUrl && (
              <a
                href={operation.demoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playConfirm()}
                className="w-full sm:flex-1 py-3 bg-[#4a4b54] hover:bg-white text-white hover:text-black font-display font-black text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 border-b-2 border-white/30"
              >
                <Play size={14} className="fill-current" />
                <span>Track Mission // Launch Demo</span>
              </a>
            )}

            {operation.githubUrl && (
              <a
                href={operation.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playSelect()}
                className="w-full sm:w-auto px-4 py-3 bg-[#1e1e26] hover:bg-[#282834] text-white font-mono text-xs tracking-wider transition-colors border border-[#30303e] flex items-center justify-center gap-2"
              >
                <GithubIcon size={14} />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>
        </div>

        {/* Bottom Game Keybind Prompts Bar (Screenshot 2 White/Grey Footer) */}
        <div className="p-3 bg-[#f4f4f4] text-black flex items-center justify-between shrink-0 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="bg-[#18181c] text-white px-2 py-0.5 font-bold">
              Select
            </span>
            <span className="hidden sm:inline text-slate-700">
              Show Details
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                soundManager.playBack();
                onClose();
              }}
              className="bg-[#18181c] text-white px-2.5 py-0.5 hover:bg-black font-bold cursor-pointer"
            >
              Return [ESC]
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
