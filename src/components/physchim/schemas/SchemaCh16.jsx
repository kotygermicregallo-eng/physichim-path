import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';
import { InlineF as F } from '../FormulaBlock';

// ─── Schéma Bilan Ch.16 : Transferts thermiques ──────────────────────────────
export default function SchemaCh16() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : 3 modes de transfert ══════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(244,114,182,0.1)', borderBottom: '1px solid rgba(244,114,182,0.15)' }}>
          <span style={{ color: '#f472b6', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🌡️ LES 3 MODES DE TRANSFERT THERMIQUE</span>
        </div>
        <div className="p-4 space-y-3">
          <ZoomableSVG maxHeight={110} caption="Transfert thermique toujours de la source chaude → froide — irréversible">
            <svg viewBox="0 0 520 105" style={{ width: '100%' }}>
              <defs>
                <marker id="aTh16" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f472b6" /></marker>
                <marker id="aTh16b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#38bdf8" /></marker>
                <marker id="aTh16c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" /></marker>
              </defs>

              {/* Conduction */}
              <rect x="5" y="8" width="158" height="90" rx="10" fill="rgba(248,113,113,0.07)" stroke="rgba(248,113,113,0.3)" strokeWidth="1.5" />
              <text x="84" y="22" fontSize="9.5" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Conduction</text>
              <text x="84" y="34" fontSize="8.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Contact solide-solide</text>
              {/* Paroi */}
              <rect x="60" y="40" width="48" height="42" rx="4" fill="rgba(248,113,113,0.2)" stroke="#f87171" strokeWidth="1.5" />
              <text x="84" y="65" fontSize="8" fill="#f87171" textAnchor="middle" fontFamily="Inter">Paroi</text>
              <text x="84" y="75" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">épaisseur e</text>
              {/* T1 → T2 */}
              <text x="22" y="62" fontSize="9.5" fill="#fb923c" textAnchor="middle" fontFamily="JetBrains Mono">T₁</text>
              <text x="145" y="62" fontSize="9.5" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">T₂</text>
              <line x1="32" y1="62" x2="60" y2="62" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#aTh16)" />
              <line x1="108" y1="62" x2="136" y2="62" stroke="#f472b6" strokeWidth="1.5" markerEnd="url(#aTh16)" />
              <text x="84" y="96" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">φ = (T₁−T₂)/Rth</text>

              {/* Convection */}
              <rect x="180" y="8" width="158" height="90" rx="10" fill="rgba(56,189,248,0.07)" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" />
              <text x="259" y="22" fontSize="9.5" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Convection</text>
              <text x="259" y="34" fontSize="8.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Solide-fluide en mvt</text>
              {/* Solide chaud */}
              <rect x="195" y="40" width="38" height="42" rx="4" fill="rgba(251,146,60,0.25)" stroke="#fb923c" strokeWidth="1.5" />
              <text x="214" y="65" fontSize="7.5" fill="#fb923c" textAnchor="middle" fontFamily="Inter">Corps</text>
              <text x="214" y="76" fontSize="7.5" fill="#fb923c" textAnchor="middle" fontFamily="Inter">T(t)</text>
              {/* Fluide */}
              <rect x="250" y="40" width="75" height="42" rx="4" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" strokeWidth="1" />
              <text x="287" y="62" fontSize="7.5" fill="#38bdf8" textAnchor="middle" fontFamily="Inter">Fluide Text</text>
              {/* Flèches convection */}
              <path d="M233,55 Q240,50 250,55" fill="none" stroke="#f472b6" strokeWidth="1.5" markerEnd="url(#aTh16)" />
              <path d="M233,70 Q240,75 250,70" fill="none" stroke="#f472b6" strokeWidth="1.5" markerEnd="url(#aTh16)" />
              <text x="259" y="96" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">φ = hS(Text−T)</text>

              {/* Rayonnement */}
              <rect x="355" y="8" width="160" height="90" rx="10" fill="rgba(251,191,36,0.07)" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" />
              <text x="435" y="22" fontSize="9.5" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Rayonnement</text>
              <text x="435" y="34" fontSize="8.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Photons (sans contact)</text>
              {/* Ondes */}
              {[48, 60, 72, 84].map((y, i) => (
                <path key={i} d={`M370,${y} Q395,${y-8} 420,${y} Q445,${y+8} 470,${y}`} fill="none" stroke="#fbbf24" strokeWidth="1.5" markerEnd="url(#aTh16c)" />
              ))}
              <text x="435" y="96" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="Inter">Possible dans le vide</text>
            </svg>
          </ZoomableSVG>
          <SchemaLegend cols={3} items={[
            { color: '#f87171', label: 'Conduction', detail: 'φ = (T₁−T₂)/Rth — contact solide' },
            { color: '#38bdf8', label: 'Convection', detail: 'φ = hS(Text−T) — fluide en mouvement' },
            { color: '#fbbf24', label: 'Rayonnement', detail: 'Photons — possible dans le vide' },
          ]} />
        </div>
      </div>

      {/* ══ Bloc 2 : Résistance thermique — paroi ══════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🧱 RÉSISTANCE THERMIQUE — ANALOGIE ÉLECTRIQUE</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <FormulaBlock expr="\phi_{th} = \frac{T_1 - T_2}{R_{th}}" title="Flux thermique (analogie loi d'Ohm)" color="#38bdf8" compact />
              <FormulaBlock expr="R_{th} = \frac{e}{\lambda S}" title="Résistance thermique d'une paroi plane" color="#f472b6" compact desc="e : épaisseur (m) · λ : conductivité (W·K⁻¹·m⁻¹) · S : surface (m²)" />
              <FormulaBlock expr="R_{th}^{total} = R_{th}^1 + R_{th}^2 + \cdots" title="Parois en série (mur + isolant + placo)" color="#fbbf24" compact />
            </div>
            <div>
              <ZoomableSVG maxHeight={165} caption="Paroi multi-couche : Rth totale = somme des Rth en série — flux φ identique dans chaque couche">
                <svg viewBox="0 0 280 158" style={{ width: '100%' }}>
                  <defs>
                    <marker id="aFlux16" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#fb923c" /></marker>
                  </defs>
                  {/* Couche 1 : brique */}
                  <rect x="55" y="15" width="55" height="130" rx="3" fill="rgba(248,113,113,0.25)" stroke="#f87171" strokeWidth="1.5" />
                  <text x="82" y="10" fontSize="8.5" fill="#f87171" textAnchor="middle" fontFamily="Inter">Brique</text>
                  <text x="82" y="88" fontSize="7.5" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono">e₁, λ₁</text>
                  <text x="82" y="100" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">Rth¹</text>
                  {/* Couche 2 : isolant */}
                  <rect x="110" y="15" width="55" height="130" rx="3" fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth="1.5" />
                  <text x="137" y="10" fontSize="8.5" fill="#34d399" textAnchor="middle" fontFamily="Inter">Isolant</text>
                  <text x="137" y="88" fontSize="7.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">e₂, λ₂</text>
                  <text x="137" y="100" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">Rth²</text>
                  {/* Couche 3 : placo */}
                  <rect x="165" y="15" width="55" height="130" rx="3" fill="rgba(168,139,250,0.2)" stroke="#a78bfa" strokeWidth="1.5" />
                  <text x="192" y="10" fontSize="8.5" fill="#a78bfa" textAnchor="middle" fontFamily="Inter">Placo</text>
                  <text x="192" y="88" fontSize="7.5" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono">e₃, λ₃</text>
                  <text x="192" y="100" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">Rth³</text>
                  {/* T1, T2 */}
                  <text x="22" y="83" fontSize="11" fill="#fb923c" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">T₁</text>
                  <text x="252" y="83" fontSize="11" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">T₂</text>
                  <text x="37" y="94" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="Inter">chaud</text>
                  <text x="252" y="94" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="Inter">froid</text>
                  {/* Flux phi */}
                  <line x1="10" y1="80" x2="50" y2="80" stroke="#fb923c" strokeWidth="2.2" markerEnd="url(#aFlux16)" />
                  <text x="30" y="73" fontSize="8.5" fill="#fb923c" textAnchor="middle" fontFamily="JetBrains Mono">φ</text>
                  <line x1="225" y1="80" x2="268" y2="80" stroke="#fb923c" strokeWidth="2.2" markerEnd="url(#aFlux16)" />
                  {/* Total */}
                  <text x="137" y="155" fontSize="8" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">Rth_tot = Rth¹ + Rth² + Rth³</text>
                </svg>
              </ZoomableSVG>
            </div>
          </div>

          {/* Tableau analogie */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-xl p-3" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="font-bold mb-2" style={{ color: '#38bdf8' }}>Électricité</div>
              <div className="space-y-1" style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
                <div>Tension U (V)</div>
                <div>Intensité I (A)</div>
                <div>Résistance R (Ω)</div>
                <div>U = R·I</div>
              </div>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.2)' }}>
              <div className="font-bold mb-2" style={{ color: '#f472b6' }}>Thermique</div>
              <div className="space-y-1" style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
                <div>T₁ − T₂ (K)</div>
                <div>Flux φ (W)</div>
                <div>Rth (K·W⁻¹)</div>
                <div>φ = (T₁−T₂)/Rth</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 3 : Loi de Newton — refroidissement ════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(168,139,250,0.1)', borderBottom: '1px solid rgba(168,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📉 LOI DE NEWTON — REFROIDISSEMENT/ÉCHAUFFEMENT</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <FormulaBlock expr="\phi(t) = hS\bigl(T_{\text{ext}} - T(t)\bigr)" title="Loi de Newton (convection)" color="#a78bfa" compact desc="h : coeff. conducto-convectif (W·K⁻¹·m⁻²) · S : surface" />
              <FormulaBlock expr="T(t) = T_{\text{ext}} + (T_0 - T_{\text{ext}})\,e^{-t/\tau}" title="Solution — évolution exponentielle" color="#34d399" compact desc="τ = C/(hS) · T₀ = T(0)" />
              <FormulaBlock expr="\tau = \frac{C}{hS}" title="Constante de temps" color="#fbbf24" compact desc="C = mc : capacité thermique du solide (J·K⁻¹)" />
            </div>
            <div>
              <ZoomableSVG maxHeight={165} caption="T(t) → Text exponentiellement — tangente à l'origine coupe l'asymptote en t = τ">
                <svg viewBox="0 0 280 158" style={{ width: '100%' }}>
                  <defs>
                    <marker id="aAx16" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#64748b" /></marker>
                  </defs>
                  {/* Axes */}
                  <line x1="35" y1="130" x2="265" y2="130" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aAx16)" />
                  <line x1="35" y1="130" x2="35" y2="10" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aAx16)" />
                  <text x="268" y="133" fontSize="9" fill="#94a3b8" fontFamily="JetBrains Mono">t</text>
                  <text x="24" y="12" fontSize="9" fill="#94a3b8" fontFamily="JetBrains Mono">T</text>

                  {/* T0 */}
                  <line x1="31" y1="22" x2="39" y2="22" stroke="#fb923c" strokeWidth="1" />
                  <text x="20" y="25" fontSize="8.5" fill="#fb923c" fontFamily="JetBrains Mono">T₀</text>

                  {/* Text (asymptote) */}
                  <line x1="35" y1="110" x2="258" y2="110" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="5,4" />
                  <text x="9" y="113" fontSize="8.5" fill="#38bdf8" fontFamily="JetBrains Mono">Text</text>

                  {/* Courbe de refroidissement */}
                  <path d="M35,22 C60,35 100,70 140,90 C175,105 210,110 255,110"
                    fill="none" stroke="#a78bfa" strokeWidth="2.5" />

                  {/* Tangente à l'origine */}
                  <line x1="35" y1="22" x2="120" y2="110" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,3" />

                  {/* tau */}
                  <line x1="120" y1="110" x2="120" y2="130" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="3,2" />
                  <text x="115" y="143" fontSize="9" fill="#fbbf24" fontFamily="JetBrains Mono" fontWeight="700">τ</text>
                  <text x="70" y="148" fontSize="8" fill="#64748b" fontFamily="Inter">tangente ∩ asymptote</text>

                  {/* T(τ) */}
                  <circle cx="120" cy="85" r="3" fill="#a78bfa" />
                  <line x1="31" y1="85" x2="120" y2="85" stroke="rgba(168,139,250,0.4)" strokeWidth="1" strokeDasharray="3,2" />
                  <text x="2" y="88" fontSize="7.5" fill="#a78bfa" fontFamily="JetBrains Mono">T(τ)</text>
                  <text x="130" y="82" fontSize="7.5" fill="#a78bfa" fontFamily="Inter">≈37% (T₀−Text)</text>
                </svg>
              </ZoomableSVG>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}