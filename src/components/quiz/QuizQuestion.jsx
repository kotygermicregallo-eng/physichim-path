// QuizQuestion — renders one question with all 21 types support
import React, { useState } from 'react';
import { QUESTION_TYPES } from './quizEngine';
import CorrectionPanel from './CorrectionPanel';
import QuizGraph from './QuizGraph';
import MathText from './MathText';

export default function QuizQuestion({ question, onAnswer, showCorrection }) {
  const [selected, setSelected] = useState(null);
  const [openAnswer, setOpenAnswer] = useState('');
  const [answered, setAnswered] = useState(false);

  const typeInfo = QUESTION_TYPES[question.type];

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    onAnswer(idx === question.correctIndex);
  };

  const handleOpenSubmit = () => {
    if (answered) return;
    setAnswered(true);
    onAnswer(null); // open questions always show correction
  };

  const isOpen = question.isOpen;

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(34,211,238,0.12)' }}>
      {/* Question header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ background: `${typeInfo.color}18`, color: typeInfo.color, border: `1px solid ${typeInfo.color}35`, fontFamily: 'JetBrains Mono, monospace' }}
          >
            {typeInfo.icon} {typeInfo.label}
          </span>
        </div>

        <p className="text-sm md:text-base leading-relaxed" style={{ color: '#e2e8f0' }}>
          <MathText text={question.question} />
        </p>

        {/* Graph if present */}
        {question.graphData && <QuizGraph graphData={question.graphData} />}
      </div>

      {/* Answer area */}
      <div className="px-5 pb-5">
        {isOpen ? (
          /* Open question */
          <div className="space-y-3">
            <textarea
              value={openAnswer}
              onChange={e => setOpenAnswer(e.target.value)}
              disabled={answered}
              placeholder="Rédigez votre réponse ici..."
              className="w-full rounded-xl px-3 py-2.5 text-sm resize-none"
              rows={4}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(34,211,238,0.2)',
                color: '#e2e8f0',
                outline: 'none',
                fontFamily: 'Inter, sans-serif'
              }}
            />
            {!answered && (
              <button
                onClick={handleOpenSubmit}
                className="text-sm px-4 py-2 rounded-xl font-medium transition-all"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #a855f7)', color: '#ffffff' }}
              >
                Voir la correction →
              </button>
            )}
          </div>
        ) : (
          /* MCQ */
          <div className="space-y-2">
            {question.options.map((opt, idx) => {
              let borderColor = 'rgba(255,255,255,0.08)';
              let bgColor = 'rgba(255,255,255,0.02)';
              let textColor = '#94a3b8';

              if (answered) {
                if (idx === question.correctIndex) {
                  borderColor = 'rgba(52,211,153,0.5)';
                  bgColor = 'rgba(52,211,153,0.08)';
                  textColor = '#34d399';
                } else if (idx === selected) {
                  borderColor = 'rgba(248,113,113,0.5)';
                  bgColor = 'rgba(248,113,113,0.08)';
                  textColor = '#f87171';
                }
              } else if (selected === idx) {
                borderColor = 'rgba(34,211,238,0.5)';
                bgColor = 'rgba(34,211,238,0.08)';
                textColor = '#22d3ee';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={answered}
                  className="w-full text-left px-4 py-3 rounded-xl transition-all text-sm leading-snug"
                  style={{ border: `1px solid ${borderColor}`, background: bgColor, color: textColor, cursor: answered ? 'default' : 'pointer' }}
                >
                  <span className="font-mono mr-2 opacity-50" style={{ fontSize: '0.7rem' }}>{['A', 'B', 'C', 'D'][idx]})</span>
                  <MathText text={opt} />
                  {answered && idx === question.correctIndex && <span className="float-right">✓</span>}
                  {answered && idx === selected && idx !== question.correctIndex && <span className="float-right">✗</span>}
                </button>
              );
            })}
          </div>
        )}

        {/* Correction panel */}
        {(answered || showCorrection) && (
          <CorrectionPanel
            correction={question.correction}
            isCorrect={isOpen ? null : selected === question.correctIndex}
          />
        )}
      </div>
    </div>
  );
}