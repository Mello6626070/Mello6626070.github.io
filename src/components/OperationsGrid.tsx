import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import type { ProjectOperation, DisciplineType } from '../data/projects';
import { OperationCard } from './OperationCard';
import { soundManager } from '../utils/soundEffects';
import { Filter, Layers } from 'lucide-react';

interface OperationsGridProps {
  onSelectOperation: (operation: ProjectOperation) => void;
  selectedDiscipline?: string;
  onDisciplineChange?: (discipline: string) => void;
}

export const OperationsGrid: React.FC<OperationsGridProps> = ({
  onSelectOperation,
  selectedDiscipline = 'all',
  onDisciplineChange,
}) => {
  const [activeFilter, setActiveFilter] = useState<DisciplineType>(
    (selectedDiscipline as DisciplineType) || 'all'
  );

  const filters: { id: DisciplineType; label: string }[] = [
    { id: 'all', label: 'ALL OPERATIONS' },
    { id: 'gamedev', label: 'GAME DEV & BLENDER' },
    { id: 'cybersecurity', label: 'CYBERSECURITY' },
    { id: 'datascience', label: 'DATA SCIENCE' },
    { id: 'softwareeng', label: 'SOFTWARE ENG' },
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
    <section className="py-12 bg-[#08090d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#1e222f] pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff007f] uppercase tracking-widest mb-1 font-bold">
              <Layers size={14} />
              <span>WATCH DOGS 2 OPERATIONS DECK // PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              FIELD OPERATIONS
            </h2>
          </div>

          <div className="font-mono text-xs text-slate-400 bg-[#12141c] px-3 py-1.5 border border-[#222634]">
            SHOWING <span className="text-[#00ff66] font-bold">{filteredProjects.length}</span> OF <span className="text-white font-bold">{projectsData.length}</span> ACTIVE OPS
          </div>
        </div>

        {/* Filter Pills with Watch Dogs 2 Contrasting Styling */}
        <div className="flex flex-wrap gap-2 mb-8 items-center">
          <div className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
            <Filter size={12} />
            <span>FILTER:</span>
          </div>

          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => handleFilterClick(f.id)}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-4 py-2 text-xs font-display font-bold tracking-wider transition-all transform -skew-x-12 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,0,127,0.4)] border-l-4 border-[#ff007f]'
                    : 'bg-[#12141c] text-[#9ca2b5] hover:bg-[#1a1d27] hover:text-white border border-[#222634]'
                }`}
              >
                <span className="inline-block transform skew-x-12">
                  {f.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Grid matching Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((operation) => (
            <OperationCard
              key={operation.id}
              operation={operation}
              onSelect={onSelectOperation}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
