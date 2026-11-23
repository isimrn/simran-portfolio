import React from 'react';
import { PanelShell } from './PanelShell';

interface FuturePanelProps {
  onClose: () => void;
}

const UPCOMING_SPACES = [
  'Photography Gallery — visual journal and favorite golden-hour frames',
  'Writing & Notes — reflections on AI systems, engineering, and poetry',
  'New Experiments — upcoming projects and interactive rooms',
];

export const FuturePanel: React.FC<FuturePanelProps> = ({ onClose }) => {
  return (
    <PanelShell
      title="Room Door — What's Next"
      subtitle="A quiet preview of upcoming additions"
      onClose={onClose}
    >
      <div className="bg-[#FAF1E4] border-2 border-[#382D29] p-6 space-y-4">
        <h3 className="font-pixel text-base sm:text-lg text-[#382D29]">
          More of my universe is still being built.
        </h3>
        <p className="text-sm text-[#594438] leading-relaxed">
          Beyond this door are rooms currently in progress as I continue learning, writing, photographing, and building new projects.
        </p>

        <ul className="pt-2 space-y-2 border-t border-[#D6BFA5]">
          {UPCOMING_SPACES.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-[#382D29]">
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block w-1.5 h-1.5 bg-[#87947B] shrink-0"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </PanelShell>
  );
};
