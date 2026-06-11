import React from 'react';
import { motion } from 'framer-motion';
import { chapters } from '../physchim/chaptersData';
import Atom3D from '../three/Atom3D';

const totalFormulas = chapters.reduce((s, c) => s + c.formulas.length, 0);

const SECTIONS = [
  { id: 'cours', icon: '📚', title: 'Cours', desc: 'Fiches complètes des 20 chapitres : définitions, formules, démos, schémas', color: '#4fd1c5' },
  { id: 'exercices', icon: '✏️', title: 'Exercices', desc: "Base d'exercices corrigés classés par chapitre et difficulté", color: '#ee7f9d' },
  { id: 'quiz', icon: '🧠', title: 'Quiz', desc: '600+ questions, 21 types, corrections détaillées en 6 couches', color: '#e8b44a' },
  { id: 'flashcards', icon: '🃏', title: 'Cartes', desc: 'Flashcards 3D pour mémoriser toutes les formules du programme', color: '#34d399' },
  { id: 'bac', icon: '🎯', title: 'Bac', desc: 'Entraînement type Bac : exercices chronométrés style annales', color: '#fbbf24' },
  { id: 'sujets', icon: '📄', title: 'Sujets', desc: 'Sujets complets de Bac avec corrigés intégraux', color: '#9ee8de' },
];

export default function WelcomeScreen({ onSelect, onResume }) {
  const last = (() => {
    try { return JSON.parse(localStorage.getItem('px_last')); } catch { return null; }
  })();
  const visited = (() => {
    try { return JSON.parse(localStorage.getItem('px_visited') || '[]'); } catch { return []; }
  })();
  const progress = Math.round((visited.length / chapters.length) * 100);
  const lastSection = last ? SECTIONS.find(s => s.id === last.tab) : null;
  const lastChapter = last ? chapters.find(c => c.id === last.chapterId) : null;

  return (
    <div className="min-h-screen relative flex flex-col" style={{ zIndex: 1 }}>
      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-10 md:py-16">
        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10">
          <div className="max-w-xs mx-auto mb-2">
            <Atom3D height={190} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-3" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em' }}>
            PHYSCHIM·X
          </h1>
          <p className="text-sm md:text-base mb-6" style={{ color: '#94a3b8', fontFamily: 'Space Grotesk, sans-serif' }}>
            Ta plateforme de révision Physique-Chimie · Terminale Spé · Bac
          </p>
          <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
            {[
              { n: '20', label: 'chapitres' },
              { n: totalFormulas, label: 'formules' },
              { n: '600+', label: 'questions' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="glass rounded-2xl px-5 py-3 text-center"
                style={{ border: '1px solid rgba(79,209,197,0.2)' }}>
                <div className="text-xl md:text-2xl font-bold neon-text" style={{ color: '#4fd1c5', fontFamily: 'Orbitron, sans-serif' }}>{s.n}</div>
                <div className="text-xs" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Reprendre + progression ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 gap-3 mb-10">
          {/* Reprendre */}
          <button
            onClick={() => last && onResume(last)}
            disabled={!last}
            className="glass glass-hover rounded-2xl p-4 text-left flex items-center gap-4 transition-all"
            style={{ border: '1px solid rgba(79,209,197,0.2)', cursor: last ? 'pointer' : 'default', opacity: last ? 1 : 0.55 }}>
            <span className="text-2xl shrink-0">🚀</span>
            <div className="min-w-0">
              <div className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>
                {last ? 'Reprendre où j\'en étais' : 'Commence ta première session !'}
              </div>
              <div className="text-xs mt-0.5 truncate" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
                {last
                  ? `${lastSection?.icon || ''} ${lastSection?.title || last.tab}${lastChapter && (last.tab === 'cours' || last.tab === 'exercices') ? ` · Ch.${lastChapter.id} ${lastChapter.title}` : ''}`
                  : 'Ta dernière position sera mémorisée ici'}
              </div>
            </div>
            {last && <span className="ml-auto text-lg shrink-0" style={{ color: '#4fd1c5' }}>→</span>}
          </button>

          {/* Progression */}
          <div className="glass rounded-2xl p-4" style={{ border: '1px solid rgba(238,127,157,0.2)' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold flex items-center gap-2" style={{ color: '#e2e8f0' }}>
                <span className="text-2xl">📊</span> Progression Bac
              </div>
              <span className="text-xs font-bold" style={{ color: '#ee7f9d', fontFamily: 'Orbitron, sans-serif' }}>{progress}%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #4fd1c5, #ee7f9d)', boxShadow: '0 0 12px rgba(79,209,197,0.5)' }} />
            </div>
            <div className="text-xs mt-2" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
              {visited.length} / {chapters.length} chapitres consultés
            </div>
          </div>
        </motion.div>

        {/* ── Grille des sections ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTIONS.map((s, i) => (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => onSelect(s.id)}
              className="glass rounded-2xl p-5 text-left transition-all group"
              style={{ border: `1px solid ${s.color}30` }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 30px ${s.color}25`; e.currentTarget.style.borderColor = `${s.color}70`; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = `${s.color}30`; }}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
                style={{ background: `linear-gradient(135deg, ${s.color}22, ${s.color}08)`, border: `1px solid ${s.color}40`, boxShadow: `0 0 16px ${s.color}18` }}>
                {s.icon}
              </div>
              <div className="text-base font-bold mb-1" style={{ color: s.color, fontFamily: 'Space Grotesk, sans-serif' }}>
                {s.title}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
                {s.desc}
              </div>
              <div className="text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: s.color, fontFamily: 'JetBrains Mono, monospace' }}>
                Entrer →
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 px-4" style={{ color: '#475569', fontSize: '0.75rem', borderTop: '1px solid rgba(79,209,197,0.1)', fontFamily: 'JetBrains Mono, monospace' }}>
        <p>Révision interactive Physique-Chimie Spécialité Terminale · Cours · Quiz · Flashcards · Annales Bac</p>
      </footer>
    </div>
  );
}