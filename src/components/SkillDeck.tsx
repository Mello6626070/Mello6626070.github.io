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
    <section className="py-12 bg-[#08090d] relative overflow-hidden">
      
      {/* Background Watch Dogs 2 stylized watermark */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-5 font-display font-black text-8xl md:text-[12rem] tracking-tighter text-white transform -rotate-12 translate-x-10 translate-y-10">
        SKILL MATRIX
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="border-b-2 border-[#1e222f] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#ff007f] uppercase tracking-widest mb-1 flex items-center gap-1.5 font-bold">
              <Sparkles size={14} />
              <span>WATCH DOGS 2 GRAPHIC MATRIX // SKILLS & PROFICIENCY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              SKILL & TECH MATRIX
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400 bg-[#12141c] px-3 py-1.5 border border-[#222634]">
            COMMAND: <span className="text-[#00ff66] font-bold">SELECT SKILL TO INSPECT</span>
          </div>
        </div>

        {/* Category Filter Pills (Watch Dogs 2 Contrasting Styling) */}
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
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,0,127,0.4)] border-l-4 border-[#ff007f]'
                    : 'bg-[#12141c] text-[#9ca2b5] hover:bg-[#1a1d27] hover:text-white border border-[#222634]'
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
            <div className="text-xs font-mono uppercase tracking-widest text-[#00ff66] mb-2 font-bold">
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
                        ? 'bg-white text-black border-l-8 border-[#ff007f] shadow-[0_0_20px_rgba(255,0,127,0.5)] translate-x-2'
                        : 'bg-[#12141c] hover:bg-[#1a1d28] text-white border-[#222634]'
                    }`}
                  >
                    <div className="flex items-center justify-between transform skew-x-12">
                      
                      {/* Left: Arcana & Name */}
                      <div className="flex items-center gap-3">
                        <span className={`text-[11px] font-mono px-2 py-0.5 font-bold uppercase ${
                          isSelected ? 'bg-black text-[#00ff66]' : 'bg-[#181b26] text-[#00ff66]'
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
                              ? 'bg-[#ff007f] text-white'
                              : 'bg-[#ff007f] text-white'
                            : isSelected
                              ? 'bg-black text-white'
                              : 'bg-[#1b1f2c] text-[#00f0ff]'
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
            <div className="border-2 border-[#ff007f]/50 bg-[#11131a] p-6 shadow-[0_0_30px_rgba(255,0,127,0.15)] clip-p3r-card">
              
              {/* Header Box */}
              <div className="border-b border-[#222634] pb-4 mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-xs text-[#00ff66] uppercase tracking-widest font-bold">
                    {selectedSkill.arcana}
                  </span>
                  <span className="font-display font-black text-xs px-2.5 py-1 bg-[#ff007f] text-white">
                    {selectedSkill.rank}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight">
                  {selectedSkill.name}
                </h3>
                <div className="text-xs font-mono text-slate-300 mt-0.5">
                  CATEGORY: <span className="text-[#00f0ff] font-bold">{selectedSkill.category}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] font-mono text-[#00ff66] uppercase tracking-wider mb-1 font-bold">
                    // PRACTICAL APPLICATION & EXPERTISE
                  </div>
                  <p className="text-slate-200 font-sans text-sm leading-relaxed bg-[#0a0b10] p-3 border border-[#1e222f]">
                    {selectedSkill.description}
                  </p>
                </div>

                {/* Level / Mastery Meter with Watch Dogs 2 Gradient */}
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>PROFICIENCY PROGRESSION</span>
                    <span className="text-[#00ff66] font-bold">{selectedSkill.levelNumber} / 10</span>
                  </div>
                  <div className="h-2 w-full bg-[#181a24] border border-[#232736] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#00ff66] via-[#00f0ff] to-[#ff007f] transition-all duration-300"
                      style={{ width: `${(selectedSkill.levelNumber / 10) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Tools & Frameworks */}
                <div>
                  <div className="text-[11px] font-mono text-[#ffe600] uppercase tracking-wider mb-2 font-bold">
                    // ASSOCIATED TOOLS & TECH
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-mono bg-[#181b26] text-white border border-[#272c3d]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* OJT Relevance */}
                <div className="p-3 bg-gradient-to-r from-[#00ff66]/15 to-transparent border-l-2 border-[#00ff66]">
                  <div className="text-[10px] font-mono text-[#00ff66] uppercase tracking-wider font-bold">
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
