import React, { useMemo, useState } from 'react';
import {
  CHARACTER_DIALOGUES,
  PanelId,
  ROOM_OBJECTS,
  RoomObjectMeta,
} from '../../data/portfolioData';
import { IsoDiamond, IsoWall, PixelGrid } from '../pixel/PixelSprite';
import { PixelCharacter } from './PixelCharacter';
import {
  BOOKSHELF_GRID,
  CAMERA_GRID,
  COMPUTER_GRID,
  DOOR_GRID,
  JOURNAL_GRID,
  LETTER_GRID,
  NOTEBOOK_GRID,
  PINBOARD_GRID,
  PLANT_GRID,
  RESUME_GRID,
  ROOM_PALETTE,
} from './RoomSprites';

interface PixelRoomProps {
  activePanel: PanelId | null;
  onOpenPanel: (panel: PanelId) => void;
}

interface TooltipInfo {
  label: string;
  description: string;
  // Coordinates inside 320x210 viewBox expressed as percentages for responsive placement
  leftPct: number;
  topPct: number;
}

const TOOLTIP_COORDS: Record<string, { leftPct: number; topPct: number }> = {
  bookshelf: { leftPct: 24, topPct: 26 },
  board: { leftPct: 39, topPct: 14 },
  computer: { leftPct: 44, topPct: 32 },
  notebook: { leftPct: 31, topPct: 50 },
  resume: { leftPct: 50, topPct: 51 },
  journal: { leftPct: 24, topPct: 58 },
  camera: { leftPct: 68, topPct: 28 },
  letter: { leftPct: 67, topPct: 59 },
  door: { leftPct: 81, topPct: 34 },
  character: { leftPct: 52, topPct: 46 },
};

export const PixelRoom: React.FC<PixelRoomProps> = ({ activePanel, onOpenPanel }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [dialogueIndex, setDialogueIndex] = useState<number>(-1);
  const [isWaving, setIsWaving] = useState(false);

  const objectById = useMemo(() => {
    const map: Record<string, RoomObjectMeta> = {};
    for (const item of ROOM_OBJECTS) {
      map[item.id] = item;
    }
    return map;
  }, []);

  // Generate subtle isometric plank lines on the floor diamond
  const floorPlanks = useMemo(() => {
    const lines: { x1: number; y1: number; len: number }[] = [];
    // Diagonal lines parallel to top-left->bottom-right edge
    for (let i = 1; i <= 7; i++) {
      const startX = 160 - i * 14;
      const startY = 74 + i * 7;
      lines.push({ x1: startX, y1: startY, len: 52 });
    }
    return lines;
  }, []);

  // Isometric cut-away diorama slab edges below floor
  const slabStrips = useMemo(() => {
    const leftEdge: { x: number; y: number }[] = [];
    const rightEdge: { x: number; y: number }[] = [];
    // Left-front edge: (48,130) down-right to (160,186) -> 56 steps of 2px wide
    for (let i = 0; i < 56; i++) {
      leftEdge.push({ x: 48 + i * 2, y: 130 + i });
    }
    // Right-front edge: (160,186) up-right to (272,130) -> 56 steps of 2px wide
    for (let i = 0; i < 56; i++) {
      rightEdge.push({ x: 160 + i * 2, y: 185 - i });
    }
    return { leftEdge, rightEdge };
  }, []);

  // Golden-hour isometric window rays (pixel-stepped translucent strips)
  const windowColumns = useMemo(() => {
    const cols: { x: number; y: number; h: number }[] = [];
    // Window sits on right wall from x=182..216 (17 steps of 2px)
    for (let i = 0; i < 17; i++) {
      cols.push({
        x: 182 + i * 2,
        y: 30 + i,
        h: 34,
      });
    }
    return cols;
  }, []);

  const handleObjectActivate = (id: string) => {
    const obj = objectById[id];
    if (obj) {
      onOpenPanel(obj.panel);
    }
  };

  const handleCharacterClick = () => {
    setIsWaving(true);
    setDialogueIndex((prev) => (prev + 1) % CHARACTER_DIALOGUES.length);
    window.setTimeout(() => setIsWaving(false), 1800);
  };

  const makeInteractiveProps = (id: string) => {
    const obj = objectById[id];
    const isHovered = hoveredId === id;
    const isActive = activePanel === obj.panel;
    return {
      role: 'button' as const,
      tabIndex: 0,
      'aria-label': `${obj.label} — ${obj.tooltip}`,
      onClick: () => handleObjectActivate(id),
      onKeyDown: (e: React.KeyboardEvent<SVGGElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleObjectActivate(id);
        }
      },
      onMouseEnter: () => setHoveredId(id),
      onMouseLeave: () => setHoveredId((prev) => (prev === id ? null : prev)),
      onFocus: () => setHoveredId(id),
      onBlur: () => setHoveredId((prev) => (prev === id ? null : prev)),
      className: 'cursor-pointer focus:outline-none',
      style: {
        transform: isHovered ? 'translateY(-1.5px)' : 'translateY(0px)',
        transition: 'transform 140ms cubic-bezier(0.16, 1, 0.3, 1)',
        filter: isHovered || isActive ? 'drop-shadow(0 0 2px #D7AF67)' : undefined,
      },
    };
  };

  const activeTooltip: TooltipInfo | null = useMemo(() => {
    if (!hoveredId) return null;
    if (hoveredId === 'character') {
      return {
        label: 'Simran',
        description: 'Click to say hello',
        ...TOOLTIP_COORDS.character,
      };
    }
    const obj = objectById[hoveredId];
    const pos = TOOLTIP_COORDS[hoveredId];
    if (!obj || !pos) return null;
    return {
      label: obj.label,
      description: obj.tooltip,
      leftPct: pos.leftPct,
      topPct: pos.topPct,
    };
  }, [hoveredId, objectById]);

  return (
    <div className="relative w-full max-w-[1040px] mx-auto select-none">
      {/* Main Isometric Pixel-Art Canvas */}
      <div className="relative w-full">
        <svg
          viewBox="0 0 320 210"
          className="w-full h-auto block pixel-crisp"
          role="img"
          aria-label="Isometric pixel-art room of Simran's Little Universe"
        >
          <defs>
            <linearGradient id="sunsetSkyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#879EB2" />
              <stop offset="50%" stopColor="#C58B69" />
              <stop offset="100%" stopColor="#D7AF67" />
            </linearGradient>
          </defs>

          {/* Subtle ambient stars/fireflies around the floating diorama */}
          <g shapeRendering="crispEdges" opacity={0.45}>
            <rect x={28} y={36} width={2} height={2} fill="#D7AF67" className="animate-dust" />
            <rect x={290} y={48} width={2} height={2} fill="#F2E5D3" className="animate-dust" />
            <rect x={36} y={168} width={2} height={2} fill="#C58B69" />
            <rect x={284} y={170} width={2} height={2} fill="#D7AF67" />
          </g>

          {/* === ROOM ARCHITECTURE === */}
          {/* Left Wall */}
          <IsoWall
            startX={48}
            startY={66}
            spanX={112}
            height={64}
            slope="up-right"
            fill="#EDE0CE"
            trimTop="#D6BFA5"
            trimBottom="#A87955"
          />
          {/* Right Wall */}
          <IsoWall
            startX={160}
            startY={10}
            spanX={112}
            height={64}
            slope="down-right"
            fill="#E3D2BC"
            trimTop="#C9B093"
            trimBottom="#926646"
          />

          {/* Corner vertical wall seam & outer room frame outline */}
          <g shapeRendering="crispEdges">
            <rect x={159} y={10} width={2} height={64} fill="#C9B093" />
            <rect x={46} y={66} width={2} height={64} fill="#382D29" />
            <rect x={272} y={66} width={2} height={64} fill="#382D29" />
          </g>

          {/* Subtle wall string lights / warm sconce dots along top corner */}
          <g shapeRendering="crispEdges">
            <rect x={166} y={17} width={2} height={2} fill="#D7AF67" />
            <rect x={174} y={21} width={2} height={2} fill="#FFF2CC" />
            <rect x={224} y={46} width={2} height={2} fill="#D7AF67" />
            <rect x={232} y={50} width={2} height={2} fill="#FFF2CC" />
          </g>

          {/* Floor Diamond Base */}
          <IsoDiamond cx={160} cy={74} halfW={112} fill="#B8875E" />

          {/* Isometric Floor Wood Plank Lines */}
          <g shapeRendering="crispEdges" opacity={0.35}>
            {floorPlanks.map((p, idx) =>
              Array.from({ length: p.len }).map((_, step) => (
                <rect
                  key={`${idx}-${step}`}
                  x={p.x1 + step * 2}
                  y={p.y1 + step}
                  width={2}
                  height={1}
                  fill="#594438"
                />
              )),
            )}
          </g>

          {/* Isometric Diorama Slab Thickness */}
          <g shapeRendering="crispEdges">
            {slabStrips.leftEdge.map((p, idx) => (
              <React.Fragment key={`l-${idx}`}>
                <rect x={p.x} y={p.y} width={2} height={1} fill="#382D29" />
                <rect x={p.x} y={p.y + 1} width={2} height={8} fill="#7B5439" />
                <rect x={p.x} y={p.y + 9} width={2} height={2} fill="#382D29" />
              </React.Fragment>
            ))}
            {slabStrips.rightEdge.map((p, idx) => (
              <React.Fragment key={`r-${idx}`}>
                <rect x={p.x} y={p.y} width={2} height={1} fill="#382D29" />
                <rect x={p.x} y={p.y + 1} width={2} height={8} fill="#594438" />
                <rect x={p.x} y={p.y + 9} width={2} height={2} fill="#382D29" />
              </React.Fragment>
            ))}
          </g>

          {/* Woven Isometric Rug */}
          <IsoDiamond cx={162} cy={104} halfW={46} fill="#87947B" />
          <IsoDiamond cx={162} cy={108} halfW={38} fill="#F2E5D3" />
          <IsoDiamond cx={162} cy={112} halfW={30} fill="#C58B69" />
          <IsoDiamond cx={162} cy={116} halfW={22} fill="#D7AF67" />
          <IsoDiamond cx={162} cy={119} halfW={16} fill="#87947B" />

          {/* === GOLDEN-HOUR WINDOW (on Right Wall) === */}
          <g shapeRendering="crispEdges">
            {/* Outer wooden frame */}
            {windowColumns.map((col, idx) => (
              <React.Fragment key={`wf-${idx}`}>
                <rect x={col.x} y={col.y - 2} width={2} height={col.h + 5} fill="#382D29" />
                <rect x={col.x} y={col.y - 1} width={2} height={col.h + 2} fill="#A87955" />
                <rect x={col.x} y={col.y + 1} width={2} height={col.h - 2} fill="url(#sunsetSkyGrad)" />
              </React.Fragment>
            ))}
            {/* Sunset pixel clouds & distant tree silhouette inside window */}
            <rect x={188} y={42} width={8} height={2} fill="#F2E5D3" opacity={0.85} />
            <rect x={198} y={46} width={10} height={2} fill="#FFF2CC" opacity={0.8} />
            <rect x={184} y={56} width={6} height={4} fill="#594438" opacity={0.55} />
            <rect x={204} y={62} width={8} height={5} fill="#594438" opacity={0.55} />
            {/* Window mullions */}
            <rect x={198} y={38} width={2} height={32} fill="#594438" />
            {windowColumns.map((col, idx) => (
              <rect key={`wm-${idx}`} x={col.x} y={col.y + 15} width={2} height={2} fill="#594438" />
            ))}
            {/* Sunlit window sill ledge */}
            {windowColumns.map((col, idx) => (
              <rect key={`ws-${idx}`} x={col.x - 2} y={col.y + col.h} width={2} height={3} fill="#D6BFA5" />
            ))}
          </g>

          {/* === INTERACTIVE ROOM OBJECTS === */}

          {/* 1. WALL PINBOARD / ACHIEVEMENTS (Left Wall) */}
          <g {...makeInteractiveProps('board')}>
            <PixelGrid grid={PINBOARD_GRID} palette={ROOM_PALETTE} x={108} y={24} />
            {/* Red/amber connection thread pixels on board */}
            <g shapeRendering="crispEdges">
              <rect x={116} y={31} width={4} height={1} fill="#C58B69" />
              <rect x={120} y={32} width={3} height={1} fill="#C58B69" />
              <rect x={123} y={31} width={4} height={1} fill="#D7AF67" />
            </g>
          </g>

          {/* 2. BOOKSHELF / SKILLS (Left Wall) */}
          <g {...makeInteractiveProps('bookshelf')}>
            {/* Floor shadow */}
            <rect x={63} y={96} width={18} height={3} fill="#382D29" opacity={0.25} shapeRendering="crispEdges" />
            <PixelGrid grid={BOOKSHELF_GRID} palette={ROOM_PALETTE} x={60} y={66} />
          </g>

          {/* 3. WOODEN DOOR / FUTURE (Far Right Wall) */}
          <g {...makeInteractiveProps('door')}>
            <PixelGrid grid={DOOR_GRID} palette={ROOM_PALETTE} x={232} y={68} />
          </g>

          {/* 4. VINTAGE CAMERA / CREATIVE SIDE (Window Sill) */}
          <g {...makeInteractiveProps('camera')}>
            <PixelGrid grid={CAMERA_GRID} palette={ROOM_PALETTE} x={192} y={67} />
          </g>

          {/* 5. POTTED SUNLIT PLANT (Corner near window, links to Creative or cozy greenery) */}
          <g shapeRendering="crispEdges">
            <rect x={218} y={114} width={12} height={3} fill="#382D29" opacity={0.25} />
            <PixelGrid grid={PLANT_GRID} palette={ROOM_PALETTE} x={215} y={97} />
          </g>

          {/* 6. WORKSTATION DESK STRUCTURE (Non-clickable base desk supporting Computer, Notebook, Resume) */}
          <g shapeRendering="crispEdges">
            {/* Desk shadow on floor */}
            <IsoDiamond cx={126} cy={90} halfW={36} fill="#382D29" opacity={0.22} />
            {/* Desk legs */}
            <rect x={95} y={98} width={3} height={14} fill="#594438" />
            <rect x={124} y={112} width={4} height={15} fill="#594438" />
            <rect x={156} y={98} width={3} height={14} fill="#382D29" />
            {/* Desk wooden top (isometric slab) */}
            <IsoDiamond cx={126} cy={78} halfW={36} fill="#A87955" />
            <IsoDiamond cx={126} cy={79} halfW={34} fill="#C58B69" />
            {/* Front beveled wood trim */}
            {Array.from({ length: 18 }).map((_, i) => (
              <React.Fragment key={`dt-${i}`}>
                <rect x={90 + i * 2} y={96 + i} width={2} height={3} fill="#875D3E" />
                <rect x={126 + i * 2} y={113 - i} width={2} height={3} fill="#594438" />
              </React.Fragment>
            ))}
          </g>

          {/* 7. RETRO COMPUTER, LAMP & COFFEE MUG / PROJECTS */}
          <g {...makeInteractiveProps('computer')}>
            <PixelGrid grid={COMPUTER_GRID} palette={ROOM_PALETTE} x={106} y={66} />
            {/* Warm lamp light pool on desk */}
            <rect x={135} y={84} width={12} height={4} fill="#FFF2CC" opacity={0.28} shapeRendering="crispEdges" />
            {/* Animated blinking cursor inside CRT monitor */}
            <rect
              x={121}
              y={74}
              width={2}
              height={2}
              fill="#FFF2CC"
              className="animate-cursor"
              shapeRendering="crispEdges"
            />
            {/* Animated rising coffee steam */}
            <g className="animate-steam" shapeRendering="crispEdges">
              <rect x={112} y={77} width={1} height={2} fill="#F2E5D3" />
              <rect x={114} y={76} width={1} height={2} fill="#F2E5D3" />
            </g>
          </g>

          {/* 8. OPEN NOTEBOOK / ABOUT ME (Desk Left) */}
          <g {...makeInteractiveProps('notebook')}>
            <PixelGrid grid={NOTEBOOK_GRID} palette={ROOM_PALETTE} x={95} y={91} />
          </g>

          {/* 9. RESUME FOLIO / RESUME (Desk Right) */}
          <g {...makeInteractiveProps('resume')}>
            <PixelGrid grid={RESUME_GRID} palette={ROOM_PALETTE} x={139} y={93} />
          </g>

          {/* 10. SIDE CABINET + CALENDAR JOURNAL / EXPERIENCE & EDUCATION (Front-Left) */}
          <g shapeRendering="crispEdges">
            <IsoDiamond cx={74} cy={112} halfW={16} fill="#382D29" opacity={0.25} />
            <rect x={60} y={116} width={28} height={14} fill="#875D3E" />
            <rect x={60} y={116} width={28} height={2} fill="#382D29" />
            <rect x={62} y={120} width={24} height={8} fill="#594438" />
            <rect x={72} y={123} width={4} height={2} fill="#D7AF67" />
            <IsoDiamond cx={74} cy={104} halfW={16} fill="#A87955" />
          </g>
          <g {...makeInteractiveProps('journal')}>
            <PixelGrid grid={JOURNAL_GRID} palette={ROOM_PALETTE} x={66} y={99} />
          </g>

          {/* 11. SIDE TABLE + WAX-SEALED LETTER / CONTACT (Front-Right) */}
          <g shapeRendering="crispEdges">
            <IsoDiamond cx={210} cy={126} halfW={16} fill="#382D29" opacity={0.25} />
            <rect x={198} y={128} width={3} height={11} fill="#594438" />
            <rect x={219} y={128} width={3} height={11} fill="#382D29" />
            <rect x={208} y={133} width={4} height={11} fill="#594438" />
            <IsoDiamond cx={210} cy={116} halfW={16} fill="#C58B69" />
            <IsoDiamond cx={210} cy={117} halfW={14} fill="#D6BFA5" />
          </g>
          <g {...makeInteractiveProps('letter')}>
            <PixelGrid grid={LETTER_GRID} palette={ROOM_PALETTE} x={202} y={115} />
          </g>

          {/* === SIMRAN PIXEL CHARACTER === */}
          <PixelCharacter
            x={153}
            y={102}
            isHovered={hoveredId === 'character'}
            isActive={false}
            isWaving={isWaving}
            onClick={handleCharacterClick}
            onMouseEnter={() => setHoveredId('character')}
            onMouseLeave={() => setHoveredId((prev) => (prev === 'character' ? null : prev))}
          />

          {/* === GOLDEN HOUR SUNLIGHT SHAFTS & DUST MOTES (Overlay lighting layer) === */}
          <g className="pointer-events-none animate-sun" shapeRendering="crispEdges">
            <polygon points="182,32 216,49 160,136 124,116" fill="#D7AF67" opacity={0.22} />
            <polygon points="188,36 210,47 166,122 142,109" fill="#FFF2CC" opacity={0.18} />
          </g>
          <g className="pointer-events-none animate-dust" shapeRendering="crispEdges">
            <rect x={182} y={78} width={1} height={1} fill="#FFF2CC" />
            <rect x={168} y={92} width={1} height={1} fill="#FFF2CC" />
            <rect x={175} y={104} width={1} height={1} fill="#D7AF67" />
            <rect x={156} y={86} width={1} height={1} fill="#FFF2CC" />
          </g>
        </svg>

        {/* Floating Pixel Tooltip on Hover / Focus */}
        {activeTooltip && (
          <div
            role="tooltip"
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full px-3 py-1.5 bg-[#382D29] text-[#F2E5D3] border-2 border-[#D7AF67] shadow-[2px_2px_0px_#1A1412] transition-opacity duration-150 hidden sm:block"
            style={{
              left: `${activeTooltip.leftPct}%`,
              top: `${activeTooltip.topPct}%`,
            }}
          >
            <div className="font-pixel text-[11px] leading-tight text-[#D7AF67] whitespace-nowrap">
              {activeTooltip.label}
            </div>
            <div className="text-[11px] leading-snug text-[#F2E5D3] whitespace-nowrap">
              {activeTooltip.description}
            </div>
          </div>
        )}

        {/* Character Speech Bubble when Simran is clicked */}
        {dialogueIndex >= 0 && (
          <div
            className="absolute z-30 left-1/2 -translate-x-1/2 bottom-3 sm:bottom-auto sm:top-[28%] sm:left-[56%] sm:translate-x-0 w-[calc(100%-2rem)] sm:w-64 bg-[#F2E5D3] text-[#382D29] pixel-frame p-3"
            role="status"
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <span className="font-pixel text-[11px] text-[#A87955]">Simran</span>
              <button
                type="button"
                onClick={() => setDialogueIndex(-1)}
                aria-label="Close message"
                className="font-pixel text-xs text-[#594438] hover:text-[#382D29] px-1 cursor-pointer"
              >
                ×
              </button>
            </div>
            <p className="text-xs leading-relaxed text-[#382D29]">
              {CHARACTER_DIALOGUES[dialogueIndex]}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setDialogueIndex(-1);
                  onOpenPanel('about');
                }}
                className="text-[11px] font-medium underline underline-offset-2 text-[#594438] hover:text-[#382D29] cursor-pointer"
              >
                About me
              </button>
              <span aria-hidden="true" className="text-[#A87955] text-xs">
                ·
              </span>
              <button
                type="button"
                onClick={() => {
                  setDialogueIndex(-1);
                  onOpenPanel('projects');
                }}
                className="text-[11px] font-medium underline underline-offset-2 text-[#594438] hover:text-[#382D29] cursor-pointer"
              >
                View projects
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Object Discovery Strip (great on touch/mobile & quick keyboard discovery) */}
      <div className="mt-4 lg:mt-2">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="font-pixel text-[11px] text-[#D6BFA5] tracking-wide">
            Room Objects — Select to Inspect
          </span>
          <span className="hidden sm:inline text-xs text-[#D6BFA5]/80">
            Click items in the room or choose below
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {ROOM_OBJECTS.map((item) => {
            const isActive = activePanel === item.panel;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onOpenPanel(item.panel)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`text-left px-3 py-2.5 min-h-[44px] pixel-btn cursor-pointer transition-colors ${
                  isActive
                    ? 'bg-[#D7AF67] text-[#382D29]'
                    : 'bg-[#F2E5D3] text-[#382D29] hover:bg-[#FFF5E6]'
                }`}
              >
                <div className="font-pixel text-[11px] leading-tight truncate">
                  {item.mobileCategory}
                </div>
                <div className="text-[11px] text-[#594438] truncate mt-0.5">{item.label}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
