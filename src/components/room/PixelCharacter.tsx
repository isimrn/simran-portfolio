import React from 'react';
import { PixelGrid } from '../pixel/PixelSprite';

interface PixelCharacterProps {
  x: number;
  y: number;
  isHovered: boolean;
  isActive: boolean;
  isWaving: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const CHARACTER_PALETTE: Record<string, string> = {
  o: '#382D29', // dark outline & hair shadow
  h: '#4B352D', // warm dark brown hair
  H: '#65493E', // hair highlight
  s: '#E7B996', // warm skin tone
  S: '#D49E7A', // skin shadow
  c: '#C58B69', // terracotta cardigan
  C: '#A56D4E', // cardigan shadow
  t: '#F2E5D3', // warm cream inner tee
  b: '#594438', // espresso pants / skirt
  B: '#3F3027', // pants shadow
  g: '#87947B', // sage green shoes / cuff detail
  a: '#D7AF67', // golden hairclip / accent
  w: '#FFF8EE', // eye highlight
  r: '#D98E73', // warm cheek blush
};

// 18x28 original pixel-art character sprite for Simran
const IDLE_GRID = [
  '.....oooooo.......',
  '....ohHHHHho......',
  '...ohHHHHHHho.....',
  '..ohHHooooHHho....',
  '..ohHoSSSSoHho....',
  '..ohHossssoHho....',
  '..ohHosowswoho....',
  '..ohHorsrsroho....',
  '...oHoSSSSooHo....',
  '...ohoosssooho....',
  '....ooocccooo.....',
  '...oocctttccoo....',
  '..ooccctttcccoo...',
  '..occCctttccCco...',
  '..ocCCctttccCCo...',
  '..ossCcctcccCCo...',
  '..oSSoCCCCCoSSo...',
  '...ooobbbbbooo....',
  '....obbbbbbbo.....',
  '....obbboBBbo.....',
  '....obbboBBbo.....',
  '....obbboBBbo.....',
  '....obbboBBbo.....',
  '....obbooBBoo.....',
  '....oggoooggo.....',
  '...oggtoooggto....',
  '...ooooo.ooooo....',
];

const WAVE_GRID = [
  '.....oooooo.......',
  '....ohHHHHho...oo.',
  '...ohHHHHHHho.osso',
  '..ohHHooooHHhoosSo',
  '..ohHoSSSSoHhoocco',
  '..ohHossssoHhocCco',
  '..ohHosowswohocCo.',
  '..ohHorsrsrohoCo..',
  '...oHoSSSSooHoCo..',
  '...ohoosssoohoCo..',
  '....ooocccoooo....',
  '...oocctttccoo....',
  '..ooccctttcco.....',
  '..occCctttcco.....',
  '..ocCCctttcco.....',
  '..ossCcctccco.....',
  '..oSSoCCCCCo......',
  '...ooobbbbbo......',
  '....obbbbbbbo.....',
  '....obbboBBbo.....',
  '....obbboBBbo.....',
  '....obbboBBbo.....',
  '....obbboBBbo.....',
  '....obbooBBoo.....',
  '....oggoooggo.....',
  '...oggtoooggto....',
  '...ooooo.ooooo....',
];

export const PixelCharacter: React.FC<PixelCharacterProps> = ({
  x,
  y,
  isHovered,
  isActive,
  isWaving,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<SVGGElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <g
      transform={`translate(${x}, ${y})`}
      role="button"
      tabIndex={0}
      aria-label="Simran — Click to say hello and explore tips"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="cursor-pointer focus:outline-none group"
    >
      {/* Isometric shadow beneath feet */}
      <g shapeRendering="crispEdges" opacity={0.35}>
        <rect x={3} y={26} width={11} height={2} fill="#382D29" />
        <rect x={1} y={27} width={15} height={1} fill="#382D29" />
      </g>

      {/* Subtle golden selection ring when hovered/active */}
      {(isHovered || isActive) && (
        <g shapeRendering="crispEdges" opacity={0.85}>
          <rect x={1} y={25} width={15} height={1} fill="#D7AF67" />
          <rect x={0} y={26} width={2} height={2} fill="#D7AF67" />
          <rect x={15} y={26} width={2} height={2} fill="#D7AF67" />
          <rect x={1} y={28} width={15} height={1} fill="#D7AF67" />
        </g>
      )}

      <g
        className="animate-breathe"
        style={{
          transform: isHovered ? 'translateY(-1px)' : undefined,
          transition: 'transform 140ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <PixelGrid grid={isWaving ? WAVE_GRID : IDLE_GRID} palette={CHARACTER_PALETTE} />
        {/* Golden hairpin pixel detail */}
        <rect x={12} y={4} width={2} height={1} fill="#D7AF67" shapeRendering="crispEdges" />
      </g>
    </g>
  );
};
