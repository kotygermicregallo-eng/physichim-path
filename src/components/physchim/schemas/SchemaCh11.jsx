import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';

// ─── Schéma Bilan Ch.11 : Mouvements et forces — Lois de Newton ──────────────
export default function SchemaCh11() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Lien mouvement ↔ forces ══════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(168,139,250,0.1)', borderBottom: '1px solid rgba(168,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚖️ LIEN MOUVEMENT ET FORCES — LOIS DE NEWTON</span>
        </div>
        <div className="p-4 space-y-3">
          <ZoomableSVG maxHeight={220} caption="3 lois de Newton : inertie / PFD / action-réaction — dans un référentiel galiléen">
            <svg viewBox="0 0 520 210" style={{ width: '100%' }}>
              <defs>
                <marker id="aN11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#a78bfa" /></marker>
                <marker id="aR11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f87171" /></marker>
                <marker id="aG11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#34d399" /></marker>
              </defs>

              {/* ─── 1ère loi : Équilibre ─── */}
              <rect x="5" y="8" width="155" height="88" rx="10" fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.3)" strokeWidth="1.5" />
              <text x="82" y="24" fontSize="9.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">1ère loi de Newton</text>
              <text x="82" y="37" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">ΣF→ = 0→</text>
              <text x="82" y="50" fontSize="8.5" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">⟺  v→ = cste</text>
              <text x="82" y="65" fontSize="9" fill="#34d399" textAnchor="middle" fontFamily="Inter" fontWeight="600">→ Équilibre</text>
              <text x="82" y="78" fontSize="8.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">Repos ou MRU</text>
              <text x="82" y="91" fontSize="8" fill="#475569" textAnchor="middle" fontFamily="Inter">dans un rép. galiléen</text>

              {/* ─── 2ème loi : PFD ─── */}
              <rect x="180" y="8" width="155" height="88" rx="10" fill="rgba(168,139,250,0.07)" stroke="rgba(168,139,250,0.3)" strokeWidth="1.5" />
              <text x="257" y="24" fontSize="9.5" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">2ème loi de Newton</text>
              <text x="257" y="37" fontSize="10" fill="#e2e8f0" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Σ F→ = m a→</text>
              <text x="257" y="52" fontSize="8.5" fill="#64748b" textAnchor="middle" fontFamily="JetBrains Mono">PFD</text>
              <text x="257" y="67" fontSize="9" fill="#a78bfa" textAnchor="middle" fontFamily="Inter" fontWeight="600">→ Accélération ≠ 0→</text>
              <text x="257" y="80" fontSize="8.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">Mvt non rectiligne</text>
              <text x="257" y="93" fontSize="8.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">ou non uniforme</text>

              {/* ─── 3ème loi : Action-réaction ─── */}
              <rect x="355" y="8" width="160" height="88" rx="10" fill="rgba(248,113,113,0.07)" stroke="rgba(248,113,113,0.3)" strokeWidth="1.5" />
              <text x="435" y="24" fontSize="9.5" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">3ème loi de Newton</text>
              <text x="435" y="38" fontSize="9" fill="#e2e8f0" textAnchor="middle" fontFamily="JetBrains Mono">F→A/B = −F→B/A</text>
              <text x="435" y="52" fontSize="8.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">Mêmes norme &amp; direction</text>
              <text x="435" y="65" fontSize="8.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">Sens opposé</text>
              <text x="435" y="78" fontSize="9" fill="#f87171" textAnchor="middle" fontFamily="Inter" fontWeight="600">→ Sur corps différents !</text>
              <text x="435" y="93" fontSize="8" fill="#475569" textAnchor="middle" fontFamily="Inter">Ne se compensent pas</text>

              {/* ─── Schéma bilan forces sur M ─── */}
              <rect x="5" y="108" width="510" height="95" rx="10" fill="rgba(0,0,0,0.2)" stroke="rgba(168,139,250,0.15)" strokeWidth="1" />
              <text x="260" y="124" fontSize="9" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">BILAN DES FORCES — diagramme corps libre</text>

              {/* Point M */}
              <circle cx="190" cy="160" r="8" fill="rgba(56,189,248,0.3)" stroke="#38bdf8" strokeWidth="2" />
              <text x="190" y="163" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">M</text>

              {/* Poids (bas) */}
              <line x1="190" y1="168" x2="190" y2="192" stroke="#f87171" strokeWidth="2" markerEnd="url(#aR11)" />
              <text x="198" y="197" fontSize="9" fill="#f87171" fontFamily="JetBrains Mono">P→=mg→</text>

              {/* Réaction normale (haut) */}
              <line x1="190" y1="152" x2="190" y2="128" stroke="#34d399" strokeWidth="2" markerEnd="url(#aG11)" />
              <text x="198" y="134" fontSize="9" fill="#34d399" fontFamily="JetBrains Mono">N→</text>

              {/* Frottement (gauche) */}
              <line x1="182" y1="160" x2="148" y2="160" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#aN11)" />
              <text x="120" y="157" fontSize="9" fill="#fbbf24" fontFamily="JetBrains Mono">f→</text>

              {/* Force extérieure (droite) */}
              <line x1="198" y1="160" x2="240" y2="160" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#aN11)" />
              <text x="244" y="163" fontSize="9" fill="#a78bfa" fontFamily="JetBrains Mono">F→ext</text>

              {/* Texte PFD résultante */}
              <text x="340" y="148" fontSize="9.5" fill="#e2e8f0" fontFamily="JetBrains Mono" fontWeight="700">PFD : m a→ = ΣF→</text>
              <text x="340" y="162" fontSize="9" fill="#94a3b8" fontFamily="Inter">Projeter sur chaque axe :</text>
              <text x="340" y="175" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono">m ax = ΣFx</text>
              <text x="340" y="188" fontSize="9" fill="#34d399" fontFamily="JetBrains Mono">m ay = ΣFy</text>
            </svg>
          </ZoomableSVG>
          <SchemaLegend cols={3} items={[
            { color: '#34d399', label: '1ère loi', detail: 'ΣF = 0 ⟺ v = cste (repos/MRU)' },
            { color: '#a78bfa', label: '2ème loi (PFD)', detail: 'ΣF = ma — accélération' },
            { color: '#f87171', label: '3ème loi', detail: 'FA/B = −FB/A (corps différents)' },
          ]} />
        </div>
      </div>

      {/* ══ Bloc 2 : Formules clés ══════════════════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormulaBlock
          expr="\sum\vec{F}_{\text{ext}} = \vec{0} \Leftrightarrow \vec{v} = \text{cste}"
          title="1ère loi — Principe d'inertie"
          color="#34d399"
        />
        <FormulaBlock
          expr="m\,\vec{a}(t) = \sum\vec{F}_{\text{ext}}"
          title="2ème loi — PFD"
          color="#a78bfa"
          desc="Référentiel galiléen, m constante"
        />
        <FormulaBlock
          expr="\vec{F}_{A/B} = -\vec{F}_{B/A}"
          title="3ème loi — Action-réaction"
          color="#f87171"
        />
      </div>

      {/* ══ Bloc 3 : Méthode de résolution ═════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(251,191,36,0.1)', borderBottom: '1px solid rgba(251,191,36,0.15)' }}>
          <span style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📋 MÉTHODE DE RÉSOLUTION MÉCANIQUE</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { n: '1', txt: 'Définir le système et le référentiel galiléen', color: '#38bdf8' },
              { n: '2', txt: 'Faire le bilan des forces (diagramme corps libre)', color: '#a78bfa' },
              { n: '3', txt: 'Appliquer le PFD : m a→ = ΣF→', color: '#fbbf24' },
              { n: '4', txt: 'Projeter sur les axes → équations scalaires', color: '#34d399' },
            ].map((step, i) => (
              <div key={i} className="rounded-xl p-3 text-center" style={{ background: `${step.color}10`, border: `1px solid ${step.color}30` }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mx-auto mb-2" style={{ background: step.color, color: '#0e1418' }}>{step.n}</div>
                <div className="text-xs" style={{ color: '#94a3b8' }}>{step.txt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}