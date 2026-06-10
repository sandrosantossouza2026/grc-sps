import React, { useState } from 'react'
import Header from './components/Header'
import TabPreditivo from './components/TabPreditivo'
import TabMonitoramento from './components/TabMonitoramento'

type Tab = 'preditivo' | 'monitoramento'

const tabs: { id: Tab; label: string }[] = [
  { id: 'preditivo', label: '⚡ Sistema Preditivo' },
  { id: 'monitoramento', label: '📡 Monitoramento de Carteira' },
]

export default function App() {
  const [active, setActive] = useState<Tab>('preditivo')

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Header />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 24px 48px' }}>
        {/* Tabs */}
        <div style={{
          display: 'flex', gap: 4,
          borderBottom: '1px solid var(--border)',
          marginBottom: 28,
        }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                padding: '10px 18px',
                fontSize: 13,
                cursor: 'pointer',
                border: 'none',
                borderBottom: `2px solid ${active === t.id ? 'var(--blue)' : 'transparent'}`,
                background: 'none',
                color: active === t.id ? 'var(--blue)' : 'var(--text2)',
                fontWeight: active === t.id ? 600 : 400,
                transition: 'color 0.15s, border-color 0.15s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {active === 'preditivo' && <TabPreditivo />}
        {active === 'monitoramento' && <TabMonitoramento />}
      </div>
    </div>
  )
}
