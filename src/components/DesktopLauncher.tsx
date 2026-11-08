import React from 'react';
import { soundManager } from '../utils/soundEffects';
import { User, FolderGit2, Wrench, Compass, Award, Mail, Sparkles } from 'lucide-react';

export type DesktopWindowType = 'about' | 'projects' | 'skills' | 'journey' | 'badges' | 'contact' | null;

interface DesktopLauncherProps {
  onOpenWindow: (windowType: DesktopWindowType) => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const DesktopLauncher: React.FC<DesktopLauncherProps> = ({
  onOpenWindow,
  onNavigateSection,
}) => {
  const desktopApps = [
    {
      id: 'about' as const,
      name: 'about.txt',
      label: 'about',
      badge: 'bio',
      icon: <User className="w-7 h-7 sm:w-8 sm:h-8 text-[#8b5aed] dark:text-[#cba6f7]" />,
      bgColor: 'bg-[#ede9fe] dark:bg-[#32234a]',
      borderColor: 'border-[#7c3aed] dark:border-[#a78bfa]',
      description: 'Background, education & interests',
    },
    {
      id: 'projects' as const,
      name: 'projects.app',
      label: 'projects',
      badge: '4 works',
      icon: <FolderGit2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#0284c7] dark:text-[#89dceb]" />,
      bgColor: 'bg-[#e0f2fe] dark:bg-[#1e3448]',
      borderColor: 'border-[#0284c7] dark:border-[#38bdf8]',
      description: 'Godot games, Wireshark & ML',
    },
    {
      id: 'skills' as const,
      name: 'skills.json',
      label: 'skills',
      badge: 'tools',
      icon: <Wrench className="w-7 h-7 sm:w-8 sm:h-8 text-[#16a34a] dark:text-[#a6e3a1]" />,
      bgColor: 'bg-[#dcfce7] dark:bg-[#1a3826]',
      borderColor: 'border-[#16a34a] dark:border-[#4ade80]',
      description: 'Toolbox & confidence meters',
    },
    {
      id: 'journey' as const,
      name: 'roadmap.md',
      label: 'journey',
      badge: 'milestones',
      icon: <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-[#d97706] dark:text-[#fab387]" />,
      bgColor: 'bg-[#fef3c7] dark:bg-[#422e1b]',
      borderColor: 'border-[#d97706] dark:border-[#fbbf24]',
      description: 'Coursework & learning journey',
    },
    {
      id: 'badges' as const,
      name: 'badges.html',
      label: 'indie-badges',
      badge: '88x31',
      icon: <Award className="w-7 h-7 sm:w-8 sm:h-8 text-[#db2777] dark:text-[#f5c2e7]" />,
      bgColor: 'bg-[#fce7f3] dark:bg-[#431d34]',
      borderColor: 'border-[#db2777] dark:border-[#f472b6]',
      description: 'Retro 88x31 buttons deck',
    },
    {
      id: 'contact' as const,
      name: 'contact.msg',
      label: 'contact',
      badge: 'open',
      icon: <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-[#9333ea] dark:text-[#c084fc]" />,
      bgColor: 'bg-[#f3e8ff] dark:bg-[#341b49]',
      borderColor: 'border-[#9333ea] dark:border-[#c084fc]',
      description: 'Postcard message & socials',
    },
  ];

  const handleAppClick = (appId: DesktopWindowType) => {
    soundManager.playWindowOpen();
    onOpenWindow(appId);
    if (onNavigateSection && appId) {
      onNavigateSection(appId);
    }
  };

  return (
    <div className="w-full">
      
      {/* Launcher Section Heading */}
      <div className="flex items-center justify-between gap-3 mb-4 px-1">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#7e6977] dark:text-[#a6adc8] uppercase tracking-wider">
          <Sparkles size={13} className="text-[#8b5aed] dark:text-[#cba6f7]" />
          <span>DESKTOP LAUNCHPAD // CLICK TO POP OPEN WINDOW</span>
        </div>
        <span className="hidden sm:inline-block font-hand text-xs text-[#8b5aed] dark:text-[#cba6f7]">
          shar's desktop inspired
        </span>
      </div>

      {/* Desktop App Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 place-items-center">
        {desktopApps.map((app) => (
          <div key={app.id} className="flex flex-col items-center group w-full">
            <button
              onClick={() => handleAppClick(app.id)}
              onMouseEnter={() => soundManager.playHover()}
              className={`relative w-20 h-20 sm:w-24 sm:h-24 ${app.bgColor} border-2 ${app.borderColor} rounded-2xl flex flex-col items-center justify-center p-2 shadow-[3px_3px_0px_rgba(48,35,42,0.2)] dark:shadow-[3px_3px_0px_#09060d] group-hover:scale-105 group-hover:-translate-y-1 group-active:scale-95 group-active:translate-y-0 transition-all duration-150 cursor-pointer`}
              title={`Open ${app.name} (${app.description})`}
            >
              {/* Corner Badge */}
              <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full bg-[#30232a] dark:bg-[#cba6f7] text-[#f7f4ee] dark:text-[#11111b] font-mono text-[9px] font-bold border border-white dark:border-[#11111b] shadow-xs">
                {app.badge}
              </span>

              {/* Icon */}
              <div className="group-hover:rotate-6 transition-transform duration-200">
                {app.icon}
              </div>
            </button>

            {/* Monospace App Title */}
            <span className="mt-2 font-mono text-xs sm:text-sm font-bold text-[#30232a] dark:text-[#e8def8] group-hover:text-[#8b5aed] dark:group-hover:text-[#cba6f7] transition-colors text-center tracking-tight">
              {app.label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};
