import React from 'react';
import { Video, Palette } from 'lucide-react';

interface PageHeaderProps {
  activePage: 'video' | 'graphics';
  onSelectPage: (page: 'video' | 'graphics') => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ activePage, onSelectPage }) => {
  const isVideo = activePage === 'video';

  return (
    <div id="work" className="relative pt-10 pb-8 border-b border-purple-900/30 overflow-hidden bg-[#090611] scroll-mt-16">
      {/* Background purple glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Main Page Switcher Pill Tabs */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSelectPage('video')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
              isVideo
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40 border border-purple-500'
                : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video Editing</span>
            <span className="text-[10px] font-mono text-purple-300 bg-purple-950 px-1.5 py-0.5 rounded">Main</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectPage('graphics')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
              !isVideo
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40 border border-purple-500'
                : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Graphic Design</span>
            <span className="text-[10px] font-mono text-zinc-400">Secondary</span>
          </button>
        </div>

        {/* Simplified Page Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white">
            {isVideo ? 'Video Editing' : 'Graphic Design'}
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-normal">
            {isVideo
              ? 'YouTube Videos & Reels / TikTok'
              : 'Posters & Social Media Designs'}
          </p>
        </div>

      </div>
    </div>
  );
};
