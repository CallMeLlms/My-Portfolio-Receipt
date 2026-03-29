import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { RoughEase } from 'gsap/EasePack';

gsap.registerPlugin(RoughEase);

export default function ScannerTransition({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !lineRef.current) return;

    const tl = gsap.timeline();

    // Initial state: content is completely clipped from the bottom
    gsap.set(contentRef.current, { clipPath: 'inset(0% 0% 100% 0%)' });
    gsap.set(lineRef.current, { top: '0%' });

    // Synchronized sweep
    tl.to(contentRef.current, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.5,
      ease: 'power2.inOut',
    }, 0);

    tl.to(lineRef.current, {
      top: '100%',
      duration: 1.5,
      ease: 'power2.inOut',
    }, 0);

    // Jitter / Glitch effect on the scanner line
    tl.to(lineRef.current, {
      y: 3,
      duration: 1.5,
      ease: RoughEase.ease.config({
        template: "none",
        strength: 5,
        points: 80,
        taper: "none",
        randomize: true,
        clamp: false
      }),
      clearProps: "y"
    }, 0);

    // Fade out line at the end
    tl.to(lineRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.out'
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full flex justify-center">
      <div ref={contentRef} className="w-full h-full flex justify-center">
        {children}
      </div>
      <div 
        ref={lineRef} 
        className="absolute left-0 w-full h-[2px] bg-black z-50 shadow-[0_2px_8px_rgba(0,0,0,0.8)] pointer-events-none"
      />
    </div>
  );
}
