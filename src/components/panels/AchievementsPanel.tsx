import React from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS, PanelId } from '../../data/portfolioData';
import { PanelShell } from './PanelShell';

interface AchievementsPanelProps {
  onClose: () => void;
  onNavigate: (panel: PanelId) => void;
}

export const AchievementsPanel: React.FC<AchievementsPanelProps> = ({
  onClose,
  onNavigate,
}) => {
  return (
    <PanelShell
      title="Pinboard — Achievements & Certifications"
      subtitle="Verified highlights and completed credentials"
      onClose={onClose}
    >
      <div className="space-y-6">
        {/* Corkboard Highlight */}
        <section className="bg-[#D6BFA5] border-2 border-[#382D29] p-4 sm:p-5">
          <div className="font-pixel text-[11px] text-[#594438] mb-3">
            Pinned Highlight
          </div>

          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF1E4] border-2 border-[#382D29] p-4 sm:p-5 relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-[#382D29]">
                  {item.title}
                </h3>
                <span className="font-pixel text-[11px] text-[#C58B69]">
                  {item.project}
                </span>
              </div>
              <p className="text-sm text-[#382D29] leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 pt-3 border-t border-[#D6BFA5]">
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="px-3.5 py-2 text-xs font-medium bg-[#D7AF67] text-[#382D29] pixel-btn cursor-pointer whitespace-nowrap"
                >
                  Inspect CrimeSync Project
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Verified Certifications */}
        <section>
          <h3 className="font-pixel text-xs text-[#A87955] mb-3">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#FAF1E4] border-2 border-[#382D29] p-4 flex flex-col justify-between"
              >
                <div className="font-pixel text-[11px] text-[#87947B] mb-2">
                  {cert.issuer}
                </div>
                <div className="text-sm font-semibold text-[#382D29] leading-snug">
                  {cert.title}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PanelShell>
  );
};
