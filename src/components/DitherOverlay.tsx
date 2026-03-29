import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function DitherOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 12fps = 1000ms / 12 ≈ 83ms per frame
    const frameDuration = 1 / 12;

    gsap.to(overlayRef.current, {
      duration: frameDuration,
      repeat: -1,
      onRepeat: () => {
        if (!overlayRef.current) return;
        
        // Randomly shift the background position by 0-3 pixels
        // This breaks the static grid and creates the jittery 1-bit flicker
        const x = Math.floor(Math.random() * 4);
        const y = Math.floor(Math.random() * 4);
        
        // Randomly adjust opacity slightly for a CRT/terminal flicker
        const op = 0.08 + Math.random() * 0.04;
        
        gsap.set(overlayRef.current, {
          backgroundPosition: `${x}px ${y}px`,
          opacity: op
        });
      }
    });
  }, { scope: overlayRef });

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[100] pointer-events-none bayer-overlay"
      style={{ mixBlendMode: 'multiply', opacity: 0.1 }}
    />
  );
}
