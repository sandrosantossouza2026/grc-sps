import React from 'react'

export function LogoFull() {
  return (
    <svg width="260" height="48" viewBox="0 0 260 48" xmlns="http://www.w3.org/2000/svg">
      {/* G */}
      <text x="0" y="36" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="38" fill="white">G</text>
      {/* R */}
      <text x="28" y="36" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="38" fill="white">R</text>
      {/* C arco colorido */}
      <g transform="translate(54, 4)">
        {/* Arco verde (topo) */}
        <path d="M18 2 A16 16 0 0 1 32 10" stroke="#5a9e2f" strokeWidth="6" fill="none" strokeLinecap="round"/>
        {/* Arco laranja (meio) */}
        <path d="M32 10 A16 16 0 0 1 30 26" stroke="#e07820" strokeWidth="6" fill="none" strokeLinecap="round"/>
        {/* Arco vermelho (baixo) */}
        <path d="M30 26 A16 16 0 0 1 14 34" stroke="#c0392b" strokeWidth="6" fill="none" strokeLinecap="round"/>
      </g>
      {/* SOLUTIONS */}
      <text x="84" y="30" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="white" letterSpacing="1">SOLUTIONS</text>
      {/* Separador */}
      <line x1="158" y1="6" x2="158" y2="42" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      {/* Escudo SPS */}
      <g transform="translate(168, 2)">
        <path d="M22 1 L41 8 L41 24 Q41 36 22 45 Q3 36 3 24 L3 8 Z" fill="#0a1628" stroke="#0284c7" strokeWidth="1.2"/>
        <path d="M22 5 L37 11 L37 24 Q37 33 22 41 Q7 33 7 24 L7 11 Z" fill="none" stroke="rgba(56,189,248,0.2)" strokeWidth="0.7"/>
        <rect x="7" y="20" width="30" height="8" fill="rgba(56,189,248,0.07)" rx="1"/>
        <ellipse cx="22" cy="24" rx="10" ry="5.5" fill="none" stroke="#38bdf8" strokeWidth="1.2"/>
        <circle cx="22" cy="24" r="3.5" fill="#0284c7"/>
        <circle cx="22" cy="24" r="1.8" fill="#38bdf8"/>
        <line x1="9" y1="20" x2="13" y2="20" stroke="rgba(56,189,248,0.5)" strokeWidth="0.8"/>
        <line x1="31" y1="20" x2="35" y2="20" stroke="rgba(56,189,248,0.5)" strokeWidth="0.8"/>
        <line x1="9" y1="28" x2="13" y2="28" stroke="rgba(56,189,248,0.5)" strokeWidth="0.8"/>
        <line x1="31" y1="28" x2="35" y2="28" stroke="rgba(56,189,248,0.5)" strokeWidth="0.8"/>
        {/* SPS texto */}
        <text x="22" y="42" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="6" fill="#38bdf8" letterSpacing="1">SPS</text>
      </g>
    </svg>
  )
}

export function LogoIcon({ size = 36 }: { size?: number }) {
  const s = size
  return (
    <svg width={s} height={Math.round(s * 1.02)} viewBox="0 0 44 46" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 1 L41 8 L41 26 Q41 38 22 45 Q3 38 3 26 L3 8 Z" fill="#0a1628" stroke="#0284c7" strokeWidth="1.5"/>
      <path d="M22 5 L37 11 L37 26 Q37 35 22 42 Q7 35 7 26 L7 11 Z" fill="none" stroke="rgba(56,189,248,0.2)" strokeWidth="0.8"/>
      <rect x="7" y="21" width="30" height="8" fill="rgba(56,189,248,0.07)" rx="1"/>
      <ellipse cx="22" cy="25" rx="10" ry="5.5" fill="none" stroke="#38bdf8" strokeWidth="1.3"/>
      <circle cx="22" cy="25" r="3.5" fill="#0284c7"/>
      <circle cx="22" cy="25" r="1.8" fill="#38bdf8"/>
      <line x1="9" y1="21" x2="13" y2="21" stroke="rgba(56,189,248,0.5)" strokeWidth="0.9"/>
      <line x1="31" y1="21" x2="35" y2="21" stroke="rgba(56,189,248,0.5)" strokeWidth="0.9"/>
      <line x1="9" y1="29" x2="13" y2="29" stroke="rgba(56,189,248,0.5)" strokeWidth="0.9"/>
      <line x1="31" y1="29" x2="35" y2="29" stroke="rgba(56,189,248,0.5)" strokeWidth="0.9"/>
      <text x="22" y="41" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="6" fill="#38bdf8" letterSpacing="1">SPS</text>
    </svg>
  )
}

export default LogoIcon
