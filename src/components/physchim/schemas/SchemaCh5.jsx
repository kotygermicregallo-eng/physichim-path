import React from 'react';

// Dosage par titrage : montage + courbe pH-métrique + courbe conductimétrique
const C = { teal: '#4fd1c5', rose: '#ee7f9d', gold: '#e8b44a', green: '#34d399', txt: '#cbd5e1', mut: '#64748b' };

export default function SchemaCh5() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(79,209,197,0.15)' }}>
      <svg viewBox="0 0 760 400" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {/* ── Montage (gauche) ── */}
        <g transform="translate(40, 30)">
          <text x="90" y="0" fill={C.gold} fontSize="12.5" fontWeight="bold" textAnchor="middle">Montage de titrage</text>
          {/* burette */}
          <rect x="75" y="14" width="22" height="130" rx="4" fill="rgba(79,209,197,0.08)" stroke={C.teal} strokeWidth="1.5" />
          <rect x="77" y="18" width="18" height="70" fill="rgba(79,209,197,0.25)" />
          <path d="M81,144 L86,162 L91,144 z" fill="none" stroke={C.teal} strokeWidth="1.5" />
          <text x="110" y="50" fill={C.teal} fontSize="10.5">Burette graduée</text>
          <text x="110" y="64" fill={C.teal} fontSize="10.5">titrant : cB connue</text>
          <text x="110" y="78" fill={C.mut} fontSize="10">volume versé V</text>
          {/* goutte */}
          <circle cx="86" cy="172" r="3" fill={C.teal} />
          {/* bécher */}
          <path d="M40,190 V280 Q40,292 52,292 H120 Q132,292 132,280 V190" fill="rgba(238,127,157,0.06)" stroke={C.rose} strokeWidth="1.5" />
          <rect x="42" y="226" width="88" height="64" fill="rgba(238,127,157,0.16)" />
          <text x="86" y="262" fill={C.rose} fontSize="10.5" textAnchor="middle">titré : cA ?</text>
          <text x="86" y="276" fill={C.mut} fontSize="9.5" textAnchor="middle">volume VA</text>
          {/* barreau aimanté + agitateur */}
          <ellipse cx="86" cy="286" rx="14" ry="3.5" fill={C.gold} />
          <rect x="30" y="298" width="112" height="14" rx="4" fill="rgba(255,255,255,0.06)" stroke={C.mut} strokeWidth="1" />
          <text x="86" y="328" fill={C.mut} fontSize="9.5" textAnchor="middle">agitateur magnétique</text>
          {/* sonde */}
          <line x1="150" y1="180" x2="124" y2="252" stroke={C.green} strokeWidth="3" strokeLinecap="round" />
          <rect x="142" y="158" width="52" height="24" rx="5" fill="rgba(52,211,153,0.1)" stroke={C.green} strokeWidth="1.2" />
          <text x="168" y="174" fill={C.green} fontSize="9.5" textAnchor="middle">pH-mètre /</text>
          <text x="168" y="196" fill={C.green} fontSize="9.5" textAnchor="middle">conductimètre</text>
        </g>

        {/* ── Courbe pH-métrique ── */}
        <g transform="translate(300, 50)">
          <text x="100" y="-6" fill={C.green} fontSize="12" fontWeight="bold" textAnchor="middle">Suivi pH-métrique</text>
          <line x1="0" y1="140" x2="200" y2="140" stroke={C.mut} strokeWidth="1.5" />
          <line x1="0" y1="140" x2="0" y2="6" stroke={C.mut} strokeWidth="1.5" />
          <text x="196" y="156" fill={C.mut} fontSize="10">V</text>
          <text x="-12" y="12" fill={C.mut} fontSize="10">pH</text>
          {/* courbe en S */}
          <path d="M0,122 C40,116 70,110 92,96 C104,84 106,40 122,28 C150,16 180,13 200,12" stroke={C.green} strokeWidth="2.5" fill="none" />
          {/* équivalence */}
          <circle cx="106" cy="62" r="4" fill={C.gold} />
          <line x1="106" y1="62" x2="106" y2="140" stroke={C.gold} strokeWidth="1.2" strokeDasharray="4,3" />
          <text x="106" y="156" fill={C.gold} fontSize="11" fontWeight="bold" textAnchor="middle">VE</text>
          <text x="120" y="60" fill={C.gold} fontSize="10">saut de pH</text>
          <text x="100" y="180" fill={C.mut} fontSize="9.5" textAnchor="middle">VE : méthode des tangentes</text>
          <text x="100" y="193" fill={C.mut} fontSize="9.5" textAnchor="middle">ou maximum de dpH/dV</text>
        </g>

        {/* ── Courbe conductimétrique ── */}
        <g transform="translate(540, 50)">
          <text x="100" y="-6" fill={C.teal} fontSize="12" fontWeight="bold" textAnchor="middle">Suivi conductimétrique</text>
          <line x1="0" y1="140" x2="200" y2="140" stroke={C.mut} strokeWidth="1.5" />
          <line x1="0" y1="140" x2="0" y2="6" stroke={C.mut} strokeWidth="1.5" />
          <text x="196" y="156" fill={C.mut} fontSize="10">V</text>
          <text x="-12" y="12" fill={C.mut} fontSize="10">σ</text>
          {/* deux demi-droites en V */}
          <line x1="0" y1="40" x2="100" y2="110" stroke={C.teal} strokeWidth="2.5" />
          <line x1="100" y1="110" x2="200" y2="30" stroke={C.rose} strokeWidth="2.5" />
          {/* prolongements pointillés */}
          <line x1="80" y1="96" x2="130" y2="131" stroke={C.teal} strokeWidth="1" strokeDasharray="3,3" />
          <line x1="70" y1="134" x2="110" y2="102" stroke={C.rose} strokeWidth="1" strokeDasharray="3,3" />
          {/* équivalence */}
          <circle cx="100" cy="110" r="4" fill={C.gold} />
          <line x1="100" y1="110" x2="100" y2="140" stroke={C.gold} strokeWidth="1.2" strokeDasharray="4,3" />
          <text x="100" y="156" fill={C.gold} fontSize="11" fontWeight="bold" textAnchor="middle">VE</text>
          <text x="100" y="180" fill={C.mut} fontSize="9.5" textAnchor="middle">VE : intersection des</text>
          <text x="100" y="193" fill={C.mut} fontSize="9.5" textAnchor="middle">deux demi-droites</text>
        </g>

        <text x="380" y="385" fill={C.mut} fontSize="10.5" textAnchor="middle">
          À l'équivalence : nA/a = nB/b  ⇒  cA·VA/a = cB·VE/b  ·  Réaction support : unique, totale, rapide
        </text>
      </svg>
    </div>
  );
}