import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { RoughEase } from 'gsap/EasePack';

gsap.registerPlugin(RoughEase);

export default function CRTEffect() {
  const flickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!flickerRef.current) return;

    const tl = gsap.timeline({ repeat: -1 });
    
    // Screen Flicker: jitter opacity between 0.02 and 0.05
    tl.to(flickerRef.current, {
      opacity: 0.05,
      duration: 0.1,
      ease: RoughEase.ease.config({
        template: "none",
        strength: 3,
        points: 15,
        taper: "none",
        randomize: true,
        clamp: false
      }),
    }).to(flickerRef.current, {
      opacity: 0.02,
      duration: 0.1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Bulge Effect & Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.2) 85%, rgba(0,0,0,0.8) 100%)',
          boxShadow: 'inset 0 0 120px rgba(0,0,0,0.9)'
        }}
      />
      
      {/* Scanline Pattern */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 1px, rgba(0,0,0,0.8) 1px, rgba(0,0,0,0.8) 2px)',
          backgroundSize: '100% 2px'
        }}
      />
      
      {/* Screen Flicker */}
      <div ref={flickerRef} className="absolute inset-0 bg-white opacity-[0.02]" />
    </div>
  );
}
