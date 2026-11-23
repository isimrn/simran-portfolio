import React, { useState } from 'react';
import { ProjectData } from '../../data/portfolioData';

interface ProjectDetailProps {
  project: ProjectData;
}

interface CrimeSyncNode {
  id: string;
  label: string;
  x: number;
  y: number;
  detail: string;
}

const CRIMESYNC_NODES: CrimeSyncNode[] = [
  {
    id: 'syndicate',
    label: 'Syndicate Graph',
    x: 52,
    y: 44,
    detail: 'Neo4j knowledge graphs uncover hidden entity links across organized crime networks.',
  },
  {
    id: 'money',
    label: 'Money Trail',
    x: 158,
    y: 34,
    detail: 'Multi-hop financial traversal maps indirect funding and layered transactions.',
  },
  {
    id: 'gis',
    label: 'Leaflet GIS',
    x: 248,
    y: 58,
    detail: 'Interactive geospatial threat patterns layered onto Leaflet investigation maps.',
  },
  {
    id: 'tracking',
    label: '4D Tracking',
    x: 146,
    y: 96,
    detail: '4D suspect tracking aligns spatial coordinates and timeline movements.',
  },
];

const CrimeSyncVisual: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('syndicate');
  const activeNode =
    CRIMESYNC_NODES.find((n) => n.id === selectedNodeId) ?? CRIMESYNC_NODES[0];

  return (
    <div className="bg-[#151210] border-2 border-[#594438] p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-pixel text-[11px] text-[#D7AF67]">
          Investigative Evidence &amp; Graph Board
        </span>
        <span className="text-[11px] text-[#D6BFA5]">
          Select a node to inspect architecture
        </span>
      </div>

      {/* Interactive SVG Graph + Geospatial Grid */}
      <div className="bg-[#1B1715] border border-[#382D29] p-2">
        <svg
          viewBox="0 0 300 124"
          className="w-full h-auto block pixel-crisp"
          role="img"
          aria-label="Interactive CrimeSync knowledge graph and geospatial evidence board diagram"
        >
          {/* Subtle geospatial coordinate grid */}
          <g stroke="#382D29" strokeWidth="1" opacity="0.65">
            <line x1="0" y1="30" x2="300" y2="30" />
            <line x1="0" y1="62" x2="300" y2="62" />
            <line x1="0" y1="94" x2="300" y2="94" />
            <line x1="60" y1="0" x2="60" y2="124" />
            <line x1="150" y1="0" x2="150" y2="124" />
            <line x1="240" y1="0" x2="240" y2="124" />
          </g>

          {/* Relationship Lines */}
          <g stroke="#879EB2" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8">
            <line x1="52" y1="44" x2="158" y2="34" />
            <line x1="158" y1="34" x2="248" y2="58" />
            <line x1="52" y1="44" x2="146" y2="96" />
            <line x1="146" y1="96" x2="248" y2="58" />
            <line x1="158" y1="34" x2="146" y2="96" />
          </g>

          {/* Interactive Graph Nodes */}
          {CRIMESYNC_NODES.map((node) => {
            const isSelected = node.id === selectedNodeId;
            return (
              <g
                key={node.id}
                role="button"
                tabIndex={0}
                aria-label={node.label}
                onClick={() => setSelectedNodeId(node.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedNodeId(node.id);
                  }
                }}
                className="cursor-pointer focus:outline-none"
              >
                <rect
                  x={node.x - 10}
                  y={node.y - 10}
                  width={20}
                  height={20}
                  fill={isSelected ? '#C58B69' : '#2D2420'}
                  stroke={isSelected ? '#D7AF67' : '#879EB2'}
                  strokeWidth={2}
                />
                <rect
                  x={node.x - 3}
                  y={node.y - 3}
                  width={6}
                  height={6}
                  fill={isSelected ? '#F2E5D3' : '#D7AF67'}
                />
                <text
                  x={node.x}
                  y={node.y + 20}
                  textAnchor="middle"
                  fill={isSelected ? '#D7AF67' : '#D6BFA5'}
                  fontSize="8"
                  fontFamily="Silkscreen, monospace"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Node Detail */}
      <div className="bg-[#26201D] border border-[#594438] px-3.5 py-2.5 flex items-start justify-between gap-3">
        <div>
          <div className="font-pixel text-[11px] text-[#C58B69]">{activeNode.label}</div>
          <p className="text-xs text-[#F2E5D3] mt-1 leading-relaxed">{activeNode.detail}</p>
        </div>
      </div>
    </div>
  );
};

const BookClubVisual: React.FC = () => (
  <div className="bg-[#EAD9C2] border-2 border-[#382D29] p-4 space-y-3">
    <div className="flex items-center justify-between gap-2">
      <span className="font-pixel text-[11px] text-[#594438]">
        Literary Reading Desk
      </span>
      <span className="text-[11px] text-[#594438]">
        Spoiler-Free Summaries &amp; Real-Time Circles
      </span>
    </div>

    {/* Illustrated Open Book Spread */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-2 border-[#382D29] bg-[#FAF1E4]">
      <div className="p-4 border-b-2 sm:border-b-0 sm:border-r-2 border-[#382D29]">
        <div className="font-pixel text-[11px] text-[#C58B69] mb-2">
          Left Page · AI Summaries
        </div>
        <p className="text-xs text-[#382D29] leading-relaxed">
          Anthropic API generates spoiler-free overviews so readers can explore premise, tone, and themes before diving in.
        </p>
      </div>
      <div className="p-4 relative">
        <div className="font-pixel text-[11px] text-[#87947B] mb-2">
          Right Page · Reader Circles
        </div>
        <p className="text-xs text-[#382D29] leading-relaxed">
          Reader matching and Socket.io real-time communication bring readers with shared book interests together.
        </p>
      </div>
    </div>
  </div>
);

const IndustrialAnalyticsVisual: React.FC = () => (
  <div className="bg-[#DFE5E9] border-2 border-[#382D29] p-4 space-y-3">
    <div className="flex items-center justify-between gap-2">
      <span className="font-pixel text-[11px] text-[#382D29]">
        Refinery Process-Flow Pipeline
      </span>
      <span className="text-[11px] text-[#594438]">
        Indian Oil Corporation Limited
      </span>
    </div>

    {/* Industrial Process Flow Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
      <div className="bg-[#F2F5F7] border-2 border-[#382D29] p-3">
        <div className="font-mono text-[11px] text-[#667E92] mb-1">Stage 01</div>
        <div className="font-pixel text-[11px] text-[#382D29]">Sensor History</div>
        <p className="mt-1 text-xs text-[#594438] leading-snug">
          Historical refinery sensor records structured with Pandas and NumPy.
        </p>
      </div>
      <div className="bg-[#F2F5F7] border-2 border-[#382D29] p-3">
        <div className="font-mono text-[11px] text-[#667E92] mb-1">Stage 02</div>
        <div className="font-pixel text-[11px] text-[#382D29]">Process Mining</div>
        <p className="mt-1 text-xs text-[#594438] leading-snug">
          PM4Py and Scikit-learn surface operational patterns and bottlenecks.
        </p>
      </div>
      <div className="bg-[#F2F5F7] border-2 border-[#382D29] p-3">
        <div className="font-mono text-[11px] text-[#667E92] mb-1">Stage 03</div>
        <div className="font-pixel text-[11px] text-[#382D29]">Operational View</div>
        <p className="mt-1 text-xs text-[#594438] leading-snug">
          FastAPI, PostgreSQL, and Plotly Dash support continuous improvement.
        </p>
      </div>
    </div>
  </div>
);

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const isDark = project.themeVariant === 'investigative';

  return (
    <article className="space-y-5">
      {/* Header */}
      <div
        className={`pb-4 border-b ${
          isDark ? 'border-[#594438]' : 'border-[#D6BFA5]'
        }`}
      >
        <div
          className={`text-xs font-medium ${
            isDark ? 'text-[#879EB2]' : 'text-[#A87955]'
          }`}
        >
          {project.category}
        </div>
        <h3
          className={`mt-1 font-pixel text-base sm:text-lg leading-snug ${
            isDark ? 'text-[#F2E5D3]' : 'text-[#382D29]'
          }`}
        >
          {project.fullTitle}
        </h3>
        <p
          className={`mt-2.5 text-sm sm:text-[15px] leading-relaxed ${
            isDark ? 'text-[#E5D7C6]' : 'text-[#382D29]'
          }`}
        >
          {project.overview}
        </p>
      </div>

      {/* Achievement Banner (CrimeSync SIH) */}
      {project.achievementNote && (
        <div className="bg-[#2C231F] border-2 border-[#D7AF67] p-4">
          <div className="font-pixel text-[11px] text-[#D7AF67] mb-1">
            Smart India Hackathon Selection
          </div>
          <p className="text-xs sm:text-sm text-[#F2E5D3] leading-relaxed">
            {project.achievementNote}
          </p>
        </div>
      )}

      {/* Bespoke Project Visual */}
      {project.themeVariant === 'investigative' && <CrimeSyncVisual />}
      {project.themeVariant === 'literary' && <BookClubVisual />}
      {project.themeVariant === 'industrial' && <IndustrialAnalyticsVisual />}

      {/* Problem & Contribution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={`border-2 p-4 ${
            isDark
              ? 'bg-[#26201D] border-[#594438]'
              : 'bg-[#FAF1E4] border-[#382D29]'
          }`}
        >
          <h4
            className={`font-pixel text-[11px] mb-2 ${
              isDark ? 'text-[#D7AF67]' : 'text-[#A87955]'
            }`}
          >
            Purpose
          </h4>
          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-[#E5D7C6]' : 'text-[#382D29]'
            }`}
          >
            {project.purpose}
          </p>
        </div>

        <div
          className={`border-2 p-4 ${
            isDark
              ? 'bg-[#26201D] border-[#594438]'
              : 'bg-[#FAF1E4] border-[#382D29]'
          }`}
        >
          <h4
            className={`font-pixel text-[11px] mb-2 ${
              isDark ? 'text-[#D7AF67]' : 'text-[#A87955]'
            }`}
          >
            My Contribution
          </h4>
          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-[#E5D7C6]' : 'text-[#382D29]'
            }`}
          >
            {project.contribution}
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div
        className={`border-2 p-4 sm:p-5 ${
          isDark
            ? 'bg-[#26201D] border-[#594438]'
            : 'bg-[#FAF1E4] border-[#382D29]'
        }`}
      >
        <h4
          className={`font-pixel text-[11px] mb-3 ${
            isDark ? 'text-[#D7AF67]' : 'text-[#A87955]'
          }`}
        >
          Key Functionality &amp; Highlights
        </h4>
        <ul className="space-y-2">
          {project.highlights.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                isDark ? 'text-[#F2E5D3]' : 'text-[#382D29]'
              }`}
            >
              <span
                aria-hidden="true"
                className={`mt-1.5 inline-block w-1.5 h-1.5 shrink-0 ${
                  isDark ? 'bg-[#D7AF67]' : 'bg-[#C58B69]'
                }`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technology Stack */}
      <div>
        <h4
          className={`font-pixel text-[11px] mb-2.5 ${
            isDark ? 'text-[#D6BFA5]' : 'text-[#594438]'
          }`}
        >
          Technology Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 font-mono text-xs border ${
                isDark
                  ? 'bg-[#2A221F] border-[#594438] text-[#F2E5D3]'
                  : 'bg-[#FAF1E4] border-[#382D29] text-[#382D29]'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
