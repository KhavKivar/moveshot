import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'raw';
  withText?: boolean;
  theme?: 'light' | 'dark';
}

export default function Logo({ className = '', size = 'md', withText = true, theme = 'dark' }: LogoProps) {
  const isLight = theme === 'light';
  
  // Dimension mappings
  const sizeMap = {
    sm: { rect: 'w-8 h-8', text: 'text-sm font-semibold tracking-widest' },
    md: { rect: 'w-12 h-12', text: 'text-lg font-bold tracking-widest' },
    lg: { rect: 'w-24 h-24', text: 'text-2xl font-bold tracking-[0.2em]' },
    xl: { rect: 'w-48 h-48', text: 'text-4xl font-black tracking-[0.2em]' },
    raw: { rect: '', text: '' }
  };

  const currentSize = sizeMap[size];

  // SVG Wave paths mimicking the heartbeat line in MoveShot logo
  const WaveSVG = () => (
    <svg
      viewBox="0 0 100 100"
      className={`w-full h-full ${isLight ? 'text-black' : 'text-white'}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18,48 L27,33 L37,59 L46,24 L56,63 L65,30 L74,53 L81,42" transform="translate(0, 6.5)" />
    </svg>
  );

  if (size === 'xl') {
    // Large Round Badge, exactly matching the uploaded logo image (Image 2) but in Elegant Dark
    return (
      <div className={`flex flex-col items-center justify-center gap-6 ${className}`}>
        <div className={`relative flex items-center justify-center p-2 rounded-full ${isLight ? 'bg-zinc-100 border-zinc-200 shadow-sm' : 'bg-radial from-[#1e1e1e] to-[#050505] border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.03)]'} w-56 h-56 border`}>
          <div className="w-36 h-36 flex flex-col items-center justify-center relative translate-y-[-10px]">
            <WaveSVG />
            <span className={`absolute bottom-[-16px] ${isLight ? 'text-black' : 'text-white'} font-display text-2xl font-semibold tracking-[0.2em] leading-none uppercase`}>
              MoveShot
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (size === 'lg') {
    // Medium Round Badge
    return (
      <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
        <div className={`relative flex items-center justify-center rounded-full ${isLight ? 'bg-zinc-100 border-zinc-200 shadow-sm' : 'bg-radial from-[#1a1a1a] to-[#050505] border-white/10 shadow-lg'} w-32 h-32 border`}>
          <div className="w-20 h-20 flex flex-col items-center justify-center relative translate-y-[-4px]">
            <WaveSVG />
            <span className={`absolute bottom-[-6px] ${isLight ? 'text-black' : 'text-white'} font-display text-xs font-semibold tracking-[0.2em] leading-none uppercase`}>
              MoveShot
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Row navbar logo version
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className={`relative flex items-center justify-center overflow-hidden ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-[#121212] border-white/10'} border rounded-full w-10 h-10 shadow-md`}>
        <div className="w-7 h-7 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className={`w-full h-full ${isLight ? 'text-black' : 'text-white'}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18,48 L27,33 L37,59 L46,24 L56,63 L65,30 L74,53 L81,42" strokeWidth="8" transform="translate(0, 6.5)"/>
          </svg>
        </div>
      </div>
      {withText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold ${isLight ? 'text-black' : 'text-white'} tracking-[0.2em] text-lg uppercase leading-none`}>
            Move<span className={`${isLight ? 'text-zinc-600' : 'text-white'} font-light opacity-80`}>Shot</span>
          </span>
          <span className={`text-[9px] ${isLight ? 'text-zinc-500' : 'text-gray-400 opacity-40'} font-mono tracking-[0.3em] uppercase leading-none mt-1`}>
            CINEMA & PROD
          </span>
        </div>
      )}
    </div>
  );
}
