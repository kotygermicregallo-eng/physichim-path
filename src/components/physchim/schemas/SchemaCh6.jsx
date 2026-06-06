import React from 'react';
import Math from '../Math';

const F = ({ e }) => <Math expr={e} />;

// ─── Schéma Bilan Ch.6 : Stratégie en synthèse organique ─────────────────────
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
              { famille: 'Halogénoalcane', groupe: 'C–X', suffixe: '–o-halogéno', color: '#f472b6', ex: 'X = F, Cl, Br, I' },
              { famille: 'Alcool', groupe: 'C–OH', suffixe: '-ol', color: '#38bdf8', ex: 'éthanol' },
              { famille: 'Aldéhyde', groupe: '–CHO', suffixe: '-al', color: '#fbbf24', ex: 'éthanal' },
              { famille: 'Cétone', groupe: '>C=O', suffixe: '-one', color: '#fb923c', ex: 'propanone' },
              { famille: 'Acide carboxylique', groupe: '–COOH', suffixe: 'acide…-oïque', color: '#f87171', ex: 'acide éthanoïque' },
              { famille: 'Ester', groupe: '–COO–', suffixe: '…-oate de…yle', color: '#34d399', ex: 'éthanoate d\'éthyle' },
              { famille: 'Amine', groupe: 'C–N', suffixe: '-amine', color: '#a78bfa', ex: 'méthylamine' },
              { famille: 'Amide', groupe: '–CONH–', suffixe: '-amide', color: '#818cf8', ex: 'éthanamide' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-2.5" style={{ background: `${item.color}0d`, border: `1px solid ${item.color}30` }}>
                <div className="text-xs font-semibold mb-0.5" style={{ color: item.color }}>{item.famille}</div>
                <div className="text-xs font-mono mb-0.5" style={{ color: '#e2e8f0' }}>{item.groupe}</div>
                <div className="text-xs" style={{ color: '#64748b' }}>{item.suffixe}</div>
                <div className="text-xs mt-0.5" style={{ color: '#475569' }}>{item.ex}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ Bloc 2 : Nomenclature IUPAC ═════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(251,191,36,0.1)', borderBottom: '1px solid rgba(251,191,36,0.15)' }}>
          <span style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>📛 NOMENCLATURE IUPAC</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="rounded-xl px-4 py-3 text-center" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
            <div className="text-sm font-mono" style={{ color: '#fbbf24' }}>
              <span style={{ color: '#f472b6' }}>préfixe(s)</span> + <span style={{ color: '#fbbf24' }}>racine</span> + <span style={{ color: '#38bdf8' }}>suffixe</span>
            </div>
            <div className="text-xs mt-2" style={{ color: '#64748b' }}>
              ex : 4-éthyl-3,4-diméthylhexanoate d'éthyle
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-xl p-3" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.2)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#f472b6' }}>Préfixe(s)</div>
              <div className="text-xs space-y-0.5" style={{ color: '#94a3b8' }}>
                <div>Indique les substituants</div>
                <div>+ numéro de position</div>
                <div>ex : 4-éthyl-, 3-méthyl-</div>
              </div>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#fbbf24' }}>Racine</div>
              <div className="text-xs space-y-0.5" style={{ color: '#94a3b8' }}>
                <div>Nombre C chaîne principale</div>
                <div>1→méth · 2→éth · 3→prop</div>
                <div>4→but · 5→pent · 6→hex…</div>
              </div>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="text-xs font-semibold mb-1.5" style={{ color: '#38bdf8' }}>Suffixe</div>
              <div className="text-xs space-y-0.5" style={{ color: '#94a3b8' }}>
                <div>Famille fonctionnelle prioritaire</div>
                <div>-ol · -al · -one · -oïque</div>
                <div>-oate de -yle · -amine</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 3 : Isomères ════════════════════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(168,139,250,0.05)', border: '1px solid rgba(168,139,250,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(168,139,250,0.1)', borderBottom: '1px solid rgba(168,139,250,0.15)' }}>
          <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🔀 ISOMÉRIES DE CONSTITUTION</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { nom: 'Isomérie de squelette', desc: 'Même formule brute, chaînes carbonées différentes', color: '#a78bfa', ex: 'butane vs 2-méthylpropane' },
              { nom: 'Isomérie de position', desc: 'Même groupe fonctionnel, position différente sur la chaîne', color: '#38bdf8', ex: 'butan-1-ol vs butan-2-ol' },
              { nom: 'Isomérie de fonction', desc: 'Même formule brute, familles fonctionnelles différentes', color: '#34d399', ex: 'acide vs ester · alcool vs éther' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-3" style={{ background: `${item.color}08`, border: `1px solid ${item.color}28` }}>
                <div className="text-xs font-semibold mb-1.5" style={{ color: item.color }}>{item.nom}</div>
                <div className="text-xs mb-1.5" style={{ color: '#94a3b8' }}>{item.desc}</div>
                <div className="text-xs" style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>{item.ex}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl px-3 py-2 mt-3" style={{ background: 'rgba(167,139,250,0.07)', border: '1px solid rgba(167,139,250,0.2)' }}>
            <div className="text-xs" style={{ color: '#94a3b8' }}>
              Isomères de constitution = <strong style={{ color: '#a78bfa' }}>même formule brute</strong>, formules développées différentes
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 4 : Stratégie de synthèse ══════════════════════════════════ */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.22)' }}>
        <div className="px-4 py-2.5" style={{ background: 'rgba(52,211,153,0.1)', borderBottom: '1px solid rgba(52,211,153,0.15)' }}>
          <span style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>🎯 STRATÉGIE DE SYNTHÈSE</span>
        </div>
        <div className="p-4 space-y-4">

          {/* Catégories de réactions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { nom: 'Addition', schema: 'A + B → C', desc: 'Deux réactifs → un produit', color: '#38bdf8' },
              { nom: 'Élimination', schema: 'A → B + C', desc: 'Un réactif → deux produits', color: '#fbbf24' },
              { nom: 'Substitution', schema: 'AB + C → AC + B', desc: 'Échange d\'un groupe', color: '#f472b6' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-3" style={{ background: `${item.color}08`, border: `1px solid ${item.color}28` }}>
                <div className="text-xs font-semibold mb-1" style={{ color: item.color }}>{item.nom}</div>
                <div className="text-xs font-mono mb-1" style={{ color: '#e2e8f0' }}>{item.schema}</div>
                <div className="text-xs" style={{ color: '#64748b' }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Optimisation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-xl p-3" style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#38bdf8' }}>↑ Vitesse</div>
              <div className="text-xs space-y-1" style={{ color: '#94a3b8' }}>
                <div>• Catalyseur (abaisse Ea)</div>
                <div>• ↑ Température</div>
                <div>• ↑ Concentration des réactifs</div>
              </div>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#34d399' }}>↑ Rendement <F e="\eta = n_f/n_{\max}" /></div>
              <div className="text-xs space-y-1" style={{ color: '#94a3b8' }}>
                <div>• Excès d'un réactif</div>
                <div>• Élimination d'un produit au fur et à mesure</div>
                <div>• Extraction du produit formé</div>
              </div>
            </div>
          </div>

          {/* Protection/déprotection */}
          <div className="rounded-xl p-3" style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.2)' }}>
            <div className="text-xs font-semibold mb-2" style={{ color: '#fbbf24' }}>Protection / Déprotection</div>
            <div className="text-xs" style={{ color: '#94a3b8' }}>
              Quand une molécule a <strong style={{ color: '#fbbf24' }}>deux groupes fonctionnels</strong>, on protège temporairement l'un d'eux pour ne faire réagir que l'autre, puis on déprotège.
            </div>
          </div>
        </div>
      </div>

      {/* ══ Bloc 5 : Polymérisation ═════════════════════════════════════════ */}
      <div className="rounded-2xl p-4" style={{ background: 'rgba(244,114,182,0.05)', border: '1px solid rgba(244,114,182,0.2)' }}>
        <div className="text-xs font-semibold mb-3" style={{ color: '#f472b6', fontFamily: 'JetBrains Mono, monospace' }}>🔗 POLYMÉRISATION</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-xl p-3" style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.2)' }}>
            <div className="text-xs font-semibold mb-1.5" style={{ color: '#f472b6' }}>Polymère d'addition</div>
            <div className="text-xs space-y-1" style={{ color: '#94a3b8' }}>
              <div>Monomère avec liaison <F e="\text{C}{=}\text{C}" /> (vinyl, acrylo…)</div>
              <div><F e="n\,(\text{CH}_2{=}\text{CH}_2) \rightarrow (-\text{CH}_2{-}\text{CH}_2-)_n" /></div>
              <div className="text-xs mt-1" style={{ color: '#475569' }}>ex : polyéthylène, PVC, polystyrène</div>
            </div>
          </div>
          <div className="rounded-xl p-3" style={{ background: 'rgba(168,139,250,0.07)', border: '1px solid rgba(168,139,250,0.2)' }}>
            <div className="text-xs font-semibold mb-1.5" style={{ color: '#a78bfa' }}>Polymère de condensation</div>
            <div className="text-xs space-y-1" style={{ color: '#94a3b8' }}>
              <div>Monomères avec deux fonctions réactives (diacide + diamine, diacide + diol)</div>
              <div className="text-xs mt-1" style={{ color: '#475569' }}>ex : polyamides (nylon), polyesters</div>
              <div>Réaction avec élimination d'une petite molécule (<F e="\text{H}_2\text{O}" />)</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}