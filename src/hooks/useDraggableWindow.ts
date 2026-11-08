import { useState, useRef, useEffect, useCallback } from 'react';
import { soundManager } from '../utils/soundEffects';

export interface UseDraggableWindowOptions {
  isOpen?: boolean;
  disabled?: boolean;
  initialPosition?: { x: number; y: number };
  onMaximizeChange?: (isMaximized: boolean) => void;
  onFocus?: () => void;
}

export function useDraggableWindow({
  isOpen = true,
  disabled = false,
  initialPosition,
  onMaximizeChange,
  onFocus,
}: UseDraggableWindowOptions = {}) {
  const isMobileViewport = () => typeof window !== 'undefined' && window.innerWidth < 768;
  const [isMobile, setIsMobile] = useState(isMobileViewport);
  const [position, setPosition] = useState(() => 
    (typeof window !== 'undefined' && window.innerWidth < 768) ? { x: 0, y: 0 } : (initialPosition ?? { x: 0, y: 0 })
  );
  const [isDragging, setIsDragging] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const windowRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<{
    startX: number;
    startY: number;
    initialPosX: number;
    initialPosY: number;
    rectLeft: number;
    rectTop: number;
    rectWidth: number;
    rectHeight: number;
    hasMoved: boolean;
  } | null>(null);

  const lastDragEndTimeRef = useRef(0);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      const mobile = isMobileViewport();
      setIsMobile(mobile);
      setPosition(mobile ? { x: 0, y: 0 } : (initialPosition ?? { x: 0, y: 0 }));
      setIsMaximized(false);
    }
  }

  // Handle window resizing: ensure floating window stays within visible viewport bounds and resets on mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setPosition({ x: 0, y: 0 });
        return;
      }
      if (!windowRef.current || isMaximized) return;
      const rect = windowRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const minLeft = 60 - rect.width;
      const maxLeft = viewportWidth - 60;
      const minTop = 8;
      const maxTop = viewportHeight - 45;

      let adjustX = 0;
      let adjustY = 0;

      if (rect.left < minLeft) adjustX = minLeft - rect.left;
      else if (rect.left > maxLeft) adjustX = maxLeft - rect.left;

      if (rect.top < minTop) adjustY = minTop - rect.top;
      else if (rect.top > maxTop) adjustY = maxTop - rect.top;

      if (adjustX !== 0 || adjustY !== 0) {
        setPosition((prev) => ({
          x: prev.x + adjustX,
          y: prev.y + adjustY,
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMaximized]);

  // Pointer Down on title bar / drag handle
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      onFocus?.();
      if (disabled || isMaximized || isMobile) return;
      // Only handle primary button (left click) or single touch
      if (e.button !== 0 && e.pointerType === 'mouse') return;

      const windowEl = windowRef.current;
      if (!windowEl) return;

      const rect = windowEl.getBoundingClientRect();

      dragStateRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        initialPosX: position.x,
        initialPosY: position.y,
        rectLeft: rect.left,
        rectTop: rect.top,
        rectWidth: rect.width,
        rectHeight: rect.height,
        hasMoved: false,
      };

      setIsDragging(true);
      soundManager.playWindowGrab();
      e.preventDefault();
    },
    [disabled, isMaximized, isMobile, onFocus, position]
  );

  // Global Pointer Move & Up listeners while dragging
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: PointerEvent) => {
      const state = dragStateRef.current;
      if (!state) return;

      const deltaX = e.clientX - state.startX;
      const deltaY = e.clientY - state.startY;

      if (!state.hasMoved && Math.hypot(deltaX, deltaY) > 3) {
        state.hasMoved = true;
      }

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const minLeft = 60 - state.rectWidth;
      const maxLeft = viewportWidth - 60;
      const minTop = 8;
      const maxTop = viewportHeight - 45;

      const targetLeft = state.rectLeft + deltaX;
      const targetTop = state.rectTop + deltaY;

      const clampedLeft = Math.max(minLeft, Math.min(maxLeft, targetLeft));
      const clampedTop = Math.max(minTop, Math.min(maxTop, targetTop));

      const actualDeltaX = clampedLeft - state.rectLeft;
      const actualDeltaY = clampedTop - state.rectTop;

      setPosition({
        x: state.initialPosX + actualDeltaX,
        y: state.initialPosY + actualDeltaY,
      });
    };

    const handlePointerUp = () => {
      const state = dragStateRef.current;
      if (state?.hasMoved) {
        soundManager.playWindowDrop();
        lastDragEndTimeRef.current = Date.now();
      }
      dragStateRef.current = null;
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging]);

  const toggleMaximize = useCallback(() => {
    soundManager.playPop();
    setIsMaximized((prev) => {
      const next = !prev;
      onMaximizeChange?.(next);
      return next;
    });
  }, [onMaximizeChange]);

  const resetPosition = useCallback(() => {
    setPosition({ x: 0, y: 0 });
    setIsMaximized(false);
  }, []);

  const shouldTransform = isDragging || position.x !== 0 || position.y !== 0;

  const windowStyle: React.CSSProperties = {
    transform: isMaximized || isMobile
      ? 'none'
      : shouldTransform
      ? `translate3d(${position.x}px, ${position.y}px, 0)`
      : undefined,
    transition: isDragging ? 'none' : 'transform 0.15s cubic-bezier(0.2, 0, 0, 1)',
    willChange: isDragging ? 'transform' : 'auto',
  };

  const dragHandleProps = {
    onPointerDown: handlePointerDown,
    style: {
      cursor: isMaximized || isMobile ? 'default' : isDragging ? 'grabbing' : 'grab',
      userSelect: 'none' as const,
      touchAction: isMobile ? 'auto' as const : 'none' as const,
    },
  };

  const isBackdropClickAllowed = useCallback(() => {
    return Date.now() - lastDragEndTimeRef.current > 150;
  }, []);

  return {
    position,
    isDragging,
    isMaximized,
    isMobile,
    windowRef,
    dragHandleProps,
    windowStyle,
    toggleMaximize,
    resetPosition,
    isBackdropClickAllowed,
  };
}
