import React from 'react';
import { roadmapData } from '../data/roadmap';
import { soundManager } from '../utils/soundEffects';
import { MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 border-b-2 border-dashed border-[#9e8492]/30 dark:border-[#5a4568]/40 relative">
      <div className="max-w-[980px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b-2 border-dashed border-[#9e8492]/30 dark:border-[#5a4568]/40 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#d97706] dark:text-[#fab387] uppercase tracking-wider mb-2 font-bold">
              <MapPin size={14} />
              <span>LEARNING JOURNEY // ROADMAP & MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#30232a] dark:text-white tracking-tight">
              Academic & Learning Journey
            </h2>
          </div>

          <div className="font-hand text-base sm:text-lg text-[#8b5aed] dark:text-[#f9e2af] flex items-center gap-1.5 self-start sm:self-end font-bold">
            <Sparkles size={16} />
            <span>Pathways, growth, and continuous learning</span>
          </div>
        </div>

        {/* Illustrated Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {roadmapData.map((milestone) => {
            const isTarget = milestone.status === 'Current Goal';
            return (
              <div
                key={milestone.id}
                onMouseEnter={() => soundManager.playHover()}
                className={`sketch-card p-6 sm:p-7 relative transition-all ${
                  isTarget
                    ? 'border-[#8b5aed] dark:border-[#cba6f7] shadow-[6px_6px_0px_rgba(139,90,237,0.3)] dark:shadow-[6px_6px_0px_#09060d] -translate-y-1'
                    : ''
                }`}
              >
                
                {/* Step Pill & Status Badge */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-dashed border-[#9e8492]/30 dark:border-[#5a4568]/40 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-[#30232a] dark:bg-[#cba6f7] text-[#f7f4ee] dark:text-[#11111b] font-mono font-black text-xs flex items-center justify-center border border-[#11111b] shadow-xs">
                      {milestone.step}
                    </span>
                    <span className="text-xs font-mono text-[#7e6977] dark:text-[#a6adc8] font-semibold">
                      {milestone.timeframe}
                    </span>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold border shadow-[2px_2px_0px_rgba(48,35,42,0.15)] dark:shadow-[2px_2px_0px_#000] ${
                      isTarget
                        ? 'bg-[#8b5aed] dark:bg-[#cba6f7] text-white dark:text-[#11111b] border-[#11111b]'
                        : 'bg-[#f5f1eb] dark:bg-[#322740] text-[#4a3946] dark:text-[#cdd6f4] border-[#e5dfd8] dark:border-[#4a3a55]'
                    }`}
                  >
                    {milestone.status}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#30232a] dark:text-white mb-3">
                  {milestone.title}
                </h3>

                <p className="text-sm text-[#4a3946] dark:text-[#bac2de] leading-relaxed mb-5">
                  {milestone.description}
                </p>

                {/* Checklist Deliverables */}
                <div className="space-y-2 pt-2 border-t border-dashed border-[#9e8492]/25 dark:border-[#5a4568]/40">
                  <span className="text-[11px] font-mono font-bold text-[#7e6977] dark:text-[#a6adc8] uppercase">
                    Key Outcomes & Milestones:
                  </span>
                  <div className="space-y-1.5">
                    {milestone.bulletPoints.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4a3946] dark:text-[#cdd6f4]">
                        <CheckCircle2 size={15} className="text-[#16a34a] dark:text-[#a6e3a1] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
