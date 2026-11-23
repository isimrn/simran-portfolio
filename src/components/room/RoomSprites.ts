// Pixel-art sprite matrices and palettes for Simran's Little Universe.
// Every character maps to a hex color in its palette; '.' is transparent.

export const ROOM_PALETTE: Record<string, string> = {
  o: '#382D29', // dark outline
  c: '#F2E5D3', // warm cream
  b: '#D6BFA5', // soft beige
  B: '#BEA387', // shaded beige
  w: '#A87955', // wooden brown
  W: '#875D3E', // darker wood
  e: '#594438', // deep espresso
  s: '#87947B', // muted sage green
  S: '#6A7760', // shaded sage
  t: '#C58B69', // terracotta
  T: '#A46D4E', // shaded terracotta
  a: '#D7AF67', // golden amber
  A: '#B88F49', // shaded amber
  d: '#879EB2', // dusty blue
  D: '#667E92', // shaded dusty blue
  g: '#FFF2CC', // warm lamp/sun highlight
  k: '#261E1B', // CRT screen dark
  m: '#99B898', // soft CRT green accent
};

// Wooden Bookshelf (28x38) — isometric left-facing cabinet packed with books & top plant
export const BOOKSHELF_GRID = [
  '.........oooo...............',
  '........osSSso..............',
  '.......osgSSgso.............',
  '........oSSSSo..............',
  '........otttto..............',
  '........oTTTTo..............',
  '....oooooooooooo............',
  '...owwwwwwwwwwwwo...........',
  '..owwWWWWWWWWWWwwo..........',
  '..owwoooooooooowwo..........',
  '..owwoddttaaSSowwo..........',
  '..owwoDdTTaaSsowwo..........',
  '..owwoDdttAassowwo..........',
  '..owwoooooooooowwo..........',
  '..owwWWWWWWWWWWwwo..........',
  '..owwoooooooooowwo..........',
  '..owwoccttddbbowwo..........',
  '..owwoCcTTdDBBowwo..........',
  '..owwoccttddbbowwo..........',
  '..owwoooooooooowwo..........',
  '..owwWWWWWWWWWWwwo..........',
  '..owwoooooooooowwo..........',
  '..owwoaassccttowwo..........',
  '..owwoAASsCcTTowwo..........',
  '..owwoaaSSccttowwo..........',
  '..owwoooooooooowwo..........',
  '..owwWWWWWWWWWWwwo..........',
  '..owwWeeeeeeeeWwwo..........',
  '..owwoooooooooowwo..........',
  '..owwW........Wwwo..........',
  '..oooo........oooo..........',
];

// Wall Pinboard / Achievement Board (30x22)
export const PINBOARD_GRID = [
  'oooooooooooooooooooooooooooooo',
  'owwwwwwwwwwwwwwwwwwwwwwwwwwwwo',
  'owbbbbbbbbbbbbbbbbbbbbbbbbbbwo',
  'owbttbbbbbbbbbaabbbbbbbbddbbwo',
  'owbccccccbbbbaaaabbbbbbccccbwo',
  'owbccccccbbbbaaaabbbbbbccccbwo',
  'owbcBBcccbbbbbaabbbbbbbcBBcbwo',
  'owbccccccbbbbbaaabbbbbbccccbwo',
  'owbccccccbbbbbbbbbbbbbbccccbwo',
  'owbbbbbbbttbbbbbbddbbbbbbbbbwo',
  'owbbccccbbbbbbbbbbbbbccccbbbwo',
  'owbbccccbbbaaaaaabbbbccccbbbwo',
  'owbbcBBcbbbccccccbbbbcBBcbbbwo',
  'owbbccccbbbccccccbbbbccccbbbwo',
  'owbbccccbbbcBBBBcbbbbccccbbbwo',
  'owbbbbbbbbbbbbbbbbbbbbbbbbbbwo',
  'owwwwwwwwwwwwwwwwwwwwwwwwwwwwo',
  'oooooooooooooooooooooooooooooo',
];

// Retro Computer Workstation Desk Top (46x34) — monitor, lamp, coffee mug, keyboard
export const COMPUTER_GRID = [
  '.............oooooooooooo.....................',
  '............obbbbbbbbbbbbo....................',
  '...........obccccccccccccbo...................',
  '...........obckkkkkkkkkkcbo......oooo.........',
  '...........obckgaaaammmkcbo.....oaaaaao.......',
  '...........obckkmmmmkkakcbo....oaaggggao......',
  '...........obckaaaaamkkkcbo....oaaaaaaaao.....',
  '...........obckmkkgaakkkcbo.....oooeeooo......',
  '...........obckkkkkkkkkkcbo.......oeo.........',
  '...........obccccccccccccbo.......oeo.........',
  '...........obbbbbbbbbbbbBbo.......oeo.........',
  '............ooooobbbbboooo.......oeeeo........',
  '................obBBBbo..........ooooo........',
  '....oooooo......ooooooo.......................',
  '...occcccco...................................',
  '...ocTTTTco.....ooooooooooooo....ooooo........',
  '...occcccco....obbbbbbbbbbbbbo..obbbbbo.......',
  '...ooccccoo....obcBcBcBcBcBcbo..obccBbo.......',
  '....oooooo.....obbbbbbbbbbbbbo...ooooo........',
  '................ooooooooooooo.................',
];

// Open Notebook (14x10)
export const NOTEBOOK_GRID = [
  '..oooooooooo..',
  '.obccccccccbo.',
  '.obcBBccBBcbo.',
  '.obccccccccbo.',
  '.obcBBccBBcbo.',
  '.obccccccccbo.',
  '.obbbbbbbbbbo.',
  '..oooooooooo..',
];

// Resume Sheet Folio (12x12)
export const RESUME_GRID = [
  '..oooooooo..',
  '.occcccccco.',
  '.octtccccco.',
  '.occcBBBcco.',
  '.occcccccco.',
  '.ocBBBBBcco.',
  '.occcBBBcco.',
  '.ocaaccccco.',
  '.occcccccco.',
  '..oooooooo..',
];

// Vintage Rangefinder Camera (14x11)
export const CAMERA_GRID = [
  '....oooooo....',
  '.ooobbbbbbooo.',
  'oeccccccccceeo',
  'oeccooooooceeo',
  'oeccodDDdoceeo',
  'oeccodggdoceeo',
  'oeccodDDdoceeo',
  'oeccooooooceeo',
  'oeeeeeeeeeeeeo',
  '.oooooooooooo.',
];

// Open Wax-Sealed Letter & Envelope (16x12)
export const LETTER_GRID = [
  '....oooooooo....',
  '...occcccccco...',
  '..occcBBBBccco..',
  '..occcccccccco..',
  '.oobbbbbbbbbboo.',
  '.obccbbbbbbccbo.',
  '.obbbccttcbbbbo.',
  '.obbbctTTcbbbbo.',
  '.obbbbcBBcbbbbo.',
  '.obbbbbbbbbbBbo.',
  '..oooooooooooo..',
];

// Desk Calendar & Experience Journal (16x14)
export const JOURNAL_GRID = [
  '...oooooooooo...',
  '..oaaooooooaao..',
  '..occcccccccco..',
  '..occtttttccco..',
  '..occcccccccco..',
  '..occBccBccBco..',
  '..occcccccccco..',
  '..occBccBccBco..',
  '..oooooooooooo..',
  '.owwwwwwwwwwwwo.',
  '.owWaaaaaaaaWwo.',
  '.owWWWWWWWWWWwo.',
  '..oooooooooooo..',
];

// Potted Monstera / Ficus Plant (18x26)
export const PLANT_GRID = [
  '......oooo........',
  '.....osggso.......',
  '....osgSSgso..ooo.',
  '...osSSooSSsoosgso',
  '...osSo..oSSosSSso',
  '....oo.oo.ooosSSo.',
  '..oooosgso.oSSoo..',
  '.osggsgSSsoooo....',
  '.osSSSoSSSo.......',
  '..oooo.oSo........',
  '.......oSo........',
  '.....ooooooo......',
  '....otttttttto....',
  '....otTTTTTTto....',
  '.....otTTTTto.....',
  '.....otTTTTto.....',
  '......oooooo......',
];

// Cozy Wooden Door (24x44)
export const DOOR_GRID = [
  '..oooooooooooooooooooo..',
  '.owwwwwwwwwwwwwwwwwwwwo.',
  '.owWWWWWWWWWWWWWWWWWWwo.',
  '.owWooooooooooooooooWwo.',
  '.owWoeccccccccccccwoWwo.',
  '.owWoeccccccccccccwoWwo.',
  '.owWoeccccccccccccwoWwo.',
  '.owWoeccBBBBBBBBccwoWwo.',
  '.owWoeccccccccccccwoWwo.',
  '.owWoewwwwwwwwwwwwwoWwo.',
  '.owWooooooooooooooooWwo.',
  '.owWWWWWWWWWWWWWWWWWWwo.',
  '.owWWWWWWWWWWWWWWWWWWwo.',
  '.owWoooooooooooooaaWWwo.',
  '.owWoewwwwwwwwwwoaaWWwo.',
  '.owWoewwwwwwwwwwoooWWwo.',
  '.owWoewwwwwwwwwwo..WWwo.',
  '.owWoewwwwwwwwwwo..WWwo.',
  '.owWoewwwwwwwwwwo..WWwo.',
  '.owWoewwwwwwwwwwo..WWwo.',
  '.owWoewwwwwwwwwwo..WWwo.',
  '.owWooooooooooooooooWwo.',
  '.owWWWWWWWWWWWWWWWWWWwo.',
  '.owWWWWWWWWWWWWWWWWWWwo.',
  '..oooooooooooooooooooo..',
];
