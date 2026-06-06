import React from 'react';
import Math from '../Math';

const F = ({ e }) => <Math expr={e} />;

// ─── Schéma Bilan Ch.6 : Synthèse organique — fidèle au manuel Hatier ────────
export default function SchemaCh6() {
  return (
    <div className="space-y-5">

      {/* ══ Bloc 1 : Familles fonctionnelles ════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(56,189,248,0.1)', borderBottom: '1px solid rgba(56,189,248,0.15)' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🧬 FAMILLES FONCTIONNELLES ORGANIQUES</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { famille: 'Halogénoalcane', groupe: 'C–X', detail: 'X : F, Cl, Br, I', color: '#f472b6' },
              { famille: 'Alcool', groupe: 'C–OH', detail: '-ol', color: '#38bdf8' },
              { famille: 'Aldéhyde', groupe: '–CHO', detail: '-al', color: '#fbbf24' },
              { famille: 'Cétone', groupe: '>C=O', detail: '-one', color: '#fb923c' },
              { famille: 'Acide carboxylique', groupe: '–COOH', detail: 'acide…-oïque', color: '#f87171' },
              { famille: 'Ester', groupe: '–COO–', detail: '…-oate de…yle', color: '#34d399' },
              { famille: 'Amine', groupe: 'C–N', detail: '-amine', color: '#a78bfa' },
              { famille: 'Amide', groupe: '–CONH–', detail: '-amide', color: '#818cf8' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-2.5" style={{ background: `${item.color}0d`, border: `1px solid ${item.color}30` }}>
                <div className="text-xs font-bold mb-1" style={{ color: item.color }}>{item.famille}</div>
                <div className="text-sm font-mono font-bold" style={{ color: '#e2e8f0' }}>{item.groupe}</div>
                <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Isomères de constitution ═══════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(168,139,250,0.1)', borderBottom: '1px solid rgba(168,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔀 STRUCTURE DE MOLÉCULES — ISOMÉRIES DE CONSTITUTION</span>
        </div>
        <div className="p-4">
          <div className="text-xs mb-3" style={{ color: '#94a3b8' }}>
            Même formule brute, formules développées <strong style={{ color: '#a78bfa' }}>différentes</strong>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { nom: 'Isomérie de squelette', desc: 'Chaînes carbonées différentes', ex: 'butane ↔ 2-méthylpropane', color: '#a78bfa' },
              { nom: 'Isomérie de position', desc: 'Même groupe, position différente sur la chaîne', ex: 'butan-1-ol ↔ butan-2-ol', color: '#38bdf8' },
              { nom: 'Isomérie de fonction', desc: 'Familles fonctionnelles différentes', ex: 'acide ↔ ester · alcool ↔ éther', color: '#34d399' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-3" style={{ background: `${item.color}08`, border: `1px solid ${item.color}28` }}>
                <div className="text-xs font-bold mb-1.5" style={{ color: item.color }}>{item.nom}</div>
                <div className="text-xs mb-1.5" style={{ color: '#94a3b8' }}>{item.desc}</div>
                <div className="text-xs font-mono" style={{ color: '#475569' }}>{item.ex}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ Bloc 3 : Stratégie de synthèse ══════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)' }}>
          <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🎯 STRATÉGIE DE SYNTHÈSE</span>
        </div>
        <div className="p-4 space-y-4">

          {/* Catégories de réactions */}
          <div>
            <div className="text-xs font-semibold mb-2" style={{ color: '#94a3b8' }}>Catégorie de réactions</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { nom: 'Addition', schema: 'A + B → C', color: '#38bdf8' },
                { nom: 'Élimination', schema: 'A → B + C', color: '#fbbf24' },
                { nom: 'Substitution', schema: 'AB + C → AC + B', color: '#f472b6' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl px-3 py-2.5 text-center" style={{ background: `${item.color}08`, border: `1px solid ${item.color}28` }}>
                  <div className="text-xs font-bold mb-1" style={{ color: item.color }}>{item.nom}</div>
                  <div className="text-xs font-mono" style={{ color: '#e2e8f0' }}>{item.schema}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Optimisation vitesse + rendement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl p-3" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: '#38bdf8' }}>↑ Vitesse</div>
              <div className="text-xs space-y-1" style={{ color: '#94a3b8' }}>
                <div>• Catalyseur</div>
                <div>• ↑ Chauffage (température)</div>
              </div>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: '#34d399' }}>↑ Rendement <F e="\eta = n_f/n_{\max}" /></div>
              <div className="text-xs space-y-1" style={{ color: '#94a3b8' }}>
                <div>• Excès de réactif</div>
                <div>• Extraction d'un produit</div>
              </div>
            </div>
          </div>

          {/* Protection / Déprotection */}
          <div className="rounded-xl p-3" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
            <div className="text-xs font-bold mb-2" style={{ color: '#fbbf24' }}>Protection / Déprotection de fonction</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="text-xs" style={{ color: '#94a3b8' }}>
                <span style={{ color: '#fbbf24' }}>Molécule A</span> : deux fonctions réactives F et G<br />
                → On protège G, puis on fait réagir uniquement F avec le réactif T<br />
                → On déprotège G ensuite
              </div>
              <div className="text-xs" style={{ color: '#94a3b8' }}>
                <span style={{ color: '#38bdf8' }}>Molécule B</span> : seule la fonction F subit l'action du réactif T<br />
                (la fonction G est protégée et ne réagit pas)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 4 : Polymérisation ═════════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(244,114,182,0.1)', borderBottom: '1px solid rgba(244,114,182,0.15)' }}>
          <span style={{ color: '#f472b6', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔗 POLYMÉRISATION</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="text-xs" style={{ color: '#94a3b8' }}>
            Macromolécule = association en chaîne d'un grand nombre de <strong style={{ color: '#f472b6' }}>monomères</strong>
          </div>
          {/* Exemple chlorure de vinyle */}
          <div className="rounded-xl p-3" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.2)' }}>
            <div className="text-xs font-bold mb-2" style={{ color: '#f472b6' }}>Exemple : Chlorure de vinyle → PVC</div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="text-xs font-mono" style={{ color: '#e2e8f0' }}>
                <span style={{ color: '#38bdf8' }}>n</span> CH₂=CHCl
              </div>
              <div style={{ color: '#fbbf24' }}>→</div>
              <div className="text-xs font-mono" style={{ color: '#e2e8f0' }}>
                (–CH₂–CHCl–)<span style={{ color: '#38bdf8', verticalAlign: 'sub', fontSize: '0.7em' }}>n</span>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <div className="text-xs" style={{ color: '#64748b' }}>Monomère : <span style={{ color: '#38bdf8' }}>chlorure de vinyle</span></div>
              <div className="text-xs" style={{ color: '#64748b' }}>Motif : <span style={{ color: '#f472b6' }}>–CH₂–CHCl–</span></div>
              <div className="text-xs" style={{ color: '#64748b' }}>Polymère : <span style={{ color: '#a78bfa' }}>PVC</span></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}