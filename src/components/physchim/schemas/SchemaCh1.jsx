import React from 'react';

// Cinétique chimique : suivi [A](t), tangente, t½ + vérification ordre 1
const C = { teal: '#4fd1c5', rose: '#ee7f9d', gold: '#e8b44a', green: '#34d399', txt: '#cbd5e1', mut: '#64748b' };

export default function SchemaCh1() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(79,209,197,0.15)' }}>
      <svg viewBox="0 0 760 320" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {/* ── Gauche : [A](t) exponentielle décroissante ── */}
        <g transform="translate(55, 40)">
          <text x="130" y="-12" fill={C.teal} fontSize="12.5" fontWeight="bold" textAnchor="middle">Suivi cinétique : [A](t) = [A]₀·e^(−kt)</text>
          <line x1="0" y1="220" x2="300" y2="220" stroke={C.mut} strokeWidth="1.5" />
          <line x1="0" y1="220" x2="0" y2="10" stroke={C.mut} strokeWidth="1.5" />
          <text x="296" y="238" fill={C.mut} fontSize="10">t</text>
          <text x="-10" y="14" fill={C.mut} fontSize="10">[A]</text>
          {/* [A]0 */}
          <line x1="0" y1="30" x2="10" y2="30" stroke={C.gold} strokeWidth="1.5" />
          <text x="-8" y="34" fill={C.gold} fontSize="10.5" fontWeight="bold" textAnchor="end">[A]₀</text>
          {/* courbe */}
          <path d="M0,30 C40,135 90,180 160,202 C220,213 270,218 300,219" stroke={C.teal} strokeWidth="2.5" fill="none" />
          {/* tangente origine : vitesse initiale */}
          <line x1="0" y1="30" x2="95" y2="220" stroke={C.rose} strokeWidth="1.5" strokeDasharray="4,3" />
          <text x="100" y="120" fill={C.rose} fontSize="10">pente = −v(0)</text>
          <text x="100" y="134" fill={C.rose} fontSize="10">(vitesse max)</text>
          {/* t1/2 */}
          <line x1="0" y1="125" x2="64" y2="125" stroke={C.green} strokeWidth="1" strokeDasharray="3,3" />
          <line x1="64" y1="125" x2="64" y2="220" stroke={C.green} strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="64" cy="125" r="3.5" fill={C.green} />
          <text x="-8" y="129" fill={C.green} fontSize="10" textAnchor="end">[A]₀/2</text>
          <text x="64" y="236" fill={C.green} fontSize="11" fontWeight="bold" textAnchor="middle">t½</text>
        </g>

        {/* ── Droite : ln[A] vs t : droite, ordre 1 ── */}
        <g transform="translate(440, 40)">
          <text x="130" y="-12" fill={C.rose} fontSize="12.5" fontWeight="bold" textAnchor="middle">Vérification ordre 1 : ln([A]) = f(t)</text>
          <line x1="0" y1="220" x2="280" y2="220" stroke={C.mut} strokeWidth="1.5" />
          <line x1="0" y1="220" x2="0" y2="10" stroke={C.mut} strokeWidth="1.5" />
          <text x="276" y="238" fill={C.mut} fontSize="10">t</text>
          <text x="-10" y="14" fill={C.mut} fontSize="10">ln[A]</text>
          {/* droite */}
          <line x1="0" y1="35" x2="260" y2="195" stroke={C.rose} strokeWidth="2.5" />
          {/* points expérimentaux */}
          {[[20, 47], [70, 78], [120, 109], [170, 140], [220, 171]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4" fill="none" stroke={C.gold} strokeWidth="2" />
          ))}
          <text x="0" y="28" fill={C.txt} fontSize="10.5">ln([A]₀)</text>
          {/* triangle de pente */}
          <path d="M90,90 H160 V133" stroke={C.teal} strokeWidth="1.2" strokeDasharray="3,3" fill="none" />
          <text x="168" y="116" fill={C.teal} fontSize="11" fontWeight="bold">pente = −k</text>
          <text x="40" y="205" fill={C.txt} fontSize="10.5">DROITE ⇒ ordre 1 confirmé</text>
        </g>

        <text x="380" y="305" fill={C.mut} fontSize="10.5" textAnchor="middle">
          Ordre 1 : −d[A]/dt = k[A]  ⇒  [A](t) = [A]₀·e^(−kt)  ·  t½ = ln 2 / k (indépendant de [A]₀)
        </text>
      </svg>
    </div>
  );
}