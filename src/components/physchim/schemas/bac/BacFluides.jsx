import React from 'react';

// Mécanique des fluides type Bac : tube de Venturi + écoulement de Torricelli
export default function BacFluides() {
  const small = { fill: '#94a3b8', fontSize: 11, fontFamily: 'JetBrains Mono, monospace' };
  const label = { fill: '#22d3ee', fontSize: 12, fontFamily: 'JetBrains Mono, monospace' };

  return (
    <svg viewBox="0 0 560 350" className="w-full" style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '0.75rem' }}>
      {/* ════ VENTURI (haut) ════ */}
      <text x="20" y="25" {...label}>① Tube de Venturi</text>
      {/* Profil du tube */}
      <path d="M 40 50 L 200 50 L 260 70 L 340 70 L 400 50 L 520 50" fill="none" stroke="#e2e8f0" strokeWidth="2" />
      <path d="M 40 130 L 200 130 L 260 110 L 340 110 L 400 130 L 520 130" fill="none" stroke="#e2e8f0" strokeWidth="2" />
      <rect x="42" y="52" width="476" height="76" fill="rgba(34,211,238,0.08)" />

      {/* Manomètres */}
      <rect x="100" y="20" width="10" height="32" fill="rgba(34,211,238,0.35)" stroke="#22d3ee" strokeWidth="1" />
      <rect x="290" y="38" width="10" height="33" fill="rgba(34,211,238,0.35)" stroke="#22d3ee" strokeWidth="1" />
      <rect x="100" y="14" width="10" height="6" fill="none" stroke="#22d3ee" strokeWidth="1" />
      <rect x="290" y="32" width="10" height="6" fill="none" stroke="#22d3ee" strokeWidth="1" />
      <text x="80" y="12" {...small} fill="#22d3ee">h₁ (P₁)</text>
      <text x="272" y="30" {...small} fill="#22d3ee">h₂ &lt; h₁ (P₂ &lt; P₁)</text>

      {/* Vitesses */}
      <path d="M 110 90 L 160 90" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#aV)" fill="none" />
      <text x="115" y="105" {...small} fill="#34d399">v₁ · S₁</text>
      <path d="M 280 90 L 350 90" stroke="#f472b6" strokeWidth="2.5" markerEnd="url(#aV2)" fill="none" />
      <text x="285" y="105" {...small} fill="#f472b6">v₂ &gt; v₁ · S₂ &lt; S₁</text>

      <text x="40" y="155" {...small}>Continuité : v₁S₁ = v₂S₂  ·  Bernoulli : P₁ + ½ρv₁² = P₂ + ½ρv₂²  →  effet Venturi : v↑ ⇒ P↓</text>

      {/* ════ TORRICELLI (bas) ════ */}
      <text x="20" y="195" {...label}>② Écoulement de Torricelli</text>
      {/* Réservoir */}
      <path d="M 60 210 L 60 320 L 240 320 L 240 290 L 250 290 L 250 280 L 240 280 L 240 210" fill="none" stroke="#64748b" strokeWidth="2" />
      <rect x="62" y="225" width="176" height="93" fill="rgba(34,211,238,0.1)" />
      {/* Surface libre */}
      <line x1="62" y1="225" x2="238" y2="225" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="100" y="218" {...small} fill="#22d3ee">surface libre · P_atm · v_A ≈ 0</text>

      {/* hauteur h */}
      <path d="M 270 228 L 270 282" stroke="#fbbf24" strokeWidth="1.5" markerStart="url(#aY)" markerEnd="url(#aY)" fill="none" />
      <text x="278" y="258" {...small} fill="#fbbf24">h</text>

      {/* Jet */}
      <path d="M 250 285 Q 310 290 340 320" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
      <path d="M 252 285 L 290 287" stroke="#f472b6" strokeWidth="2.5" markerEnd="url(#aV2)" fill="none" />
      <text x="295" y="278" {...small} fill="#f472b6">v_B = √(2gh)</text>

      <text x="360" y="240" {...small}>Bernoulli entre A (surface)</text>
      <text x="360" y="255" {...small}>et B (orifice) :</text>
      <text x="360" y="275" {...small} fill="#22d3ee">ρgh = ½ρv_B²</text>
      <text x="360" y="295" {...small} fill="#f472b6">v_B = √(2gh)</text>

      <defs>
        <marker id="aV" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#34d399" strokeWidth="1.5" />
        </marker>
        <marker id="aV2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#f472b6" strokeWidth="1.5" />
        </marker>
        <marker id="aY" markerWidth="8" markerHeight="8" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
        </marker>
      </defs>
    </svg>
  );
}