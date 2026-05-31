import React, { useState } from 'react';
import { annales } from './annalesData';

// Regroupe par url_sujet unique → 1 PDF = 1 sujet complet
function buildSubjects() {
  const map = {};
  annales.forEach(ex => {
    if (!ex.url_sujet) return;
    const key = ex.url_sujet;
    if (!map[key]) {
      map[key] = {
        url_sujet: ex.url_sujet,
        url_corrige: ex.url_corrige,
        session: ex.session,
        annee: ex.annee,
        exercices: []
      };
    }
    // Mettre à jour le corrigé si dispo
    if (ex.url_corrige && !map[key].url_corrige) {
      map[key].url_corrige = ex.url_corrige;
    }
    map[key].exercices.push(ex);
  });

  // Trier par année décroissante
  return Object.values(map).sort((a, b) => {
    const ya = parseInt(b.annee) || 0;
    const yb = parseInt(a.annee) || 0;
    return ya - yb;
  });
}

// Extrait le nom de la session depuis l'URL
function extractSessionName(url) {
  const match = url.match(/spe-physique-chimie-(\d{4})-(.+?)-sujet/);
  if (match) {
    const year = match[1];
    const session = match[2]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
    return `${session} — ${year}`;
  }
  // Lien labolycée ou autre
  if (url.includes('labolycee')) return 'Compilation Labolycée';
  return url.split('/').pop().replace('.pdf', '').replace(/-/g, ' ');
}

export default function CompleteSubjects() {
  const [openSubject, setOpenSubject] = useState(null);
  const [filter, setFilter] = useState('');
  const subjects = buildSubjects();

  const filtered = filter
    ? subjects.filter(s =>
        s.session.toLowerCase().includes(filter.toLowerCase()) ||
        s.annee.toString().includes(filter) ||
        s.exercices.some(e => e.titre_sujet.toLowerCase().includes(filter.toLowerCase()) || e.chapitre_titre.toLowerCase().includes(filter.toLowerCase()))
      )
    : subjects;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="glass rounded-2xl p-6" style={{ border: '1px solid rgba(200,144,47,0.18)' }}>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#e7dcc8', fontFamily: 'Fraunces, serif' }}>
          📄 Sujets complets
        </h2>
        <p className="text-sm mb-4" style={{ color: '#78716c' }}>
          {subjects.length} sujets de bac — chaque sujet regroupe tous les exercices du PDF correspondant.
        </p>
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Rechercher une session, une année, un thème..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(200,144,47,0.2)', color: '#e2e8f0' }}
        />
      </div>

      {/* Subjects list */}
      <div className="space-y-2">
        {filtered.map((subj, idx) => {
          const isOpen = openSubject === idx;
          const sessionLabel = subj.session || extractSessionName(subj.url_sujet);
          const chapitres = [...new Set(subj.exercices.map(e => e.chapitre_titre))];

          return (
            <div key={idx}
              style={{
                background: isOpen ? 'rgba(139,30,45,0.07)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${isOpen ? 'rgba(139,30,45,0.3)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '0.875rem',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              <button
                className="w-full text-left px-5 py-4 flex items-center gap-4"
                onClick={() => setOpenSubject(isOpen ? null : idx)}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold"
                  style={{ background: 'rgba(139,30,45,0.15)', color: '#8b1e2d', fontFamily: 'JetBrains Mono' }}
                >
                  {subj.annee?.toString().slice(-2) || '??'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold" style={{ color: isOpen ? '#e0b46a' : '#e2e8f0' }}>
                    {sessionLabel}
                  </div>
                  <div className="text-xs mt-0.5 truncate" style={{ color: '#64748b' }}>
                    {chapitres.slice(0, 3).join(' · ')}{chapitres.length > 3 ? ' · ...' : ''}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(139,30,45,0.1)', color: '#c8502f', fontFamily: 'JetBrains Mono' }}>
                    {subj.exercices.length} exo{subj.exercices.length > 1 ? 's' : ''}
                  </span>
                  {subj.url_corrige && (
                    <span className="text-xs" style={{ color: '#34d399' }}>✅</span>
                  )}
                  <span style={{ color: '#64748b', transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-4">
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
                    {/* Buttons */}
                    <div className="flex gap-3 mb-4">
                      <a href={subj.url_sujet} target="_blank" rel="noopener noreferrer"
                        className="text-sm px-4 py-2 rounded-xl font-medium"
                        style={{ background: 'rgba(200,144,47,0.15)', color: '#c8902f', border: '1px solid rgba(200,144,47,0.3)' }}>
                        📄 Télécharger le sujet
                      </a>
                      {subj.url_corrige && (
                        <a href={subj.url_corrige} target="_blank" rel="noopener noreferrer"
                          className="text-sm px-4 py-2 rounded-xl font-medium"
                          style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)' }}>
                          ✅ Télécharger le corrigé
                        </a>
                      )}
                    </div>
                    {/* Exercises in subject */}
                    <div className="space-y-2">
                      {subj.exercices.map((ex, i) => (
                        <div key={i} className="rounded-lg px-3 py-2.5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="flex items-start gap-2">
                            <span className="text-xs px-1.5 py-0.5 rounded shrink-0 mt-0.5" style={{ background: 'rgba(200,144,47,0.1)', color: '#c8902f', fontFamily: 'JetBrains Mono' }}>
                              {ex.chapitre_id}
                            </span>
                            <div className="min-w-0">
                              <div className="text-sm font-medium" style={{ color: '#e2e8f0' }}>{ex.titre_sujet}</div>
                              <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{ex.chapitre_titre}</div>
                              <div className="text-xs mt-0.5" style={{ color: '#78716c' }}>{ex.notions}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12" style={{ color: '#475569' }}>
          <p>Aucun sujet trouvé pour "{filter}"</p>
        </div>
      )}
    </div>
  );
}