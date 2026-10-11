import React from 'react';
import { roadmapData } from '../data/roadmap';
import { soundManager } from '../utils/soundEffects';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const RoadmapView: React.FC = () => {
  return (
    <section className="py-12 bg-[#030914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b-2 border-[#0e2a52] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Calendar size={14} />
              <span>PERSONA 3 RELOAD CALENDAR // PROGRESSION TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              ACADEMIC & OJT ROADMAP
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400 bg-[#061830] px-3 py-1.5 border border-[#113566]">
            CURRENT STATUS: <span className="text-[#00ff66] font-bold">READY FOR DEPLOYMENT</span>
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
                    ? 'border-[#00f0ff] bg-[#061933] shadow-[0_0_30px_rgba(0,240,255,0.2)] -translate-y-1'
                    : 'border-[#0f2e54] bg-[#051122]'
                }`}
              >
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between border-b border-[#123663] pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-[#00f0ff] tracking-wider">
                    {phase.phaseCode}
                  </span>
                  <span
                    className={`font-display font-black text-xs px-2.5 py-1 uppercase tracking-wider ${
                      isTarget
                        ? 'bg-[#ff003c] text-white shadow-[0_0_10px_rgba(255,0,60,0.6)]'
                        : 'bg-[#0f2b4e] text-slate-300'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-black text-white uppercase tracking-tight mb-2">
                  {phase.title}
                </h3>
                <div className="text-xs font-mono text-[#91bde4] mb-4">
                  TARGET: {phase.targetPeriod}
                </div>

                {/* Description */}
                <p className="text-slate-300 font-sans text-sm leading-relaxed mb-4">
                  {phase.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-1.5 border-t border-[#0f3059] pt-3">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    // KEY HIGHLIGHTS & OUTCOMES
                  </div>
                  {phase.keyDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 size={13} className="text-[#00f0ff] shrink-0 mt-0.5" />
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
