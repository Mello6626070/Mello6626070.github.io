import React, { useEffect } from 'react';
import type { ProjectItem } from '../data/projects';
import { soundManager } from '../utils/soundEffects';
import { X, Play, CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNext,
  onPrev,
}) => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#11111b]/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#181825] border-2 border-[#45475a] rounded-3xl shadow-[8px_8px_0px_#11111b] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.bgGradient} border-b-2 border-[#313244] relative shrink-0`}>
          
          {/* Top Row: Category Pill & Close Button */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-mono font-bold border shadow-[2px_2px_0px_#11111b]"
              style={{
                backgroundColor: `${project.accentColor}25`,
                color: project.accentColor,
                borderColor: `${project.accentColor}60`,
              }}
            >
              {project.categoryName} • {project.badge}
            </span>

            <button
              onClick={() => {
                soundManager.playBack();
                onClose();
              }}
              className="p-2 rounded-full bg-[#1e1e2e] hover:bg-[#313244] text-white border-2 border-[#45475a] shadow-[2px_2px_0px_#11111b] cursor-pointer"
              title="Close (ESC)"
            >
              <X size={16} />
            </button>
          </div>

          {/* Title */}
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
            {project.title}
          </h2>
          <p className="font-mono text-xs text-[#a6adc8] mt-1">
            {project.subtitle}
          </p>

          {/* Cycling Bar Controls */}
          <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#bac2de]">
            <button
              onClick={() => {
                soundManager.playSelect();
                onPrev();
              }}
              className="px-3 py-1 rounded-xl bg-[#1e1e2e] hover:bg-[#313244] text-white border border-[#45475a] flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft size={14} />
              <span>Previous</span>
            </button>

            <span className="font-hand text-base text-[#cba6f7] flex items-center gap-1">
              <span>project plate</span>
              <Sparkles size={12} />
            </span>

            <button
              onClick={() => {
                soundManager.playSelect();
                onNext();
              }}
              className="px-3 py-1 rounded-xl bg-[#1e1e2e] hover:bg-[#313244] text-white border border-[#45475a] flex items-center gap-1 cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          </div>

        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto bg-[#181825] text-sm text-[#bac2de]">
          
          {/* Project Objective */}
          <div>
            <div className="font-mono text-xs font-bold text-[#cba6f7] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>// Core Objective & Goals</span>
            </div>
            <p className="p-4 rounded-2xl bg-[#1e1e2e] border-2 border-[#313244] leading-relaxed text-[#cdd6f4]">
              {project.objective}
            </p>
          </div>

          {/* Architecture & Engineering */}
          <div>
            <div className="font-mono text-xs font-bold text-[#fab387] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>// Architecture & Implementation</span>
            </div>
            <p className="p-4 rounded-2xl bg-[#1e1e2e] border-2 border-[#313244] leading-relaxed text-[#cdd6f4]">
              {project.architecture}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <div className="font-mono text-xs font-bold text-[#a6e3a1] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>// Key Highlights & Features</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyHighlights.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#1e1e2e] border border-[#313244] flex items-start gap-2.5 text-xs text-[#cdd6f4]"
                >
                  <CheckCircle2 size={16} className="text-[#a6e3a1] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="font-mono text-xs font-bold text-[#89dceb] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>// Tools & Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl font-mono text-xs bg-[#1e1e2e] text-[#cdd6f4] border-2 border-[#313244]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Action Footer */}
        <div className="p-5 bg-[#1e1e2e] border-t-2 border-[#313244] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playConfirm()}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#cba6f7] hover:bg-white text-[#11111b] font-display font-bold text-xs tracking-wide shadow-[2px_2px_0px_#11111b] border-2 border-[#11111b] flex items-center justify-center gap-2"
              >
                <Play size={12} className="fill-current" />
                <span>Play / Launch Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playSelect()}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[#181825] hover:bg-[#313244] text-white font-mono text-xs border-2 border-[#45475a] flex items-center justify-center gap-2"
              >
                <GithubIcon size={14} />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>

          <div className="text-[11px] font-mono text-[#6c7086] flex items-center gap-2">
            <span>[ESC] to return</span>
          </div>
        </div>

      </div>
    </div>
  );
};
