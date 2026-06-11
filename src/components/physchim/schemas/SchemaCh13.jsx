import React from 'react';

// Mécanique céleste : lois de Kepler (ellipse, aires) + orbite circulaire (formules)
const C = { teal: '#4fd1c5', rose: '#ee7f9d', gold: '#e8b44a', green: '#34d399', txt: '#cbd5e1', mut: '#64748b' };

export default function SchemaCh13() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(79,209,197,0.15)' }}>
      <svg viewBox="0 0 760 380" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <defs>
          <marker id="c13t" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill={C.teal} /></marker>
          <marker id="c13r" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill={C.rose} /></marker>
        </defs>

        {/* ── Gauche : ellipse Kepler 1 & 2 ── */}
        <g transform="translate(40, 50)">
          <text x="170" y="-16" fill={C.gold} fontSize="12.5" fontWeight="bold" textAnchor="middle">Lois 1 & 2 de Kepler — ellipse et aires</text>
          {/* ellipse */}
          <ellipse cx="170" cy="120" rx="160" ry="95" fill="none" stroke={C.mut} strokeWidth="1.5" />
          {/* Soleil au foyer */}
          <circle cx="240" cy="120" r="13" fill={C.gold} opacity="0.9" />
          <text x="240" y="150" fill={C.gold} fontSize="10.5" textAnchor="middle">Soleil (foyer F)</text>
          {/* secteur périhélie (rapide) */}
          <path d="M240,120 L322,160 A160,95 0 0,1 318,84 z" fill="rgba(238,127,157,0.18)" stroke={C.rose} strokeWidth="1" />
          {/* secteur aphélie (lent) */}
          <path d="M240,120 L18,150 A160,95 0 0,1 14,98 z" fill="rgba(79,209,197,0.16)" stroke={C.teal} strokeWidth="1" />
          <text x="296" y="124" fill={C.rose} fontSize="9.5" textAnchor="middle">A₁</text>
          <text x="80" y="124" fill={C.teal} fontSize="9.5" textAnchor="middle">A₂</text>
          {/* planète */}
          <circle cx="322" cy="160" r="6" fill={C.teal} />
          {/* vitesses */}
          <line x1="322" y1="160" x2="288" y2="208" stroke={C.rose} strokeWidth="2.2" markerEnd="url(#c13r)" />
          <text x="296" y="226" fill={C.rose} fontSize="10.5" fontWeight="bold">v grand (périhélie)</text>
          <circle cx="14" cy="98" r="6" fill={C.teal} />
          <line x1="14" y1="98" x2="32" y2="62" stroke={C.teal} strokeWidth="2" markerEnd="url(#c13t)" />
          <text x="36" y="52" fill={C.teal} fontSize="10.5" fontWeight="bold">v petit (aphélie)</text>
          {/* demi grand axe */}
          <line x1="170" y1="120" x2="330" y2="120" stroke={C.green} strokeWidth="1.2" strokeDasharray="4,3" />
          <text x="262" y="110" fill={C.green} fontSize="10.5">a (demi-grand axe)</text>
          <text x="170" y="248" fill={C.mut} fontSize="10" textAnchor="middle">A₁ = A₂ en durées égales (loi des aires)</text>
        </g>

        {/* ── Droite : orbite circulaire + formules ── */}
        <g transform="translate(450, 50)">
          <text x="135" y="-16" fill={C.teal} fontSize="12.5" fontWeight="bold" textAnchor="middle">Orbite circulaire (satellite)</text>
          {/* astre central */}
          <circle cx="120" cy="110" r="26" fill="rgba(79,209,197,0.18)" stroke={C.teal} strokeWidth="1.5" />
          <text x="120" y="115" fill={C.teal} fontSize="10.5" fontWeight="bold" textAnchor="middle">M</text>
          {/* orbite */}
          <circle cx="120" cy="110" r="88" fill="none" stroke={C.mut} strokeWidth="1.3" strokeDasharray="5,4" />
          {/* satellite */}
          <circle cx="200" cy="73" r="6" fill={C.gold} />
          <text x="214" y="68" fill={C.gold} fontSize="10.5" fontWeight="bold">m</text>
          {/* F grav vers centre */}
          <line x1="200" y1="73" x2="158" y2="92" stroke={C.rose} strokeWidth="2.2" markerEnd="url(#c13r)" />
          <text x="148" y="76" fill={C.rose} fontSize="10.5" fontWeight="bold">F⃗ = GmM/r²</text>
          {/* v tangent */}
          <line x1="200" y1="73" x2="236" y2="138" stroke={C.teal} strokeWidth="2.2" markerEnd="url(#c13t)" />
          <text x="240" y="152" fill={C.teal} fontSize="10.5" fontWeight="bold">v⃗</text>
          {/* r */}
          <line x1="120" y1="110" x2="200" y2="73" stroke={C.green} strokeWidth="1.2" strokeDasharray="3,3" />
          <text x="156" y="100" fill={C.green} fontSize="10.5">r</text>
          {/* formules */}
          <g fontSize="11">
            <text x="0" y="232" fill={C.txt}>PFD (Frenet) :  m·v²/r = GmM/r²</text>
            <text x="0" y="252" fill={C.teal} fontWeight="bold">⇒ v = √(GM/r)   (indép. de m)</text>
            <text x="0" y="272" fill={C.gold} fontWeight="bold">⇒ T² / r³ = 4π² / (GM)  (3ème loi)</text>
          </g>
        </g>

        <text x="380" y="366" fill={C.mut} fontSize="10.5" textAnchor="middle">
          MCU car dv/dt = 0 · Géostationnaire : T = 24 h, plan équatorial → h ≈ 35 786 km · r = R_planète + altitude
        </text>
      </svg>
    </div>
  );
}