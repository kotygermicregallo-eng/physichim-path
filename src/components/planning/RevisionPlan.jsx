import React, { useState } from 'react';
import { PHASES, BONUS_TIPS } from './planData';
import { chapters } from '../physchim/chaptersData';

const TOTAL_WEEKS = PHASES.reduce((s, p) => s + p.weeks.length, 0);

export default function RevisionPlan() {
  const [done, setDone] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('px_plan_done') || '[]')); } catch { return new Set(); }
  });
  const [openPhase, setOpenPhase] = useState(1);

  const toggle = (id) => {
    const next = new Set(done);
    next.has(id) ? next.delete(id) : next.add(id);
    setDone(next);
    localStorage.setItem('px_plan_done', JSON.stringify([...next]));
  };

  const progress = Math.round((done.size / TOTAL_WEEKS) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="glass rounded-2xl p-6 mb-6" style={{ border: '1px solid rgba(79,209,197,0.2)' }}>
        <h2 className="text-2xl font-bold mb-1 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          🗓️ Plan de révision — Janvier → Juin
        </h2>
        <p className="text-sm mb-4" style={{ color: '#94a3b8' }}>
          Plan stratégique en 4 phases : consolider le tronc commun, maîtriser les méthodes incontournables, s'entraîner en conditions réelles.
        </p>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #4fd1c5, #ee7f9d)', boxShadow: '0 0 12px rgba(79,209,197,0.5)' }} />
          </div>
          <span className="text-sm font-bold shrink-0" style={{ color: '#4fd1c5', fontFamily: 'Orbitron, sans-serif' }}>{progress}%</span>
        </div>
        <div className="text-xs mt-1.5" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
          {done.size} / {TOTAL_WEEKS} étapes validées · La régularité sera ta meilleure arme 💪
        </div>
      </div>

      {/* Phases */}
      <div className="space-y-4">
        {PHASES.map(phase => {
          const isOpen = openPhase === phase.id;
          const phaseDone = phase.weeks.filter(w => done.has(w.id)).length;
          return (
            <div key={phase.id} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${phase.color}30`, background: 'rgba(255,255,255,0.02)' }}>
              {/* Phase header */}
              <button
                onClick={() => setOpenPhase(isOpen ? null : phase.id)}
                className="w-full px-5 py-4 flex items-center gap-4 text-left transition-all"
                style={{ background: isOpen ? `${phase.color}0d` : 'transparent' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: `${phase.color}15`, border: `1px solid ${phase.color}40` }}>
                  {phase.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold" style={{ color: phase.color, fontFamily: 'JetBrains Mono, monospace' }}>
                    Phase {phase.id} · {phase.period}
                  </div>
                  <div className="text-base font-bold" style={{ color: '#e2e8f0', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {phase.title}
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full shrink-0" style={{ background: `${phase.color}12`, color: phase.color, fontFamily: 'JetBrains Mono, monospace' }}>
                  {phaseDone}/{phase.weeks.length}
                </span>
                <span style={{ color: '#64748b', transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>›</span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#94a3b8' }}>{phase.intro}</p>

                  {/* Objectifs */}
                  {phase.objectives.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-2 mb-4">
                      {phase.objectives.map((o, i) => (
                        <div key={i} className="rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                          <div className="text-xs font-bold mb-1" style={{ color: phase.color, fontFamily: 'JetBrains Mono, monospace' }}>🎯 {o.label}</div>
                          <div className="text-xs leading-relaxed" style={{ color: '#cbd5e1' }}>{o.text}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Semaines */}
                  <div className="space-y-2">
                    {phase.weeks.map(week => {
                      const checked = done.has(week.id);
                      return (
                        <div key={week.id} className="rounded-xl px-4 py-3 flex items-start gap-3 transition-all"
                          style={{
                            background: checked ? 'rgba(52,211,153,0.06)' : 'rgba(255,255,255,0.02)',
                            border: checked ? '1px solid rgba(52,211,153,0.3)' : '1px solid rgba(255,255,255,0.07)',
                          }}>
                          <button
                            onClick={() => toggle(week.id)}
                            className="w-5 h-5 rounded-md shrink-0 mt-0.5 flex items-center justify-center text-xs font-bold transition-all"
                            style={{
                              background: checked ? '#34d399' : 'rgba(255,255,255,0.05)',
                              border: checked ? '1px solid #34d399' : `1px solid ${phase.color}50`,
                              color: '#0a0c22',
                            }}>
                            {checked ? '✓' : ''}
                          </button>
                          <div className="min-w-0">
                            <div className="text-xs font-bold mb-0.5" style={{ color: checked ? '#34d399' : phase.color, fontFamily: 'JetBrains Mono, monospace' }}>
                              {week.label}
                            </div>
                            <div className="text-sm leading-relaxed" style={{ color: checked ? '#64748b' : '#cbd5e1', textDecoration: checked ? 'line-through' : 'none' }}>
                              {week.text}
                            </div>
                            {week.chapters.length > 0 && (
                              <div className="flex gap-1.5 flex-wrap mt-1.5">
                                {week.chapters.map(id => {
                                  const ch = chapters.find(c => c.id === id);
                                  return ch ? (
                                    <span key={id} className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${ch.color}12`, color: ch.color, border: `1px solid ${ch.color}30`, fontFamily: 'JetBrains Mono, monospace' }}>
                                      {ch.icon} Ch.{ch.id}
                                    </span>
                                  ) : null;
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Conseils bonus */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold mb-3" style={{ color: '#78716c', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          💡 3 conseils bonus pour faire la différence
        </h3>
        <div className="grid md:grid-cols-3 gap-3">
          {BONUS_TIPS.map((tip, i) => (
            <div key={i} className="glass rounded-2xl p-4" style={{ border: '1px solid rgba(232,180,74,0.22)' }}>
              <div className="text-2xl mb-2">{tip.icon}</div>
              <div className="text-sm font-bold mb-1.5" style={{ color: '#e8b44a' }}>{tip.title}</div>
              <div className="text-xs leading-relaxed" style={{ color: '#94a3b8' }}>{tip.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}