import React, { useState } from 'react';
import { PROJECTS, ProjectId } from '../../data/portfolioData';
import { PanelShell } from './PanelShell';
import { ProjectDetail } from './ProjectDetail';

interface ProjectsPanelProps {
  onClose: () => void;
}

export const ProjectsPanel: React.FC<ProjectsPanelProps> = ({ onClose }) => {
  const [selectedId, setSelectedId] = useState<ProjectId>('crimesync');

  const activeProject =
    PROJECTS.find((p) => p.id === selectedId) ?? PROJECTS[0];

  const isInvestigative = activeProject.themeVariant === 'investigative';

  return (
    <PanelShell
      title="Workstation — Featured Projects"
      subtitle="Select a project below to inspect architecture, stack, and highlights"
      onClose={onClose}
      variant={isInvestigative ? 'investigative' : 'warm'}
      maxWidthClass="max-w-4xl"
    >
      <div className="space-y-6">
        {/* Project Switcher Tabs */}
        <div
          role="tablist"
          aria-label="Featured Projects"
          className="grid grid-cols-1 sm:grid-cols-3 gap-2.5"
        >
          {PROJECTS.map((project, index) => {
            const isSelected = project.id === selectedId;
            return (
              <button
                key={project.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setSelectedId(project.id)}
                className={`text-left px-3.5 py-3 border-2 cursor-pointer transition-colors ${
                  isSelected
                    ? isInvestigative
                      ? 'bg-[#D7AF67] text-[#382D29] border-[#F2E5D3]'
                      : 'bg-[#D7AF67] text-[#382D29] border-[#382D29]'
                    : isInvestigative
                      ? 'bg-[#2A221F] text-[#F2E5D3] border-[#594438] hover:border-[#D7AF67]'
                      : 'bg-[#FAF1E4] text-[#382D29] border-[#382D29] hover:bg-[#EAD9C2]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] opacity-75">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] truncate opacity-80">
                    {project.themeVariant === 'investigative'
                      ? 'Graph & GIS'
                      : project.themeVariant === 'literary'
                        ? 'AI & Real-Time'
                        : 'Industrial ML'}
                  </span>
                </div>
                <div className="font-pixel text-xs mt-1 truncate">
                  {project.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Project Details */}
        <ProjectDetail project={activeProject} />
      </div>
    </PanelShell>
  );
};
