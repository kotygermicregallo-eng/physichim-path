import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';

// ─── Schéma Bilan Ch.17 : Phénomènes ondulatoires ────────────────────────────
export default function SchemaCh17() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Diffraction ════════════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🌊 DIFFRACTION — FENTE ET FIL</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormulaBlock expr="\theta = \frac{\lambda}{a}" title="Angle caractéristique de diffraction" color="#38bdf8" desc="θ en rad · λ et a même unité — condition : a ≤ 100λ" />
            <FormulaBlock expr="L = \frac{2D\lambda}{a}" title="Largeur tache centrale (fente)" color="#fbbf24" desc="D : distance fente-écran · a : largeur fente" />
          </div>
          <ZoomableSVG maxHeight={165} caption="Laser → fente largeur a → tache centrale L sur écran à distance D — θ = λ/a (petits angles : tan θ ≈ θ)">
            <svg viewBox="0 0 520 155" style={{ width: '100%' }}>
              <defs>
                <marker id="aD17" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#38bdf8" /></marker>
                <marker id="aD17y" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fbbf24" /></marker>
              </defs>

              {/* Laser */}
              <rect x="5" y="68" width="48" height="22" rx="6" fill="rgba(248,113,113,0.25)" stroke="#f87171" strokeWidth="1.5" />
              <text x="29" y="82" fontSize="9" fill="#f87171" textAnchor="middle" fontFamily="Inter" fontWeight="600">Laser</text>
              {/* Faisceau incident */}
              <line x1="53" y1="79" x2="115" y2="79" stroke="#f87171" strokeWidth="2.5" markerEnd="url(#aD17)" />

              {/* Fente */}
              <rect x="118" y="5" width="10" height="65" rx="2" fill="#475569" />
              <rect x="118" y="88" width="10" height="65" rx="2" fill="#475569" />
              <text x="123" y="155" fontSize="8.5" fill="#38bdf8" textAnchor="middle" fontFamily="Inter">Fente a</text>
              {/* accolade a */}
              <line x1="132" y1="70" x2="132" y2="88" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="128" y1="70" x2="136" y2="70" stroke="#38bdf8" strokeWidth="1.2" />
              <line x1="128" y1="88" x2="136" y2="88" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="140" y="82" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono">a</text>

              {/* Rayons diffractés — faisceau étalé */}
              <line x1="128" y1="79" x2="370" y2="30" stroke="rgba(56,189,248,0.5)" strokeWidth="1.2" />
              <line x1="128" y1="79" x2="370" y2="79" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#aD17)" />
              <line x1="128" y1="79" x2="370" y2="128" stroke="rgba(56,189,248,0.5)" strokeWidth="1.2" />
              {/* Zone diffractée remplie */}
              <path d="M128,79 L370,30 L370,128 Z" fill="rgba(56,189,248,0.08)" />

              {/* Axe D */}
              <line x1="128" y1="140" x2="370" y2="140" stroke="#475569" strokeWidth="1.2" strokeDasharray="4,3" />
              <line x1="128" y1="136" x2="128" y2="144" stroke="#475569" strokeWidth="1" />
              <line x1="370" y1="136" x2="370" y2="144" stroke="#475569" strokeWidth="1" />
              <line x1="245" y1="140" x2="245" y2="140" />
              <text x="245" y="153" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">D</text>
              <line x1="128" y1="143" x2="370" y2="143" stroke="#475569" strokeWidth="1" />

              {/* Écran */}
              <rect x="370" y="5" width="8" height="148" rx="2" fill="#334155" />
              <text x="390" y="12" fontSize="8.5" fill="#94a3b8" fontFamily="Inter">Écran</text>

              {/* Tache centrale L */}
              <rect x="378" y="30" width="10" height="98" rx="2" fill="rgba(251,191,36,0.4)" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="395" y1="30" x2="395" y2="128" stroke="#fbbf24" strokeWidth="1.5" />
              <line x1="391" y1="30" x2="399" y2="30" stroke="#fbbf24" strokeWidth="1" />
              <line x1="391" y1="128" x2="399" y2="128" stroke="#fbbf24" strokeWidth="1" />
              <text x="408" y="82" fontSize="9.5" fill="#fbbf24" fontFamily="JetBrains Mono" fontWeight="700">L</text>
              <text x="408" y="93" fontSize="7.5" fill="#64748b" fontFamily="Inter">= 2Dλ/a</text>

              {/* 1ère extinction */}
              <text x="350" y="30" fontSize="7.5" fill="#64748b" textAnchor="end" fontFamily="Inter">1ère extinction</text>
              <text x="350" y="130" fontSize="7.5" fill="#64748b" textAnchor="end" fontFamily="Inter">1ère extinction</text>

              {/* θ */}
              <path d="M155,79 Q165,72 172,68" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="170" y="67" fontSize="9" fill="#fbbf24" fontFamily="JetBrains Mono" fontWeight="700">θ</text>
              <text x="155" y="96" fontSize="9" fill="#fbbf24" fontFamily="JetBrains Mono">= λ/a</text>

              {/* Condition */}
              <rect x="435" y="55" width="82" height="42" rx="6" fill="rgba(56,189,248,0.08)" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
              <text x="476" y="69" fontSize="8.5" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Condition</text>
              <text x="476" y="82" fontSize="8" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">0 ≤ a ≤ 100λ</text>
              <text x="476" y="92" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">(visible si a ≈ λ)</text>
            </svg>
          </ZoomableSVG>
        </div>
      </div>

      {/* ══ Bloc 2 : Interférences — Trous de Young ═════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)' }}>
          <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>✨ INTERFÉRENCES — TROUS DE YOUNG</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormulaBlock expr="\delta = \frac{a \cdot x}{D} = d_2 - d_1" title="Différence de marche" color="#34d399" desc="a : écart entre trous · x : position sur l'écran · D : distance" />
            <FormulaBlock expr="i = \frac{\lambda D}{a}" title="Interfrange" color="#a78bfa" desc="Distance entre deux franges brillantes (ou sombres) successives" />
          </div>

          {/* Tableau constructives/destructives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl p-3" style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: '#34d399' }}>✦ Interférences CONSTRUCTIVES</div>
              <div className="text-xs space-y-1" style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
                <div>δ = k·λ  (k ∈ ℤ)</div>
                <div style={{ color: '#34d399' }}>→ Maximum de lumière</div>
                <div>Ondes en phase</div>
              </div>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: '#f87171' }}>✦ Interférences DESTRUCTIVES</div>
              <div className="text-xs space-y-1" style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
                <div>δ = (k + ½)·λ  (k ∈ ℤ)</div>
                <div style={{ color: '#f87171' }}>→ Minimum (extinction)</div>
                <div>Ondes en opposition de phase</div>
              </div>
            </div>
          </div>

          <ZoomableSVG maxHeight={170} caption="Source S → deux fentes S₁S₂ (écart a) → franges sur écran à D — interfrange i = λD/a">
            <svg viewBox="0 0 520 162" style={{ width: '100%' }}>
              <defs>
                <marker id="aY17" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#34d399" /></marker>
                <marker id="aY17b" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#a78bfa" /></marker>
              </defs>

              {/* Source */}
              <circle cx="28" cy="81" r="10" fill="rgba(251,191,36,0.3)" stroke="#fbbf24" strokeWidth="2" />
              <text x="28" y="84" fontSize="9" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">S</text>
              <text x="28" y="100" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">Source λ</text>

              {/* Rayons vers fentes */}
              <line x1="38" y1="78" x2="130" y2="55" stroke="rgba(251,191,36,0.6)" strokeWidth="1.2" />
              <line x1="38" y1="84" x2="130" y2="107" stroke="rgba(251,191,36,0.6)" strokeWidth="1.2" />

              {/* Plan des fentes */}
              <rect x="133" y="5" width="8" height="42" rx="2" fill="#475569" />
              <rect x="133" y="118" width="8" height="42" rx="2" fill="#475569" />
              {/* S1, S2 */}
              <circle cx="137" cy="55" r="4" fill="#38bdf8" />
              <circle cx="137" cy="107" r="4" fill="#38bdf8" />
              <text x="120" y="53" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">S₁</text>
              <text x="120" y="110" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">S₂</text>
              {/* accolade a */}
              <line x1="148" y1="55" x2="148" y2="107" stroke="#38bdf8" strokeWidth="1.2" />
              <line x1="144" y1="55" x2="152" y2="55" stroke="#38bdf8" strokeWidth="1" />
              <line x1="144" y1="107" x2="152" y2="107" stroke="#38bdf8" strokeWidth="1" />
              <text x="155" y="84" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono">a</text>

              {/* Rayons vers écran */}
              <line x1="141" y1="55" x2="350" y2="40" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
              <line x1="141" y1="55" x2="350" y2="81" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
              <line x1="141" y1="107" x2="350" y2="81" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
              <line x1="141" y1="107" x2="350" y2="122" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
              <line x1="141" y1="55" x2="350" y2="122" stroke="rgba(56,189,248,0.3)" strokeWidth="0.8" strokeDasharray="3,3" />
              <line x1="141" y1="107" x2="350" y2="40" stroke="rgba(52,211,153,0.3)" strokeWidth="0.8" strokeDasharray="3,3" />

              {/* Écran */}
              <rect x="350" y="5" width="8" height="155" rx="2" fill="#334155" />
              {/* Franges */}
              {[16, 36, 57, 77, 97, 117, 137].map((y, i) => (
                <rect key={i} x="358" y={y} width="12" height={i % 2 === 0 ? 14 : 12} rx="1"
                  fill={i % 2 === 0 ? 'rgba(251,191,36,0.7)' : 'rgba(100,116,139,0.15)'}
                  stroke={i % 2 === 0 ? '#fbbf24' : 'none'} strokeWidth="0.8" />
              ))}
              <text x="375" y="12" fontSize="8.5" fill="#fbbf24" fontFamily="Inter">Brillante</text>
              <text x="375" y="32" fontSize="8" fill="#64748b" fontFamily="Inter">Sombre</text>
              <text x="375" y="50" fontSize="8.5" fill="#fbbf24" fontFamily="Inter">Brillante</text>

              {/* D */}
              <line x1="137" y1="148" x2="350" y2="148" stroke="#475569" strokeWidth="1" strokeDasharray="4,3" />
              <text x="240" y="158" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">D</text>

              {/* x et delta */}
              <line x1="358" y1="81" x2="358" y2="57" stroke="#a78bfa" strokeWidth="1.5" />
              <text x="340" y="70" fontSize="9" fill="#a78bfa" fontFamily="JetBrains Mono">x</text>
              <line x1="380" y1="57" x2="380" y2="77" stroke="#a78bfa" strokeWidth="1.5" />
              <line x1="376" y1="57" x2="384" y2="57" stroke="#a78bfa" strokeWidth="1" />
              <line x1="376" y1="77" x2="384" y2="77" stroke="#a78bfa" strokeWidth="1" />
              <text x="385" y="70" fontSize="9.5" fill="#a78bfa" fontFamily="JetBrains Mono" fontWeight="700">i</text>

              {/* d1 et d2 */}
              <text x="220" y="55" fontSize="8" fill="#38bdf8" fontFamily="JetBrains Mono">d₁</text>
              <text x="220" y="100" fontSize="8" fill="#34d399" fontFamily="JetBrains Mono">d₂</text>
              <text x="220" y="115" fontSize="7.5" fill="#64748b" fontFamily="Inter">δ = d₂−d₁ = ax/D</text>

              {/* Condition synchronisme */}
              <rect x="435" y="45" width="82" height="35" rx="6" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.25)" strokeWidth="1" />
              <text x="476" y="58" fontSize="8" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Condition</text>
              <text x="476" y="70" fontSize="7.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Ondes synchrones</text>
              <text x="476" y="79" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">(même fréquence)</text>
            </svg>
          </ZoomableSVG>
          <SchemaLegend cols={3} items={[
            { color: '#38bdf8', label: 'Source S, fentes S₁S₂', detail: 'Écart a entre fentes' },
            { color: '#fbbf24', label: 'Franges brillantes', detail: 'δ = kλ' },
            { color: '#a78bfa', label: 'Interfrange i', detail: 'i = λD/a' },
          ]} />
        </div>
      </div>

      {/* ══ Bloc 3 : Effet Doppler ══════════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(248,113,113,0.1)', borderBottom: '1px solid rgba(248,113,113,0.15)' }}>
          <span style={{ color: '#f87171', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🚑 EFFET DOPPLER</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormulaBlock expr="f_{r,\text{app}} = \frac{f_e}{1 - \frac{v}{c}} > f_e" title="Émetteur s'approche du récepteur" color="#34d399" desc="Son perçu plus aigu" />
            <FormulaBlock expr="f_{r,\text{él}} = \frac{f_e}{1 + \frac{v}{c}} < f_e" title="Émetteur s'éloigne du récepteur" color="#f87171" desc="Son perçu plus grave" />
          </div>
          <ZoomableSVG maxHeight={100} caption="δf = |fr − fe| : décalage Doppler — v : vitesse de l'émetteur · c : célérité de l'onde">
            <svg viewBox="0 0 520 95" style={{ width: '100%' }}>
              <defs>
                <marker id="aE17" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#34d399" /></marker>
                <marker id="aE17b" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f87171" /></marker>
              </defs>
              {/* Approche */}
              <rect x="5" y="8" width="245" height="78" rx="8" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.25)" strokeWidth="1.2" />
              <text x="125" y="21" fontSize="9" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">E s'approche de R</text>
              <rect x="18" y="30" width="32" height="18" rx="4" fill="rgba(56,189,248,0.3)" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="34" y="42" fontSize="8" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">E</text>
              <line x1="50" y1="39" x2="78" y2="39" stroke="#34d399" strokeWidth="2" markerEnd="url(#aE17)" />
              <text x="63" y="34" fontSize="8.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">v→</text>
              {/* Ondes comprimées (rapprochées) */}
              {[100, 116, 128, 138, 146].map((x, i) => (
                <path key={i} d={`M${x},28 Q${x+5},38 ${x},49`} fill="none" stroke="#34d399" strokeWidth={1.5 - i * 0.15} />
              ))}
              <rect x="185" y="28" width="28" height="22" rx="4" fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth="1.2" />
              <text x="199" y="42" fontSize="8" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">R</text>
              <text x="125" y="72" fontSize="8.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">fr &gt; fe — son aigu ↑</text>

              {/* Éloignement */}
              <rect x="270" y="8" width="245" height="78" rx="8" fill="rgba(248,113,113,0.06)" stroke="rgba(248,113,113,0.25)" strokeWidth="1.2" />
              <text x="392" y="21" fontSize="9" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">E s'éloigne de R</text>
              <rect x="283" y="30" width="32" height="18" rx="4" fill="rgba(56,189,248,0.3)" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="299" y="42" fontSize="8" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">E</text>
              <line x1="316" y1="39" x2="348" y2="39" stroke="#f87171" strokeWidth="2" markerEnd="url(#aE17b)" />
              <text x="332" y="34" fontSize="8.5" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono">v→</text>
              {/* Ondes dilatées (écartées) */}
              {[290, 302, 318, 340, 370].map((x, i) => (
                <path key={i} d={`M${x + 270 - 270},28 Q${x + 270 - 265},38 ${x + 270 - 270},49`} fill="none" stroke="#f87171" strokeWidth={1.5} />
              ))}
              {/* Récepteur R */}
              <rect x="455" y="28" width="28" height="22" rx="4" fill="rgba(248,113,113,0.2)" stroke="#f87171" strokeWidth="1.2" />
              <text x="469" y="42" fontSize="8" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">R</text>
              <text x="392" y="72" fontSize="8.5" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono">fr &lt; fe — son grave ↓</text>
            </svg>
          </ZoomableSVG>
          <div className="rounded-xl px-3 py-2.5 text-xs" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
            <span style={{ color: '#fbbf24', fontWeight: 700 }}>Décalage Doppler : </span>
            <span style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>δf = |fr − fe|</span>
            <span style={{ color: '#64748b' }}> — Applications : radar, ultrasonographie, vitesse des étoiles</span>
          </div>
        </div>
      </div>

      {/* ══ Bloc 4 : Atténuation acoustique ════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(168,139,250,0.1)', borderBottom: '1px solid rgba(168,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔊 ATTÉNUATION ACOUSTIQUE — NIVEAU SONORE</span>
        </div>
        <div className="p-4 space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormulaBlock expr="L = 10\log\!\left(\frac{I}{I_0}\right)" title="Niveau sonore (dB)" color="#a78bfa" desc="I₀ = 10⁻¹² W·m⁻² — seuil d'audibilité" />
            <FormulaBlock expr="A = L - L' = 10\log\!\left(\frac{I}{I'}\right)" title="Atténuation" color="#f472b6" desc="A en dB — diminution du niveau lors de la propagation" />
          </div>
        </div>
      </div>

    </div>
  );
}