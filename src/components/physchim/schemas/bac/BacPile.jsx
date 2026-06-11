import React from 'react';

// Pile Daniell type Bac : 2 béchers, pont salin, circuit extérieur
export default function BacPile() {
  const small = { fill: '#94a3b8', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' };
  const label = { fill: '#22d3ee', fontSize: 13, fontFamily: 'JetBrains Mono, monospace' };

  return (
    <svg viewBox="0 0 560 330" className="w-full" style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '0.75rem' }}>
      {/* ── Béchers ── */}
      <path d="M 60 140 L 60 270 L 220 270 L 220 140" fill="none" stroke="#64748b" strokeWidth="2" />
      <path d="M 340 140 L 340 270 L 500 270 L 500 140" fill="none" stroke="#64748b" strokeWidth="2" />
      {/* Solutions */}
      <rect x="62" y="170" width="156" height="98" fill="rgba(96,165,250,0.12)" />
      <rect x="342" y="170" width="156" height="98" fill="rgba(34,211,238,0.12)" />
      <text x="95" y="290" {...small}>Zn²⁺ + SO₄²⁻</text>
      <text x="380" y="290" {...small}>Cu²⁺ + SO₄²⁻</text>

      {/* ── Électrodes ── */}
      <rect x="130" y="80" width="16" height="160" fill="#94a3b8" />
      <rect x="414" y="80" width="16" height="160" fill="#b45309" />
      <text x="105" y="70" {...label}>Zn</text>
      <text x="440" y="70" {...label} fill="#fbbf24">Cu</text>
      <text x="92" y="105" {...small} fill="#f87171">⊖ anode</text>
      <text x="438" y="105" {...small} fill="#34d399">⊕ cathode</text>

      {/* ── Pont salin ── */}
      <path d="M 195 175 L 195 130 Q 195 115 210 115 L 350 115 Q 365 115 365 130 L 365 175"
        fill="none" stroke="#a855f7" strokeWidth="14" strokeLinecap="round" opacity="0.5" />
      <text x="225" y="105" {...small} fill="#a855f7">pont salin (K⁺ + NO₃⁻)</text>
      {/* migration ions dans le pont */}
      <path d="M 250 122 L 275 122" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#arrC)" fill="none" />
      <text x="238" y="135" {...small} fill="#22d3ee" fontSize="9">K⁺ →</text>
      <path d="M 320 122 L 295 122" stroke="#f472b6" strokeWidth="1.5" markerEnd="url(#arrP2)" fill="none" />
      <text x="300" y="135" {...small} fill="#f472b6" fontSize="9">← NO₃⁻</text>

      {/* ── Circuit extérieur ── */}
      <path d="M 138 80 L 138 35 L 250 35" fill="none" stroke="#e2e8f0" strokeWidth="2" />
      <path d="M 310 35 L 422 35 L 422 80" fill="none" stroke="#e2e8f0" strokeWidth="2" />
      {/* Récepteur (lampe/résistance) */}
      <circle cx="280" cy="35" r="22" fill="none" stroke="#fbbf24" strokeWidth="2" />
      <line x1="265" y1="20" x2="295" y2="50" stroke="#fbbf24" strokeWidth="1.5" />
      <line x1="295" y1="20" x2="265" y2="50" stroke="#fbbf24" strokeWidth="1.5" />

      {/* Sens électrons + courant */}
      <path d="M 165 28 L 200 28" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrC)" fill="none" />
      <text x="150" y="20" {...small} fill="#22d3ee">e⁻</text>
      <path d="M 395 50 L 360 50" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrR)" fill="none" />
      <text x="398" y="55" {...small} fill="#f87171">I</text>

      {/* ── Demi-équations ── */}
      <text x="60" y="318" {...small} fill="#f87171">Anode (oxydation) : Zn → Zn²⁺ + 2e⁻</text>
      <text x="320" y="318" {...small} fill="#34d399">Cathode (réduction) : Cu²⁺ + 2e⁻ → Cu</text>

      <defs>
        <marker id="arrC" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
        </marker>
        <marker id="arrP2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#f472b6" strokeWidth="1.5" />
        </marker>
        <marker id="arrR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#f87171" strokeWidth="1.5" />
        </marker>
      </defs>
    </svg>
  );
}