import React from 'react';
import { CREATIVE_INTERESTS } from '../../data/portfolioData';
import { PanelShell } from './PanelShell';

interface CreativePanelProps {
  onClose: () => void;
}

export const CreativePanel: React.FC<CreativePanelProps> = ({ onClose }) => {
  return (
    <PanelShell
      title="Window Camera — Beyond the Code"
      subtitle="Creative interests outside engineering and data science"
      onClose={onClose}
    >
      <div className="space-y-6">
        {/* Camera Viewfinder Frame */}
        <div className="bg-[#382D29] text-[#F2E5D3] border-2 border-[#382D29] p-5">
          <div className="flex items-center justify-between text-[11px] font-pixel text-[#D7AF67] mb-3">
            <span>Viewfinder</span>
            <span>Golden Hour</span>
          </div>
          <p className="text-sm leading-relaxed text-[#F2E5D3]/90">
            Technology is only half of the story. Away from datasets and editors, these creative outlets shape how I observe, listen, and tell stories.
          </p>
        </div>

        {/* Four Creative Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CREATIVE_INTERESTS.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#FAF1E4] border-2 border-[#382D29] p-4 sm:p-5 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs tabular-nums text-[#A87955] mb-1">
                  0{idx + 1}
                </div>
                <h3 className="font-pixel text-sm text-[#382D29]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#594438] leading-relaxed">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PanelShell>
  );
};
