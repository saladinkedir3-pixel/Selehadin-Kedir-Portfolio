import React, { useState } from 'react';
import { Play, X, Video, Smartphone, Palette, ArrowRight, Maximize2 } from 'lucide-react';
import { VideoWork, VideoCategory } from '../types/portfolio';
import { VIDEO_WORKS, GRAPHIC_WORKS, extractYouTubeId, getYouTubeThumbnailUrl } from '../data/portfolioData';

interface VideoShowcaseProps {
  onGoToGraphics?: () => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ onGoToGraphics }) => {
  const [filter, setFilter] = useState<VideoCategory>('all');
  const [activeVideo, setActiveVideo] = useState<VideoWork | null>(null);

  const youtubeVideos = VIDEO_WORKS.filter((v) => v.category === 'youtube');
  const reelVideos = VIDEO_WORKS.filter((v) => v.category === 'reels_tiktok');
  const featuredGraphic = GRAPHIC_WORKS[0];

  const getResolvedThumbnail = (video: VideoWork): string => {
    return getYouTubeThumbnailUrl(video.videoUrl, video.youtubeId) || video.thumbnailUrl;
  };

  return (
    <section className="py-12 bg-[#0b0714]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Simple Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900/90 border border-purple-900/40 rounded-lg w-fit mx-auto sm:mx-0">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              filter === 'all'
                ? 'bg-purple-600 text-white font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            All Cuts
          </button>
          <button
            type="button"
            onClick={() => setFilter('youtube')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              filter === 'youtube'
                ? 'bg-purple-600 text-white font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>YouTube Videos</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter('reels_tiktok')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              filter === 'reels_tiktok'
                ? 'bg-purple-600 text-white font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>TikTok &amp; Reels</span>
          </button>
        </div>

        {/* 1. YouTube Videos: 1 Video Per Line */}
        {(filter === 'all' || filter === 'youtube') && (
          <div className="space-y-6">
            {filter === 'all' && (
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider pb-2 border-b border-purple-900/30">
                <Video className="w-4 h-4" />
                <span>YouTube Videos</span>
              </div>
            )}

            <div className="space-y-12">
              {youtubeVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-purple-900/30 bg-zinc-900/40 hover:border-purple-500/60 hover:bg-zinc-900/70 transition-all duration-300 shadow-xl"
                >
                  {/* High-Visibility 16:9 Widescreen Video Frame */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <img
                      src={getResolvedThumbnail(video)}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallback = getYouTubeThumbnailUrl(video.videoUrl, video.youtubeId);
                        if (fallback && target.src !== fallback) {
                          target.src = fallback;
                        }
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Prominent Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 ml-1 fill-white" />
                      </div>
                    </div>

                    {/* Top Info Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-zinc-300 pointer-events-none">
                      <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-md border border-purple-800/40 text-xs text-purple-300 font-semibold flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5" />
                        <span>{video.clientOrChannel}</span>
                      </span>
                      <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-xs tabular-nums text-zinc-200">
                        {video.duration}
                      </span>
                    </div>
                  </div>

                  {/* Clean Single-Row Card Info */}
                  <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-zinc-400">
                        {video.clientOrChannel} · {video.duration}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                        {video.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 shrink-0 self-start sm:self-auto">
                      <span className="px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-800/40 group-hover:bg-purple-600 group-hover:text-white transition-colors flex items-center gap-1.5">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Video</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. TikTok Videos: 2 Side by Side */}
        {(filter === 'all' || filter === 'reels_tiktok') && (
          <div className="space-y-6 pt-4">
            {filter === 'all' && (
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider pb-2 border-b border-purple-900/30">
                <Smartphone className="w-4 h-4" />
                <span>TikTok Videos</span>
              </div>
            )}

            {/* Exactly 2 TikTok videos side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {reelVideos.slice(0, 2).map((reel) => (
                <div
                  key={reel.id}
                  onClick={() => setActiveVideo(reel)}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-purple-900/30 bg-zinc-900/40 hover:border-purple-500/60 hover:bg-zinc-900/70 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  {/* 9:16 Vertical Video Frame */}
                  <div className="relative aspect-[9/15] w-full overflow-hidden bg-black">
                    <img
                      src={getResolvedThumbnail(reel)}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallback = getYouTubeThumbnailUrl(reel.videoUrl, reel.youtubeId);
                        if (fallback && target.src !== fallback) {
                          target.src = fallback;
                        }
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 ml-0.5 fill-white" />
                      </div>
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-zinc-300 pointer-events-none">
                      <span className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-purple-800/40 text-[11px] text-purple-300 font-semibold flex items-center gap-1">
                        <Smartphone className="w-3 h-3" />
                        <span>TikTok Ad</span>
                      </span>
                      <span className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[11px] tabular-nums text-zinc-200">
                        {reel.duration}
                      </span>
                    </div>
                  </div>

                  {/* Clean Reel Info */}
                  <div className="p-4 sm:p-5 space-y-2">
                    <div className="text-[11px] font-mono text-zinc-400">
                      {reel.clientOrChannel} · TikTok Video
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                      {reel.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Graphic Design Spotlight Teaser Card with Expand Link */}
        {featuredGraphic && onGoToGraphics && (
          <div className="pt-8 border-t border-purple-900/30">
            <div className="bg-gradient-to-r from-purple-950/30 via-zinc-900/50 to-purple-950/20 border border-purple-900/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                {/* One Graphic Preview Thumbnail */}
                <div 
                  onClick={onGoToGraphics}
                  className="relative w-36 h-24 sm:w-44 sm:h-28 rounded-xl overflow-hidden border border-purple-700/50 cursor-pointer group shadow-lg shrink-0"
                >
                  <img
                    src={featuredGraphic.imageUrl}
                    alt={featuredGraphic.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="px-2 py-1 bg-black/75 backdrop-blur-md rounded text-[10px] font-mono text-purple-300 font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3 h-3" />
                      <span>Preview</span>
                    </span>
                  </div>
                </div>

                {/* Text Info */}
                <div className="space-y-1.5 max-w-md">
                  <div className="text-xs font-mono text-purple-400 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
                    <Palette className="w-3.5 h-3.5" />
                    <span>Also Specialize in Graphic Design</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold font-display text-white">
                    {featuredGraphic.title}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Posters, social media graphics, and commercial advertisements.
                  </p>
                </div>
              </div>

              {/* Expand & Look Further Button */}
              <button
                type="button"
                onClick={onGoToGraphics}
                className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 whitespace-nowrap active:scale-[0.98] shrink-0"
              >
                <span>View Graphic Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>
        )}

      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveVideo(null);
          }}
        >
          <div
            className={`relative w-full bg-zinc-950 border border-purple-900/60 rounded-2xl overflow-hidden shadow-2xl my-8 text-zinc-200 ${
              activeVideo.aspectRatio === '9:16' ? 'max-w-sm' : 'max-w-4xl'
            }`}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-purple-900/40 bg-purple-950/20">
              <span className="text-xs font-mono text-zinc-300 truncate">
                {activeVideo.categoryLabel} · {activeVideo.clientOrChannel}
              </span>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-2"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Screen */}
            <div
              className={`relative w-full bg-black flex items-center justify-center overflow-hidden ${
                activeVideo.aspectRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'
              }`}
            >
              {activeVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  src={activeVideo.videoUrl}
                  poster={getResolvedThumbnail(activeVideo)}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Clean Video Details (No Fake View Counts) */}
            <div className="p-4 sm:p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                  <span>{activeVideo.clientOrChannel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-zinc-300">{activeVideo.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeVideo.aspectRatio === '9:16' ? 'Vertical 9:16' : '16:9 Widescreen'}</span>
                </div>

                {activeVideo.youtubeId && (
                  <a
                    href={activeVideo.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-950/70 hover:bg-purple-900 border border-purple-800/50 text-xs font-mono text-purple-300 hover:text-white transition-colors"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Watch on YouTube</span>
                  </a>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display text-white">
                {activeVideo.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
