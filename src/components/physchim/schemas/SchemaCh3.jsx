import React from 'react';

// Réactions acido-basiques : transfert de proton + échelle de pH
const C = { teal: '#4fd1c5', rose: '#ee7f9d', gold: '#e8b44a', green: '#34d399', txt: '#cbd5e1', mut: '#64748b' };

export default function SchemaCh3() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(79,209,197,0.15)' }}>
      <svg viewBox="0 0 760 330" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <defs>
          <linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="35%" stopColor="#e8b44a" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="70%" stopColor="#4fd1c5" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <marker id="ch3Arr" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto">
            <path d="M0,0 L8,3.5 L0,7 z" fill={C.gold} />
          </marker>
        </defs>

        {/* ── Transfert de proton ── */}
        <text x="380" y="30" fill={C.teal} fontSize="13" fontWeight="bold" textAnchor="middle">Réaction acido-basique = transfert de proton H⁺</text>

        {/* Acide 1 */}
        <rect x="60" y="60" width="150" height="58" rx="10" fill="rgba(238,127,157,0.08)" stroke={C.rose} strokeWidth="1.5" />
        <text x="135" y="84" fill={C.rose} fontSize="13" fontWeight="bold" textAnchor="middle">A₁H</text>
        <text x="135" y="104" fill={C.mut} fontSize="10" textAnchor="middle">acide du couple 1 (donneur)</text>

        {/* Base 2 */}
        <rect x="550" y="60" width="150" height="58" rx="10" fill="rgba(79,209,197,0.08)" stroke={C.teal} strokeWidth="1.5" />
        <text x="625" y="84" fill={C.teal} fontSize="13" fontWeight="bold" textAnchor="middle">A₂⁻</text>
        <text x="625" y="104" fill={C.mut} fontSize="10" textAnchor="middle">base du couple 2 (accepteur)</text>

        {/* Flèche H+ */}
        <path d="M218,89 C320,40 440,40 542,89" stroke={C.gold} strokeWidth="2" fill="none" markerEnd="url(#ch3Arr)" />
        <circle cx="380" cy="52" r="14" fill="rgba(232,180,74,0.15)" stroke={C.gold} strokeWidth="1.5" />
        <text x="380" y="57" fill={C.gold} fontSize="12" fontWeight="bold" textAnchor="middle">H⁺</text>

        {/* Produits */}
        <text x="135" y="148" fill={C.txt} fontSize="11" textAnchor="middle">→ devient A₁⁻ (base conj. 1)</text>
        <text x="625" y="148" fill={C.txt} fontSize="11" textAnchor="middle">→ devient A₂H (acide conj. 2)</text>
        <text x="380" y="148" fill={C.txt} fontSize="11.5" fontWeight="bold" textAnchor="middle">A₁H + A₂⁻ ⇌ A₁⁻ + A₂H</text>

        {/* ── Échelle de pH ── */}
        <text x="380" y="200" fill={C.gold} fontSize="12.5" fontWeight="bold" textAnchor="middle">Échelle de pH à 25 °C — pH = −log([H₃O⁺]/C₀)</text>
        <rect x="80" y="216" width="600" height="22" rx="6" fill="url(#phGrad)" opacity="0.85" />
        {/* graduations */}
        {[0, 2, 4, 6, 7, 8, 10, 12, 14].map(v => (
          <g key={v}>
            <line x1={80 + v * (600 / 14)} y1="238" x2={80 + v * (600 / 14)} y2="246" stroke={C.mut} strokeWidth="1" />
            <text x={80 + v * (600 / 14)} y="260" fill={v === 7 ? C.green : C.mut} fontSize="10.5" fontWeight={v === 7 ? 'bold' : 'normal'} textAnchor="middle">{v}</text>
          </g>
        ))}
        <line x1={80 + 7 * (600 / 14)} y1="212" x2={80 + 7 * (600 / 14)} y2="242" stroke={C.green} strokeWidth="2" />
        {/* zones */}
        <text x="190" y="285" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">ACIDE : [H₃O⁺] &gt; [HO⁻]</text>
        <text x="380" y="285" fill={C.green} fontSize="11" fontWeight="bold" textAnchor="middle">NEUTRE</text>
        <text x="572" y="285" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">BASIQUE : [H₃O⁺] &lt; [HO⁻]</text>

        <text x="380" y="315" fill={C.mut} fontSize="10.5" textAnchor="middle">
          H₂O amphotère : acide du couple H₂O/HO⁻ et base du couple H₃O⁺/H₂O  ·  [H₃O⁺] = C₀·10^(−pH)
        </text>
      </svg>
    </div>
  );
}