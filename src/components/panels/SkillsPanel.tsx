import React from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { PanelShell } from './PanelShell';

interface SkillsPanelProps {
  onClose: () => void;
}

export const SkillsPanel: React.FC<SkillsPanelProps> = ({ onClose }) => {
  return (
    <PanelShell
      title="Bookshelf — Technical Skills"
      subtitle="Languages, analytics tools, frameworks, and platforms I work with"
      onClose={onClose}
    >
      <div className="space-y-6">
        <p className="text-sm text-[#594438] leading-relaxed">
          Organized by domain from the shelves in my workspace — spanning foundational programming, data analytics, intelligent application backends, and collaboration platforms.
        </p>

        {/* Bookshelf Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((category, idx) => (
            <section
              key={category.id}
              className="bg-[#FAF1E4] border-2 border-[#382D29] flex flex-col"
            >
              {/* Colored Shelf Spine Header */}
              <div
                className="px-4 py-2.5 border-b-2 border-[#382D29] flex items-center justify-between gap-2"
                style={{ backgroundColor: category.shelfAccent }}
              >
                <h3 className="font-pixel text-xs text-[#382D29] leading-snug">
                  {category.title}
                </h3>
                <span className="font-mono text-[11px] tabular-nums text-[#382D29]/80">
                  0{idx + 1}
                </span>
              </div>

              {/* Clean typographic list of skills (no percentage bars, no candy pills) */}
              <ul className="p-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm font-medium text-[#382D29]"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block w-2 h-2 shrink-0 border border-[#382D29]"
                      style={{ backgroundColor: category.shelfAccent }}
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </PanelShell>
  );
};
