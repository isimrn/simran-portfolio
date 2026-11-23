import React from 'react';
import { CERTIFICATIONS, EDUCATION, INTERNSHIPS } from '../../data/portfolioData';
import { PanelShell } from './PanelShell';

interface ExperiencePanelProps {
  onClose: () => void;
}

export const ExperiencePanel: React.FC<ExperiencePanelProps> = ({ onClose }) => {
  return (
    <PanelShell
      title="Desk Journal — Experience & Education"
      subtitle="Internships, academic timeline, and certifications"
      onClose={onClose}
    >
      <div className="space-y-8">
        {/* Internships Timeline */}
        <section>
          <h3 className="font-pixel text-xs text-[#A87955] mb-4">
            Internships
          </h3>
          <div className="space-y-4">
            {INTERNSHIPS.map((intern) => (
              <article
                key={intern.id}
                className="bg-[#FAF1E4] border-2 border-[#382D29] p-4 sm:p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-[#D6BFA5]">
                  <div>
                    <h4 className="text-base font-bold text-[#382D29]">
                      {intern.organization}
                    </h4>
                    <div className="text-xs font-medium text-[#594438]">
                      {intern.role}
                    </div>
                  </div>
                  <span className="font-mono text-xs tabular-nums text-[#594438]">
                    {intern.period}
                  </span>
                </div>

                <ul className="mt-3 space-y-2">
                  {intern.contributions.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-[#382D29] leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-block w-1.5 h-1.5 bg-[#C58B69] shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education Timeline */}
        <section>
          <h3 className="font-pixel text-xs text-[#A87955] mb-4">
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EDUCATION.map((edu) => (
              <article
                key={edu.id}
                className="bg-[#EAD9C2] border-2 border-[#382D29] p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs tabular-nums text-[#594438]">
                    {edu.period}
                  </div>
                  <h4 className="mt-1 text-sm font-bold text-[#382D29] leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="mt-1 text-xs text-[#594438]">{edu.institution}</p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#D6BFA5] flex items-center justify-between text-xs">
                  <span className="text-[#594438]">{edu.gradeLabel}</span>
                  <span className="font-mono font-semibold tabular-nums text-[#382D29]">
                    {edu.gradeValue}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h3 className="font-pixel text-xs text-[#A87955] mb-3">
            Certifications
          </h3>
          <div className="bg-[#FAF1E4] border-2 border-[#382D29] divide-y divide-[#D6BFA5]">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="px-4 py-3 flex flex-wrap items-center justify-between gap-2"
              >
                <span className="text-sm font-semibold text-[#382D29]">
                  {cert.title}
                </span>
                <span className="text-xs font-medium text-[#594438]">
                  {cert.issuer}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PanelShell>
  );
};
