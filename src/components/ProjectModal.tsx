import React, { useEffect } from 'react';
import type { ProjectItem } from '../data/projects';
import { soundManager } from '../utils/soundEffects';
import { X, Play, CheckCircle2, Sparkles, ChevronLeft, ChevronRight, GripHorizontal } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useDraggableWindow } from '../hooks/useDraggableWindow';

interface ProjectModalProps {
  project: ProjectItem;
  zIndex?: number;
  isActive?: boolean;
  onFocus?: () => void;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  zIndex = 35,
  isActive = true,
  onFocus,
  onClose,
  onNext,
  onPrev,
}) => {
  const {
    isDragging,
    isMaximized,
    windowRef,
    dragHandleProps,
    windowStyle,
  } = useDraggableWindow({
    isOpen: true,
    initialPosition: { x: 30, y: -10 },
    onFocus,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isActive) {
        soundManager.playBack();
        onClose();
      } else if (e.key === 'ArrowRight' && isActive) {
        soundManager.playSelect();
        onNext();
      } else if (e.key === 'ArrowLeft' && isActive) {
        soundManager.playSelect();
        onPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onClose, onNext, onPrev]);

  return (
    <div
      role="region"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 pointer-events-none flex items-center justify-center p-2 sm:p-6"
      style={{ zIndex }}
    >
      {/* Retro Window Container */}
      <div
        ref={windowRef}
        style={windowStyle}
        onPointerDown={() => onFocus?.()}
        className={`pointer-events-auto relative ${
          isMaximized
            ? 'w-[98vw] h-[95vh] max-w-none max-h-none'
            : 'w-full max-w-2xl max-h-[90vh]'
        } bg-[#eff1f5] dark:bg-[#181825] border-2 ${
          isActive
            ? isDragging
              ? 'border-[#fe640b] dark:border-[#fab387] shadow-[14px_14px_0px_rgba(76,79,105,0.35)] dark:shadow-[14px_14px_0px_#05060b]'
              : 'border-[#4c4f69] dark:border-[#89b4fa] shadow-[10px_10px_0px_rgba(76,79,105,0.3)] dark:shadow-[10px_10px_0px_#07080f]'
            : 'border-[#ccd0da] dark:border-[#313244] shadow-[5px_5px_0px_rgba(76,79,105,0.15)] dark:shadow-[5px_5px_0px_#000] opacity-[0.98]'
        } rounded-xl overflow-hidden flex flex-col transition-all duration-150 animate-in zoom-in-95 duration-150`}
      >
        
        {/* Retro Window Titlebar */}
        <div
          {...dragHandleProps}
          className={`${
            isActive
              ? 'bg-[#4c4f69] dark:bg-[#11111b] text-[#eff1f5] dark:text-[#cdd6f4]'
              : 'bg-[#6c6f85] dark:bg-[#1e1e2e] text-[#ccd0da] dark:text-[#a6adc8]'
          } px-4 py-2.5 flex items-center justify-between border-b-2 ${
            isActive
              ? 'border-[#4c4f69] dark:border-[#313244]'
              : 'border-[#ccd0da] dark:border-[#262738]'
          } select-none shrink-0 transition-colors duration-150`}
        >
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-wide pointer-events-none">
            <span className="text-[#eff1f5] dark:text-[#cdd6f4] truncate">
              mello://projects/{project.id}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1 opacity-40 hover:opacity-80 transition-opacity text-xs font-mono select-none pointer-events-none">
            <GripHorizontal size={14} />
            <span className="text-[10px] tracking-widest uppercase">drag to move</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => {
                soundManager.playBack();
                onClose();
              }}
              className="w-6 h-6 rounded-md bg-[#d20f39] hover:bg-[#e64553] text-white flex items-center justify-center text-[10px] cursor-pointer transition-colors shadow-xs"
              title="Close window (Esc)"
            >
              <X size={13} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Header Graphic Banner */}
        <div
          className="p-5 sm:p-7 border-b-2 border-[#ccd0da] dark:border-[#313244] relative shrink-0"
          style={{ backgroundColor: project.bannerBg }}
        >
          {/* Top Row: Category Pill & Navigation */}
          <div className="flex items-center justify-between mb-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-mono font-bold border shadow-[2px_2px_0px_rgba(76,79,105,0.15)] dark:shadow-[2px_2px_0px_#000]"
              style={{
                backgroundColor: `${project.accentColor}25`,
                color: project.accentColor,
                borderColor: `${project.accentColor}60`,
              }}
            >
              {project.categoryName} • {project.badge}
            </span>

            {/* Cycling Controls */}
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <button
                onClick={() => {
                  soundManager.playSelect();
                  onPrev();
                }}
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#201a2b] hover:bg-[#eff1f5] dark:hover:bg-[#322740] text-[#4c4f69] dark:text-white border border-[#ccd0da] dark:border-[#45475a] flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                title="Previous Project (Left Arrow)"
              >
                <ChevronLeft size={13} />
                <span className="hidden sm:inline">Prev</span>
              </button>
              <button
                onClick={() => {
                  soundManager.playSelect();
                  onNext();
                }}
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#201a2b] hover:bg-[#eff1f5] dark:hover:bg-[#322740] text-[#4c4f69] dark:text-white border border-[#ccd0da] dark:border-[#45475a] flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                title="Next Project (Right Arrow)"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </div>

          {/* Title */}
          <h2 id="project-modal-title" className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
            {project.title}
          </h2>
          <p className="font-mono text-xs text-white/80 mt-1 font-semibold">
            {project.subtitle}
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto bg-[#eff1f5] dark:bg-[#181825] text-sm text-[#4c4f69] dark:text-[#cdd6f4]">
          
          {/* Project Objective */}
          <div>
            <div className="font-mono text-xs font-bold text-[#7287fd] dark:text-[#cba6f7] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>// Core Objective & Goals</span>
            </div>
            <p className="p-4 rounded-xl bg-white dark:bg-[#201a2b] border-2 border-[#ccd0da] dark:border-[#313244] leading-relaxed text-[#4c4f69] dark:text-[#cdd6f4]">
              {project.objective}
            </p>
          </div>

          {/* Architecture & Implementation */}
          <div>
            <div className="font-mono text-xs font-bold text-[#fe640b] dark:text-[#fab387] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>// Architecture & Implementation</span>
            </div>
            <p className="p-4 rounded-xl bg-white dark:bg-[#201a2b] border-2 border-[#ccd0da] dark:border-[#313244] leading-relaxed text-[#4c4f69] dark:text-[#cdd6f4]">
              {project.architecture}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <div className="font-mono text-xs font-bold text-[#40a02b] dark:text-[#a6e3a1] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>// Key Highlights & Features</span>
            </div>
            <div className="space-y-2">
              {project.keyHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-[#201a2b] border border-[#ccd0da] dark:border-[#313244]"
                >
                  <CheckCircle2
                    size={16}
                    className="text-[#40a02b] dark:text-[#a6e3a1] shrink-0 mt-0.5"
                  />
                  <span className="text-xs sm:text-sm text-[#4c4f69] dark:text-[#cdd6f4] font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <div className="font-mono text-xs font-bold text-[#6c6f85] dark:text-[#a6adc8] uppercase tracking-wider mb-2">
              // Tools & Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white dark:bg-[#201a2b] text-[#4c4f69] dark:text-white border border-[#ccd0da] dark:border-[#313244] shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#e6e9ef] dark:bg-[#11111b] border-t-2 border-[#ccd0da] dark:border-[#313244] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="font-hand text-sm text-[#7287fd] dark:text-[#cba6f7] flex items-center gap-1">
            <Sparkles size={14} />
            <span>Open for technical review or live playthrough</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playConfirm()}
                className="px-4 py-2 rounded-xl bg-[#fe640b] hover:bg-[#df8e1d] dark:bg-[#fab387] dark:hover:bg-[#f9e2af] text-[#eff1f5] dark:text-[#11111b] font-mono font-bold text-xs shadow-[2px_2px_0px_#4c4f69] dark:shadow-[2px_2px_0px_#11111b] border border-[#4c4f69] dark:border-[#11111b] flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
              >
                <Play size={12} className="fill-current" />
                <span>Play Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playSelect()}
                className="px-4 py-2 rounded-xl bg-white dark:bg-[#201a2b] hover:bg-[#eff1f5] dark:hover:bg-[#322740] text-[#4c4f69] dark:text-white border-2 border-[#4c4f69] dark:border-[#313244] font-mono text-xs font-bold shadow-[2px_2px_0px_rgba(76,79,105,0.2)] dark:shadow-[2px_2px_0px_#000] flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
              >
                <GithubIcon size={14} />
                <span>View Source</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
