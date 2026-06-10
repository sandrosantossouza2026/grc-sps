import React from 'react'

type Variant = 'verde' | 'amarelo' | 'laranja' | 'vermelho' | 'azul' | 'cinza'

const map: Record<Variant, { bg: string; color: string }> = {
  verde:    { bg: 'var(--green-dim)',  color: 'var(--green)' },
  amarelo:  { bg: 'var(--yellow-dim)', color: 'var(--yellow)' },
  laranja:  { bg: 'var(--orange-dim)', color: 'var(--orange)' },
  vermelho: { bg: 'var(--red-dim)',    color: 'var(--red)' },
  azul:     { bg: 'var(--blue-dim)',   color: 'var(--blue)' },
  cinza:    { bg: 'rgba(255,255,255,0.06)', color: 'var(--text2)' },
}

export default function Badge({ label, variant }: { label: string; variant: Variant }) {
  const s = map[variant]
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 500,
      background: s.bg,
      color: s.color,
      whiteSpace: 'nowrap',
    }}>{label}</span>
  )
}
