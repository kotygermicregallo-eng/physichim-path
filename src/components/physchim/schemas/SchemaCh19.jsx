import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';

// ─── Schéma Bilan Ch.19 : Interaction lumière-matière ────────────────────────
export default function SchemaCh19() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Le Photon ══════════════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(251,191,36,0.1)', borderBottom: '1px solid rgba(251,191,36,0.15)' }}>
          <span style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>💡 LE PHOTON — QUANTUM D'ÉNERGIE</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FormulaBlock expr="E = h\nu = \frac{hc}{\lambda}" title="Énergie d'un photon" color="#fbbf24" compact desc="h = 6,63×10⁻³⁴ J·s · c = 3,00×10⁸ m·s⁻¹" />
            <FormulaBlock expr="1\,\text{eV} = 1{,}6 \times 10^{-19}\,\text{J}" title="Conversion" color="#38bdf8" compact />
            <FormulaBlock expr="\Delta E_{12} = E_1 - E_2 = h\nu" title="Transition entre niveaux" color="#a78bfa" compact desc="E₁ > E₂ — absorption ou émission" />
          </div>
          <div className="rounded-xl p-3 text-xs" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
            <span style={{ color: '#fbbf24', fontWeight: 700 }}>Propriétés : </span>
            <span style={{ color: '#94a3b8' }}>masse nulle · vitesse c = 3,00×10⁸ m·s⁻¹ dans le vide · quantité de mouvement p = h/λ</span>
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Effet photoélectrique ══════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(248,113,113,0.1)', borderBottom: '1px solid rgba(248,113,113,0.15)' }}>
          <span style={{ color: '#f87171', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚡ EFFET PHOTOÉLECTRIQUE — INTERACTION LUMIÈRE-MÉTAL</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormulaBlock expr="W_e = h\nu_s" title="Travail d'extraction" color="#f87171" compact desc="νs : fréquence seuil du métal" />
            <FormulaBlock expr="E_c = h(\nu - \nu_s) = h\nu - W_e" title="Énergie cinétique de l'électron" color="#34d399" compact desc="Condition : hν ≥ We (sinon pas d'émission)" />
          </div>
          <ZoomableSVG maxHeight={185} caption="Photon hν → métal → si hν ≥ We : électron arraché avec Ec = hν − We — schéma cellule photoélectrique">
            <svg viewBox="0 0 520 175" style={{ width: '100%' }}>
              <defs>
                <marker id="aP19" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fbbf24" /></marker>
                <marker id="aP19b" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#34d399" /></marker>
                <marker id="aP19c" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#38bdf8" /></marker>
              </defs>

              {/* ─ Schéma bilan énergétique ─ */}
              {/* Métal (rectangle) */}
              <rect x="30" y="80" width="120" height="80" rx="6" fill="rgba(71,85,105,0.6)" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="90" y="125" fontSize="10" fill="#94a3b8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Métal</text>

              {/* Photon incident */}
              {[0,1,2,3,4].map(i => (
                <line key={i} x1={8 + i*5} y1={105 - i*5} x2={13 + i*5} y2={100 - i*5}
                  stroke="#fbbf24" strokeWidth="2" />
              ))}
              <line x1="8" y1="105" x2="30" y2="85" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#aP19)" strokeDasharray="3,2" />
              <text x="4" y="118" fontSize="9" fill="#fbbf24" fontFamily="JetBrains Mono" fontWeight="700">hν</text>

              {/* Niveaux d'énergie */}
              <line x1="30" y1="80" x2="150" y2="80" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" />
              <text x="155" y="83" fontSize="8.5" fill="#94a3b8" fontFamily="Inter">Niveau 0 (vide)</text>

              {/* We : extraction */}
              <line x1="90" y1="80" x2="90" y2="160" stroke="#f87171" strokeWidth="2" />
              <line x1="82" y1="160" x2="98" y2="160" stroke="#f87171" strokeWidth="1.5" />
              <text x="96" y="124" fontSize="9.5" fill="#f87171" fontFamily="JetBrains Mono" fontWeight="700">We</text>
              <text x="96" y="137" fontSize="8" fill="#64748b" fontFamily="Inter">= hνs</text>

              {/* Ec : cinétique */}
              <line x1="90" y1="60" x2="90" y2="80" stroke="#34d399" strokeWidth="2" />
              <text x="96" y="73" fontSize="9.5" fill="#34d399" fontFamily="JetBrains Mono" fontWeight="700">Ec</text>
              <text x="96" y="83" fontSize="8" fill="#64748b" fontFamily="Inter">= hν−We</text>

              {/* Électron émis */}
              <circle cx="90" cy="58" r="6" fill="#34d399" />
              <text x="90" y="62" fontSize="7.5" fill="white" textAnchor="middle" fontFamily="Inter" fontWeight="700">e⁻</text>
              <line x1="96" y1="55" x2="130" y2="30" stroke="#34d399" strokeWidth="1.8" markerEnd="url(#aP19b)" />
              <text x="130" y="25" fontSize="9" fill="#34d399" fontFamily="JetBrains Mono">Électron</text>
              <text x="130" y="36" fontSize="8.5" fill="#64748b" fontFamily="Inter">émis (Ec)</text>

              {/* ─ Schéma cellule photoélectrique ─ */}
              <rect x="270" y="30" width="230" height="115" rx="10" fill="rgba(56,189,248,0.06)" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" />

              {/* Tube vide (enceinte arrondie) */}
              <rect x="285" y="50" width="195" height="60" rx="28" fill="rgba(0,0,0,0.3)" stroke="#475569" strokeWidth="1.5" />

              {/* Cathode */}
              <rect x="290" y="62" width="55" height="35" rx="5" fill="rgba(71,85,105,0.8)" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="317" y="83" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Cathode</text>

              {/* Rayonnement → cathode */}
              {[0,1,2,3].map(i => (
                <line key={i} x1={295 + i * 4} y1={42 - i * 4} x2={300 + i * 4} y2={50 - i * 4}
                  stroke="#fbbf24" strokeWidth="1.8" />
              ))}
              <line x1="300" y1="40" x2="310" y2="52" stroke="#fbbf24" strokeWidth="1.5" markerEnd="url(#aP19)" />
              <text x="270" y="42" fontSize="9" fill="#fbbf24" fontFamily="Inter" fontWeight="600">Rayonnement</text>

              {/* Anode */}
              <rect x="415" y="62" width="50" height="35" rx="5" fill="rgba(52,211,153,0.15)" stroke="#34d399" strokeWidth="1.5" />
              <text x="440" y="83" fontSize="9" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Anode</text>

              {/* Électrons cathode → anode */}
              <line x1="345" y1="79" x2="415" y2="79" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#aP19c)" />
              <text x="380" y="72" fontSize="8.5" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">e⁻ →</text>

              {/* Champ E (←) */}
              <line x1="410" y1="67" x2="355" y2="67" stroke="#f472b6" strokeWidth="1.5" markerEnd="url(#aP19)" />
              <text x="390" y="63" fontSize="8.5" fill="#f472b6" fontFamily="JetBrains Mono">E⃗ ←</text>

              {/* Circuit extérieur */}
              <line x1="317" y1="145" x2="317" y2="160" stroke="#f87171" strokeWidth="1.5" />
              <line x1="317" y1="160" x2="440" y2="160" stroke="#f87171" strokeWidth="1.5" />
              <line x1="440" y1="145" x2="440" y2="160" stroke="#f87171" strokeWidth="1.5" />
              {/* Générateur */}
              <circle cx="378" cy="160" r="10" fill="rgba(30,41,59,0.8)" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="372" y1="160" x2="368" y2="160" stroke="#94a3b8" strokeWidth="1" />
              <text x="372" y="157" fontSize="7" fill="#94a3b8" fontFamily="JetBrains Mono">−</text>
              <text x="383" y="157" fontSize="7" fill="#94a3b8" fontFamily="JetBrains Mono">+</text>
              <text x="378" y="175" fontSize="8" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Générateur</text>
              {/* Courant (←) */}
              <line x1="420" y1="160" x2="400" y2="160" stroke="#f87171" strokeWidth="2" markerEnd="url(#aP19)" />
              <text x="430" y="156" fontSize="7.5" fill="#f87171" fontFamily="Inter">I</text>
            </svg>
          </ZoomableSVG>
          <SchemaLegend cols={3} items={[
            { color: '#fbbf24', label: 'Photon incident hν', detail: 'doit avoir ν ≥ νs' },
            { color: '#f87171', label: 'Travail d\'extraction We', detail: 'énergie minimale pour arracher e⁻' },
            { color: '#34d399', label: 'Énergie cinétique Ec', detail: 'Ec = hν − We' },
          ]} />
        </div>
      </div>

      {/* ══ Bloc 3 : Diagramme niveaux d'énergie (hydrogène) ═══════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(168,139,250,0.1)', borderBottom: '1px solid rgba(168,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📊 NIVEAUX D'ÉNERGIE QUANTIFIÉS — ATOME H</span>
        </div>
        <div className="p-4">
          <ZoomableSVG maxHeight={230} caption="Diagramme des niveaux d'énergie de l'hydrogène — transitions = émission ou absorption d'un photon hν = ΔE">
            <svg viewBox="0 0 520 220" style={{ width: '100%' }}>
              <defs>
                <marker id="aN19" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#a78bfa" /></marker>
                <marker id="aN19b" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#34d399" /></marker>
              </defs>

              {/* Axe E */}
              <line x1="70" y1="205" x2="70" y2="10" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#aN19)" />
              <text x="60" y="12" fontSize="9" fill="#94a3b8" fontFamily="JetBrains Mono" textAnchor="middle">E</text>
              <text x="60" y="22" fontSize="7.5" fill="#64748b" fontFamily="Inter" textAnchor="middle">(eV)</text>

              {/* Niveaux d'énergie */}
              {[
                { n: '∞', E: '0',     y: 18,  color: '#94a3b8' },
                { n: '6', E: '−0,37', y: 42,  color: '#f472b6' },
                { n: '5', E: '−0,54', y: 58,  color: '#f472b6' },
                { n: '4', E: '−0,85', y: 82,  color: '#fb923c' },
                { n: '3', E: '−1,51', y: 110, color: '#fbbf24' },
                { n: '2', E: '−3,40', y: 148, color: '#38bdf8' },
                { n: '1', E: '−13,6', y: 200, color: '#a78bfa' },
              ].map(({ n, E, y, color }) => (
                <g key={n}>
                  <line x1="80" y1={y} x2="310" y2={y} stroke={color} strokeWidth={n === '1' ? 2.5 : 1.8} />
                  <text x="76" y={y + 3} fontSize="8.5" fill={color} textAnchor="end" fontFamily="JetBrains Mono" fontWeight="700">{E}</text>
                  <text x="315" y={y + 4} fontSize="9" fill={color} fontFamily="JetBrains Mono" fontWeight="700">n = {n}</text>
                </g>
              ))}

              {/* Rupture axe (// entre n=1 et n=2) */}
              <text x="72" y="175" fontSize="12" fill="#64748b" fontFamily="Inter">//</text>

              {/* Transition absorption (montée) */}
              <line x1="200" y1="200" x2="200" y2="148" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#aN19b)" />
              <path d="M190,165 Q200,165 200,155" fill="none" stroke="#38bdf8" strokeWidth="1" />
              <text x="210" y="175" fontSize="8.5" fill="#38bdf8" fontFamily="Inter">Absorption</text>
              <text x="210" y="186" fontSize="8" fill="#64748b" fontFamily="Inter">n=1→n=2</text>

              {/* Transition émission (descente) */}
              <line x1="240" y1="110" x2="240" y2="148" stroke="#f87171" strokeWidth="2" markerEnd="url(#aN19)" />
              <text x="250" y="130" fontSize="8.5" fill="#f87171" fontFamily="Inter">Émission</text>
              <text x="250" y="142" fontSize="8" fill="#64748b" fontFamily="Inter">n=3→n=2</text>

              {/* Photon émis */}
              {[0,1,2].map(i => (
                <line key={i} x1={260 + i*6} y1={135 - i*5} x2={265 + i*6} y2={130 - i*5}
                  stroke="#fbbf24" strokeWidth="2" />
              ))}
              <text x="285" y="120" fontSize="9" fill="#fbbf24" fontFamily="JetBrains Mono">hν = ΔE</text>

              {/* Ionisation */}
              <rect x="340" y="8" width="170" height="42" rx="6" fill="rgba(148,163,184,0.07)" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
              <text x="425" y="22" fontSize="8.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter" fontWeight="600">Ionisation</text>
              <text x="425" y="33" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">si E ≥ 13,6 eV (H)</text>
              <text x="425" y="44" fontSize="7.5" fill="#64748b" textAnchor="middle" fontFamily="Inter">électron libéré</text>

              {/* Légende séries */}
              <rect x="340" y="60" width="170" height="100" rx="6" fill="rgba(168,139,250,0.05)" stroke="rgba(168,139,250,0.15)" strokeWidth="1" />
              <text x="425" y="75" fontSize="8.5" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Séries spectrales H</text>
              {[
                { s: 'Lyman', c: '#a78bfa', d: 'n>1 → n=1 (UV)' },
                { s: 'Balmer', c: '#38bdf8', d: 'n>2 → n=2 (visible)' },
                { s: 'Paschen', c: '#fb923c', d: 'n>3 → n=3 (IR)' },
              ].map(({ s, c, d }, i) => (
                <g key={s}>
                  <circle cx="352" cy={90 + i * 22} r="4" fill={c} />
                  <text x="360" cy={90 + i * 22} fontSize="8" fill={c} fontFamily="JetBrains Mono" y={93 + i * 22}>{s}</text>
                  <text x="360" fontSize="7.5" fill="#64748b" fontFamily="Inter" y={103 + i * 22}>{d}</text>
                </g>
              ))}
            </svg>
          </ZoomableSVG>
        </div>
      </div>

      {/* ══ Bloc 4 : Effet photovoltaïque vs DEL ════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.2)' }}>
          <div className="px-3 py-2" style={{ background: 'rgba(248,113,113,0.1)', borderBottom: '1px solid rgba(248,113,113,0.15)' }}>
            <span style={{ color: '#f87171', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚡ EFFET PHOTOÉLECTRIQUE</span>
          </div>
          <div className="p-3 space-y-2 text-xs" style={{ color: '#94a3b8' }}>
            <div>Matériau : <span style={{ color: '#f87171' }}>métal</span></div>
            <div>hν → énergie cinétique e⁻</div>
            <div>Condition : hν ≥ We</div>
            <div style={{ color: '#64748b' }}>Application : cellule photoélectrique</div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.2)' }}>
          <div className="px-3 py-2" style={{ background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)' }}>
            <span style={{ color: '#34d399', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>☀️ EFFET PHOTOVOLTAÏQUE</span>
          </div>
          <div className="p-3 space-y-2 text-xs" style={{ color: '#94a3b8' }}>
            <div>Matériau : <span style={{ color: '#34d399' }}>semi-conducteur</span></div>
            <div>hν → courant électrique</div>
            <FormulaBlock expr="\eta = \frac{P_{\text{él}}}{\varepsilon S}" color="#34d399" compact title="Rendement" />
            <div style={{ color: '#64748b' }}>ε : éclairement (W·m⁻²) · S : surface</div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.2)' }}>
          <div className="px-3 py-2" style={{ background: 'rgba(167,139,250,0.1)', borderBottom: '1px solid rgba(167,139,250,0.15)' }}>
            <span style={{ color: '#a78bfa', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>💡 DEL (LED)</span>
          </div>
          <div className="p-3 space-y-2 text-xs" style={{ color: '#94a3b8' }}>
            <div>Matériau : <span style={{ color: '#a78bfa' }}>semi-conducteur</span></div>
            <div>électricité → photon émis</div>
            <div style={{ color: '#a78bfa' }}>Inverse du photovoltaïque</div>
            <div style={{ color: '#64748b' }}>Application : ampoule LED</div>
          </div>
        </div>
      </div>

    </div>
  );
}