import React, { useState } from 'react';
import { annales, chapterIdMap, niveauConfig } from './annalesData';

function ExerciseCard({ ex }) {
  return (
    <div className="py-2.5 px-3 rounded-lg flex flex-col gap-1" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium" style={{ color: '#e2e8f0' }}>{ex.titre_sujet}</div>
          <div className="text-xs mt-0.5" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
            {ex.session} — {ex.annee}
          </div>
          <div className="text-xs mt-1" style={{ color: '#94a3b8' }}>{ex.notions}</div>
        </div>
        <div className="flex gap-2 shrink-0 mt-1">
          <a
            href={ex.url_sujet}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all hover:opacity-80"
            style={{ background: 'rgba(200,144,47,0.15)', color: '#c8902f', border: '1px solid rgba(200,144,47,0.3)' }}
          >
            📄 Sujet
          </a>
          {ex.url_corrige && (
            <a
              href={ex.url_corrige}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all hover:opacity-80"
              style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)' }}
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

  // Trouver les exercices correspondant à ce chapitre
  const chapterExercises = annales.filter(ex => chapterIdMap[ex.chapitre_id] === chapter.id);

  const niveaux = ['N1', 'N2', 'N3', 'N4'];

  if (chapterExercises.length === 0) {
    return (
      <div className="text-center py-12" style={{ color: '#475569' }}>
        <div className="text-3xl mb-3">📭</div>
        <p className="text-sm">Aucun exercice disponible pour ce chapitre pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm mb-4" style={{ color: '#94a3b8' }}>
        {chapterExercises.length} exercice{chapterExercises.length > 1 ? 's' : ''} disponible{chapterExercises.length > 1 ? 's' : ''} — annales officielles Bac 2021-2026
      </p>
      {niveaux.map((niv) => {
        const exos = chapterExercises.filter(ex => ex.niveau === niv);
        if (exos.length === 0) return null;
        const cfg = niveauConfig[niv];
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
                <span style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color, borderRadius: '0.5rem', padding: '0.2rem 0.6rem', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>
                  {cfg.label}
                </span>
                <span style={{ color: cfg.color, fontSize: '0.875rem', fontWeight: 500 }}>{cfg.sublabel}</span>
                <span style={{ color: '#475569', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>({exos.length})</span>
              </div>
              <span style={{ color: '#64748b', transition: 'transform 0.2s', display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 space-y-2">
                {exos.map((ex, i) => <ExerciseCard key={i} ex={ex} />)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}