import React from 'react';
import Math from './Math';
import SchemaBlock from './SchemaBlock';
import SchemaCh1 from './schemas/SchemaCh1';
import SchemaCh3 from './schemas/SchemaCh3';
import SchemaCh4 from './schemas/SchemaCh4';
import SchemaCh5 from './schemas/SchemaCh5';
import SchemaCh6 from './schemas/SchemaCh6';
import SchemaCh7 from './schemas/SchemaCh7';
import SchemaCh8 from './schemas/SchemaCh8';
import SchemaCh10 from './schemas/SchemaCh10';
import SchemaCh11 from './schemas/SchemaCh11';
import SchemaCh12 from './schemas/SchemaCh12';
import SchemaCh13 from './schemas/SchemaCh13';
import SchemaCh16 from './schemas/SchemaCh16';
import SchemaCh17 from './schemas/SchemaCh17';
import SchemaCh19 from './schemas/SchemaCh19';
import Anim3DBlock, { hasAnim3D } from '../three/Anim3DBlock';
import BacPile from './schemas/bac/BacPile';
import BacElectrolyse from './schemas/bac/BacElectrolyse';
import BacFluides from './schemas/bac/BacFluides';
import BacOndes from './schemas/bac/BacOndes';
import BacLunette from './schemas/bac/BacLunette';
import BacRC from './schemas/bac/BacRC';

// Schémas précis "type sujet Bac" par chapitre
const BAC_SCHEMAS = {
  2: { C: BacPile, title: 'Pile électrochimique — schéma type sujet Bac' },
  9: { C: BacElectrolyse, title: 'Électrolyse — schéma type sujet Bac' },
  14: { C: BacFluides, title: 'Venturi & Torricelli — schémas type sujet Bac' },
  17: { C: BacOndes, title: 'Diffraction & interférences — montages laser type Bac' },
  18: { C: BacLunette, title: 'Lunette astronomique afocale — schéma type sujet Bac' },
  20: { C: BacRC, title: 'Circuit RC — schéma type sujet Bac' },
};

// Map des schémas enrichis par chapitre
// Pour les ch. 2, 9, 14, 18, 20 le schéma type Bac (plus complet) remplace le schéma bilan (fusion des doublons)
const RICH_SCHEMAS = {
  1: SchemaCh1,
  3: SchemaCh3,
  4: SchemaCh4,
  5: SchemaCh5,
  6: SchemaCh6,
  7: SchemaCh7,
  8: SchemaCh8,
  10: SchemaCh10,
  11: SchemaCh11,
  12: SchemaCh12,
  13: SchemaCh13,
  16: SchemaCh16,
  17: SchemaCh17,
  19: SchemaCh19,
};

// Renders text with inline LaTeX: wrap expressions between $ signs
function InlineMath({ text }) {
  if (!text || !text.includes('$')) return <span>{text}</span>;
  const parts = text.split(/(\$[^$]+\$)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          return <Math key={i} expr={part.slice(1, -1)} />;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

function FormulaCard({ formula }) {
  return (
    <div className="formula-block mb-3">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex-1">
          <div className="text-xs mb-2" style={{ color: '#94a3b8' }}>{formula.name}</div>
          <div className="text-base" style={{ color: '#4fd1c5' }}>
            <InlineMath text={formula.expr} />
          </div>
        </div>
        {formula.desc && (
          <div className="text-xs mt-1" style={{ color: '#64748b', fontFamily: 'Inter, sans-serif', maxWidth: '220px' }}>
            <InlineMath text={formula.desc} />
          </div>
        )}
      </div>
    </div>
  );
}

function ExtraBlock({ extra }) {
  const isCode = extra.content.includes('import ') || extra.content.includes('for i in') || extra.content.includes('plt.');
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span className="text-xs font-semibold" style={{ color: '#a78bfa' }}>⊕ {extra.title}</span>
      </div>
      <div className="p-4">
        {isCode ? (
          <pre className="schema-box text-xs leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>{extra.content}</pre>
        ) : (
          <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#cbd5e1', fontFamily: extra.content.includes('\n') ? 'JetBrains Mono, monospace' : 'Inter, sans-serif', fontSize: extra.content.includes('\n') ? '0.78rem' : '0.875rem' }}>{extra.content}</p>
        )}
      </div>
    </div>
  );
}

export default function ChapterContent({ chapter }) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Definition */}
      <section>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: chapter.color }}>
          <span>📖</span> Définition
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>{chapter.definition}</p>
      </section>

      {/* Formulas */}
      <section>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: chapter.color }}>
          <span>📐</span> Formules essentielles
        </h3>
        <div className="grid gap-3">
          {chapter.formulas.map((f, i) => <FormulaCard key={i} formula={f} />)}
        </div>
      </section>

      {/* Demonstrations */}
      <section>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: chapter.color }}>
          <span>✏️</span> Démonstrations à maîtriser
        </h3>
        <div className="space-y-3">
          {chapter.demonstrations.map((d, i) => (
            <div key={i} className="demo-block">
              <div className="flex gap-3">
                <span className="text-xs font-bold shrink-0 mt-0.5" style={{ color: '#ee7f9d', fontFamily: 'JetBrains Mono, monospace' }}>D{i + 1}</span>
                <p className="text-sm" style={{ color: '#cbd5e1' }}><InlineMath text={d} /></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schemas */}
      <section>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: chapter.color }}>
          <span>📊</span> Schémas / Représentations
        </h3>
        {/* Animation 3D interactive (si disponible) */}
        {hasAnim3D(chapter.id) && <Anim3DBlock chapterId={chapter.id} />}
        {/* Schéma type sujet Bac (si disponible) */}
        {BAC_SCHEMAS[chapter.id] && (
          <div className="mb-4">
            <div className="text-xs font-semibold mb-2 px-1" style={{ color: '#fbbf24', fontFamily: 'JetBrains Mono, monospace' }}>
              🎯 {BAC_SCHEMAS[chapter.id].title}
            </div>
            {React.createElement(BAC_SCHEMAS[chapter.id].C)}
          </div>
        )}
        {/* Schéma enrichi bilan (si disponible) */}
        {RICH_SCHEMAS[chapter.id] && (
          <div className="mb-4">
            <div className="text-xs font-semibold mb-2 px-1" style={{ color: '#4fd1c5', fontFamily: 'JetBrains Mono, monospace' }}>
              📖 Schéma bilan — essentiel
            </div>
            {React.createElement(RICH_SCHEMAS[chapter.id])}
          </div>
        )}
        {/* Schémas classiques (tableaux/mermaid) */}
        {chapter.schemas && chapter.schemas.length > 0 && (
          <div className="space-y-4 mt-4">
            {chapter.schemas.map((s, i) => (
              <SchemaBlock key={i} schema={s} />
            ))}
          </div>
        )}
      </section>

      {/* Tips */}
      <section>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: chapter.color }}>
          <span>💡</span> Astuces pour l'examen
        </h3>
        <div className="space-y-3">
          {chapter.tips.map((t, i) => (
            <div key={i} className="tip-block">
              <div className="flex gap-3">
                <span className="text-base shrink-0">💡</span>
                <p className="text-sm" style={{ color: '#e2e8f0' }}><InlineMath text={t} /></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Remember */}
      <section>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: chapter.color }}>
          <span>🧠</span> À retenir absolument
        </h3>
        <div className="remember-block">
          <ul className="space-y-3">
            {chapter.remember.map((r, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(52,211,153,0.2)', color: '#34d399' }}>{i + 1}</span>
                <span className="text-sm font-medium" style={{ color: '#e2e8f0' }}><InlineMath text={r} /></span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Extras */}
      {chapter.extras && chapter.extras.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: chapter.color }}>
            <span>📌</span> Compléments & Méthodes
          </h3>
          <div className="space-y-3">
            {chapter.extras.map((extra, i) => <ExtraBlock key={i} extra={extra} />)}
          </div>
        </section>
      )}
    </div>
  );
}