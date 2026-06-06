import React from 'react';

// ─── Schéma Bilan Chapitre 1 : Cinétique chimique ────────────────────────────
// Fidèle au manuel Hatier — courbe [C](t) + ordre 1 + facteurs cinétiques

export default function SchemaCh1() {
  return (
    <div className="space-y-5">

      {/* ── Bloc 1 : Courbe [C](t) et vitesse ─────────────────────────────── */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.2)' }}>
        <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📈 ÉTUDE CINÉTIQUE D'UNE RÉACTION</span>
        </div>
        <div className="p-4">
          <svg viewBox="0 0 540 220" className="w-full" style={{ maxHeight: 220 }}>
            <defs>
              <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#38bdf8" />
              </marker>
              <marker id="arrowGray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#64748b" />
              </marker>
              <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#fb923c" />
              </marker>
            </defs>

            {/* Axes */}
            <line x1="60" y1="180" x2="490" y2="180" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowGray)" />
            <line x1="60" y1="180" x2="60" y2="20" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowGray)" />

            {/* Labels axes */}
            <text x="495" y="184" fontSize="13" fill="#94a3b8" fontFamily="JetBrains Mono, monospace">t</text>
            <text x="52" y="16" fontSize="13" fill="#94a3b8" fontFamily="JetBrains Mono, monospace">[C]</text>

            {/* Valeur [C]f */}
            <line x1="56" y1="45" x2="450" y2="45" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5,4" />
            <text x="18" y="49" fontSize="11" fill="#38bdf8" fontFamily="JetBrains Mono, monospace">[C]f</text>

            {/* Valeur [C]f/2 */}
            <line x1="56" y1="113" x2="195" y2="113" stroke="#fb923c" strokeWidth="1" strokeDasharray="4,3" />
            <text x="5" y="117" fontSize="10" fill="#fb923c" fontFamily="JetBrains Mono, monospace">[C]f/2</text>

            {/* Courbe [C](t) - apparition produit */}
            <path d="M60,178 C100,170 140,140 190,113 C250,82 330,58 430,48 C450,47 465,46 480,45.5"
              fill="none" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Tangente en t=0 (vitesse initiale) */}
            <line x1="60" y1="178" x2="170" y2="60" stroke="#fb923c" strokeWidth="1.8" strokeDasharray="3,3" markerEnd="url(#arrowOrange)" />

            {/* t1/2 vertical */}
            <line x1="195" y1="113" x2="195" y2="180" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="4,3" />
            <text x="180" y="196" fontSize="11" fill="#fb923c" fontFamily="JetBrains Mono, monospace">t₁/₂</text>

            {/* Label courbe */}
            <text x="440" y="38" fontSize="12" fill="#38bdf8" fontFamily="JetBrains Mono, monospace">[C](t)</text>

            {/* Annotation vitesse v_A(C) */}
            <text x="290" y="30" fontSize="10" fill="#94a3b8" fontFamily="Inter, sans-serif">pente tangente</text>
            <text x="295" y="43" fontSize="10" fill="#94a3b8" fontFamily="Inter, sans-serif">= vitesse</text>

            {/* Légende t1/2 */}
            <text x="210" y="125" fontSize="10" fill="#fb923c" fontFamily="Inter, sans-serif">t₁/₂ : temps de</text>
            <text x="210" y="137" fontSize="10" fill="#fb923c" fontFamily="Inter, sans-serif">demi-réaction</text>

            {/* Formules v */}
            <text x="310" y="70" fontSize="11" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace">v_A(C) = d[C]/dt</text>
            <text x="310" y="86" fontSize="11" fill="#f472b6" fontFamily="JetBrains Mono, monospace">v_D(A) = −d[A]/dt</text>
            <text x="310" y="100" fontSize="10" fill="#64748b" fontFamily="Inter, sans-serif">(en mol·L⁻¹·s⁻¹)</text>
          </svg>

          {/* Légende texte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#38bdf8' }}>Mesure de [C](t)</div>
              <div className="text-xs space-y-0.5" style={{ color: '#94a3b8' }}>
                <div>• Méthodes physiques : conductimétrie, spectrophotométrie</div>
                <div>• Méthodes chimiques : titrage</div>
              </div>
            </div>
            <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(251,146,60,0.07)', border: '1px solid rgba(251,146,60,0.2)' }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#fb923c' }}>Temps de demi-réaction t₁/₂</div>
              <div className="text-xs" style={{ color: '#94a3b8' }}>
                Date à laquelle l'avancement est égal à la <strong style={{ color: '#fb923c' }}>moitié</strong> de sa valeur finale. Lecture graphique : abscisse où [C] = [C]f/2
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bloc 2 : Facteurs cinétiques ──────────────────────────────────── */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.2)' }}>
        <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)' }}>
          <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⚡ FACTEURS CINÉTIQUES ET CATALYSE</span>
        </div>
        <div className="p-4">
          <svg viewBox="0 0 540 90" className="w-full" style={{ maxHeight: 90 }}>
            <defs>
              <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
                <path d="M0,0 L0,8 L10,4 z" fill="#34d399" />
              </marker>
            </defs>
            {/* Causes */}
            <rect x="5" y="8" width="210" height="72" rx="10" fill="rgba(56,189,248,0.08)" stroke="rgba(56,189,248,0.3)" strokeWidth="1.2" />
            <text x="18" y="26" fontSize="11" fill="#38bdf8" fontFamily="Inter, sans-serif" fontWeight="600">Augmentation de :</text>
            <text x="18" y="43" fontSize="11" fill="#e2e8f0" fontFamily="Inter, sans-serif">• Température T</text>
            <text x="18" y="57" fontSize="11" fill="#e2e8f0" fontFamily="Inter, sans-serif">• Concentrations [A] et [B]</text>
            <text x="18" y="71" fontSize="11" fill="#e2e8f0" fontFamily="Inter, sans-serif">• Ajout d'un catalyseur</text>

            {/* Flèche centrale */}
            <line x1="220" y1="44" x2="295" y2="44" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrowGreen)" />

            {/* Effets */}
            <rect x="300" y="8" width="230" height="72" rx="10" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.3)" strokeWidth="1.2" />
            <text x="313" y="26" fontSize="11" fill="#34d399" fontFamily="Inter, sans-serif" fontWeight="600">Conséquences :</text>
            <text x="313" y="43" fontSize="11" fill="#e2e8f0" fontFamily="Inter, sans-serif">• Durée de réaction Δt ↓</text>
            <text x="313" y="57" fontSize="11" fill="#e2e8f0" fontFamily="Inter, sans-serif">• Temps demi-réaction t₁/₂ ↓</text>
            <text x="313" y="71" fontSize="11" fill="#e2e8f0" fontFamily="Inter, sans-serif">• Vitesse volumique ↑</text>
          </svg>
        </div>
      </div>

      {/* ── Bloc 3 : Réaction d'ordre 1 ──────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.22)' }}>
          <div className="px-4 py-2.5" style={{ background: 'rgba(168,139,250,0.1)', borderBottom: '1px solid rgba(168,139,250,0.15)' }}>
            <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📉 RÉACTION D'ORDRE 1</span>
          </div>
          <div className="p-4 space-y-2">
            <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(168,139,250,0.08)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#e2e8f0' }}>
              <div>a A<sub>(aq)</sub> → b B + c C</div>
              <div className="mt-1" style={{ color: '#a78bfa' }}>v<sub>D(A)</sub> = k [A]</div>
              <div className="mt-1" style={{ color: '#38bdf8' }}>d[A]/dt + k [A] = 0</div>
            </div>
            <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem' }}>
              <div style={{ color: '#34d399', fontWeight: 700 }}>[A](t) = [A]₀ · e<sup>−kt</sup></div>
              <div className="mt-1" style={{ color: '#94a3b8' }}>ln([A](t)) = ln([A]₀) − k·t</div>
            </div>
            <svg viewBox="0 0 240 120" className="w-full" style={{ maxHeight: 120 }}>
              <defs>
                <marker id="arrowPurple" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L7,3 z" fill="#a78bfa" />
                </marker>
              </defs>
              <line x1="30" y1="100" x2="220" y2="100" stroke="#475569" strokeWidth="1.2" markerEnd="url(#arrowPurple)" />
              <line x1="30" y1="100" x2="30" y2="10" stroke="#475569" strokeWidth="1.2" markerEnd="url(#arrowPurple)" />
              <text x="222" y="104" fontSize="11" fill="#a78bfa" fontFamily="JetBrains Mono">t</text>
              <text x="12" y="14" fontSize="11" fill="#a78bfa" fontFamily="JetBrains Mono">ln[A]</text>
              {/* Droite de pente -k */}
              <line x1="30" y1="20" x2="210" y2="95" stroke="#fb923c" strokeWidth="2" />
              <text x="110" y="55" fontSize="10" fill="#fb923c" fontFamily="JetBrains Mono">pente = −k</text>
              <text x="22" y="24" fontSize="9" fill="#94a3b8" fontFamily="JetBrains Mono">ln[A]₀</text>
              <circle cx="30" cy="20" r="3" fill="#fb923c" />
            </svg>
            <div className="text-xs mt-1" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
              Si ln([A]) vs t est une droite → ordre 1 confirmé
            </div>
          </div>
        </div>

        {/* ── Modélisation microscopique ──────────────────────────────────── */}
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.22)' }}>
          <div className="px-4 py-2.5" style={{ background: 'rgba(244,114,182,0.1)', borderBottom: '1px solid rgba(244,114,182,0.15)' }}>
            <span style={{ color: '#f472b6', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⭐ MODÉLISATION MICROSCOPIQUE</span>
          </div>
          <div className="p-4 space-y-3">
            <div className="text-xs" style={{ color: '#94a3b8' }}>
              Mécanisme réactionnel = succession d'<strong style={{ color: '#f472b6' }}>actes élémentaires</strong>
            </div>
            {/* Flèche courbe */}
            <div className="rounded-xl p-3" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.2)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#f472b6' }}>Flèche courbe (doublet d'électrons)</div>
              <svg viewBox="0 0 220 60" className="w-full" style={{ maxHeight: 60 }}>
                <defs>
                  <marker id="arrowPink" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#f472b6" />
                  </marker>
                </defs>
                {/* Site donneur X */}
                <rect x="10" y="20" width="60" height="24" rx="8" fill="rgba(52,211,153,0.15)" stroke="#34d399" strokeWidth="1.5" />
                <text x="40" y="36" fontSize="12" fill="#34d399" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">X</text>
                <text x="40" y="14" fontSize="9" fill="#34d399" fontFamily="Inter" textAnchor="middle">Site D (riche e⁻)</text>
                <text x="40" y="55" fontSize="9" fill="#94a3b8" fontFamily="Inter" textAnchor="middle">δ⁻</text>
                {/* Flèche courbe */}
                <path d="M72,30 Q130,5 148,30" fill="none" stroke="#f472b6" strokeWidth="2" markerEnd="url(#arrowPink)" />
                {/* Site accepteur X' */}
                <rect x="150" y="20" width="65" height="24" rx="8" fill="rgba(248,113,113,0.15)" stroke="#f87171" strokeWidth="1.5" />
                <text x="183" y="36" fontSize="12" fill="#f87171" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">X'</text>
                <text x="183" y="14" fontSize="9" fill="#f87171" fontFamily="Inter" textAnchor="middle">Site A (pauvre e⁻)</text>
                <text x="183" y="55" fontSize="9" fill="#94a3b8" fontFamily="Inter" textAnchor="middle">δ⁺</text>
              </svg>
            </div>
            <div className="space-y-2 text-xs" style={{ color: '#94a3b8' }}>
              <div className="flex items-start gap-2">
                <span style={{ color: '#f472b6' }}>▶</span>
                <span>Un <strong style={{ color: '#e2e8f0' }}>intermédiaire réactionnel</strong> est formé puis détruit</span>
              </div>
              <div className="flex items-start gap-2">
                <span style={{ color: '#fb923c' }}>▶</span>
                <span>Un <strong style={{ color: '#e2e8f0' }}>catalyseur</strong> réagit puis est régénéré (absent du bilan)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}