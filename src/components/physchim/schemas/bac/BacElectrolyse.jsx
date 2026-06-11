import React from 'react';

// Électrolyseur type Bac : générateur imposant le sens du courant
export default function BacElectrolyse() {
  const small = { fill: '#94a3b8', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' };
  const label = { fill: '#22d3ee', fontSize: 13, fontFamily: 'JetBrains Mono, monospace' };

  return (
    <svg viewBox="0 0 560 330" className="w-full" style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '0.75rem' }}>
      {/* ── Cuve ── */}
      <path d="M 130 130 L 130 280 L 430 280 L 430 130" fill="none" stroke="#64748b" strokeWidth="2" />
      <rect x="132" y="160" width="296" height="118" fill="rgba(34,211,238,0.1)" />
      <text x="240" y="298" {...small}>électrolyte (solution ionique)</text>

      {/* ── Électrodes ── */}
      <rect x="195" y="80" width="14" height="170" fill="#94a3b8" />
      <rect x="350" y="80" width="14" height="170" fill="#94a3b8" />
      <text x="158" y="105" {...small} fill="#34d399">⊖ cathode</text>
      <text x="368" y="105" {...small} fill="#f87171">⊕ anode</text>
      <text x="150" y="118" {...small} fill="#34d399" fontSize="9">(réduction)</text>
      <text x="372" y="118" {...small} fill="#f87171" fontSize="9">(oxydation)</text>

      {/* ── Générateur ── */}
      <path d="M 202 80 L 202 35 L 250 35" fill="none" stroke="#e2e8f0" strokeWidth="2" />
      <path d="M 310 35 L 357 35 L 357 80" fill="none" stroke="#e2e8f0" strokeWidth="2" />
      <rect x="250" y="18" width="60" height="34" fill="none" stroke="#fbbf24" strokeWidth="2" rx="4" />
      <text x="262" y="40" {...label} fill="#fbbf24">G  ⎓</text>
      <text x="240" y="30" {...small}>−</text>
      <text x="315" y="30" {...small}>+</text>

      {/* Sens courant / électrons */}
      <path d="M 335 28 L 348 28" stroke="#f87171" strokeWidth="2" markerEnd="url(#aR)" fill="none" />
      <text x="332" y="18" {...small} fill="#f87171">I</text>
      <path d="M 232 50 L 215 50" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#aC)" fill="none" />
      <text x="230" y="62" {...small} fill="#22d3ee">e⁻</text>

      {/* ── Migration des ions ── */}
      <circle cx="265" cy="200" r="9" fill="#22d3ee" opacity="0.85" />
      <text x="259" y="204" fontSize="9" fill="#05080f" fontFamily="JetBrains Mono">+</text>
      <path d="M 252 200 L 225 200" stroke="#22d3ee" strokeWidth="1.5" markerEnd="url(#aC)" fill="none" />
      <text x="240" y="222" {...small} fill="#22d3ee" fontSize="9">cations → cathode</text>

      <circle cx="300" cy="240" r="11" fill="#f472b6" opacity="0.85" />
      <text x="294" y="244" fontSize="9" fill="#05080f" fontFamily="JetBrains Mono">−</text>
      <path d="M 313 240 L 340 240" stroke="#f472b6" strokeWidth="1.5" markerEnd="url(#aP)" fill="none" />
      <text x="290" y="265" {...small} fill="#f472b6" fontSize="9">anions → anode</text>

      {/* ── Note transformation forcée ── */}
      <text x="135" y="318" {...small} fill="#fbbf24">⚡ Transformation FORCÉE : le générateur impose le sens du courant (inverse de l'évolution spontanée) · Q = I·Δt = n(e⁻)·F</text>

      <defs>
        <marker id="aC" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
        </marker>
        <marker id="aP" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#f472b6" strokeWidth="1.5" />
        </marker>
        <marker id="aR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#f87171" strokeWidth="1.5" />
        </marker>
      </defs>
    </svg>
  );
}