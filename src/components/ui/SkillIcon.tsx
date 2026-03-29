import React from 'react';

export const SkillIcon = ({ name, icon: Icon }: { name: string; icon: any }) => (
  <div className="flex flex-col items-center gap-2 p-2 border border-black aspect-square justify-center relative overflow-hidden group">
    <div className="absolute inset-0 dither-bg opacity-10 group-hover:opacity-20 transition-opacity" />
    <Icon size={32} className="relative z-10" />
    <span className="text-[10px] 2xl:text-xs font-bold uppercase relative z-10">{name}</span>
  </div>
);
