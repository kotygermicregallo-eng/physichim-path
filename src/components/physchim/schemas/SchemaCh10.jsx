import React from 'react';

// Cinématique : vecteurs v/a sur trajectoire + repère de Frenet (MCU)
const C = { teal: '#4fd1c5', rose: '#ee7f9d', gold: '#e8b44a', green: '#34d399', txt: '#cbd5e1', mut: '#64748b' };

export default function SchemaCh10() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(79,209,197,0.15)' }}>
      <svg viewBox="0 0 760 360" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <defs>
          <marker id="c10t" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill={C.teal} /></marker>
          <marker id="c10r" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill={C.rose} /></marker>
          <marker id="c10g" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill={C.gold} /></marker>
        </defs>

        {/* ── Gauche : trajectoire quelconque, v tangent ── */}
        <g transform="translate(40, 40)">
          <text x="150" y="-10" fill={C.teal} fontSize="12.5" fontWeight="bold" textAnchor="middle">v⃗ tangent à la trajectoire</text>
          {/* trajectoire */}
          <path d="M10,230 C70,140 140,60 220,55 C270,53 300,80 320,110" stroke={C.mut} strokeWidth="2" fill="none" strokeDasharray="1,0" />
          {/* points chronophoto */}
          {[[38, 187], [95, 116], [165, 68], [233, 56], [292, 76]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4" fill={C.txt} />
          ))}
          <text x="30" y="208" fill={C.mut} fontSize="10">M₀</text>
          <text x="88" y="138" fill={C.mut} fontSize="10">M₁</text>
          <text x="162" y="92" fill={C.mut} fontSize="10">M₂</text>
          {/* vecteurs vitesse tangents */}
          <line x1="95" y1="116" x2="150" y2="74" stroke={C.teal} strokeWidth="2.2" markerEnd="url(#c10t)" />
          <text x="142" y="64" fill={C.teal} fontSize="11" fontWeight="bold">v⃗(M₁)</text>
          <line x1="233" y1="56" x2="298" y2="62" stroke={C.teal} strokeWidth="2.2" markerEnd="url(#c10t)" />
          <text x="288" y="48" fill={C.teal} fontSize="11" fontWeight="bold">v⃗(M₃)</text>
          {/* accélération M1 */}
          <line x1="95" y1="116" x2="122" y2="146" stroke={C.rose} strokeWidth="2.2" markerEnd="url(#c10r)" />
          <text x="124" y="160" fill={C.rose} fontSize="11" fontWeight="bold">a⃗</text>
          <text x="150" y="230" fill={C.mut} fontSize="10">chronophoto : v⃗(Mₙ) ≈ Mₙ₋₁Mₙ₊₁ / 2Δt</text>
          <text x="150" y="246" fill={C.mut} fontSize="10">v⃗ = dOM⃗/dt · a⃗ = dv⃗/dt</text>
        </g>

        {/* ── Droite : MCU + Frenet ── */}
        <g transform="translate(430, 40)">
          <text x="140" y="-10" fill={C.rose} fontSize="12.5" fontWeight="bold" textAnchor="middle">MCU — repère de Frenet (t⃗, n⃗)</text>
          {/* cercle */}
          <circle cx="140" cy="130" r="100" fill="none" stroke={C.mut} strokeWidth="1.5" strokeDasharray="5,4" />
          <circle cx="140" cy="130" r="3.5" fill={C.gold} />
          <text x="140" y="150" fill={C.gold} fontSize="10.5" textAnchor="middle">centre O</text>
          {/* rayon */}
          <line x1="140" y1="130" x2="226" y2="79" stroke={C.mut} strokeWidth="1" />
          <text x="178" y="98" fill={C.mut} fontSize="10.5">R</text>
          {/* point M */}
          <circle cx="226" cy="79" r="5" fill={C.txt} />
          <text x="240" y="74" fill={C.txt} fontSize="11" fontWeight="bold">M</text>
          {/* t : tangent */}
          <line x1="226" y1="79" x2="270" y2="148" stroke={C.teal} strokeWidth="2.2" markerEnd="url(#c10t)" />
          <text x="274" y="162" fill={C.teal} fontSize="11" fontWeight="bold">t⃗ (sens du mvt)</text>
          {/* n : vers le centre */}
          <line x1="226" y1="79" x2="178" y2="108" stroke={C.rose} strokeWidth="2.2" markerEnd="url(#c10r)" />
          <text x="150" y="100" fill={C.rose} fontSize="11" fontWeight="bold">n⃗</text>
          {/* a centripète */}
          <line x1="226" y1="79" x2="190" y2="101" stroke={C.gold} strokeWidth="3" markerEnd="url(#c10g)" opacity="0.85" />
          <text x="230" y="106" fill={C.gold} fontSize="10.5" fontWeight="bold">a⃗ = (v²/R)·n⃗</text>
          {/* sens de rotation */}
          <path d="M52,90 A100,100 0 0,1 95,46" stroke={C.green} strokeWidth="1.5" fill="none" markerEnd="url(#c10t)" />
          <text x="40" y="42" fill={C.green} fontSize="10">sens du mouvement</text>
          <text x="140" y="262" fill={C.mut} fontSize="10" textAnchor="middle">MCU : ‖v⃗‖ = cste, a_T = dv/dt = 0</text>
          <text x="140" y="277" fill={C.mut} fontSize="10" textAnchor="middle">a⃗ centripète, dirigée vers O</text>
        </g>

        <text x="380" y="348" fill={C.mut} fontSize="10.5" textAnchor="middle">
          Toujours préciser : référentiel + repère (O, i⃗, j⃗) ou Frenet (t⃗, n⃗) pour un mouvement circulaire
        </text>
      </svg>
    </div>
  );
}