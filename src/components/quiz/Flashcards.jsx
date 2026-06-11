// Flashcards — révision rapide des formules par cartes 3D
import React, { useState } from 'react';
import { chapters } from '../physchim/chaptersData';
import MathExpr from '../physchim/Math';

function InlineMath({ text }) {
  if (!text || !text.includes('$')) return <span>{text}</span>;
  const parts = text.split(/(\$[^$]+\$)/g);
  return (
    <span>
      {parts.map((part, i) =>
        part.startsWith('$') && part.endsWith('$')
          ? <MathExpr key={i} expr={part.slice(1, -1)} />
          : <span key={i}>{part}</span>
      )}
    </span>
  );
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Flashcards() {
  const [selectedChapters, setSelectedChapters] = useState(null); // null = tous
  const [deck, setDeck] = useState(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [toReview, setToReview] = useState([]);
  const [finished, setFinished] = useState(false);

  const toggleChapter = (id) => {
    if (selectedChapters === null) {
      setSelectedChapters(new Set([id]));
    } else {
      const next = new Set(selectedChapters);
      if (next.has(id)) {
        next.delete(id);
        setSelectedChapters(next.size === 0 ? null : next);
      } else {
        next.add(id);
        setSelectedChapters(next);
      }
    }
  };

  const buildDeck = () => {
    const source = selectedChapters === null
      ? chapters
      : chapters.filter(c => selectedChapters.has(c.id));
    const cards = [];
    source.forEach(ch => ch.formulas.forEach(f => cards.push({ ...f, chId: ch.id, chTitle: ch.title, chIcon: ch.icon, chColor: ch.color })));
    return shuffle(cards);
  };

  const startSession = (customDeck) => {
    setDeck(customDeck || buildDeck());
    setIndex(0);
    setFlipped(false);
    setKnown(0);
    setToReview([]);
    setFinished(false);
  };

  const answer = (isKnown) => {
    const card = deck[index];
    if (isKnown) setKnown(k => k + 1);
    else setToReview(r => [...r, card]);
    if (index + 1 >= deck.length) {
      setFinished(true);
    } else {
      setFlipped(false);
      setTimeout(() => setIndex(i => i + 1), 150);
    }
  };

  const totalCards = (selectedChapters === null
    ? chapters
    : chapters.filter(c => selectedChapters.has(c.id))
  ).reduce((s, c) => s + c.formulas.length, 0);

  /* ─── Écran de fin ─────────────────────────────────── */
  if (deck && finished) {
    const pct = Math.round((known / deck.length) * 100);
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="glass rounded-3xl p-8 text-center animate-pulse-glow">
          <div className="text-6xl mb-4 animate-float">{pct >= 80 ? '🏆' : pct >= 50 ? '⚡' : '🔁'}</div>
          <h2 className="text-3xl font-bold gradient-text mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Session terminée !
          </h2>
          <p className="text-sm mb-6" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
            {known}/{deck.length} formules maîtrisées · {pct}%
          </p>
          <div className="h-2 rounded-full mb-8 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #22d3ee, #a855f7)' }} />
          </div>
          <div className="flex gap-3 justify-center flex-wrap">
            {toReview.length > 0 && (
              <button
                onClick={() => startSession(shuffle(toReview))}
                className="px-6 py-3 rounded-xl font-semibold text-sm"
                style={{ background: 'linear-gradient(135deg, #a855f7, #f472b6)', color: '#fff', boxShadow: '0 0 20px rgba(168,85,247,0.3)' }}
              >
                🔁 Revoir les {toReview.length} non acquises
              </button>
            )}
            <button
              onClick={() => startSession()}
              className="px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ background: 'linear-gradient(135deg, #22d3ee, #a855f7)', color: '#05080f', boxShadow: '0 0 20px rgba(34,211,238,0.3)' }}
            >
              🔄 Nouvelle session
            </button>
            <button
              onClick={() => setDeck(null)}
              className="px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              ← Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Session active ───────────────────────────────── */
  if (deck) {
    const card = deck[index];
    const progress = ((index) / deck.length) * 100;
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Progress */}
        <div className="flex items-center justify-between mb-3">
          <button onClick={() => setDeck(null)} className="text-xs px-3 py-1.5 rounded-lg" style={{ color: '#64748b', border: '1px solid rgba(255,255,255,0.08)' }}>
            ← Quitter
          </button>
          <span className="text-xs" style={{ color: '#22d3ee', fontFamily: 'JetBrains Mono, monospace' }}>
            {index + 1} / {deck.length} · ✅ {known} · 🔁 {toReview.length}
          </span>
        </div>
        <div className="h-1.5 rounded-full mb-6 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #22d3ee, #a855f7)' }} />
        </div>

        {/* Card */}
        <div className="flashcard-scene" style={{ height: '340px' }}>
          <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
            <div className="flashcard-face flashcard-front">
              <span className="text-xs px-2 py-0.5 rounded-full mb-4" style={{ background: `${card.chColor}18`, color: card.chColor, border: `1px solid ${card.chColor}35`, fontFamily: 'JetBrains Mono, monospace' }}>
                {card.chIcon} Ch.{card.chId}
              </span>
              <div className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#e2e8f0', fontFamily: 'Space Grotesk, sans-serif' }}>
                {card.name}
              </div>
              <div className="text-xs neon-text" style={{ color: '#22d3ee', fontFamily: 'JetBrains Mono, monospace' }}>
                👆 Cliquer pour révéler la formule
              </div>
            </div>
            <div className="flashcard-face flashcard-back">
              <div className="text-lg md:text-2xl mb-4" style={{ color: '#67e8f9' }}>
                <InlineMath text={card.expr} />
              </div>
              {card.desc && (
                <p className="text-sm" style={{ color: '#94a3b8' }}>
                  <InlineMath text={card.desc} />
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Self-grading */}
        {flipped && (
          <div className="flex gap-3 justify-center mt-6 animate-fade-in">
            <button
              onClick={() => answer(false)}
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: 'rgba(244,114,182,0.12)', color: '#f472b6', border: '1px solid rgba(244,114,182,0.35)' }}
            >
              🔁 À revoir
            </button>
            <button
              onClick={() => answer(true)}
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: 'rgba(52,211,153,0.12)', color: '#34d399', border: '1px solid rgba(52,211,153,0.35)' }}
            >
              ✅ Acquise
            </button>
          </div>
        )}
      </div>
    );
  }

  /* ─── Menu de sélection ────────────────────────────── */
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="glass rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-1 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          🃏 Flashcards Formules
        </h2>
        <p className="text-sm" style={{ color: '#64748b' }}>
          Mémorise toutes les formules du programme avec des cartes 3D · Auto-évaluation ✅/🔁 · Mode "Revoir les non acquises"
        </p>
      </div>

      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Choisir les chapitres
        </h3>
        {selectedChapters !== null && (
          <button onClick={() => setSelectedChapters(null)} className="text-xs px-2 py-0.5 rounded-lg" style={{ color: '#64748b', border: '1px solid rgba(100,116,139,0.2)' }}>
            Tout sélectionner
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        <button
          onClick={() => setSelectedChapters(null)}
          className="px-3 py-3 rounded-xl text-left transition-all"
          style={{
            border: selectedChapters === null ? '1px solid rgba(34,211,238,0.5)' : '1px solid rgba(255,255,255,0.08)',
            background: selectedChapters === null ? 'rgba(34,211,238,0.1)' : 'rgba(255,255,255,0.02)',
          }}
        >
          <div className="text-lg mb-1">📚</div>
          <div className="text-xs font-semibold" style={{ color: selectedChapters === null ? '#22d3ee' : '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>Tous</div>
        </button>
        {chapters.map(ch => {
          const isSelected = selectedChapters !== null && selectedChapters.has(ch.id);
          return (
            <button
              key={ch.id}
              onClick={() => toggleChapter(ch.id)}
              className="px-3 py-3 rounded-xl text-left transition-all relative"
              style={{
                border: isSelected ? `1px solid ${ch.color}60` : '1px solid rgba(255,255,255,0.08)',
                background: isSelected ? `${ch.color}12` : 'rgba(255,255,255,0.02)',
              }}
            >
              {isSelected && <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-xs" style={{ background: ch.color, color: '#05080f' }}>✓</div>}
              <div className="text-base mb-0.5">{ch.icon}</div>
              <div className="text-xs font-semibold truncate pr-4" style={{ color: isSelected ? ch.color : '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
                Ch.{ch.id}
              </div>
              <div className="text-xs" style={{ color: '#475569' }}>{ch.formulas.length} formules</div>
            </button>
          );
        })}
      </div>

      <div className="glass rounded-2xl p-5 flex items-center justify-between flex-wrap gap-4">
        <div className="text-xs" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
          {totalCards} cartes prêtes · ordre aléatoire
        </div>
        <button
          onClick={() => startSession()}
          disabled={totalCards === 0}
          className="px-6 py-3 rounded-xl font-semibold text-sm"
          style={{
            background: 'linear-gradient(135deg, #22d3ee, #a855f7)',
            color: '#05080f',
            boxShadow: '0 0 20px rgba(34,211,238,0.3)',
          }}
        >
          Lancer les flashcards ⚡
        </button>
      </div>
    </div>
  );
}