import React from 'react';

// ─── Schéma Bilan Chapitre 3 : Réactions acido-basiques — Théorie de Brønsted
export default function SchemaCh3() {
  return (
    <div className="space-y-5">

      {/* ── Bloc 1 : Couple Acide/Base de Brønsted ───────────────────────── */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)' }}>
          <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🧪 THÉORIE DE BRØNSTED — COUPLE ACIDE/BASE</span>
        </div>
        <div className="p-4">
          <svg viewBox="0 0 530 200" className="w-full" style={{ maxHeight: 210 }}>
            <defs>
              <marker id="arrowAcide" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f87171" />
              </marker>
              <marker id="arrowBase" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#38bdf8" />
              </marker>
              <marker id="arrowH" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" />
              </marker>
            </defs>

            {/* ─── Zone centrale : Couple AH/A⁻ ─── */}
            <rect x="178" y="55" width="174" height="90" rx="14" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" strokeWidth="2" />
            <text x="265" y="78" fontSize="22" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="900">AH</text>
            <text x="265" y="100" fontSize="16" fill="#94a3b8" textAnchor="middle" fontFamily="JetBrains Mono">/</text>
            <text x="265" y="122" fontSize="22" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="900">A⁻</text>
            <text x="220" y="138" fontSize="10" fill="#f87171" textAnchor="middle" fontFamily="Inter">(Acide)</text>
            <text x="310" y="138" fontSize="10" fill="#38bdf8" textAnchor="middle" fontFamily="Inter">(Base)</text>
            <text x="265" y="155" fontSize="10" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Un couple regroupe un acide</text>
            <text x="265" y="167" fontSize="10" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">et sa base conjuguée</text>

            {/* ─── Flèches H⁺ (courbes) ─── */}
            {/* AH → A⁻ + H⁺ (vers le bas gauche) */}
            <path d="M215,110 Q145,140 120,125" fill="none" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowH)" />
            <text x="150" y="148" fontSize="12" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">H⁺</text>
            {/* A⁻ + H⁺ → AH (de bas droite vers centre) */}
            <path d="M400,120 Q370,100 352,100" fill="none" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowH)" />
            <text x="385" y="148" fontSize="12" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">H⁺</text>

            {/* ─── Zone Acide (gauche) ─── */}
            <rect x="10" y="30" width="160" height="140" rx="12" fill="rgba(248,113,113,0.06)" stroke="#f87171" strokeWidth="1.5" />
            <text x="90" y="55" fontSize="13" fill="#f87171" textAnchor="middle" fontFamily="Inter" fontWeight="700">ACIDE</text>
            <text x="90" y="72" fontSize="10" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Cède H⁺</text>
            <text x="90" y="90" fontSize="12" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="600">AH = A⁻ + H⁺</text>
            <line x1="30" y1="105" x2="155" y2="105" stroke="rgba(248,113,113,0.2)" strokeWidth="1" />
            <text x="90" y="120" fontSize="9.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Liaison polarisée X–H</text>
            <text x="90" y="133" fontSize="9.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">X plus électronégatif</text>
            <text x="90" y="146" fontSize="9.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">que H (ex : O, N, Cl)</text>
            {/* δ−/δ+ sur liaison */}
            <text x="58" y="162" fontSize="10" fill="#a78bfa" textAnchor="middle" fontFamily="JetBrains Mono">δ⁻</text>
            <text x="90" y="162" fontSize="12" fill="#94a3b8" textAnchor="middle" fontFamily="JetBrains Mono">O—H</text>
            <text x="122" y="162" fontSize="10" fill="#fb923c" textAnchor="middle" fontFamily="JetBrains Mono">δ⁺</text>

            {/* ─── Zone Base (droite) ─── */}
            <rect x="360" y="30" width="160" height="140" rx="12" fill="rgba(56,189,248,0.06)" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="440" y="55" fontSize="13" fill="#38bdf8" textAnchor="middle" fontFamily="Inter" fontWeight="700">BASE</text>
            <text x="440" y="72" fontSize="10" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Capte H⁺</text>
            <text x="440" y="90" fontSize="12" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="600">A⁻ + H⁺ = AH</text>
            <line x1="370" y1="105" x2="510" y2="105" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
            <text x="440" y="120" fontSize="9.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Atome avec doublet</text>
            <text x="440" y="133" fontSize="9.5" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">non liant (O, N)</text>
            {/* Doublets non liants sur O et N */}
            <text x="395" y="155" fontSize="11" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">:O:</text>
            <text x="420" y="162" fontSize="10" fill="#64748b" fontFamily="Inter">ou</text>
            <text x="455" y="155" fontSize="11" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono">–N–</text>
          </svg>
        </div>
      </div>

      {/* ── Bloc 2 : Espèce amphotère ─────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-4" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.2)' }}>
          <div className="text-xs font-semibold mb-3" style={{ color: '#fbbf24', fontFamily: 'JetBrains Mono, monospace' }}>🔄 ESPÈCE AMPHOTÈRE</div>
          <p className="text-xs mb-3" style={{ color: '#94a3b8' }}>
            Constitue la forme <strong style={{ color: '#f87171' }}>acide</strong> dans un couple ET la forme <strong style={{ color: '#38bdf8' }}>basique</strong> dans un autre.
          </p>
          <div className="space-y-2">
            <div className="rounded-lg p-2" style={{ background: 'rgba(0,0,0,0.2)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem' }}>
              <div className="flex items-center gap-2">
                <span style={{ color: '#f87171' }}>H₂O</span>
                <span style={{ color: '#64748b' }}>=</span>
                <span style={{ color: '#94a3b8' }}>H₂O amphotère :</span>
              </div>
              <div className="mt-1 text-xs" style={{ color: '#64748b' }}>
                Couple H₃O⁺/H₂O (acide) et H₂O/HO⁻ (base)
              </div>
            </div>
            <div className="rounded-lg p-2" style={{ background: 'rgba(0,0,0,0.2)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem' }}>
              <div style={{ color: '#fbbf24' }}>HCO₃⁻ amphotère :</div>
              <div className="text-xs mt-1" style={{ color: '#64748b' }}>
                Couple H₂CO₃/HCO₃⁻ (acide)<br />
                Couple HCO₃⁻/CO₃²⁻ (base)
              </div>
            </div>
          </div>
        </div>

        {/* ── Réactions acide-base ─────────────────────────────────────────── */}
        <div className="rounded-2xl p-4" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.2)' }}>
          <div className="text-xs font-semibold mb-3" style={{ color: '#a78bfa', fontFamily: 'JetBrains Mono, monospace' }}>⚗️ RÉACTION ACIDE-BASE</div>
          <svg viewBox="0 0 280 140" className="w-full" style={{ maxHeight: 140 }}>
            <defs>
              <marker id="arrowTransfer" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" />
              </marker>
            </defs>
            {/* Couples */}
            <rect x="5" y="10" width="90" height="45" rx="8" fill="rgba(248,113,113,0.1)" stroke="#f87171" strokeWidth="1.2" />
            <text x="50" y="28" fontSize="12" fill="#f87171" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">A₁H / A₁⁻</text>
            <text x="50" y="44" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Couple 1 (acide)</text>

            <rect x="5" y="70" width="90" height="45" rx="8" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" strokeWidth="1.2" />
            <text x="50" y="88" fontSize="12" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">A₂H / A₂⁻</text>
            <text x="50" y="104" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="Inter">Couple 2 (base)</text>

            {/* Croix de mélange */}
            <line x1="95" y1="33" x2="120" y2="60" stroke="#a78bfa" strokeWidth="1.5" />
            <line x1="95" y1="92" x2="120" y2="62" stroke="#a78bfa" strokeWidth="1.5" />

            {/* Réaction globale */}
            <rect x="130" y="30" width="145" height="65" rx="10" fill="rgba(52,211,153,0.08)" stroke="#34d399" strokeWidth="1.5" />
            <text x="203" y="52" fontSize="10.5" fill="#e2e8f0" textAnchor="middle" fontFamily="JetBrains Mono">A₁H + A₂⁻</text>
            <text x="203" y="66" fontSize="11" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono">→ A₁⁻ + A₂H</text>
            <text x="185" y="84" fontSize="9" fill="#f87171" fontFamily="Inter">perte H⁺</text>
            <text x="210" y="84" fontSize="9" fill="#38bdf8" fontFamily="Inter">gain H⁺</text>

            {/* Label transfert H+ */}
            <text x="140" y="18" fontSize="9.5" fill="#fbbf24" fontFamily="Inter" fontWeight="600">Transfert de H⁺</text>
          </svg>
          <div className="text-xs mt-1" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
            L'acide de A₁H/A₁⁻ donne H⁺ à la base de A₂H/A₂⁻
          </div>
        </div>
      </div>

      {/* ── Bloc 3 : pH et autoprotolyse ─────────────────────────────────── */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.18)' }}>
        <div className="text-xs font-semibold mb-3" style={{ color: '#34d399', fontFamily: 'JetBrains Mono, monospace' }}>📏 ÉCHELLE DE pH — EAU À 25°C</div>
        <svg viewBox="0 0 500 72" className="w-full" style={{ maxHeight: 72 }}>
          <defs>
            <linearGradient id="pHGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          {/* Barre de pH */}
          <rect x="20" y="20" width="460" height="18" rx="9" fill="url(#pHGrad)" opacity="0.7" />
          {/* Graduations 0,1,2...14 */}
          {Array.from({ length: 15 }, (_, i) => (
            <g key={i}>
              <line x1={20 + i * 32.9} y1="20" x2={20 + i * 32.9} y2="38" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />
              <text x={20 + i * 32.9} y="55" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="JetBrains Mono">{i}</text>
            </g>
          ))}
          {/* Marqueur pH = 7 */}
          <line x1="250" y1="15" x2="250" y2="42" stroke="#fbbf24" strokeWidth="2" />
          <text x="250" y="10" fontSize="10" fill="#fbbf24" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Neutre</text>
          {/* Labels */}
          <text x="90" y="70" fontSize="10" fill="#f87171" textAnchor="middle" fontFamily="Inter" fontWeight="600">ACIDE</text>
          <text x="90" y="10" fontSize="9" fill="#f87171" textAnchor="middle" fontFamily="Inter">[H₃O⁺] &gt; [HO⁻]</text>
          <text x="415" y="70" fontSize="10" fill="#38bdf8" textAnchor="middle" fontFamily="Inter" fontWeight="600">BASIQUE</text>
          <text x="415" y="10" fontSize="9" fill="#38bdf8" textAnchor="middle" fontFamily="Inter">[H₃O⁺] &lt; [HO⁻]</text>
        </svg>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
          <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)' }}>
            <div className="text-xs font-semibold" style={{ color: '#f87171', fontFamily: 'JetBrains Mono, monospace' }}>pH = −log([H₃O⁺]/c°)</div>
            <div className="text-xs mt-1" style={{ color: '#64748b' }}>c° = 1 mol·L⁻¹</div>
          </div>
          <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)' }}>
            <div className="text-xs font-semibold" style={{ color: '#fbbf24', fontFamily: 'JetBrains Mono, monospace' }}>Ke = 10⁻¹⁴ à 25°C</div>
            <div className="text-xs mt-1" style={{ color: '#64748b' }}>[H₃O⁺][HO⁻] = 10⁻¹⁴</div>
          </div>
          <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)' }}>
            <div className="text-xs font-semibold" style={{ color: '#34d399', fontFamily: 'JetBrains Mono, monospace' }}>H₂O amphotère</div>
            <div className="text-xs mt-1" style={{ color: '#64748b' }}>H₃O⁺/H₂O et H₂O/HO⁻</div>
          </div>
        </div>
      </div>

    </div>
  );
}