import React, { useState, useEffect, useRef } from 'react';
import { HomeWindow } from './components/HomeWindow';
import { AboutView } from './components/AboutView';
import { RadarView } from './components/RadarView';
import { ContactSection } from './components/ContactSection';
import { DesktopWindowModal } from './components/DesktopWindowModal';
import { SkySpaceBackground } from './components/SkySpaceBackground';
import { TopNavControls } from './components/TopNavControls';
import { soundManager } from './utils/soundEffects';
import { GithubIcon, InstagramIcon, FacebookIcon } from './components/Icons';
import { profileData } from './data/profile';

export type WindowId = 'about' | 'radar' | 'contact';

export const App: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<Record<WindowId, boolean>>({
    about: false,
    radar: false,
    contact: false,
  });

  const [activeWindow, setActiveWindow] = useState<WindowId | null>(null);
  const [windowZIndices, setWindowZIndices] = useState<Record<WindowId, number>>({
    about: 30,
    radar: 31,
    contact: 32,
  });

  const topZIndexRef = useRef(35);

  // Dark mode state: default to light day sky, toggleable to starry night sky
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('mello_theme');
      if (stored) return stored === 'dark';
    }
    return false;
  });

  const [isMuted, setIsMuted] = useState(soundManager.getMuted());

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('mello_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('mello_theme', 'light');
    }
  }, [isDark]);

  const handleToggleDark = () => {
    soundManager.playThemeSwitch();
    setIsDark((prev) => !prev);
  };

  const handleToggleMute = () => {
    soundManager.playPop();
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const focusWindow = (id: WindowId) => {
    topZIndexRef.current += 1;
    const newZ = topZIndexRef.current;
    setWindowZIndices((prev) => ({ ...prev, [id]: newZ }));
    setActiveWindow(id);
  };

  const openWindow = (id: WindowId) => {
    setOpenWindows((prev) => ({ ...prev, [id]: true }));
    focusWindow(id);
  };

  const closeWindow = (id: WindowId) => {
    soundManager.playWindowClose();
    setOpenWindows((prev) => ({ ...prev, [id]: false }));
    setActiveWindow((prev) => (prev === id ? null : prev));
  };

  const handleToggleWindow = (id: WindowId | null) => {
    if (!id) return;
    if (openWindows[id]) {
      // If open and active, minimize/close; if in background, bring to front
      if (activeWindow === id) {
        closeWindow(id);
      } else {
        soundManager.playSelect();
        focusWindow(id);
      }
    } else {
      soundManager.playWindowOpen();
      openWindow(id);
    }
  };

  return (
    <div className="relative w-full h-[100dvh] min-h-[500px] overflow-x-hidden overflow-y-auto md:overflow-hidden text-[#4c4f69] dark:text-[#cdd6f4] select-none transition-colors duration-250 flex flex-col justify-between">
      
      {/* =========================================================================
          Top Nav Bar: Theme Toggle and SFX Toggle
          ========================================================================= */}
      <nav className="fixed top-0 left-0 w-full p-3 sm:p-5 md:p-6 z-20 flex items-center justify-between pointer-events-none">
        
        {/* Left Controls with Library Icons */}
        <TopNavControls
          isDark={isDark}
          isMuted={isMuted}
          onToggleDark={handleToggleDark}
          onToggleMute={handleToggleMute}
        />

      </nav>

      {/* =========================================================================
          Center Floating Home Window
          ========================================================================= */}
      <main className="relative flex-1 flex items-center justify-center p-3 sm:p-4 pt-16 pb-20 sm:pt-4 sm:pb-4 z-10 min-h-[360px]">
        <HomeWindow
          onOpenModal={(modal) => handleToggleWindow(modal)}
          openWindows={openWindows}
          activeWindow={activeWindow}
          isDark={isDark}
        />
      </main>

      {/* =========================================================================
          Animated Sky Background:
          - Light mode: Daytime sky with sun and animated clouds
          - Dark mode: Starry night sky with clouds and animated shooting stars
          ========================================================================= */}
      <SkySpaceBackground isDark={isDark} />

      {/* =========================================================================
          Bottom Dock Footer: Social Icons & Copyright
          ========================================================================= */}
      <footer className="fixed bottom-2 sm:bottom-3 left-0 w-full z-20 flex flex-col items-center pointer-events-none select-none px-4">
        
        {/* Rounded Social Icons Row */}
        <div className="flex items-center gap-3 sm:gap-3.5 mb-1 sm:mb-1.5 pointer-events-auto">
          
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4c4f69] dark:bg-[#cba6f7] text-[#eff1f5] dark:text-[#11111b] flex items-center justify-center hover:scale-110 active:scale-90 transition-transform shadow-[0px_2px_4px_rgba(76,79,105,0.25)] dark:shadow-[0px_2px_6px_rgba(0,0,0,0.6)]"
            title="GitHub (Mello6626070)"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href={profileData.links.facebook}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4c4f69] dark:bg-[#cba6f7] text-[#eff1f5] dark:text-[#11111b] flex items-center justify-center hover:scale-110 active:scale-90 transition-transform shadow-[0px_2px_4px_rgba(76,79,105,0.25)] dark:shadow-[0px_2px_6px_rgba(0,0,0,0.6)]"
            title="Facebook (J Anthony Alarcon)"
          >
            <FacebookIcon size={16} />
          </a>

          <a
            href={profileData.links.instagram}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4c4f69] dark:bg-[#cba6f7] text-[#eff1f5] dark:text-[#11111b] flex items-center justify-center hover:scale-110 active:scale-90 transition-transform shadow-[0px_2px_4px_rgba(76,79,105,0.25)] dark:shadow-[0px_2px_6px_rgba(0,0,0,0.6)]"
            title="Instagram (@planck6626070) - 3D Art & Photos"
          >
            <InstagramIcon size={16} />
          </a>
        </div>

        {/* Copyright Centered Line */}
        <span className="font-mono text-[10px] sm:text-[11px] text-[#4c4f69]/80 dark:text-[#a6adc8] tracking-wider pointer-events-auto text-center truncate max-w-full">
          © 2026 Jesus Anthony G. Alarcon
        </span>

      </footer>

      {/* =========================================================================
          Desktop Floating Windows (Multi-Window Desktop Environment)
          ========================================================================= */}
      
      {/* About Window */}
      <DesktopWindowModal
        isOpen={openWindows.about}
        title="about"
        windowId="about"
        zIndex={windowZIndices.about}
        isActive={activeWindow === 'about'}
        initialOffset={{ x: -45, y: -20 }}
        onFocus={() => focusWindow('about')}
        onClose={() => closeWindow('about')}
      >
        <AboutView />
      </DesktopWindowModal>

      {/* Radar Window */}
      <DesktopWindowModal
        isOpen={openWindows.radar}
        title="radar"
        windowId="radar"
        zIndex={windowZIndices.radar}
        isActive={activeWindow === 'radar'}
        initialOffset={{ x: 15, y: 15 }}
        onFocus={() => focusWindow('radar')}
        onClose={() => closeWindow('radar')}
      >
        <RadarView isDark={isDark} />
      </DesktopWindowModal>

      {/* Contact Window */}
      <DesktopWindowModal
        isOpen={openWindows.contact}
        title="contact"
        windowId="contact"
        zIndex={windowZIndices.contact}
        isActive={activeWindow === 'contact'}
        initialOffset={{ x: 60, y: 40 }}
        onFocus={() => focusWindow('contact')}
        onClose={() => closeWindow('contact')}
      >
        <ContactSection isDark={isDark} />
      </DesktopWindowModal>

    </div>
  );
};

export default App;
