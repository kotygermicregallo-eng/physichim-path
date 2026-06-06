import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';
import { InlineF as F } from '../FormulaBlock';

// ─── Schéma Bilan Ch.10 : Cinématique du point ───────────────────────────────
export default function SchemaCh10() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Vecteurs position, vitesse, accélération ══════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📍 VECTEURS POSITION, VITESSE ET ACCÉLÉRATION</span>
        </div>
        <div className="p-4 space-y-3">
          <ZoomableSVG maxHeight={220} caption="Référentiel (O,i,j) — vecteur OM(t) — vecteur vitesse tangent à la trajectoire — vecteur accélération">
            <svg viewBox="0 0 500 210" style={{ width: '100%' }}>
              <defs>
                <marker id="aBlue10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#38bdf8" /></marker>
                <marker id="aOrange10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#fb923c" /></marker>
                <marker id="aGreen10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#34d399" /></marker>
                <marker id="aGray10" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#64748b" /></marker>
                <marker id="aPink10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f472b6" /></marker>
              </defs>

              {/* Axes */}
              <line x1="50" y1="170" x2="340" y2="170" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aGray10)" />
              <line x1="50" y1="170" x2="50" y2="15" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aGray10)" />
              <text x="345" y="174" fontSize="12" fill="#94a3b8" fontFamily="JetBrains Mono">x</text>
              <text x="42" y="14" fontSize="12" fill="#94a3b8" fontFamily="JetBrains Mono">y</text>
              <text x="40" y="182" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">O</text>

              {/* Vecteurs i, j */}
              <line x1="50" y1="170" x2="82" y2="170" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#aGray10)" />
              <text x="88" y="175" fontSize="10" fill="#64748b" fontFamily="JetBrains Mono">i→</text>
              <line x1="50" y1="170" x2="50" y2="138" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#aGray10)" />
              <text x="55" y="134" fontSize="10" fill="#64748b" fontFamily="JetBrains Mono">j→</text>

              {/* Trajectoire */}
              <path d="M50,165 C80,150 120,120 165,90 C200,68 240,55 285,50 C305,48 320,48 335,50" fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5" strokeDasharray="5,3" />

              {/* Point M(t) */}
              <circle cx="200" cy="72" r="5" fill="#38bdf8" />
              <text x="208" y="70" fontSize="11" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">M(t)</text>

              {/* Vecteur OM */}
              <line x1="50" y1="170" x2="196" y2="75" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#aBlue10)" />
              <text x="105" y="128" fontSize="11" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">OM→(t)</text>
              <text x="92" y="140" fontSize="9" fill="#64748b" fontFamily="Inter">(x(t), y(t))</text>

              {/* Vecteur vitesse (tangent) */}
              <line x1="200" y1="72" x2="258" y2="42" stroke="#fb923c" strokeWidth="2.2" markerEnd="url(#aOrange10)" />
              <text x="262" y="38" fontSize="10" fill="#fb923c" fontFamily="JetBrains Mono" fontWeight="700">v→(t)</text>
              <text x="215" y="40" fontSize="9" fill="#fb923c" fontFamily="Inter">tangent, sens du mvt</text>

              {/* Vecteur accélération */}
              <line x1="200" y1="72" x2="230" y2="100" stroke="#34d399" strokeWidth="2.2" markerEnd="url(#aGreen10)" />
              <text x="234" y="112" fontSize="10" fill="#34d399" fontFamily="JetBrains Mono" fontWeight="700">a→(t)</text>

              {/* Coordonnées projetées */}
              <line x1="200" y1="72" x2="200" y2="170" stroke="rgba(56,189,248,0.3)" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="50" y1="72" x2="200" y2="72" stroke="rgba(56,189,248,0.3)" strokeWidth="1" strokeDasharray="3,3" />
              <text x="196" y="182" fontSize="9" fill="#64748b" fontFamily="JetBrains Mono">x(t)</text>
              <text x="4" y="75" fontSize="9" fill="#64748b" fontFamily="JetBrains Mono">y(t)</text>

              {/* Formules à droite */}
              <rect x="350" y="18" width="145" height="170" rx="8" fill="rgba(0,0,0,0.25)" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
              <text x="358" y="34" fontSize="9.5" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">v→(t) = dOM/dt</text>
              <text x="358" y="50" fontSize="9" fill="#64748b" fontFamily="Inter">vx = dx/dt</text>
              <text x="358" y="63" fontSize="9" fill="#64748b" fontFamily="Inter">vy = dy/dt</text>
              <line x1="355" y1="70" x2="490" y2="70" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
              <text x="358" y="84" fontSize="9.5" fill="#34d399" fontFamily="JetBrains Mono" fontWeight="700">a→(t) = dv/dt</text>
              <text x="358" y="99" fontSize="9" fill="#64748b" fontFamily="Inter">ax = dvx/dt</text>
              <text x="358" y="112" fontSize="9" fill="#64748b" fontFamily="Inter">ay = dvy/dt</text>
              <line x1="355" y1="119" x2="490" y2="119" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
              <text x="358" y="133" fontSize="9.5" fill="#fb923c" fontFamily="JetBrains Mono" fontWeight="700">||v|| = √(vx²+vy²)</text>
              <line x1="355" y1="140" x2="490" y2="140" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
              <text x="358" y="154" fontSize="9" fill="#94a3b8" fontFamily="Inter">v→(tn) ≈</text>
              <text x="358" y="165" fontSize="9" fill="#94a3b8" fontFamily="Inter">M(n-1)M(n+1)/2Δt</text>
              <text x="358" y="178" fontSize="8.5" fill="#64748b" fontFamily="Inter">(chronophotographie)</text>
            </svg>
          </ZoomableSVG>
          <SchemaLegend cols={3} items={[
            { color: '#38bdf8', label: 'OM(t)', detail: 'vecteur position (x(t), y(t))' },
            { color: '#fb923c', label: 'v→(t)', detail: 'tangent à la trajectoire' },
            { color: '#34d399', label: 'a→(t)', detail: 'dérivée de v→' },
          ]} />
        </div>
      </div>

      {/* ══ Bloc 2 : Types de mouvements ════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(168,139,250,0.1)', borderBottom: '1px solid rgba(168,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📊 CARACTÉRISATION DES MOUVEMENTS</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* MRU */}
            <div className="rounded-xl p-3" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.25)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: '#34d399' }}>Mouvement rectiligne uniforme</div>
              <div className="text-xs space-y-1 mb-2" style={{ color: '#94a3b8' }}>
                <div>Trajectoire = droite</div>
                <div><span style={{ color: '#34d399' }}>v→</span> : constante (norme et direction)</div>
                <div><span style={{ color: '#fb923c' }}>a→ = 0→</span></div>
              </div>
              <ZoomableSVG maxHeight={60} caption="">
                <svg viewBox="0 0 200 55" style={{ width: '100%' }}>
                  <defs><marker id="aRU10" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#34d399" /></marker></defs>
                  <line x1="10" y1="30" x2="190" y2="30" stroke="rgba(52,211,153,0.3)" strokeWidth="1.5" />
                  {[20, 65, 110, 155].map((x, i) => (
                    <g key={i}>
                      <circle cx={x} cy="30" r="3" fill="#34d399" />
                      <line x1={x} y1="30" x2={x+22} y2="30" stroke="#34d399" strokeWidth="2" markerEnd="url(#aRU10)" />
                    </g>
                  ))}
                  <text x="100" y="50" fontSize="9" fill="#34d399" textAnchor="middle" fontFamily="Inter">v = cste</text>
                </svg>
              </ZoomableSVG>
            </div>

            {/* Mouvement uniforme */}
            <div className="rounded-xl p-3" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.25)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: '#fbbf24' }}>Mouvement uniforme</div>
              <div className="text-xs space-y-1 mb-2" style={{ color: '#94a3b8' }}>
                <div>Norme de v→ : constante</div>
                <div><F e="d\|\vec{v}\|/dt = 0" /> mais <F e="\vec{v}" /> peut tourner</div>
                <div><span style={{ color: '#fb923c' }}>a→(t)</span> ⊥ v→ (centripète)</div>
              </div>
              <ZoomableSVG maxHeight={60} caption="">
                <svg viewBox="0 0 200 60" style={{ width: '100%' }}>
                  <defs><marker id="aMCU10" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fbbf24" /></marker></defs>
                  <circle cx="100" cy="30" r="22" fill="none" stroke="rgba(251,191,36,0.35)" strokeWidth="1.5" />
                  <circle cx="100" cy="8" r="3" fill="#fbbf24" />
                  <line x1="100" y1="8" x2="128" y2="12" stroke="#fbbf24" strokeWidth="1.8" markerEnd="url(#aMCU10)" />
                  <text x="100" y="58" fontSize="9" fill="#fbbf24" textAnchor="middle" fontFamily="Inter">MCU : ||v|| = cste</text>
                </svg>
              </ZoomableSVG>
            </div>

            {/* Mouvement non uniforme */}
            <div className="rounded-xl p-3" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.25)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: '#f472b6' }}>Mouvement non uniforme</div>
              <div className="text-xs space-y-1 mb-2" style={{ color: '#94a3b8' }}>
                <div>v→ pas constante</div>
                <div>a→ ≠ 0→ avec composante tangentielle</div>
                <div>a→ et v→ ont même direction</div>
              </div>
              <ZoomableSVG maxHeight={60} caption="">
                <svg viewBox="0 0 200 60" style={{ width: '100%' }}>
                  <defs><marker id="aNU10" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f472b6" /></marker></defs>
                  <line x1="10" y1="30" x2="190" y2="30" stroke="rgba(244,114,182,0.3)" strokeWidth="1.5" />
                  {[20, 55, 95, 145].map((x, i) => (
                    <g key={i}>
                      <circle cx={x} cy="30" r="3" fill="#f472b6" />
                      <line x1={x} y1="30" x2={x + 8 + i*8} y2="30" stroke="#f472b6" strokeWidth="2" markerEnd="url(#aNU10)" />
                    </g>
                  ))}
                  <text x="100" y="50" fontSize="9" fill="#f472b6" textAnchor="middle" fontFamily="Inter">v augmente (accéléré)</text>
                </svg>
              </ZoomableSVG>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 3 : Repère de Frenet (MCU) ════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(251,146,60,0.05)', border: '1px solid rgba(251,146,60,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(251,146,60,0.1)', borderBottom: '1px solid rgba(251,146,60,0.15)' }}>
          <span style={{ color: '#fb923c', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔄 REPÈRE DE FRENET — MOUVEMENT CIRCULAIRE</span>
        </div>
        <div className="p-4 space-y-3">
          <ZoomableSVG maxHeight={185} caption="En MCU : a→ = (v²/R) n→ centripète — composante tangentielle aT = dv/dt = 0">
            <svg viewBox="0 0 480 180" style={{ width: '100%' }}>
              <defs>
                <marker id="aTg10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#fb923c" /></marker>
                <marker id="aN10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f472b6" /></marker>
                <marker id="aAx10" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#64748b" /></marker>
              </defs>

              {/* Cercle trajectoire */}
              <circle cx="120" cy="90" r="68" fill="none" stroke="rgba(56,189,248,0.3)" strokeWidth="2" />
              {/* Centre */}
              <circle cx="120" cy="90" r="3" fill="#64748b" />
              <text x="125" y="94" fontSize="9" fill="#64748b" fontFamily="Inter">Centre O</text>
              {/* Rayon R */}
              <line x1="120" y1="90" x2="172" y2="30" stroke="rgba(56,189,248,0.4)" strokeWidth="1.2" strokeDasharray="4,3" />
              <text x="152" y="58" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono">R</text>

              {/* Point M sur le cercle */}
              <circle cx="172" cy="30" r="5" fill="#38bdf8" />
              <text x="178" y="28" fontSize="11" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">M</text>

              {/* Vecteur t (tangent) */}
              <line x1="172" y1="30" x2="218" y2="55" stroke="#fb923c" strokeWidth="2.5" markerEnd="url(#aTg10)" />
              <text x="222" y="56" fontSize="10" fill="#fb923c" fontFamily="JetBrains Mono" fontWeight="700">t→</text>
              <text x="195" y="28" fontSize="9" fill="#fb923c" fontFamily="Inter">sens du mouvement</text>

              {/* Vecteur n (normal vers centre) */}
              <line x1="172" y1="30" x2="130" y2="72" stroke="#f472b6" strokeWidth="2.5" markerEnd="url(#aN10)" />
              <text x="120" y="60" fontSize="10" fill="#f472b6" fontFamily="JetBrains Mono" fontWeight="700">n→</text>
              <text x="120" y="72" fontSize="9" fill="#f472b6" fontFamily="Inter">vers le centre</text>

              {/* Sens du mouvement */}
              <path d="M100,25 Q62,35 55,72" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#aTg10)" />
              <text x="30" y="52" fontSize="9" fill="#38bdf8" fontFamily="Inter">Sens du</text>
              <text x="30" y="63" fontSize="9" fill="#38bdf8" fontFamily="Inter">mouvement</text>

              {/* Tableau droite */}
              <rect x="270" y="10" width="205" height="160" rx="8" fill="rgba(0,0,0,0.25)" stroke="rgba(251,146,60,0.15)" strokeWidth="1" />
              <text x="278" y="28" fontSize="10" fill="#fb923c" fontFamily="JetBrains Mono" fontWeight="700">Repère de Frenet</text>
              <line x1="275" y1="33" x2="468" y2="33" stroke="rgba(251,146,60,0.2)" strokeWidth="1" />
              <text x="278" y="47" fontSize="9.5" fill="#e2e8f0" fontFamily="JetBrains Mono">t→ : tangent, sens mvt</text>
              <text x="278" y="60" fontSize="9.5" fill="#e2e8f0" fontFamily="JetBrains Mono">n→ : vers le centre</text>
              <line x1="275" y1="67" x2="468" y2="67" stroke="rgba(251,146,60,0.2)" strokeWidth="1" />
              <text x="278" y="81" fontSize="9.5" fill="#fb923c" fontFamily="JetBrains Mono" fontWeight="700">MCU :</text>
              <text x="278" y="94" fontSize="9.5" fill="#94a3b8" fontFamily="JetBrains Mono">aT = dv/dt = 0</text>
              <text x="278" y="107" fontSize="9.5" fill="#f472b6" fontFamily="JetBrains Mono">an = v²/R</text>
              <text x="278" y="120" fontSize="9" fill="#64748b" fontFamily="Inter">(centripète = vers centre)</text>
              <line x1="275" y1="127" x2="468" y2="127" stroke="rgba(251,146,60,0.2)" strokeWidth="1" />
              <text x="278" y="141" fontSize="9.5" fill="#fb923c" fontFamily="JetBrains Mono" fontWeight="700">MRUA :</text>
              <text x="278" y="154" fontSize="9.5" fill="#94a3b8" fontFamily="JetBrains Mono">a→ = aT t→ + an n→</text>
              <text x="278" y="165" fontSize="9" fill="#64748b" fontFamily="Inter">aT = dv/dt ≠ 0</text>
            </svg>
          </ZoomableSVG>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormulaBlock expr="\vec{a} = \frac{v^2}{R}\,\vec{n}" title="MCU — accélération centripète" color="#f472b6" compact />
            <FormulaBlock expr="\vec{a} = a_T\,\vec{t} + \frac{v^2}{R}\,\vec{n}" title="Cas général (MRUA circulaire)" color="#fb923c" compact />
          </div>
        </div>
      </div>

    </div>
  );
}