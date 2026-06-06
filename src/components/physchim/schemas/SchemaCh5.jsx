import React from 'react';
import Math from '../Math';

const F = ({ e }) => <Math expr={e} />;

// ─── Schéma Bilan Ch.5 : Dosage par titrage ──────────────────────────────────
export default function SchemaCh5() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 0 : Montage de titrage ═════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔬 MONTAGE DE TITRAGE — PRINCIPE</span>
        </div>
        <div className="p-4 space-y-4">
          {/* ─ Montage ─ */}
          <svg viewBox="0 0 500 230" className="w-full" style={{ maxHeight: 230 }}>
            <defs>
              <marker id="aT5" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#c8902f" />
              </marker>
            </defs>

            {/* ── Support / tige ── */}
            <rect x="148" y="10" width="6" height="190" rx="3" fill="#475569" />
            <rect x="108" y="198" width="86" height="7" rx="3" fill="#334155" />

            {/* ── Burette ── */}
            <rect x="154" y="10" width="22" height="130" rx="4" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="1.5" />
            {[0,1,2,3,4].map(i => (
              <line key={i} x1="176" y1={22 + i*24} x2="181" y2={22 + i*24} stroke="#38bdf8" strokeWidth="1" />
            ))}
            <rect x="152" y="136" width="26" height="7" rx="3" fill="#64748b" />
            <path d="M161,143 L165,162 L169,143 Z" fill="rgba(56,189,248,0.4)" stroke="#38bdf8" strokeWidth="1" />
            <ellipse cx="165" cy="167" rx="3" ry="4" fill="#38bdf8" opacity="0.8" />

            {/* Label burette */}
            <text x="186" y="26" fontSize="10" fill="#38bdf8" fontFamily="Inter" fontWeight="600">Burette graduée</text>
            <text x="186" y="39" fontSize="9" fill="#64748b" fontFamily="Inter">Solution titrante (c_B connue)</text>

            {/* ── Bécher ── */}
            <path d="M108,168 L100,218 L232,218 L224,168 Z" fill="rgba(52,211,153,0.1)" stroke="#34d399" strokeWidth="1.8" />
            <path d="M110,188 L102,218 L230,218 L222,188 Z" fill="rgba(52,211,153,0.18)" />
            {/* base agitateur */}
            <rect x="98" y="216" width="138" height="14" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <ellipse cx="167" cy="223" rx="22" ry="5" fill="rgba(200,144,47,0.2)" stroke="#c8902f" strokeWidth="1" />
            {/* barreau */}
            <rect x="148" y="208" width="38" height="7" rx="3" fill="#64748b" stroke="#94a3b8" strokeWidth="1" />

            {/* Labels bécher */}
            <text x="92" y="188" fontSize="10" fill="#34d399" fontFamily="Inter" textAnchor="end" fontWeight="600">Solution</text>
            <text x="92" y="200" fontSize="10" fill="#34d399" fontFamily="Inter" textAnchor="end" fontWeight="600">titrée</text>
            <text x="102" y="229" fontSize="8.5" fill="#94a3b8" fontFamily="Inter">Agitateur magn.</text>
            <text x="192" y="229" fontSize="8.5" fill="#94a3b8" fontFamily="Inter">Barreau aimanté</text>

            {/* ── Sonde ── */}
            <rect x="205" y="150" width="6" height="58" rx="3" fill="#a78bfa" />
            <ellipse cx="208" cy="210" rx="5" ry="3" fill="#a78bfa" opacity="0.8" />
            <text x="215" y="162" fontSize="10" fill="#a78bfa" fontFamily="Inter" fontWeight="600">Sonde</text>
            <path d="M211,178 Q248,162 272,175" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4,2" />

            {/* ── Appareil ── */}
            <rect x="268" y="162" width="88" height="58" rx="8" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" strokeWidth="1.5" />
            <rect x="276" y="170" width="72" height="24" rx="4" fill="rgba(0,0,0,0.4)" />
            <text x="312" y="186" fontSize="11" fill="#34d399" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">σ / pH</text>
            <circle cx="283" cy="205" r="4" fill="#475569" />
            <circle cx="297" cy="205" r="4" fill="#475569" />
            <circle cx="311" cy="205" r="4" fill="#475569" />
            <text x="312" y="232" fontSize="9.5" fill="#c8902f" fontFamily="Inter" textAnchor="middle" fontWeight="600">Conductimètre / pH-mètre</text>

            {/* ── Flèches vers courbes ── */}
            <line x1="358" y1="178" x2="390" y2="165" stroke="#c8902f" strokeWidth="1.8" markerEnd="url(#aT5)" strokeDasharray="4,2" />
            <line x1="358" y1="198" x2="390" y2="215" stroke="#c8902f" strokeWidth="1.8" markerEnd="url(#aT5)" strokeDasharray="4,2" />

            {/* ── Courbe conductimétrique ── */}
            <rect x="390" y="130" width="105" height="70" rx="6" fill="rgba(56,189,248,0.07)" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
            <line x1="398" y1="192" x2="488" y2="192" stroke="#475569" strokeWidth="1" />
            <line x1="398" y1="192" x2="398" y2="135" stroke="#475569" strokeWidth="1" />
            <line x1="401" y1="168" x2="438" y2="185" stroke="#38bdf8" strokeWidth="2" />
            <line x1="438" y1="185" x2="483" y2="158" stroke="#38bdf8" strokeWidth="2" />
            <line x1="438" y1="133" x2="438" y2="194" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="3,2" />
            <text x="438" y="205" fontSize="8" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">VE</text>
            <text x="400" y="134" fontSize="8" fill="#38bdf8" fontFamily="JetBrains Mono">σ(V)</text>

            {/* ── Courbe pH-métrique ── */}
            <rect x="390" y="210" width="105" height="75" rx="6" fill="rgba(244,114,182,0.07)" stroke="rgba(244,114,182,0.3)" strokeWidth="1" />
            <line x1="398" y1="277" x2="488" y2="277" stroke="#475569" strokeWidth="1" />
            <line x1="398" y1="277" x2="398" y2="215" stroke="#475569" strokeWidth="1" />
            <path d="M401,272 C410,270 422,267 432,260 C438,248 441,233 446,226 C453,220 465,218 483,217"
              fill="none" stroke="#f472b6" strokeWidth="2" />
            <line x1="444" y1="213" x2="444" y2="279" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="3,2" />
            <text x="444" y="290" fontSize="8" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">VE</text>
            <text x="400" y="216" fontSize="8" fill="#f472b6" fontFamily="JetBrains Mono">pH(V)</text>
          </svg>

          {/* ─ Légende claire ─ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { color: '#38bdf8', icon: '🧪', label: 'Burette graduée', detail: 'Solution titrante — c_B connue' },
              { color: '#34d399', icon: '🫙', label: 'Bécher', detail: 'Solution titrée — c_A inconnue' },
              { color: '#a78bfa', icon: '📡', label: 'Sonde', detail: 'Conductimètre ou pH-mètre' },
              { color: '#c8902f', icon: '📟', label: 'Appareil de mesure', detail: 'Mesure σ (conductimétrie) ou pH' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl px-3 py-2.5" style={{ background: `${item.color}10`, border: `1px solid ${item.color}35` }}>
                <div className="text-base mb-1">{item.icon}</div>
                <div className="text-xs font-bold" style={{ color: item.color }}>{item.label}</div>
                <div className="text-xs mt-0.5" style={{ color: '#94a3b8' }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

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