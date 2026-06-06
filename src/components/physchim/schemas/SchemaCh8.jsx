import React from 'react';
import Math from '../Math';

const F = ({ e }) => <Math expr={e} />;

// ─── Schéma Bilan Ch.8 : Radioactivité — fidèle au manuel Hatier ─────────────
export default function SchemaCh8() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Réactions nucléaires — conservation ════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(244,114,182,0.1)', borderBottom: '1px solid rgba(244,114,182,0.15)' }}>
          <span style={{ color: '#f472b6', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚛️ RÉACTIONS NUCLÉAIRES — LOIS DE CONSERVATION</span>
        </div>
        <div className="p-4 space-y-4">

          {/* Équation générale */}
          <div className="rounded-xl px-4 py-3 text-center" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.2)' }}>
            <div className="text-sm mb-2">
              <F e="{}^{A_1}_{Z_1}X_1 + {}^{A_2}_{Z_2}X_2 \;\rightarrow\; {}^{A_3}_{Z_3}X_3 + {}^{A_4}_{Z_4}X_4" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(248,113,113,0.07)', border: '1px solid rgba(248,113,113,0.25)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: '#f87171' }}>Conservation du nombre de masse A</div>
              <div className="text-sm"><F e="A_1 + A_2 = A_3 + A_4" /></div>
            </div>
            <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.25)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: '#38bdf8' }}>Conservation du nombre de charge Z</div>
              <div className="text-sm"><F e="Z_1 + Z_2 = Z_3 + Z_4" /></div>
            </div>
          </div>

          {/* Types de radioactivité */}
          <div>
            <div className="text-xs font-bold mb-2" style={{ color: '#e2e8f0' }}>Différents types de radioactivité</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { type: 'α', label: 'Noyau d\'hélium', particule: '⁴₂He', color: '#fbbf24', bg: 'rgba(251,191,36,0.15)', border: 'rgba(251,191,36,0.4)' },
                { type: 'β⁺', label: 'Positron', particule: '⁰₁e', color: '#38bdf8', bg: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.35)' },
                { type: 'β⁻', label: 'Électron', particule: '⁰₋₁e', color: '#f87171', bg: 'rgba(248,113,113,0.12)', border: 'rgba(248,113,113,0.35)' },
                { type: '—', label: 'Stable', particule: '', color: '#94a3b8', bg: 'rgba(100,116,139,0.12)', border: 'rgba(100,116,139,0.3)' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl px-3 py-2.5 text-center" style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                  <div className="text-base font-bold mb-0.5" style={{ color: item.color }}>{item.type}</div>
                  <div className="text-xs font-semibold" style={{ color: '#e2e8f0' }}>{item.label}</div>
                  {item.particule && <div className="text-xs font-mono mt-0.5" style={{ color: item.color }}>{item.particule}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Diagramme (Z;N) simplifié */}
          <div>
            <div className="text-xs font-bold mb-2" style={{ color: '#94a3b8' }}>Diagramme (Z ; N) — exemple ²⁰⁴Pb</div>
            <svg viewBox="0 0 320 160" className="w-full" style={{ maxHeight: 160 }}>
              <defs>
                <marker id="aZN" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L7,3 z" fill="#64748b" />
                </marker>
                <marker id="aAlpha" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" />
                </marker>
                <marker id="aBetam" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#f87171" />
                </marker>
                <marker id="aBetap" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#38bdf8" />
                </marker>
              </defs>
              {/* Axes */}
              <line x1="50" y1="130" x2="300" y2="130" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aZN)" />
              <line x1="50" y1="130" x2="50" y2="10" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aZN)" />
              <text x="295" y="145" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">Z</text>
              <text x="35" y="14" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">N</text>

              {/* Graduations Z */}
              {[81,82,83,84].map((z,i) => (
                <g key={z}>
                  <line x1={80+i*50} y1="128" x2={80+i*50} y2="132" stroke="#475569" strokeWidth="1" />
                  <text x={80+i*50} y="143" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">{z}</text>
                </g>
              ))}
              {/* Graduations N */}
              {[121,122,123,124].map((n,i) => (
                <g key={n}>
                  <line x1="48" y1={120-i*22} x2="52" y2={120-i*22} stroke="#475569" strokeWidth="1" />
                  <text x="44" y={123-i*22} fontSize="9" fill="#64748b" textAnchor="end" fontFamily="JetBrains Mono">{n}</text>
                </g>
              ))}

              {/* Noyaux */}
              {/* ²⁰⁸₈₄Po — α émetteur (Z=84, N=124) */}
              <rect x="310" y="30" width="22" height="22" rx="4" fill="rgba(251,191,36,0.6)" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="321" y="45" fontSize="8" fill="#1a1a1a" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">²⁰⁸Po</text>

              {/* ²⁰⁴₈₂Pb — stable (Z=82, N=122) */}
              <rect x="160" y="74" width="22" height="22" rx="4" fill="rgba(100,116,139,0.6)" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="171" y="89" fontSize="8" fill="#e2e8f0" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">²⁰⁴Pb</text>

              {/* ²⁰⁴₈₁Tl — β⁻ (Z=81, N=123) */}
              <rect x="110" y="52" width="22" height="22" rx="4" fill="rgba(248,113,113,0.6)" stroke="#f87171" strokeWidth="1.5" />
              <text x="121" y="67" fontSize="8" fill="#1a1a1a" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">²⁰⁴Tl</text>

              {/* ²⁰⁴₈₃Bi — β⁺ (Z=83, N=121) */}
              <rect x="210" y="96" width="22" height="22" rx="4" fill="rgba(56,189,248,0.6)" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="221" y="111" fontSize="8" fill="#1a1a1a" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">²⁰⁴Bi</text>

              {/* Flèche α : Po → Pb (Z-2, N-2) */}
              <line x1="310" y1="41" x2="192" y2="85" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#aAlpha)" />
              <text x="252" y="57" fontSize="9" fill="#fbbf24" fontFamily="JetBrains Mono" fontWeight="700">α</text>

              {/* Flèche β⁻ : Tl → Pb (Z+1, N-1) */}
              <line x1="132" y1="74" x2="162" y2="85" stroke="#f87171" strokeWidth="2" markerEnd="url(#aBetam)" />
              <text x="136" y="74" fontSize="9" fill="#f87171" fontFamily="JetBrains Mono" fontWeight="700">β⁻</text>

              {/* Flèche β⁺ : Bi → Pb (Z-1, N+1) */}
              <line x1="210" y1="96" x2="192" y2="96" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#aBetap)" />
              <text x="218" y="92" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">β⁺</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Évolution temporelle ════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📉 ÉVOLUTION TEMPORELLE — LOI DE DÉCROISSANCE RADIOACTIVE</span>
        </div>
        <div className="p-4 space-y-4">

          {/* Activité et EDO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
                <div className="text-xs font-bold mb-1" style={{ color: '#38bdf8' }}>Par définition</div>
                <div className="text-sm"><F e="A(t) = -\dfrac{dN}{dt}(t)" /></div>
              </div>
              <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
                <div className="text-xs font-bold mb-1" style={{ color: '#38bdf8' }}>Propriété</div>
                <div className="text-sm"><F e="A(t) = \lambda N(t)" /></div>
                <div className="text-xs mt-1" style={{ color: '#64748b' }}>λ = constante radioactive du noyau</div>
              </div>
              <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)' }}>
                <div className="text-xs font-bold mb-1" style={{ color: '#34d399' }}>Demi-vie t₁/₂</div>
                <div className="text-sm"><F e="t_{1/2} = \dfrac{\ln 2}{\lambda}" /></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(168,139,250,0.07)', border: '1px solid rgba(168,139,250,0.2)' }}>
                <div className="text-xs font-bold mb-1" style={{ color: '#a78bfa' }}>Équation différentielle</div>
                <div className="text-sm"><F e="\dfrac{dN}{dt} + \lambda N = 0" /></div>
              </div>
              <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
                <div className="text-xs font-bold mb-1" style={{ color: '#fbbf24' }}>Solution : loi de décroissance</div>
                <div className="text-sm"><F e="N(t) = N_0\,e^{-\lambda t}" /></div>
                <div className="text-xs mt-1"><F e="A(t) = A_0\,e^{-\lambda t}" /></div>
                <div className="text-xs mt-1" style={{ color: '#64748b' }}>N₀ = nombre de noyaux initial</div>
              </div>
            </div>
          </div>

          {/* Courbe N(t) — SVG */}
          <div>
            <div className="text-xs font-bold mb-2" style={{ color: '#e2e8f0' }}>Courbe N(t) — décroissance exponentielle</div>
            <svg viewBox="0 0 420 170" className="w-full" style={{ maxHeight: 170 }}>
              <defs>
                <marker id="aNt" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L7,3 z" fill="#64748b" />
                </marker>
              </defs>
              {/* Axes */}
              <line x1="55" y1="140" x2="400" y2="140" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aNt)" />
              <line x1="55" y1="140" x2="55" y2="10" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aNt)" />
              <text x="402" y="144" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">t</text>
              <text x="30" y="18" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">N</text>

              {/* N0 */}
              <line x1="51" y1="22" x2="59" y2="22" stroke="#94a3b8" strokeWidth="1" />
              <text x="46" y="26" fontSize="9" fill="#94a3b8" textAnchor="end" fontFamily="JetBrains Mono">N₀</text>

              {/* N0/2 */}
              <line x1="51" y1="81" x2="59" y2="81" stroke="#94a3b8" strokeWidth="1" />
              <text x="46" y="85" fontSize="9" fill="#fb923c" textAnchor="end" fontFamily="JetBrains Mono">N₀/2</text>

              {/* Courbe exponentielle */}
              <path d="M55,22 C90,28 140,50 190,81 C230,105 280,122 380,135"
                fill="none" stroke="#38bdf8" strokeWidth="2.5" />

              {/* t et t+t1/2 pointillés */}
              <line x1="140" y1="81" x2="140" y2="143" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="4,3" />
              <line x1="55" y1="81" x2="142" y2="81" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="4,3" />
              <text x="140" y="155" fontSize="9" fill="#fb923c" textAnchor="middle" fontFamily="JetBrains Mono">t</text>

              <line x1="190" y1="81" x2="190" y2="143" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="4,3" />
              <text x="190" y="155" fontSize="9" fill="#fb923c" textAnchor="middle" fontFamily="JetBrains Mono">t+t₁/₂</text>

              {/* Accolade t1/2 */}
              <line x1="140" y1="162" x2="190" y2="162" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="165" y="158" fontSize="8.5" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">t₁/₂</text>

              {/* Label N(t) */}
              <text x="310" y="115" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono">N(t) = N₀e⁻λt</text>
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}