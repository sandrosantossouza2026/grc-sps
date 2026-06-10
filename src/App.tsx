import React, { useState } from 'react'
import TabPreditivo from './components/TabPreditivo'
import TabMonitoramento from './components/TabMonitoramento'

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

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
            zIndex: 40, display: 'none',
          }}
          className="mobile-overlay"
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Logo */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '20px 16px 24px', borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: 'var(--blue)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>GRC SPS</div>
            <div style={{ fontSize: 10, color: 'var(--text3)', lineHeight: 1.3 }}>Sistema Preditivo<br/>para Seguradoras</div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: '16px 10px', flex: 1 }}>
          <div style={{ fontSize: 10, color: 'var(--text3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '0 8px', marginBottom: 8 }}>Módulos</div>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => handleNav(t.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                width: '100%', padding: '10px 10px', marginBottom: 2,
                borderRadius: 8, border: 'none', cursor: 'pointer',
                background: active === t.id ? 'var(--blue-dim)' : 'transparent',
                color: active === t.id ? 'var(--blue)' : 'var(--text2)',
                fontWeight: active === t.id ? 600 : 400,
                fontSize: 13, textAlign: 'left',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              <span style={{ fontSize: 16, width: 20, textAlign: 'center' }}>{t.icon}</span>
              <span>{t.label}</span>
              {active === t.id && (
                <span style={{ marginLeft: 'auto', width: 4, height: 4, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border)' }}>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>
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
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text)', padding: 8, borderRadius: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>GRC SPS</span>
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: '28px 24px 48px', overflowX: 'hidden' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            {/* Page title */}
            <div style={{ marginBottom: 24 }}>
              <h1 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>
                {tabs.find(t => t.id === active)?.icon} {tabs.find(t => t.id === active)?.label}
              </h1>
              <div style={{ width: 32, height: 2, background: 'var(--blue)', borderRadius: 2 }} />
            </div>
            {active === 'preditivo' && <TabPreditivo />}
            {active === 'monitoramento' && <TabMonitoramento />}
          </div>
        </main>
      </div>
    </div>
  )
}
