import React from 'react';

// Montages type Bac : laser → fente (diffraction) et laser → bifente (interférences)
export default function BacOndes() {
  const small = { fill: '#94a3b8', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' };
  const label = { fill: '#22d3ee', fontSize: 12, fontFamily: 'JetBrains Mono, monospace' };

  return (
    <svg viewBox="0 0 560 380" className="w-full" style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '0.75rem' }}>
      {/* ════ DIFFRACTION (haut) ════ */}
      <text x="20" y="25" {...label}>① Diffraction par une fente</text>

      {/* Laser */}
      <rect x="30" y="75" width="60" height="26" fill="none" stroke="#f87171" strokeWidth="2" rx="3" />
      <text x="38" y="93" {...small} fill="#f87171">LASER</text>
      {/* Faisceau incident */}
      <line x1="90" y1="88" x2="210" y2="88" stroke="#ef4444" strokeWidth="2.5" />

      {/* Fente (plaque) */}
      <line x1="210" y1="35" x2="210" y2="80" stroke="#e2e8f0" strokeWidth="4" />
      <line x1="210" y1="96" x2="210" y2="141" stroke="#e2e8f0" strokeWidth="4" />
      <path d="M 222 80 L 222 96" stroke="#fbbf24" strokeWidth="1.5" markerStart="url(#wY)" markerEnd="url(#wY)" fill="none" />
      <text x="228" y="92" {...small} fill="#fbbf24">a</text>
      <text x="190" y="155" {...small}>fente</text>

      {/* Faisceau diffracté (cône) */}
      <path d="M 210 88 L 480 38 M 210 88 L 480 138" stroke="#ef4444" strokeWidth="1.2" opacity="0.55" />
      <path d="M 210 88 L 480 88" stroke="#ef4444" strokeWidth="2" opacity="0.8" />
      {/* angle θ */}
      <path d="M 280 88 A 70 70 0 0 0 276 76" fill="none" stroke="#34d399" strokeWidth="1.5" />
      <text x="288" y="78" {...small} fill="#34d399">θ = λ/a</text>

      {/* Écran + figure de diffraction */}
      <line x1="480" y1="25" x2="480" y2="150" stroke="#e2e8f0" strokeWidth="3" />
      <text x="468" y="165" {...small}>écran</text>
      {/* Tache centrale (2x plus large) + taches secondaires */}
      <rect x="486" y="68" width="10" height="40" fill="#ef4444" opacity="0.9" rx="2" />
      <rect x="486" y="46" width="10" height="14" fill="#ef4444" opacity="0.45" rx="2" />
      <rect x="486" y="116" width="10" height="14" fill="#ef4444" opacity="0.45" rx="2" />
      <rect x="486" y="30" width="10" height="9" fill="#ef4444" opacity="0.25" rx="2" />
      <rect x="486" y="137" width="10" height="9" fill="#ef4444" opacity="0.25" rx="2" />
      <path d="M 505 68 L 505 108" stroke="#22d3ee" strokeWidth="1.5" markerStart="url(#wC)" markerEnd="url(#wC)" fill="none" />
      <text x="512" y="92" {...small} fill="#22d3ee">L = 2λD/a</text>

      {/* Distance D */}
      <path d="M 212 170 L 478 170" stroke="#a855f7" strokeWidth="1.2" markerStart="url(#wP)" markerEnd="url(#wP)" fill="none" />
      <text x="335" y="184" {...small} fill="#a855f7">D</text>

      {/* ════ INTERFÉRENCES (bas) ════ */}
      <text x="20" y="218" {...label}>② Interférences — fentes de Young</text>

      {/* Laser */}
      <rect x="30" y="270" width="60" height="26" fill="none" stroke="#f87171" strokeWidth="2" rx="3" />
      <text x="38" y="288" {...small} fill="#f87171">LASER</text>
      <line x1="90" y1="283" x2="210" y2="283" stroke="#ef4444" strokeWidth="2.5" />

      {/* Bifente */}
      <line x1="210" y1="230" x2="210" y2="270" stroke="#e2e8f0" strokeWidth="4" />
      <line x1="210" y1="278" x2="210" y2="288" stroke="#e2e8f0" strokeWidth="4" />
      <line x1="210" y1="296" x2="210" y2="336" stroke="#e2e8f0" strokeWidth="4" />
      <path d="M 222 272 L 222 294" stroke="#fbbf24" strokeWidth="1.5" markerStart="url(#wY)" markerEnd="url(#wY)" fill="none" />
      <text x="228" y="288" {...small} fill="#fbbf24">b</text>
      <text x="180" y="350" {...small}>fentes S₁, S₂</text>

      {/* Faisceaux qui se croisent */}
      <path d="M 210 274 L 480 240 M 210 274 L 480 330 M 210 292 L 480 240 M 210 292 L 480 330" stroke="#ef4444" strokeWidth="1" opacity="0.4" />
      <path d="M 210 283 L 480 283" stroke="#ef4444" strokeWidth="1.8" opacity="0.7" />

      {/* Écran + franges */}
      <line x1="480" y1="228" x2="480" y2="345" stroke="#e2e8f0" strokeWidth="3" />
      {[238, 254, 270, 286, 302, 318, 334].map((y, i) => (
        <rect key={y} x="486" y={y - 4} width="10" height="9" fill="#ef4444" opacity={i === 3 ? 0.95 : 0.6} rx="2" />
      ))}
      <path d="M 505 270 L 505 286" stroke="#22d3ee" strokeWidth="1.5" markerStart="url(#wC)" markerEnd="url(#wC)" fill="none" />
      <text x="512" y="282" {...small} fill="#22d3ee">i = λD/b</text>
      <text x="430" y="365" {...small}>franges équidistantes</text>

      <defs>
        <marker id="wY" markerWidth="7" markerHeight="7" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5" fill="none" stroke="#fbbf24" strokeWidth="1.3" />
        </marker>
        <marker id="wC" markerWidth="7" markerHeight="7" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5" fill="none" stroke="#22d3ee" strokeWidth="1.3" />
        </marker>
        <marker id="wP" markerWidth="7" markerHeight="7" refX="3" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5" fill="none" stroke="#a855f7" strokeWidth="1.3" />
        </marker>
      </defs>
    </svg>
  );
}