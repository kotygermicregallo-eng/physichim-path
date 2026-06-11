import React from 'react';

// Phénomènes ondulatoires : figures de diffraction et d'interférences sur écran + formules
const C = { teal: '#4fd1c5', rose: '#ee7f9d', gold: '#e8b44a', green: '#34d399', txt: '#cbd5e1', mut: '#64748b' };

export default function SchemaCh17() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(79,209,197,0.15)' }}>
      <svg viewBox="0 0 760 420" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <defs>
          <marker id="c17d" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 z" fill={C.mut} /></marker>
        </defs>

        {/* ── Haut : diffraction ── */}
        <g transform="translate(50, 45)">
          <text x="330" y="-14" fill={C.rose} fontSize="12.5" fontWeight="bold" textAnchor="middle">DIFFRACTION — figure sur l'écran (1 fente de largeur a)</text>
          {/* figure d'intensité */}
          <line x1="0" y1="120" x2="660" y2="120" stroke={C.mut} strokeWidth="1.2" />
          {/* tache centrale (large, intense) */}
          <path d="M180,120 C220,120 250,10 330,10 C410,10 440,120 480,120" fill="rgba(238,127,157,0.16)" stroke={C.rose} strokeWidth="2" />
          {/* taches secondaires */}
          <path d="M90,120 C110,120 120,82 135,82 C150,82 162,120 180,120" fill="rgba(238,127,157,0.08)" stroke={C.rose} strokeWidth="1.4" />
          <path d="M480,120 C498,120 510,82 525,82 C540,82 550,120 570,120" fill="rgba(238,127,157,0.08)" stroke={C.rose} strokeWidth="1.4" />
          <path d="M30,120 C44,120 50,98 60,98 C70,98 78,120 90,120" fill="rgba(238,127,157,0.05)" stroke={C.rose} strokeWidth="1.1" />
          <path d="M570,120 C582,120 590,98 600,98 C610,98 616,120 630,120" fill="rgba(238,127,157,0.05)" stroke={C.rose} strokeWidth="1.1" />
          {/* largeur tache centrale */}
          <path d="M180,140 H480" stroke={C.gold} strokeWidth="1.4" markerEnd="url(#c17d)" markerStart="url(#c17d)" />
          <text x="330" y="158" fill={C.gold} fontSize="11.5" fontWeight="bold" textAnchor="middle">L = 2λD/a (tache centrale, 2× plus large)</text>
          <text x="330" y="44" fill={C.rose} fontSize="10" textAnchor="middle">intensité max au centre</text>
          <text x="585" y="60" fill={C.txt} fontSize="11" fontWeight="bold">θ = λ/a</text>
          <text x="585" y="76" fill={C.mut} fontSize="9.5">a ↓ ⇒ θ ↑</text>
        </g>

        {/* ── Bas : interférences ── */}
        <g transform="translate(50, 255)">
          <text x="330" y="-14" fill={C.teal} fontSize="12.5" fontWeight="bold" textAnchor="middle">INTERFÉRENCES — franges de Young (2 sources séparées de b)</text>
          <line x1="0" y1="100" x2="660" y2="100" stroke={C.mut} strokeWidth="1.2" />
          {/* franges sinusoïdales équidistantes */}
          {[0, 1, 2, 3, 4, 5, 6].map(n => {
            const cx = 60 + n * 90;
            return (
              <path key={n} d={`M${cx - 35},100 C${cx - 18},100 ${cx - 20},18 ${cx},18 C${cx + 20},18 ${cx + 18},100 ${cx + 35},100`}
                fill="rgba(79,209,197,0.13)" stroke={C.teal} strokeWidth="1.6" />
            );
          })}
          {/* frange centrale */}
          <line x1="330" y1="10" x2="330" y2="100" stroke={C.gold} strokeWidth="1" strokeDasharray="3,3" />
          <text x="330" y="6" fill={C.gold} fontSize="9.5" textAnchor="middle">frange centrale (δ = 0)</text>
          {/* interfrange */}
          <path d="M330,118 H420" stroke={C.gold} strokeWidth="1.4" markerEnd="url(#c17d)" markerStart="url(#c17d)" />
          <text x="375" y="136" fill={C.gold} fontSize="11.5" fontWeight="bold" textAnchor="middle">i = λD/b</text>
          {/* annotations constructive / destructive */}
          <text x="150" y="40" fill={C.teal} fontSize="9.5" textAnchor="middle">brillante :</text>
          <text x="150" y="53" fill={C.teal} fontSize="9.5" textAnchor="middle">δ = nλ</text>
          <text x="195" y="92" fill={C.rose} fontSize="9.5" textAnchor="middle">sombre :</text>
          <text x="195" y="105" fill="none" fontSize="9.5">.</text>
          <text x="195" y="78" fill="none" fontSize="9.5">.</text>
          <text x="240" y="40" fill={C.rose} fontSize="9.5" textAnchor="middle">δ = (n+½)λ</text>
          {/* formules à droite */}
          <text x="588" y="34" fill={C.txt} fontSize="11" fontWeight="bold">δ = b·x/D</text>
          <text x="588" y="52" fill={C.mut} fontSize="9.5">b ↓ ou D ↑ ⇒ i ↑</text>
        </g>

        <text x="380" y="410" fill={C.mut} fontSize="10.5" textAnchor="middle">
          Diffraction : 1 fente, tache centrale 2× plus large · Interférences : 2 sources cohérentes, franges équidistantes de i
        </text>
      </svg>
    </div>
  );
}