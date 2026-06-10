import React, { useState } from 'react'
import TabPreditivo from './components/TabPreditivo'
import TabMonitoramento from './components/TabMonitoramento'
import Logo from './components/Logo'

type Tab = 'preditivo' | 'monitoramento'

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'preditivo', label: 'Sistema Preditivo', icon: '⚡' },
  { id: 'monitoramento', label: 'Monitoramento de Carteira', icon: '📡' },
]

export default function App() {
  const [active, setActive] = useState<Tab>('preditivo')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleNav = (id: Tab) => {
    setActive(id)
    setSidebarOpen(false)
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)', position: 'relative' }}>

      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="mobile-overlay" />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>

        {/* Logo */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '18px 14px 20px', borderBottom: '1px solid var(--border)',
        }}>
          <Logo size={36} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--text)', letterSpacing: '0.02em' }}>GRC SPS</div>
            <div style={{ fontSize: 9, color: 'var(--text3)', lineHeight: 1.4, marginTop: 1 }}>Sistema Preditivo<br/>para Seguradoras</div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: '14px 8px', flex: 1 }}>
          <div style={{ fontSize: 9, color: 'var(--text3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', padding: '0 8px', marginBottom: 8 }}>Módulos</div>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => handleNav(t.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 9,
                width: '100%', padding: '9px 10px', marginBottom: 2,
                borderRadius: 8, border: 'none', cursor: 'pointer',
                background: active === t.id ? 'var(--blue-dim)' : 'transparent',
                color: active === t.id ? 'var(--blue)' : 'var(--text2)',
                fontWeight: active === t.id ? 600 : 400,
                fontSize: 12, textAlign: 'left',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              <span style={{ fontSize: 14, width: 18, textAlign: 'center', flexShrink: 0 }}>{t.icon}</span>
              <span style={{ flex: 1 }}>{t.label}</span>
              {active === t.id && (
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div style={{ padding: '12px 14px', borderTop: '1px solid var(--border)' }}>
          <div style={{ fontSize: 9, color: 'var(--text3)' }}>
            {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>

        {/* Topbar mobile */}
        <header className="topbar">
          <button
            onClick={() => setSidebarOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: 8, borderRadius: 6, display: 'flex', alignItems: 'center' }}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Logo size={24} />
            <span style={{ fontWeight: 700, fontSize: 13, color: 'var(--text)' }}>GRC SPS</span>
          </div>
        </header>

        {/* Content */}
        <main style={{ flex: 1, padding: '20px 16px 48px', overflowX: 'hidden' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: 22 }}>
              <h1 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>
                {tabs.find(t => t.id === active)?.icon} {tabs.find(t => t.id === active)?.label}
              </h1>
              <div style={{ width: 28, height: 2, background: 'var(--blue)', borderRadius: 2 }} />
            </div>
            {active === 'preditivo' && <TabPreditivo />}
            {active === 'monitoramento' && <TabMonitoramento />}
          </div>
        </main>
      </div>
    </div>
  )
}
