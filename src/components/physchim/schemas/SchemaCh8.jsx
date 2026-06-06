import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';
import { InlineF } from '../FormulaBlock';

// ─── Schéma Bilan Ch.8 : Radioactivité ───────────────────────────────────────
export default function SchemaCh8() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Réactions nucléaires ═══════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(244,114,182,0.1)', borderBottom: '1px solid rgba(244,114,182,0.15)' }}>
          <span style={{ color: '#f472b6', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚛️ RÉACTIONS NUCLÉAIRES — LOIS DE CONSERVATION</span>
        </div>
        <div className="p-4 space-y-4">

          {/* Équation générale */}
          <FormulaBlock
            expr="{}^{A_1}_{Z_1}X_1 + {}^{A_2}_{Z_2}X_2 \;\longrightarrow\; {}^{A_3}_{Z_3}X_3 + {}^{A_4}_{Z_4}X_4"
            color="#f472b6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormulaBlock
              expr="A_1 + A_2 = A_3 + A_4"
              title="Conservation du nombre de masse A"
              color="#f87171"
            />
            <FormulaBlock
              expr="Z_1 + Z_2 = Z_3 + Z_4"
              title="Conservation du nombre de charge Z"
              color="#38bdf8"
            />
          </div>

          {/* Types de radioactivité */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { type: 'α', label: 'Noyau d\'hélium', particule: '{}^4_2\\text{He}', color: '#fbbf24', bg: 'rgba(251,191,36,0.15)' },
              { type: 'β⁺', label: 'Positron', particule: '{}^0_1\\text{e}', color: '#38bdf8', bg: 'rgba(56,189,248,0.12)' },
              { type: 'β⁻', label: 'Électron', particule: '{}^0_{-1}\\text{e}', color: '#f87171', bg: 'rgba(248,113,113,0.12)' },
              { type: '—', label: 'Stable', particule: null, color: '#94a3b8', bg: 'rgba(100,116,139,0.12)' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl px-3 py-2.5 text-center" style={{ background: item.bg, border: `1px solid ${item.color}35` }}>
                <div className="text-base font-bold mb-0.5" style={{ color: item.color, fontFamily: 'JetBrains Mono, monospace' }}>{item.type}</div>
                <div className="text-xs font-semibold mb-1" style={{ color: '#e2e8f0' }}>{item.label}</div>
                {item.particule && <InlineF e={item.particule} />}
              </div>
            ))}
          </div>

          {/* Diagramme (Z;N) */}
          <div>
            <div className="text-xs font-bold mb-2" style={{ color: '#94a3b8' }}>Diagramme (Z ; N)</div>
            <ZoomableSVG maxHeight={180} caption="Les flèches montrent le déplacement dans le diagramme selon le type de désintégration">
              <svg viewBox="0 0 320 160" style={{ width: '100%' }}>
                <defs>
                  <marker id="aZN8" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#64748b" /></marker>
                  <marker id="aAlpha8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" /></marker>
                  <marker id="aBetam8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f87171" /></marker>
                  <marker id="aBetap8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#38bdf8" /></marker>
                </defs>
                <line x1="50" y1="130" x2="300" y2="130" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aZN8)" />
                <line x1="50" y1="130" x2="50" y2="10" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aZN8)" />
                <text x="295" y="145" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">Z</text>
                <text x="35" y="14" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">N</text>
                {[81,82,83,84].map((z,i) => (
                  <g key={z}>
                    <line x1={80+i*50} y1="128" x2={80+i*50} y2="132" stroke="#475569" strokeWidth="1" />
                    <text x={80+i*50} y="143" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">{z}</text>
                  </g>
                ))}
                {[121,122,123,124].map((n,i) => (
                  <g key={n}>
                    <line x1="48" y1={120-i*22} x2="52" y2={120-i*22} stroke="#475569" strokeWidth="1" />
                    <text x="44" y={123-i*22} fontSize="9" fill="#64748b" textAnchor="end" fontFamily="JetBrains Mono">{n}</text>
                  </g>
                ))}
                {/* ²⁰⁸Po (Z=84, N=124) */}
                <rect x="305" y="30" width="22" height="22" rx="4" fill="rgba(251,191,36,0.7)" stroke="#fbbf24" strokeWidth="1.5" />
                <text x="316" y="45" fontSize="7.5" fill="#1a1a1a" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">²⁰⁸Po</text>
                {/* ²⁰⁴Pb (Z=82, N=122) stable */}
                <rect x="155" y="74" width="22" height="22" rx="4" fill="rgba(100,116,139,0.7)" stroke="#94a3b8" strokeWidth="1.5" />
                <text x="166" y="89" fontSize="7.5" fill="#e2e8f0" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">²⁰⁴Pb</text>
                {/* ²⁰⁴Tl β⁻ (Z=81, N=123) */}
                <rect x="105" y="52" width="22" height="22" rx="4" fill="rgba(248,113,113,0.7)" stroke="#f87171" strokeWidth="1.5" />
                <text x="116" y="67" fontSize="7.5" fill="#1a1a1a" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">²⁰⁴Tl</text>
                {/* ²⁰⁴Bi β⁺ (Z=83, N=121) */}
                <rect x="205" y="96" width="22" height="22" rx="4" fill="rgba(56,189,248,0.7)" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="216" y="111" fontSize="7.5" fill="#1a1a1a" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">²⁰⁴Bi</text>
                {/* Flèche α */}
                <line x1="305" y1="41" x2="177" y2="78" stroke="#fbbf24" strokeWidth="2.2" markerEnd="url(#aAlpha8)" />
                <text x="244" y="52" fontSize="9" fill="#fbbf24" fontFamily="JetBrains Mono" fontWeight="700">α</text>
                {/* Flèche β⁻ */}
                <line x1="127" y1="74" x2="157" y2="85" stroke="#f87171" strokeWidth="2.2" markerEnd="url(#aBetam8)" />
                <text x="122" y="71" fontSize="9" fill="#f87171" fontFamily="JetBrains Mono" fontWeight="700">β⁻</text>
                {/* Flèche β⁺ */}
                <line x1="205" y1="96" x2="185" y2="96" stroke="#38bdf8" strokeWidth="2.2" markerEnd="url(#aBetap8)" />
                <text x="213" y="91" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">β⁺</text>
              </svg>
            </ZoomableSVG>
            <SchemaLegend cols={4} items={[
              { color: '#fbbf24', label: 'α', detail: '−2Z, −2N' },
              { color: '#f87171', label: 'β⁻', detail: '+1Z, −1N' },
              { color: '#38bdf8', label: 'β⁺', detail: '−1Z, +1N' },
              { color: '#94a3b8', label: 'Stable', detail: 'noyau fils' },
            ]} />
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Décroissance radioactive ═══════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📉 ÉVOLUTION TEMPORELLE — LOI DE DÉCROISSANCE</span>
        </div>
        <div className="p-4 space-y-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-3">
              <FormulaBlock expr="A(t) = -\dfrac{dN}{dt}" title="Activité — définition" color="#38bdf8"
                desc="Exprimée en becquerels (Bq) = désintégrations par seconde" />
              <FormulaBlock expr="A(t) = \lambda\, N(t)" title="Propriété" color="#38bdf8"
                desc="λ = constante radioactive du noyau" />
              <FormulaBlock expr="t_{1/2} = \dfrac{\ln 2}{\lambda}" title="Demi-vie t₁/₂" color="#34d399"
                desc="Durée pour que N diminue de moitié" />
            </div>
            <div className="space-y-3">
              <FormulaBlock expr="\dfrac{dN}{dt} + \lambda\, N = 0" title="Équation différentielle" color="#a78bfa" />
              <FormulaBlock expr="N(t) = N_0\,e^{-\lambda t}" title="Solution — loi de décroissance" color="#fbbf24"
                desc="N₀ = nombre de noyaux initial" />
              <FormulaBlock expr="A(t) = A_0\,e^{-\lambda t}" color="#fbbf24" compact />
            </div>
          </div>

          {/* Courbe N(t) */}
          <ZoomableSVG maxHeight={180} caption="N(t) = N₀·e^(−λt) — courbe de décroissance exponentielle">
            <svg viewBox="0 0 420 170" style={{ width: '100%' }}>
              <defs>
                <marker id="aNt8" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#64748b" /></marker>
              </defs>
              <line x1="55" y1="140" x2="400" y2="140" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aNt8)" />
              <line x1="55" y1="140" x2="55" y2="10" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aNt8)" />
              <text x="402" y="144" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">t</text>
              <text x="30" y="18" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">N</text>
              <line x1="51" y1="22" x2="59" y2="22" stroke="#94a3b8" strokeWidth="1" />
              <text x="46" y="26" fontSize="9" fill="#94a3b8" textAnchor="end" fontFamily="JetBrains Mono">N₀</text>
              <line x1="51" y1="81" x2="59" y2="81" stroke="#94a3b8" strokeWidth="1" />
              <text x="46" y="85" fontSize="9" fill="#fb923c" textAnchor="end" fontFamily="JetBrains Mono">N₀/2</text>
              <path d="M55,22 C90,28 140,50 190,81 C230,105 280,122 380,135" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="140" y1="81" x2="140" y2="143" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="4,3" />
              <line x1="55" y1="81" x2="142" y2="81" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="4,3" />
              <text x="140" y="155" fontSize="9" fill="#fb923c" textAnchor="middle" fontFamily="JetBrains Mono">t</text>
              <line x1="190" y1="81" x2="190" y2="143" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="4,3" />
              <text x="190" y="155" fontSize="9" fill="#fb923c" textAnchor="middle" fontFamily="JetBrains Mono">t+t₁/₂</text>
              <line x1="140" y1="163" x2="190" y2="163" stroke="#fbbf24" strokeWidth="2" />
              <line x1="140" y1="159" x2="140" y2="167" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="190" y1="159" x2="190" y2="167" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="165" y="158" fontSize="8.5" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">t₁/₂</text>
              <text x="295" y="112" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono" opacity="0.9">N(t) = N₀e⁻λt</text>
            </svg>
          </ZoomableSVG>

        </div>
      </div>

    </div>
  );
}