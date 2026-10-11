import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { soundManager } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { Mail, Gamepad2, Box, Copy, Check, ExternalLink, Send, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    soundManager.playConfirm();
    navigator.clipboard.writeText(profileData.links.email);
    setCopied(true);
    
    // Trigger confetti celebrating contact
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#ff007f', '#00ff66', '#00f0ff', '#ffe600', '#ffffff'],
      });
    } catch {
      // Confetti fallback
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-12 bg-[#08090d] relative overflow-hidden">
      
      {/* Decorative scanlines */}
      <div className="absolute inset-0 bg-scanlines opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="border-b-2 border-[#1e222f] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#ff007f] uppercase tracking-widest mb-1 flex items-center gap-1.5 font-bold">
              <Mail size={14} />
              <span>DIRECT COMMS // INTERNSHIP / OJT INQUIRIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              CONNECT & COLLABORATE
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400 bg-[#12141c] px-3 py-1.5 border border-[#222634]">
            STATUS: <span className="text-[#00ff66] font-bold">INBOX OPEN</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Email & Quick Action Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-2 border-[#ff007f]/45 bg-[#10121a] p-6 clip-p3r-card shadow-[0_0_30px_rgba(255,0,127,0.15)]">
              
              <div className="text-xs font-mono text-[#00ff66] uppercase tracking-widest mb-2 font-bold">
                // OJT / INTERNSHIP PLACEMENT
              </div>
              <h3 className="text-2xl font-display font-black text-white uppercase mb-3">
                Let's Build Something Great Together
              </h3>
              <p className="text-slate-300 font-sans text-sm leading-relaxed mb-6">
                I am actively seeking an internship / OJT opportunity where I can apply my skills in Game Development (Godot & Blender), Cybersecurity, Data Science, or Software Engineering. Feel free to reach out directly via email or inspect my code repositories below.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 bg-[#0a0b10] border-2 border-[#1e222f] flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="p-2.5 bg-[#151722] text-[#00ff66] border border-[#262a3c]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">PRIMARY EMAIL</div>
                    <div className="text-sm font-mono font-bold text-white select-all">
                      {profileData.links.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => soundManager.playHover()}
                  className="w-full sm:w-auto px-4 py-2.5 font-display font-black text-xs tracking-wider bg-white hover:bg-[#ff007f] text-black hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {copied ? <Check size={14} className="text-green-800" /> : <Copy size={14} />}
                  <span>{copied ? 'EMAIL COPIED!' : 'COPY EMAIL'}</span>
                </button>
              </div>

              {/* Resume download / view */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${profileData.links.email}?subject=Internship%20%2F%20OJT%20Inquiry`}
                  onClick={() => soundManager.playConfirm()}
                  className="px-6 py-3 font-display font-black text-xs tracking-widest bg-[#ff007f] hover:bg-white text-white hover:text-black transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,0,127,0.4)]"
                >
                  <Send size={14} />
                  <span>SEND EMAIL NOW</span>
                </a>

                <a
                  href={profileData.links.resumeUrl}
                  onClick={() => soundManager.playSelect()}
                  className="px-5 py-3 font-display font-bold text-xs tracking-widest bg-[#151722] hover:bg-[#202434] text-white border border-[#2b3042] transition-colors flex items-center gap-2"
                >
                  <FileText size={14} />
                  <span>VIEW RESUME / CV</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Platform Links Stack */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00ff66] mb-2 font-bold">
              // EXTERNAL PLATFORMS & PORTFOLIOS
            </div>

            {[
              {
                label: 'GITHUB REPOSITORIES',
                sub: 'Codebases, Godot scripts & security tools',
                url: profileData.links.github,
                icon: GithubIcon,
                tag: 'CODE',
                color: 'hover:border-[#00ff66] hover:text-[#00ff66]',
              },
              {
                label: 'LINKEDIN PROFILE',
                sub: 'Academic updates, coursework & network',
                url: profileData.links.linkedin,
                icon: LinkedinIcon,
                tag: 'NETWORK',
                color: 'hover:border-[#00f0ff] hover:text-[#00f0ff]',
              },
              {
                label: 'ITCH.IO PROFILE',
                sub: 'Playable Godot 4 game builds & prototypes',
                url: profileData.links.itchio,
                icon: Gamepad2,
                tag: 'GAMES',
                color: 'hover:border-[#ff007f] hover:text-[#ff007f]',
              },
              {
                label: 'ARTSTATION / 3D SUITE',
                sub: 'Blender 3D low-poly models, renders & wireframes',
                url: profileData.links.artstation,
                icon: Box,
                tag: '3D ART',
                color: 'hover:border-[#ffe600] hover:text-[#ffe600]',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  onClick={() => soundManager.playSelect()}
                  className={`block p-4 border border-[#1f2330] bg-[#11131a] hover:bg-[#181a25] transition-all transform -skew-x-6 cursor-pointer group ${item.color}`}
                >
                  <div className="flex items-center justify-between transform skew-x-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#171a24] text-white border border-[#272c3d]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="font-display font-bold text-sm tracking-wider text-white group-hover:text-[#ff007f] transition-colors">
                          {item.label}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          {item.sub}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#181b26] text-[#b0b8cb] border border-[#272c3d] font-bold">
                        {item.tag}
                      </span>
                      <ExternalLink size={14} className="text-slate-400 group-hover:text-white" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
