import React from 'react'

export function LogoFull() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <img src="/logo-grc.png" alt="GRC Solutions" style={{ height: 40, width: 'auto' }} />
      <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.3)' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <ShieldSPS size={38} />
      </div>
    </div>
  )
}

export function ShieldSPS({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={Math.round(size * 1.18)} viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg">
      <path d="M 24 1 L 46 10 L 46 30 Q 46 45 24 55 Q 2 45 2 30 L 2 10 Z" fill="#0a1e35" stroke="#0ea5e9" strokeWidth="1.8"/>
      <path d="M 24 6 L 42 14 L 42 30 Q 42 42 24 51 Q 6 42 6 30 L 6 14 Z" fill="none" stroke="rgba(56,189,248,0.2)" strokeWidth="0.9"/>
      <rect x="6" y="24" width="36" height="12" fill="rgba(56,189,248,0.07)" rx="2"/>
      <ellipse cx="24" cy="30" rx="13" ry="7" fill="none" stroke="#38bdf8" strokeWidth="1.6"/>
      <circle cx="24" cy="30" r="4.5" fill="#0284c7"/>
      <circle cx="24" cy="30" r="2.2" fill="#7dd3fc"/>
      <line x1="7"  y1="24" x2="13" y2="24" stroke="rgba(56,189,248,0.55)" strokeWidth="1"/>
      <line x1="35" y1="24" x2="41" y2="24" stroke="rgba(56,189,248,0.55)" strokeWidth="1"/>
      <line x1="7"  y1="36" x2="13" y2="36" stroke="rgba(56,189,248,0.55)" strokeWidth="1"/>
      <line x1="35" y1="36" x2="41" y2="36" stroke="rgba(56,189,248,0.55)" strokeWidth="1"/>
      <text x="24" y="51" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="7.5" fill="#38bdf8" letterSpacing="2">SPS</text>
    </svg>
  )
}

export default ShieldSPS
