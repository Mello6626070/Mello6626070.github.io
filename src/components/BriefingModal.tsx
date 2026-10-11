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
        return 'from-[#00f0ff] via-[#7928ca] to-[#0d041c]';
      case 'purple-magenta':
        return 'from-[#8000ff] via-[#d9008f] to-[#140020]';
      case 'green-dark':
        return 'from-[#00ff66] via-[#0d5929] to-[#021208]';
      case 'orange-cyan':
        return 'from-[#ff6a00] via-[#c2410c] to-[#041c30]';
      case 'yellow-red':
        return 'from-[#ffe600] via-[#dc2626] to-[#220404]';
      case 'blue-cyan':
      default:
        return 'from-[#00d2ff] via-[#004080] to-[#021327]';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Container styled after Watch Dogs 2 Mission Briefing View (Screenshot 2 & 3) */}
      <div className="relative w-full max-w-2xl bg-[#090b10] border-2 border-[#163c6d] shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh]">
        
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
            className="absolute top-3 right-3 z-20 p-2 bg-black/70 hover:bg-black text-white hover:text-[#00f0ff] border border-white/20 transition-colors cursor-pointer"
            title="Close Briefing (ESC)"
          >
            <X size={18} />
          </button>

          {/* Category Stamp */}
          <div className="relative z-10 text-[11px] font-mono tracking-widest text-white/90 bg-black/60 px-2.5 py-1 inline-block border border-white/10 uppercase self-start">
            {operation.category}
          </div>

          {/* Big Halftone Mission Title */}
          <div className="relative z-10 text-center my-auto">
            <div className="text-[11px] font-mono tracking-widest text-[#00f0ff] uppercase mb-1">
              [ FIELD OPERATION BRIEFING ]
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-wider drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
              {operation.title}
            </h3>
          </div>

          {/* Status strip */}
          <div className="relative z-10 flex justify-between items-center text-[11px] font-mono text-white/80">
            <span className="bg-black/50 px-2 py-0.5 border border-white/10">{operation.badge}</span>
            <span className="bg-black/50 px-2 py-0.5 border border-white/10">ACTIVE CANDIDATE PROJECT</span>
          </div>

        </div>

        {/* Navigation Tabs Bar (< ! > directly from Screenshot 2 & 3) */}
        <div className="flex items-center justify-between bg-[#111622] border-y-2 border-[#163c6d] px-4 py-2 shrink-0">
          <button
            onClick={() => {
              soundManager.playSelect();
              onPrev();
            }}
            className="flex items-center gap-1 px-3 py-1 bg-[#1a2336] hover:bg-[#25324d] text-white font-mono text-xs border border-[#2b3c5c] cursor-pointer"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:inline">PREV</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-white">
            <span className="w-5 h-5 rounded-full bg-[#ff003c] text-white flex items-center justify-center font-bold text-[10px]">
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
            className="flex items-center gap-1 px-3 py-1 bg-[#1a2336] hover:bg-[#25324d] text-white font-mono text-xs border border-[#2b3c5c] cursor-pointer"
          >
            <span className="hidden sm:inline">NEXT</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Scrollable Briefing Content */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto font-mono text-sm leading-relaxed bg-[#06080d]">
          
          {/* Subtitle Header */}
          <div className="text-white font-bold text-base tracking-wide border-b border-[#142136] pb-2 font-display uppercase">
            {operation.subtitle}
          </div>

          {/* [ OBJECTIVE ] - Signature WD2 neon green bracket */}
          <div className="space-y-2">
            <div className="text-[#00ff66] font-mono font-bold tracking-wider text-sm flex items-center gap-1.5">
              <span>[ OBJECTIVE ]</span>
            </div>
            <p className="text-slate-200 pl-2 border-l-2 border-[#00ff66]/30 font-sans text-sm sm:text-base leading-relaxed">
              {operation.objective}
            </p>
          </div>

          {/* [ BRIEF ] - Signature WD2 neon green bracket */}
          <div className="space-y-2">
            <div className="text-[#00ff66] font-mono font-bold tracking-wider text-sm flex items-center gap-1.5">
              <span>[ BRIEF ]</span>
            </div>
            <p className="text-slate-300 pl-2 border-l-2 border-[#00ff66]/30 font-sans text-sm sm:text-base leading-relaxed">
              {operation.brief}
            </p>
          </div>

          {/* [ KEY DELIVERABLES & ARCHITECTURE ] */}
          <div className="space-y-2">
            <div className="text-[#00f0ff] font-mono font-bold tracking-wider text-sm flex items-center gap-1.5">
              <span>[ ARCHITECTURE & HIGHLIGHTS ]</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
              {operation.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-[#0c1524] p-2 border border-[#142a47]">
                  <CheckCircle2 size={14} className="text-[#00f0ff] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* [ TECH STACK ] */}
          <div className="space-y-2">
            <div className="text-[#ff9900] font-mono font-bold tracking-wider text-sm flex items-center gap-1.5">
              <span>[ TECH STACK ]</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pl-2">
              {operation.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-[#0c2448] text-[#9ecaff] border border-[#173e73]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Action Footer (Track Mission / Demo CTA + Return ESC) */}
        <div className="p-4 bg-[#0d121c] border-t-2 border-[#163c6d] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          
          {/* Main Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {operation.demoUrl && (
              <a
                href={operation.demoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playConfirm()}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-white hover:bg-[#00f0ff] text-black font-display font-bold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <Play size={14} className="fill-black" />
                <span>LAUNCH DEMO</span>
              </a>
            )}

            {operation.githubUrl && (
              <a
                href={operation.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playSelect()}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-[#17253b] hover:bg-[#203657] text-white font-mono text-xs tracking-wider transition-colors border border-[#2b4c7a] flex items-center justify-center gap-2"
              >
                <GithubIcon size={14} />
                <span>GITHUB REPO</span>
              </a>
            )}
          </div>

          {/* Bottom Game Keybind Prompts (from Screenshot 2 & 3) */}
          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="bg-[#192438] px-2 py-0.5 border border-[#2c3e5e] text-slate-300">
              ← / → Navigate
            </span>
            <button
              onClick={() => {
                soundManager.playBack();
                onClose();
              }}
              className="bg-[#192438] px-2 py-0.5 border border-[#2c3e5e] text-slate-300 hover:text-white cursor-pointer"
            >
              Return [ESC]
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
