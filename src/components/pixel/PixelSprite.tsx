import React, { useMemo } from 'react';

export interface PixelGridProps {
  grid: string[];
  palette: Record<string, string>;
  x?: number;
  y?: number;
  scale?: number;
  className?: string;
}

interface MergedRect {
  x: number;
  y: number;
  w: number;
  fill: string;
}

/**
 * Renders an ASCII pixel matrix as crisp, horizontally-merged SVG <rect> strips.
 * Characters mapped to '.' or ' ' or undefined in palette are transparent.
 */
export const PixelGrid: React.FC<PixelGridProps> = ({
  grid,
  palette,
  x = 0,
  y = 0,
  scale = 1,
  className,
}) => {
  const rects = useMemo(() => {
    const result: MergedRect[] = [];
    for (let row = 0; row < grid.length; row++) {
      const line = grid[row];
      let col = 0;
      while (col < line.length) {
        const ch = line[col];
        const fill = ch === '.' || ch === ' ' ? undefined : palette[ch];
        if (!fill) {
          col++;
          continue;
        }
        let run = 1;
        while (col + run < line.length && line[col + run] === ch) {
          run++;
        }
        result.push({
          x: col,
          y: row,
          w: run,
          fill,
        });
        col += run;
      }
    }
    return result;
  }, [grid, palette]);

  return (
    <g
      transform={`translate(${x}, ${y})${scale !== 1 ? ` scale(${scale})` : ''}`}
      shapeRendering="crispEdges"
      className={className}
    >
      {rects.map((r, idx) => (
        <rect key={idx} x={r.x} y={r.y} width={r.w} height={1} fill={r.fill} />
      ))}
    </g>
  );
};

export interface IsoDiamondProps {
  /** Top-center vertex X in virtual pixels */
  cx: number;
  /** Top-center vertex Y in virtual pixels */
  cy: number;
  /** Half-width in virtual pixels (must be even for clean 2:1 pixel steps; e.g. 80 -> total width 160, height 80) */
  halfW: number;
  fill: string;
  stroke?: string;
  opacity?: number;
}

/**
 * Renders a true 2:1 pixel-stepped isometric diamond surface using horizontal pixel scanlines.
 */
export const IsoDiamond: React.FC<IsoDiamondProps> = ({
  cx,
  cy,
  halfW,
  fill,
  stroke,
  opacity = 1,
}) => {
  const rows = useMemo(() => {
    const halfH = Math.floor(halfW / 2);
    const strips: { x: number; y: number; w: number; edgeOnly?: boolean }[] = [];
    for (let dy = 0; dy < halfH * 2; dy++) {
      const distFromTop = dy < halfH ? dy + 1 : halfH * 2 - dy;
      const span = distFromTop * 2;
      strips.push({
        x: cx - span,
        y: cy + dy,
        w: span * 2,
      });
    }
    return strips;
  }, [cx, cy, halfW]);

  return (
    <g shapeRendering="crispEdges" opacity={opacity}>
      {rows.map((s, idx) => (
        <rect key={idx} x={s.x} y={s.y} width={s.w} height={1} fill={fill} />
      ))}
      {stroke &&
        rows.map((s, idx) => (
          <React.Fragment key={`s-${idx}`}>
            <rect x={s.x} y={s.y} width={2} height={1} fill={stroke} />
            <rect x={s.x + s.w - 2} y={s.y} width={2} height={1} fill={stroke} />
          </React.Fragment>
        ))}
    </g>
  );
};

export interface IsoWallProps {
  /** Top-left X (for right-sloping wall) or Top-right X (for left-sloping wall) */
  startX: number;
  startY: number;
  /** Horizontal span in pixels (multiple of 2) */
  spanX: number;
  /** Vertical height of the wall in pixels */
  height: number;
  /** 'up-right' slopes up toward right (+x, -y); 'down-right' slopes down toward right (+x, +y) */
  slope: 'up-right' | 'down-right';
  fill: string;
  trimTop?: string;
  trimBottom?: string;
}

/**
 * Renders a crisp 2:1 pixel-stepped isometric vertical wall face.
 */
export const IsoWall: React.FC<IsoWallProps> = ({
  startX,
  startY,
  spanX,
  height,
  slope,
  fill,
  trimTop,
  trimBottom,
}) => {
  const columns = useMemo(() => {
    const cols: { x: number; y: number }[] = [];
    const steps = Math.floor(spanX / 2);
    for (let i = 0; i < steps; i++) {
      const x = startX + i * 2;
      const y = slope === 'down-right' ? startY + i : startY - i;
      cols.push({ x, y });
    }
    return cols;
  }, [startX, startY, spanX, slope]);

  return (
    <g shapeRendering="crispEdges">
      {columns.map((c, idx) => (
        <React.Fragment key={idx}>
          <rect x={c.x} y={c.y} width={2} height={height} fill={fill} />
          {trimTop && <rect x={c.x} y={c.y} width={2} height={2} fill={trimTop} />}
          {trimBottom && (
            <rect x={c.x} y={c.y + height - 3} width={2} height={3} fill={trimBottom} />
          )}
        </React.Fragment>
      ))}
    </g>
  );
};
