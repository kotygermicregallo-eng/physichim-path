import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';
import { InlineF as F } from '../FormulaBlock';

// ─── Schéma Bilan Ch.12 : Mouvement dans un champ uniforme ───────────────────
export default function SchemaCh12() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Champ de pesanteur — projectile ═══════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)' }}>
          <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🪂 CHAMP DE PESANTEUR g→ UNIFORME — PROJECTILE</span>
        </div>
        <div className="p-4 space-y-3">
          <ZoomableSVG maxHeight={230} caption="Lancer oblique : trajectoire parabolique y(x) — sommet S — portée P — v₀ à angle α">
            <svg viewBox="0 0 500 220" style={{ width: '100%' }}>
              <defs>
                <marker id="aBlue12" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#38bdf8" /></marker>
                <marker id="aOr12" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#fb923c" /></marker>
                <marker id="aRed12" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f87171" /></marker>
                <marker id="aGr12" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#34d399" /></marker>
                <marker id="aGray12" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#64748b" /></marker>
              </defs>

              {/* Axes */}
              <line x1="40" y1="175" x2="470" y2="175" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aGray12)" />
              <line x1="40" y1="175" x2="40" y2="15" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aGray12)" />
              <text x="474" y="179" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">x</text>
              <text x="32" y="14" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">y</text>
              <text x="28" y="186" fontSize="10" fill="#94a3b8" fontFamily="JetBrains Mono">O</text>

              {/* Vecteurs i, j */}
              <line x1="40" y1="175" x2="70" y2="175" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#aGray12)" />
              <text x="74" y="180" fontSize="9" fill="#64748b" fontFamily="JetBrains Mono">i→</text>
              <line x1="40" y1="175" x2="40" y2="145" stroke="#64748b" strokeWidth="1.2" markerEnd="url(#aGray12)" />
              <text x="44" y="142" fontSize="9" fill="#64748b" fontFamily="JetBrains Mono">j→</text>

              {/* Trajectoire parabolique */}
              <path d="M40,175 C80,140 130,60 215,35 C290,12 340,25 390,58 C420,75 440,110 458,175"
                fill="none" stroke="#f87171" strokeWidth="2.5" />

              {/* v0 initial */}
              <line x1="40" y1="175" x2="80" y2="130" stroke="#34d399" strokeWidth="2.2" markerEnd="url(#aGr12)" />
              <text x="84" y="128" fontSize="10" fill="#34d399" fontFamily="JetBrains Mono" fontWeight="700">v→₀</text>

              {/* Angle alpha */}
              <path d="M60,175 Q62,158 52,155" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="65" y="162" fontSize="10" fill="#fbbf24" fontFamily="JetBrains Mono" fontWeight="700">α</text>

              {/* Composantes de v0 */}
              <line x1="40" y1="175" x2="80" y2="175" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#aBlue12)" />
              <text x="60" y="188" fontSize="8.5" fill="#38bdf8" fontFamily="JetBrains Mono">v₀cosα</text>
              <line x1="80" y1="175" x2="80" y2="130" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#aBlue12)" />
              <text x="83" y="152" fontSize="8.5" fill="#38bdf8" fontFamily="JetBrains Mono">v₀sinα</text>

              {/* Pesanteur */}
              <line x1="150" y1="80" x2="150" y2="115" stroke="#f87171" strokeWidth="2" markerEnd="url(#aRed12)" />
              <text x="156" y="100" fontSize="9" fill="#f87171" fontFamily="JetBrains Mono">P→=mg→</text>

              {/* Sommet S */}
              <circle cx="215" cy="35" r="4" fill="#fbbf24" />
              <text x="220" y="32" fontSize="10" fill="#fbbf24" fontFamily="JetBrains Mono" fontWeight="700">S</text>
              <line x1="215" y1="35" x2="215" y2="175" stroke="rgba(251,191,36,0.3)" strokeWidth="1" strokeDasharray="3,3" />
              <text x="208" y="187" fontSize="8.5" fill="#fbbf24" fontFamily="JetBrains Mono">xₛ</text>

              {/* ys */}
              <line x1="40" y1="35" x2="215" y2="35" stroke="rgba(251,191,36,0.3)" strokeWidth="1" strokeDasharray="3,3" />
              <text x="15" y="38" fontSize="8.5" fill="#fbbf24" fontFamily="JetBrains Mono">yₛ</text>

              {/* Point P (portée) */}
              <circle cx="458" cy="175" r="4" fill="#fb923c" />
              <text x="462" y="173" fontSize="10" fill="#fb923c" fontFamily="JetBrains Mono" fontWeight="700">P</text>
              <text x="445" y="188" fontSize="8.5" fill="#fb923c" fontFamily="JetBrains Mono">xₚ</text>

              {/* Vitesse horizontale en S */}
              <line x1="215" y1="35" x2="255" y2="35" stroke="#34d399" strokeWidth="2" markerEnd="url(#aGr12)" />
              <text x="260" y="33" fontSize="8.5" fill="#34d399" fontFamily="JetBrains Mono">vₓ = v₀cosα</text>
              <text x="260" y="46" fontSize="8" fill="#64748b" fontFamily="Inter">vy = 0 au sommet</text>
            </svg>
          </ZoomableSVG>

          {/* Équations horaires */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl p-3" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: '#38bdf8' }}>Équations horaires de vitesse</div>
              <FormulaBlock expr="v_x = v_0\cos\alpha \quad \text{(constante)}" color="#38bdf8" compact />
              <FormulaBlock expr="v_y(t) = v_0\sin\alpha - g\,t" color="#38bdf8" compact />
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: '#34d399' }}>Équations horaires de position</div>
              <FormulaBlock expr="x(t) = v_0\cos\alpha \cdot t" color="#34d399" compact />
              <FormulaBlock expr="y(t) = -\tfrac{1}{2}g\,t^2 + v_0\sin\alpha \cdot t + h" color="#34d399" compact />
            </div>
          </div>

          <FormulaBlock
            expr="y(x) = -\frac{g}{2v_0^2\cos^2\alpha}\,x^2 + x\tan\alpha + h"
            title="Équation de la trajectoire — parabole"
            color="#f87171"
            desc="Obtenue en éliminant t : t = x/(v₀cosα)"
          />
        </div>
      </div>

      {/* ══ Bloc 2 : Champ électrique uniforme ═════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(168,139,250,0.1)', borderBottom: '1px solid rgba(168,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚡ CHAMP ÉLECTRIQUE E→ UNIFORME — CONDENSATEUR PLAN</span>
        </div>
        <div className="p-4 space-y-3">
          <ZoomableSVG maxHeight={160} caption="Condensateur plan : E = U/d — particule de charge q et masse m — trajectoire parabolique analogue à la chute libre">
            <svg viewBox="0 0 500 155" style={{ width: '100%' }}>
              <defs>
                <marker id="aE12" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#a78bfa" /></marker>
                <marker id="aF12" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f87171" /></marker>
                <marker id="aV12" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#34d399" /></marker>
              </defs>

              {/* Armature positive (gauche) */}
              <rect x="10" y="18" width="18" height="120" rx="3" fill="rgba(248,113,113,0.2)" stroke="#f87171" strokeWidth="1.5" />
              <text x="19" y="8" fontSize="9" fill="#f87171" textAnchor="middle" fontFamily="Inter">+</text>
              {[30,50,70,90,110,125].map((y,i) => <text key={i} x="20" y={y} fontSize="10" fill="#f87171" textAnchor="middle">+</text>)}

              {/* Armature négative (droite) */}
              <rect x="310" y="18" width="18" height="120" rx="3" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="319" y="8" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="Inter">−</text>
              {[30,50,70,90,110,125].map((y,i) => <text key={i} x="320" y={y} fontSize="10" fill="#38bdf8" textAnchor="middle">−</text>)}

              {/* Lignes de champ E */}
              {[30,58,86,114].map((y,i) => (
                <line key={i} x1="28" y1={y} x2="310" y2={y} stroke="#a78bfa" strokeWidth="1.2" strokeDasharray="5,4" markerEnd="url(#aE12)" />
              ))}

              {/* Label E */}
              <text x="168" y="148" fontSize="10" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">E→</text>
              <text x="168" y="12" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="Inter">E = U/d</text>

              {/* U (tension) */}
              <text x="165" y="160" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="JetBrains Mono">← d →</text>
              <line x1="100" y1="152" x2="100" y2="145" stroke="#fbbf24" strokeWidth="1" />
              <line x1="238" y1="152" x2="238" y2="145" stroke="#fbbf24" strokeWidth="1" />
              <line x1="100" y1="148" x2="238" y2="148" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="168" y="160" fontSize="9" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">U</text>

              {/* Particule */}
              <circle cx="120" cy="72" r="6" fill="rgba(52,211,153,0.4)" stroke="#34d399" strokeWidth="1.5" />
              <text x="120" y="75" fontSize="8" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">q,m</text>

              {/* v0 horizontal */}
              <line x1="126" y1="72" x2="175" y2="72" stroke="#34d399" strokeWidth="2" markerEnd="url(#aV12)" />
              <text x="155" y="65" fontSize="9" fill="#34d399" fontFamily="JetBrains Mono">v₀</text>

              {/* Force F = qE (vers le bas si q>0) */}
              <line x1="120" y1="78" x2="120" y2="110" stroke="#f87171" strokeWidth="2" markerEnd="url(#aF12)" />
              <text x="126" y="100" fontSize="9" fill="#f87171" fontFamily="JetBrains Mono">F→=qE→</text>

              {/* Trajectoire parabolique */}
              <path d="M120,72 C155,73 210,80 265,100" fill="none" stroke="rgba(251,146,60,0.7)" strokeWidth="2" strokeDasharray="4,2" />

              {/* Tableau analogie droite */}
              <rect x="345" y="8" width="150" height="140" rx="8" fill="rgba(0,0,0,0.25)" stroke="rgba(168,139,250,0.2)" strokeWidth="1" />
              <text x="420" y="22" fontSize="9" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Analogie</text>
              <text x="350" y="36" fontSize="8.5" fill="#f87171" fontFamily="JetBrains Mono">Pesanteur</text>
              <text x="350" y="47" fontSize="8" fill="#64748b" fontFamily="Inter">Force : P = mg↓</text>
              <text x="350" y="58" fontSize="8" fill="#64748b" fontFamily="Inter">a = g</text>
              <text x="350" y="69" fontSize="8" fill="#64748b" fontFamily="Inter">MRU horiz.</text>
              <text x="350" y="80" fontSize="8" fill="#64748b" fontFamily="Inter">MRUA vert.</text>
              <line x1="348" y1="86" x2="490" y2="86" stroke="rgba(168,139,250,0.2)" strokeWidth="1" />
              <text x="350" y="99" fontSize="8.5" fill="#a78bfa" fontFamily="JetBrains Mono">Condensateur</text>
              <text x="350" y="110" fontSize="8" fill="#64748b" fontFamily="Inter">Force : F = qE</text>
              <text x="350" y="121" fontSize="8" fill="#64748b" fontFamily="Inter">a = qE/m</text>
              <text x="350" y="132" fontSize="8" fill="#64748b" fontFamily="Inter">MRU ⊥ champ</text>
              <text x="350" y="143" fontSize="8" fill="#64748b" fontFamily="Inter">MRUA ∥ champ</text>
            </svg>
          </ZoomableSVG>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormulaBlock expr="E = \frac{U}{d}" title="Champ électrique condensateur plan" color="#a78bfa" compact />
            <FormulaBlock expr="\vec{F} = q\vec{E} \quad \Rightarrow \quad a = \frac{qE}{m}" title="Force sur particule chargée" color="#f87171" compact />
          </div>
        </div>
      </div>

      {/* ══ Bloc 3 : Aspects énergétiques ══════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(251,191,36,0.1)', borderBottom: '1px solid rgba(251,191,36,0.15)' }}>
          <span style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚡ ASPECTS ÉNERGÉTIQUES</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <FormulaBlock expr="E_c = \frac{1}{2}mv^2" title="Énergie cinétique" color="#fbbf24" compact />
              <FormulaBlock expr="E_m = E_{pp} + E_c = \text{cste}" title="Conservation énergie mécanique (projectile)" color="#34d399" compact desc="Epp = mgy (champ de pesanteur)" />
            </div>
            <div className="space-y-2">
              <FormulaBlock expr="\Delta E_c = E_c(B) - E_c(A) = qU_{AB}" title="Théorème énergie cinétique (champ élec.)" color="#a78bfa" compact />
              <div className="rounded-xl p-3" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
                <div className="text-xs font-bold mb-1" style={{ color: '#38bdf8' }}>En résumé</div>
                <div className="text-xs space-y-1" style={{ color: '#94a3b8' }}>
                  <div>• Pesanteur : <F e="E_m" /> conservée</div>
                  <div>• Champ élec. : <F e="\Delta E_c = qU_{AB}" /></div>
                  <div>• Unités : Joules (J)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}