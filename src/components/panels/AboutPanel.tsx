import React from 'react';
import { ABOUT_CONTENT, EDUCATION, PERSONAL_INFO, PanelId } from '../../data/portfolioData';
import { PanelShell } from './PanelShell';

interface AboutPanelProps {
  onClose: () => void;
  onNavigate: (panel: PanelId) => void;
}

export const AboutPanel: React.FC<AboutPanelProps> = ({ onClose, onNavigate }) => {
  const btech = EDUCATION[0];

  return (
    <PanelShell
      title="Open Notebook — About Me"
      subtitle={`${PERSONAL_INFO.name} · ${PERSONAL_INFO.heroSubtitle}`}
      onClose={onClose}
    >
      <div className="space-y-6">
        {/* Notebook Lined Page Section */}
        <div className="bg-[#FAF1E4] border-2 border-[#382D29] p-5 sm:p-6">
          <div className="font-pixel text-xs text-[#A87955] mb-3">
            Personal Note
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-[#382D29]">
            {ABOUT_CONTENT.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Desk Margin Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#EAD9C2] border-2 border-[#382D29] p-4">
            <div className="font-pixel text-[11px] text-[#594438] mb-1.5">
              Academic Focus
            </div>
            <div className="text-sm font-semibold text-[#382D29]">{btech.degree}</div>
            <div className="text-xs text-[#594438] mt-1">{btech.institution}</div>
            <div className="mt-2 text-xs font-mono tabular-nums text-[#382D29]">
              {btech.period} · {btech.gradeLabel}: {btech.gradeValue}
            </div>
          </div>

          <div className="bg-[#EAD9C2] border-2 border-[#382D29] p-4">
            <div className="font-pixel text-[11px] text-[#594438] mb-1.5">
              Core Interests
            </div>
            <p className="text-sm text-[#382D29] leading-relaxed">
              Data analytics, AI-powered applications, backend systems, and turning thoughtful ideas into practical software.
            </p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="pt-2 border-t border-[#D6BFA5] flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium text-[#594438]">Continue exploring:</span>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="px-3.5 py-2 text-xs font-medium bg-[#D7AF67] text-[#382D29] pixel-btn cursor-pointer whitespace-nowrap"
          >
            View Projects
          </button>
          <button
            type="button"
            onClick={() => onNavigate('experience')}
            className="px-3.5 py-2 text-xs font-medium bg-[#FAF1E4] text-[#382D29] pixel-btn cursor-pointer whitespace-nowrap"
          >
            Internships & Education
          </button>
          <button
            type="button"
            onClick={() => onNavigate('creative')}
            className="px-3.5 py-2 text-xs font-medium bg-[#FAF1E4] text-[#382D29] pixel-btn cursor-pointer whitespace-nowrap"
          >
            Beyond the Code
          </button>
        </div>
      </div>
    </PanelShell>
  );
};
