import React from 'react';

function FormulaCard({ formula }) {
  return (
    <div className="formula-block mb-3">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="text-xs mb-1" style={{ color: '#94a3b8' }}>{formula.name}</div>
          <div className="text-lg font-semibold" style={{ color: '#38bdf8' }}>{formula.expr}</div>
        </div>
        {formula.desc && (
          <div className="text-xs mt-1" style={{ color: '#64748b', fontFamily: 'Inter, sans-serif', maxWidth: '200px' }}>{formula.desc}</div>
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
                <span className="text-xs font-bold shrink-0 mt-0.5" style={{ color: '#f472b6', fontFamily: 'JetBrains Mono, monospace' }}>D{i + 1}</span>
                <p className="text-sm" style={{ color: '#cbd5e1' }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schemas */}
      {chapter.schemas && chapter.schemas.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: chapter.color }}>
            <span>📊</span> Schémas / Représentations
          </h3>
          <div className="space-y-3">
            {chapter.schemas.map((s, i) => (
              <div key={i} className="schema-box">{s}</div>
            ))}
          </div>
        </section>
      )}

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
                <p className="text-sm" style={{ color: '#e2e8f0' }}>{t}</p>
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
                <span className="text-sm font-medium" style={{ color: '#e2e8f0' }}>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Extras (méthodes, exemples, compléments) */}
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