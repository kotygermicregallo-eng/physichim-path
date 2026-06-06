import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';
import { InlineF as F } from '../FormulaBlock';

// ─── Schéma Bilan Ch.14 : Mécanique des fluides ──────────────────────────────
export default function SchemaCh14() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Statique + Archimède ══════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🌊 STATIQUE DES FLUIDES — POUSSÉE D'ARCHIMÈDE</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Loi statique */}
            <div>
              <FormulaBlock
                expr="P_2 - P_1 = \rho g(z_1 - z_2)"
                title="Loi de la statique des fluides"
                color="#38bdf8"
                desc="ρ : masse volumique du fluide (kg·m⁻³) — z en mètres"
              />
              <ZoomableSVG maxHeight={150} caption="Pression augmente avec la profondeur — P₂ > P₁ car z₂ < z₁">
                <svg viewBox="0 0 260 145" style={{ width: '100%' }}>
                  <defs>
                    <marker id="aG14" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#38bdf8" /></marker>
                    <marker id="aGv14" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#64748b" /></marker>
                  </defs>
                  {/* Fluide */}
                  <rect x="20" y="18" width="130" height="118" rx="6" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="85" y="12" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="Inter">Liquide (ρ)</text>
                  {/* Surface */}
                  <line x1="20" y1="25" x2="150" y2="25" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4,3" />
                  {/* Point M1 */}
                  <circle cx="85" cy="55" r="4" fill="#fbbf24" />
                  <text x="92" y="53" fontSize="9" fill="#fbbf24" fontFamily="JetBrains Mono">M₁ (z₁, P₁)</text>
                  {/* Point M2 */}
                  <circle cx="85" cy="105" r="4" fill="#fb923c" />
                  <text x="92" y="109" fontSize="9" fill="#fb923c" fontFamily="JetBrains Mono">M₂ (z₂, P₂)</text>
                  {/* z axe */}
                  <line x1="165" y1="130" x2="165" y2="15" stroke="#475569" strokeWidth="1.2" markerEnd="url(#aGv14)" />
                  <text x="170" y="13" fontSize="9" fill="#94a3b8" fontFamily="JetBrains Mono">z</text>
                  <line x1="161" y1="55" x2="169" y2="55" stroke="#fbbf24" strokeWidth="1" />
                  <text x="172" y="58" fontSize="8.5" fill="#fbbf24" fontFamily="JetBrains Mono">z₁</text>
                  <line x1="161" y1="105" x2="169" y2="105" stroke="#fb923c" strokeWidth="1" />
                  <text x="172" y="109" fontSize="8.5" fill="#fb923c" fontFamily="JetBrains Mono">z₂</text>
                  {/* g vers le bas */}
                  <line x1="200" y1="40" x2="200" y2="80" stroke="#64748b" strokeWidth="1.8" markerEnd="url(#aGv14)" />
                  <text x="208" y="62" fontSize="9" fill="#64748b" fontFamily="JetBrains Mono">g→</text>
                  {/* P2 > P1 */}
                  <text x="25" y="138" fontSize="8.5" fill="#94a3b8" fontFamily="Inter">z₂ &lt; z₁  →  P₂ &gt; P₁</text>
                </svg>
              </ZoomableSVG>
            </div>

            {/* Archimède */}
            <div>
              <FormulaBlock
                expr="\vec{A} = -m_f\,\vec{g} = -\rho V_i\,\vec{g}"
                title="Poussée d'Archimède"
                color="#34d399"
                desc="mf : masse du fluide déplacé — Vi : volume immergé"
              />
              <ZoomableSVG maxHeight={150} caption="A→ = poids du fluide déplacé, dirigé vers le haut — flottaison si A ≥ P">
                <svg viewBox="0 0 260 145" style={{ width: '100%' }}>
                  <defs>
                    <marker id="aAr14" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#34d399" /></marker>
                    <marker id="aP14" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f87171" /></marker>
                  </defs>
                  {/* Fluide */}
                  <rect x="15" y="50" width="180" height="90" rx="6" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" strokeWidth="1.5" />
                  {/* Objet immergé */}
                  <path d="M70,30 L150,30 L160,100 L60,100 Z" fill="rgba(251,146,60,0.25)" stroke="#fb923c" strokeWidth="1.8" />
                  <text x="110" y="68" fontSize="9" fill="#fb923c" textAnchor="middle" fontFamily="Inter">Objet (ρ_obj)</text>
                  {/* Volume immergé */}
                  <path d="M70,50 L150,50 L160,100 L60,100 Z" fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4,2" />
                  <text x="110" y="88" fontSize="8.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">Vᵢ</text>
                  {/* Archimède (vers haut) */}
                  <line x1="110" y1="65" x2="110" y2="15" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#aAr14)" />
                  <text x="116" y="38" fontSize="9.5" fill="#34d399" fontFamily="JetBrains Mono" fontWeight="700">A→</text>
                  {/* Poids (vers bas) */}
                  <line x1="130" y1="65" x2="130" y2="115" stroke="#f87171" strokeWidth="2.5" markerEnd="url(#aP14)" />
                  <text x="136" y="100" fontSize="9.5" fill="#f87171" fontFamily="JetBrains Mono" fontWeight="700">P→</text>
                  {/* Condition flottaison */}
                  <text x="8" y="135" fontSize="8" fill="#94a3b8" fontFamily="Inter">Flotte si ρ_obj &lt; ρ_fluide</text>
                </svg>
              </ZoomableSVG>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Bernoulli + Débit ══════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(251,191,36,0.1)', borderBottom: '1px solid rgba(251,191,36,0.15)' }}>
          <span style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚗️ BERNOULLI + CONSERVATION DU DÉBIT VOLUMIQUE</span>
        </div>
        <div className="p-4 space-y-3">
          <FormulaBlock
            expr="P + \frac{1}{2}\rho v^2 + \rho g z = \text{cste}"
            title="Relation de Bernoulli"
            color="#fbbf24"
            desc="Fluide incompressible, non visqueux, régime permanent — le long d'une ligne de courant"
          />
          <FormulaBlock
            expr="D_V = v_A S_A = v_B S_B"
            title="Conservation du débit volumique"
            color="#38bdf8"
            desc="Fluide incompressible en régime permanent — S : section droite"
          />

          <ZoomableSVG maxHeight={165} caption="Tube Venturi : SA > SB → vA < vB (conservation débit) → PA > PB (Bernoulli) — dépression en B">
            <svg viewBox="0 0 520 158" style={{ width: '100%' }}>
              <defs>
                <marker id="aVe14" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fbbf24" /></marker>
                <marker id="aVe14b" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#34d399" /></marker>
              </defs>

              {/* Tube Venturi (vu de côté) */}
              {/* Partie large A */}
              <path d="M20,45 L180,65 L180,95 L20,115 Z" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" strokeWidth="1.5" />
              {/* Partie étroite B */}
              <path d="M180,65 L320,72 L320,88 L180,95 Z" fill="rgba(52,211,153,0.1)" stroke="#34d399" strokeWidth="1.5" />
              {/* Sortie */}
              <path d="M320,72 L480,52 L480,108 L320,88 Z" fill="rgba(56,189,248,0.08)" stroke="#38bdf8" strokeWidth="1.5" />

              {/* Vitesses */}
              <line x1="50" y1="80" x2="120" y2="80" stroke="#fbbf24" strokeWidth="2.2" markerEnd="url(#aVe14)" />
              <text x="80" y="72" fontSize="9.5" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">vA</text>
              <text x="80" y="100" fontSize="8.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">petite</text>

              <line x1="210" y1="80" x2="310" y2="80" stroke="#34d399" strokeWidth="2.2" markerEnd="url(#aVe14b)" />
              <text x="255" y="72" fontSize="9.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">vB</text>
              <text x="255" y="100" fontSize="8.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">grande</text>

              {/* Sections */}
              <text x="25" y="42" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono">SA (large)</text>
              <text x="175" y="62" fontSize="9" fill="#34d399" fontFamily="JetBrains Mono">SB &lt; SA</text>

              {/* Labels A et B */}
              <text x="100" y="135" fontSize="9.5" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">A</text>
              <text x="255" y="135" fontSize="9.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">B</text>

              {/* Pressions */}
              <line x1="100" y1="60" x2="100" y2="30" stroke="#f87171" strokeWidth="1.5" strokeDasharray="3,2" />
              <text x="100" y="25" fontSize="8.5" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono">PA (haute)</text>
              <line x1="255" y1="70" x2="255" y2="40" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3,2" />
              <text x="255" y="35" fontSize="8.5" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono">PB &lt; PA</text>

              {/* Effet Venturi */}
              <rect x="375" y="15" width="140" height="85" rx="8" fill="rgba(168,139,250,0.07)" stroke="rgba(168,139,250,0.3)" strokeWidth="1" />
              <text x="445" y="29" fontSize="9" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Effet Venturi</text>
              <text x="380" y="43" fontSize="8.5" fill="#94a3b8" fontFamily="Inter">SA &gt; SB</text>
              <text x="380" y="55" fontSize="8.5" fill="#34d399" fontFamily="Inter">→ vA &lt; vB (débit)</text>
              <text x="380" y="67" fontSize="8.5" fill="#f87171" fontFamily="Inter">→ PA &gt; PB (Bernoulli)</text>
              <text x="380" y="79" fontSize="8.5" fill="#a78bfa" fontFamily="Inter">Dépression en B</text>
              <text x="380" y="91" fontSize="8.5" fill="#64748b" fontFamily="Inter">(tube de Pitot, carburateur…)</text>

              {/* Légende hypothèses */}
              <rect x="375" y="108" width="140" height="45" rx="6" fill="rgba(0,0,0,0.15)" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
              <text x="380" y="120" fontSize="7.5" fill="#64748b" fontFamily="Inter">Hypothèses Bernoulli :</text>
              <text x="380" y="131" fontSize="7.5" fill="#64748b" fontFamily="Inter">• Fluide incompressible</text>
              <text x="380" y="142" fontSize="7.5" fill="#64748b" fontFamily="Inter">• Non visqueux · Régime permanent</text>
            </svg>
          </ZoomableSVG>
        </div>
      </div>

    </div>
  );
}