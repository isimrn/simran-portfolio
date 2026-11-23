import React from 'react';
import { PERSONAL_INFO, PanelId } from '../../data/portfolioData';

interface HeroIntroProps {
  onExploreRoom: () => void;
  onOpenPanel: (panel: PanelId) => void;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({ onExploreRoom, onOpenPanel }) => {
  return (
    <div
      role="region"
      aria-label="Welcome introduction"
      className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-[#221A17]/60"
    >
      <div className="w-full max-w-lg bg-[#F2E5D3] text-[#382D29] pixel-frame p-6 sm:p-8 animate-room-enter">
        <div className="font-pixel text-[11px] text-[#A87955] mb-3">
          Welcome to my workspace
        </div>

        <h1 className="font-pixel text-2xl sm:text-3xl text-[#382D29] leading-tight text-balance">
          {PERSONAL_INFO.heroHeading}
        </h1>

        <p className="mt-3 text-base sm:text-lg font-medium text-[#382D29] leading-relaxed">
          {PERSONAL_INFO.heroIntroLine}
        </p>

        <p className="mt-3 text-xs sm:text-sm font-medium text-[#594438]">
          {PERSONAL_INFO.heroSubtitle}
        </p>

        <div className="mt-5 pt-4 border-t border-[#D6BFA5]">
          <p className="text-sm text-[#594438] italic">
            {PERSONAL_INFO.heroInstruction}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onExploreRoom}
              className="px-5 py-2.5 bg-[#D7AF67] hover:bg-[#E2BE7C] text-[#382D29] font-pixel text-xs pixel-btn cursor-pointer whitespace-nowrap shrink-0"
            >
              Explore my room
            </button>
            <button
              type="button"
              onClick={() => {
                onExploreRoom();
                onOpenPanel('projects');
              }}
              className="px-4 py-2.5 bg-[#E7D6BF] hover:bg-[#DFCAAE] text-[#382D29] font-medium text-xs pixel-btn cursor-pointer whitespace-nowrap shrink-0"
            >
              Jump to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
