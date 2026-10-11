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
    <section className="py-16 md:py-24 bg-[#181825] border-b-2 border-[#313244] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#313244] mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#a6e3a1] uppercase tracking-wider mb-2 font-bold">
              <Wrench size={14} />
              <span>SKETCHBOARD // TOOLS & METHODOLOGIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
              Skill & Knowledge Board
            </h2>
          </div>

          <div className="font-hand text-xl text-[#f5c2e7] flex items-center gap-1.5 self-start md:self-end">
            <Sparkles size={16} />
            <span>Tools I work with daily across game dev, security, and data</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
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
                className={`px-5 py-2.5 rounded-full font-display font-semibold text-xs tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#a6e3a1] text-[#11111b] shadow-[3px_3px_0px_#11111b] border-2 border-[#11111b] font-extrabold -translate-y-0.5'
                    : 'bg-[#1e1e2e] text-[#a6adc8] hover:text-white hover:bg-[#313244] border-2 border-[#313244] shadow-[2px_2px_0px_#11111b]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid (Catppuccin Sticker Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onMouseEnter={() => soundManager.playHover()}
              className="sketch-card p-6 bg-[#1e1e2e] border-2 border-[#313244] flex flex-col justify-between space-y-4"
            >
              
              {/* Card Header: Category & Level Badge */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#a6adc8] uppercase font-bold">
                    {skill.category}
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-white mt-0.5">
                    {skill.name}
                  </h3>
                </div>

                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold border shadow-[2px_2px_0px_#11111b]"
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
                <div className="flex justify-between text-xs font-mono text-[#a6adc8] mb-1.5">
                  <span>Confidence Level</span>
                  <span className="font-bold text-white">{skill.levelPercent}%</span>
                </div>
                <div className="h-2.5 w-full bg-[#181825] rounded-full overflow-hidden border border-[#313244]">
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
              <p className="text-xs text-[#bac2de] leading-relaxed bg-[#181825] p-3 rounded-xl border border-[#313244]">
                {skill.note}
              </p>

              {/* Associated Tools Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[#313244]/60">
                {skill.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-[#181825] text-[#cdd6f4] border border-[#313244]"
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
