import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import type { SkillItem } from '../data/skills';
import { soundManager } from '../utils/soundEffects';
import { Sparkles, ChevronRight } from 'lucide-react';

export const SkillDeck: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0]);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'GAME DEV & 3D', 'CYBERSECURITY', 'DATA SCIENCE', 'SOFTWARE ENG'];

  const filteredSkills = activeCategory === 'ALL'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  const handleSelectSkill = (skill: SkillItem) => {
    soundManager.playSelect();
    setSelectedSkill(skill);
  };

  return (
    <section className="py-12 bg-[#07070a] relative overflow-hidden">
      
      {/* Background Watch Dogs 2 stylized watermark */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-5 font-display font-black text-8xl md:text-[12rem] tracking-tighter text-white transform -rotate-12 translate-x-10 translate-y-10">
        SKILL MATRIX
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="border-b-2 border-[#1e1e26] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#01ef01] uppercase tracking-widest mb-1 flex items-center gap-1.5 font-bold">
              <Sparkles size={14} />
              <span>WATCH DOGS 2 GRAPHIC MATRIX // SKILLS & PROFICIENCY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              SKILL & TECH MATRIX
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400 bg-[#121217] px-3 py-1.5 border border-[#23232c]">
            COMMAND: <span className="text-[#01ef01] font-bold">SELECT SKILL TO INSPECT</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  soundManager.playSelect();
                  setActiveCategory(cat);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-4 py-2 font-display font-bold text-xs tracking-wider transition-all transform -skew-x-12 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] border-l-4 border-[#e82f41]'
                    : 'bg-[#121217] text-[#9ca2b5] hover:bg-[#1a1a22] hover:text-white border border-[#23232c]'
                }`}
              >
                <span className="inline-block transform skew-x-12">
                  {cat}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Slanted Bars Stack */}
          <div className="lg:col-span-7 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-widest text-[#01ef01] mb-2 font-bold">
              // ACTIVE COMPETENCY LIST
            </div>

            <div className="space-y-2">
              {filteredSkills.map((skill) => {
                const isSelected = selectedSkill.id === skill.id;
                return (
                  <div
                    key={skill.id}
                    onClick={() => handleSelectSkill(skill)}
                    onMouseEnter={() => soundManager.playHover()}
                    className={`relative p-3 transition-all duration-150 transform -skew-x-12 cursor-pointer border ${
                      isSelected
                        ? 'bg-white text-black border-l-8 border-[#e82f41] shadow-[0_0_20px_rgba(255,255,255,0.4)] translate-x-2'
                        : 'bg-[#121217] hover:bg-[#1a1a22] text-white border-[#22222b]'
                    }`}
                  >
                    <div className="flex items-center justify-between transform skew-x-12">
                      
                      {/* Left: Arcana & Name */}
                      <div className="flex items-center gap-3">
                        <span className={`text-[11px] font-mono px-2 py-0.5 font-bold uppercase ${
                          isSelected ? 'bg-black text-[#01ef01]' : 'bg-[#1b1b24] text-[#01ef01]'
                        }`}>
                          {skill.arcana}
                        </span>
                        <div>
                          <div className={`font-display font-black text-sm tracking-wider uppercase ${
                            isSelected ? 'text-black' : 'text-white'
                          }`}>
                            {skill.name}
                          </div>
                          <div className={`text-[10px] font-mono ${
                            isSelected ? 'text-slate-800' : 'text-slate-400'
                          }`}>
                            {skill.roleContext}
                          </div>
                        </div>
                      </div>

                      {/* Right: Rank Badge (MAX or Rank 8) */}
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 font-display font-black text-xs tracking-wider uppercase ${
                          skill.rank === 'MAX'
                            ? isSelected
                              ? 'bg-[#e82f41] text-white'
                              : 'bg-[#e82f41] text-white'
                            : isSelected
                              ? 'bg-black text-white'
                              : 'bg-[#1e1e28] text-white border border-[#2e2e3a]'
                        }`}>
                          {skill.rank}
                        </span>
                        <ChevronRight size={14} className={isSelected ? 'text-black' : 'text-slate-500'} />
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Skill Detailed Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="border-2 border-[#2b2b36] bg-[#101015] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.8)] clip-p3r-card">
              
              {/* Header Box */}
              <div className="border-b border-[#21212b] pb-4 mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-xs text-[#01ef01] uppercase tracking-widest font-bold">
                    {selectedSkill.arcana}
                  </span>
                  <span className="font-display font-black text-xs px-2.5 py-1 bg-[#e82f41] text-white">
                    {selectedSkill.rank}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight">
                  {selectedSkill.name}
                </h3>
                <div className="text-xs font-mono text-slate-300 mt-0.5">
                  CATEGORY: <span className="text-white font-bold">{selectedSkill.category}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] font-mono text-[#01ef01] uppercase tracking-wider mb-1 font-bold">
                    // PRACTICAL APPLICATION & EXPERTISE
                  </div>
                  <p className="text-slate-200 font-mono text-sm leading-relaxed bg-[#07070a] p-3 border border-[#1e1e26]">
                    {selectedSkill.description}
                  </p>
                </div>

                {/* Level / Mastery Meter */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>PROFICIENCY PROGRESSION</span>
                    <span className="text-[#01ef01] font-bold">{selectedSkill.levelNumber} / 10</span>
                  </div>
                  <div className="h-2 w-full bg-[#181820] border border-[#262633] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#01ef01] via-white to-[#01ef01] transition-all duration-300"
                      style={{ width: `${(selectedSkill.levelNumber / 10) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Tools & Frameworks */}
                <div>
                  <div className="text-[11px] font-mono text-[#ea9040] uppercase tracking-wider mb-2 font-bold">
                    // ASSOCIATED TOOLS & TECH
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-mono bg-[#171720] text-white border border-[#2b2b38]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* OJT Relevance */}
                <div className="p-3 bg-[#01ef01]/10 border-l-2 border-[#01ef01]">
                  <div className="text-[10px] font-mono text-[#01ef01] uppercase tracking-wider font-bold">
                    OJT CONTRIBUTION
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    Ready to build production assets, write maintainable code, and debug issues independently.
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
