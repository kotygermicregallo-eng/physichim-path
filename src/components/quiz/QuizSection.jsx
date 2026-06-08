// QuizSection — main entry point: chapter selector + mode selector + session launcher
import React, { useState } from 'react';
import QuizSession from './QuizSession';
import { QUESTION_TYPES } from './quizEngine';
import { quizCh1 } from './quizData_ch1';
import { quizCh2 } from './quizData_ch2';
import { quizCh3, quizCh4, quizCh5 } from './quizData_ch3_5';
import { quizCh6, quizCh7, quizCh8, quizCh9, quizCh10 } from './quizData_ch6_10';
import { quizCh11, quizCh12, quizCh13, quizCh14, quizCh15 } from './quizData_ch11_15';
import { quizCh16, quizCh17, quizCh18, quizCh19, quizCh20 } from './quizData_ch16_20';
import { chapters } from '../physchim/chaptersData';

// All quiz data merged
const ALL_QUIZ_DATA = {
  1: quizCh1,
  2: quizCh2,
  3: quizCh3,
  4: quizCh4,
  5: quizCh5,
  6: quizCh6,
  7: quizCh7,
  8: quizCh8,
  9: quizCh9,
  10: quizCh10,
  11: quizCh11,
  12: quizCh12,
  13: quizCh13,
  14: quizCh14,
  15: quizCh15,
  16: quizCh16,
  17: quizCh17,
  18: quizCh18,
  19: quizCh19,
  20: quizCh20,
};

const MODES = [
  { id: 'all', label: '🎲 Tous les types', desc: 'Mix aléatoire des 21 types' },
  { id: 'mcq', label: '🔘 QCM / V-F', desc: 'Types 1 et 2 uniquement' },
  { id: 'calc', label: '⚡ Calculs', desc: 'Types 4, 14 — calculs numériques' },
  { id: 'trap', label: '🪤 Pièges Bac', desc: 'Types 5, 9, 15 — erreurs classiques' },
  { id: 'demo', label: '🧮 Démos & Montrer que', desc: 'Types 8, 12 — raisonnements' },
  { id: 'graph', label: '📈 Graphes', desc: 'Types 11, 13 — exploitation visuelle' },
  { id: 'open', label: '✍️ Rédaction', desc: 'Types 3, 16, 17, 19, 20, 21' },
];

const MODE_FILTER = {
  all: () => true,
  mcq: q => [1, 2].includes(q.type),
  calc: q => [4, 14].includes(q.type),
  trap: q => [5, 9, 15].includes(q.type),
  demo: q => [8, 12].includes(q.type),
  graph: q => [11, 13].includes(q.type),
  open: q => [3, 16, 17, 19, 20, 21].includes(q.type),
};

export default function QuizSection() {
  // null = all chapters, Set of ids = multi-selection
  const [selectedChapters, setSelectedChapters] = useState(null); // null = tous
  const [selectedMode, setSelectedMode] = useState('all');
  const [sessionActive, setSessionActive] = useState(false);

  const availableChapters = chapters.filter(c => ALL_QUIZ_DATA[c.id]);

  const toggleChapter = (id) => {
    if (selectedChapters === null) {
      // Was "all" → switch to single selection
      setSelectedChapters(new Set([id]));
    } else {
      const next = new Set(selectedChapters);
      if (next.has(id)) {
        next.delete(id);
        if (next.size === 0) setSelectedChapters(null); // back to all
        else setSelectedChapters(next);
      } else {
        next.add(id);
        setSelectedChapters(next);
      }
    }
  };

  const selectAll = () => setSelectedChapters(null);

  // Build question pool
  const buildPool = () => {
    let pool = [];
    if (selectedChapters === null) {
      Object.values(ALL_QUIZ_DATA).forEach(arr => pool.push(...arr));
    } else {
      selectedChapters.forEach(id => {
        const arr = ALL_QUIZ_DATA[id];
        if (arr) pool.push(...arr);
      });
    }
    const validPool = pool.filter(q => q && q.type !== undefined);
    const filter = MODE_FILTER[selectedMode];
    const filtered = validPool.filter(filter);
    return filtered.length > 0 ? filtered : validPool;
  };

  const pool = buildPool();

  if (sessionActive) {
    return <QuizSession questions={pool} onExit={() => setSessionActive(false)} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="glass rounded-2xl p-6 mb-6" style={{ border: '1px solid rgba(200,144,47,0.2)' }}>
        <h2 className="text-2xl font-bold mb-1 gradient-text" style={{ fontFamily: 'Fraunces, serif' }}>
          🧠 Quiz Entraînement Bac
        </h2>
        <p className="text-sm mb-2" style={{ color: '#94a3b8' }}>
          600 questions · 21 types · Corrections 6 couches · Calées sur les annales 2022–2025
        </p>
        <div className="flex gap-2 flex-wrap mt-3">
          {[1, 2, 4, 5, 9, 11, 12, 21].map(t => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{
              background: `${QUESTION_TYPES[t].color}15`,
              color: QUESTION_TYPES[t].color,
              border: `1px solid ${QUESTION_TYPES[t].color}30`,
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              {QUESTION_TYPES[t].icon} {QUESTION_TYPES[t].label}
            </span>
          ))}
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(100,116,139,0.15)', color: '#64748b', border: '1px solid rgba(100,116,139,0.2)', fontFamily: 'JetBrains Mono' }}>
            + 13 autres types...
          </span>
        </div>
      </div>

      {/* Step 1: Chapter selection */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold" style={{ color: '#78716c', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            1. Choisir les chapitres
          </h3>
          <div className="flex items-center gap-2">
            {selectedChapters !== null && (
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(200,144,47,0.15)', color: '#c8902f', border: '1px solid rgba(200,144,47,0.3)', fontFamily: 'JetBrains Mono' }}>
                {selectedChapters.size} sélectionné{selectedChapters.size > 1 ? 's' : ''}
              </span>
            )}
            {selectedChapters !== null && (
              <button
                onClick={selectAll}
                className="text-xs px-2 py-0.5 rounded-lg transition-all"
                style={{ color: '#64748b', border: '1px solid rgba(100,116,139,0.2)', background: 'rgba(100,116,139,0.06)' }}
              >
                Tout sélectionner
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {/* All chapters */}
          <button
            onClick={selectAll}
            className="px-3 py-3 rounded-xl text-left transition-all"
            style={{
              border: selectedChapters === null ? '1px solid rgba(200,144,47,0.5)' : '1px solid rgba(255,255,255,0.08)',
              background: selectedChapters === null ? 'rgba(200,144,47,0.12)' : 'rgba(255,255,255,0.02)',
            }}
          >
            <div className="text-lg mb-1">📚</div>
            <div className="text-xs font-semibold" style={{ color: selectedChapters === null ? '#c8902f' : '#78716c', fontFamily: 'JetBrains Mono, monospace' }}>Tous chapitres</div>
            <div className="text-xs mt-0.5" style={{ color: '#475569' }}>
              {Object.values(ALL_QUIZ_DATA).reduce((s, a) => s + a.length, 0)} questions
            </div>
          </button>

          {chapters.map(ch => {
            const hasData = !!ALL_QUIZ_DATA[ch.id];
            const isSelected = selectedChapters !== null && selectedChapters.has(ch.id);
            return (
              <button
                key={ch.id}
                onClick={() => hasData && toggleChapter(ch.id)}
                className="px-3 py-3 rounded-xl text-left transition-all relative"
                style={{
                  border: isSelected ? `1px solid ${ch.color}60` : hasData ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.04)',
                  background: isSelected ? `${ch.color}12` : hasData ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.01)',
                  opacity: hasData ? 1 : 0.45,
                  cursor: hasData ? 'pointer' : 'default',
                }}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center text-xs" style={{ background: ch.color, color: '#0e1418' }}>✓</div>
                )}
                <div className="text-lg mb-1">{ch.icon}</div>
                <div className="text-xs font-semibold truncate pr-5" style={{ color: isSelected ? ch.color : hasData ? '#94a3b8' : '#334155', fontFamily: 'JetBrains Mono, monospace' }}>
                  Ch. {ch.id} — {ch.title.split(' ').slice(0, 3).join(' ')}
                </div>
                <div className="text-xs mt-0.5" style={{ color: hasData ? '#475569' : '#1e293b' }}>
                  {hasData ? `${ALL_QUIZ_DATA[ch.id].length} questions` : '🔒 Bientôt disponible'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Mode selection */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-3" style={{ color: '#78716c', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          2. Choisir le mode
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {MODES.map(mode => (
            <button
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              className="px-4 py-3 rounded-xl text-left transition-all flex items-start gap-3"
              style={{
                border: selectedMode === mode.id ? '1px solid rgba(200,144,47,0.45)' : '1px solid rgba(255,255,255,0.08)',
                background: selectedMode === mode.id ? 'rgba(200,144,47,0.1)' : 'rgba(255,255,255,0.02)',
              }}
            >
              <div className="text-lg shrink-0">{mode.label.split(' ')[0]}</div>
              <div>
                <div className="text-xs font-semibold" style={{ color: selectedMode === mode.id ? '#c8902f' : '#e2e8f0' }}>
                  {mode.label.split(' ').slice(1).join(' ')}
                </div>
                <div className="text-xs mt-0.5" style={{ color: '#475569' }}>{mode.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 3: Launch */}
      <div className="glass rounded-2xl p-5" style={{ border: '1px solid rgba(200,144,47,0.18)' }}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-sm font-semibold" style={{ color: '#e7dcc8' }}>
              {selectedChapters === null
                ? '📚 Tous les chapitres'
                : selectedChapters.size === 1
                  ? `Ch. ${[...selectedChapters][0]} — ${chapters.find(c => c.id === [...selectedChapters][0])?.title}`
                  : `📚 ${selectedChapters.size} chapitres sélectionnés`
              }
            </div>
            <div className="text-xs mt-1" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
              {pool.length} question{pool.length > 1 ? 's' : ''} disponible{pool.length > 1 ? 's' : ''} · Mode : {MODES.find(m => m.id === selectedMode)?.label}
            </div>
          </div>
          <button
            onClick={() => pool.length > 0 && setSessionActive(true)}
            disabled={pool.length === 0}
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
            style={{
              background: pool.length > 0 ? 'linear-gradient(135deg, #c8902f, #8b1e2d)' : 'rgba(255,255,255,0.06)',
              color: pool.length > 0 ? '#f3ead7' : '#475569',
              cursor: pool.length > 0 ? 'pointer' : 'not-allowed'
            }}
          >
            Lancer le quiz 🚀
          </button>
        </div>
      </div>
    </div>
  );
}