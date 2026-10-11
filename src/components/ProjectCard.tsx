import React from 'react';
import { Gamepad2, ShieldAlert, BarChart3, Code2, Box, Lock, Play, Sparkles } from 'lucide-react';
import type { ProjectItem } from '../data/projects';
import { soundManager } from '../utils/soundEffects';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (p: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getIcon = () => {
    switch (project.doodleIcon) {
      case 'Gamepad2':
        return <Gamepad2 size={20} />;
      case 'Box':
        return <Box size={20} />;
      case 'ShieldAlert':
        return <ShieldAlert size={20} />;
      case 'Lock':
        return <Lock size={20} />;
      case 'BarChart3':
        return <BarChart3 size={20} />;
      case 'Code2':
      default:
        return <Code2 size={20} />;
    }
  };

  return (
    <div
      onClick={() => {
        soundManager.playConfirm();
        onSelect(project);
      }}
      onMouseEnter={() => soundManager.playHover()}
      className="sketch-card flex flex-col justify-between overflow-hidden cursor-pointer group"
    >
      {/* Top Card Graphic Plate */}
      <div className={`p-6 bg-gradient-to-br ${project.bgGradient} border-b-2 border-[#313244] relative`}>
        
        {/* Subtle doodle stamp */}
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-2xl bg-[#1e1e2e] border-2 border-[#313244] flex items-center justify-center shadow-[2px_2px_0px_#11111b] group-hover:rotate-6 transition-transform">
            <span style={{ color: project.accentColor }}>{getIcon()}</span>
          </div>

          <span
            className="px-3 py-1 rounded-full text-xs font-mono font-bold border shadow-[2px_2px_0px_#11111b]"
            style={{
              backgroundColor: `${project.accentColor}20`,
              color: project.accentColor,
              borderColor: `${project.accentColor}50`,
            }}
          >
            {project.badge}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-display font-extrabold text-xl text-white group-hover:text-[#cba6f7] transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-[#a6adc8] mt-1">
          {project.subtitle}
        </p>

      </div>

      {/* Body: Summary & Tech Pills */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-[#181825]">
        
        <p className="text-sm text-[#bac2de] leading-relaxed">
          {project.summary}
        </p>

        {/* Tech Badges */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#1e1e2e] text-[#cdd6f4] border border-[#313244]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-2 flex items-center justify-between border-t-2 border-[#313244]/50">
            <span className="font-hand text-base text-[#cba6f7] flex items-center gap-1">
              <span>inspect sketch</span>
              <Sparkles size={12} />
            </span>

            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playSelect()}
                  className="px-3 py-1.5 rounded-xl bg-[#cba6f7] hover:bg-white text-[#11111b] font-display font-bold text-xs tracking-wide shadow-[2px_2px_0px_#11111b] border border-[#11111b] flex items-center gap-1"
                >
                  <Play size={10} className="fill-current" />
                  <span>Demo</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playSelect()}
                  className="p-1.5 rounded-xl bg-[#1e1e2e] hover:bg-[#313244] text-white border border-[#45475a] shadow-[2px_2px_0px_#11111b]"
                  title="View GitHub Repository"
                >
                  <GithubIcon size={14} />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
