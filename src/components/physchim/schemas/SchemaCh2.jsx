import React from 'react';

// ─── Schéma Bilan Chapitre 2 : Évolution spontanée — Equilibre + Pile Daniell
export default function SchemaCh2() {
  return (
    <div className="space-y-5">

      {/* ── Bloc 1 : Équilibre chimique et Qr/K(T) ────────────────────────── */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(167,139,250,0.1)', borderBottom: '1px solid rgba(167,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚖️ ÉQUILIBRE CHIMIQUE</span>
        </div>
        <div className="p-4">
          {/* Équation bilan */}
          <div className="text-center rounded-xl py-2.5 px-3 mb-4" style={{ background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.18)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: '#e2e8f0' }}>
            a A<sub>(aq)</sub> + b H₂O<sub>(ℓ)</sub> &nbsp;⇌&nbsp; c C<sub>(aq)</sub> + d D<sub>(aq)</sub> + e E<sub>(s)</sub>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Quotient de réaction */}
            <div className="rounded-xl p-3" style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#38bdf8' }}>Quotient de réaction Q<sub>r</sub></div>
              <div className="rounded-lg p-2 text-center mb-2" style={{ background: 'rgba(0,0,0,0.3)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#38bdf8' }}>
                Q<sub>r</sub> = [C]<sup>c</sup>[D]<sup>d</sup>(c°)<sup>a</sup> / [A]<sup>a</sup>(c°)<sup>c+d</sup>
              </div>
              <div className="text-xs" style={{ color: '#64748b' }}>
                c° = 1 mol·L⁻¹ · Solides et solvant : activité = 1
              </div>
            </div>
            {/* Taux d'avancement */}
            <div className="rounded-xl p-3" style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#34d399' }}>Taux d'avancement τ<sub>f</sub></div>
              <div className="rounded-lg p-2 text-center mb-2" style={{ background: 'rgba(0,0,0,0.3)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: '#34d399' }}>
                τ<sub>f</sub> = x<sub>f</sub> / x<sub>max</sub>
              </div>
              <div className="space-y-1 text-xs" style={{ color: '#94a3b8' }}>
                <div><span style={{ color: '#34d399' }}>τ<sub>f</sub> = 1</span> → Transformation <strong>totale</strong></div>
                <div><span style={{ color: '#fb923c' }}>τ<sub>f</sub> &lt; 1</span> → Transformation <strong>non totale</strong> (équilibre)</div>
              </div>
            </div>
          </div>

          {/* Axe Qr vs K(T) */}
          <div className="text-xs font-semibold mb-3 text-center" style={{ color: '#e2e8f0' }}>Critère d'évolution spontanée</div>
          <svg viewBox="0 0 500 80" className="w-full" style={{ maxHeight: 80 }}>
            <defs>
              <marker id="arrowLeft" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
                <path d="M8,0 L8,6 L0,3 z" fill="#f472b6" />
              </marker>
              <marker id="arrowRight2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#34d399" />
              </marker>
              <marker id="arrowAxisR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#64748b" />
              </marker>
            </defs>
            {/* Axe Qr */}
            <line x1="20" y1="45" x2="470" y2="45" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowAxisR)" />
            <text x="472" y="49" fontSize="12" fill="#94a3b8" fontFamily="JetBrains Mono">Qr</text>

            {/* Point K(T) */}
            <line x1="250" y1="30" x2="250" y2="60" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3,2" />
            <text x="232" y="22" fontSize="12" fill="#fbbf24" fontFamily="JetBrains Mono" fontWeight="700">K(T)</text>

            {/* Zone gauche : Qr < K */}
            <rect x="25" y="33" width="218" height="24" rx="6" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
            <text x="60" y="48" fontSize="11" fill="#34d399" fontFamily="Inter" fontWeight="600">Qr &lt; K(T)</text>
            <line x1="120" y1="25" x2="180" y2="25" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowRight2)" />
            <text x="105" y="20" fontSize="9" fill="#34d399" fontFamily="Inter">sens direct →</text>

            {/* Zone droite : Qr > K */}
            <rect x="258" y="33" width="200" height="24" rx="6" fill="rgba(244,114,182,0.12)" stroke="rgba(244,114,182,0.3)" strokeWidth="1" />
            <text x="300" y="48" fontSize="11" fill="#f472b6" fontFamily="Inter" fontWeight="600">Qr &gt; K(T)</text>
            <line x1="380" y1="25" x2="320" y2="25" stroke="#f472b6" strokeWidth="2" markerEnd="url(#arrowLeft)" />
            <text x="330" y="20" fontSize="9" fill="#f472b6" fontFamily="Inter">← sens inverse</text>

            {/* Équilibre au centre */}
            <text x="218" y="75" fontSize="10" fill="#fbbf24" fontFamily="Inter">Qr = K(T) : équilibre</text>
          </svg>
        </div>
      </div>

      {/* ── Bloc 2 : Pile Daniell ─────────────────────────────────────────── */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(200,144,47,0.05)', border: '1px solid rgba(200,144,47,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(200,144,47,0.1)', borderBottom: '1px solid rgba(200,144,47,0.15)' }}>
          <span style={{ color: '#c8902f', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔋 PILE DANIELL — SCHÉMA DE FONCTIONNEMENT</span>
        </div>
        <div className="p-4">
          <svg viewBox="0 0 520 220" className="w-full" style={{ maxHeight: 240 }}>
            <defs>
              <marker id="arrowAm" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#fbbf24" />
              </marker>
              <marker id="arrowElec" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#38bdf8" />
              </marker>
              <marker id="arrowIon" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#a78bfa" />
              </marker>
            </defs>

            {/* ─── Demi-cellule Zinc (gauche) ─── */}
            <rect x="30" y="80" width="120" height="120" rx="8" fill="rgba(56,189,248,0.08)" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Électrode Zn */}
            <rect x="78" y="55" width="20" height="100" rx="4" fill="#64748b" />
            <text x="88" y="48" fontSize="13" fill="#e2e8f0" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Zn</text>
            {/* Borne − */}
            <circle cx="88" cy="40" r="10" fill="rgba(248,113,113,0.2)" stroke="#f87171" strokeWidth="1.5" />
            <text x="88" y="44" fontSize="13" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">−</text>
            {/* Solution */}
            <text x="90" y="170" fontSize="10" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">Zn²⁺</text>
            <text x="90" y="183" fontSize="10" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">SO₄²⁻</text>
            <text x="90" y="110" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">ANODE (−)</text>
            <text x="90" y="122" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Oxydation</text>
            {/* Réaction anode */}
            <text x="90" y="135" fontSize="8.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">Zn → Zn²⁺ + 2e⁻</text>

            {/* ─── Demi-cellule Cuivre (droite) ─── */}
            <rect x="370" y="80" width="120" height="120" rx="8" fill="rgba(52,211,153,0.08)" stroke="#34d399" strokeWidth="1.5" />
            {/* Électrode Cu */}
            <rect x="423" y="55" width="20" height="100" rx="4" fill="#f59e0b" />
            <text x="433" y="48" fontSize="13" fill="#e2e8f0" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Cu</text>
            {/* Borne + */}
            <circle cx="433" cy="40" r="10" fill="rgba(52,211,153,0.2)" stroke="#34d399" strokeWidth="1.5" />
            <text x="433" y="44" fontSize="13" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">+</text>
            {/* Solution */}
            <text x="430" y="170" fontSize="10" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">Cu²⁺</text>
            <text x="430" y="183" fontSize="10" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">SO₄²⁻</text>
            <text x="430" y="110" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">CATHODE (+)</text>
            <text x="430" y="122" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Réduction</text>
            <text x="430" y="135" fontSize="8.5" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">Cu²⁺ + 2e⁻ → Cu</text>

            {/* ─── Pont salin (milieu) ─── */}
            <rect x="175" y="140" width="170" height="30" rx="15" fill="rgba(167,139,250,0.15)" stroke="#a78bfa" strokeWidth="1.5" />
            <text x="260" y="158" fontSize="11" fill="#a78bfa" textAnchor="middle" fontFamily="Inter" fontWeight="600">Pont salin</text>
            <text x="260" y="172" fontSize="9" fill="#a78bfa" textAnchor="middle" fontFamily="Inter">(K⁺ / NO₃⁻ — ferme le circuit)</text>
            {/* Flèches ions pont salin */}
            <line x1="200" y1="155" x2="175" y2="155" stroke="#a78bfa" strokeWidth="1.2" markerEnd="url(#arrowIon)" />
            <line x1="325" y1="155" x2="345" y2="155" stroke="#a78bfa" strokeWidth="1.2" markerEnd="url(#arrowIon)" />

            {/* ─── Circuit électrique extérieur ─── */}
            {/* Fil Zn → amperemètre → Cu */}
            <line x1="88" y1="30" x2="88" y2="10" stroke="#fbbf24" strokeWidth="2" />
            <line x1="88" y1="10" x2="230" y2="10" stroke="#fbbf24" strokeWidth="2" />
            <line x1="290" y1="10" x2="433" y2="10" stroke="#fbbf24" strokeWidth="2" />
            <line x1="433" y1="10" x2="433" y2="30" stroke="#fbbf24" strokeWidth="2" />
            {/* Ampèremètre */}
            <circle cx="260" cy="10" r="16" fill="rgba(200,144,47,0.15)" stroke="#c8902f" strokeWidth="1.5" />
            <text x="260" y="14" fontSize="12" fill="#c8902f" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">A</text>

            {/* Flèche e⁻ dans le fil */}
            <line x1="130" y1="10" x2="200" y2="10" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowElec)" />
            <text x="160" y="6" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">2e⁻</text>
          </svg>

          {/* Légende */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
            {[
              { color: '#f87171', label: 'Anode (−)', detail: 'Oxydation Zn' },
              { color: '#34d399', label: 'Cathode (+)', detail: 'Réduction Cu²⁺' },
              { color: '#38bdf8', label: 'e⁻ dans le fil', detail: 'Anode → Cathode' },
              { color: '#a78bfa', label: 'Pont salin', detail: 'Neutralité électrique' },
            ].map((item, i) => (
              <div key={i} className="rounded-lg px-2 py-1.5 text-center" style={{ background: `${item.color}12`, border: `1px solid ${item.color}35` }}>
                <div className="text-xs font-semibold" style={{ color: item.color }}>{item.label}</div>
                <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bloc 3 : Capacité Q ────────────────────────────────────────────── */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.2)' }}>
        <div className="text-xs font-semibold mb-3" style={{ color: '#fbbf24', fontFamily: 'JetBrains Mono, monospace' }}>⚡ CAPACITÉ ÉLECTRIQUE Q</div>
        <svg viewBox="0 0 500 80" className="w-full" style={{ maxHeight: 80 }}>
          {/* Nœuds */}
          <circle cx="250" cy="40" r="28" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" strokeWidth="2" />
          <text x="250" y="36" fontSize="14" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Q</text>
          <text x="250" y="50" fontSize="9" fill="#fbbf24" textAnchor="middle" fontFamily="Inter">(en Coulombs)</text>

          {/* Branche gauche : Q = IΔt */}
          <line x1="80" y1="40" x2="218" y2="40" stroke="#38bdf8" strokeWidth="1.5" />
          <rect x="5" y="20" width="72" height="40" rx="8" fill="rgba(56,189,248,0.08)" stroke="#38bdf8" strokeWidth="1" />
          <text x="41" y="36" fontSize="12" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="600">Q = IΔt</text>
          <text x="41" y="50" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="Inter">I(A), Δt(s)</text>

          {/* Branche droite : Q = zxfF */}
          <line x1="282" y1="40" x2="415" y2="40" stroke="#34d399" strokeWidth="1.5" />
          <rect x="418" y="20" width="78" height="40" rx="8" fill="rgba(52,211,153,0.08)" stroke="#34d399" strokeWidth="1" />
          <text x="457" y="36" fontSize="12" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="600">Q=zxfF</text>
          <text x="457" y="50" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="Inter">F=96500 C/mol</text>
        </svg>
        <div className="text-xs mt-2 text-center" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
          z = nb d'électrons échangés · x<sub>f</sub> = avancement final (mol) · F = constante de Faraday
        </div>
      </div>

    </div>
  );
}