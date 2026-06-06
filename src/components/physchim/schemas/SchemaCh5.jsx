import React from 'react';
import Math from '../Math';

const F = ({ e }) => <Math expr={e} />;

// ─── Schéma Bilan Ch.5 : Dosage par titrage ──────────────────────────────────
export default function SchemaCh5() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Principe du titrage ════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(251,191,36,0.1)', borderBottom: '1px solid rgba(251,191,36,0.15)' }}>
          <span style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚗️ PRINCIPE DU TITRAGE</span>
        </div>
        <div className="p-4 space-y-3">
          {/* Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {[
              { label: 'Réaction UNIQUE', color: '#34d399' },
              { label: 'Réaction TOTALE', color: '#34d399' },
              { label: 'Réaction RAPIDE', color: '#34d399' },
            ].map((c, i) => (
              <div key={i} className="rounded-lg px-3 py-2 text-center text-xs font-semibold" style={{ background: `${c.color}12`, border: `1px solid ${c.color}35`, color: c.color }}>
                ✓ {c.label}
              </div>
            ))}
          </div>

          {/* Relation équivalence */}
          <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)' }}>
            <div className="text-xs font-semibold mb-2" style={{ color: '#fbbf24' }}>Relation à l'équivalence</div>
            <div className="text-base"><F e="\frac{n_A}{a} = \frac{n_B}{b} \quad \Rightarrow \quad \frac{c_A V_A}{a} = \frac{c_B V_E}{b}" /></div>
            <div className="text-xs mt-2" style={{ color: '#64748b' }}>a, b : coefficients stœchiométriques · VE : volume équivalent versé</div>
          </div>

          {/* Dispositif simplifié */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl p-3" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#38bdf8' }}>Montage de titrage</div>
              <div className="space-y-1 text-xs" style={{ color: '#94a3b8' }}>
                <div>• Burette graduée : solution titrante (<F e="c_B" /> connue)</div>
                <div>• Bécher : solution titrée (<F e="c_A" /> inconnue, <F e="V_A" /> connu)</div>
                <div>• Sonde : conductimètre ou pH-mètre</div>
                <div>• Agitateur magnétique</div>
              </div>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#34d399' }}>Méthode</div>
              <div className="space-y-1 text-xs" style={{ color: '#94a3b8' }}>
                <div>1. Ajouter la solution titrante goutte à goutte</div>
                <div>2. Mesurer σ ou pH à chaque ajout</div>
                <div>3. Tracer la courbe en fonction de V</div>
                <div>4. Repérer <F e="V_E" /> → calculer <F e="c_A" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Suivi conductimétrique ═════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📡 SUIVI CONDUCTIMÉTRIQUE</span>
        </div>
        <div className="p-4 space-y-3">
          {/* Loi de Kohlrausch */}
          <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
            <div className="text-xs font-semibold mb-2" style={{ color: '#38bdf8' }}>Loi de Kohlrausch</div>
            <div className="text-base"><F e="\sigma = \sum_i \lambda_i\,[X_i]" /></div>
            <div className="text-xs mt-1" style={{ color: '#64748b' }}><F e="\lambda_i" /> : conductivité molaire ionique (S·m²·mol⁻¹)</div>
          </div>

          {/* Courbe conductimétrique — SVG */}
          <div>
            <div className="text-xs font-semibold mb-2" style={{ color: '#e2e8f0' }}>Courbe σ = f(V) — allure type</div>
            <svg viewBox="0 0 420 160" className="w-full" style={{ maxHeight: 160 }}>
              <defs>
                <marker id="aAxC5" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L7,3 z" fill="#64748b" />
                </marker>
              </defs>
              {/* Axes */}
              <line x1="50" y1="130" x2="390" y2="130" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aAxC5)" />
              <line x1="50" y1="130" x2="50" y2="15" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aAxC5)" />
              <text x="393" y="134" fontSize="10" fill="#94a3b8" fontFamily="JetBrains Mono">V</text>
              <text x="20" y="20" fontSize="9" fill="#94a3b8" fontFamily="JetBrains Mono">σ</text>

              {/* VE */}
              <line x1="220" y1="15" x2="220" y2="135" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="5,3" />
              <text x="220" y="148" fontSize="9" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">VE</text>

              {/* Droite avant équivalence (descend) */}
              <line x1="55" y1="60" x2="220" y2="115" stroke="#38bdf8" strokeWidth="2.5" />
              {/* Droite après équivalence (monte) */}
              <line x1="220" y1="115" x2="380" y2="55" stroke="#38bdf8" strokeWidth="2.5" />

              {/* Point VE — cercle */}
              <circle cx="220" cy="115" r="5" fill="#fbbf24" />

              {/* Labels */}
              <text x="100" y="55" fontSize="9" fill="#38bdf8" fontFamily="Inter">Avant éq. :</text>
              <text x="100" y="66" fontSize="9" fill="#38bdf8" fontFamily="Inter">ions réactifs disparaissent</text>
              <text x="270" y="55" fontSize="9" fill="#38bdf8" fontFamily="Inter">Après éq. :</text>
              <text x="270" y="66" fontSize="9" fill="#38bdf8" fontFamily="Inter">excès titrante</text>
            </svg>
          </div>

          <div className="text-xs" style={{ color: '#64748b' }}>
            Détermination de <F e="V_E" /> : intersection des deux demi-droites ajustées (régression linéaire)
          </div>

          <div className="rounded-xl px-3 py-2" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
            <div className="text-xs font-semibold mb-1" style={{ color: '#38bdf8' }}>Conductivité ≠ Conductance</div>
            <div className="text-xs" style={{ color: '#94a3b8' }}>
              <F e="G = \dfrac{I}{U}" /> (S) · <F e="\sigma = G \cdot \dfrac{l}{S}" /> (S·m⁻¹)
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 3 : Suivi pH-métrique ══════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(244,114,182,0.1)', borderBottom: '1px solid rgba(244,114,182,0.15)' }}>
          <span style={{ color: '#f472b6', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📈 SUIVI pH-MÉTRIQUE</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="text-xs" style={{ color: '#94a3b8' }}>
            Applicable aux réactions acido-basiques. Grandeur suivie : pH du mélange.
          </div>

          {/* Courbe pH — SVG épuré */}
          <svg viewBox="0 0 420 170" className="w-full" style={{ maxHeight: 170 }}>
            <defs>
              <marker id="aAxP5" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#64748b" />
              </marker>
            </defs>
            {/* Axes */}
            <line x1="50" y1="140" x2="390" y2="140" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aAxP5)" />
            <line x1="50" y1="140" x2="50" y2="10" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aAxP5)" />
            <text x="393" y="144" fontSize="10" fill="#94a3b8" fontFamily="JetBrains Mono">V</text>
            <text x="28" y="18" fontSize="9" fill="#94a3b8" fontFamily="JetBrains Mono">pH</text>

            {/* Graduation pH */}
            {[2,4,6,8,10,12].map(v => (
              <g key={v}>
                <line x1="46" y1={140 - v*10} x2="54" y2={140 - v*10} stroke="#475569" strokeWidth="1" />
                <text x="42" y={143 - v*10} fontSize="8" fill="#64748b" textAnchor="end" fontFamily="JetBrains Mono">{v}</text>
              </g>
            ))}

            {/* VE */}
            <line x1="210" y1="10" x2="210" y2="145" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="5,3" />
            <text x="210" y="158" fontSize="9" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">VE</text>

            {/* Courbe en S */}
            <path d="M55,130 C80,128 130,125 165,115 C185,110 200,95 210,80 C220,65 225,52 240,42 C270,28 320,22 375,20"
              fill="none" stroke="#f472b6" strokeWidth="2.5" />

            {/* pHe — ligne horizontale */}
            <line x1="46" y1="80" x2="213" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
            <text x="40" y="80" fontSize="8" fill="#94a3b8" textAnchor="end" fontFamily="JetBrains Mono">pHe</text>

            {/* Tangentes */}
            <line x1="160" y1="130" x2="200" y2="28" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="220" y1="130" x2="260" y2="28" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="300" y="65" fontSize="9" fill="#34d399" fontFamily="Inter">méthode</text>
            <text x="300" y="76" fontSize="9" fill="#34d399" fontFamily="Inter">tangentes</text>

            {/* Point VE */}
            <circle cx="210" cy="80" r="5" fill="#fbbf24" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl px-3 py-2" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.2)' }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#f472b6' }}>Méthode des tangentes</div>
              <div className="text-xs" style={{ color: '#94a3b8' }}>
                Tracer 2 tangentes parallèles au saut de pH + bissectrice → <F e="V_E" /> à l'intersection
              </div>
            </div>
            <div className="rounded-xl px-3 py-2" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)' }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#34d399' }}>Méthode de la dérivée</div>
              <div className="text-xs" style={{ color: '#94a3b8' }}>
                Tracer <F e="\text{d(pH)/d}V" /> → pic = <F e="V_E" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}