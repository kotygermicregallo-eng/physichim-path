import React from 'react';

import React from 'react';
import Math from '../Math';

const F = ({ e }) => <Math expr={e} />;

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
          <svg viewBox="0 0 540 260" className="w-full" style={{ maxHeight: 260 }}>
            <defs>
              <marker id="arrowGray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#64748b" />
              </marker>
              <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#fb923c" />
              </marker>
            </defs>

            {/* Axes */}
            <line x1="70" y1="190" x2="480" y2="190" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowGray)" />
            <line x1="70" y1="190" x2="70" y2="25" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrowGray)" />

            {/* Labels axes */}
            <text x="485" y="194" fontSize="13" fill="#94a3b8" fontFamily="JetBrains Mono, monospace">t</text>
            <text x="58" y="22" fontSize="13" fill="#94a3b8" fontFamily="JetBrains Mono, monospace">[C]</text>

            {/* Ligne [C]f */}
            <line x1="66" y1="55" x2="455" y2="55" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5,4" />
            <text x="20" y="59" fontSize="11" fill="#38bdf8" fontFamily="JetBrains Mono, monospace">[C]f</text>

            {/* Ligne [C]f/2 */}
            <line x1="66" y1="123" x2="210" y2="123" stroke="#fb923c" strokeWidth="1" strokeDasharray="4,3" />
            <text x="4" y="127" fontSize="10" fill="#fb923c" fontFamily="JetBrains Mono, monospace">[C]f/2</text>

            {/* Courbe [C](t) */}
            <path d="M70,188 C110,178 150,148 205,123 C265,94 345,68 440,58 C455,57 465,56 475,55.5"
              fill="none" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Label [C](t) — au-dessus de la ligne [C]f, tout à droite */}
            <text x="458" y="47" fontSize="12" fill="#38bdf8" fontFamily="JetBrains Mono, monospace">[C](t)</text>

            {/* Tangente en t=0 */}
            <line x1="70" y1="188" x2="165" y2="78" stroke="#fb923c" strokeWidth="1.8" strokeDasharray="3,3" markerEnd="url(#arrowOrange)" />
            {/* Label tangente — à gauche de la tangente, hors courbe */}
            <text x="72" y="155" fontSize="9" fill="#fb923c" fontFamily="Inter, sans-serif">pente =</text>
            <text x="72" y="167" fontSize="9" fill="#fb923c" fontFamily="Inter, sans-serif">vitesse₀</text>

            {/* t1/2 vertical */}
            <line x1="210" y1="123" x2="210" y2="190" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="4,3" />
            <text x="196" y="207" fontSize="11" fill="#fb923c" fontFamily="JetBrains Mono, monospace">t₁/₂</text>
            {/* Label t1/2 — sous le graphe */}
            <text x="220" y="207" fontSize="9" fill="#fb923c" fontFamily="Inter, sans-serif">temps de demi-réaction</text>

            {/* Formules v — zone claire en bas à droite, sous la courbe */}
            <text x="280" y="160" fontSize="11" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace">v_A(C) = d[C]/dt</text>
            <text x="280" y="175" fontSize="11" fill="#f472b6" fontFamily="JetBrains Mono, monospace">v_D(A) = −d[A]/dt</text>
            <text x="280" y="189" fontSize="9.5" fill="#64748b" fontFamily="Inter, sans-serif">(mol·L⁻¹·s⁻¹)</text>
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
          <div className="p-4 space-y-3">
            {/* Loi de vitesse */}
            <div className="rounded-lg px-3 py-2.5" style={{ background: 'rgba(168,139,250,0.08)', border: '1px solid rgba(168,139,250,0.2)' }}>
              <div className="text-xs mb-1" style={{ color: '#94a3b8' }}>Loi de vitesse :</div>
              <div className="text-sm"><F e="v_{D(A)} = k\,[A]" /></div>
              <div className="text-xs mt-2 mb-1" style={{ color: '#94a3b8' }}>Équation différentielle :</div>
              <div className="text-sm"><F e="\dfrac{d[A]}{dt} + k\,[A] = 0" /></div>
            </div>
            {/* Solutions */}
            <div className="rounded-lg px-3 py-2.5 space-y-2" style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)' }}>
              <div className="text-sm"><F e="[A](t) = [A]_0\,e^{-kt}" /></div>
              <div className="text-sm"><F e="\ln[A](t) = \ln[A]_0 - k\,t" /></div>
            </div>
            {/* SVG — axes uniquement, zéro texte dans le SVG */}
            <svg viewBox="0 0 260 110" className="w-full" style={{ maxHeight: 110 }}>
              <defs>
                <marker id="arrowPurple" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L7,3 z" fill="#a78bfa" />
                </marker>
              </defs>
              <line x1="40" y1="95" x2="245" y2="95" stroke="#475569" strokeWidth="1.2" markerEnd="url(#arrowPurple)" />
              <line x1="40" y1="95" x2="40" y2="8" stroke="#475569" strokeWidth="1.2" markerEnd="url(#arrowPurple)" />
              {/* Point initial */}
              <circle cx="40" cy="15" r="3.5" fill="#fb923c" />
              {/* Droite pente -k */}
              <line x1="40" y1="15" x2="230" y2="90" stroke="#fb923c" strokeWidth="2" />
              {/* petit tiret à t=0 */}
              <line x1="36" y1="15" x2="44" y2="15" stroke="#94a3b8" strokeWidth="1" />
            </svg>
            {/* Labels KaTeX sous le SVG */}
            <div className="grid grid-cols-3 gap-1 text-xs -mt-1">
              <div style={{ color: '#a78bfa' }}>↑ <F e="\ln[A]" /></div>
              <div className="text-center" style={{ color: '#fb923c' }}>pente <F e="= -k" /></div>
              <div className="text-right" style={{ color: '#94a3b8' }}><F e="\ln[A]_0" /> en <F e="t=0" /></div>
            </div>
            <div className="text-xs" style={{ color: '#64748b' }}>
              Si <F e="\ln[A]" /> vs <F e="t" /> est une droite → ordre 1 confirmé
            </div>
          </div>
        </div>

        {/* ── Modélisation microscopique (Ch1 + Ch7 combinés) ────────────── */}
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.22)' }}>
          <div className="px-4 py-2.5" style={{ background: 'rgba(244,114,182,0.1)', borderBottom: '1px solid rgba(244,114,182,0.15)' }}>
            <span style={{ color: '#f472b6', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>⭐ MODÉLISATION MICROSCOPIQUE — Ch.1 &amp; Ch.7</span>
          </div>
          <div className="p-4 space-y-3">
            <div className="text-xs" style={{ color: '#94a3b8' }}>
              Mécanisme réactionnel = succession d'<strong style={{ color: '#f472b6' }}>actes élémentaires</strong> (chocs efficaces à l'échelle microscopique)
            </div>
            {/* Flèche courbe */}
            <div className="rounded-xl p-3" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.2)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#f472b6' }}>Flèche courbe = déplacement d'un doublet d'électrons</div>
              <svg viewBox="0 0 380 70" className="w-full" style={{ maxHeight: 70 }}>
                <defs>
                  <marker id="arrowPink" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#f472b6" />
                  </marker>
                </defs>
                {/* Site donneur */}
                <rect x="10" y="22" width="90" height="26" rx="9" fill="rgba(52,211,153,0.15)" stroke="#34d399" strokeWidth="1.5" />
                <text x="55" y="39" fontSize="12" fill="#34d399" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">X (D:)</text>
                <text x="55" y="15" fontSize="9" fill="#34d399" fontFamily="Inter" textAnchor="middle">Site donneur — δ⁻</text>
                <text x="55" y="60" fontSize="8.5" fill="#64748b" fontFamily="Inter" textAnchor="middle">doublet libre / liaison π</text>
                {/* Flèche courbe */}
                <path d="M102,33 Q188,5 218,33" fill="none" stroke="#f472b6" strokeWidth="2.2" markerEnd="url(#arrowPink)" />
                <text x="162" y="14" fontSize="10" fill="#f472b6" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">e⁻</text>
                {/* Site accepteur */}
                <rect x="220" y="22" width="90" height="26" rx="9" fill="rgba(248,113,113,0.15)" stroke="#f87171" strokeWidth="1.5" />
                <text x="265" y="39" fontSize="12" fill="#f87171" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">X' (A)</text>
                <text x="265" y="15" fontSize="9" fill="#f87171" fontFamily="Inter" textAnchor="middle">Site accepteur — δ⁺</text>
                <text x="265" y="60" fontSize="8.5" fill="#64748b" fontFamily="Inter" textAnchor="middle">lacune / charge ⊕</text>
                {/* Règle */}
                <text x="325" y="35" fontSize="10" fill="#fbbf24" fontFamily="Inter" fontWeight="600">D: → A</text>
                <text x="315" y="48" fontSize="8.5" fill="#64748b" fontFamily="Inter">riche → pauvre</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bloc 4 : Ch.7 Mécanisme réactionnel complet ───────────────────── */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(129,140,248,0.05)', border: '1px solid rgba(129,140,248,0.22)' }}>
        <div className="px-4 py-2.5 flex items-center justify-between" style={{ background: 'rgba(129,140,248,0.1)', borderBottom: '1px solid rgba(129,140,248,0.15)' }}>
          <span style={{ color: '#818cf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔗 Ch.7 — MÉCANISME RÉACTIONNEL : STRUCTURE</span>
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(129,140,248,0.15)', color: '#818cf8', border: '1px solid rgba(129,140,248,0.3)', fontFamily: 'JetBrains Mono, monospace' }}>Cinétique (suite)</span>
        </div>
        <div className="p-4 space-y-4">

          {/* Schéma flux mécanisme */}
          <svg viewBox="0 0 540 130" className="w-full" style={{ maxHeight: 130 }}>
            <defs>
              <marker id="arrowMech" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#818cf8" />
              </marker>
              <marker id="arrowCat" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#fbbf24" />
              </marker>
              <marker id="arrowIR" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#f472b6" />
              </marker>
            </defs>

            {/* Réactifs */}
            <rect x="5" y="45" width="75" height="36" rx="10" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="42" y="63" fontSize="11" fill="#38bdf8" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Réactifs</text>
            <text x="42" y="77" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="Inter">A + B</text>

            {/* AE1 */}
            <line x1="82" y1="63" x2="128" y2="63" stroke="#818cf8" strokeWidth="1.8" markerEnd="url(#arrowMech)" />
            <text x="105" y="57" fontSize="8.5" fill="#818cf8" textAnchor="middle" fontFamily="Inter">AE 1</text>

            {/* IR1 */}
            <rect x="130" y="45" width="75" height="36" rx="10" fill="rgba(244,114,182,0.12)" stroke="#f472b6" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="168" y="63" fontSize="10" fill="#f472b6" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">IR₁</text>
            <text x="168" y="76" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="Inter">intermédiaire</text>

            {/* AE2 */}
            <line x1="207" y1="63" x2="253" y2="63" stroke="#818cf8" strokeWidth="1.8" markerEnd="url(#arrowMech)" />
            <text x="230" y="57" fontSize="8.5" fill="#818cf8" textAnchor="middle" fontFamily="Inter">AE 2</text>

            {/* IR2 */}
            <rect x="255" y="45" width="75" height="36" rx="10" fill="rgba(244,114,182,0.12)" stroke="#f472b6" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="293" y="63" fontSize="10" fill="#f472b6" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">IR₂</text>
            <text x="293" y="76" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="Inter">intermédiaire</text>

            {/* AE3 */}
            <line x1="332" y1="63" x2="378" y2="63" stroke="#818cf8" strokeWidth="1.8" markerEnd="url(#arrowMech)" />
            <text x="355" y="57" fontSize="8.5" fill="#818cf8" textAnchor="middle" fontFamily="Inter">AE 3</text>

            {/* Produits */}
            <rect x="380" y="45" width="75" height="36" rx="10" fill="rgba(52,211,153,0.12)" stroke="#34d399" strokeWidth="1.5" />
            <text x="417" y="63" fontSize="11" fill="#34d399" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700">Produits</text>
            <text x="417" y="77" fontSize="9" fill="#64748b" textAnchor="middle" fontFamily="Inter">C + D</text>

            {/* Catalyseur (arc du dessus) */}
            <path d="M42,44 Q260,8 418,44" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrowCat)" />
            <text x="230" y="16" fontSize="9.5" fill="#fbbf24" textAnchor="middle" fontFamily="Inter" fontWeight="600">Catalyseur : consommé en AE1 → restitué en AE3</text>

            {/* Label IR disparaît du bilan */}
            <text x="230" y="112" fontSize="9" fill="#f472b6" textAnchor="middle" fontFamily="Inter">IR₁, IR₂ : formés puis détruits → absents du bilan global</text>
            <line x1="130" y1="100" x2="330" y2="100" stroke="rgba(244,114,182,0.3)" strokeWidth="1" strokeDasharray="3,3" />
          </svg>

          {/* Tableau sites D/A */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl p-3" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.22)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#34d399' }}>Sites DONNEURS (D:) — riches en e⁻</div>
              <div className="space-y-1 text-xs" style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
                <div>• Doublet non liant (O, N, halogènes)</div>
                <div>• Liaison π (C=C, C=O)</div>
                <div>• Charge négative / δ⁻</div>
              </div>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(248,113,113,0.07)', border: '1px solid rgba(248,113,113,0.22)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#f87171' }}>Sites ACCEPTEURS (A) — pauvres en e⁻</div>
              <div className="space-y-1 text-xs" style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
                <div>• Charge positive / δ⁺</div>
                <div>• Lacune électronique</div>
                <div>• Liaison C–X polarisée (X = O, N, Cl…)</div>
              </div>
            </div>
          </div>

          {/* Règle d'or + bilan */}
          <div className="rounded-xl p-3" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.22)' }}>
            <div className="text-xs font-semibold mb-2" style={{ color: '#fbbf24' }}>📜 Obtenir l'équation bilan depuis le mécanisme</div>
            <div className="text-xs space-y-1" style={{ color: '#94a3b8' }}>
              <div>1. Écrire toutes les équations des actes élémentaires AE1 + AE2 + AE3…</div>
              <div>2. Sommer membre à membre</div>
              <div>3. <strong style={{ color: '#f472b6' }}>Simplifier les IR</strong> (présents des deux côtés) et le <strong style={{ color: '#fbbf24' }}>catalyseur</strong></div>
              <div>4. Le résultat = équation bilan globale ✔</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}