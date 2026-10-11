import React from 'react';
import { roadmapData } from '../data/roadmap';
import { soundManager } from '../utils/soundEffects';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const RoadmapView: React.FC = () => {
  return (
    <section className="py-12 bg-[#07070a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b-2 border-[#1e1e26] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#01ef01] uppercase tracking-widest mb-1 flex items-center gap-1.5 font-bold">
              <Calendar size={14} />
              <span>WATCH DOGS 2 TIMELINE // ROADMAP & PROGRESSION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              ACADEMIC & OJT ROADMAP
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400 bg-[#121217] px-3 py-1.5 border border-[#23232c]">
            CURRENT STATUS: <span className="text-[#01ef01] font-bold">READY FOR DEPLOYMENT</span>
          </div>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmapData.map((phase) => {
            const isTarget = phase.status === 'CURRENT TARGET';
            return (
              <div
                key={phase.id}
                onMouseEnter={() => soundManager.playHover()}
                className={`relative p-6 border-2 transition-all duration-200 clip-p3r-card ${
                  isTarget
                    ? 'border-[#01ef01] bg-[#121218] shadow-[0_4px_25px_rgba(0,0,0,0.8)] -translate-y-1'
                    : 'border-[#24242e] bg-[#0e0e13]'
                }`}
              >
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between border-b border-[#21212b] pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-[#01ef01] tracking-wider">
                    {phase.phaseCode}
                  </span>
                  <span
                    className={`font-display font-black text-xs px-2.5 py-1 uppercase tracking-wider ${
                      isTarget
                        ? 'bg-[#e82f41] text-white shadow-[0_0_10px_rgba(232,47,65,0.6)]'
                        : 'bg-[#1e1e26] text-slate-300'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-black text-white uppercase tracking-tight mb-2">
                  {phase.title}
                </h3>
                <div className="text-xs font-mono text-[#a0a6b8] mb-4">
                  TARGET: <span className="text-white font-bold">{phase.targetPeriod}</span>
                </div>

                {/* Description */}
                <p className="text-slate-300 font-sans text-sm leading-relaxed mb-4">
                  {phase.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-1.5 border-t border-[#1c1c24] pt-3">
                  <div className="text-[11px] font-mono text-[#01ef01] uppercase tracking-wider mb-2 font-bold">
                    // KEY HIGHLIGHTS & OUTCOMES
                  </div>
                  {phase.keyDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 size={13} className="text-[#01ef01] shrink-0 mt-0.5" />
                      <span>{item}</span>
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
