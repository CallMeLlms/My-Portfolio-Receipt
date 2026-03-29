import React from 'react';

export const SectionHeader = ({ title }: { title: string }) => (
  <div className="bg-black text-white px-2 py-1 inline-block mb-4 font-bold tracking-widest text-sm">
    [{title}]
  </div>
);
