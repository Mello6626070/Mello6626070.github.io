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
      <div
        className="p-5 sm:p-6 border-b-2 border-[#30232a]/20 dark:border-[#5a4568]/40 relative"
        style={{ backgroundColor: project.bannerBg }}
      >
        {/* Subtle doodle stamp */}
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#1e1726] border-2 border-[#30232a] dark:border-[#5a4568] flex items-center justify-center shadow-[2px_2px_0px_rgba(48,35,42,0.2)] dark:shadow-[2px_2px_0px_#000] group-hover:rotate-6 transition-transform">
            <span style={{ color: project.accentColor }}>{getIcon()}</span>
          </div>

          <span
            className="px-3 py-1 rounded-full text-xs font-mono font-bold border shadow-[2px_2px_0px_rgba(48,35,42,0.15)] dark:shadow-[2px_2px_0px_#000]"
            style={{
              backgroundColor: `${project.accentColor}25`,
              color: project.accentColor,
              borderColor: `${project.accentColor}60`,
            }}
          >
            {project.badge}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-display font-black text-xl text-[#30232a] dark:text-white group-hover:text-[#8b5aed] dark:group-hover:text-[#cba6f7] transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-[#5a4855] dark:text-[#a6adc8] mt-1 font-semibold">
          {project.subtitle}
        </p>
      </div>

      {/* Body: Summary & Tech Pills */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-white dark:bg-[#201a2b]">
        
        <p className="text-sm text-[#4a3946] dark:text-[#bac2de] leading-relaxed">
          {project.summary}
        </p>

        {/* Tech Badges (Sharyap tag button style) */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#f5f1eb] dark:bg-[#17121d] text-[#30232a] dark:text-[#cdd6f4] border border-[#e5dfd8] dark:border-[#382b45] drop-shadow-tag hover:translate-y-[1px] transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-3 flex items-center justify-between border-t-2 border-dashed border-[#9e8492]/30 dark:border-[#5a4568]/40">
            <span className="font-hand text-base text-[#8b5aed] dark:text-[#cba6f7] font-bold flex items-center gap-1">
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
                  className="px-3 py-1.5 rounded-xl bg-[#8b5aed] hover:bg-[#7c3aed] text-white font-mono font-bold text-xs shadow-[2px_2px_0px_#11111b] border border-[#11111b] flex items-center gap-1 hover:scale-105 active:scale-95 transition-all"
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
                  className="p-1.5 rounded-xl bg-white dark:bg-[#1a1422] hover:bg-[#ede9fe] dark:hover:bg-[#2e233d] text-[#30232a] dark:text-white border-2 border-[#30232a] dark:border-[#5a4568] shadow-[2px_2px_0px_rgba(48,35,42,0.2)] dark:shadow-[2px_2px_0px_#000] hover:scale-105 active:scale-95 transition-all"
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
