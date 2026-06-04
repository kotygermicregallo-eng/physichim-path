// QuizSession — manages a quiz session: question flow, score, progress
import React, { useState, useMemo } from 'react';
import QuizQuestion from './QuizQuestion';
import { shuffle, QUESTION_TYPES } from './quizEngine';

export default function QuizSession({ questions, onExit }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]); // null=open, true=correct, false=wrong
  const [sessionComplete, setSessionComplete] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);

  const sessionQuestions = useMemo(() => shuffle(questions).slice(0, Math.min(questions.length, 30)), [questions]);
  const current = sessionQuestions[currentIdx];
  const total = sessionQuestions.length;
  const progress = currentIdx / total;

  const handleAnswer = (isCorrect) => {
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    if (isCorrect === true) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx(i => i + 1);
      setShowCorrection(false);
    } else {
      setSessionComplete(true);
    }
  };

  const correctCount = answers.filter(a => a === true).length;
  const wrongCount = answers.filter(a => a === false).length;
  const openCount = answers.filter(a => a === null).length;
  const pct = Math.round((correctCount / Math.max(1, correctCount + wrongCount)) * 100);

  if (sessionComplete) {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <div className="glass rounded-3xl p-8 text-center" style={{ border: '1px solid rgba(200,144,47,0.25)' }}>
          <div className="text-5xl mb-4">
            {pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '📚'}
          </div>
          <h2 className="text-2xl font-bold mb-2 gradient-text" style={{ fontFamily: 'Fraunces, serif' }}>
            Session terminée !
          </h2>
          <div className="text-5xl font-bold my-4" style={{ color: pct >= 80 ? '#34d399' : pct >= 60 ? '#fbbf24' : '#f87171', fontFamily: 'Fraunces, serif' }}>
            {pct}%
          </div>
          <div className="flex justify-center gap-6 text-sm mb-6">
            <div className="text-center">
              <div className="text-xl font-bold" style={{ color: '#34d399' }}>{correctCount}</div>
              <div style={{ color: '#64748b' }}>Correctes</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold" style={{ color: '#f87171' }}>{wrongCount}</div>
              <div style={{ color: '#64748b' }}>Incorrectes</div>
            </div>
            {openCount > 0 && (
              <div className="text-center">
                <div className="text-xl font-bold" style={{ color: '#a78bfa' }}>{openCount}</div>
                <div style={{ color: '#64748b' }}>Ouvertes</div>
              </div>
            )}
            <div className="text-center">
              <div className="text-xl font-bold" style={{ color: '#c8902f' }}>{total}</div>
              <div style={{ color: '#64748b' }}>Total</div>
            </div>
          </div>

          {/* Level evaluation */}
          <div className="rounded-xl p-3 mb-6 text-sm" style={{
            background: pct >= 80 ? 'rgba(52,211,153,0.08)' : pct >= 60 ? 'rgba(251,191,36,0.08)' : 'rgba(248,113,113,0.08)',
            border: `1px solid ${pct >= 80 ? 'rgba(52,211,153,0.3)' : pct >= 60 ? 'rgba(251,191,36,0.3)' : 'rgba(248,113,113,0.3)'}`,
            color: '#e7dcc8'
          }}>
            {pct >= 80 ? '🎯 Excellent ! Niveau Bac+. Maîtrise solide du chapitre.' : pct >= 60 ? '📈 Bon niveau. Revoir les erreurs et refaire le quiz.' : '📚 Revoir le cours, puis refaire le quiz. Les corrections sont tes meilleures alliées !'}
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => { setCurrentIdx(0); setAnswers([]); setScore(0); setSessionComplete(false); }}
              className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={{ background: 'linear-gradient(135deg, #c8902f, #8b1e2d)', color: '#f3ead7' }}
            >
              🔄 Recommencer
            </button>
            <button
              onClick={onExit}
              className="px-5 py-2.5 rounded-xl text-sm font-medium"
              style={{ background: 'rgba(255,255,255,0.06)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              ← Retour
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentAnswered = answers.length > currentIdx;

  return (
    <div className="max-w-2xl mx-auto py-4 px-4">
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onExit}
          className="text-xs px-3 py-1.5 rounded-lg transition-all"
          style={{ background: 'rgba(255,255,255,0.05)', color: '#64748b', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          ← Quitter
        </button>
        <div className="flex-1 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentIdx / total) * 100}%`, background: 'linear-gradient(90deg, #c8902f, #8b1e2d)' }}
          />
        </div>
        <span className="text-xs font-mono shrink-0" style={{ color: '#64748b' }}>
          {currentIdx + 1}/{total}
        </span>
        <span className="text-xs font-mono shrink-0" style={{ color: '#34d399' }}>
          ✓ {correctCount}
        </span>
      </div>

      {/* Question */}
      <QuizQuestion
        key={current.id}
        question={current}
        onAnswer={handleAnswer}
        showCorrection={showCorrection}
      />

      {/* Next button */}
      {currentAnswered && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={{ background: 'linear-gradient(135deg, #c8902f, #8b1e2d)', color: '#f3ead7' }}
          >
            {currentIdx < total - 1 ? 'Question suivante →' : 'Voir les résultats 🏆'}
          </button>
        </div>
      )}
    </div>
  );
}