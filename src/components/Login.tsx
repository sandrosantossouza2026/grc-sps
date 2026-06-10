import React, { useState } from 'react'
import { ShieldSPS } from './Logo'

interface LoginProps { onLogin: () => void }

export default function Login({ onLogin }: LoginProps) {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true); setError(false)
    setTimeout(() => {
      if (user === 'admin' && pass === 'Grc2026') { onLogin() }
      else { setError(true); setLoading(false) }
    }, 600)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 400, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 16, padding: '40px 36px' }}>

        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <img src="/logo-grc.png" alt="GRC Solutions" style={{ height: 44, width: 'auto' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
            <ShieldSPS size={36} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>GRC SPS</div>
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>Sistema Preditivo para Seguradoras</div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>Acesso restrito</div>
          <div style={{ fontSize: 12, color: 'var(--text3)' }}>Insira suas credenciais para continuar</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={{ fontSize: 11, color: 'var(--text3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 6 }}>Usuário</label>
            <input type="text" value={user} onChange={e => setUser(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()} placeholder="Digite seu usuário"
              style={{ width: '100%', padding: '11px 14px', background: 'var(--bg3)', border: `1px solid ${error ? 'var(--red)' : 'var(--border2)'}`, borderRadius: 8, color: 'var(--text)', fontSize: 13, outline: 'none' }} />
          </div>
          <div>
            <label style={{ fontSize: 11, color: 'var(--text3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 6 }}>Senha</label>
            <input type="password" value={pass} onChange={e => setPass(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()} placeholder="Digite sua senha"
              style={{ width: '100%', padding: '11px 14px', background: 'var(--bg3)', border: `1px solid ${error ? 'var(--red)' : 'var(--border2)'}`, borderRadius: 8, color: 'var(--text)', fontSize: 13, outline: 'none' }} />
          </div>
          {error && <div style={{ fontSize: 12, color: 'var(--red)', textAlign: 'center', background: 'var(--red-dim)', padding: '8px 12px', borderRadius: 6 }}>Usuário ou senha incorretos</div>}
          <button onClick={handleSubmit} disabled={loading || !user || !pass}
            style={{ width: '100%', padding: 12, background: !user || !pass ? 'rgba(59,130,246,0.3)' : 'var(--blue)', border: 'none', borderRadius: 8, color: '#fff', fontWeight: 600, fontSize: 14, cursor: !user || !pass ? 'not-allowed' : 'pointer', marginTop: 4 }}>
            {loading ? 'Verificando...' : 'Entrar'}
          </button>
        </div>
      </div>
      <div style={{ marginTop: 20, fontSize: 11, color: 'var(--text3)' }}>GRC Solutions · Sistema Preditivo para Seguradoras</div>
    </div>
  )
}
