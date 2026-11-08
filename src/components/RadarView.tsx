import React from 'react';
import { everydayTools, languagesBeingStudied, frameworksBeingStudied } from '../data/radar';
import {
  Terminal,
  Gamepad2,
  Box,
  Palette,
  Cpu,
  Code2,
  Layers,
  Smartphone,
} from 'lucide-react';

interface RadarViewProps {
  isDark?: boolean;
}

export const RadarView: React.FC<RadarViewProps> = () => {
  // Mapping tool icon names to Lucide components
  const renderToolIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal size={14} style={{ color }} />;
      case 'Gamepad2':
        return <Gamepad2 size={14} style={{ color }} />;
      case 'Box':
        return <Box size={14} style={{ color }} />;
      case 'Palette':
        return <Palette size={14} style={{ color }} />;
      case 'Cpu':
        return <Cpu size={14} style={{ color }} />;
      case 'Smartphone':
        return <Smartphone size={14} style={{ color }} />;
      default:
        return <Code2 size={14} style={{ color }} />;
    }
  };

  return (
    <div className="text-[#4c4f69] dark:text-[#cdd6f4] select-text space-y-8">
      
      {/* =========================================================================
          Top Header: What's on My Radar
          ========================================================================= */}
      <div className="border-b border-[#ccd0da] dark:border-[#313244] pb-4 sm:pb-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display tracking-tight text-[#4c4f69] dark:text-white">
          What I'm Currently Learning
        </h2>
      </div>

      {/* =========================================================================
          1. Languages
          ========================================================================= */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2 font-mono font-bold text-sm sm:text-base md:text-lg text-[#4c4f69] dark:text-white border-b border-[#ccd0da] dark:border-[#313244] pb-2">
          <Code2 size={16} className="text-[#cba6f7]" />
          <h3>LANGUAGES</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5">
          {languagesBeingStudied.map((lang) => (
            <div
              key={lang}
              className="p-2.5 sm:p-3 rounded-xl border border-[#ccd0da] dark:border-[#313244] bg-white/40 dark:bg-[#181825]/40 hover:border-[#fe640b] dark:hover:border-[#fab387] transition-colors flex items-center justify-center text-center shadow-xs"
            >
              <span className="font-mono font-bold text-xs sm:text-sm text-[#4c4f69] dark:text-white">
                {lang}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          2. Frameworks
          ========================================================================= */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2 font-mono font-bold text-sm sm:text-base md:text-lg text-[#4c4f69] dark:text-white border-b border-[#ccd0da] dark:border-[#313244] pb-2">
          <Layers size={16} className="text-[#89dceb]" />
          <h3>FRAMEWORKS</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5">
          {frameworksBeingStudied.map((fw) => (
            <div
              key={fw}
              className="p-2.5 sm:p-3 rounded-xl border border-[#ccd0da] dark:border-[#313244] bg-white/40 dark:bg-[#181825]/40 hover:border-[#fe640b] dark:hover:border-[#fab387] transition-colors flex items-center justify-center text-center shadow-xs"
            >
              <span className="font-mono font-bold text-xs sm:text-sm text-[#4c4f69] dark:text-white">
                {fw}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          3. Software & Tools in Rotation
          ========================================================================= */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2 font-mono font-bold text-sm sm:text-base md:text-lg text-[#4c4f69] dark:text-white border-b border-[#ccd0da] dark:border-[#313244] pb-2">
          <Terminal size={16} className="text-[#a6e3a1]" />
          <h3>SOFTWARE & TOOLS</h3>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {everydayTools.map((tool) => (
            <div
              key={tool.name}
              className="p-2.5 sm:p-3 rounded-lg border border-[#ccd0da] dark:border-[#313244] bg-white/40 dark:bg-[#181825]/40 space-y-1 hover:border-[#fe640b] dark:hover:border-[#fab387] transition-colors"
            >
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#4c4f69] dark:text-[#cdd6f4]">
                {renderToolIcon(tool.iconName, tool.color)}
                <span className="truncate">{tool.name}</span>
              </div>
              <p className="text-[10px] font-mono text-[#6c6f85] dark:text-[#a6adc8] truncate">
                {tool.category}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
