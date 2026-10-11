import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import type { ProjectItem, DisciplineType } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { soundManager } from '../utils/soundEffects';
import { Sparkles, Layers } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProject: (p: ProjectItem) => void;
  selectedDiscipline?: string;
  onDisciplineChange?: (discipline: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onSelectProject,
  selectedDiscipline = 'all',
  onDisciplineChange,
}) => {
  const [activeFilter, setActiveFilter] = useState<DisciplineType>(
    (selectedDiscipline as DisciplineType) || 'all'
  );

  const filters: { id: DisciplineType; label: string; count: number }[] = [
    { id: 'all', label: 'All Works', count: projectsData.length },
    { id: 'gamedev', label: 'Game Dev & Blender', count: projectsData.filter(p => p.discipline === 'gamedev').length },
    { id: 'cybersecurity', label: 'Cybersecurity', count: projectsData.filter(p => p.discipline === 'cybersecurity').length },
    { id: 'datascience', label: 'Data Science', count: projectsData.filter(p => p.discipline === 'datascience').length },
    { id: 'softwareeng', label: 'Software Eng', count: projectsData.filter(p => p.discipline === 'softwareeng').length },
  ];

  const handleFilterClick = (filterId: DisciplineType) => {
    soundManager.playSelect();
    setActiveFilter(filterId);
    if (onDisciplineChange) {
      onDisciplineChange(filterId);
    }
  };

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.discipline === activeFilter);

  return (
    <section className="py-16 md:py-24 bg-[#1e1e2e] bg-sketch-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#313244] mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#cba6f7] uppercase tracking-wider mb-2 font-bold">
              <Layers size={14} />
              <span>SKETCHBOOK GALLERY // RECENT PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
              Featured Work & Prototypes
            </h2>
          </div>

          <div className="font-hand text-xl text-[#f9e2af] flex items-center gap-1.5 self-start md:self-end">
            <Sparkles size={16} />
            <span>Click any project card to inspect deep-dive sketches</span>
          </div>
        </div>

        {/* Filter Pills with Catppuccin Rounded Style */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => handleFilterClick(f.id)}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-5 py-2.5 rounded-full font-display font-semibold text-xs tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#cba6f7] text-[#11111b] shadow-[3px_3px_0px_#11111b] border-2 border-[#11111b] font-extrabold -translate-y-0.5'
                    : 'bg-[#181825] text-[#a6adc8] hover:text-white hover:bg-[#313244] border-2 border-[#313244] shadow-[2px_2px_0px_#11111b]'
                }`}
              >
                <span>{f.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-[#11111b]/20 text-[#11111b]' : 'bg-[#313244] text-[#bac2de]'
                }`}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Illustrated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
