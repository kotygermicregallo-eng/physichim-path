import React from 'react';

// Circuit RC complet : schéma électrique + courbes charge/décharge + formules (fusion schéma Bac + bilan)
const C = { teal: '#4fd1c5', rose: '#ee7f9d', gold: '#e8b44a', green: '#34d399', txt: '#cbd5e1', mut: '#64748b', grid: 'rgba(79,209,197,0.08)' };

export default function BacRC() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(79,209,197,0.15)' }}>
      <svg viewBox="0 0 760 560" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <defs>
          <marker id="rcArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill={C.gold} />
          </marker>
          <marker id="rcArrT" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 z" fill={C.teal} />
          </marker>
        </defs>

        {/* ───── Circuit (haut gauche) ───── */}
        <text x="190" y="26" fill={C.teal} fontSize="13" fontWeight="bold" textAnchor="middle">Circuit RC (charge)</text>
        {/* Fils */}
        <path d="M60,60 H160 M220,60 H340 M340,60 V150 M340,205 V250 M340,250 H60 M60,250 V60" stroke={C.txt} strokeWidth="2" fill="none" />
        {/* Générateur E */}
        <line x1="45" y1="140" x2="75" y2="140" stroke={C.txt} strokeWidth="3" />
        <line x1="52" y1="162" x2="68" y2="162" stroke={C.txt} strokeWidth="2" />
        <path d="M60,60 V140 M60,162 V250" stroke={C.txt} strokeWidth="2" fill="none" />
        <rect x="58" y="140" width="4" height="22" fill="rgba(0,0,0,0)" />
        <text x="30" y="155" fill={C.gold} fontSize="13" fontWeight="bold">E</text>
        <text x="84" y="140" fill={C.mut} fontSize="10">+</text>
        <text x="84" y="170" fill={C.mut} fontSize="10">−</text>
        {/* Interrupteur K */}
        <circle cx="160" cy="60" r="3" fill={C.txt} />
        <circle cx="220" cy="60" r="3" fill={C.txt} />
        <line x1="160" y1="60" x2="212" y2="38" stroke={C.txt} strokeWidth="2" />
        <text x="186" y="28" fill={C.rose} fontSize="12" fontWeight="bold">K (t = 0)</text>
        {/* Résistance R */}
        <rect x="260" y="48" width="60" height="24" fill="none" stroke={C.rose} strokeWidth="2" rx="3" />
        <text x="290" y="64" fill={C.rose} fontSize="12" fontWeight="bold" textAnchor="middle">R</text>
        {/* uR */}
        <path d="M320,90 H260" stroke={C.rose} strokeWidth="1.5" markerEnd="url(#rcArr)" fill="none" />
        <text x="290" y="106" fill={C.rose} fontSize="11" textAnchor="middle">u_R = R·i</text>
        {/* Condensateur C */}
        <line x1="320" y1="150" x2="360" y2="150" stroke={C.teal} strokeWidth="3" />
        <line x1="320" y1="166" x2="360" y2="166" stroke={C.teal} strokeWidth="3" />
        <text x="372" y="162" fill={C.teal} fontSize="13" fontWeight="bold">C</text>
        {/* uC flèche */}
        <path d="M392,196 V126" stroke={C.teal} strokeWidth="1.5" markerEnd="url(#rcArrT)" fill="none" />
        <text x="402" y="164" fill={C.teal} fontSize="11">u_C</text>
        {/* courant i */}
        <path d="M120,52 H145" stroke={C.gold} strokeWidth="1.5" markerEnd="url(#rcArr)" />
        <text x="125" y="44" fill={C.gold} fontSize="11">i(t)</text>
        <text x="340" y="160" fill="none" fontSize="1">.</text>
        <path d="M340,150 V166" stroke="none" />
        <path d="M340,60 V150 M340,166 V250" stroke={C.txt} strokeWidth="2" fill="none" />

        {/* ───── Lois (haut droite) ───── */}
        <g fontSize="11.5">
          <text x="470" y="56" fill={C.gold} fontWeight="bold" fontSize="12">Mise en équation (loi des mailles) :</text>
          <text x="470" y="80" fill={C.txt}>E = u_R + u_C = R·i + u_C</text>
          <text x="470" y="102" fill={C.txt}>i = C·du_C/dt   et   q = C·u_C</text>
          <text x="470" y="128" fill={C.teal} fontWeight="bold">⇒  RC·du_C/dt + u_C = E</text>
          <text x="470" y="156" fill={C.rose} fontWeight="bold">τ = RC   (constante de temps, en s)</text>
          <text x="470" y="184" fill={C.txt}>Charge   : u_C(t) = E(1 − e^(−t/τ))</text>
          <text x="470" y="204" fill={C.txt}>Décharge : u_C(t) = E·e^(−t/τ)</text>
          <text x="470" y="230" fill={C.mut} fontSize="10.5">t = 0 : C déchargé ⇔ court-circuit (i = E/R)</text>
          <text x="470" y="246" fill={C.mut} fontSize="10.5">t ≥ 5τ : régime permanent ⇔ interrupteur ouvert (i = 0)</text>
        </g>

        {/* ───── Courbe de charge (bas gauche) ───── */}
        <g transform="translate(50, 300)">
          <text x="140" y="-4" fill={C.green} fontSize="12" fontWeight="bold" textAnchor="middle">Charge : u_C(t) = E(1 − e^(−t/τ))</text>
          {/* axes */}
          <line x1="0" y1="180" x2="300" y2="180" stroke={C.mut} strokeWidth="1.5" />
          <line x1="0" y1="180" x2="0" y2="10" stroke={C.mut} strokeWidth="1.5" />
          <text x="295" y="198" fill={C.mut} fontSize="10">t</text>
          <text x="-14" y="16" fill={C.mut} fontSize="10">u_C</text>
          {/* asymptote E */}
          <line x1="0" y1="30" x2="300" y2="30" stroke={C.gold} strokeWidth="1" strokeDasharray="5,4" />
          <text x="306" y="34" fill={C.gold} fontSize="11" fontWeight="bold">E</text>
          {/* courbe exp */}
          <path d="M0,180 C30,60 70,38 140,31.5 C200,30.3 260,30 300,30" stroke={C.green} strokeWidth="2.5" fill="none" />
          {/* tangente à l'origine */}
          <line x1="0" y1="180" x2="75" y2="30" stroke={C.rose} strokeWidth="1.5" strokeDasharray="4,3" />
          <text x="80" y="20" fill={C.rose} fontSize="10">tangente à l'origine</text>
          {/* τ */}
          <line x1="75" y1="30" x2="75" y2="180" stroke={C.rose} strokeWidth="1" strokeDasharray="3,3" />
          <text x="75" y="196" fill={C.rose} fontSize="11" fontWeight="bold" textAnchor="middle">τ</text>
          {/* 0,63E */}
          <line x1="0" y1="85" x2="75" y2="85" stroke={C.teal} strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="75" cy="85" r="3.5" fill={C.teal} />
          <text x="-8" y="89" fill={C.teal} fontSize="10" textAnchor="end">0,63E</text>
          {/* 5τ */}
          <line x1="240" y1="30" x2="240" y2="180" stroke={C.mut} strokeWidth="1" strokeDasharray="2,4" />
          <text x="240" y="196" fill={C.mut} fontSize="10" textAnchor="middle">5τ</text>
        </g>

        {/* ───── Courbe de décharge (bas droite) ───── */}
        <g transform="translate(420, 300)">
          <text x="140" y="-4" fill={C.rose} fontSize="12" fontWeight="bold" textAnchor="middle">Décharge : u_C(t) = E·e^(−t/τ)</text>
          <line x1="0" y1="180" x2="300" y2="180" stroke={C.mut} strokeWidth="1.5" />
          <line x1="0" y1="180" x2="0" y2="10" stroke={C.mut} strokeWidth="1.5" />
          <text x="295" y="198" fill={C.mut} fontSize="10">t</text>
          <text x="-14" y="16" fill={C.mut} fontSize="10">u_C</text>
          <line x1="0" y1="30" x2="12" y2="30" stroke={C.gold} strokeWidth="1.5" />
          <text x="-8" y="34" fill={C.gold} fontSize="11" fontWeight="bold" textAnchor="end">E</text>
          {/* courbe exp décroissante */}
          <path d="M0,30 C30,150 70,170 140,177 C200,179 260,180 300,180" stroke={C.rose} strokeWidth="2.5" fill="none" />
          {/* tangente origine */}
          <line x1="0" y1="30" x2="75" y2="180" stroke={C.teal} strokeWidth="1.5" strokeDasharray="4,3" />
          {/* τ */}
          <line x1="75" y1="180" x2="75" y2="124" stroke={C.teal} strokeWidth="1" strokeDasharray="3,3" />
          <text x="75" y="196" fill={C.teal} fontSize="11" fontWeight="bold" textAnchor="middle">τ</text>
          <circle cx="75" cy="124" r="3.5" fill={C.teal} />
          <line x1="0" y1="124" x2="75" y2="124" stroke={C.teal} strokeWidth="1" strokeDasharray="3,3" />
          <text x="-8" y="128" fill={C.teal} fontSize="10" textAnchor="end">0,37E</text>
        </g>

        {/* Légende */}
        <text x="380" y="540" fill={C.mut} fontSize="10.5" textAnchor="middle">
          Lecture graphique de τ : la tangente à l'origine coupe l'asymptote en t = τ · À t = τ : 63 % (charge) / 37 % (décharge)
        </text>
      </svg>
    </div>
  );
}