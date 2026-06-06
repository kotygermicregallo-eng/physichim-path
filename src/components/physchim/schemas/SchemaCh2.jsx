import React from 'react';
import Math from '../Math';

const F = ({ e }) => <Math expr={e} />;

// ─── Schéma Bilan Ch.2 : Évolution spontanée — Équilibre + Pile Daniell ──────
export default function SchemaCh2() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Équilibre chimique ══════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(167,139,250,0.1)', borderBottom: '1px solid rgba(167,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚖️ ÉQUILIBRE CHIMIQUE</span>
        </div>
        <div className="p-4 space-y-4">
          {/* Équation bilan */}
          <div className="rounded-xl py-3 px-4 text-center text-sm" style={{ background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.18)' }}>
            <F e="\text{a\,A}_{(aq)} + \text{b\,H}_2\text{O}_{(\ell)} \;\rightleftharpoons\; \text{c\,C}_{(aq)} + \text{d\,D}_{(aq)} + \text{e\,E}_{(s)}" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Qr */}
            <div className="rounded-xl p-3" style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#38bdf8' }}>Quotient de réaction <F e="Q_r" /></div>
              <div className="py-2 text-center">
                <F e="Q_r = \frac{[\text{C}]^c \cdot [\text{D}]^d}{[\text{A}]^a} \cdot (c^\circ)^{a-c-d}" />
              </div>
              <div className="text-xs mt-2" style={{ color: '#64748b' }}>
                <F e="c^\circ = 1\;\text{mol·L}^{-1}" /> · Solides et solvant : activité = 1
              </div>
            </div>
            {/* τf */}
            <div className="rounded-xl p-3" style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#34d399' }}>Taux d'avancement <F e="\tau_f" /></div>
              <div className="py-2 text-center">
                <F e="\tau_f = \dfrac{x_f}{x_{max}}" />
              </div>
              <div className="space-y-1 text-xs mt-2">
                <div><F e="\tau_f = 1" /> → Transformation <strong style={{ color: '#34d399' }}>totale</strong></div>
                <div><F e="\tau_f < 1" /> → Transformation <strong style={{ color: '#fb923c' }}>non totale</strong> (équilibre)</div>
              </div>
            </div>
          </div>

          {/* Axe Qr vs K(T) — SVG simplifié */}
          <div>
            <div className="text-xs font-semibold mb-2 text-center" style={{ color: '#e2e8f0' }}>Critère d'évolution spontanée</div>
            <svg viewBox="0 0 500 75" className="w-full" style={{ maxHeight: 75 }}>
              <defs>
                <marker id="aL2" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
                  <path d="M8,0 L8,6 L0,3 z" fill="#f472b6" />
                </marker>
                <marker id="aR2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#34d399" />
                </marker>
                <marker id="aAx2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#64748b" />
                </marker>
              </defs>
              {/* Axe */}
              <line x1="20" y1="42" x2="468" y2="42" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aAx2)" />
              <text x="472" y="46" fontSize="12" fill="#94a3b8" fontFamily="JetBrains Mono">Qr</text>
              {/* K(T) */}
              <line x1="250" y1="28" x2="250" y2="56" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3,2" />
              <text x="235" y="22" fontSize="11" fill="#fbbf24" fontFamily="JetBrains Mono" fontWeight="700">K(T)</text>
              {/* Zone gauche */}
              <rect x="26" y="30" width="216" height="24" rx="6" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
              <text x="85" y="45" fontSize="11" fill="#34d399" fontFamily="JetBrains Mono" fontWeight="600">Qr &lt; K(T)</text>
              <line x1="115" y1="22" x2="175" y2="22" stroke="#34d399" strokeWidth="2" markerEnd="url(#aR2)" />
              <text x="100" y="17" fontSize="8.5" fill="#34d399" fontFamily="Inter">sens direct →</text>
              {/* Zone droite */}
              <rect x="256" y="30" width="196" height="24" rx="6" fill="rgba(244,114,182,0.12)" stroke="rgba(244,114,182,0.3)" strokeWidth="1" />
              <text x="305" y="45" fontSize="11" fill="#f472b6" fontFamily="JetBrains Mono" fontWeight="600">Qr &gt; K(T)</text>
              <line x1="385" y1="22" x2="325" y2="22" stroke="#f472b6" strokeWidth="2" markerEnd="url(#aL2)" />
              <text x="332" y="17" fontSize="8.5" fill="#f472b6" fontFamily="Inter">← sens inverse</text>
              {/* Équilibre */}
              <text x="215" y="70" fontSize="9.5" fill="#fbbf24" fontFamily="Inter">Qr = K(T) : équilibre</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Pile Daniell ════════════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(200,144,47,0.05)', border: '1px solid rgba(200,144,47,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(200,144,47,0.1)', borderBottom: '1px solid rgba(200,144,47,0.15)' }}>
          <span style={{ color: '#c8902f', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔋 PILE DANIELL — SCHÉMA DE FONCTIONNEMENT</span>
        </div>
        <div className="p-4">
          {/* SVG épuré : formes géométriques + labels minimaux uniquement */}
          <svg viewBox="0 0 520 200" className="w-full" style={{ maxHeight: 200 }}>
            <defs>
              <marker id="aElec" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#38bdf8" />
              </marker>
              <marker id="aIon" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#a78bfa" />
              </marker>
            </defs>

            {/* ─ Demi-cellule Zinc (gauche) ─ */}
            <rect x="30" y="75" width="160" height="110" rx="8" fill="rgba(56,189,248,0.07)" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Électrode Zn */}
            <rect x="95" y="50" width="18" height="95" rx="4" fill="#64748b" />
            {/* Borne − */}
            <circle cx="104" cy="42" r="12" fill="rgba(248,113,113,0.2)" stroke="#f87171" strokeWidth="1.5" />
            <text x="104" y="47" fontSize="14" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">−</text>
            {/* Label électrode */}
            <text x="104" y="44" fontSize="13" fill="#e2e8f0" textAnchor="middle" dy="-16" fontFamily="JetBrains Mono" fontWeight="700">Zn</text>
            {/* Ions solution — en bas de la cuve */}
            <text x="104" y="160" fontSize="10" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">Zn²⁺ / SO₄²⁻</text>

            {/* ─ Demi-cellule Cuivre (droite) ─ */}
            <rect x="330" y="75" width="160" height="110" rx="8" fill="rgba(52,211,153,0.07)" stroke="#34d399" strokeWidth="1.5" />
            {/* Électrode Cu */}
            <rect x="407" y="50" width="18" height="95" rx="4" fill="#f59e0b" />
            {/* Borne + */}
            <circle cx="416" cy="42" r="12" fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth="1.5" />
            <text x="416" y="47" fontSize="14" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">+</text>
            <text x="416" y="44" fontSize="13" fill="#e2e8f0" textAnchor="middle" dy="-16" fontFamily="JetBrains Mono" fontWeight="700">Cu</text>
            <text x="416" y="160" fontSize="10" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">Cu²⁺ / SO₄²⁻</text>

            {/* ─ Pont salin ─ */}
            <rect x="192" y="130" width="136" height="28" rx="14" fill="rgba(167,139,250,0.15)" stroke="#a78bfa" strokeWidth="1.5" />
            <text x="260" y="149" fontSize="11" fill="#a78bfa" textAnchor="middle" fontFamily="Inter" fontWeight="600">Pont salin</text>
            {/* Flèches ions */}
            <line x1="208" y1="144" x2="192" y2="144" stroke="#a78bfa" strokeWidth="1.2" markerEnd="url(#aIon)" />
            <line x1="314" y1="144" x2="328" y2="144" stroke="#a78bfa" strokeWidth="1.2" markerEnd="url(#aIon)" />

            {/* ─ Circuit extérieur ─ */}
            <line x1="104" y1="30" x2="104" y2="10" stroke="#fbbf24" strokeWidth="2" />
            <line x1="104" y1="10" x2="235" y2="10" stroke="#fbbf24" strokeWidth="2" />
            <line x1="285" y1="10" x2="416" y2="10" stroke="#fbbf24" strokeWidth="2" />
            <line x1="416" y1="10" x2="416" y2="30" stroke="#fbbf24" strokeWidth="2" />
            {/* Ampèremètre */}
            <circle cx="260" cy="10" r="16" fill="rgba(200,144,47,0.15)" stroke="#c8902f" strokeWidth="1.5" />
            <text x="260" y="15" fontSize="13" fill="#c8902f" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">A</text>
            {/* e⁻ flèche + label au-dessus du fil */}
            <line x1="145" y1="10" x2="215" y2="10" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#aElec)" />
            <text x="180" y="6" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">2e⁻</text>
          </svg>

          {/* Réactions en HTML/LaTeX sous le SVG */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div className="rounded-xl p-3" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#f87171' }}>Anode (−) — Oxydation</div>
              <div className="text-sm"><F e="\text{Zn} \rightarrow \text{Zn}^{2+} + 2e^-" /></div>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#34d399' }}>Cathode (+) — Réduction</div>
              <div className="text-sm"><F e="\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}" /></div>
            </div>
          </div>

          {/* Légende */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[
              { color: '#38bdf8', label: 'e⁻ dans le fil', detail: 'Anode → Cathode' },
              { color: '#a78bfa', label: 'Pont salin', detail: 'Neutralité électrique (K⁺/NO₃⁻)' },
            ].map((item, i) => (
              <div key={i} className="rounded-lg px-2 py-1.5 text-center" style={{ background: `${item.color}12`, border: `1px solid ${item.color}35` }}>
                <div className="text-xs font-semibold" style={{ color: item.color }}>{item.label}</div>
                <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ Bloc 3 : Capacité électrique Q ══════════════════════════════════ */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.2)' }}>
        <div className="text-xs font-semibold mb-4" style={{ color: '#fbbf24', fontFamily: 'JetBrains Mono, monospace' }}>⚡ CAPACITÉ ÉLECTRIQUE Q</div>

        {/* Deux formules en HTML côte à côte avec flèches */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="rounded-xl px-4 py-3 text-center" style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.25)' }}>
            <div className="text-xs mb-1" style={{ color: '#64748b' }}>Définition</div>
            <div className="text-base"><F e="Q = I \cdot \Delta t" /></div>
            <div className="text-xs mt-1" style={{ color: '#64748b' }}><F e="I" /> en A, <F e="\Delta t" /> en s</div>
          </div>

          <div className="text-2xl" style={{ color: '#fbbf24' }}>⟺</div>

          <div className="rounded-xl px-4 py-3 text-center" style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)' }}>
            <div className="text-xs mb-1" style={{ color: '#64748b' }}>En Coulombs</div>
            <div className="text-base"><F e="Q \;\text{(C)}" /></div>
          </div>

          <div className="text-2xl" style={{ color: '#fbbf24' }}>⟺</div>

          <div className="rounded-xl px-4 py-3 text-center" style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)' }}>
            <div className="text-xs mb-1" style={{ color: '#64748b' }}>Électrochimie</div>
            <div className="text-base"><F e="Q = z \cdot x_f \cdot F" /></div>
            <div className="text-xs mt-1" style={{ color: '#64748b' }}><F e="F = 96500\;\text{C/mol}" /></div>
          </div>
        </div>

        <div className="text-xs mt-3 text-center" style={{ color: '#64748b' }}>
          <F e="z" /> = nb d'électrons échangés · <F e="x_f" /> = avancement final (mol) · <F e="F" /> = constante de Faraday
        </div>
      </div>

    </div>
  );
}