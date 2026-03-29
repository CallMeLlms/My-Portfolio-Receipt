import React, { useState, useEffect } from 'react';
import { LOADER_FRAMES } from '../constants';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (frameIndex < LOADER_FRAMES.length - 1) {
      const randomDelay = Math.floor(Math.random() * 700) + 150; // Random delay between 150ms and 850ms
      const timer = setTimeout(() => {
        setFrameIndex(prev => prev + 1);
      }, randomDelay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [frameIndex, onComplete]);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#f0f0f0]">
      <pre className="font-mono text-xs md:text-sm whitespace-pre leading-tight text-black">
        {LOADER_FRAMES[frameIndex]}
      </pre>
    </div>
  );
}
