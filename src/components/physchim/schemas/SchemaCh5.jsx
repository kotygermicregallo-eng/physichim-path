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
        <div className="p-4">
          <svg viewBox="0 0 520 260" className="w-full" style={{ maxHeight: 260 }}>
            <defs>
              <marker id="aT5" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#c8902f" />
              </marker>
            </defs>

            {/* ── Support / tige ── */}
            <rect x="120" y="20" width="6" height="210" rx="3" fill="#475569" />
            <rect x="80" y="228" width="86" height="8" rx="3" fill="#334155" />

            {/* ── Burette ── */}
            <rect x="126" y="20" width="20" height="140" rx="4" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Graduation burette */}
            {[0,1,2,3,4].map(i => (
              <line key={i} x1="146" y1={30 + i*26} x2="152" y2={30 + i*26} stroke="#38bdf8" strokeWidth="1" />
            ))}
            {/* Robinet */}
            <rect x="124" y="155" width="24" height="8" rx="3" fill="#64748b" />
            {/* Pointe burette */}
            <path d="M133,163 L136,185 L139,163 Z" fill="rgba(56,189,248,0.4)" stroke="#38bdf8" strokeWidth="1" />
            {/* Goutte */}
            <ellipse cx="136" cy="190" rx="3" ry="4" fill="#38bdf8" opacity="0.7" />

            {/* Labels burette */}
            <text x="155" y="40" fontSize="9" fill="#38bdf8" fontFamily="Inter">Burette graduée</text>
            <text x="155" y="52" fontSize="8.5" fill="#64748b" fontFamily="Inter">(solution titrante c_B connue)</text>

            {/* ── Bécher ── */}
            <path d="M82,188 L74,240 L200,240 L192,188 Z" fill="rgba(52,211,153,0.1)" stroke="#34d399" strokeWidth="1.8" />
            {/* Liquide dans bécher */}
            <path d="M84,210 L76,240 L198,240 L190,210 Z" fill="rgba(52,211,153,0.18)" />
            {/* Agitateur magnétique (base) */}
            <rect x="72" y="238" width="132" height="16" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <ellipse cx="138" cy="246" rx="20" ry="5" fill="rgba(200,144,47,0.2)" stroke="#c8902f" strokeWidth="1" />

            {/* Barreau aimanté dans le bécher */}
            <rect x="120" y="228" width="36" height="8" rx="4" fill="#64748b" stroke="#94a3b8" strokeWidth="1" />

            {/* Labels bécher */}
            <text x="56" y="215" fontSize="9" fill="#34d399" fontFamily="Inter" textAnchor="end">Solution</text>
            <text x="56" y="226" fontSize="9" fill="#34d399" fontFamily="Inter" textAnchor="end">titrée</text>
            <text x="75" y="252" fontSize="8.5" fill="#94a3b8" fontFamily="Inter">Agitateur</text>
            <text x="75" y="262" fontSize="8.5" fill="#94a3b8" fontFamily="Inter">magnétique</text>
            <text x="155" y="252" fontSize="8.5" fill="#94a3b8" fontFamily="Inter">Barreau aimant.</text>

            {/* ── Sonde pH / conductimètre ── */}
            {/* Tige sonde */}
            <rect x="172" y="165" width="6" height="60" rx="3" fill="#a78bfa" />
            <ellipse cx="175" cy="228" rx="5" ry="3" fill="#a78bfa" opacity="0.8" />
            <text x="183" y="175" fontSize="9" fill="#a78bfa" fontFamily="Inter">Sonde</text>

            {/* Fil sonde → appareil */}
            <path d="M178,195 Q230,180 260,195" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4,2" />

            {/* ── Appareil (conductimètre / pH-mètre) ── */}
            <rect x="255" y="188" width="80" height="55" rx="8" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" strokeWidth="1.5" />
            {/* Écran */}
            <rect x="263" y="196" width="64" height="22" rx="4" fill="rgba(0,0,0,0.4)" />
            <text x="295" y="211" fontSize="10" fill="#34d399" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">σ / pH</text>
            {/* Boutons */}
            <circle cx="270" cy="228" r="4" fill="#475569" />
            <circle cx="284" cy="228" r="4" fill="#475569" />
            <circle cx="298" cy="228" r="4" fill="#475569" />

            {/* Label appareil */}
            <text x="295" y="255" fontSize="9.5" fill="#c8902f" fontFamily="Inter" textAnchor="middle" fontWeight="600">Conductimètre</text>
            <text x="295" y="267" fontSize="9.5" fill="#c8902f" fontFamily="Inter" textAnchor="middle" fontWeight="600">ou pH-mètre</text>

            {/* Flèches vers courbes */}
            <line x1="340" y1="205" x2="375" y2="185" stroke="#c8902f" strokeWidth="1.8" markerEnd="url(#aT5)" strokeDasharray="4,2" />
            <line x1="340" y1="225" x2="375" y2="245" stroke="#c8902f" strokeWidth="1.8" markerEnd="url(#aT5)" strokeDasharray="4,2" />

            {/* ── Mini courbe conductimétrique ── */}
            <rect x="375" y="155" width="130" height="80" rx="6" fill="rgba(56,189,248,0.07)" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
            <line x1="385" y1="225" x2="495" y2="225" stroke="#475569" strokeWidth="1" />
            <line x1="385" y1="225" x2="385" y2="160" stroke="#475569" strokeWidth="1" />
            <line x1="389" y1="195" x2="432" y2="215" stroke="#38bdf8" strokeWidth="2" />
            <line x1="432" y1="215" x2="490" y2="185" stroke="#38bdf8" strokeWidth="2" />
            <line x1="432" y1="158" x2="432" y2="228" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="3,2" />
            <text x="432" y="237" fontSize="7.5" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">VE</text>
            <text x="390" y="157" fontSize="7.5" fill="#38bdf8" fontFamily="JetBrains Mono">σ(V)</text>

            {/* ── Mini courbe pH-métrique ── */}
            <rect x="375" y="245" width="130" height="80" rx="6" fill="rgba(244,114,182,0.07)" stroke="rgba(244,114,182,0.3)" strokeWidth="1" />
            <line x1="385" y1="315" x2="495" y2="315" stroke="#475569" strokeWidth="1" />
            <line x1="385" y1="315" x2="385" y2="250" stroke="#475569" strokeWidth="1" />
            <path d="M389,308 C400,306 415,303 425,295 C432,280 435,265 442,258 C450,252 465,250 490,249"
              fill="none" stroke="#f472b6" strokeWidth="2" />
            <line x1="435" y1="248" x2="435" y2="318" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="3,2" />
            <text x="435" y="326" fontSize="7.5" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">VE</text>
            <text x="390" y="249" fontSize="7.5" fill="#f472b6" fontFamily="JetBrains Mono">pH(V)</text>
          </svg>

          {/* Légende */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
            {[
              { color: '#38bdf8', label: 'Burette', detail: 'Solution titrante c_B' },
              { color: '#34d399', label: 'Bécher', detail: 'Solution titrée c_A' },
              { color: '#a78bfa', label: 'Sonde', detail: 'Conductimètre / pH-mètre' },
              { color: '#c8902f', label: 'Appareil', detail: 'Mesure σ ou pH' },
            ].map((item, i) => (
              <div key={i} className="rounded-lg px-2 py-1.5 text-center" style={{ background: `${item.color}10`, border: `1px solid ${item.color}30` }}>
                <div className="text-xs font-semibold" style={{ color: item.color }}>{item.label}</div>
                <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{item.detail}</div>
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