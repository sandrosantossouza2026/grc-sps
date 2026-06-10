import React from 'react'
import { monitorados } from '../data'
import KpiCard from './KpiCard'
import Badge from './Badge'

type Status = 'estavel' | 'atencao' | 'degradacao' | 'critico'

function statusVariant(s: Status): 'verde' | 'amarelo' | 'laranja' | 'vermelho' {
  if (s === 'estavel') return 'verde'
  if (s === 'atencao') return 'amarelo'
  if (s === 'degradacao') return 'laranja'
  return 'vermelho'
}

function statusLabel(s: Status) {
  if (s === 'estavel') return 'Estável'
  if (s === 'atencao') return 'Atenção'
  if (s === 'degradacao') return 'Degradação'
  return 'Crítico'
}

function sddrColor(v: number) {
  if (v <= 30) return 'var(--green)'
  if (v <= 60) return 'var(--yellow)'
  if (v <= 85) return 'var(--orange)'
  return 'var(--red)'
}

function alertIcon(s: Status) {
  if (s === 'critico') return '🔴'
  if (s === 'degradacao') return '🟠'
  return '🟡'
}

const fmt = (v: number) => v > 0 ? `R$ ${v.toLocaleString('pt-BR')}` : '—'

export default function TabMonitoramento() {
  const critico = monitorados.filter(m => m.status === 'critico').length
  const degradacao = monitorados.filter(m => m.status === 'degradacao').length
  const atencao = monitorados.filter(m => m.status === 'atencao').length
  const alertas = monitorados.filter(m => m.status === 'critico' || m.status === 'degradacao')

  return (
    <div>
      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: 28 }}>
        <KpiCard label="Apólices monitoradas" value="12" sub="Carteira ativa" />
        <KpiCard label="Alertas críticos" value={String(critico)} sub="SDDR 86–100" accent="var(--red)" />
        <KpiCard label="Degradação moderada" value={String(degradacao)} sub="SDDR 61–85" accent="var(--orange)" />
        <KpiCard label="Em observação" value={String(atencao)} sub="SDDR 31–60" accent="var(--yellow)" />
      </div>

      {/* Alertas prioritários */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Alertas prioritários</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {alertas.map((m, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              border: `1px solid ${m.status === 'critico' ? 'rgba(239,68,68,0.25)' : 'rgba(249,115,22,0.2)'}`,
              borderRadius: 10, padding: '12px 14px',
              background: m.status === 'critico' ? 'rgba(239,68,68,0.05)' : 'rgba(249,115,22,0.05)',
            }}>
              <span style={{ fontSize: 18, marginTop: 1 }}>{alertIcon(m.status)}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)' }}>{m.nome}</span>
                  <Badge label={`SDDR ${m.sddr}`} variant={statusVariant(m.status)} />
                  <Badge label={statusLabel(m.status)} variant={statusVariant(m.status)} />
                </div>
                <div style={{ fontSize: 12, color: 'var(--text2)' }}>
                  {m.processo}{m.gps ? ` · GPS: ${m.gps}` : ''}{m.vistoria ? ` · ${m.vistoria}` : ''}{m.atendimento24h ? ` · ${m.atendimento24h}` : ''}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 4 }}>→ {m.acao}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabela completa */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Carteira completa — score de degradação (SDDR)</div>
        <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--bg3)' }}>
                  {['Segurado','Apólice','Veículo','Processo','Pendência','SDDR','Status','Ação'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: 'var(--text3)', fontWeight: 500, fontSize: 11, borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {monitorados.map((m, i) => (
                  <tr key={i} style={{ borderBottom: i < monitorados.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <td style={{ padding: '10px 12px', color: 'var(--text)', whiteSpace: 'nowrap' }}>{m.nome}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--text2)', fontFamily: 'monospace', fontSize: 11 }}>{m.apolice}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>{m.veiculo}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--text2)', maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.processo}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--text)', whiteSpace: 'nowrap' }}>{fmt(m.pendencia)}</td>
                    <td style={{ padding: '10px 12px', minWidth: 100 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ flex: 1, height: 4, background: 'var(--border2)', borderRadius: 2, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${m.sddr}%`, background: sddrColor(m.sddr), borderRadius: 2 }} />
                        </div>
                        <span style={{ fontSize: 12, color: sddrColor(m.sddr), fontWeight: 600, minWidth: 24 }}>{m.sddr}</span>
                      </div>
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <Badge label={statusLabel(m.status)} variant={statusVariant(m.status)} />
                    </td>
                    <td style={{ padding: '10px 12px', color: 'var(--text2)', fontSize: 12, maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.acao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Legenda */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 16 }}>
        {[
          { v: 'verde' as const, label: 'SDDR 0–30 · Estável' },
          { v: 'amarelo' as const, label: 'SDDR 31–60 · Atenção' },
          { v: 'laranja' as const, label: 'SDDR 61–85 · Degradação' },
          { v: 'vermelho' as const, label: 'SDDR 86–100 · Crítico' },
        ].map(l => (
          <div key={l.v} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text2)' }}>
            <Badge label={l.v.charAt(0).toUpperCase() + l.v.slice(1)} variant={l.v} />
            <span>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
