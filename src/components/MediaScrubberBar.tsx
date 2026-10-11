import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc3, Music } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export const MediaScrubberBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());
  const [progress, setProgress] = useState(42);

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    soundManager.playSelect();
    const playing = soundManager.toggleAmbient();
    setIsPlaying(playing);
  };

  const toggleMute = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
    if (muted && isPlaying) {
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setProgress(newProgress);
  };

  return (
    <div className="w-full bg-[#181825] border-t-2 border-[#313244] px-4 py-3 shadow-2xl flex items-center select-none z-30">
      <div className="max-w-7xl mx-auto w-full flex items-center gap-4 sm:gap-6">
        
        {/* Left Circular Control Buttons (Exact Match to Inspiration Images) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Circular Play / Pause Button */}
          <button
            onClick={togglePlay}
            onMouseEnter={() => soundManager.playHover()}
            title={isPlaying ? 'Pause Lo-Fi Ambient Synth' : 'Play Lo-Fi Ambient Synth'}
            className="w-10 h-10 rounded-full bg-white hover:bg-[#cba6f7] text-[#11111b] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-[2px_2px_0px_#11111b] border-2 border-[#11111b] cursor-pointer"
          >
            {isPlaying ? (
              <Pause size={14} className="fill-[#11111b]" />
            ) : (
              <Play size={14} className="fill-[#11111b] ml-0.5" />
            )}
          </button>

          {/* Circular Sound / Mute Button */}
          <button
            onClick={toggleMute}
            onMouseEnter={() => soundManager.playHover()}
            title={isMuted ? 'Unmute' : 'Mute'}
            className="w-10 h-10 rounded-full bg-[#1e1e2e] hover:bg-[#313244] text-[#cdd6f4] flex items-center justify-center transition-colors cursor-pointer border-2 border-[#313244] shadow-[2px_2px_0px_#11111b]"
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-[#a6e3a1]" />}
          </button>
        </div>

        {/* Center: Track Label & Interactive Scrubber Timeline */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <div className="flex items-center justify-between text-xs text-[#cdd6f4] mb-1.5 font-mono">
            <span className="flex items-center gap-2 truncate font-semibold">
              <Disc3 size={14} className={`text-[#cba6f7] ${isPlaying ? 'animate-spin' : ''}`} />
              <span className="truncate">Cozy Lo-Fi Study Synth // Ambient Chords</span>
              {isPlaying && (
                <span className="hidden sm:inline text-[10px] bg-[#a6e3a1] text-[#11111b] px-2 py-0.2 rounded-full font-extrabold shadow-xs">
                  PLAYING
                </span>
              )}
            </span>
            <span className="text-[#a6adc8] text-[11px] hidden sm:inline font-hand text-base">
              {isPlaying ? 'relax & browse sketches ~' : 'click play for background lo-fi ☕'}
            </span>
          </div>

          {/* Scrubber Progress Bar (Like in Inspiration Image 1 & 2) */}
          <div
            onClick={handleSeek}
            className="relative h-2.5 w-full bg-[#313244] rounded-full overflow-hidden cursor-pointer group shadow-inner"
          >
            {/* Filled Progress Line with Catppuccin Mauve to Pink Gradient */}
            <div
              className="h-full bg-gradient-to-r from-[#cba6f7] via-[#f5c2e7] to-[#fab387] group-hover:brightness-110 transition-all duration-100 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Right Status */}
        <div className="hidden md:flex items-center gap-2 shrink-0 text-xs text-[#a6adc8] font-mono border-l-2 border-[#313244] pl-5">
          <Music size={14} className="text-[#fab387]" />
          <span>Web Audio Lo-Fi</span>
        </div>

      </div>
    </div>
  );
};
