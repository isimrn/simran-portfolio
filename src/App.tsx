import { useEffect, useState } from 'react';
import { PERSONAL_INFO, PanelId } from './data/portfolioData';
import { PixelRoom } from './components/room/PixelRoom';
import { HeroIntro } from './components/ui/HeroIntro';
import { Navigation } from './components/ui/Navigation';
import { AboutPanel } from './components/panels/AboutPanel';
import { ProjectsPanel } from './components/panels/ProjectsPanel';
import { SkillsPanel } from './components/panels/SkillsPanel';
import { ExperiencePanel } from './components/panels/ExperiencePanel';
import { AchievementsPanel } from './components/panels/AchievementsPanel';
import { CreativePanel } from './components/panels/CreativePanel';
import { ContactPanel } from './components/panels/ContactPanel';
import { ResumePanel } from './components/panels/ResumePanel';
import { FuturePanel } from './components/panels/FuturePanel';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [activePanel, setActivePanel] = useState<PanelId | null>(null);

  useEffect(() => {
    const handleEscIntro = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showIntro && !activePanel) {
        setShowIntro(false);
      }
    };
    window.addEventListener('keydown', handleEscIntro);
    return () => window.removeEventListener('keydown', handleEscIntro);
  }, [showIntro, activePanel]);

  const handleOpenPanel = (panel: PanelId | null) => {
    setShowIntro(false);
    setActivePanel(panel);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#2B221F] text-[#F2E5D3]">
      {/* Top Retro Navigation Bar */}
      <Navigation activePanel={activePanel} onSelectPanel={handleOpenPanel} />

      {/* Main Isometric Pixel-Art Room Viewport */}
      <main className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-5 sm:py-8">
        <div className="w-full max-w-[1120px] mx-auto">
          {/* Quiet Intro Strip Above Room */}
          <div className="flex flex-wrap items-end justify-between gap-3 mb-3 px-1">
            <div>
              <h1 className="font-pixel text-base sm:text-xl text-[#F2E5D3]">
                {PERSONAL_INFO.heroHeading}{' '}
                <span className="text-[#D7AF67] font-pixel text-sm sm:text-base font-medium">
                  {PERSONAL_INFO.heroSupporting}
                </span>
              </h1>
              <p className="text-xs text-[#D6BFA5] mt-0.5">
                {PERSONAL_INFO.heroSubtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowIntro(true)}
              className="text-xs text-[#D6BFA5] hover:text-[#D7AF67] underline underline-offset-4 cursor-pointer whitespace-nowrap"
            >
              Show Welcome Note
            </button>
          </div>

          {/* Interactive Pixel Room */}
          <div className="animate-room-enter">
            <PixelRoom activePanel={activePanel} onOpenPanel={handleOpenPanel} />
          </div>
        </div>
      </main>

      {/* Quiet Minimal Footer */}
      <footer className="border-t border-[#3E322D] bg-[#241C19] px-4 sm:px-6 py-4">
        <div className="max-w-[1120px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-[#D6BFA5]">
          <span>
            {PERSONAL_INFO.name} · {PERSONAL_INFO.universeTitle}
          </span>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#D7AF67] transition-colors"
            >
              Email
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D7AF67] transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D7AF67] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Arrival Welcome Card */}
      {showIntro && !activePanel && (
        <HeroIntro
          onExploreRoom={() => setShowIntro(false)}
          onOpenPanel={(panel) => handleOpenPanel(panel)}
        />
      )}

      {/* Interactive Room Panels */}
      {activePanel === 'about' && (
        <AboutPanel
          onClose={() => setActivePanel(null)}
          onNavigate={(panel) => setActivePanel(panel)}
        />
      )}
      {activePanel === 'projects' && (
        <ProjectsPanel onClose={() => setActivePanel(null)} />
      )}
      {activePanel === 'skills' && (
        <SkillsPanel onClose={() => setActivePanel(null)} />
      )}
      {activePanel === 'experience' && (
        <ExperiencePanel onClose={() => setActivePanel(null)} />
      )}
      {activePanel === 'achievements' && (
        <AchievementsPanel
          onClose={() => setActivePanel(null)}
          onNavigate={(panel) => setActivePanel(panel)}
        />
      )}
      {activePanel === 'creative' && (
        <CreativePanel onClose={() => setActivePanel(null)} />
      )}
      {activePanel === 'contact' && (
        <ContactPanel onClose={() => setActivePanel(null)} />
      )}
      {activePanel === 'resume' && (
        <ResumePanel
          onClose={() => setActivePanel(null)}
          onNavigate={(panel) => setActivePanel(panel)}
        />
      )}
      {activePanel === 'future' && (
        <FuturePanel onClose={() => setActivePanel(null)} />
      )}
    </div>
  );
}
