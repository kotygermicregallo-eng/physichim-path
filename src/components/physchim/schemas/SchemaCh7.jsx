import React from 'react';

// Mécanisme réactionnel : profil énergétique avec intermédiaires + effet du catalyseur
const C = { teal: '#4fd1c5', rose: '#ee7f9d', gold: '#e8b44a', green: '#34d399', txt: '#cbd5e1', mut: '#64748b' };

export default function SchemaCh7() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(79,209,197,0.15)' }}>
      <svg viewBox="0 0 760 380" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <text x="380" y="26" fill={C.teal} fontSize="13" fontWeight="bold" textAnchor="middle">Profil énergétique d'un mécanisme réactionnel (2 actes élémentaires)</text>

        <g transform="translate(70, 50)">
          {/* axes */}
          <line x1="0" y1="270" x2="630" y2="270" stroke={C.mut} strokeWidth="1.5" />
          <line x1="0" y1="270" x2="0" y2="10" stroke={C.mut} strokeWidth="1.5" />
          <text x="600" y="288" fill={C.mut} fontSize="10.5">coordonnée réactionnelle</text>
          <text x="-14" y="14" fill={C.mut} fontSize="10.5">Ep</text>

          {/* Profil SANS catalyseur : 2 bosses, vallée IR */}
          <path d="M20,190 C80,188 110,60 165,58 C215,58 230,150 290,150 C345,150 365,40 425,38 C480,38 520,225 610,228"
            stroke={C.rose} strokeWidth="2.5" fill="none" />
          {/* Profil AVEC catalyseur (pointillés, bosses plus basses) */}
          <path d="M20,190 C80,188 105,115 165,113 C220,113 235,165 290,164 C345,163 365,98 425,96 C480,96 520,225 610,228"
            stroke={C.green} strokeWidth="2" strokeDasharray="6,4" fill="none" />

          {/* niveaux */}
          <line x1="0" y1="190" x2="36" y2="190" stroke={C.txt} strokeWidth="2" />
          <text x="20" y="208" fill={C.txt} fontSize="11" fontWeight="bold" textAnchor="middle">Réactifs</text>
          <line x1="585" y1="228" x2="625" y2="228" stroke={C.txt} strokeWidth="2" />
          <text x="600" y="248" fill={C.txt} fontSize="11" fontWeight="bold" textAnchor="middle">Produits</text>

          {/* IR : vallée */}
          <circle cx="290" cy="150" r="4.5" fill={C.gold} />
          <text x="290" y="135" fill={C.gold} fontSize="11" fontWeight="bold" textAnchor="middle">Intermédiaire réactionnel</text>
          <text x="290" y="190" fill={C.mut} fontSize="9.5" textAnchor="middle">(formé puis consommé :</text>
          <text x="290" y="202" fill={C.mut} fontSize="9.5" textAnchor="middle">absent du bilan)</text>

          {/* États de transition */}
          <text x="165" y="44" fill={C.rose} fontSize="10" textAnchor="middle">Acte élémentaire 1</text>
          <text x="425" y="24" fill={C.rose} fontSize="10" textAnchor="middle">Acte élémentaire 2</text>

          {/* Ea1 */}
          <line x1="80" y1="190" x2="80" y2="58" stroke={C.rose} strokeWidth="1" strokeDasharray="3,3" />
          <path d="M80,124 l-4,7 h8 z" fill={C.rose} />
          <text x="66" y="120" fill={C.rose} fontSize="10.5" fontWeight="bold" textAnchor="end">Ea1</text>

          {/* Ea catalysée */}
          <line x1="125" y1="190" x2="125" y2="113" stroke={C.green} strokeWidth="1" strokeDasharray="3,3" />
          <text x="135" y="150" fill={C.green} fontSize="10.5" fontWeight="bold">Ea1' &lt; Ea1</text>

          {/* légende */}
          <line x1="380" y1="245" x2="420" y2="245" stroke={C.rose} strokeWidth="2.5" />
          <text x="428" y="249" fill={C.rose} fontSize="10">sans catalyseur</text>
          <line x1="380" y1="262" x2="420" y2="262" stroke={C.green} strokeWidth="2" strokeDasharray="6,4" />
          <text x="428" y="266" fill={C.green} fontSize="10">avec catalyseur (chemin plus bas, plus rapide)</text>
        </g>

        <text x="380" y="368" fill={C.mut} fontSize="10.5" textAnchor="middle">
          Catalyseur : consommé à l'AE1, restitué à l'AE2 → absent du bilan · Somme des AE = équation bilan (IR s'éliminent)
        </text>
      </svg>
    </div>
  );
}