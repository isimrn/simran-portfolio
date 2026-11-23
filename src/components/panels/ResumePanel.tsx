import React from 'react';
import { EDUCATION, INTERNSHIPS, PERSONAL_INFO, PanelId } from '../../data/portfolioData';
import { PanelShell } from './PanelShell';

interface ResumePanelProps {
  onClose: () => void;
  onNavigate: (panel: PanelId) => void;
}

export const ResumePanel: React.FC<ResumePanelProps> = ({ onClose, onNavigate }) => {
  return (
    <PanelShell
      title="Resume Folio"
      subtitle="Curriculum Vitae status and verified overview"
      onClose={onClose}
    >
      <div className="space-y-6">
        {/* Honest Placeholder Notice — No fake PDF or broken download */}
        <div className="bg-[#D7AF67]/30 border-2 border-[#382D29] p-4 sm:p-5">
          <div className="font-pixel text-xs text-[#382D29] mb-1.5">
            Resume PDF Pending Upload
          </div>
          <p className="text-sm text-[#382D29] leading-relaxed">
            The downloadable PDF file will be linked directly here once uploaded. In the meantime, all verified academic credentials, internships, technical skills, and featured projects are available to browse below or request via email.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent('Resume Request — Simran')}`}
              className="px-4 py-2 text-xs font-pixel bg-[#D7AF67] text-[#382D29] pixel-btn cursor-pointer whitespace-nowrap"
            >
              Request Resume via Email
            </a>
            <button
              type="button"
              onClick={() => onNavigate('experience')}
              className="px-4 py-2 text-xs font-medium bg-[#FAF1E4] text-[#382D29] pixel-btn cursor-pointer whitespace-nowrap"
            >
              Full Experience Timeline
            </button>
          </div>
        </div>

        {/* Clean Snapshot */}
        <div className="bg-[#FAF1E4] border-2 border-[#382D29] p-5 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-[#D6BFA5]">
            <div>
              <h3 className="text-base font-bold text-[#382D29]">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-[#594438]">{PERSONAL_INFO.heroSubtitle}</p>
            </div>
            <span className="text-xs font-mono text-[#594438]">
              {PERSONAL_INFO.email}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-pixel text-[11px] text-[#A87955] mb-2">
                Education
              </div>
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="mb-2.5 last:mb-0">
                  <div className="font-semibold text-[#382D29] text-xs">{edu.degree}</div>
                  <div className="text-xs text-[#594438]">{edu.institution}</div>
                  <div className="text-xs font-mono tabular-nums text-[#594438]">
                    {edu.period} · {edu.gradeLabel}: {edu.gradeValue}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="font-pixel text-[11px] text-[#A87955] mb-2">
                Internships
              </div>
              {INTERNSHIPS.map((intern) => (
                <div key={intern.id} className="mb-2.5 last:mb-0">
                  <div className="font-semibold text-[#382D29] text-xs">
                    {intern.organization} — {intern.role}
                  </div>
                  <div className="text-xs font-mono tabular-nums text-[#594438]">
                    {intern.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PanelShell>
  );
};
