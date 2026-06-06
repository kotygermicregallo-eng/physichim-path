import React from 'react';
import Math from '../Math';

const F = ({ e }) => <Math expr={e} />;

// ─── Schéma Bilan Ch.9 : Évolution forcée — Électrolyse ──────────────────────
export default function SchemaCh9() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Électrolyse ════════════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚡ ÉLECTROLYSE</span>
        </div>
        <div className="p-4 space-y-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Schéma montage électrolyse */}
            <div>
              <div className="text-xs font-bold mb-2" style={{ color: '#38bdf8' }}>Montage — transformations forcées par le courant</div>
              <svg viewBox="0 0 260 200" className="w-full" style={{ maxHeight: 200 }}>
                <defs>
                  <marker id="aElec9" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#38bdf8" />
                  </marker>
                  <marker id="aIon9p" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#f87171" />
                  </marker>
                  <marker id="aIon9m" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#38bdf8" />
                  </marker>
                </defs>

                {/* Générateur */}
                <circle cx="130" cy="28" r="22" fill="rgba(200,144,47,0.15)" stroke="#c8902f" strokeWidth="2" />
                <text x="118" y="25" fontSize="11" fill="#c8902f" fontFamily="JetBrains Mono" fontWeight="700">+</text>
                <text x="137" y="25" fontSize="11" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">−</text>
                <text x="130" y="38" fontSize="8" fill="#e2e8f0" fontFamily="Inter" textAnchor="middle">Géné.</text>

                {/* Fils */}
                <line x1="108" y1="28" x2="60" y2="28" stroke="#e2e8f0" strokeWidth="2" />
                <line x1="60" y1="28" x2="60" y2="80" stroke="#e2e8f0" strokeWidth="2" />
                <line x1="152" y1="28" x2="200" y2="28" stroke="#e2e8f0" strokeWidth="2" />
                <line x1="200" y1="28" x2="200" y2="80" stroke="#e2e8f0" strokeWidth="2" />

                {/* Flèche courant I */}
                <line x1="108" y1="22" x2="85" y2="22" stroke="#c8902f" strokeWidth="1.5" markerEnd="url(#aIon9p)" />
                <text x="92" y="18" fontSize="9" fill="#c8902f" fontFamily="JetBrains Mono">I</text>

                {/* Flèches e⁻ */}
                <line x1="75" y1="35" x2="55" y2="35" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#aElec9)" />
                <text x="58" y="46" fontSize="8.5" fill="#38bdf8" fontFamily="JetBrains Mono">e⁻</text>
                <line x1="185" y1="35" x2="205" y2="35" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#aElec9)" />
                <text x="188" y="46" fontSize="8.5" fill="#38bdf8" fontFamily="JetBrains Mono">e⁻</text>

                {/* Cuve électrolytique */}
                <path d="M40,80 L30,180 L230,180 L220,80 Z" fill="rgba(56,189,248,0.08)" stroke="#38bdf8" strokeWidth="1.5" />
                {/* Électrolyte (liquide) */}
                <path d="M42,120 L34,180 L226,180 L218,120 Z" fill="rgba(56,189,248,0.15)" />
                <text x="130" y="170" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="Inter" fontWeight="600">Électrolyte</text>

                {/* Électrode gauche (Anode +) */}
                <rect x="52" y="75" width="18" height="90" rx="4" fill="rgba(248,113,113,0.4)" stroke="#f87171" strokeWidth="1.5" />
                <text x="32" y="185" fontSize="8.5" fill="#f87171" fontFamily="Inter" fontWeight="600">OxydAtion</text>
                <text x="32" y="195" fontSize="8.5" fill="#f87171" fontFamily="Inter" fontWeight="600">à l'Anode</text>

                {/* Électrode droite (Cathode −) */}
                <rect x="190" y="75" width="18" height="90" rx="4" fill="rgba(52,211,153,0.4)" stroke="#34d399" strokeWidth="1.5" />
                <text x="195" y="185" fontSize="8.5" fill="#34d399" fontFamily="Inter" fontWeight="600">RéduCtion</text>
                <text x="195" y="195" fontSize="8.5" fill="#34d399" fontFamily="Inter" fontWeight="600">à la Cathode</text>

                {/* Ions dans solution */}
                <line x1="155" y1="148" x2="105" y2="148" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#aIon9m)" />
                <text x="120" y="144" fontSize="8" fill="#38bdf8" fontFamily="Inter">Ions −</text>
                <line x1="105" y1="160" x2="155" y2="160" stroke="#f87171" strokeWidth="1.5" markerEnd="url(#aIon9p)" />
                <text x="118" y="172" fontSize="8" fill="#f87171" fontFamily="Inter">Ions +</text>
              </svg>
              <div className="text-xs mt-2" style={{ color: '#64748b' }}>
                Générateur électrique continu → impose le sens de déplacement des électrons e⁻
              </div>
            </div>

            {/* Bilan quantitatif */}
            <div className="space-y-3">
              <div className="text-xs font-bold" style={{ color: '#94a3b8' }}>Évolution forcée dans le sens contraire de l'évolution spontanée</div>

              {/* Axe Qr */}
              <svg viewBox="0 0 280 55" className="w-full" style={{ maxHeight: 55 }}>
                <defs>
                  <marker id="aQr9L" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#f472b6" />
                  </marker>
                  <marker id="aQr9ax" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#64748b" />
                  </marker>
                </defs>
                <line x1="10" y1="28" x2="265" y2="28" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aQr9ax)" />
                <text x="268" y="32" fontSize="10" fill="#94a3b8" fontFamily="JetBrains Mono">Qr</text>
                {/* Qr initial */}
                <line x1="80" y1="18" x2="80" y2="38" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,2" />
                <text x="80" y="13" fontSize="8.5" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">Qr initial</text>
                {/* K */}
                <line x1="190" y1="15" x2="190" y2="42" stroke="#34d399" strokeWidth="2.5" />
                <text x="190" y="10" fontSize="9" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">K</text>
                {/* Flèche évolution forcée */}
                <line x1="160" y1="36" x2="90" y2="36" stroke="#f472b6" strokeWidth="2" markerEnd="url(#aQr9L)" />
                <text x="112" y="50" fontSize="8" fill="#f472b6" textAnchor="middle" fontFamily="Inter">Évolution forcée (Qr s'éloigne de K)</text>
              </svg>

              {/* Bilan électrique */}
              <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(200,144,47,0.07)', border: '1px solid rgba(200,144,47,0.25)' }}>
                <div className="text-xs font-bold mb-2" style={{ color: '#c8902f' }}>Bilan électrique</div>
                <div className="text-base mb-1"><F e="Q = I \times \Delta t" /></div>
                <div className="grid grid-cols-2 gap-1 text-xs mt-1" style={{ color: '#64748b' }}>
                  <div>Q : quantité d'électricité (C)</div>
                  <div>I : intensité du courant (A)</div>
                  <div>Δt : durée (en s)</div>
                </div>
              </div>

              {/* Bilan chimique */}
              <div className="rounded-xl px-4 py-3" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.25)' }}>
                <div className="text-xs font-bold mb-2" style={{ color: '#34d399' }}>Bilan chimique</div>
                <div className="text-base mb-1"><F e="Q = z \cdot x_f \cdot F" /></div>
                <div className="grid grid-cols-2 gap-1 text-xs mt-1" style={{ color: '#64748b' }}>
                  <div>z : nb d'électrons échangés</div>
                  <div>x_f : avancement final (mol)</div>
                  <div colSpan={2}>F = 9,65 × 10⁴ C·mol⁻¹</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Stockage et conversion d'énergie ═══════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)' }}>
          <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔋 STOCKAGE ET CONVERSION D'ÉNERGIE</span>
        </div>
        <div className="p-4">
          {/* Schéma flux d'énergie — SVG */}
          <svg viewBox="0 0 480 180" className="w-full" style={{ maxHeight: 180 }}>
            <defs>
              <marker id="aE9a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#a78bfa" />
              </marker>
              <marker id="aE9b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f87171" />
              </marker>
              <marker id="aE9c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#fb923c" />
              </marker>
            </defs>

            {/* Nœud Énergie électrique (gauche) */}
            <ellipse cx="80" cy="100" rx="60" ry="32" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="2" />
            <text x="80" y="96" fontSize="10" fill="#38bdf8" textAnchor="middle" fontFamily="Inter" fontWeight="700">Énergie</text>
            <text x="80" y="110" fontSize="10" fill="#38bdf8" textAnchor="middle" fontFamily="Inter" fontWeight="700">électrique</text>

            {/* Nœud Énergie chimique (centre) */}
            <ellipse cx="240" cy="90" rx="62" ry="34" fill="rgba(52,211,153,0.15)" stroke="#34d399" strokeWidth="2" />
            <text x="240" y="86" fontSize="10" fill="#34d399" textAnchor="middle" fontFamily="Inter" fontWeight="700">Énergie</text>
            <text x="240" y="100" fontSize="10" fill="#34d399" textAnchor="middle" fontFamily="Inter" fontWeight="700">chimique</text>

            {/* Nœud Énergie solaire (droite) */}
            <ellipse cx="408" cy="100" rx="60" ry="32" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" strokeWidth="2" />
            <text x="408" y="96" fontSize="10" fill="#fbbf24" textAnchor="middle" fontFamily="Inter" fontWeight="700">Énergie</text>
            <text x="408" y="110" fontSize="10" fill="#fbbf24" textAnchor="middle" fontFamily="Inter" fontWeight="700">solaire</text>

            {/* Flèche : élec → chimique (électrolyseur / charge) */}
            <path d="M140,82 Q190,60 178,82" fill="none" stroke="#a78bfa" strokeWidth="2.5" markerEnd="url(#aE9a)" />
            <text x="155" y="62" fontSize="8.5" fill="#a78bfa" textAnchor="middle" fontFamily="Inter">Électrolyseur</text>
            <text x="155" y="72" fontSize="8.5" fill="#a78bfa" textAnchor="middle" fontFamily="Inter">ou accu. en charge</text>

            {/* Flèche : chimique → élec (pile / décharge) */}
            <path d="M178,98 Q190,118 140,118" fill="none" stroke="#f87171" strokeWidth="2.5" markerEnd="url(#aE9b)" />
            <text x="155" y="128" fontSize="8.5" fill="#f87171" textAnchor="middle" fontFamily="Inter">Pile ou accu.</text>
            <text x="155" y="138" fontSize="8.5" fill="#f87171" textAnchor="middle" fontFamily="Inter">en décharge</text>

            {/* Flèche : solaire → chimique (photosynthèse) */}
            <line x1="348" y1="90" x2="304" y2="85" stroke="#fb923c" strokeWidth="2.5" markerEnd="url(#aE9c)" />
            <text x="380" y="68" fontSize="8.5" fill="#fb923c" textAnchor="middle" fontFamily="Inter">Organisme</text>
            <text x="380" y="78" fontSize="8.5" fill="#fb923c" textAnchor="middle" fontFamily="Inter">chlorophyllien</text>
            <text x="380" y="88" fontSize="8.5" fill="#fb923c" textAnchor="middle" fontFamily="Inter">→ Photosynthèse</text>
          </svg>

          {/* Tableau récap */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
            {[
              { label: 'Électrolyseur / accu. en charge', conversion: 'Énergie élec. → Énergie chim.', color: '#a78bfa' },
              { label: 'Pile / accu. en décharge', conversion: 'Énergie chim. → Énergie élec.', color: '#f87171' },
              { label: 'Photosynthèse', conversion: 'Énergie solaire → Énergie chim.', color: '#fb923c' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl px-3 py-2" style={{ background: `${item.color}10`, border: `1px solid ${item.color}30` }}>
                <div className="text-xs font-bold mb-0.5" style={{ color: item.color }}>{item.label}</div>
                <div className="text-xs" style={{ color: '#94a3b8' }}>{item.conversion}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}