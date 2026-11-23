import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO, PanelId } from '../../data/portfolioData';

interface NavigationProps {
  activePanel: PanelId | null;
  onSelectPanel: (panel: PanelId | null) => void;
}

const NAV_LINKS: { label: string; panel: PanelId }[] = [
  { label: 'About', panel: 'about' },
  { label: 'Projects', panel: 'projects' },
  { label: 'Skills', panel: 'skills' },
  { label: 'Experience', panel: 'experience' },
  { label: 'Contact', panel: 'contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ activePanel, onSelectPanel }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (panel: PanelId | null) => {
    onSelectPanel(panel);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#382D29]/95 border-b-2 border-[#594438]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick(null)}
          className="font-pixel text-sm sm:text-base text-[#F2E5D3] hover:text-[#D7AF67] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
        >
          {PERSONAL_INFO.universeTitle}
        </button>

        {/* Zone 2: Clean single-line text nav links (Desktop & Tablet) */}
        <nav
          aria-label="Primary Portfolio Navigation"
          className="hidden md:flex items-center gap-6"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activePanel === item.panel;
            return (
              <button
                key={item.panel}
                type="button"
                onClick={() => handleNavClick(item.panel)}
                className={`text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 border-b-2 ${
                  isActive
                    ? 'text-[#D7AF67] border-[#D7AF67]'
                    : 'text-[#F2E5D3]/85 border-transparent hover:text-[#F2E5D3] hover:border-[#A87955]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action (Resume) + Mobile menu trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('resume')}
            className={`px-3.5 py-1.5 font-pixel text-xs whitespace-nowrap shrink-0 cursor-pointer pixel-btn ${
              activePanel === 'resume'
                ? 'bg-[#C58B69] text-[#F2E5D3]'
                : 'bg-[#D7AF67] text-[#382D29] hover:bg-[#E4BF7B]'
            }`}
          >
            Resume
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-[#F2E5D3] hover:text-[#D7AF67] cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#2B221F] border-t-2 border-[#594438] px-4 py-3 flex flex-wrap gap-2"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activePanel === item.panel;
            return (
              <button
                key={item.panel}
                type="button"
                onClick={() => handleNavClick(item.panel)}
                className={`px-3 py-2 text-xs font-medium pixel-btn cursor-pointer ${
                  isActive
                    ? 'bg-[#D7AF67] text-[#382D29]'
                    : 'bg-[#F2E5D3] text-[#382D29]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};
