import React from 'react';

interface SkySpaceBackgroundProps {
  isDark?: boolean;
}

// Flat illustrated bird silhouette with aerodynamic wing profile
const BirdSilhouette: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={Math.round(size * 0.58)}
    viewBox="0 0 24 14"
    fill="currentColor"
    className={className}
  >
    <path d="M0,8 C5,2 9,2 12,7 C15,2 19,2 24,8 C19,5 15,6 12,11 C9,6 5,5 0,8 Z" />
  </svg>
);

export const SkySpaceBackground: React.FC<SkySpaceBackgroundProps> = ({ isDark = false }) => {
  // Dense starfield coordinates (36 varied twinkling stars)
  const denseStars = [
    { top: '5%', left: '8%', size: 'w-1.5 h-1.5', color: 'bg-white', delay: '0s' },
    { top: '7%', left: '18%', size: 'w-1 h-1', color: 'bg-[#fde047]', delay: '1.2s' },
    { top: '4%', left: '32%', size: 'w-2 h-2', color: 'bg-[#89dceb]', delay: '0.4s' },
    { top: '10%', left: '46%', size: 'w-1.5 h-1.5', color: 'bg-white', delay: '1.9s' },
    { top: '6%', left: '60%', size: 'w-1 h-1', color: 'bg-[#cba6f7]', delay: '0.8s' },
    { top: '8%', left: '74%', size: 'w-2 h-2', color: 'bg-white', delay: '2.3s' },
    { top: '5%', left: '88%', size: 'w-1.5 h-1.5', color: 'bg-[#fde047]', delay: '1.4s' },
    
    { top: '14%', left: '4%', size: 'w-1 h-1', color: 'bg-[#89dceb]', delay: '2.1s' },
    { top: '18%', left: '14%', size: 'w-1.5 h-1.5', color: 'bg-white', delay: '0.6s' },
    { top: '16%', left: '26%', size: 'w-1 h-1', color: 'bg-[#cba6f7]', delay: '1.7s' },
    { top: '22%', left: '40%', size: 'w-2 h-2', color: 'bg-white', delay: '0.3s' },
    { top: '19%', left: '54%', size: 'w-1 h-1', color: 'bg-[#fde047]', delay: '2.5s' },
    { top: '23%', left: '68%', size: 'w-1.5 h-1.5', color: 'bg-[#89dceb]', delay: '1.1s' },
    { top: '17%', left: '84%', size: 'w-1 h-1', color: 'bg-white', delay: '0.9s' },
    { top: '21%', left: '94%', size: 'w-1.5 h-1.5', color: 'bg-[#a6e3a1]', delay: '2.7s' },

    { top: '29%', left: '10%', size: 'w-1.5 h-1.5', color: 'bg-white', delay: '1.5s' },
    { top: '34%', left: '22%', size: 'w-1 h-1', color: 'bg-[#89dceb]', delay: '0.7s' },
    { top: '31%', left: '36%', size: 'w-2 h-2', color: 'bg-[#fde047]', delay: '2.0s' },
    { top: '36%', left: '50%', size: 'w-1 h-1', color: 'bg-white', delay: '1.3s' },
    { top: '32%', left: '64%', size: 'w-1.5 h-1.5', color: 'bg-[#cba6f7]', delay: '0.5s' },
    { top: '37%', left: '78%', size: 'w-1 h-1', color: 'bg-white', delay: '2.2s' },
    { top: '33%', left: '90%', size: 'w-2 h-2', color: 'bg-[#89dceb]', delay: '1.8s' },

    { top: '44%', left: '6%', size: 'w-1 h-1', color: 'bg-[#cba6f7]', delay: '0.2s' },
    { top: '48%', left: '20%', size: 'w-1.5 h-1.5', color: 'bg-white', delay: '2.4s' },
    { top: '45%', left: '34%', size: 'w-1 h-1', color: 'bg-[#fde047]', delay: '1.0s' },
    { top: '50%', left: '48%', size: 'w-2 h-2', color: 'bg-[#89dceb]', delay: '1.6s' },
    { top: '46%', left: '62%', size: 'w-1.5 h-1.5', color: 'bg-white', delay: '0.9s' },
    { top: '51%', left: '76%', size: 'w-1 h-1', color: 'bg-[#a6e3a1]', delay: '2.6s' },
    { top: '47%', left: '88%', size: 'w-1.5 h-1.5', color: 'bg-white', delay: '1.2s' },

    { top: '62%', left: '12%', size: 'w-1.5 h-1.5', color: 'bg-[#fde047]', delay: '0.4s' },
    { top: '66%', left: '28%', size: 'w-1 h-1', color: 'bg-white', delay: '1.9s' },
    { top: '64%', left: '55%', size: 'w-2 h-2', color: 'bg-[#89dceb]', delay: '2.2s' },
    { top: '68%', left: '72%', size: 'w-1 h-1', color: 'bg-[#cba6f7]', delay: '0.8s' },
    { top: '65%', left: '86%', size: 'w-1.5 h-1.5', color: 'bg-white', delay: '1.7s' },

    { top: '78%', left: '8%', size: 'w-1 h-1', color: 'bg-white', delay: '1.3s' },
    { top: '82%', left: '24%', size: 'w-1.5 h-1.5', color: 'bg-[#89dceb]', delay: '0.6s' },
    { top: '80%', left: '42%', size: 'w-1 h-1', color: 'bg-[#fde047]', delay: '2.5s' },
    { top: '84%', left: '65%', size: 'w-2 h-2', color: 'bg-white', delay: '1.1s' },
    { top: '81%', left: '82%', size: 'w-1.5 h-1.5', color: 'bg-[#cba6f7]', delay: '0.5s' },
  ];

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Deep Space Foundation Backdrop */}
      <div className="absolute inset-0 bg-[#080d1e]" />

      {/* =========================================================================
          LIGHT MODE: Daytime Sky with Denser Animated Clouds (Gradual Fade)
          ========================================================================= */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-[#78bdf2] via-[#a3d4f7] to-[#dbeefc] transition-opacity duration-1200 ease-in-out ${
          isDark ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
      >
        {/* Denser Animated Cloud Layers */}
        {/* Cloud 1: Upper Left, Slow Drift */}
        <div className="absolute top-[8%] left-[6%] animate-cloud-1 opacity-90">
            <svg width="180" height="65" viewBox="0 0 200 75" fill="none">
              <path
                d="M30 60 A 25 25 0 0 1 75 35 A 35 35 0 0 1 135 30 A 30 30 0 0 1 175 60 Z"
                fill="#ffffff"
              />
              <ellipse cx="60" cy="55" rx="40" ry="15" fill="#ffffff" />
              <ellipse cx="140" cy="55" rx="45" ry="15" fill="#ffffff" />
            </svg>
          </div>

          {/* Cloud 2: Upper Mid-Right, Medium Drift */}
          <div className="absolute top-[18%] right-[22%] animate-cloud-2 opacity-85">
            <svg width="220" height="75" viewBox="0 0 240 85" fill="none">
              <path
                d="M40 70 A 30 30 0 0 1 95 40 A 40 40 0 0 1 165 35 A 32 32 0 0 1 210 70 Z"
                fill="#ffffff"
              />
              <ellipse cx="70" cy="65" rx="50" ry="18" fill="#ffffff" />
              <ellipse cx="170" cy="65" rx="50" ry="18" fill="#ffffff" />
            </svg>
          </div>

          {/* Cloud 3: Upper Center Background (Soft & High) */}
          <div className="absolute top-[12%] left-[42%] animate-cloud-3 opacity-65 scale-90">
            <svg width="160" height="60" viewBox="0 0 200 75" fill="none">
              <path
                d="M30 60 A 25 25 0 0 1 75 35 A 35 35 0 0 1 135 30 A 30 30 0 0 1 175 60 Z"
                fill="#ffffff"
              />
              <ellipse cx="60" cy="55" rx="40" ry="15" fill="#ffffff" />
              <ellipse cx="140" cy="55" rx="45" ry="15" fill="#ffffff" />
            </svg>
          </div>

          {/* Cloud 4: Middle Left, Medium Drift */}
          <div className="absolute top-[38%] left-[2%] animate-cloud-2 opacity-80">
            <svg width="240" height="80" viewBox="0 0 250 85" fill="none">
              <path
                d="M40 70 A 28 28 0 0 1 90 40 A 38 38 0 0 1 160 38 A 30 30 0 0 1 205 70 Z"
                fill="#ffffff"
              />
              <ellipse cx="65" cy="65" rx="45" ry="16" fill="#ffffff" />
              <ellipse cx="160" cy="65" rx="48" ry="16" fill="#ffffff" />
            </svg>
          </div>

          {/* Cloud 5: Middle Right */}
          <div className="absolute top-[44%] right-[6%] animate-cloud-1 opacity-85">
            <svg width="260" height="85" viewBox="0 0 270 90" fill="none">
              <path
                d="M45 75 A 32 32 0 0 1 100 42 A 44 44 0 0 1 180 38 A 34 34 0 0 1 230 75 Z"
                fill="#ffffff"
              />
              <ellipse cx="75" cy="70" rx="55" ry="18" fill="#ffffff" />
              <ellipse cx="180" cy="70" rx="55" ry="18" fill="#ffffff" />
            </svg>
          </div>

          {/* Cloud 6: Lower Left */}
          <div className="absolute bottom-[16%] left-[12%] animate-cloud-3 opacity-75">
            <svg width="270" height="90" viewBox="0 0 290 95" fill="none">
              <path
                d="M50 80 A 35 35 0 0 1 115 45 A 48 48 0 0 1 200 40 A 36 36 0 0 1 255 80 Z"
                fill="#ffffff"
              />
              <ellipse cx="85" cy="75" rx="60" ry="20" fill="#ffffff" />
              <ellipse cx="205" cy="75" rx="60" ry="20" fill="#ffffff" />
            </svg>
          </div>

          {/* Cloud 7: Lower Right */}
          <div className="absolute bottom-[8%] right-[16%] animate-cloud-2 opacity-80">
            <svg width="210" height="72" viewBox="0 0 230 80" fill="none">
              <path
                d="M35 65 A 28 28 0 0 1 85 38 A 38 38 0 0 1 155 35 A 28 28 0 0 1 195 65 Z"
                fill="#ffffff"
              />
              <ellipse cx="65" cy="60" rx="45" ry="16" fill="#ffffff" />
              <ellipse cx="160" cy="60" rx="45" ry="16" fill="#ffffff" />
            </svg>
          </div>

          {/* =========================================================================
              Light Mode Flying & Soaring Birds
              ========================================================================= */}
          {/* Flock 1: 4 Birds flying in loose V-formation across upper sky */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-bird-flock-1">
            {/* Bird 1: Flock Leader */}
            <div className="absolute top-[18%] left-0">
              <div className="animate-bird-flap-fast">
                <BirdSilhouette size={22} className="text-[#3b4261]/65 drop-shadow-xs" />
              </div>
            </div>
            {/* Bird 2: Upper Wing Follower */}
            <div className="absolute top-[15%] -left-5">
              <div className="animate-bird-flap-medium">
                <BirdSilhouette size={19} className="text-[#3b4261]/60 drop-shadow-xs" />
              </div>
            </div>
            {/* Bird 3: Lower Wing Follower */}
            <div className="absolute top-[22%] -left-4">
              <div className="animate-bird-flap-fast">
                <BirdSilhouette size={18} className="text-[#3b4261]/60 drop-shadow-xs" />
              </div>
            </div>
            {/* Bird 4: Tail Follower */}
            <div className="absolute top-[19%] -left-10">
              <div className="animate-bird-flap-slow">
                <BirdSilhouette size={16} className="text-[#3b4261]/55 drop-shadow-xs" />
              </div>
            </div>
          </div>

          {/* Flock 2: Small pair flying at mid-altitude with delayed traversal */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-bird-flock-2">
            {/* Bird 5 */}
            <div className="absolute top-[36%] left-0">
              <div className="animate-bird-flap-medium">
                <BirdSilhouette size={17} className="text-[#4c4f69]/60 drop-shadow-xs" />
              </div>
            </div>
            {/* Bird 6 */}
            <div className="absolute top-[33%] -left-5">
              <div className="animate-bird-flap-fast">
                <BirdSilhouette size={14} className="text-[#4c4f69]/50 drop-shadow-xs" />
              </div>
            </div>
          </div>

          {/* High Altitude Soaring Birds (Drifting gently near the upper clouds) */}
          {/* Bird 7: Soaring high above mid-left clouds */}
          <div className="absolute top-[14%] left-[26%] animate-bird-soar-1">
            <div className="animate-bird-flap-slow">
              <BirdSilhouette size={18} className="text-[#3b4261]/60 drop-shadow-xs" />
            </div>
          </div>

          {/* Bird 8: Companion soaring bird higher up */}
          <div className="absolute top-[21%] left-[32%] animate-bird-soar-2">
            <div className="animate-bird-flap-slow">
              <BirdSilhouette size={14} className="text-[#3b4261]/50 drop-shadow-xs" />
            </div>
          </div>

        </div>

      {/* =========================================================================
          DARK MODE: Space Themed Night Sky with Dense Stars, Shooting Stars, & Clouds
          ========================================================================= */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-[#060814] via-[#0d1326] to-[#141b36] transition-opacity duration-1200 ease-in-out ${
          isDark ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dense Twinkling Starfield (36+ Stars) */}
        <div className="absolute inset-0">
          {denseStars.map((star, idx) => (
            <div
              key={idx}
              className={`absolute ${star.size} rounded-full ${star.color} animate-twinkle`}
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay,
                opacity: 0.8,
              }}
            />
          ))}

          {/* Accent Crosshair Sparkle Stars */}
          <span className="absolute top-[15%] left-[25%] text-[10px] text-white/50 animate-twinkle">✦</span>
          <span className="absolute top-[28%] right-[30%] text-[11px] text-[#fde047]/60 animate-twinkle [animation-delay:1.5s]">✧</span>
          <span className="absolute top-[58%] left-[70%] text-[10px] text-[#89dceb]/50 animate-twinkle [animation-delay:0.8s]">✦</span>
          <span className="absolute top-[70%] left-[38%] text-[9px] text-[#cba6f7]/50 animate-twinkle [animation-delay:2.1s]">✧</span>
        </div>

          {/* =========================================================================
              Shooting Stars (Meteors) - Strict Opacity 0 Base to Prevent Idle Glitch
              ========================================================================= */}
          {/* Meteor 1 */}
          <div className="absolute top-[8%] right-[12%] animate-meteor-1 pointer-events-none opacity-0">
            <div className="w-36 h-[2px] bg-gradient-to-r from-transparent via-[#89dceb] to-white rounded-full shadow-[0_0_8px_#ffffff]" />
          </div>

          {/* Meteor 2 */}
          <div className="absolute top-[20%] right-[32%] animate-meteor-2 pointer-events-none opacity-0">
            <div className="w-44 h-[2.5px] bg-gradient-to-r from-transparent via-[#cba6f7] to-white rounded-full shadow-[0_0_10px_#ffffff]" />
          </div>

          {/* Meteor 3 */}
          <div className="absolute top-[14%] right-[58%] animate-meteor-3 pointer-events-none opacity-0">
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#fde047] to-white rounded-full shadow-[0_0_8px_#ffffff]" />
          </div>

          {/* Meteor 4 */}
          <div className="absolute top-[32%] right-[16%] animate-meteor-4 pointer-events-none opacity-0">
            <div className="w-38 h-[2px] bg-gradient-to-r from-transparent via-[#a6e3a1] to-white rounded-full shadow-[0_0_8px_#ffffff]" />
          </div>

          {/* Meteor 5 */}
          <div className="absolute top-[26%] right-[75%] animate-meteor-5 pointer-events-none opacity-0">
            <div className="w-34 h-[2px] bg-gradient-to-r from-transparent via-[#89dceb] to-white rounded-full shadow-[0_0_8px_#ffffff]" />
          </div>

          {/* Meteor 6 */}
          <div className="absolute top-[42%] right-[42%] animate-meteor-6 pointer-events-none opacity-0">
            <div className="w-40 h-[2.5px] bg-gradient-to-r from-transparent via-white to-[#cba6f7] rounded-full shadow-[0_0_9px_#ffffff]" />
          </div>

          {/* Denser Nocturnal Drifting Clouds */}
          <div className="absolute top-[14%] left-[6%] animate-cloud-1 opacity-25">
            <svg width="220" height="80" viewBox="0 0 240 85" fill="none">
              <path
                d="M40 70 A 30 30 0 0 1 95 40 A 40 40 0 0 1 165 35 A 32 32 0 0 1 210 70 Z"
                fill="#89dceb"
              />
            </svg>
          </div>

          <div className="absolute top-[24%] right-[14%] animate-cloud-2 opacity-20">
            <svg width="250" height="85" viewBox="0 0 260 90" fill="none">
              <path
                d="M45 75 A 32 32 0 0 1 100 42 A 42 42 0 0 1 175 38 A 34 34 0 0 1 220 75 Z"
                fill="#cba6f7"
              />
            </svg>
          </div>

          <div className="absolute top-[46%] left-[15%] animate-cloud-3 opacity-20">
            <svg width="260" height="90" viewBox="0 0 280 95" fill="none">
              <path
                d="M50 80 A 35 35 0 0 1 115 45 A 48 48 0 0 1 200 40 A 36 36 0 0 1 255 80 Z"
                fill="#89dceb"
              />
            </svg>
          </div>

          <div className="absolute bottom-[20%] right-[10%] animate-cloud-1 opacity-25">
            <svg width="240" height="85" viewBox="0 0 250 90" fill="none">
              <path
                d="M40 75 A 32 32 0 0 1 100 42 A 42 42 0 0 1 175 38 A 34 34 0 0 1 220 75 Z"
                fill="#cba6f7"
              />
            </svg>
          </div>

          <div className="absolute bottom-[10%] left-[8%] animate-cloud-2 opacity-20">
            <svg width="210" height="75" viewBox="0 0 230 80" fill="none">
              <path
                d="M35 65 A 28 28 0 0 1 85 38 A 38 38 0 0 1 155 35 A 28 28 0 0 1 195 65 Z"
                fill="#89dceb"
              />
            </svg>
          </div>

        </div>

      {/* =========================================================================
          CELESTIAL BODIES LAYER: Animated Sunset & Sunrise Orchestration
          Sequence: The active body sets immediately (0ms), sinking toward the horizon.
          Then the incoming body rises from below the horizon after a delay (450ms).
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        
        {/* Flat Sun Celestial Wrapper */}
        <div
          className={`absolute top-4 right-4 sm:top-8 sm:right-16 md:top-12 md:right-28 ${
            isDark ? 'celestial-sun-set' : 'celestial-sun-risen'
          }`}
        >
          <div className="animate-sun">
            <svg className="w-14 h-14 sm:w-18 sm:h-18 md:w-[86px] md:h-[86px]" viewBox="0 0 100 100" fill="none">
              {/* Flat Sun Rays */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line
                  key={deg}
                  x1="50"
                  y1="14"
                  x2="50"
                  y2="5"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  strokeLinecap="round"
                  transform={`rotate(${deg} 50 50)`}
                />
              ))}

              {/* Flat Outer Disc */}
              <circle
                cx="50"
                cy="50"
                r="28"
                fill="#fbbf24"
                stroke="#f59e0b"
                strokeWidth="2.5"
              />

              {/* Flat Inner Highlight Disc */}
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="#fde047"
              />
            </svg>
          </div>
        </div>

        {/* Moon Celestial Wrapper */}
        <div
          className={`absolute top-4 right-4 sm:top-8 sm:right-16 md:top-12 md:right-28 ${
            isDark ? 'celestial-moon-risen' : 'celestial-moon-set'
          }`}
        >
          <div className="animate-sun">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#f8fafc] border border-[#e2e8f0]/40 shadow-[0_0_18px_rgba(248,250,252,0.45)] sm:shadow-[0_0_25px_rgba(248,250,252,0.45)] relative overflow-hidden">
              <div className="absolute top-2.5 left-3 sm:top-3 sm:left-4 w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-[#e2e8f0]/85" />
              <div className="absolute top-5.5 left-6 sm:top-7 sm:left-8 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#e2e8f0]/75" />
              <div className="absolute top-7 left-2 sm:top-9 sm:left-3 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#e2e8f0]/65" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
