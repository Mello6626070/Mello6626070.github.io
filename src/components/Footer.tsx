import React from 'react';
import { ArrowUp, Heart, Sparkles, Gamepad2, Mail } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './Icons';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playSelect();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2d222b] dark:bg-[#16111d] text-[#e8def8] border-t-2 border-[#1f161e] dark:border-[#382b45] py-8 text-xs font-mono transition-colors">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Social Dock Row (Sharyap & Marighoul Style) */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-xs hover:scale-110 active:scale-90 transition-transform"
            title="GitHub"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-xs hover:scale-110 active:scale-90 transition-transform"
            title="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href={profileData.links.facebook}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-xs hover:scale-110 active:scale-90 transition-transform"
            title="Facebook"
          >
            <FacebookIcon size={16} />
          </a>

          <a
            href={profileData.links.itchio}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-xs hover:scale-110 active:scale-90 transition-transform"
            title="itch.io"
          >
            <Gamepad2 size={16} />
          </a>

          <a
            href={`mailto:${profileData.links.email}`}
            onMouseEnter={() => soundManager.playHover()}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-xs hover:scale-110 active:scale-90 transition-transform"
            title="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-dashed border-white/15" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[#b8aab3] dark:text-[#a6adc8]">
          
          {/* Left Info */}
          <div className="flex items-center gap-2">
            <Heart size={14} className="text-[#f472b6] fill-[#f472b6]" />
            <span>© 2026 Mello • Handcrafted CS Portfolio & Desktop</span>
          </div>

          {/* Center Info */}
          <div className="font-hand text-base text-[#f5c2e7] flex items-center justify-center gap-1 font-bold">
            <Sparkles size={14} />
            <span>sharyap.com & marighoul.com inspired vibe</span>
          </div>

          {/* Right Action: Scroll To Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all shadow-xs cursor-pointer hover:scale-105 active:scale-95 text-xs font-mono font-bold"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>

        </div>

      </div>
    </footer>
  );
};
