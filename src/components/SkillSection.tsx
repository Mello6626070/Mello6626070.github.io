import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import { soundManager } from '../utils/soundEffects';
import { Sparkles, Wrench } from 'lucide-react';

export const SkillSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Game Dev & 3D', 'Cybersecurity', 'Data Science', 'Software Engineering'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 border-b-2 border-dashed border-[#9e8492]/30 dark:border-[#5a4568]/40 relative">
      <div className="max-w-[980px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b-2 border-dashed border-[#9e8492]/30 dark:border-[#5a4568]/40 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#16a34a] dark:text-[#a6e3a1] uppercase tracking-wider mb-2 font-bold">
              <Wrench size={14} />
              <span>SKETCHBOARD // TOOLS & METHODOLOGIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#30232a] dark:text-white tracking-tight">
              Skill & Knowledge Board
            </h2>
          </div>

          <div className="font-hand text-base sm:text-lg text-[#8b5aed] dark:text-[#f5c2e7] flex items-center gap-1.5 self-start sm:self-end font-bold">
            <Sparkles size={16} />
            <span>Tools I work with daily across game dev, security, and data</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
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
                className={`px-4 py-2 rounded-full font-mono font-bold text-xs tracking-wide transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#30232a] text-[#f7f4ee] dark:bg-[#a6e3a1] dark:text-[#11111b] shadow-[3px_3px_0px_#11111b] border-2 border-[#11111b] -translate-y-0.5'
                    : 'bg-white dark:bg-[#201a2b] text-[#5a4855] dark:text-[#a6adc8] hover:text-[#30232a] dark:hover:text-white border-2 border-[#e5dfd8] dark:border-[#4a3a55] shadow-[2px_2px_0px_rgba(48,35,42,0.1)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid (Sharyap & Marighoul Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onMouseEnter={() => soundManager.playHover()}
              className="sketch-card p-5 sm:p-6 flex flex-col justify-between space-y-4"
            >
              
              {/* Card Header: Category & Level Badge */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#7e6977] dark:text-[#a6adc8] uppercase font-bold">
                    {skill.category}
                  </div>
                  <h3 className="font-display font-black text-xl text-[#30232a] dark:text-white mt-0.5">
                    {skill.name}
                  </h3>
                </div>

                <span
                  className="px-2.5 py-1 rounded-full text-xs font-mono font-bold border shadow-[2px_2px_0px_rgba(48,35,42,0.15)] dark:shadow-[2px_2px_0px_#000]"
                  style={{
                    backgroundColor: `${skill.color}20`,
                    color: skill.color,
                    borderColor: `${skill.color}50`,
                  }}
                >
                  {skill.level}
                </span>
              </div>

              {/* Progress Meter Bar */}
              <div>
                <div className="flex justify-between text-xs font-mono text-[#5a4855] dark:text-[#a6adc8] mb-1.5 font-semibold">
                  <span>Confidence Level</span>
                  <span className="font-bold text-[#30232a] dark:text-white">{skill.levelPercent}%</span>
                </div>
                <div className="h-2.5 w-full bg-[#f0ece5] dark:bg-[#16111d] rounded-full overflow-hidden border border-[#e5dfd8] dark:border-[#382b45]">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${skill.levelPercent}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </div>

              {/* Note / Practical Application */}
              <p className="text-xs text-[#4a3946] dark:text-[#bac2de] leading-relaxed bg-[#f8f6f2] dark:bg-[#181220] p-3 rounded-xl border border-[#e5dfd8] dark:border-[#382b45]">
                {skill.note}
              </p>

              {/* Associated Tools Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-dashed border-[#9e8492]/25 dark:border-[#5a4568]/40">
                {skill.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white dark:bg-[#201a2b] text-[#30232a] dark:text-[#cdd6f4] border border-[#e5dfd8] dark:border-[#382b45] drop-shadow-tag hover:translate-y-[1px] transition-transform"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
