import React from 'react';

interface ProjectItemProps {
  title: string;
  qty: string;
  tags: string;
  desc?: string;
  role?: string;
  stack?: string;
  bullets?: string[];
}

export const ProjectItem = ({ title, desc, qty, tags, role, stack, bullets }: ProjectItemProps) => (
  <div className="mb-6 group">
    <div className="flex justify-between items-baseline mb-1">
      <h3 className="font-bold text-lg uppercase leading-none">{title}</h3>
      <span className="text-sm font-bold">×{qty}</span>
    </div>
    {role && <div className="text-xs font-bold mb-1 opacity-90">{role}</div>}
    {stack && <div className="text-[10px] font-bold mb-2 opacity-70">STACK: {stack}</div>}
    {desc && <p className="text-xs leading-tight mb-2 opacity-80">{desc}</p>}
    {bullets && bullets.length > 0 && (
      <ul className="text-[10px] leading-tight mb-2 opacity-80 space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="shrink-0">-</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    )}
    <div className="flex justify-between text-[10px] font-bold opacity-60 mt-2 border-t border-black/10 pt-1">
      <span>{tags}</span>
      <span>USD/TIME/CODE</span>
    </div>
  </div>
);
