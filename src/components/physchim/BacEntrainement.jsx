import React, { useState } from 'react';
import { annales, niveauConfig } from './annalesData';

// Regrouper les annales par chapitre_titre
function groupByChapter(data) {
  const map = {};
  data.forEach(ex => {
    if (!map[ex.chapitre_id]) {
      map[ex.chapitre_id] = { id: ex.chapitre_id, titre: ex.chapitre_titre, exercices: [] };
    }
    map[ex.chapitre_id].exercices.push(ex);
  });
  return Object.values(map).sort((a, b) => {
    const numA = parseInt(a.id.replace(/\D/g, '')) || 999;
    const numB = parseInt(b.id.replace(/\D/g, '')) || 999;
    return numA - numB;
  });
}

const chapterIcons = {
  CH1: "🧪", CH2: "🔬", CH3: "⏱️", CH4: "🔗", CH5: "⚖️",
  CH6: "🔋", CH7: "⚡", CH8: "🧫", CH9: "📍", "CH10-Fluides": "🌊",
  CH11: "🪂", CH12: "🛸", CH13: "🍎", CH14: "🔥", CH15: "🎵",
  CH16: "💡", CH17: "🔌", CH18: "☢️", CH19: "🌟",
};

function ExerciseRow({ ex }) {
  return (
    <div className="py-2 px-3 rounded-lg flex items-start justify-between gap-3 flex-wrap" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span style={{
            fontSize: '0.65rem', fontWeight: 700, padding: '0.1rem 0.4rem', borderRadius: '0.3rem',
            background: niveauConfig[ex.niveau]?.bg, color: niveauConfig[ex.niveau]?.color,
            border: `1px solid ${niveauConfig[ex.niveau]?.border}`, fontFamily: 'JetBrains Mono, monospace'
          }}>
            {ex.niveau}
          </span>
          <span className="text-sm font-medium" style={{ color: '#e2e8f0' }}>{ex.titre_sujet}</span>
        </div>
        <div className="text-xs mt-0.5" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
          {ex.session} — {ex.annee}
        </div>
        <div className="text-xs mt-0.5" style={{ color: '#94a3b8' }}>{ex.notions}</div>
      </div>
      <div className="flex gap-2 shrink-0">
        <a href={ex.url_sujet} target="_blank" rel="noopener noreferrer"
          className="text-xs px-2.5 py-1 rounded-lg font-medium hover:opacity-80 transition-opacity"
          style={{ background: 'rgba(34,211,238,0.15)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.3)' }}>
          📄 Sujet
        </a>
        {ex.url_corrige && (
          <a href={ex.url_corrige} target="_blank" rel="noopener noreferrer"
            className="text-xs px-2.5 py-1 rounded-lg font-medium hover:opacity-80 transition-opacity"
            style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)' }}>
            ✅ Corrigé
          </a>
        )}
      </div>
    </div>
  );
}

export default function BacEntrainement() {
  const [openChapter, setOpenChapter] = useState(null);
  const [filterNiveau, setFilterNiveau] = useState('all');

  const chapters = groupByChapter(annales);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="glass rounded-2xl p-6 mb-6" style={{ border: '1px solid rgba(34,211,238,0.18)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#e2e8f0', fontFamily: 'Space Grotesk, sans-serif' }}>
          🎯 Bac Entraînement
        </h2>
        <p className="text-sm" style={{ color: '#94a3b8' }}>
          {annales.length} exercices issus des annales officielles Bac 2021–2026, organisés par chapitre.
        </p>

        {/* Filtre niveau */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {['all', 'N1', 'N2', 'N3', 'N4'].map(n => (
            <button
              key={n}
              onClick={() => setFilterNiveau(n)}
              className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
              style={{
                background: filterNiveau === n ? 'rgba(34,211,238,0.2)' : 'rgba(255,255,255,0.05)',
                color: filterNiveau === n ? '#22d3ee' : '#64748b',
                border: filterNiveau === n ? '1px solid rgba(34,211,238,0.4)' : '1px solid rgba(255,255,255,0.08)',
                fontFamily: 'JetBrains Mono, monospace'
              }}
            >
              {n === 'all' ? 'Tous niveaux' : niveauConfig[n]?.label}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des chapitres */}
      {chapters.map(ch => {
        const exos = filterNiveau === 'all' ? ch.exercices : ch.exercices.filter(e => e.niveau === filterNiveau);
        if (exos.length === 0) return null;
        const isOpen = openChapter === ch.id;
        return (
          <div
            key={ch.id}
            style={{
              background: isOpen ? 'rgba(34,211,238,0.06)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${isOpen ? 'rgba(34,211,238,0.28)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '0.875rem',
              overflow: 'hidden',
              transition: 'all 0.2s ease'
            }}
          >
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
              onClick={() => setOpenChapter(isOpen ? null : ch.id)}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xl shrink-0">{chapterIcons[ch.id] || '📚'}</span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate" style={{ color: isOpen ? '#22d3ee' : '#e2e8f0' }}>
                    {ch.titre}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>
                    {exos.length} exercice{exos.length > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {/* Badges niveaux disponibles */}
                <div className="hidden sm:flex gap-1">
                  {['N1','N2','N3','N4'].filter(n => ch.exercices.some(e => e.niveau === n)).map(n => (
                    <span key={n} style={{ fontSize: '0.6rem', padding: '0.1rem 0.35rem', borderRadius: '0.25rem', background: niveauConfig[n]?.bg, color: niveauConfig[n]?.color, border: `1px solid ${niveauConfig[n]?.border}`, fontFamily: 'JetBrains Mono' }}>
                      {n}
                    </span>
                  ))}
                </div>
                <span style={{ color: '#64748b', transition: 'transform 0.2s', display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
              </div>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 space-y-2">
                {exos.map((ex, i) => <ExerciseRow key={i} ex={ex} />)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}