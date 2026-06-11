import React from 'react';

// Force des acides/bases : diagramme de prédominance + courbes de distribution
const C = { teal: '#4fd1c5', rose: '#ee7f9d', gold: '#e8b44a', green: '#34d399', txt: '#cbd5e1', mut: '#64748b' };

export default function SchemaCh4() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(79,209,197,0.15)' }}>
      <svg viewBox="0 0 760 360" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <text x="380" y="26" fill={C.teal} fontSize="13" fontWeight="bold" textAnchor="middle">Diagramme de prédominance du couple AH / A⁻</text>

        {/* ── Axe de prédominance ── */}
        <g transform="translate(80, 50)">
          {/* zones */}
          <rect x="0" y="0" width="300" height="44" rx="8" fill="rgba(238,127,157,0.1)" stroke={C.rose} strokeWidth="1.2" />
          <rect x="300" y="0" width="300" height="44" rx="8" fill="rgba(79,209,197,0.1)" stroke={C.teal} strokeWidth="1.2" />
          <text x="150" y="20" fill={C.rose} fontSize="12.5" fontWeight="bold" textAnchor="middle">AH prédomine</text>
          <text x="150" y="36" fill={C.mut} fontSize="10" textAnchor="middle">[AH] &gt; [A⁻]</text>
          <text x="450" y="20" fill={C.teal} fontSize="12.5" fontWeight="bold" textAnchor="middle">A⁻ prédomine</text>
          <text x="450" y="36" fill={C.mut} fontSize="10" textAnchor="middle">[A⁻] &gt; [AH]</text>
          {/* axe */}
          <line x1="-20" y1="62" x2="630" y2="62" stroke={C.txt} strokeWidth="1.5" />
          <path d="M630,62 l-8,-4 v8 z" fill={C.txt} />
          <text x="640" y="66" fill={C.txt} fontSize="11">pH</text>
          {/* pKa */}
          <line x1="300" y1="-6" x2="300" y2="70" stroke={C.gold} strokeWidth="2" strokeDasharray="5,3" />
          <text x="300" y="86" fill={C.gold} fontSize="12" fontWeight="bold" textAnchor="middle">pKA</text>
          <text x="300" y="100" fill={C.gold} fontSize="10" textAnchor="middle">[AH] = [A⁻]</text>
        </g>

        {/* ── Courbes de distribution % ── */}
        <g transform="translate(80, 185)">
          <text x="300" y="-10" fill={C.rose} fontSize="12" fontWeight="bold" textAnchor="middle">Pourcentages des espèces en fonction du pH</text>
          <line x1="0" y1="120" x2="600" y2="120" stroke={C.mut} strokeWidth="1.5" />
          <line x1="0" y1="120" x2="0" y2="0" stroke={C.mut} strokeWidth="1.5" />
          <text x="-12" y="8" fill={C.mut} fontSize="10">%</text>
          <text x="-30" y="14" fill={C.mut} fontSize="10">100</text>
          <text x="-24" y="68" fill={C.mut} fontSize="10">50</text>
          <text x="-18" y="124" fill={C.mut} fontSize="10">0</text>
          <line x1="0" y1="10" x2="600" y2="10" stroke={C.mut} strokeWidth="0.8" strokeDasharray="2,4" />
          <line x1="0" y1="65" x2="600" y2="65" stroke={C.mut} strokeWidth="0.8" strokeDasharray="2,4" />
          {/* % AH : sigmoïde décroissante */}
          <path d="M0,11 C150,12 240,18 300,65 C360,112 450,118 600,119" stroke={C.rose} strokeWidth="2.5" fill="none" />
          {/* % A- : sigmoïde croissante */}
          <path d="M0,119 C150,118 240,112 300,65 C360,18 450,12 600,11" stroke={C.teal} strokeWidth="2.5" fill="none" />
          {/* croisement à pKa */}
          <circle cx="300" cy="65" r="4.5" fill={C.gold} />
          <line x1="300" y1="65" x2="300" y2="120" stroke={C.gold} strokeWidth="1.2" strokeDasharray="4,3" />
          <text x="300" y="138" fill={C.gold} fontSize="11.5" fontWeight="bold" textAnchor="middle">pH = pKA → 50 % / 50 %</text>
          <text x="80" y="30" fill={C.rose} fontSize="11" fontWeight="bold">% AH</text>
          <text x="490" y="30" fill={C.teal} fontSize="11" fontWeight="bold">% A⁻</text>
          <text x="606" y="124" fill={C.mut} fontSize="10">pH</text>
        </g>

        <text x="380" y="348" fill={C.mut} fontSize="10.5" textAnchor="middle">
          Henderson-Hasselbalch : pH = pKA + log([A⁻]/[AH])  ·  Plus pKA est FAIBLE, plus l'acide est FORT
        </text>
      </svg>
    </div>
  );
}