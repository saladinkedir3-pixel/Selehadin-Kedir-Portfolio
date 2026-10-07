import React, { useState } from 'react';
import { Menu, X, Video, Palette } from 'lucide-react';

interface NavbarProps {
  activePage: 'video' | 'graphics';
  onSelectPage: (page: 'video' | 'graphics') => void;
  onAddressClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onSelectPage, onAddressClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#090611]/90 backdrop-blur-md border-b border-purple-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div 
          onClick={() => onSelectPage('video')}
          className="text-lg font-bold tracking-tight text-white hover:text-purple-400 transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          <span className="font-display tracking-wide uppercase">Selehadin Kedir</span>
        </div>

        {/* Separated Page Switcher in Navbar */}
        <nav className="hidden sm:flex items-center p-1 bg-zinc-900/80 border border-purple-900/40 rounded-lg">
          <button
            type="button"
            onClick={() => onSelectPage('video')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-2 ${
              activePage === 'video'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video Editing</span>
            <span className="text-[10px] uppercase font-mono opacity-80">(Main)</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectPage('graphics')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-2 ${
              activePage === 'graphics'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Graphic Design</span>
          </button>
        </nav>

        {/* Address Link */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onAddressClick}
            className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-purple-300 hover:text-white border border-purple-800/40 hover:border-purple-600 rounded-md transition-colors"
          >
            Address
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="p-2 sm:hidden text-zinc-400 hover:text-white rounded-md focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-purple-900/40 bg-[#0d071a] px-4 pt-3 pb-5 space-y-2">
          <button
            type="button"
            onClick={() => {
              onSelectPage('video');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-md transition-colors flex items-center justify-between ${
              activePage === 'video'
                ? 'bg-purple-600 text-white'
                : 'text-zinc-300 hover:text-white'
            }`}
          >
            <span>Video Editing (YouTube & Reels/TikTok)</span>
            <span className="text-[10px] font-mono uppercase">Main</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onSelectPage('graphics');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-md transition-colors flex items-center justify-between ${
              activePage === 'graphics'
                ? 'bg-purple-600 text-white'
                : 'text-zinc-300 hover:text-white'
            }`}
          >
            <span>Graphic Design (Posters & Social Media)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onAddressClick();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-xs font-mono text-purple-300 hover:text-white border-t border-purple-900/40 pt-3"
          >
            Address & Contact Info
          </button>
        </div>
      )}
    </header>
  );
};
