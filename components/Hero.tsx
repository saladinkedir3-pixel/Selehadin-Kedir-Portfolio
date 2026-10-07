import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onContact }) => {
  const photoSrc = 'https://res.cloudinary.com/rqcidcaq/image/upload/v1791360720/Monochrome_Portrait_Against_Modern_Architecture.png';
  const localFallbackSrc = '/src/assets/images/Monochrome_Portrait_Against_Modern_Architecture.png';

  return (
    <section className="relative overflow-hidden bg-[#090611] border-b border-purple-900/30 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      {/* Subtle, restrained ambient lighting for depth */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Hierarchy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-hero-fade">
            
            {/* Name: Visible, but secondary to the main headline */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-purple-300 font-medium">
                Selehadin Kedir
              </span>
            </div>

            {/* Main Headline: Primary Visual Focus */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
                Video Editor &amp; <br />
                <span className="text-zinc-300 font-semibold">Visual Designer</span>
              </h1>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl">
              I’m a video editor focused on creating engaging, polished video content. I enjoy turning raw footage and ideas into videos that feel clear, purposeful, and visually interesting, with careful attention to pacing, music, visuals, and detail.
            </p>

            {/* Two Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 animate-hero-fade-delayed">
              <button
                type="button"
                onClick={onViewWork}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-purple-950/40 hover:shadow-purple-900/40 active:scale-[0.98] group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-purple-200 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900/60 hover:bg-purple-950/40 border border-purple-900/50 hover:border-purple-600 text-zinc-300 hover:text-white font-medium text-sm transition-all duration-200 active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Treatment */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-hero-photo">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
              
              {/* Subtle architectural offset frame behind portrait */}
              <div 
                aria-hidden="true" 
                className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl border border-purple-800/30 bg-purple-950/20 -z-10" 
              />

              {/* Main Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden border border-purple-900/50 bg-zinc-950 shadow-2xl shadow-black/80 group">
                
                {/* Clean Aspect Ratio Frame - Exactly matching the original 3:4 (1086x1448) photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                  <img
                    src={photoSrc}
                    alt="Selehadin Kedir — Video Editor & Visual Designer"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== localFallbackSrc) {
                        target.src = localFallbackSrc;
                      }
                    }}
                  />
                </div>

                {/* Subtle, minimal caption tag */}
                <div className="px-4 py-3 bg-[#0d071a] border-t border-purple-900/40 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-zinc-300">Open for new projects</span>
                  </div>
                  <span className="text-purple-400">Addis Ababa / Remote</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
