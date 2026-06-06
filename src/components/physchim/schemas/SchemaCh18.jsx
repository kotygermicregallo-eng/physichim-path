import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';

// ─── Schéma Bilan Ch.18 : Lunette astronomique ───────────────────────────────
export default function SchemaCh18() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Schéma afocal complet ════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(251,191,36,0.1)', borderBottom: '1px solid rgba(251,191,36,0.15)' }}>
          <span style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔭 LUNETTE ASTRONOMIQUE — SCHÉMA AFOCAL</span>
        </div>
        <div className="p-4 space-y-3">
          <ZoomableSVG maxHeight={210} caption="Objet à ∞ → Objectif L₁ (f'₁ grande) → image intermédiaire A₁B₁ dans F'₁≡F₂ → Oculaire L₂ → image à ∞ — G = f'₁/f'₂">
            <svg viewBox="0 0 540 200" style={{ width: '100%' }}>
              <defs>
                <marker id="aL18" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#38bdf8" /></marker>
                <marker id="aL18b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#fb923c" /></marker>
                <marker id="aL18c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#34d399" /></marker>
              </defs>

              {/* Axe optique */}
              <line x1="10" y1="100" x2="530" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="6,4" />

              {/* ─ Objectif L1 ─ */}
              <line x1="165" y1="40" x2="165" y2="165" stroke="#38bdf8" strokeWidth="3" />
              <path d="M155,40 Q165,38 175,40" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
              <path d="M155,165 Q165,167 175,165" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="165" y="28" fontSize="9.5" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Objectif L₁</text>
              <text x="165" y="185" fontSize="8.5" fill="#38bdf8" textAnchor="middle" fontFamily="Inter">grande f'₁</text>
              <text x="152" y="103" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">O₁</text>

              {/* ─ Oculaire L2 ─ */}
              <line x1="355" y1="50" x2="355" y2="155" stroke="#34d399" strokeWidth="3" />
              <path d="M345,50 Q355,48 365,50" fill="none" stroke="#34d399" strokeWidth="1.5" />
              <path d="M345,155 Q355,157 365,155" fill="none" stroke="#34d399" strokeWidth="1.5" />
              <text x="355" y="40" fontSize="9.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Oculaire L₂</text>
              <text x="355" y="170" fontSize="8.5" fill="#34d399" textAnchor="middle" fontFamily="Inter">petite f'₂</text>
              <text x="362" y="103" fontSize="9" fill="#34d399" fontFamily="JetBrains Mono" fontWeight="700">O₂</text>

              {/* ─ Foyers confondus F'1 = F2 ─ */}
              <line x1="260" y1="92" x2="260" y2="108" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="260" y="120" fontSize="8.5" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">F'₁≡F₂</text>
              <text x="260" y="130" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">Condition afocale</text>

              {/* ─ Image intermédiaire A1B1 ─ */}
              <line x1="260" y1="100" x2="260" y2="138" stroke="#f472b6" strokeWidth="2.5" />
              <circle cx="260" cy="138" r="4" fill="#f472b6" />
              <text x="275" y="145" fontSize="9" fill="#f472b6" fontFamily="JetBrains Mono" fontWeight="700">B₁</text>
              <text x="248" y="92" fontSize="8.5" fill="#f472b6" fontFamily="JetBrains Mono">A₁</text>
              <text x="230" y="165" fontSize="7.5" fill="#f472b6" fontFamily="Inter">Image intermédiaire</text>

              {/* ─ Rayons incidents (objet à ∞) — angle α ─ */}
              {/* Rayon axial (A∞) */}
              <line x1="10" y1="100" x2="165" y2="100" stroke="#fb923c" strokeWidth="1.8" markerEnd="url(#aL18b)" />
              {/* Rayon B∞ (incliné α) */}
              <line x1="10" y1="60" x2="165" y2="60" stroke="rgba(251,146,60,0.6)" strokeWidth="1.5" />
              <line x1="10" y1="60" x2="165" y2="100" stroke="rgba(251,146,60,0.5)" strokeWidth="1.2" strokeDasharray="4,3" />

              {/* Angle α entrant */}
              <path d="M60,100 Q70,90 80,88" fill="none" stroke="#fb923c" strokeWidth="1.5" />
              <text x="82" y="86" fontSize="9.5" fill="#fb923c" fontFamily="JetBrains Mono" fontWeight="700">α</text>
              <text x="18" y="57" fontSize="9" fill="#fb923c" fontFamily="JetBrains Mono">B∞</text>
              <text x="18" y="104" fontSize="9" fill="#fb923c" fontFamily="JetBrains Mono">A∞</text>

              {/* ─ Rayons après L1 → B1 ─ */}
              <line x1="165" y1="100" x2="260" y2="138" stroke="#fb923c" strokeWidth="1.8" />
              <line x1="165" y1="60" x2="260" y2="138" stroke="rgba(251,146,60,0.5)" strokeWidth="1.2" />

              {/* ─ Rayons après L2 (image à ∞) — angle α' ─ */}
              <line x1="260" y1="138" x2="355" y2="100" stroke="#34d399" strokeWidth="1.8" markerEnd="url(#aL18c)" />
              <line x1="260" y1="138" x2="530" y2="60" stroke="#34d399" strokeWidth="1.8" markerEnd="url(#aL18c)" />
              <line x1="355" y1="100" x2="530" y2="60" stroke="rgba(52,211,153,0.5)" strokeWidth="1.5" strokeDasharray="5,3" />
              <line x1="355" y1="100" x2="530" y2="100" stroke="rgba(52,211,153,0.5)" strokeWidth="1.5" markerEnd="url(#aL18c)" />

              {/* Angle α' sortant */}
              <path d="M400,100 Q410,88 422,82" fill="none" stroke="#34d399" strokeWidth="1.5" />
              <text x="424" y="80" fontSize="9.5" fill="#34d399" fontFamily="JetBrains Mono" fontWeight="700">α'</text>

              {/* Œil */}
              <ellipse cx="500" cy="100" rx="18" ry="12" fill="rgba(52,211,153,0.15)" stroke="#34d399" strokeWidth="1.5" />
              <circle cx="500" cy="100" r="5" fill="#34d399" />
              <text x="500" y="125" fontSize="8.5" fill="#34d399" textAnchor="middle" fontFamily="Inter">Œil</text>

              {/* ─ f'1 et f'2 ─ */}
              <line x1="165" y1="188" x2="260" y2="188" stroke="rgba(56,189,248,0.5)" strokeWidth="1.2" />
              <line x1="165" y1="184" x2="165" y2="192" stroke="#38bdf8" strokeWidth="1" />
              <line x1="260" y1="184" x2="260" y2="192" stroke="#38bdf8" strokeWidth="1" />
              <text x="212" y="198" fontSize="8.5" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">f'₁</text>

              <line x1="260" y1="188" x2="355" y2="188" stroke="rgba(52,211,153,0.5)" strokeWidth="1.2" />
              <line x1="260" y1="184" x2="260" y2="192" stroke="#34d399" strokeWidth="1" />
              <line x1="355" y1="184" x2="355" y2="192" stroke="#34d399" strokeWidth="1" />
              <text x="307" y="198" fontSize="8.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">f'₂</text>

              {/* L = f'1 + f'2 */}
              <line x1="165" y1="175" x2="355" y2="175" stroke="rgba(251,191,36,0.4)" strokeWidth="1" strokeDasharray="4,3" />
              <text x="260" y="172" fontSize="8" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">L = f'₁ + f'₂</text>

              {/* "Objet à ∞" label */}
              <text x="10" y="18" fontSize="8.5" fill="#64748b" fontFamily="Inter">Objet à ∞</text>
              {/* "Image à ∞" label */}
              <text x="490" y="18" fontSize="8.5" fill="#34d399" fontFamily="Inter">Image à ∞</text>
            </svg>
          </ZoomableSVG>
          <SchemaLegend cols={4} items={[
            { color: '#38bdf8', label: 'Objectif L₁', detail: 'grande f\'₁ — collecte lumière' },
            { color: '#fbbf24', label: 'F\'₁ ≡ F₂', detail: 'Condition afocale' },
            { color: '#f472b6', label: 'Image intermédiaire', detail: 'A₁B₁ dans F\'₁' },
            { color: '#34d399', label: 'Oculaire L₂', detail: 'petite f\'₂ — grossit' },
          ]} />
        </div>
      </div>

      {/* ══ Bloc 2 : Formules clés ══════════════════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
          <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
            <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📐 FORMULES ESSENTIELLES</span>
          </div>
          <div className="p-4 space-y-2">
            <FormulaBlock expr="G = \frac{\alpha'}{\alpha} = \frac{f'_1}{f'_2}" title="Grossissement" color="#fbbf24" compact desc="α, α' : diamètres apparents en rad" />
            <FormulaBlock expr="L = f'_1 + f'_2" title="Longueur de la lunette (afocal)" color="#38bdf8" compact />
            <FormulaBlock expr="F'_1 \equiv F_2" title="Condition afocale" color="#f472b6" compact desc="Foyer image obj. = foyer objet oculaire" />
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.22)' }}>
          <div className="px-4 py-2.5" style={{ background: 'rgba(168,139,250,0.1)', borderBottom: '1px solid rgba(168,139,250,0.15)' }}>
            <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📖 POINTS CLÉS À RETENIR</span>
          </div>
          <div className="p-4 space-y-2 text-xs" style={{ color: '#94a3b8' }}>
            <div className="rounded-lg p-2" style={{ background: 'rgba(168,139,250,0.07)', border: '1px solid rgba(168,139,250,0.18)' }}>
              <span style={{ color: '#a78bfa', fontWeight: 700 }}>Objectif : </span>grande f'₁ → collecte lumière, image réelle A₁B₁
            </div>
            <div className="rounded-lg p-2" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.18)' }}>
              <span style={{ color: '#34d399', fontWeight: 700 }}>Oculaire : </span>petite f'₂ → fonctionne comme une loupe
            </div>
            <div className="rounded-lg p-2" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.18)' }}>
              <span style={{ color: '#fbbf24', fontWeight: 700 }}>Afocal : </span>œil au repos (aucune accommodation) — objet et image à ∞
            </div>
            <div className="rounded-lg p-2" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.18)' }}>
              <span style={{ color: '#f472b6', fontWeight: 700 }}>G ↑ : </span>augmenter f'₁ ou diminuer f'₂ (oculaire plus court)
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}