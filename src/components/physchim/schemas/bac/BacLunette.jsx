import React from 'react';

// Lunette astronomique afocale type Bac : objectif L1 + oculaire L2, foyers confondus
export default function BacLunette() {
  const small = { fill: '#94a3b8', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' };
  const label = { fill: '#22d3ee', fontSize: 12, fontFamily: 'JetBrains Mono, monospace' };

  return (
    <svg viewBox="0 0 560 320" className="w-full" style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '0.75rem' }}>
      <text x="20" y="25" {...label}>Lunette astronomique afocale (image à l'infini)</text>

      {/* Axe optique */}
      <line x1="20" y1="170" x2="540" y2="170" stroke="#64748b" strokeWidth="1" strokeDasharray="6,4" />
      <text x="522" y="162" {...small}>Δ</text>

      {/* ── Objectif L1 (grande lentille convergente) ── */}
      <line x1="170" y1="80" x2="170" y2="260" stroke="#22d3ee" strokeWidth="3" />
      <path d="M 164 86 L 170 78 L 176 86 M 164 254 L 170 262 L 176 254" stroke="#22d3ee" strokeWidth="2.5" fill="none" />
      <text x="150" y="68" {...label}>L₁ (objectif)</text>
      <text x="142" y="280" {...small}>f₁' grande</text>

      {/* ── Oculaire L2 (petite lentille convergente) ── */}
      <line x1="400" y1="120" x2="400" y2="220" stroke="#a855f7" strokeWidth="3" />
      <path d="M 394 126 L 400 118 L 406 126 M 394 214 L 400 222 L 406 214" stroke="#a855f7" strokeWidth="2.5" fill="none" />
      <text x="380" y="108" {...label} fill="#a855f7">L₂ (oculaire)</text>
      <text x="382" y="240" {...small}>f₂' petite</text>

      {/* ── Foyer commun F'1 = F2 ── */}
      <circle cx="320" cy="170" r="4" fill="#fbbf24" />
      <text x="295" y="192" {...small} fill="#fbbf24">F₁' = F₂</text>

      {/* ── Rayons incidents (objet à l'infini, angle θ) ── */}
      <line x1="30" y1="120" x2="170" y2="150" stroke="#ef4444" strokeWidth="2" />
      <line x1="30" y1="140" x2="170" y2="170" stroke="#ef4444" strokeWidth="2" />
      <line x1="30" y1="160" x2="170" y2="190" stroke="#ef4444" strokeWidth="2" />
      <text x="40" y="110" {...small} fill="#ef4444">objet à l'infini</text>
      {/* angle θ */}
      <path d="M 110 170 A 60 60 0 0 0 106 158" fill="none" stroke="#34d399" strokeWidth="1.5" />
      <text x="118" y="158" {...small} fill="#34d399">θ</text>

      {/* ── Rayons convergent vers image intermédiaire A1B1 au foyer commun ── */}
      <line x1="170" y1="150" x2="320" y2="196" stroke="#ef4444" strokeWidth="1.6" />
      <line x1="170" y1="170" x2="320" y2="196" stroke="#ef4444" strokeWidth="1.6" />
      <line x1="170" y1="190" x2="320" y2="196" stroke="#ef4444" strokeWidth="1.6" />
      {/* Image intermédiaire */}
      <line x1="320" y1="170" x2="320" y2="196" stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#lY)" />
      <text x="328" y="206" {...small} fill="#fbbf24">A₁B₁ (image intermédiaire)</text>

      {/* ── Rayons émergents parallèles (angle θ') ── */}
      <line x1="320" y1="196" x2="400" y2="150" stroke="#ef4444" strokeWidth="1.6" />
      <line x1="400" y1="150" x2="540" y2="72" stroke="#ef4444" strokeWidth="2" />
      <line x1="400" y1="170" x2="540" y2="92" stroke="#ef4444" strokeWidth="2" />
      <line x1="400" y1="190" x2="540" y2="112" stroke="#ef4444" strokeWidth="2" />
      <text x="455" y="62" {...small} fill="#ef4444">image à l'infini</text>
      {/* angle θ' */}
      <path d="M 470 170 A 70 70 0 0 0 462 134" fill="none" stroke="#f472b6" strokeWidth="1.5" />
      <text x="478" y="142" {...small} fill="#f472b6">θ' &gt; θ</text>

      {/* ── Distances focales ── */}
      <path d="M 172 290 L 318 290" stroke="#22d3ee" strokeWidth="1.2" markerStart="url(#lC)" markerEnd="url(#lC)" fill="none" />
      <text x="232" y="305" {...small} fill="#22d3ee">f₁'</text>
      <path d="M 322 290 L 398 290" stroke="#a855f7" strokeWidth="1.2" markerStart="url(#lP)" markerEnd="url(#lP)" fill="none" />
      <text x="352" y="305" {...small} fill="#a855f7">f₂'</text>

      {/* Grossissement */}
      <text x="430" y="295" {...label} fill="#34d399">G = θ'/θ = f₁'/f₂'</text>

      <defs>
        <marker id="lY" markerWidth="7" markerHeight="7" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5" fill="none" stroke="#fbbf24" strokeWidth="1.3" />
        </marker>
        <marker id="lC" markerWidth="7" markerHeight="7" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5" fill="none" stroke="#22d3ee" strokeWidth="1.3" />
        </marker>
        <marker id="lP" markerWidth="7" markerHeight="7" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5" fill="none" stroke="#a855f7" strokeWidth="1.3" />
        </marker>
      </defs>
    </svg>
  );
}