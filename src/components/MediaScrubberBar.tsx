import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc3 } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export const MediaScrubberBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());
  const [progress, setProgress] = useState(35); // percentage for the timeline bar

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
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
    <div className="w-full bg-[#14141b] border-t border-[#23232e] px-4 py-2.5 shadow-2xl flex items-center gap-4 text-xs font-mono select-none">
      <div className="max-w-7xl mx-auto w-full flex items-center gap-3 sm:gap-6">
        
        {/* Left Circular Control Buttons (Exact Match to Reference Screenshots) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Circular Play / Pause Button */}
          <button
            onClick={togglePlay}
            onMouseEnter={() => soundManager.playHover()}
            title={isPlaying ? 'Pause Ambient Audio' : 'Play Ambient Lo-Fi Synth'}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#01ef01] text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md cursor-pointer"
          >
            {isPlaying ? (
              <Pause size={14} className="fill-black" />
            ) : (
              <Play size={14} className="fill-black ml-0.5" />
            )}
          </button>

          {/* Circular Sound / Mute Button */}
          <button
            onClick={toggleMute}
            onMouseEnter={() => soundManager.playHover()}
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            className="w-9 h-9 rounded-full bg-[#20202a] hover:bg-[#2c2c3a] text-white flex items-center justify-center transition-colors cursor-pointer border border-[#30303e]"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-[#01ef01]" />}
          </button>
        </div>

        {/* Center: Track Label & Interactive Scrubber Timeline */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <div className="flex items-center justify-between text-[11px] text-slate-300 mb-1">
            <span className="flex items-center gap-2 truncate font-bold">
              <Disc3 size={13} className={`text-[#01ef01] ${isPlaying ? 'animate-spin' : ''}`} />
              <span className="truncate">DARK HOUR // LO-FI AMBIENT SYNTH</span>
              {isPlaying && (
                <span className="hidden sm:inline text-[9px] bg-[#01ef01] text-black px-1.5 py-0.2 font-black">
                  LIVE
                </span>
              )}
            </span>
            <span className="text-slate-400 font-mono text-[10px] hidden sm:inline">
              {isPlaying ? 'PLAYING WEB AUDIO' : 'CLICK PLAY TO LISTEN'}
            </span>
          </div>

          {/* Scrubber Progress Bar (Like in Screenshot 1 & 2) */}
          <div
            onClick={handleSeek}
            className="relative h-2 w-full bg-[#2a2a38] rounded-full overflow-hidden cursor-pointer group"
          >
            {/* Filled Progress Line with Watch Dogs 2 Coral / Magenta Accent */}
            <div
              className="h-full bg-gradient-to-r from-[#e82f41] to-[#ff007f] group-hover:brightness-125 transition-all duration-100 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Right: Quick Status */}
        <div className="hidden md:flex items-center gap-2 shrink-0 text-[10px] text-slate-400 font-mono border-l border-[#262634] pl-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#01ef01] animate-ping" />
          <span>SYNTH ENGINE READY</span>
        </div>

      </div>
    </div>
  );
};
