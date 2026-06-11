import React from 'react';

// Mouvement dans un champ uniforme : chute libre 2D + condensateur plan (analogie)
const C = { teal: '#4fd1c5', rose: '#ee7f9d', gold: '#e8b44a', green: '#34d399', txt: '#cbd5e1', mut: '#64748b' };

export default function SchemaCh12() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(79,209,197,0.15)' }}>
      <svg viewBox="0 0 760 400" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <defs>
          <marker id="c12t" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill={C.teal} /></marker>
          <marker id="c12r" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill={C.rose} /></marker>
          <marker id="c12g" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill={C.gold} /></marker>
        </defs>

        {/* ── Gauche : projectile dans champ de pesanteur ── */}
        <g transform="translate(50, 40)">
          <text x="150" y="-10" fill={C.teal} fontSize="12.5" fontWeight="bold" textAnchor="middle">Champ de pesanteur g⃗ : parabole</text>
          {/* axes */}
          <line x1="0" y1="230" x2="320" y2="230" stroke={C.mut} strokeWidth="1.5" />
          <line x1="0" y1="230" x2="0" y2="20" stroke={C.mut} strokeWidth="1.5" />
          <text x="316" y="246" fill={C.mut} fontSize="10">x</text>
          <text x="-12" y="26" fill={C.mut} fontSize="10">y</text>
          {/* parabole */}
          <path d="M0,230 Q150,-30 300,230" stroke={C.teal} strokeWidth="2.5" fill="none" />
          {/* v0 */}
          <line x1="0" y1="230" x2="58" y2="170" stroke={C.gold} strokeWidth="2.4" markerEnd="url(#c12g)" />
          <text x="60" y="164" fill={C.gold} fontSize="11.5" fontWeight="bold">v⃗₀</text>
          {/* angle alpha */}
          <path d="M30,230 A30,30 0 0,0 22,208" stroke={C.gold} strokeWidth="1.2" fill="none" />
          <text x="38" y="218" fill={C.gold} fontSize="11">α</text>
          {/* sommet : v horizontal */}
          <circle cx="150" cy="100" r="4" fill={C.rose} />
          <line x1="150" y1="100" x2="200" y2="100" stroke={C.rose} strokeWidth="2.2" markerEnd="url(#c12r)" />
          <text x="160" y="88" fill={C.rose} fontSize="10.5">sommet S : v_y = 0, v⃗ horizontal</text>
          {/* flèche */}
          <line x1="150" y1="100" x2="150" y2="230" stroke={C.rose} strokeWidth="1" strokeDasharray="4,3" />
          <text x="158" y="180" fill={C.rose} fontSize="10.5">flèche h_max</text>
          {/* portée */}
          <path d="M4,246 H296" stroke={C.green} strokeWidth="1.4" markerEnd="url(#c12t)" />
          <text x="150" y="262" fill={C.green} fontSize="10.5" textAnchor="middle">portée x_P (max si α = 45°)</text>
          {/* g */}
          <line x1="290" y1="40" x2="290" y2="80" stroke={C.txt} strokeWidth="2.2" markerEnd="url(#c12t)" />
          <text x="300" y="64" fill={C.txt} fontSize="11.5" fontWeight="bold">g⃗</text>
          {/* équations */}
          <text x="0" y="290" fill={C.txt} fontSize="10.5">a⃗ = g⃗ : aₓ = 0 (MRU) · a_y = −g (MRUA)</text>
          <text x="0" y="306" fill={C.txt} fontSize="10.5">y(x) = −g·x²/(2v₀²cos²α) + x·tanα + h</text>
        </g>

        {/* ── Droite : condensateur plan ── */}
        <g transform="translate(440, 40)">
          <text x="140" y="-10" fill={C.rose} fontSize="12.5" fontWeight="bold" textAnchor="middle">Champ électrique E⃗ : analogie</text>
          {/* plaques */}
          <rect x="0" y="40" width="280" height="8" fill="rgba(238,127,157,0.35)" stroke={C.rose} strokeWidth="1" />
          <rect x="0" y="200" width="280" height="8" fill="rgba(79,209,197,0.35)" stroke={C.teal} strokeWidth="1" />
          <text x="290" y="50" fill={C.rose} fontSize="12" fontWeight="bold">＋</text>
          <text x="290" y="210" fill={C.teal} fontSize="12" fontWeight="bold">−</text>
          {/* champ E */}
          {[60, 130, 200].map(x => (
            <line key={x} x1={x} y1="56" x2={x} y2="192" stroke={C.mut} strokeWidth="1.2" markerEnd="url(#c12t)" opacity="0.6" />
          ))}
          <text x="208" y="128" fill={C.txt} fontSize="11.5" fontWeight="bold">E⃗ = U/d</text>
          {/* électron dévié */}
          <line x1="0" y1="124" x2="50" y2="124" stroke={C.gold} strokeWidth="2.2" markerEnd="url(#c12g)" />
          <text x="10" y="112" fill={C.gold} fontSize="10.5">v⃗₀ (e⁻)</text>
          <path d="M0,124 Q140,124 270,62" stroke={C.gold} strokeWidth="2.5" fill="none" />
          <circle cx="270" cy="62" r="4" fill={C.gold} />
          <text x="150" y="92" fill={C.gold} fontSize="10">déviation parabolique</text>
          {/* d */}
          <path d="M14,56 V192" stroke={C.green} strokeWidth="1" strokeDasharray="3,3" />
          <text x="22" y="170" fill={C.green} fontSize="10.5">d</text>
          {/* équations */}
          <text x="0" y="250" fill={C.txt} fontSize="10.5">F⃗ = q·E⃗ → a = qE/m = qU/(m·d)</text>
          <text x="0" y="266" fill={C.txt} fontSize="10.5">e⁻ (q &lt; 0) : F⃗ opposée à E⃗</text>
          <text x="0" y="290" fill={C.mut} fontSize="10">Même maths que la chute libre :</text>
          <text x="0" y="306" fill={C.mut} fontSize="10">remplacer g par qE/m</text>
        </g>

        <text x="380" y="388" fill={C.mut} fontSize="10.5" textAnchor="middle">
          Mouvement = MRU (⊥ au champ) + MRUA (∥ au champ) → trajectoire parabolique · ΔEc = W = qU
        </text>
      </svg>
    </div>
  );
}