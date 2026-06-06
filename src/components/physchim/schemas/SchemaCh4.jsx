import React from 'react';
import Math from '../Math';

const F = ({ e }) => <Math expr={e} />;

// ─── Schéma Bilan Ch.4 : Force des acides et des bases ───────────────────────
export default function SchemaCh4() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Produit ionique Ke ══════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>💧 PRODUIT IONIQUE DE L'EAU</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="rounded-xl px-4 py-3 text-center" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
            <div className="text-sm mb-2"><F e="2\,\text{H}_2\text{O}_{(\ell)} \rightleftharpoons \text{H}_3\text{O}^+_{(aq)} + \text{HO}^-_{(aq)}" /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#38bdf8' }}>Produit ionique</div>
              <div className="text-sm"><F e="K_e = \frac{[\text{H}_3\text{O}^+]_{\text{éq}}[\text{HO}^-]_{\text{éq}}}{(c^0)^2} = 10^{-pK_e}" /></div>
            </div>
            <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#fbbf24' }}>pKe à 25°C</div>
              <div className="text-sm"><F e="pK_e = -\log(K_e) = 14{,}00" /></div>
            </div>
            <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#34d399' }}>Conséquence</div>
              <div className="text-sm"><F e="pK_e = \text{pH} + \text{pOH} = 14" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Force des acides — Ka et pKa ═══════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(244,114,182,0.1)', borderBottom: '1px solid rgba(244,114,182,0.15)' }}>
          <span style={{ color: '#f472b6', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚗️ FORCE DES ACIDES — CONSTANTE Ka</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="rounded-xl px-4 py-3 text-center" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.2)' }}>
            <div className="text-sm"><F e="\text{AH}_{(aq)} + \text{H}_2\text{O}_{(\ell)} \rightleftharpoons \text{A}^-_{(aq)} + \text{H}_3\text{O}^+_{(aq)}" /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.2)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#f472b6' }}>Constante d'acidité</div>
              <div className="text-sm"><F e="K_A = \frac{[\text{A}^-]_{\text{éq}}[\text{H}_3\text{O}^+]_{\text{éq}}}{c^0\,[\text{AH}]_{\text{éq}}} = 10^{-pK_A}" /></div>
            </div>
            <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#fbbf24' }}>pKa</div>
              <div className="text-sm"><F e="pK_A = -\log(K_A)" /></div>
              <div className="text-xs mt-2" style={{ color: '#64748b' }}>Plus pKa petit → acide plus fort</div>
            </div>
          </div>

          {/* Axe pKa — force des acides/bases */}
          <div>
            <div className="text-xs font-semibold mb-2" style={{ color: '#e2e8f0' }}>Axe des pKa — force de l'acide AH et de la base A⁻</div>
            <svg viewBox="0 0 500 85" className="w-full" style={{ maxHeight: 85 }}>
              <defs>
                <marker id="aF4L" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
                  <path d="M8,0 L8,6 L0,3 z" fill="#f87171" />
                </marker>
                <marker id="aF4R" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#38bdf8" />
                </marker>
              </defs>
              {/* Axe pKa */}
              <line x1="30" y1="40" x2="470" y2="40" stroke="#475569" strokeWidth="1.5" />
              {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(i => (
                <g key={i}>
                  <line x1={30 + i*33.1} y1="35" x2={30 + i*33.1} y2="45" stroke="#475569" strokeWidth="1" />
                  <text x={30 + i*33.1} y="58" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="JetBrains Mono">{i}</text>
                </g>
              ))}
              <text x="22" y="44" fontSize="9" fill="#94a3b8" fontFamily="JetBrains Mono">pKa</text>

              {/* Flèche force acide (vers gauche = fort) */}
              <line x1="250" y1="25" x2="45" y2="25" stroke="#f87171" strokeWidth="2.5" markerEnd="url(#aF4L)" />
              <text x="145" y="20" fontSize="9" fill="#f87171" textAnchor="middle" fontFamily="Inter" fontWeight="600">Force de l'acide AH →</text>

              {/* Flèche force base (vers droite = fort) */}
              <line x1="250" y1="72" x2="460" y2="72" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#aF4R)" />
              <text x="357" y="82" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="Inter" fontWeight="600">← Force de la base A⁻</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ══ Bloc 3 : Acide fort vs Acide faible ═════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-4" style={{ background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.22)' }}>
          <div className="text-xs font-semibold mb-3" style={{ color: '#f87171', fontFamily: 'JetBrains Mono, monospace' }}>🔴 ACIDE FORT (τ = 1)</div>
          <div className="space-y-2.5">
            <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(248,113,113,0.07)', border: '1px solid rgba(248,113,113,0.2)' }}>
              <div className="text-xs mb-1" style={{ color: '#94a3b8' }}>Dissociation totale :</div>
              <div className="text-sm"><F e="[\text{H}_3\text{O}^+]_{\text{éq}} = c" /></div>
            </div>
            <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(248,113,113,0.07)', border: '1px solid rgba(248,113,113,0.2)' }}>
              <div className="text-xs mb-1" style={{ color: '#94a3b8' }}>pH :</div>
              <div className="text-sm"><F e="\text{pH} = -\log\!\left(\dfrac{c}{c^0}\right)" /></div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-4" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.22)' }}>
          <div className="text-xs font-semibold mb-3" style={{ color: '#fbbf24', fontFamily: 'JetBrains Mono, monospace' }}>🟡 ACIDE FAIBLE (τ &lt; 1)</div>
          <div className="space-y-2.5">
            <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
              <div className="text-xs mb-1" style={{ color: '#94a3b8' }}>Approximation si τ &lt; 5% :</div>
              <div className="text-sm"><F e="[\text{H}_3\text{O}^+]_{\text{éq}} \approx \sqrt{K_A \cdot c}" /></div>
            </div>
            <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
              <div className="text-xs mb-1" style={{ color: '#94a3b8' }}>pH :</div>
              <div className="text-sm"><F e="\text{pH} \approx \dfrac{1}{2}(pK_A - \log c)" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 4 : Henderson-Hasselbalch + Diagramme de prédominance ═══════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(167,139,250,0.1)', borderBottom: '1px solid rgba(167,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📊 HENDERSON-HASSELBALCH + DIAGRAMME DE PRÉDOMINANCE</span>
        </div>
        <div className="p-4 space-y-4">

          {/* Henderson */}
          <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(167,139,250,0.07)', border: '1px solid rgba(167,139,250,0.2)' }}>
            <div className="text-xs font-semibold mb-2" style={{ color: '#a78bfa' }}>Relation de Henderson-Hasselbalch</div>
            <div className="text-base"><F e="\text{pH} = pK_A + \log\!\left(\dfrac{[\text{A}^-]_{\text{éq}}}{[\text{AH}]_{\text{éq}}}\right)" /></div>
          </div>

          {/* Diagramme de prédominance — SVG épuré */}
          <div>
            <div className="text-xs font-semibold mb-2" style={{ color: '#e2e8f0' }}>Diagramme de prédominance</div>
            <svg viewBox="0 0 500 70" className="w-full" style={{ maxHeight: 70 }}>
              <defs>
                <marker id="aAx4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#64748b" />
                </marker>
              </defs>
              {/* Axe pH */}
              <line x1="20" y1="35" x2="470" y2="35" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#aAx4)" />
              <text x="472" y="39" fontSize="11" fill="#94a3b8" fontFamily="JetBrains Mono">pH</text>

              {/* Zone AH prédomine (gauche) */}
              <rect x="22" y="20" width="207" height="24" rx="6" fill="rgba(248,113,113,0.15)" stroke="#f87171" strokeWidth="1" />
              <text x="126" y="35" fontSize="12" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">AH prédomine</text>

              {/* Séparateur pKa */}
              <line x1="230" y1="12" x2="230" y2="52" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,2" />
              <text x="230" y="9" fontSize="9.5" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">pH = pKa</text>
              <text x="230" y="62" fontSize="8.5" fill="#fbbf24" textAnchor="middle" fontFamily="Inter">[AH] = [A⁻]</text>

              {/* Zone A⁻ prédomine (droite) */}
              <rect x="232" y="20" width="235" height="24" rx="6" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="1" />
              <text x="349" y="35" fontSize="12" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">A⁻ prédomine</text>
            </svg>
          </div>

          {/* Règle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(248,113,113,0.07)', border: '1px solid rgba(248,113,113,0.2)' }}>
              <div className="text-xs"><F e="\text{pH} < pK_A \Rightarrow [\text{AH}] > [\text{A}^-]" /></div>
            </div>
            <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="text-xs"><F e="\text{pH} > pK_A \Rightarrow [\text{A}^-] > [\text{AH}]" /></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}