import React from 'react';
import { roadmapData } from '../data/roadmap';
import { soundManager } from '../utils/soundEffects';
import { MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1e1e2e] bg-sketch-paper border-b-2 border-[#313244] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#313244] mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#fab387] uppercase tracking-wider mb-2 font-bold">
              <MapPin size={14} />
              <span>LEARNING JOURNEY // ROADMAP & MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
              Academic & OJT Journey
            </h2>
          </div>

          <div className="font-hand text-xl text-[#f9e2af] flex items-center gap-1.5 self-start md:self-end">
            <Sparkles size={16} />
            <span>Pathways, key learnings, and internship readiness</span>
          </div>
        </div>

        {/* Illustrated Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmapData.map((milestone) => {
            const isTarget = milestone.status === 'Current Goal';
            return (
              <div
                key={milestone.id}
                onMouseEnter={() => soundManager.playHover()}
                className={`sketch-card p-7 relative bg-[#181825] border-2 transition-all ${
                  isTarget
                    ? 'border-[#f5c2e7] shadow-[6px_6px_0px_#11111b] -translate-y-1'
                    : 'border-[#313244]'
                }`}
              >
                
                {/* Step Pill & Status Badge */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-[#313244] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-[#313244] text-white font-mono font-bold text-xs flex items-center justify-center border border-[#45475a]">
                      {milestone.step}
                    </span>
                    <span className="text-xs font-mono text-[#a6adc8] font-semibold">
                      {milestone.timeframe}
                    </span>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold border shadow-[2px_2px_0px_#11111b] ${
                      isTarget
                        ? 'bg-[#f5c2e7] text-[#11111b] border-[#11111b]'
                        : 'bg-[#313244] text-[#cdd6f4] border-[#45475a]'
                    }`}
                  >
                    {milestone.status}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="font-display font-black text-2xl text-white mb-3">
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#bac2de] leading-relaxed mb-6">
                  {milestone.description}
                </p>

                {/* Outcomes Checklist */}
                <div className="space-y-2 border-t-2 border-[#313244]/60 pt-4">
                  <div className="text-xs font-mono text-[#a6adc8] uppercase font-bold mb-2">
                    // Key Highlights & Deliverables
                  </div>
                  {milestone.bulletPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#cdd6f4]">
                      <CheckCircle2 size={15} className="text-[#a6e3a1] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
