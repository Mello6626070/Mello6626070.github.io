import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { soundManager } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { Mail, Gamepad2, Box, Copy, Check, ExternalLink, Send, FileText, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    soundManager.playConfirm();
    navigator.clipboard.writeText(profileData.links.email);
    setCopied(true);
    
    // Trigger festive pastel confetti
    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#cba6f7', '#f5c2e7', '#fab387', '#a6e3a1', '#89dceb', '#f9e2af'],
      });
    } catch {
      // Confetti fallback
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 md:py-24 bg-[#181825] border-b-2 border-[#313244] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#313244] mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#f5c2e7] uppercase tracking-wider mb-2 font-bold">
              <Mail size={14} />
              <span>LET'S CONNECT // INTERNSHIP & COLLABORATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
              Get in Touch
            </h2>
          </div>

          <div className="font-hand text-xl text-[#a6e3a1] flex items-center gap-1.5 self-start md:self-end">
            <Sparkles size={16} />
            <span>My inbox is always open for OJT & internship chats!</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Postcard Letter Card */}
          <div className="lg:col-span-7">
            <div className="sketch-card p-8 bg-[#1e1e2e] border-2 border-[#313244] relative space-y-6">
              
              {/* Top Postage Stamp Decoration */}
              <div className="flex items-center justify-between border-b-2 border-[#313244] pb-4">
                <div className="flex items-center gap-2">
                  <Heart size={18} className="text-[#f5c2e7] fill-[#f5c2e7]" />
                  <span className="font-hand text-xl text-[#cba6f7]">A note from Mello:</span>
                </div>
                <div className="px-3 py-1 rounded-xl bg-[#313244] border-2 border-dashed border-[#45475a] text-[10px] font-mono text-[#f9e2af]">
                  POSTAGE • OJT 2026
                </div>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white">
                Looking for an energetic, curious CS student for your team?
              </h3>
              
              <p className="text-sm text-[#bac2de] leading-relaxed">
                Whether you're developing indie or commercial games in Godot, engineering secure systems, digging through complex datasets, or building web platforms, I'm eager to jump in, contribute, and learn alongside your team.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-[#181825] border-2 border-[#313244] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-xl bg-[#313244] text-[#cba6f7] flex items-center justify-center border border-[#45475a]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#a6adc8] uppercase">PRIMARY EMAIL</div>
                    <div className="text-sm font-mono font-bold text-white select-all">
                      {profileData.links.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => soundManager.playHover()}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-white hover:bg-[#cba6f7] text-[#11111b] font-display font-bold text-xs tracking-wide transition-all shadow-[2px_2px_0px_#11111b] border-2 border-[#11111b] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-green-800" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`mailto:${profileData.links.email}?subject=Internship%20%2F%20OJT%20Inquiry`}
                  onClick={() => soundManager.playConfirm()}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#cba6f7] to-[#f5c2e7] text-[#11111b] font-display font-black text-xs tracking-wide shadow-[3px_3px_0px_#11111b] border-2 border-[#11111b] flex items-center gap-2 hover:-translate-y-0.5 transition-all"
                >
                  <Send size={14} />
                  <span>Send Email Directly</span>
                </a>

                <a
                  href={profileData.links.resumeUrl}
                  onClick={() => soundManager.playSelect()}
                  className="px-5 py-3 rounded-full bg-[#181825] hover:bg-[#313244] text-white font-mono text-xs border-2 border-[#313244] flex items-center gap-2 shadow-[2px_2px_0px_#11111b]"
                >
                  <FileText size={14} />
                  <span>View Resume / CV</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Illustrated Profile Links */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs font-mono uppercase tracking-wider text-[#a6adc8] mb-2 font-bold">
              // Find My Work & Profiles
            </div>

            {[
              {
                label: 'GitHub Repositories',
                desc: 'Godot code, security scripts, and web platforms',
                url: profileData.links.github,
                icon: GithubIcon,
                tag: 'Code',
                accent: '#cba6f7',
              },
              {
                label: 'LinkedIn Network',
                desc: 'Academic timeline, coursework, and updates',
                url: profileData.links.linkedin,
                icon: LinkedinIcon,
                tag: 'Network',
                accent: '#89b4fa',
              },
              {
                label: 'itch.io Game Demos',
                desc: 'Playable Godot 4 web prototypes and game jam builds',
                url: profileData.links.itchio,
                icon: Gamepad2,
                tag: 'Games',
                accent: '#f5c2e7',
              },
              {
                label: 'ArtStation 3D Suite',
                desc: 'Blender 3D low-poly models and environmental kits',
                url: profileData.links.artstation,
                icon: Box,
                tag: '3D Art',
                accent: '#fab387',
              },
            ].map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundManager.playHover()}
                  onClick={() => soundManager.playSelect()}
                  className="sketch-card p-4 bg-[#1e1e2e] border-2 border-[#313244] flex items-center justify-between group hover:border-[#cba6f7]"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center border-2 border-[#313244] shadow-[2px_2px_0px_#11111b] group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${link.accent}20`, color: link.accent }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white group-hover:text-[#cba6f7] transition-colors">
                        {link.label}
                      </div>
                      <div className="text-xs text-[#a6adc8] font-mono">
                        {link.desc}
                      </div>
                    </div>
                  </div>

                  <ExternalLink size={16} className="text-[#6c7086] group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
