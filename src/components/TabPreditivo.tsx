import React from 'react'
import { sinistros } from '../data'
import KpiCard from './KpiCard'
import Badge from './Badge'

const fontes = [
  { icon: '🏛️', label: 'Receita Federal' },
  { icon: '💳', label: 'Bureau de Crédito' },
  { icon: '⚖️', label: 'Processos Judiciais' },
  { icon: '🔍', label: 'Antecedentes Criminais' },
  { icon: '📋', label: 'Listas Restritivas' },
  { icon: '📰', label: 'Mídias Negativas' },
  { icon: '🗄️', label: 'Histórico CNSeg' },
  { icon: '🏢', label: 'Vínculos Societários' },
]

const fluxo = ['Cotação', 'Proposta', 'API GRC SPS ⚡', 'Subscrição', 'Julgamento', 'Emissão']

function scoreVariant(d: string): 'verde' | 'amarelo' | 'vermelho' {
  if (d === 'verde') return 'verde'
  if (d === 'amarelo') return 'amarelo'
  return 'vermelho'
}

function decisaoLabel(d: string) {
  if (d === 'vermelho') return 'Rejeitar'
  if (d === 'amarelo') return 'Mesa de Risco'
  return 'Emitir'
}

const fmt = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`

export default function TabPreditivo() {
  return (
    <div>
      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 28 }}>
        <KpiCard label="Sinistros suspeitos 2024" value="R$ 5,4bi" sub="13,3% do total" accent="var(--yellow)" />
        <KpiCard label="Fraudes confirmadas" value="R$ 1,1bi" sub="2,68% sobre sinistros" accent="var(--red)" />
        <KpiCard label="Crescimento fraude" value="+23%" sub="2023 → 2024" accent="var(--orange)" />
        <KpiCard label="Setor mais vulnerável" value="34,4%" sub="Transportes — suspeitos" accent="var(--blue)" />
      </div>

      {/* Fluxo */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Fluxo de subscrição com API preditiva</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {fluxo.map((f, i) => (
            <React.Fragment key={f}>
              <div style={{
                padding: '7px 14px', borderRadius: 8, fontSize: 12,
                background: f.includes('GRC') ? 'var(--blue-dim)' : 'var(--bg3)',
                border: `1px solid ${f.includes('GRC') ? 'rgba(59,130,246,0.3)' : 'var(--border)'}`,
                color: f.includes('GRC') ? 'var(--blue)' : 'var(--text2)',
                fontWeight: f.includes('GRC') ? 600 : 400,
              }}>{f}</div>
              {i < fluxo.length - 1 && <span style={{ color: 'var(--text3)', fontSize: 12 }}>→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Fontes */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Fontes de dados consultadas</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 8 }}>
          {fontes.map(f => (
            <div key={f.label} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              border: '1px solid var(--border)', borderRadius: 8,
              padding: '8px 12px', background: 'var(--bg3)',
            }}>
              <span style={{ fontSize: 16 }}>{f.icon}</span>
              <span style={{ fontSize: 12, color: 'var(--text2)' }}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabela */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Resultado da análise — base CNSeg</div>
        <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--bg3)' }}>
                  {['Segurado','CPF','Veículo','Natureza','Valor','Processo','Score','Decisão'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: 'var(--text3)', fontWeight: 500, fontSize: 11, borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sinistros.map((s, i) => (
                  <tr key={i} style={{ borderBottom: i < sinistros.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <td style={{ padding: '10px 12px', color: 'var(--text)', whiteSpace: 'nowrap' }}>{s.nome}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--text2)', fontFamily: 'monospace', fontSize: 12 }}>{s.cpf}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>{s.veiculo}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--text2)', whiteSpace: 'nowrap' }}>{s.natureza}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--text)', whiteSpace: 'nowrap' }}>{fmt(s.valorVeiculo)}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--text2)', maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.processo}</td>
                    <td style={{ padding: '10px 12px' }}>
                      <Badge label={`${s.score}/10`} variant={scoreVariant(s.decisao)} />
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <Badge label={decisaoLabel(s.decisao)} variant={scoreVariant(s.decisao)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Legenda */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {[
          { v: 'verde' as const, label: 'Score 0–3 · Emissão direta' },
          { v: 'amarelo' as const, label: 'Score 4–7 · Mesa de Risco' },
          { v: 'vermelho' as const, label: 'Score 8–10 · Rejeição automática' },
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
