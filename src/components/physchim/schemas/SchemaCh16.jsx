import React from 'react';

// Transferts thermiques : mur + flux + résistance thermique ↔ analogie électrique
const C = { teal: '#4fd1c5', rose: '#ee7f9d', gold: '#e8b44a', green: '#34d399', txt: '#cbd5e1', mut: '#64748b' };

export default function SchemaCh16() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(79,209,197,0.15)' }}>
      <svg viewBox="0 0 760 420" className="w-full h-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <defs>
          <marker id="c16g" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill={C.gold} /></marker>
          <marker id="c16d" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 z" fill={C.mut} /></marker>
        </defs>

        {/* ── Gauche : conduction à travers un mur ── */}
        <g transform="translate(50, 45)">
          <text x="150" y="-14" fill={C.rose} fontSize="12.5" fontWeight="bold" textAnchor="middle">Conduction à travers une paroi</text>
          {/* côté chaud */}
          <rect x="0" y="10" width="100" height="190" rx="6" fill="rgba(238,127,157,0.12)" stroke={C.rose} strokeWidth="1" />
          <text x="50" y="40" fill={C.rose} fontSize="12" fontWeight="bold" textAnchor="middle">T₁ (chaud)</text>
          <text x="50" y="58" fill={C.mut} fontSize="9.5" textAnchor="middle">intérieur</text>
          {/* mur */}
          <rect x="100" y="0" width="80" height="210" fill="rgba(232,180,74,0.14)" stroke={C.gold} strokeWidth="1.5" />
          <text x="140" y="105" fill={C.gold} fontSize="11" fontWeight="bold" textAnchor="middle">paroi</text>
          <text x="140" y="122" fill={C.gold} fontSize="10" textAnchor="middle">λ, S</text>
          {/* côté froid */}
          <rect x="180" y="10" width="100" height="190" rx="6" fill="rgba(79,209,197,0.1)" stroke={C.teal} strokeWidth="1" />
          <text x="230" y="40" fill={C.teal} fontSize="12" fontWeight="bold" textAnchor="middle">T₂ (froid)</text>
          <text x="230" y="58" fill={C.mut} fontSize="9.5" textAnchor="middle">extérieur</text>
          {/* flux */}
          {[90, 130, 170].map(y => (
            <line key={y} x1="60" y1={y} x2="225" y2={y} stroke={C.gold} strokeWidth="2.4" markerEnd="url(#c16g)" opacity="0.85" />
          ))}
          <text x="140" y="196" fill={C.gold} fontSize="11.5" fontWeight="bold" textAnchor="middle">φ (W)</text>
          {/* épaisseur e */}
          <path d="M100,228 H180" stroke={C.mut} strokeWidth="1" markerEnd="url(#c16d)" markerStart="url(#c16d)" />
          <text x="140" y="246" fill={C.mut} fontSize="10.5" textAnchor="middle">e</text>
          {/* formules */}
          <text x="140" y="282" fill={C.txt} fontSize="11" textAnchor="middle">φ = (T₁ − T₂) / R_th</text>
          <text x="140" y="302" fill={C.teal} fontSize="11" fontWeight="bold" textAnchor="middle">R_th = e / (λ·S)   (K·W⁻¹)</text>
          <text x="140" y="322" fill={C.mut} fontSize="9.5" textAnchor="middle">isoler = augmenter e ou diminuer λ</text>
        </g>

        {/* ── Flèche analogie ── */}
        <g transform="translate(370, 130)">
          <text x="0" y="0" fill={C.green} fontSize="22" fontWeight="bold">⇄</text>
          <text x="11" y="22" fill={C.green} fontSize="9.5" textAnchor="middle">analogie</text>
        </g>

        {/* ── Droite : circuit électrique équivalent ── */}
        <g transform="translate(440, 45)">
          <text x="140" y="-14" fill={C.teal} fontSize="12.5" fontWeight="bold" textAnchor="middle">Analogie électrique (loi d'Ohm)</text>
          {/* circuit */}
          <path d="M20,40 H110 M170,40 H260 M260,40 V150 H20 V40" stroke={C.txt} strokeWidth="2" fill="none" />
          {/* résistance */}
          <rect x="110" y="28" width="60" height="24" rx="3" fill="none" stroke={C.gold} strokeWidth="2" />
          <text x="140" y="44" fill={C.gold} fontSize="11" fontWeight="bold" textAnchor="middle">R</text>
          {/* potentiels */}
          <circle cx="60" cy="40" r="4" fill={C.rose} />
          <text x="60" y="24" fill={C.rose} fontSize="11" fontWeight="bold" textAnchor="middle">V₁</text>
          <circle cx="220" cy="40" r="4" fill={C.teal} />
          <text x="220" y="24" fill={C.teal} fontSize="11" fontWeight="bold" textAnchor="middle">V₂</text>
          {/* courant */}
          <line x1="80" y1="62" x2="105" y2="62" stroke={C.gold} strokeWidth="1.8" markerEnd="url(#c16g)" />
          <text x="86" y="80" fill={C.gold} fontSize="10.5">I = U/R</text>
          {/* tableau de correspondance */}
          <g fontSize="10.5">
            <rect x="0" y="106" width="280" height="118" rx="8" fill="rgba(255,255,255,0.025)" stroke="rgba(79,209,197,0.18)" strokeWidth="1" />
            <text x="70" y="128" fill={C.mut} fontWeight="bold" textAnchor="middle">ÉLECTRIQUE</text>
            <text x="208" y="128" fill={C.mut} fontWeight="bold" textAnchor="middle">THERMIQUE</text>
            <line x1="140" y1="112" x2="140" y2="218" stroke="rgba(79,209,197,0.18)" strokeWidth="1" />
            <text x="70" y="150" fill={C.txt} textAnchor="middle">U = V₁ − V₂ (V)</text>
            <text x="208" y="150" fill={C.txt} textAnchor="middle">ΔT = T₁ − T₂ (K)</text>
            <text x="70" y="172" fill={C.txt} textAnchor="middle">I (A)</text>
            <text x="208" y="172" fill={C.txt} textAnchor="middle">φ (W)</text>
            <text x="70" y="194" fill={C.txt} textAnchor="middle">R (Ω)</text>
            <text x="208" y="194" fill={C.txt} textAnchor="middle">R_th (K·W⁻¹)</text>
            <text x="70" y="214" fill={C.gold} fontWeight="bold" textAnchor="middle">U = R·I</text>
            <text x="208" y="214" fill={C.gold} fontWeight="bold" textAnchor="middle">ΔT = R_th·φ</text>
          </g>
          {/* série */}
          <text x="140" y="252" fill={C.mut} fontSize="10" textAnchor="middle">Parois en série : R_th = R_th1 + R_th2 + ...</text>
        </g>

        {/* ── Bandeau bas : 3 modes ── */}
        <g transform="translate(60, 360)" fontSize="10.5">
          <rect x="0" y="0" width="200" height="40" rx="8" fill="rgba(232,180,74,0.08)" stroke={C.gold} strokeWidth="1" />
          <text x="100" y="17" fill={C.gold} fontWeight="bold" textAnchor="middle">CONDUCTION (solide)</text>
          <text x="100" y="32" fill={C.mut} fontSize="9.5" textAnchor="middle">φ = (T₁−T₂)/R_th</text>
          <rect x="220" y="0" width="200" height="40" rx="8" fill="rgba(238,127,157,0.08)" stroke={C.rose} strokeWidth="1" />
          <text x="320" y="17" fill={C.rose} fontWeight="bold" textAnchor="middle">CONVECTION (fluide)</text>
          <text x="320" y="32" fill={C.mut} fontSize="9.5" textAnchor="middle">φ = h·S·(T_ext − T) (loi de Newton)</text>
          <rect x="440" y="0" width="200" height="40" rx="8" fill="rgba(79,209,197,0.08)" stroke={C.teal} strokeWidth="1" />
          <text x="540" y="17" fill={C.teal} fontWeight="bold" textAnchor="middle">RAYONNEMENT (photons)</text>
          <text x="540" y="32" fill={C.mut} fontSize="9.5" textAnchor="middle">sans support matériel</text>
        </g>
      </svg>
    </div>
  );
}