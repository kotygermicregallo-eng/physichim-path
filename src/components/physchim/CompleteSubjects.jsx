import React, { useState } from 'react';
import { annales } from './annalesData';

// Regrouper par url_sujet unique → un sujet complet = un PDF
function groupBySubject(data) {
  const map = {};
  data.forEach(ex => {
    if (!ex.url_sujet) return;
    const key = ex.url_sujet;
    if (!map[key]) {
      map[key] = {
        url_sujet: ex.url_sujet,
        url_corrige: ex.url_corrige,
        session: ex.session.replace(/\s*—\s*Exo.*$/, '').trim(),
        annee: ex.annee,
        exercices: [],
      };
    }
    // Mettre à jour le corrigé si disponible
    if (ex.url_corrige && !map[key].url_corrige) {
      map[key].url_corrige = ex.url_corrige;
    }
    map[key].exercices.push(ex);
  });

  return Object.values(map)
    .filter(s => s.exercices.length >= 2) // sujets complets = au moins 2 exercices liés
    .sort((a, b) => String(b.annee).localeCompare(String(a.annee)));
}

export default function CompleteSubjects() {
  const [openSubject, setOpenSubject] = useState(null);
  const [filterAnnee, setFilterAnnee] = useState('all');

  const subjects = groupBySubject(annales);
  const annees = [...new Set(subjects.map(s => String(s.annee)))].sort((a, b) => b.localeCompare(a));

  const filtered = filterAnnee === 'all' ? subjects : subjects.filter(s => String(s.annee) === filterAnnee);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="glass rounded-2xl p-6 mb-6" style={{ border: '1px solid rgba(200,144,47,0.18)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#e7dcc8', fontFamily: 'Fraunces, serif' }}>
          📄 Sujets Complets
        </h2>
        <p className="text-sm mb-4" style={{ color: '#94a3b8' }}>
          {filtered.length} sujets complets — regroupés par épreuve officielle. Chaque sujet contient plusieurs exercices de chapitres différents.
        </p>

        {/* Filtre année */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFilterAnnee('all')}
            className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
            style={{
              background: filterAnnee === 'all' ? 'rgba(200,144,47,0.2)' : 'rgba(255,255,255,0.05)',
              color: filterAnnee === 'all' ? '#c8902f' : '#64748b',
              border: filterAnnee === 'all' ? '1px solid rgba(200,144,47,0.4)' : '1px solid rgba(255,255,255,0.08)',
              fontFamily: 'JetBrains Mono, monospace'
            }}
          >
            Toutes années
          </button>
          {annees.map(a => (
            <button
              key={a}
              onClick={() => setFilterAnnee(a)}
              className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
              style={{
                background: filterAnnee === a ? 'rgba(200,144,47,0.2)' : 'rgba(255,255,255,0.05)',
                color: filterAnnee === a ? '#c8902f' : '#64748b',
                border: filterAnnee === a ? '1px solid rgba(200,144,47,0.4)' : '1px solid rgba(255,255,255,0.08)',
                fontFamily: 'JetBrains Mono, monospace'
              }}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des sujets */}
      {filtered.map((subj, idx) => {
        const isOpen = openSubject === idx;
        return (
          <div
            key={idx}
            style={{
              background: isOpen ? 'rgba(200,144,47,0.06)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${isOpen ? 'rgba(200,144,47,0.28)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '0.875rem',
              overflow: 'hidden',
              transition: 'all 0.2s ease'
            }}
          >
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
              onClick={() => setOpenSubject(isOpen ? null : idx)}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(200,144,47,0.12)', color: '#c8902f', border: '1px solid rgba(200,144,47,0.25)', fontFamily: 'JetBrains Mono, monospace' }}>
                  {subj.annee.toString().slice(-2)}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold" style={{ color: isOpen ? '#c8902f' : '#e2e8f0' }}>
                    {subj.session}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>
                    {subj.annee} · {subj.exercices.length} exercice{subj.exercices.length > 1 ? 's' : ''} · {[...new Set(subj.exercices.map(e => e.chapitre_titre.split('(')[0].trim().split('/')[0].trim()))].length} thèmes
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={subj.url_sujet}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="text-xs px-2.5 py-1 rounded-lg font-medium hover:opacity-80 transition-opacity"
                  style={{ background: 'rgba(200,144,47,0.15)', color: '#c8902f', border: '1px solid rgba(200,144,47,0.3)' }}
                >
                  📄 Sujet
                </a>
                {subj.url_corrige && (
                  <a
                    href={subj.url_corrige}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="text-xs px-2.5 py-1 rounded-lg font-medium hover:opacity-80 transition-opacity"
                    style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)' }}
                  >
                    ✅ Corrigé
                  </a>
                )}
                <span style={{ color: '#64748b', transition: 'transform 0.2s', display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5">
                <div className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: '#475569' }}>
                  Exercices contenus dans ce sujet :
                </div>
                <div className="space-y-2">
                  {subj.exercices.map((ex, i) => (
                    <div key={i} className="flex items-start gap-3 py-2 px-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span className="shrink-0 mt-0.5 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(200,144,47,0.1)', color: '#c8902f', border: '1px solid rgba(200,144,47,0.25)' }}>
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium" style={{ color: '#e2e8f0' }}>{ex.titre_sujet}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>
                          {ex.chapitre_titre.split('(')[0].trim()} · {ex.notions}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {filtered.length === 0 && (
        <div className="text-center py-12" style={{ color: '#475569' }}>
          <div className="text-3xl mb-3">📭</div>
          <p className="text-sm">Aucun sujet complet pour cette année.</p>
        </div>
      )}
    </div>
  );
}