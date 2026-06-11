import React from 'react';

// Circuit RC type Bac : générateur E, interrupteur 2 positions, R, C
export default function BacRC() {
  const wire = { stroke: '#e2e8f0', strokeWidth: 2, fill: 'none' };
  const label = { fill: '#22d3ee', fontSize: 13, fontFamily: 'JetBrains Mono, monospace' };
  const small = { fill: '#94a3b8', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' };

  return (
    <svg viewBox="0 0 560 300" className="w-full" style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '0.75rem' }}>
      {/* ── Fils ── */}
      <path d="M 80 240 L 80 160" {...wire} />
      <path d="M 80 110 L 80 60 L 230 60" {...wire} />
      <path d="M 290 60 L 480 60 L 480 110" {...wire} />
      <path d="M 480 190 L 480 240 L 80 240" {...wire} />
      {/* branche position 1 vers E */}
      <path d="M 230 60 L 200 35" {...wire} stroke="#fbbf24" />

      {/* ── Générateur E (gauche) ── */}
      <line x1="60" y1="160" x2="100" y2="160" stroke="#e2e8f0" strokeWidth="3" />
      <line x1="70" y1="135" x2="90" y2="135" stroke="#e2e8f0" strokeWidth="2" />
      <line x1="80" y1="160" x2="80" y2="135" stroke="none" />
      <path d="M 80 135 L 80 110" {...wire} />
      <path d="M 80 240 L 80 160" {...wire} />
      <text x="38" y="152" {...label}>E</text>
      <text x="104" y="133" {...small}>+</text>
      <text x="104" y="168" {...small}>−</text>

      {/* ── Interrupteur K à 2 positions ── */}
      <circle cx="230" cy="60" r="4" fill="#fbbf24" />
      <circle cx="290" cy="60" r="4" fill="#fbbf24" />
      <circle cx="200" cy="35" r="4" fill="#fbbf24" />
      <line x1="230" y1="60" x2="285" y2="42" stroke="#fbbf24" strokeWidth="2.5" />
      <text x="245" y="25" {...label} fill="#fbbf24">K</text>
      <text x="175" y="28" {...small}>① charge</text>
      <text x="296" y="45" {...small}>② décharge</text>

      {/* ── Résistance R (haut droite) ── */}
      <rect x="350" y="48" width="70" height="24" fill="none" stroke="#a855f7" strokeWidth="2" rx="2" />
      <text x="375" y="40" {...label} fill="#a855f7">R</text>

      {/* ── Condensateur C (droite) ── */}
      <line x1="455" y1="135" x2="505" y2="135" stroke="#22d3ee" strokeWidth="3" />
      <line x1="455" y1="160" x2="505" y2="160" stroke="#22d3ee" strokeWidth="3" />
      <path d="M 480 110 L 480 135 M 480 160 L 480 190" {...wire} />
      <text x="515" y="152" {...label}>C</text>

      {/* tension uC */}
      <path d="M 440 128 L 440 168" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#arrG)" fill="none" />
      <text x="400" y="152" {...small} fill="#34d399">u_C</text>

      {/* ── Sens du courant i ── */}
      <path d="M 150 52 L 180 52" stroke="#f472b6" strokeWidth="2" markerEnd="url(#arrP)" fill="none" />
      <text x="150" y="44" {...small} fill="#f472b6">i</text>

      <defs>
        <marker id="arrP" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#f472b6" strokeWidth="1.5" />
        </marker>
        <marker id="arrG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#34d399" strokeWidth="1.5" />
        </marker>
      </defs>

      {/* Légende */}
      <text x="80" y="282" {...small}>Position ① : charge → u_C(t) = E(1 − e^(−t/τ))   ·   Position ② : décharge → u_C(t) = E·e^(−t/τ)   ·   τ = RC</text>
    </svg>
  );
}