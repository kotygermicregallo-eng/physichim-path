import React, { useState } from 'react';
import { annales, NIVEAU_LABELS } from './annalesData';

// Regroupe les annales par chapitre_id
function groupByChapter() {
  const map = {};
  annales.forEach(ex => {
    if (!map[ex.chapitre_id]) {
      map[ex.chapitre_id] = { chapitre_id: ex.chapitre_id, chapitre_titre: ex.chapitre_titre, items: [] };
    }
    map[ex.chapitre_id].items.push(ex);
  });
  return Object.values(map);
}

// Icônes par chapitre
const ICONS = {
  CH1: '🧪', CH2: '🔬', CH3: '⏱️', CH4: '🔗', CH5: '⚖️',
  CH6: '🔋', CH7: '⚡', CH8: '🧫', CH9: '📍', 'CH10-Fluides': '🌊',
  CH11: '🪂', CH12: '🛸', CH13: '⚙️', CH14: '🔥', CH15: '🎵',
  CH16: '💡', CH17: '🔌', CH18: '☢️', CH19: '🌟',
};

function ExerciseRow({ ex }) {
  const niv = NIVEAU_LABELS[ex.niveau] || NIVEAU_LABELS.N1;
  return (
    <div className="flex items-start justify-between gap-3 py-2.5 border-b last:border-0" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span style={{ background: niv.bg, border: `1px solid ${niv.border}`, color: niv.color, borderRadius: '0.4rem', padding: '0.1rem 0.5rem', fontSize: '0.7rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap' }}>
            {niv.label}
          </span>
          <span className="text-sm font-medium" style={{ color: '#e2e8f0' }}>{ex.titre_sujet}</span>
        </div>
        <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{ex.session} — {ex.annee}</div>
        <div className="text-xs mt-0.5" style={{ color: '#78716c' }}>{ex.notions}</div>
      </div>
      <div className="flex gap-2 shrink-0">
        {ex.url_sujet && (
          <a href={ex.url_sujet} target="_blank" rel="noopener noreferrer"
            className="text-xs px-2 py-1 rounded-lg"
            style={{ background: 'rgba(200,144,47,0.15)', color: '#c8902f', border: '1px solid rgba(200,144,47,0.3)' }}>
            📄 Sujet
          </a>
        )}
        {ex.url_corrige && (
          <a href={ex.url_corrige} target="_blank" rel="noopener noreferrer"
            className="text-xs px-2 py-1 rounded-lg"
            style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)' }}>
            ✅ Corrigé
          </a>
        )}
      </div>
    </div>
  );
}

export default function BacEntrainement() {
  const [openChapter, setOpenChapter] = useState(null);
  const chapters = groupByChapter();

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="glass rounded-2xl p-6" style={{ border: '1px solid rgba(200,144,47,0.18)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#e7dcc8', fontFamily: 'Fraunces, serif' }}>
          🎯 Bac Entraînement
        </h2>
        <p className="text-sm" style={{ color: '#78716c' }}>
          {annales.length} exercices de bac classés par chapitre — cliquez pour dérouler les sujets disponibles.
        </p>
        <div className="flex gap-3 mt-3 flex-wrap">
          {Object.entries(NIVEAU_LABELS).map(([k, v]) => (
            <span key={k} className="text-xs px-2 py-1 rounded-lg" style={{ background: v.bg, color: v.color, border: `1px solid ${v.border}` }}>
              {v.label} — {v.sublabel}
            </span>
          ))}
        </div>
      </div>

      {/* Chapters */}
      <div className="space-y-2">
        {chapters.map((ch) => {
          const isOpen = openChapter === ch.chapitre_id;
          const icon = ICONS[ch.chapitre_id] || '📚';
          const n1 = ch.items.filter(i => i.niveau === 'N1').length;
          const n2 = ch.items.filter(i => i.niveau === 'N2').length;
          const n3 = ch.items.filter(i => i.niveau === 'N3').length;
          const n4 = ch.items.filter(i => i.niveau === 'N4').length;

          return (
            <div key={ch.chapitre_id}
              style={{
                background: isOpen ? 'rgba(200,144,47,0.05)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${isOpen ? 'rgba(200,144,47,0.3)' : 'rgba(200,144,47,0.1)'}`,
                borderRadius: '0.875rem',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              <button
                className="w-full text-left px-5 py-4 flex items-center gap-4"
                onClick={() => setOpenChapter(isOpen ? null : ch.chapitre_id)}
              >
                <span className="text-xl shrink-0">{icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate" style={{ color: isOpen ? '#c8902f' : '#e2e8f0', fontFamily: 'Fraunces, serif' }}>
                    {ch.chapitre_titre}
                  </div>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {n1 > 0 && <span className="text-xs" style={{ color: '#34d399' }}>N1×{n1}</span>}
                    {n2 > 0 && <span className="text-xs" style={{ color: '#38bdf8' }}>N2×{n2}</span>}
                    {n3 > 0 && <span className="text-xs" style={{ color: '#a78bfa' }}>N3×{n3}</span>}
                    {n4 > 0 && <span className="text-xs" style={{ color: '#fbbf24' }}>N4×{n4}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(200,144,47,0.1)', color: '#c8902f', fontFamily: 'JetBrains Mono' }}>
                    {ch.items.length} sujets
                  </span>
                  <span style={{ color: '#64748b', transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
                </div>
              </button>
              {isOpen && (
                <div className="px-5 pb-4">
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
                    {ch.items.map((ex, i) => <ExerciseRow key={i} ex={ex} />)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}