import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';

// ─── Schéma Bilan Ch.20 : Dynamique d'un système électrique (Circuit RC) ─────
export default function SchemaCh20() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Condensateur — définitions ════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔋 CONDENSATEUR — DÉFINITIONS ET RELATIONS</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FormulaBlock expr="q(t) = C\,u_C(t)" title="Charge — tension" color="#38bdf8" compact desc="C en Farads (F)" />
            <FormulaBlock expr="i(t) = C\,\frac{du_C}{dt}" title="Intensité — tension" color="#fbbf24" compact />
            <FormulaBlock expr="\tau = RC" title="Constante de temps" color="#a78bfa" compact desc="R (Ω) · C (F) → τ (s)" />
          </div>
          <ZoomableSVG maxHeight={90} caption="Symbole condensateur — armatures A et B séparées par un isolant — q = C·uAB">
            <svg viewBox="0 0 520 82" style={{ width: '100%' }}>
              <defs>
                <marker id="aC20" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#38bdf8" /></marker>
              </defs>
              {/* Symbole condensateur */}
              <line x1="60" y1="41" x2="195" y2="41" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#aC20)" />
              <line x1="195" y1="18" x2="195" y2="64" stroke="#38bdf8" strokeWidth="3" />
              <line x1="205" y1="18" x2="205" y2="64" stroke="#38bdf8" strokeWidth="3" />
              <line x1="205" y1="41" x2="340" y2="41" stroke="#38bdf8" strokeWidth="1.8" />
              <text x="197" y="15" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">A</text>
              <text x="203" y="75" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">B</text>
              <text x="40" y="44" fontSize="9" fill="#fbbf24" fontFamily="JetBrains Mono">i →</text>
              <text x="190" y="82" fontSize="8" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">uAB</text>

              {/* Formule i = dq/dt */}
              <rect x="360" y="10" width="155" height="62" rx="8" fill="rgba(56,189,248,0.07)" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
              <text x="437" y="28" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Intensité = débit de charge</text>
              <text x="437" y="43" fontSize="11" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">i = dq/dt</text>
              <text x="437" y="58" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="Inter">C ↑ si S ↑ ou distance ↓</text>
            </svg>
          </ZoomableSVG>
        </div>
      </div>

      {/* ══ Bloc 2 : Charge et Décharge — courbes ══════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(168,139,250,0.1)', borderBottom: '1px solid rgba(168,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📈 CHARGE ET DÉCHARGE DU CONDENSATEUR</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormulaBlock expr="u_C(t) = E\!\left(1 - e^{-t/\tau}\right)" title="CHARGE — uC(0) = 0" color="#34d399" compact />
            <FormulaBlock expr="u_C(t) = E\,e^{-t/\tau}" title="DÉCHARGE — uC(0) = E" color="#f87171" compact />
          </div>
          <ZoomableSVG maxHeight={200} caption="Charge (vert) : uC → E exponentiellement · Décharge (rouge) : uC → 0 · tangente en t=0 coupe asymptote en τ">
            <svg viewBox="0 0 520 190" style={{ width: '100%' }}>
              <defs>
                <marker id="aAxC20" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#64748b" /></marker>
              </defs>

              {/* ─ Graphe CHARGE ─ */}
              <rect x="10" y="5" width="240" height="170" rx="8" fill="rgba(52,211,153,0.04)" stroke="rgba(52,211,153,0.2)" strokeWidth="1" />
              <text x="125" y="18" fontSize="9" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">CHARGE</text>
              <line x1="35" y1="155" x2="235" y2="155" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aAxC20)" />
              <line x1="35" y1="155" x2="35" y2="28" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aAxC20)" />
              <text x="238" y="159" fontSize="8.5" fill="#64748b" fontFamily="JetBrains Mono">t</text>
              <text x="22" y="32" fontSize="8.5" fill="#64748b" fontFamily="JetBrains Mono">uc</text>

              {/* Asymptote E */}
              <line x1="35" y1="45" x2="230" y2="45" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="5,3" />
              <text x="28" y="48" fontSize="9" fill="#fbbf24" fontFamily="JetBrains Mono" textAnchor="end">E</text>

              {/* Courbe charge */}
              <path d="M35,155 C60,130 80,90 105,65 C130,45 160,43 230,42"
                fill="none" stroke="#34d399" strokeWidth="2.5" />

              {/* τ charge : 63% de E */}
              <line x1="35" y1="45" x2="35" y2="155" stroke="rgba(52,211,153,0.2)" strokeWidth="1" />
              {/* τ position approximative : ~37% du chemin horizontal */}
              <line x1="100" y1="150" x2="100" y2="161" stroke="#a78bfa" strokeWidth="1.5" />
              <text x="100" y="170" fontSize="8.5" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono">τ</text>
              {/* Niveau 63%E */}
              <line x1="30" y1="82" x2="103" y2="82" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3,2" />
              <text x="26" y="85" fontSize="7.5" fill="#a78bfa" textAnchor="end" fontFamily="JetBrains Mono">0,63E</text>
              <circle cx="100" cy="82" r="3.5" fill="#a78bfa" />

              {/* Tangente à l'origine */}
              <line x1="35" y1="155" x2="100" y2="45" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4,3" />
              <text x="55" y="112" fontSize="8" fill="#fb923c" fontFamily="Inter">Tangente</text>
              <text x="55" y="122" fontSize="7.5" fill="#fb923c" fontFamily="Inter">→ coupe E en τ</text>

              {/* ─ Graphe DÉCHARGE ─ */}
              <rect x="270" y="5" width="240" height="170" rx="8" fill="rgba(248,113,113,0.04)" stroke="rgba(248,113,113,0.2)" strokeWidth="1" />
              <text x="390" y="18" fontSize="9" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">DÉCHARGE</text>
              <line x1="295" y1="155" x2="495" y2="155" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aAxC20)" />
              <line x1="295" y1="155" x2="295" y2="28" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aAxC20)" />
              <text x="498" y="159" fontSize="8.5" fill="#64748b" fontFamily="JetBrains Mono">t</text>
              <text x="282" y="32" fontSize="8.5" fill="#64748b" fontFamily="JetBrains Mono">uc</text>

              {/* Valeur initiale E */}
              <text x="288" y="47" fontSize="9" fill="#f87171" fontFamily="JetBrains Mono" textAnchor="end">E</text>

              {/* Courbe décharge */}
              <path d="M295,45 C320,55 345,80 370,108 C395,130 420,148 490,153"
                fill="none" stroke="#f87171" strokeWidth="2.5" />

              {/* τ décharge */}
              <line x1="360" y1="150" x2="360" y2="161" stroke="#a78bfa" strokeWidth="1.5" />
              <text x="360" y="170" fontSize="8.5" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono">τ</text>
              {/* Niveau 37%E */}
              <line x1="290" y1="112" x2="363" y2="112" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3,2" />
              <text x="287" y="115" fontSize="7.5" fill="#a78bfa" textAnchor="end" fontFamily="JetBrains Mono">0,37E</text>
              <circle cx="360" cy="112" r="3.5" fill="#a78bfa" />

              {/* Tangente à l'origine décharge */}
              <line x1="295" y1="45" x2="360" y2="155" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="4,3" />
              <text x="318" y="85" fontSize="8" fill="#fb923c" fontFamily="Inter">Tangente</text>
              <text x="318" y="95" fontSize="7.5" fill="#fb923c" fontFamily="Inter">→ coupe 0 en τ</text>
            </svg>
          </ZoomableSVG>
          <SchemaLegend cols={4} items={[
            { color: '#34d399', label: 'Charge', detail: 'uC → E en 5τ' },
            { color: '#f87171', label: 'Décharge', detail: 'uC → 0 en 5τ' },
            { color: '#a78bfa', label: 'τ = RC', detail: '63% (charge) / 37% (décharge)' },
            { color: '#fb923c', label: 'Tangente origine', detail: 'coupe asymptote en t = τ' },
          ]} />
        </div>
      </div>

      {/* ══ Bloc 3 : Tableau charge / décharge ══════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.2)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)' }}>
          <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📋 TABLEAU COMPARATIF CHARGE / DÉCHARGE</span>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full text-xs" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['', 'EN CHARGE', 'EN DÉCHARGE'].map((h, i) => (
                    <th key={i} className="px-3 py-2 text-left" style={{
                      background: i === 0 ? 'rgba(100,116,139,0.15)' : i === 1 ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)',
                      color: i === 0 ? '#94a3b8' : i === 1 ? '#34d399' : '#f87171',
                      border: '1px solid rgba(255,255,255,0.05)',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Équation différentielle', 'RC·duC/dt + uC = E', 'RC·duC/dt + uC = 0'],
                  ['Condition initiale', 'uC(0) = 0', 'uC(0) = U₀'],
                  ['Solution', 'uC(t) = E(1 − e^{−t/τ})', 'uC(t) = U₀·e^{−t/τ}'],
                  ['Temps caractéristique τ', 'τ = RC', 'τ = RC'],
                  ['À t = τ', 'uC(τ) ≈ 0,63E', 'uC(τ) ≈ 0,37U₀'],
                  ['Régime permanent (t≥5τ)', 'uC → E  (i → 0)', 'uC → 0  (i → 0)'],
                  ['Comportement cond.', 'Court-circuit (t=0), ouvert (t→∞)', 'Court-circuit (t=0), ouvert (t→∞)'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                    <td className="px-3 py-2" style={{ color: '#94a3b8', border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>{row[0]}</td>
                    <td className="px-3 py-2" style={{ color: '#34d399', border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'JetBrains Mono, monospace' }}>{row[1]}</td>
                    <td className="px-3 py-2" style={{ color: '#f87171', border: '1px solid rgba(255,255,255,0.05)', fontFamily: 'JetBrains Mono, monospace' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}