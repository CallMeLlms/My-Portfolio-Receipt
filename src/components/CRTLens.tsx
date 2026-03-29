import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

export default function CRTLens({ children }: { children: React.ReactNode }) {
  const lensRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle breathing animation simulating high-voltage power fluctuations
    gsap.to(lensRef.current, {
      scale: 1.085, // Base is 1.08, breathe slightly larger
      duration: 3 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: lensRef });

  useEffect(() => {
    if (!scrollWrapperRef.current || !scrollContentRef.current) return;
    
    const lenis = new Lenis({
      wrapper: scrollWrapperRef.current,
      content: scrollContentRef.current,
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#050505] overflow-hidden">
      {/* CRT Lens Container */}
      <div 
        ref={lensRef}
        className="absolute inset-0 origin-center overflow-hidden"
        style={{
          transform: 'perspective(600px) rotateX(2deg) scale(1.05)',
          transformStyle: 'preserve-3d',
          borderRadius: '32px', // Barrel distortion / tucked corners
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.9)', // Inner shadow for the tube
        }}
      >
        {/* Scrollable Content */}
        <div 
          ref={scrollWrapperRef}
          className="absolute inset-0 overflow-y-auto overflow-x-hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div ref={scrollContentRef} className="min-h-full w-full bg-[#f0f0f0]">
            {children}
          </div>
        </div>

        {/* Scanlines */}
        <div 
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.03))',
            backgroundSize: '100% 4px',
          }}
        />

        {/* Glass Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none z-40"
          style={{
            background: 'radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.4) 100%)',
          }}
        />

        {/* Reflection Streak */}
        <div 
          className="absolute inset-0 pointer-events-none z-50"
          style={{
            background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.02) 50%, transparent 54%)',
          }}
        />
      </div>
    </div>
  );
}
