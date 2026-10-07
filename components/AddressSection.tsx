import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Globe } from 'lucide-react';
import { EDITOR_INFO } from '../data/portfolioData';

export const AddressSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EDITOR_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(EDITOR_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="address" className="py-16 border-t border-purple-900/30 bg-[#090510]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        {/* Simple Label */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-purple-400 uppercase tracking-widest">
            Contact & Address
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            {EDITOR_INFO.name}
          </h2>
          <p className="text-xs text-zinc-400 font-mono">
            {EDITOR_INFO.title}
          </p>
        </div>

        {/* Primary Contact Row: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          
          {/* Phone / Telegram Box */}
          <div className="bg-zinc-900/70 border border-purple-900/40 rounded-xl p-5 space-y-2 text-center flex flex-col justify-between">
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>Phone / Telegram</span>
              </div>
              <a
                href={`tel:${EDITOR_INFO.phone}`}
                className="text-lg sm:text-xl font-bold font-mono text-white hover:text-purple-300 transition-colors block"
              >
                {EDITOR_INFO.phone}
              </a>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1 px-3 py-1 rounded bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/40 text-xs font-mono text-purple-300 hover:text-white transition-colors"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Phone</span>
                  </>
                )}
              </button>
              <a
                href={`https://t.me/+251922977418`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded bg-purple-900/40 hover:bg-purple-800/60 border border-purple-700/50 text-xs font-mono text-purple-200 hover:text-white transition-colors"
              >
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Email Box */}
          <div className="bg-zinc-900/70 border border-purple-900/40 rounded-xl p-5 space-y-2 text-center flex flex-col justify-between">
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>Email Address</span>
              </div>
              <a
                href={`mailto:${EDITOR_INFO.email}`}
                className="text-base sm:text-lg font-bold font-mono text-white hover:text-purple-300 transition-colors block truncate"
              >
                {EDITOR_INFO.email}
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-3 py-1 rounded bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800/40 text-xs font-mono text-purple-300 hover:text-white transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Address / Location Line */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-zinc-200">{EDITOR_INFO.address}</span>
          </div>

          <span className="hidden sm:inline text-zinc-700">·</span>

          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-purple-400" />
            <span>{EDITOR_INFO.availability}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
