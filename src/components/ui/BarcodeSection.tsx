import React from 'react';

export const BarcodeSection = ({ value, label }: { value: string; label?: string }) => (
  <div className="flex flex-col items-center py-4">
    <div className="flex gap-[2px] h-12 items-end">
      {value.split('').map((char, i) => {
        const width = (parseInt(char, 36) % 3) + 1;
        return (
          <div
            key={i}
            className="bg-black h-full"
            style={{ width: `${width}px` }}
          />
        );
      })}
    </div>
    {label && <span className="text-[10px] 2xl:text-xs mt-1 tracking-[0.3em] font-bold uppercase">{label}</span>}
  </div>
);
