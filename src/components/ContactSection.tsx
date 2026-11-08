import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { soundManager } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, InstagramIcon, FacebookIcon } from './Icons';

interface ContactSectionProps {
  isDark?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDark: _isDark = false }) => {
  const [copiedPrimary, setCopiedPrimary] = useState(false);
  const [copiedSecondary, setCopiedSecondary] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (email: string, isSecondary = false) => {
    soundManager.playConfirm();
    navigator.clipboard.writeText(email);
    if (isSecondary) {
      setCopiedSecondary(true);
      setTimeout(() => setCopiedSecondary(false), 2500);
    } else {
      setCopiedPrimary(true);
      setTimeout(() => setCopiedPrimary(false), 2500);
    }

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#fe640b', '#df8e1d', '#cba6f7', '#f5c2e7', '#a6e3a1'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleCopyPhone = (phone: string) => {
    soundManager.playConfirm();
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#fe640b', '#df8e1d', '#cba6f7', '#f5c2e7', '#a6e3a1'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const socialLinks = [
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@j.anthonyalarcon',
      icon: InstagramIcon,
      url: profileData.links.instagram,
      color: '#e1306c',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      handle: 'Je Anthony Alarcon',
      icon: FacebookIcon,
      url: profileData.links.facebook,
      color: '#1877f2',
    },
    {
      id: 'github',
      label: 'GitHub',
      handle: 'Mello6626070',
      icon: GithubIcon,
      url: profileData.links.github,
      color: '#cba6f7',
    },
  ];

  return (
    <div className="text-[#4c4f69] dark:text-[#cdd6f4] select-text">
      {/* =========================================================================
          1. Social Links Cards (IG, FB, GitHub)
          ========================================================================= */}
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1 sm:pt-2">
          {socialLinks.map((item) => {
            const IconComp = item.icon;
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playSelect()}
                onMouseEnter={() => soundManager.playHover()}
                className="group rounded-2xl border-2 border-[#ccd0da] dark:border-[#313244] bg-white/70 dark:bg-[#1e1e2e]/70 hover:bg-white dark:hover:bg-[#201a2b] p-4 sm:p-5 transition-all duration-200 hover:scale-105 hover:-translate-y-1 shadow-[3px_3px_0px_rgba(76,79,105,0.15)] dark:shadow-[3px_3px_0px_#11111b] flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white shadow-xs"
                      style={{ backgroundColor: item.color }}
                    >
                      <IconComp size={22} />
                    </div>
                    <ExternalLink size={14} className="text-[#6c6f85] dark:text-[#a6adc8] group-hover:text-[#fe640b] dark:group-hover:text-[#fab387] transition-colors" />
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-[#4c4f69] dark:text-white group-hover:text-[#fe640b] dark:group-hover:text-[#fab387] transition-colors">
                      {item.label}
                    </h4>
                    <p className="font-mono text-xs font-bold text-[#fe640b] dark:text-[#fab387]">
                      {item.handle}
                    </p>
                  </div>
                </div>

                <span className="mt-3.5 sm:mt-4 pt-2 border-t border-[#ccd0da]/60 dark:border-[#313244]/60 font-mono text-[11px] font-bold text-[#6c6f85] dark:text-[#a6adc8] group-hover:underline">
                  Visit profile →
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 sm:my-8 border-[#ccd0da] dark:border-[#313244]" />

      {/* Direct Contact Channels */}
      <div className="space-y-4 text-center">
          {/* Email Addresses & Phone with 1-Click Copy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 max-w-2xl mx-auto">
            {/* Primary Email */}
            <div className="p-3 sm:p-3.5 rounded-xl border-2 border-[#ccd0da] dark:border-[#313244] bg-white/70 dark:bg-[#181825]/70 flex items-center justify-between gap-2 shadow-xs">
              <div className="text-left min-w-0">
                <span className="text-[10px] font-mono text-[#6c6f85] dark:text-[#a6adc8] uppercase block">
                  PRIMARY EMAIL
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#fe640b] dark:text-[#fab387] select-all truncate block">
                  {profileData.links.email}
                </span>
              </div>
              <button
                onClick={() => handleCopyEmail(profileData.links.email, false)}
                onMouseEnter={() => soundManager.playHover()}
                className="shrink-0 px-2.5 sm:px-3 py-1.5 rounded-lg font-mono text-xs font-bold bg-[#fe640b]/15 text-[#fe640b] dark:text-[#fab387] hover:bg-[#fe640b] hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                title="Copy primary email"
              >
                {copiedPrimary ? <Check size={14} className="text-green-600 dark:text-green-400" /> : <Copy size={13} />}
                <span>{copiedPrimary ? 'copied!' : 'copy'}</span>
              </button>
            </div>

            {/* Secondary Email */}
            <div className="p-3 sm:p-3.5 rounded-xl border-2 border-[#ccd0da] dark:border-[#313244] bg-white/70 dark:bg-[#181825]/70 flex items-center justify-between gap-2 shadow-xs">
              <div className="text-left min-w-0">
                <span className="text-[10px] font-mono text-[#6c6f85] dark:text-[#a6adc8] uppercase block">
                  SECONDARY EMAIL
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#4c4f69] dark:text-[#cdd6f4] select-all truncate block">
                  {profileData.links.secondaryEmail}
                </span>
              </div>
              <button
                onClick={() => handleCopyEmail(profileData.links.secondaryEmail, true)}
                onMouseEnter={() => soundManager.playHover()}
                className="shrink-0 px-2.5 sm:px-3 py-1.5 rounded-lg font-mono text-xs font-bold bg-black/5 dark:bg-white/5 text-[#6c6f85] dark:text-[#a6adc8] hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-pointer flex items-center gap-1.5"
                title="Copy secondary email"
              >
                {copiedSecondary ? <Check size={14} className="text-green-600 dark:text-green-400" /> : <Copy size={13} />}
                <span>{copiedSecondary ? 'copied!' : 'copy'}</span>
              </button>
            </div>

            {/* Contact Number */}
            <div className="sm:col-span-2 p-3 sm:p-3.5 rounded-xl border-2 border-[#ccd0da] dark:border-[#313244] bg-white/70 dark:bg-[#181825]/70 flex items-center justify-between gap-2 shadow-xs">
              <div className="text-left min-w-0">
                <span className="text-[10px] font-mono text-[#6c6f85] dark:text-[#a6adc8] uppercase block">
                  CONTACT NUMBER
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#40a02b] dark:text-[#a6e3a1] select-all truncate block">
                  {profileData.links.phone}
                </span>
              </div>
              <button
                onClick={() => handleCopyPhone(profileData.links.phone)}
                onMouseEnter={() => soundManager.playHover()}
                className="shrink-0 px-2.5 sm:px-3 py-1.5 rounded-lg font-mono text-xs font-bold bg-[#40a02b]/15 text-[#40a02b] dark:text-[#a6e3a1] hover:bg-[#40a02b] hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                title="Copy contact number"
              >
                {copiedPhone ? <Check size={14} className="text-green-600 dark:text-green-400" /> : <Copy size={13} />}
                <span>{copiedPhone ? 'copied!' : 'copy'}</span>
              </button>
            </div>
        </div>
      </div>

    </div>
  );
};
