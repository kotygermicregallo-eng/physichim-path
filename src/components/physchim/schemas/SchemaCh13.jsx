import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';

// ─── Schéma Bilan Ch.13 : Mouvement des planètes et satellites ────────────────
export default function SchemaCh13() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : 3 Lois de Kepler ══════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(251,191,36,0.1)', borderBottom: '1px solid rgba(251,191,36,0.15)' }}>
          <span style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🪐 LOIS DE KEPLER</span>
        </div>
        <div className="p-4 space-y-3">
          <ZoomableSVG maxHeight={230} caption="1ère loi : ellipse — 2ème loi : aires égales en Δt égaux — 3ème loi : T²/a³ = cste">
            <svg viewBox="0 0 540 220" style={{ width: '100%' }}>
              <defs>
                <marker id="aK13" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fbbf24" /></marker>
                <marker id="aR13" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f87171" /></marker>
                <marker id="aG13" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#34d399" /></marker>
              </defs>

              {/* ─── 1ère loi : Ellipse ─── */}
              <rect x="2" y="2" width="168" height="210" rx="10" fill="rgba(251,191,36,0.05)" stroke="rgba(251,191,36,0.25)" strokeWidth="1.2" />
              <text x="86" y="18" fontSize="9.5" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">1ère loi</text>
              <text x="86" y="30" fontSize="8.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Orbites = ellipses</text>
              {/* Ellipse */}
              <ellipse cx="86" cy="120" rx="70" ry="48" fill="none" stroke="#fbbf24" strokeWidth="1.8" />
              {/* Foyer (astre) */}
              <circle cx="116" cy="120" r="7" fill="#fb923c" />
              <text x="116" y="140" fontSize="8" fill="#fb923c" textAnchor="middle" fontFamily="Inter">Astre (F)</text>
              {/* Satellite */}
              <circle cx="50" cy="90" r="4" fill="#38bdf8" />
              <text x="50" y="80" fontSize="8" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">P</text>
              {/* Grand axe */}
              <line x1="16" y1="120" x2="156" y2="120" stroke="rgba(251,191,36,0.5)" strokeWidth="1" strokeDasharray="4,3" />
              <text x="86" y="115" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">Grand axe 2a</text>
              {/* Apoastre / Périastre */}
              <text x="18" y="134" fontSize="7.5" fill="#a78bfa" fontFamily="Inter">Apoastre A</text>
              <text x="108" y="134" fontSize="7.5" fill="#34d399" fontFamily="Inter">Périastre B</text>
              {/* Accélération vers foyer */}
              <line x1="52" y1="90" x2="90" y2="108" stroke="#f87171" strokeWidth="1.8" markerEnd="url(#aR13)" />
              <text x="62" y="104" fontSize="7.5" fill="#f87171" fontFamily="Inter">a→</text>
              {/* a = demi-grand axe */}
              <line x1="16" y1="192" x2="86" y2="192" stroke="#fbbf24" strokeWidth="1.2" />
              <line x1="16" y1="188" x2="16" y2="196" stroke="#fbbf24" strokeWidth="1" />
              <line x1="86" y1="188" x2="86" y2="196" stroke="#fbbf24" strokeWidth="1" />
              <text x="51" y="206" fontSize="8" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">a</text>
              <text x="86" y="206" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">(demi-grand axe)</text>

              {/* ─── 2ème loi : Aires ─── */}
              <rect x="184" y="2" width="168" height="210" rx="10" fill="rgba(52,211,153,0.05)" stroke="rgba(52,211,153,0.25)" strokeWidth="1.2" />
              <text x="268" y="18" fontSize="9.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">2ème loi</text>
              <text x="268" y="30" fontSize="8.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Aires égales / Δt égaux</text>
              {/* Ellipse */}
              <ellipse cx="268" cy="120" rx="68" ry="46" fill="none" stroke="#34d399" strokeWidth="1.8" />
              {/* Foyer */}
              <circle cx="295" cy="120" r="7" fill="#fb923c" />
              {/* Secteur 1 (loin → grande aire, grande base) */}
              <path d="M295,120 L210,105 L222,135 Z" fill="rgba(52,211,153,0.25)" stroke="#34d399" strokeWidth="1" />
              <text x="228" y="122" fontSize="7.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">S</text>
              <text x="206" y="97" fontSize="7.5" fill="#38bdf8" fontFamily="JetBrains Mono">P₁</text>
              <text x="220" y="143" fontSize="7.5" fill="#38bdf8" fontFamily="JetBrains Mono">P₂</text>
              {/* Secteur 2 (près → petite aire, petite base) */}
              <path d="M295,120 L338,88 L350,110 Z" fill="rgba(52,211,153,0.25)" stroke="#34d399" strokeWidth="1" />
              <text x="337" y="108" fontSize="7.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">S'</text>
              <text x="342" y="83" fontSize="7.5" fill="#a78bfa" fontFamily="JetBrains Mono">P'₁</text>
              <text x="354" y="118" fontSize="7.5" fill="#a78bfa" fontFamily="JetBrains Mono">P'₂</text>
              <text x="268" y="175" fontSize="8" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">S' = S</text>
              <text x="268" y="190" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">v ↑ près de l'astre</text>
              <text x="268" y="202" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">v ↓ loin de l'astre</text>

              {/* ─── 3ème loi : T²/a³ ─── */}
              <rect x="366" y="2" width="170" height="210" rx="10" fill="rgba(168,139,250,0.05)" stroke="rgba(168,139,250,0.25)" strokeWidth="1.2" />
              <text x="451" y="18" fontSize="9.5" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">3ème loi</text>
              <text x="451" y="30" fontSize="8.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">T²/a³ = cste</text>
              {/* Orbite intérieure */}
              <circle cx="451" cy="110" r="28" fill="none" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="451" cy="82" r="4" fill="#fbbf24" />
              <text x="468" y="80" fontSize="7.5" fill="#fbbf24" fontFamily="JetBrains Mono">T</text>
              <line x1="423" y1="110" x2="451" y2="110" stroke="rgba(251,191,36,0.5)" strokeWidth="1" strokeDasharray="3,2" />
              <text x="436" y="107" fontSize="7" fill="#fbbf24" fontFamily="JetBrains Mono">a</text>
              {/* Orbite extérieure */}
              <circle cx="451" cy="110" r="55" fill="none" stroke="#f472b6" strokeWidth="2" strokeDasharray="5,3" />
              <circle cx="451" cy="55" r="4" fill="#f472b6" />
              <text x="468" y="53" fontSize="7.5" fill="#f472b6" fontFamily="JetBrains Mono">T'</text>
              <line x1="396" y1="110" x2="451" y2="110" stroke="rgba(244,114,182,0.5)" strokeWidth="1" strokeDasharray="3,2" />
              <text x="418" y="107" fontSize="7" fill="#f472b6" fontFamily="JetBrains Mono">a'</text>
              {/* Astre central */}
              <circle cx="451" cy="110" r="9" fill="#fb923c" />
              <text x="451" y="113" fontSize="7" fill="#fff" textAnchor="middle" fontFamily="Inter">O</text>
              {/* 3ème loi formule */}
              <text x="451" y="178" fontSize="9" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">T²/a³ = T'²/a'³</text>
              <text x="451" y="192" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="Inter">= 4π²/(GM)</text>
              <text x="451" y="206" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">même astre central</text>
            </svg>
          </ZoomableSVG>
          <SchemaLegend cols={3} items={[
            { color: '#fbbf24', label: '1ère loi', detail: 'Orbites elliptiques, astre au foyer' },
            { color: '#34d399', label: '2ème loi', detail: 'Aires égales en temps égaux' },
            { color: '#a78bfa', label: '3ème loi', detail: 'T²/a³ = 4π²/(GM) = cste' },
          ]} />
        </div>
      </div>

      {/* ══ Bloc 2 : Satellite circulaire + Frenet ═════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🛸 SATELLITE EN ORBITE CIRCULAIRE — PFD + FRENET</span>
        </div>
        <div className="p-4 space-y-3">
          <ZoomableSVG maxHeight={175} caption="PFD en repère de Frenet : F→ = −G(mM/r²) u→ → MCU → v = √(GM/r) — 3ème loi de Kepler redémontrée">
            <svg viewBox="0 0 520 165" style={{ width: '100%' }}>
              <defs>
                <marker id="aU13" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#38bdf8" /></marker>
                <marker id="aF13b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f87171" /></marker>
                <marker id="aV13" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#34d399" /></marker>
                <marker id="aN13b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f472b6" /></marker>
              </defs>

              {/* Orbite circulaire */}
              <circle cx="130" cy="82" r="65" fill="none" stroke="rgba(56,189,248,0.3)" strokeWidth="2" />

              {/* Astre central O */}
              <circle cx="130" cy="82" r="14" fill="rgba(251,146,60,0.5)" stroke="#fb923c" strokeWidth="2" />
              <text x="130" y="86" fontSize="10" fill="#fff" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">O</text>
              <text x="130" y="105" fontSize="8.5" fill="#fb923c" textAnchor="middle" fontFamily="Inter">masse M</text>

              {/* Satellite P */}
              <circle cx="178" cy="25" r="6" fill="#38bdf8" />
              <text x="190" y="24" fontSize="10" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">P (m)</text>

              {/* Rayon r */}
              <line x1="144" y1="72" x2="175" y2="29" stroke="rgba(56,189,248,0.5)" strokeWidth="1.2" strokeDasharray="4,3" />
              <text x="168" y="55" fontSize="8.5" fill="#38bdf8" fontFamily="JetBrains Mono">r</text>

              {/* Vecteur u (de O vers P) */}
              <line x1="144" y1="72" x2="172" y2="32" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#aU13)" />
              <text x="145" y="47" fontSize="9" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">u→</text>

              {/* Force F (de P vers O) */}
              <line x1="178" y1="25" x2="152" y2="58" stroke="#f87171" strokeWidth="2.2" markerEnd="url(#aF13b)" />
              <text x="148" y="36" fontSize="9" fill="#f87171" fontFamily="JetBrains Mono" fontWeight="700">F→</text>
              <text x="102" y="56" fontSize="8" fill="#f87171" fontFamily="Inter">= −G(mM/r²)u→</text>

              {/* Vitesse ut */}
              <line x1="178" y1="25" x2="220" y2="48" stroke="#34d399" strokeWidth="2.2" markerEnd="url(#aV13)" />
              <text x="225" y="45" fontSize="9" fill="#34d399" fontFamily="JetBrains Mono" fontWeight="700">v→ = v u→t</text>

              {/* un (centripète) */}
              <line x1="178" y1="25" x2="155" y2="50" stroke="#f472b6" strokeWidth="2" markerEnd="url(#aN13b)" />
              <text x="140" y="68" fontSize="9" fill="#f472b6" fontFamily="JetBrains Mono" fontWeight="700">u→n</text>

              {/* Sens du mouvement */}
              <path d="M100,20 Q68,35 65,70" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#aU13)" />
              <text x="40" y="42" fontSize="8.5" fill="#38bdf8" fontFamily="Inter">Sens du</text>
              <text x="40" y="53" fontSize="8.5" fill="#38bdf8" fontFamily="Inter">mouvement</text>

              {/* Démonstration PFD à droite */}
              <rect x="268" y="8" width="248" height="152" rx="8" fill="rgba(0,0,0,0.25)" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
              <text x="392" y="24" fontSize="9.5" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">PFD en repère de Frenet</text>
              <line x1="272" y1="29" x2="510" y2="29" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />

              <text x="274" y="44" fontSize="8.5" fill="#94a3b8" fontFamily="JetBrains Mono">Composante u→t :</text>
              <text x="274" y="57" fontSize="8.5" fill="#e2e8f0" fontFamily="JetBrains Mono">m dv/dt = 0  →  dv/dt = 0</text>
              <text x="274" y="68" fontSize="8" fill="#34d399" fontFamily="Inter">→ MCU (v constante) ✓</text>

              <line x1="272" y1="74" x2="510" y2="74" stroke="rgba(56,189,248,0.1)" strokeWidth="1" />
              <text x="274" y="87" fontSize="8.5" fill="#94a3b8" fontFamily="JetBrains Mono">Composante u→n :</text>
              <text x="274" y="100" fontSize="8.5" fill="#e2e8f0" fontFamily="JetBrains Mono">mv²/r = GmM/r²</text>
              <text x="274" y="113" fontSize="8.5" fill="#fbbf24" fontFamily="JetBrains Mono" fontWeight="700">→  v = √(GM/r)</text>

              <line x1="272" y1="119" x2="510" y2="119" stroke="rgba(56,189,248,0.1)" strokeWidth="1" />
              <text x="274" y="132" fontSize="8.5" fill="#94a3b8" fontFamily="JetBrains Mono">v = 2πr/T   →   T² = 4π²r³/(GM)</text>
              <text x="274" y="148" fontSize="8.5" fill="#a78bfa" fontFamily="JetBrains Mono" fontWeight="700">T²/r³ = 4π²/(GM) = cste  ✓</text>
            </svg>
          </ZoomableSVG>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormulaBlock expr="v = \sqrt{\dfrac{GM}{r}}" title="Vitesse orbitale circulaire" color="#34d399" />
            <FormulaBlock expr="\dfrac{T^2}{r^3} = \dfrac{4\pi^2}{GM} = \text{cste}" title="3ème loi de Kepler (orbite circulaire)" color="#a78bfa" />
          </div>
        </div>
      </div>

      {/* ══ Bloc 3 : Satellite géostationnaire ═════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(244,114,182,0.1)', borderBottom: '1px solid rgba(244,114,182,0.15)' }}>
          <span style={{ color: '#f472b6', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📡 SATELLITE GÉOSTATIONNAIRE</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            {[
              { label: 'Période', val: 'T = 24 h = 86 400 s', color: '#fbbf24' },
              { label: 'Orbite', val: 'Équatoriale', color: '#38bdf8' },
              { label: 'Position', val: 'Fixe / même point', color: '#34d399' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl px-3 py-2.5 text-center" style={{ background: `${item.color}10`, border: `1px solid ${item.color}28` }}>
                <div className="font-bold mb-1" style={{ color: item.color }}>{item.label}</div>
                <div style={{ color: '#e2e8f0', fontFamily: 'JetBrains Mono, monospace' }}>{item.val}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl p-3 text-xs" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
            <div className="font-bold mb-1" style={{ color: '#fbbf24' }}>Calcul de l'altitude :</div>
            <div style={{ color: '#94a3b8' }}>T = 86 400 s → 3ème loi : r³ = GMT²/(4π²) → r ≈ 42 164 km → h = r − R_Terre ≈ 35 786 km</div>
          </div>
        </div>
      </div>

    </div>
  );
}