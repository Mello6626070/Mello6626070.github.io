import React, { useEffect } from 'react';
import { soundManager } from '../utils/soundEffects';
import { X, GripHorizontal } from 'lucide-react';
import { useDraggableWindow } from '../hooks/useDraggableWindow';

export interface DesktopWindowModalProps {
  isOpen: boolean;
  title: string;
  windowId: string;
  icon?: React.ReactNode;
  zIndex?: number;
  isActive?: boolean;
  initialOffset?: { x: number; y: number };
  maxWidthClass?: string;
  contentClassName?: string;
  onFocus?: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

export const DesktopWindowModal: React.FC<DesktopWindowModalProps> = ({
  isOpen,
  title,
  windowId,
  icon,
  zIndex = 30,
  isActive = true,
  initialOffset,
  maxWidthClass,
  contentClassName,
  onFocus,
  onClose,
  children,
}) => {
  const {
    isDragging,
    isMaximized,
    windowRef,
    dragHandleProps,
    windowStyle,
  } = useDraggableWindow({
    isOpen,
    initialPosition: initialOffset,
    onFocus,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Close only the currently active window on Escape
      if (e.key === 'Escape' && isOpen && isActive) {
        soundManager.playWindowClose();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isActive, onClose]);

  if (!isOpen) return null;

  const handleClose = () => {
    soundManager.playWindowClose();
    onClose();
  };

  return (
    <div
      role="region"
      aria-labelledby={`desktop-window-${windowId}-title`}
      className="fixed inset-0 pointer-events-none flex items-center justify-center p-2 sm:p-4 md:p-6"
      style={{ zIndex }}
    >
      {/* Retro Movable Window Container (Interactive, Click to Focus) */}
      <div
        ref={windowRef}
        style={windowStyle}
        onPointerDown={() => onFocus?.()}
        className={`pointer-events-auto relative ${
          isMaximized
            ? 'w-[98vw] h-[95vh] max-w-none max-h-none'
            : `w-full ${maxWidthClass || 'max-w-4xl'} max-h-[85dvh] sm:max-h-[90vh]`
        } bg-[#eff1f5] dark:bg-[#181825] border-2 ${
          isActive
            ? isDragging
              ? 'border-[#fe640b] dark:border-[#fab387] shadow-[14px_14px_0px_rgba(76,79,105,0.35)] dark:shadow-[14px_14px_0px_#05060b]'
              : 'border-[#4c4f69] dark:border-[#89b4fa] shadow-[6px_6px_0px_rgba(76,79,105,0.25)] sm:shadow-[10px_10px_0px_rgba(76,79,105,0.3)] dark:shadow-[6px_6px_0px_#07080f] dark:sm:shadow-[10px_10px_0px_#07080f]'
            : 'border-[#ccd0da] dark:border-[#313244] shadow-[4px_4px_0px_rgba(76,79,105,0.15)] sm:shadow-[5px_5px_0px_rgba(76,79,105,0.15)] dark:shadow-[4px_4px_0px_#000] opacity-[0.98]'
        } rounded-xl flex flex-col overflow-hidden transition-all duration-150 animate-in zoom-in-95 duration-150`}
      >
        {/* Retro Window Draggable Titlebar */}
        <div
          {...dragHandleProps}
          className={`${
            isActive
              ? 'bg-[#4c4f69] dark:bg-[#11111b] text-[#eff1f5] dark:text-[#cdd6f4]'
              : 'bg-[#6c6f85] dark:bg-[#1e1e2e] text-[#ccd0da] dark:text-[#a6adc8]'
          } px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between border-b-2 ${
            isActive
              ? 'border-[#4c4f69] dark:border-[#313244]'
              : 'border-[#ccd0da] dark:border-[#262738]'
          } select-none shrink-0 transition-colors duration-150`}
        >
          {/* Left: Window Title */}
          <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-sm sm:text-base font-bold tracking-wide pointer-events-none min-w-0">
            {icon && <span className="text-sm sm:text-base shrink-0">{icon}</span>}
            {title ? (
              <span
                id={`desktop-window-${windowId}-title`}
                className="truncate max-w-[140px] xs:max-w-[200px] sm:max-w-none"
              >
                {title}
              </span>
            ) : null}
          </div>

          {/* Center: Drag Indicator */}
          <div className="hidden md:flex items-center gap-1.5 opacity-40 hover:opacity-80 transition-opacity text-xs font-mono select-none pointer-events-none">
            <GripHorizontal size={14} />
            <span className="text-[10px] tracking-widest uppercase">drag to move</span>
          </div>

          {/* Right: Window Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={handleClose}
              className="w-7 h-7 sm:w-6 sm:h-6 rounded-md bg-[#d20f39] hover:bg-[#e64553] text-white flex items-center justify-center text-[10px] cursor-pointer transition-colors shadow-xs active:scale-95"
              title="Close window (Esc)"
            >
              <X size={13} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Window Content Body */}
        <div className={`flex-1 overflow-y-auto ${contentClassName || 'p-3.5 sm:p-6 md:p-8'} bg-[#eff1f5] dark:bg-[#181825] text-[#4c4f69] dark:text-[#cdd6f4]`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DesktopWindowModal;
