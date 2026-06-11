// CorrectionPanel — 6-layer correction display
import React, { useState } from 'react';
import MathText from './MathText';

const LAYERS = [
  { key: 'answer', icon: '✅', label: 'Réponse', color: '#34d399' },
  { key: 'explanation', icon: '📖', label: 'Explication', color: '#38bdf8' },
  { key: 'memo', icon: '🧠', label: 'Astuce mémo', color: '#a78bfa' },
  { key: 'trap', icon: '🪤', label: 'Piège à éviter', color: '#f87171' },
  { key: 'technique', icon: '⚙️', label: 'Technique de résolution', color: '#fbbf24' },
  { key: 'bacLink', icon: '🎓', label: 'Tag programme Bac', color: '#22d3ee' },
];

export default function CorrectionPanel({ correction, isCorrect }) {
  const [openLayer, setOpenLayer] = useState(null);

  if (!correction) return null;

  return (
    <div className="mt-4 rounded-2xl overflow-hidden" style={{ border: `1px solid ${isCorrect ? 'rgba(52,211,153,0.3)' : 'rgba(248,113,113,0.3)'}`, background: 'rgba(0,0,0,0.3)' }}>
      {/* Header */}
      <div className="px-4 py-3 flex items-center gap-3" style={{ background: isCorrect ? 'rgba(52,211,153,0.08)' : 'rgba(248,113,113,0.08)' }}>
        <span className="text-xl">{isCorrect ? '✅' : '❌'}</span>
        <div>
          <div className="text-sm font-bold" style={{ color: isCorrect ? '#34d399' : '#f87171', fontFamily: 'Fraunces, serif' }}>
            {isCorrect ? 'Bonne réponse !' : 'Réponse incorrecte'}
          </div>
          <div className="text-xs mt-0.5" style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
            {correction.bacLink}
          </div>
        </div>
      </div>

      {/* Answer always visible */}
      <div className="px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="text-xs font-semibold mb-1" style={{ color: '#34d399' }}>✅ Réponse correcte :</div>
        <div className="text-sm" style={{ color: '#e7dcc8' }}><MathText text={correction.answer} /></div>
      </div>

      {/* Collapsible layers */}
      <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
        {LAYERS.slice(1).map((layer) => {
          const content = correction[layer.key];
          if (!content) return null;
          const isOpen = openLayer === layer.key;
          return (
            <div key={layer.key}>
              <button
                className="w-full px-4 py-2.5 flex items-center justify-between text-left transition-all"
                onClick={() => setOpenLayer(isOpen ? null : layer.key)}
                style={{ background: isOpen ? `${layer.color}08` : 'transparent' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{layer.icon}</span>
                  <span className="text-xs font-semibold" style={{ color: isOpen ? layer.color : '#64748b' }}>{layer.label}</span>
                </div>
                <span style={{ color: '#475569', transform: isOpen ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 0.2s', fontSize: '0.7rem' }}>▼</span>
              </button>
              {isOpen && (
                <div className="px-4 pb-3" style={{ background: `${layer.color}05` }}>
                  <div className="text-sm leading-relaxed" style={{ color: '#cbd5e1', borderLeft: `2px solid ${layer.color}`, paddingLeft: '0.75rem' }}>
                    <MathText text={content} />
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