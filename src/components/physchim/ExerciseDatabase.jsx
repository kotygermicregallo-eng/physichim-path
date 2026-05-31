import React, { useState } from 'react';
import { getAnnalesForChapter, NIVEAU_LABELS } from './annalesData';

function ExerciseCard({ ex }) {
  return (
    <div className="py-2.5 border-b last:border-0" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium" style={{ color: '#e2e8f0' }}>{ex.titre_sujet}</div>
          <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{ex.session} — {ex.annee}</div>
          <div className="text-xs mt-1" style={{ color: '#94a3b8' }}>{ex.notions}</div>
        </div>
        <div className="flex gap-2 shrink-0 mt-0.5">
          {ex.url_sujet && (
            <a
              href={ex.url_sujet}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all"
              style={{ background: 'rgba(200,144,47,0.15)', color: '#c8902f', border: '1px solid rgba(200,144,47,0.3)' }}
            >
              📄 Sujet
            </a>
          )}
          {ex.url_corrige && (
            <a
              href={ex.url_corrige}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all"
              style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)' }}
            >
              ✅ Corrigé
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExerciseDatabase({ chapter }) {
  const [openLevel, setOpenLevel] = useState(null);
  const annales = getAnnalesForChapter(chapter.id);

  const niveaux = ['N1', 'N2', 'N3', 'N4'];

  return (
    <div className="space-y-3">
      <p className="text-sm" style={{ color: '#94a3b8' }}>
        Exercices de bac classés par niveau de difficulté. Cliquez sur un niveau pour afficher les sujets.
      </p>
      {niveaux.map((niv) => {
        const cfg = NIVEAU_LABELS[niv];
        const items = annales.filter(a => a.niveau === niv);
        if (items.length === 0) return null;
        const isOpen = openLevel === niv;
        return (
          <div
            key={niv}
            style={{
              background: isOpen ? cfg.bg : 'rgba(255,255,255,0.04)',
              border: `1px solid ${isOpen ? cfg.border : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '0.75rem',
              overflow: 'hidden',
              transition: 'all 0.2s ease'
            }}
          >
            <button
              className="w-full text-left px-4 py-3 flex items-center justify-between"
              onClick={() => setOpenLevel(isOpen ? null : niv)}
            >
              <div className="flex items-center gap-3">
                <span
                  style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color, borderRadius: '0.5rem', padding: '0.2rem 0.6rem', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {cfg.label}
                </span>
                <span style={{ color: cfg.color, fontSize: '0.875rem', fontWeight: 500 }}>{cfg.sublabel}</span>
                <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', color: '#64748b' }}>{items.length} exercice{items.length > 1 ? 's' : ''}</span>
              </div>
              <span style={{ color: '#64748b', transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
            </button>
            {isOpen && (
              <div className="px-4 pb-3">
                {items.map((ex, i) => <ExerciseCard key={i} ex={ex} />)}
              </div>
            )}
          </div>
        );
      })}
      {annales.length === 0 && (
        <div className="text-center py-8" style={{ color: '#475569' }}>
          <p className="text-sm">Aucun exercice disponible pour ce chapitre.</p>
        </div>
      )}
    </div>
  );
}