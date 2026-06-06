import React from 'react';
import Math from '../Math';

const F = ({ e }) => <Math expr={e} />;

// ─── Schéma Bilan Ch.3 : Réactions acido-basiques — Théorie de Brønsted ──────
export default function SchemaCh3() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Couple Acide/Base de Brønsted ══════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)' }}>
          <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🧪 THÉORIE DE BRØNSTED — COUPLE ACIDE/BASE</span>
        </div>
        <div className="p-4 space-y-4">

          {/* SVG épuré : juste la structure AH / A⁻ avec flèches H⁺ */}
          <svg viewBox="0 0 520 130" className="w-full" style={{ maxHeight: 130 }}>
            <defs>
              <marker id="aAc3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f87171" />
              </marker>
              <marker id="aBa3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#38bdf8" />
              </marker>
              <marker id="aH3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" />
              </marker>
            </defs>

            {/* Zone Acide */}
            <rect x="10" y="25" width="150" height="80" rx="12" fill="rgba(248,113,113,0.07)" stroke="#f87171" strokeWidth="1.5" />
            <text x="85" y="52" fontSize="13" fill="#f87171" textAnchor="middle" fontFamily="Inter" fontWeight="700">ACIDE</text>
            <text x="85" y="68" fontSize="11" fill="#e2e8f0" textAnchor="middle" fontFamily="JetBrains Mono">AH</text>
            <text x="85" y="84" fontSize="9.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Cède H⁺</text>
            <text x="85" y="97" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="Inter">liaison X–H polarisée</text>

            {/* Couple central */}
            <rect x="185" y="40" width="150" height="52" rx="12" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" strokeWidth="2" />
            <text x="260" y="63" fontSize="20" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="900">AH</text>
            <text x="260" y="79" fontSize="10" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Un couple acide/base conjugué</text>
            <text x="300" y="63" fontSize="16" fill="#94a3b8" textAnchor="middle" fontFamily="JetBrains Mono">/</text>
            <text x="335" y="63" fontSize="20" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="900">A⁻</text>

            {/* Zone Base */}
            <rect x="360" y="25" width="150" height="80" rx="12" fill="rgba(56,189,248,0.07)" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="435" y="52" fontSize="13" fill="#38bdf8" textAnchor="middle" fontFamily="Inter" fontWeight="700">BASE</text>
            <text x="435" y="68" fontSize="11" fill="#e2e8f0" textAnchor="middle" fontFamily="JetBrains Mono">A⁻</text>
            <text x="435" y="84" fontSize="9.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Capte H⁺</text>
            <text x="435" y="97" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="Inter">doublet non liant (O, N)</text>

            {/* Flèche AH → A⁻ + H⁺ */}
            <path d="M162,58 Q175,30 184,48" fill="none" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#aH3)" />
            <text x="168" y="26" fontSize="10" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">H⁺</text>

            {/* Flèche A⁻ + H⁺ → AH */}
            <path d="M337,58 Q347,30 358,48" fill="none" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#aH3)" />
            <text x="352" y="26" fontSize="10" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">H⁺</text>
          </svg>

          {/* Formules LaTeX */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(248,113,113,0.07)', border: '1px solid rgba(248,113,113,0.2)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#f87171' }}>Demi-équation acide</div>
              <div className="text-sm"><F e="\text{AH} \rightleftharpoons \text{A}^- + \text{H}^+" /></div>
            </div>
            <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#38bdf8' }}>Demi-équation base</div>
              <div className="text-sm"><F e="\text{A}^- + \text{H}^+ \rightleftharpoons \text{AH}" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Amphotère + Réaction acide-base ════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Espèce amphotère */}
        <div className="rounded-2xl p-4" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.2)' }}>
          <div className="text-xs font-semibold mb-3" style={{ color: '#fbbf24', fontFamily: 'JetBrains Mono, monospace' }}>🔄 ESPÈCE AMPHOTÈRE</div>
          <p className="text-xs mb-3" style={{ color: '#94a3b8' }}>
            Constitue la forme <strong style={{ color: '#f87171' }}>acide</strong> dans un couple ET la forme <strong style={{ color: '#38bdf8' }}>basique</strong> dans un autre.
          </p>
          <div className="space-y-2">
            <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#fbbf24' }}>H₂O amphotère :</div>
              <div className="text-xs space-y-1" style={{ color: '#94a3b8' }}>
                <div>• Acide dans le couple <F e="\text{H}_3\text{O}^+/\text{H}_2\text{O}" /></div>
                <div>• Base dans le couple <F e="\text{H}_2\text{O}/\text{HO}^-" /></div>
              </div>
            </div>
            <div className="rounded-lg p-3" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#fbbf24' }}><F e="\text{HCO}_3^-" /> amphotère :</div>
              <div className="text-xs space-y-1" style={{ color: '#94a3b8' }}>
                <div>• Acide : couple <F e="\text{H}_2\text{CO}_3/\text{HCO}_3^-" /></div>
                <div>• Base : couple <F e="\text{HCO}_3^-/\text{CO}_3^{2-}" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Réaction acide-base */}
        <div className="rounded-2xl p-4" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.2)' }}>
          <div className="text-xs font-semibold mb-3" style={{ color: '#a78bfa', fontFamily: 'JetBrains Mono, monospace' }}>⚗️ RÉACTION ACIDE-BASE GLOBALE</div>

          {/* SVG épuré — seulement les rectangles et flèches */}
          <svg viewBox="0 0 300 110" className="w-full" style={{ maxHeight: 110 }}>
            <defs>
              <marker id="aTr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" />
              </marker>
            </defs>
            {/* Couple 1 */}
            <rect x="5" y="8" width="85" height="38" rx="8" fill="rgba(248,113,113,0.1)" stroke="#f87171" strokeWidth="1.2" />
            <text x="47" y="24" fontSize="10" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">A₁H / A₁⁻</text>
            <text x="47" y="38" fontSize="8.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Couple 1 (acide)</text>

            {/* Couple 2 */}
            <rect x="5" y="64" width="85" height="38" rx="8" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" strokeWidth="1.2" />
            <text x="47" y="80" fontSize="10" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">A₂H / A₂⁻</text>
            <text x="47" y="94" fontSize="8.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Couple 2 (base)</text>

            {/* Lignes de croisement */}
            <line x1="92" y1="27" x2="118" y2="55" stroke="#a78bfa" strokeWidth="1.5" />
            <line x1="92" y1="83" x2="118" y2="55" stroke="#a78bfa" strokeWidth="1.5" />

            {/* Résultat */}
            <rect x="122" y="30" width="172" height="50" rx="10" fill="rgba(52,211,153,0.08)" stroke="#34d399" strokeWidth="1.5" />
            <text x="208" y="50" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="JetBrains Mono">A₁H + A₂⁻</text>
            <text x="208" y="66" fontSize="9.5" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">→ A₁⁻ + A₂H</text>
          </svg>

          {/* Formule LaTeX */}
          <div className="rounded-xl px-3 py-2 mt-2" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
            <div className="text-xs mb-1" style={{ color: '#fbbf24' }}>Transfert de H⁺</div>
            <div className="text-sm"><F e="\text{A}_1\text{H} + \text{A}_2^- \rightleftharpoons \text{A}_1^- + \text{A}_2\text{H}" /></div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 3 : pH et autoprotolyse ════════════════════════════════════ */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.18)' }}>
        <div className="text-xs font-semibold mb-3" style={{ color: '#34d399', fontFamily: 'JetBrains Mono, monospace' }}>📏 ÉCHELLE DE pH — EAU À 25°C</div>

        {/* Barre gradient */}
        <svg viewBox="0 0 500 60" className="w-full" style={{ maxHeight: 60 }}>
          <defs>
            <linearGradient id="pHG3" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <rect x="20" y="18" width="460" height="16" rx="8" fill="url(#pHG3)" opacity="0.7" />
          {Array.from({ length: 15 }, (_, i) => (
            <g key={i}>
              <line x1={20 + i * 32.9} y1="18" x2={20 + i * 32.9} y2="34" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
              <text x={20 + i * 32.9} y="50" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="JetBrains Mono">{i}</text>
            </g>
          ))}
          <line x1="250" y1="12" x2="250" y2="38" stroke="#fbbf24" strokeWidth="2" />
          <text x="250" y="10" fontSize="9.5" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">pH 7 Neutre</text>
        </svg>

        {/* Labels acide/basique */}
        <div className="flex justify-between text-xs px-2 mt-1">
          <span style={{ color: '#f87171' }}>← ACIDE (pH &lt; 7)</span>
          <span style={{ color: '#38bdf8' }}>BASIQUE (pH &gt; 7) →</span>
        </div>

        {/* Formules LaTeX */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
          <div className="rounded-lg p-3 text-center" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)' }}>
            <div className="text-xs font-semibold mb-1.5" style={{ color: '#f87171' }}>Définition pH</div>
            <div className="text-sm"><F e="\text{pH} = -\log\!\left(\frac{[\text{H}_3\text{O}^+]}{c^\circ}\right)" /></div>
          </div>
          <div className="rounded-lg p-3 text-center" style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)' }}>
            <div className="text-xs font-semibold mb-1.5" style={{ color: '#fbbf24' }}>Produit ionique</div>
            <div className="text-sm"><F e="K_e = [\text{H}_3\text{O}^+][\text{HO}^-] = 10^{-14}" /></div>
            <div className="text-xs mt-1" style={{ color: '#64748b' }}>à 25°C</div>
          </div>
          <div className="rounded-lg p-3 text-center" style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)' }}>
            <div className="text-xs font-semibold mb-1.5" style={{ color: '#34d399' }}>Autoprotolyse H₂O</div>
            <div className="text-sm"><F e="\text{H}_2\text{O} + \text{H}_2\text{O} \rightleftharpoons \text{H}_3\text{O}^+ + \text{HO}^-" /></div>
          </div>
        </div>
      </div>

    </div>
  );
}