import React from 'react';
import ZoomableSVG from '../ZoomableSVG';
import FormulaBlock from '../FormulaBlock';
import SchemaLegend from '../SchemaLegend';
import { InlineF } from '../FormulaBlock';

// ─── Schéma Bilan Ch.9 : Évolution forcée — Électrolyse ──────────────────────
export default function SchemaCh9() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Électrolyse ════════════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚡ ÉLECTROLYSE — TRANSFORMATIONS FORCÉES</span>
        </div>
        <div className="p-4 space-y-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Schéma montage */}
            <div>
              <div className="text-xs font-bold mb-2" style={{ color: '#38bdf8' }}>Montage d'électrolyse</div>
              <ZoomableSVG maxHeight={220} caption="Anode (+) : oxydation — Cathode (−) : réduction">
                <svg viewBox="0 0 260 210" style={{ width: '100%' }}>
                  <defs>
                    <marker id="aI9" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#c8902f" /></marker>
                    <marker id="aE9a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#38bdf8" /></marker>
                    <marker id="aIp9" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f87171" /></marker>
                    <marker id="aIm9" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#38bdf8" /></marker>
                  </defs>
                  {/* Générateur */}
                  <circle cx="130" cy="28" r="22" fill="rgba(200,144,47,0.15)" stroke="#c8902f" strokeWidth="2" />
                  <text x="118" y="26" fontSize="12" fill="#c8902f" fontFamily="JetBrains Mono" fontWeight="700">+</text>
                  <text x="137" y="26" fontSize="12" fill="#38bdf8" fontFamily="JetBrains Mono" fontWeight="700">−</text>
                  <text x="130" y="39" fontSize="8" fill="#e2e8f0" fontFamily="Inter" textAnchor="middle">Géné.</text>
                  {/* Fils */}
                  <line x1="108" y1="28" x2="60" y2="28" stroke="#e2e8f0" strokeWidth="2" />
                  <line x1="60" y1="28" x2="60" y2="85" stroke="#e2e8f0" strokeWidth="2" />
                  <line x1="152" y1="28" x2="200" y2="28" stroke="#e2e8f0" strokeWidth="2" />
                  <line x1="200" y1="28" x2="200" y2="85" stroke="#e2e8f0" strokeWidth="2" />
                  {/* Courant I */}
                  <line x1="105" y1="21" x2="80" y2="21" stroke="#c8902f" strokeWidth="1.5" markerEnd="url(#aI9)" />
                  <text x="90" y="17" fontSize="9" fill="#c8902f" fontFamily="JetBrains Mono">I</text>
                  {/* e⁻ */}
                  <line x1="78" y1="36" x2="55" y2="36" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#aE9a)" />
                  <text x="57" y="47" fontSize="8" fill="#38bdf8" fontFamily="JetBrains Mono">e⁻</text>
                  <line x1="183" y1="36" x2="207" y2="36" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#aE9a)" />
                  <text x="186" y="47" fontSize="8" fill="#38bdf8" fontFamily="JetBrains Mono">e⁻</text>
                  {/* Cuve */}
                  <path d="M40,85 L30,195 L230,195 L220,85 Z" fill="rgba(56,189,248,0.07)" stroke="#38bdf8" strokeWidth="1.5" />
                  {/* Électrolyte */}
                  <path d="M42,130 L34,195 L226,195 L218,130 Z" fill="rgba(56,189,248,0.14)" />
                  <text x="130" y="180" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="Inter" fontWeight="600">Électrolyte</text>
                  {/* Électrodes */}
                  <rect x="50" y="82" width="18" height="100" rx="3" fill="rgba(248,113,113,0.45)" stroke="#f87171" strokeWidth="1.5" />
                  <text x="58" y="205" fontSize="8" fill="#f87171" textAnchor="middle" fontFamily="Inter" fontWeight="700">Anode +</text>
                  <rect x="192" y="82" width="18" height="100" rx="3" fill="rgba(52,211,153,0.45)" stroke="#34d399" strokeWidth="1.5" />
                  <text x="201" y="205" fontSize="8" fill="#34d399" textAnchor="middle" fontFamily="Inter" fontWeight="700">Cathode −</text>
                  {/* Ions */}
                  <line x1="160" y1="155" x2="108" y2="155" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#aIm9)" />
                  <text x="128" y="149" fontSize="8" fill="#38bdf8" fontFamily="Inter">Ions −</text>
                  <line x1="108" y1="168" x2="160" y2="168" stroke="#f87171" strokeWidth="1.5" markerEnd="url(#aIp9)" />
                  <text x="122" y="181" fontSize="8" fill="#f87171" fontFamily="Inter">Ions +</text>
                </svg>
              </ZoomableSVG>
              <SchemaLegend cols={2} items={[
                { color: '#f87171', label: 'Anode (+)', detail: 'OxydAtion' },
                { color: '#34d399', label: 'Cathode (−)', detail: 'RéduCtion' },
                { color: '#38bdf8', label: 'Ions −', detail: 'migrent vers l\'anode' },
                { color: '#f87171', label: 'Ions +', detail: 'migrent vers la cathode' },
              ]} />
            </div>

            {/* Bilans */}
            <div className="space-y-3">
              <div className="text-xs font-bold mb-1" style={{ color: '#94a3b8' }}>
                Évolution forcée dans le sens contraire de l'évolution spontanée
              </div>
              {/* Axe Qr */}
              <ZoomableSVG maxHeight={60} caption="Qr s'éloigne de K lors de l'électrolyse">
                <svg viewBox="0 0 280 55" style={{ width: '100%' }}>
                  <defs>
                    <marker id="aQL9" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#f472b6" /></marker>
                    <marker id="aQax9" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#64748b" /></marker>
                  </defs>
                  <line x1="10" y1="28" x2="265" y2="28" stroke="#475569" strokeWidth="1.5" markerEnd="url(#aQax9)" />
                  <text x="268" y="32" fontSize="10" fill="#94a3b8" fontFamily="JetBrains Mono">Qr</text>
                  <line x1="80" y1="18" x2="80" y2="38" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,2" />
                  <text x="80" y="13" fontSize="8.5" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono">Qr init.</text>
                  <line x1="190" y1="15" x2="190" y2="42" stroke="#34d399" strokeWidth="2.5" />
                  <text x="190" y="10" fontSize="9" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">K</text>
                  <line x1="160" y1="36" x2="90" y2="36" stroke="#f472b6" strokeWidth="2" markerEnd="url(#aQL9)" />
                  <text x="120" y="50" fontSize="8" fill="#f472b6" textAnchor="middle" fontFamily="Inter">Évolution forcée ←</text>
                </svg>
              </ZoomableSVG>

              <FormulaBlock
                expr="Q = I \times \Delta t"
                title="Bilan électrique"
                color="#c8902f"
                desc="Q : quantité d'électricité (C) · I : intensité (A) · Δt : durée (s)"
              />
              <FormulaBlock
                expr="Q = z \cdot x_f \cdot F"
                title="Bilan chimique"
                color="#34d399"
                desc="z : nb d'e⁻ échangés · xf : avancement final (mol) · F = 9,65 × 10⁴ C·mol⁻¹"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Stockage et conversion ═════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)' }}>
          <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔋 STOCKAGE ET CONVERSION D'ÉNERGIE</span>
        </div>
        <div className="p-4">
          <ZoomableSVG maxHeight={200} caption="Conversions entre formes d'énergie">
            <svg viewBox="0 0 480 180" style={{ width: '100%' }}>
              <defs>
                <marker id="aEa9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#a78bfa" /></marker>
                <marker id="aEb9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f87171" /></marker>
                <marker id="aEc9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#fb923c" /></marker>
              </defs>
              {/* Nœuds */}
              <ellipse cx="80" cy="100" rx="62" ry="33" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" strokeWidth="2" />
              <text x="80" y="96" fontSize="10" fill="#38bdf8" textAnchor="middle" fontFamily="Inter" fontWeight="700">Énergie</text>
              <text x="80" y="110" fontSize="10" fill="#38bdf8" textAnchor="middle" fontFamily="Inter" fontWeight="700">électrique</text>

              <ellipse cx="240" cy="88" rx="64" ry="35" fill="rgba(52,211,153,0.12)" stroke="#34d399" strokeWidth="2" />
              <text x="240" y="84" fontSize="10" fill="#34d399" textAnchor="middle" fontFamily="Inter" fontWeight="700">Énergie</text>
              <text x="240" y="98" fontSize="10" fill="#34d399" textAnchor="middle" fontFamily="Inter" fontWeight="700">chimique</text>

              <ellipse cx="408" cy="100" rx="62" ry="33" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" strokeWidth="2" />
              <text x="408" y="96" fontSize="10" fill="#fbbf24" textAnchor="middle" fontFamily="Inter" fontWeight="700">Énergie</text>
              <text x="408" y="110" fontSize="10" fill="#fbbf24" textAnchor="middle" fontFamily="Inter" fontWeight="700">solaire</text>

              {/* Flèche élec → chim */}
              <path d="M140,80 Q195,55 176,75" fill="none" stroke="#a78bfa" strokeWidth="2.5" markerEnd="url(#aEa9)" />
              <text x="158" y="58" fontSize="8.5" fill="#a78bfa" textAnchor="middle" fontFamily="Inter" fontWeight="600">Électrolyseur</text>
              <text x="158" y="68" fontSize="8.5" fill="#a78bfa" textAnchor="middle" fontFamily="Inter">ou accu. en charge</text>

              {/* Flèche chim → élec */}
              <path d="M176,100 Q195,122 140,118" fill="none" stroke="#f87171" strokeWidth="2.5" markerEnd="url(#aEb9)" />
              <text x="158" y="130" fontSize="8.5" fill="#f87171" textAnchor="middle" fontFamily="Inter" fontWeight="600">Pile ou accu.</text>
              <text x="158" y="140" fontSize="8.5" fill="#f87171" textAnchor="middle" fontFamily="Inter">en décharge</text>

              {/* Flèche sol → chim */}
              <line x1="346" y1="88" x2="306" y2="84" stroke="#fb923c" strokeWidth="2.5" markerEnd="url(#aEc9)" />
              <text x="380" y="65" fontSize="8.5" fill="#fb923c" textAnchor="middle" fontFamily="Inter" fontWeight="600">Organisme chlorophyllien</text>
              <text x="380" y="75" fontSize="8.5" fill="#fb923c" textAnchor="middle" fontFamily="Inter">→ Photosynthèse</text>
            </svg>
          </ZoomableSVG>
          <SchemaLegend cols={3} items={[
            { color: '#a78bfa', label: 'Électrolyseur / accu. charge', detail: 'Élec. → Chim.' },
            { color: '#f87171', label: 'Pile / accu. décharge', detail: 'Chim. → Élec.' },
            { color: '#fb923c', label: 'Photosynthèse', detail: 'Solaire → Chim.' },
          ]} />
        </div>
      </div>

    </div>
  );
}