import React from 'react'

export default function Logo({ size = 34 }: { size?: number }) {
  const s = size
  return (
    <svg width={s} height={Math.round(s * 1.11)} viewBox="0 0 90 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lg-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3347"/>
          <stop offset="100%" stopColor="#080f1a"/>
        </linearGradient>
        <linearGradient id="lg-eye" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8"/>
          <stop offset="100%" stopColor="#0284c7"/>
        </linearGradient>
      </defs>
      <path d="M45 4 L82 18 L82 52 Q82 76 45 96 Q8 76 8 52 L8 18 Z" fill="url(#lg-bg)" stroke="#0284c7" strokeWidth="1.5"/>
      <path d="M45 10 L76 22 L76 52 Q76 72 45 89 Q14 72 14 52 L14 22 Z" fill="none" stroke="rgba(56,189,248,0.2)" strokeWidth="0.8"/>
      <rect x="14" y="44" width="62" height="12" fill="rgba(56,189,248,0.07)" rx="2"/>
      <ellipse cx="45" cy="50" rx="18" ry="10" fill="none" stroke="url(#lg-eye)" strokeWidth="1.5"/>
      <circle cx="45" cy="50" r="6" fill="#0284c7"/>
      <circle cx="45" cy="50" r="3" fill="#38bdf8"/>
      <line x1="20" y1="43" x2="27" y2="43" stroke="rgba(56,189,248,0.5)" strokeWidth="1"/>
      <line x1="63" y1="43" x2="70" y2="43" stroke="rgba(56,189,248,0.5)" strokeWidth="1"/>
      <line x1="20" y1="57" x2="27" y2="57" stroke="rgba(56,189,248,0.5)" strokeWidth="1"/>
      <line x1="63" y1="57" x2="70" y2="57" stroke="rgba(56,189,248,0.5)" strokeWidth="1"/>
      <path d="M45 4 L82 18 L82 26 L45 14 L8 26 L8 18 Z" fill="rgba(56,189,248,0.1)"/>
    </svg>
  )
}
