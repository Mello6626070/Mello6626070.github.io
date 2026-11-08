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
    <section className="py-12 sm:py-16 px-4 sm:px-8 border-b-2 border-dashed border-[#9e8492]/30 dark:border-[#5a4568]/40 relative">
      <div className="max-w-[980px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b-2 border-dashed border-[#9e8492]/30 dark:border-[#5a4568]/40 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8b5aed] dark:text-[#cba6f7] uppercase tracking-wider mb-2 font-bold">
              <Layers size={14} />
              <span>SKETCHBOOK GALLERY // RECENT PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#30232a] dark:text-white tracking-tight">
              Featured Work & Prototypes
            </h2>
          </div>

          <div className="font-hand text-base sm:text-lg text-[#b45309] dark:text-[#f9e2af] flex items-center gap-1.5 self-start sm:self-end font-bold">
            <Sparkles size={16} />
            <span>Click any card to inspect sketch blueprints</span>
          </div>
        </div>

        {/* Filter Pills with Marighoul / Sharyap Rounded Style */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => handleFilterClick(f.id)}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-4 py-2 rounded-full font-mono font-bold text-xs tracking-wide transition-all duration-150 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#30232a] text-[#f7f4ee] dark:bg-[#cba6f7] dark:text-[#11111b] shadow-[3px_3px_0px_#11111b] border-2 border-[#11111b] -translate-y-0.5'
                    : 'bg-white dark:bg-[#201a2b] text-[#5a4855] dark:text-[#a6adc8] hover:text-[#30232a] dark:hover:text-white border-2 border-[#e5dfd8] dark:border-[#4a3a55] shadow-[2px_2px_0px_rgba(48,35,42,0.1)]'
                }`}
              >
                <span>{f.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive
                    ? 'bg-white/20 dark:bg-[#11111b]/20 text-white dark:text-[#11111b]'
                    : 'bg-[#f5f1eb] dark:bg-[#322740] text-[#7e6977] dark:text-[#bac2de]'
                }`}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Illustrated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
