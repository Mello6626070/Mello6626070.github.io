import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import type { ProjectItem, DisciplineType } from '../data/projects';
import { soundManager } from '../utils/soundEffects';
import { ExternalLink, Eye, Terminal, Gamepad2, Shield, Box, Code2, Database } from 'lucide-react';
import { GithubIcon } from './Icons';

interface WorkViewProps {
  onSelectProject: (p: ProjectItem) => void;
  isDark?: boolean;
}

export const WorkView: React.FC<WorkViewProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<DisciplineType>('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.discipline === activeFilter);

  const toolsList = [
    { name: 'Godot 4 & GDScript', role: 'Game Engine & Physics', icon: Gamepad2, color: '#cba6f7' },
    { name: 'Python & Scapy', role: 'Packet Telemetry & Automation', icon: Shield, color: '#a6e3a1' },
    { name: 'Wireshark', role: 'Deep Packet Inspection', icon: Shield, color: '#89dceb' },
    { name: 'Blender 3D', role: 'Low-Poly 3D Modeling', icon: Box, color: '#fab387' },
    { name: 'TypeScript & React 19', role: 'Frontend & Web Applications', icon: Code2, color: '#7287fd' },
    { name: 'Linux / Bash CLI', role: 'Systems & Shell Tooling', icon: Terminal, color: '#f38ba8' },
    { name: 'PostgreSQL / SQL', role: 'Relational Database Queries', icon: Database, color: '#04a5e5' },
    { name: 'Git & GitHub', role: 'Version Control & Pipelines', icon: Code2, color: '#fe640b' },
  ];

  return (
    <div className="text-[#4c4f69] dark:text-[#cdd6f4] select-text space-y-10">
      
      {/* Header & Filter Pills */}
      <div className="space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ccd0da] dark:border-[#313244] pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#4c4f69] dark:text-[#cdd6f4]">
              Projects & Work
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#6c6f85] dark:text-[#a6adc8] mt-0.5">
              Showcasing games, cybersecurity tools, low-poly 3D models, and web applications.
            </p>
          </div>

          <span className="font-mono text-xs text-[#fe640b] dark:text-[#fab387] font-bold">
            {filteredProjects.length} PROJECTS
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {[
            { id: 'all' as const, label: 'All Projects' },
            { id: 'gamedev' as const, label: 'Game Development' },
            { id: 'cybersecurity' as const, label: 'Cybersecurity' },
            { id: 'datascience' as const, label: 'Data Science' },
            { id: 'softwareeng' as const, label: 'Software Engineering' },
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => {
                soundManager.playPop();
                setActiveFilter(pill.id);
              }}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer ${
                activeFilter === pill.id
                  ? 'bg-[#4c4f69] text-[#eff1f5] dark:bg-[#cba6f7] dark:text-[#11111b] shadow-xs scale-105'
                  : 'bg-black/5 dark:bg-white/5 text-[#6c6f85] dark:text-[#a6adc8] hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-xl border-2 border-[#ccd0da] dark:border-[#313244] bg-white/60 dark:bg-[#181825]/60 hover:bg-white dark:hover:bg-[#1e1e2e] transition-all p-5 shadow-[4px_4px_0px_rgba(76,79,105,0.15)] dark:shadow-[4px_4px_0px_#11111b] flex flex-col justify-between"
          >
            <div>
              {/* Badge & Category */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className="px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold border"
                  style={{
                    backgroundColor: `${project.accentColor}15`,
                    color: project.accentColor,
                    borderColor: `${project.accentColor}35`,
                  }}
                >
                  {project.badge}
                </span>

                <span className="font-mono text-[11px] text-[#6c6f85] dark:text-[#a6adc8]">
                  {project.categoryName}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg sm:text-xl font-bold text-[#4c4f69] dark:text-white group-hover:text-[#fe640b] dark:group-hover:text-[#fab387] transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-[#6c6f85] dark:text-[#a6adc8] mb-3">
                {project.subtitle}
              </p>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[#4c4f69] dark:text-[#cdd6f4] leading-relaxed mb-4">
                {project.summary}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 font-mono text-[10px] text-[#6c6f85] dark:text-[#a6adc8] border border-black/10 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-[#ccd0da]/60 dark:border-[#313244]/60 flex items-center justify-between">
              <button
                onClick={() => {
                  soundManager.playConfirm();
                  onSelectProject(project);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#fe640b] dark:text-[#fab387] hover:underline cursor-pointer"
              >
                <Eye size={13} />
                <span>INSPECT DETAILS</span>
              </button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundManager.playHover()}
                    className="p-1 text-[#6c6f85] hover:text-[#4c4f69] dark:hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon size={15} />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundManager.playHover()}
                    className="p-1 text-[#6c6f85] hover:text-[#4c4f69] dark:hover:text-white transition-colors"
                    title="Live Demo / Playthrough"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Tools & Technologies Grid */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-2 border-b border-[#ccd0da] dark:border-[#313244] pb-2 font-mono font-bold text-base sm:text-lg text-[#4c4f69] dark:text-white">
          <Terminal size={18} className="text-[#fe640b] dark:text-[#fab387]" />
          <h3>TOOLS & TECHNOLOGIES</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {toolsList.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="p-3 rounded-lg border border-[#ccd0da] dark:border-[#313244] bg-white/40 dark:bg-[#181825]/40 space-y-1"
              >
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#4c4f69] dark:text-[#cdd6f4]">
                  <Icon size={14} style={{ color: tool.color }} />
                  <span className="truncate">{tool.name}</span>
                </div>
                <p className="text-[10px] font-mono text-[#6c6f85] dark:text-[#a6adc8] truncate">
                  {tool.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
