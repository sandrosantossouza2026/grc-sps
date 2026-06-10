import React, { useState } from 'react'
import TabPreditivo from './components/TabPreditivo'
import TabMonitoramento from './components/TabMonitoramento'
import Login from './components/Login'
import LogoIcon, { LogoFull } from './components/Logo'

type Tab = 'preditivo' | 'monitoramento'

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'preditivo', label: 'Sistema Preditivo', icon: '⚡' },
  { id: 'monitoramento', label: 'Monitoramento de Carteira', icon: '📡' },
]

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [active, setActive] = useState<Tab>('preditivo')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />

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
          padding: '20px 16px 20px',
          borderBottom: '1px solid var(--border)',
        }}>
          <LogoFull />
        </div>

        {/* Nav */}
        <nav style={{ padding: '18px 10px', flex: 1 }}>
          <div style={{ fontSize: 10, color: 'var(--text3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', padding: '0 10px', marginBottom: 10 }}>Módulos</div>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => handleNav(t.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                width: '100%', padding: '11px 12px', marginBottom: 4,
                borderRadius: 10, border: 'none', cursor: 'pointer',
                background: active === t.id ? 'var(--blue-dim)' : 'transparent',
                color: active === t.id ? 'var(--blue)' : 'var(--text2)',
                fontWeight: active === t.id ? 600 : 400,
                fontSize: 13, textAlign: 'left',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              <span style={{ fontSize: 16, width: 20, textAlign: 'center', flexShrink: 0 }}>{t.icon}</span>
              <span style={{ flex: 1 }}>{t.label}</span>
              {active === t.id && (
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
              )}
            </button>
          ))}
        </nav>

        {/* Footer com logout */}
        <div style={{ padding: '14px 16px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>
            {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
          </div>
          <button
            onClick={() => setLoggedIn(false)}
            title="Sair"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text3)', fontSize: 11, padding: '4px 6px',
              borderRadius: 6, transition: 'color 0.15s',
            }}
          >
            Sair
          </button>
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
            <LogoIcon size={26} />
            <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>GRC SPS</span>
          </div>
        </header>

        {/* Content */}
        <main style={{ flex: 1, padding: '20px 20px 48px 16px', overflowX: 'hidden' }}>
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
