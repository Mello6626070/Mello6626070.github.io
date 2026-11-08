import React from 'react';
import { profileData } from '../data/profile';
import { GraduationCap, Heart } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="text-[#4c4f69] dark:text-[#cdd6f4] select-text">
      
      {/* Top Profile Header */}
      <div className="pt-1 sm:pt-4 p-1 sm:p-4 text-center sm:text-left">
        {/* Text Details */}
        <div className="space-y-1 sm:space-y-1.5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fe640b] dark:text-[#fab387] tracking-tight leading-tight">
            {profileData.name}
          </h1>

          <div className="text-sm sm:text-base md:text-lg text-[#4c4f69] dark:text-[#cdd6f4] font-medium leading-snug">
            {profileData.degree}
          </div>

          <div className="text-xs sm:text-sm text-[#6c6f85] dark:text-[#a6adc8] font-mono">
            {profileData.school} • {profileData.location}
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="h-px bg-[#ccd0da] dark:bg-[#313244] my-4 sm:my-6 border-0 w-full" />

      {/* Main Narrative & Sections */}
      <div className="px-1 sm:px-4 space-y-6 sm:space-y-8 text-sm sm:text-base leading-relaxed">
        
        {/* Introduction */}
        <div>
          <p className="text-sm sm:text-base md:text-lg text-[#4c4f69] dark:text-[#cdd6f4] leading-relaxed">
            Hi! I'm <span className="font-bold text-[#fe640b] dark:text-[#fab387]">Anthony</span>, a 4th-year Computer Science student at <span className="font-semibold text-[#4c4f69] dark:text-white">STI College Lucena</span> in Lucena City, Quezon. When I'm not studying or learning new languages and tools, I enjoy playing video games, 3D modeling in Blender, photography, listening to music, watching anime and shows, reading, and exploring science and math.
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2 font-mono font-bold text-base sm:text-lg md:text-xl tracking-wider text-[#4c4f69] dark:text-white uppercase">
            <GraduationCap size={18} className="text-[#fe640b] dark:text-[#fab387]" />
            <h3>EDUCATION</h3>
          </div>

          <div className="border-l-4 pl-3.5 sm:pl-4 border-[#ccd0da] dark:border-[#45475a] space-y-1">
            <p className="text-sm sm:text-base md:text-lg font-medium text-[#4c4f69] dark:text-[#cdd6f4]">
              {profileData.degree}
            </p>
            <span className="text-xs sm:text-sm font-mono text-[#6c6f85] dark:text-[#a6adc8] uppercase block">
              {profileData.school} • {profileData.location}
            </span>
          </div>
        </div>

        {/* Interests Section */}
        <div className="space-y-2.5 sm:space-y-3 pb-2">
          <div className="flex items-center gap-2 font-mono font-bold text-base sm:text-lg md:text-xl tracking-wider text-[#4c4f69] dark:text-white uppercase">
            <Heart size={18} className="text-[#ea76cb] dark:text-[#f5c2e7]" />
            <h3>INTERESTS & HOBBIES</h3>
          </div>

          <ul className="pl-5 sm:pl-6 list-disc space-y-2 text-xs sm:text-sm md:text-base text-[#4c4f69] dark:text-[#cdd6f4]">
            <li>
              <span className="font-semibold text-[#4c4f69] dark:text-white">Playing video games</span> and studying game mechanics & game design.
            </li>
            <li>
              <span className="font-semibold text-[#4c4f69] dark:text-white">3D art & photography:</span> modeling low-poly props in Blender and capturing photos.
            </li>
            <li>
              <span className="font-semibold text-[#4c4f69] dark:text-white">Music & entertainment:</span> listening to tracks while studying, and watching anime and shows.
            </li>
            <li>
              <span className="font-semibold text-[#4c4f69] dark:text-white">Reading, Science & Mathematics:</span> exploring fundamental principles of how nature, computers, and physics operate.
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};
