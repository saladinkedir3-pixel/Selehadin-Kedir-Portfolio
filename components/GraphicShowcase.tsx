import React, { useState, useMemo } from 'react';
import { Maximize2, X, Palette, FileText } from 'lucide-react';
import { GraphicWork, GraphicCategory } from '../types/portfolio';
import { GRAPHIC_WORKS } from '../data/portfolioData';

export const GraphicShowcase: React.FC = () => {
  const [filter, setFilter] = useState<GraphicCategory>('all');
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicWork | null>(null);

  const filteredGraphics = useMemo(() => {
    if (filter === 'all') return GRAPHIC_WORKS;
    return GRAPHIC_WORKS.filter((g) => g.category === filter);
  }, [filter]);

  return (
    <section className="py-12 bg-[#090611]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900/90 border border-purple-900/40 rounded-lg w-fit">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              filter === 'all'
                ? 'bg-purple-600 text-white font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            All Works
          </button>
          <button
            type="button"
            onClick={() => setFilter('posters')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              filter === 'posters'
                ? 'bg-purple-600 text-white font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Posters &amp; Profiles</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter('social_media')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              filter === 'social_media'
                ? 'bg-purple-600 text-white font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Social Media &amp; Ads</span>
          </button>
        </div>

        {/* Graphics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredGraphics.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedGraphic(item)}
              className="group cursor-pointer rounded-xl overflow-hidden border border-purple-900/30 bg-zinc-900/40 hover:border-purple-500/60 hover:bg-zinc-900/80 transition-all duration-200 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Inspect Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600 text-white text-xs font-semibold font-mono shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Size</span>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-purple-800/40 text-[11px] font-mono text-purple-300 font-semibold">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 space-y-1">
                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                  <span>{item.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-purple-300">{item.specifications}</span>
                </div>

                <h3 className="text-base font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedGraphic && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedGraphic(null);
          }}
        >
          <div
            className="relative w-full max-w-4xl bg-zinc-950 border border-purple-900/60 rounded-2xl overflow-hidden shadow-2xl my-8 text-zinc-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-purple-900/40 bg-purple-950/20">
              <span className="text-xs font-mono text-zinc-300 truncate">
                {selectedGraphic.categoryLabel} · {selectedGraphic.client}
              </span>
              <button
                type="button"
                onClick={() => setSelectedGraphic(null)}
                className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-2"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Artwork Display */}
            <div className="relative w-full max-h-[78vh] min-h-[320px] bg-black/90 flex items-center justify-center p-2 sm:p-5 overflow-hidden">
              <img
                src={selectedGraphic.imageUrl}
                alt={selectedGraphic.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Details */}
            <div className="p-4 sm:p-6 space-y-3 bg-[#0d071a]">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="text-purple-400">
                  {selectedGraphic.client} · {selectedGraphic.year} · {selectedGraphic.specifications}
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  {selectedGraphic.tools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded bg-zinc-900 border border-purple-900/40 text-[11px] text-zinc-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                {selectedGraphic.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
                {selectedGraphic.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
