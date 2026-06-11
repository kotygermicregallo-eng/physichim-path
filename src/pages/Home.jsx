import React, { useState, useEffect } from 'react';
import { chapters } from '../components/physchim/chaptersData';
import ChapterContent from '../components/physchim/ChapterContent';
import ExerciseDatabase from '../components/physchim/ExerciseDatabase';
import CompleteSubjects from '../components/physchim/CompleteSubjects';
import BacEntrainement from '../components/physchim/BacEntrainement';
import QuizSection from '../components/quiz/QuizSection';
import Flashcards from '../components/quiz/Flashcards';
import WelcomeScreen from '../components/home/WelcomeScreen';

const TABS = [
  { id: 'cours', label: '📚 Cours', desc: 'Fiches complètes' },
  { id: 'exercices', label: '✏️ Exercices', desc: 'Base d\'exercices' },
  { id: 'quiz', label: '🧠 Quiz', desc: 'Entraînement 21 types' },
  { id: 'flashcards', label: '🃏 Cartes', desc: 'Flashcards formules' },
  { id: 'bac', label: '🎯 Bac', desc: 'Entraînement Bac' },
  { id: 'sujets', label: '📄 Sujets', desc: 'Annales complètes' }];

const totalFormulas = chapters.reduce((s, c) => s + c.formulas.length, 0);

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Retour en haut">
      ↑
    </button>);
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(null);
  const [activeChapter, setActiveChapter] = useState(chapters[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mémorise la dernière position + chapitres consultés
  useEffect(() => {
    if (!activeTab) return;
    localStorage.setItem('px_last', JSON.stringify({ tab: activeTab, chapterId: activeChapter.id }));
    if (activeTab === 'cours') {
      const visited = JSON.parse(localStorage.getItem('px_visited') || '[]');
      if (!visited.includes(activeChapter.id)) {
        localStorage.setItem('px_visited', JSON.stringify([...visited, activeChapter.id]));
      }
    }
  }, [activeTab, activeChapter]);

  const handleResume = (last) => {
    const ch = chapters.find((c) => c.id === last.chapterId);
    if (ch) setActiveChapter(ch);
    setActiveTab(last.tab);
  };

  if (!activeTab) {
    return <WelcomeScreen onSelect={setActiveTab} onResume={handleResume} />;
  }

  return (
    <div className="min-h-screen relative" style={{ zIndex: 1 }}>
      {/* Header */}
      <header style={{ background: 'rgba(10,12,34,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(79,209,197,0.15)', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 4px 30px rgba(79,209,197,0.05)' }}>
        <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg glass"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ color: '#4fd1c5' }}>
              ☰
            </button>
            <button
              onClick={() => setActiveTab(null)}
              className="px-3 py-2 rounded-lg text-sm transition-all glass glass-hover"
              title="Retour à l'accueil"
              style={{ color: '#4fd1c5', border: '1px solid rgba(79,209,197,0.25)' }}>
              ⌂
            </button>
            <div>
              <h1 className="text-lg md:text-2xl font-bold gradient-text" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.04em' }}>
                ⚛ PHYSCHIM·X
              </h1>
              <p className="text-xs hidden md:block" style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>
                Terminale Spé · Révision Bac nouvelle génération
              </p>
            </div>
          </div>

          {/* Tab selector */}
          <div className="flex gap-1 p-1 rounded-xl flex-wrap" style={{ background: 'rgba(10,12,34,0.8)', border: '1px solid rgba(79,209,197,0.18)' }}>
            {TABS.map((tab) =>
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`section-tab px-2.5 md:px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${activeTab === tab.id ? 'active' : ''}`}
                style={activeTab !== tab.id ? { color: '#64748b' } : {}}>
                {tab.label}
              </button>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <span className="text-xs px-2 py-1 rounded-full animate-pulse-glow" style={{ background: 'rgba(79,209,197,0.08)', color: '#4fd1c5', border: '1px solid rgba(79,209,197,0.3)', fontFamily: 'JetBrains Mono, monospace' }}>
              20 chapitres · {totalFormulas} formules · 600+ questions
            </span>
          </div>
        </div>
      </header>

      {/* Subjects tab (full width) */}
      {activeTab === 'sujets' &&
        <div className="max-w-4xl mx-auto px-4 py-8">
          <CompleteSubjects />
        </div>
      }

      {/* Quiz tab (full width) */}
      {activeTab === 'quiz' && <QuizSection />}

      {/* Flashcards tab (full width) */}
      {activeTab === 'flashcards' && <Flashcards />}

      {/* Bac entrainement tab (full width) */}
      {activeTab === 'bac' &&
        <div className="max-w-4xl mx-auto px-4 py-8">
          <BacEntrainement />
        </div>
      }

      {/* Chapters tabs (cours + exercices) */}
      {(activeTab === 'cours' || activeTab === 'exercices') &&
        <div className="max-w-screen-2xl mx-auto flex gap-0">
          {/* Sidebar */}
          <aside
            style={{
              width: '280px',
              minWidth: '280px',
              background: 'rgba(10,12,34,0.7)',
              backdropFilter: 'blur(12px)',
              borderRight: '1px solid rgba(79,209,197,0.1)',
              height: 'calc(100vh - 65px)',
              overflowY: 'auto',
              position: 'sticky',
              top: '65px'
            }}
            className={`${sidebarOpen ? 'fixed inset-0 z-40 w-72' : 'hidden'} md:block`}>

            {sidebarOpen &&
              <div className="flex justify-end p-3 md:hidden">
                <button onClick={() => setSidebarOpen(false)} style={{ color: '#94a3b8' }}>✕</button>
              </div>
            }
            <div className="p-3">
              <div className="text-xs font-semibold uppercase tracking-wider mb-3 px-2" style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>
                ◢ Chapitres
              </div>
              <div className="space-y-1">
                {chapters.map((ch) =>
                  <button
                    key={ch.id}
                    onClick={() => { setActiveChapter(ch); setSidebarOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`chapter-nav-item w-full text-left px-3 py-2.5 rounded-xl flex items-start gap-2.5`}
                    style={{
                      border: activeChapter.id === ch.id ? `1px solid rgba(79,209,197,0.4)` : '1px solid transparent',
                      background: activeChapter.id === ch.id ? 'linear-gradient(135deg, rgba(79,209,197,0.12), rgba(238,127,157,0.08))' : 'transparent',
                      boxShadow: activeChapter.id === ch.id ? '0 0 16px rgba(79,209,197,0.08)' : 'none'
                    }}>
                    <span className="text-base shrink-0 mt-0.5">{ch.icon}</span>
                    <div className="min-w-0">
                      <div
                        className="text-xs font-semibold truncate"
                        style={{ color: activeChapter.id === ch.id ? '#4fd1c5' : '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
                        Ch. {ch.id}
                      </div>
                      <div
                        className="text-xs leading-tight mt-0.5"
                        style={{ color: activeChapter.id === ch.id ? '#e2e8f0' : '#475569' }}>
                        {ch.title}
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Overlay for mobile */}
          {sidebarOpen &&
            <div
              className="fixed inset-0 z-30 bg-black/60 md:hidden"
              onClick={() => setSidebarOpen(false)} />
          }

          {/* Main content */}
          <main className="flex-1 min-w-0 px-4 md:px-8 py-8 opacity-100">
            {/* Chapter header */}
            <div className="glass rounded-2xl p-6 mb-8 animate-fade-in" style={{ border: `1px solid rgba(79,209,197,0.18)` }}>
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 animate-float"
                  style={{ background: `linear-gradient(135deg, ${activeChapter.color}22, ${activeChapter.color}08)`, border: `1px solid ${activeChapter.color}44`, boxShadow: `0 0 20px ${activeChapter.color}22` }}>
                  {activeChapter.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: activeChapter.color, fontFamily: 'JetBrains Mono, monospace' }}>
                    ◢ Chapitre {activeChapter.id} / 20
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold" style={{ color: '#e2e8f0', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {activeChapter.title}
                  </h2>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(79,209,197,0.08)', color: '#4fd1c5', border: '1px solid rgba(79,209,197,0.25)', fontFamily: 'JetBrains Mono, monospace' }}>
                      {activeChapter.formulas.length} formules
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(238,127,157,0.08)', color: '#ee7f9d', border: '1px solid rgba(238,127,157,0.25)', fontFamily: 'JetBrains Mono, monospace' }}>
                      {activeChapter.demonstrations.length} démos
                    </span>
                  </div>
                </div>
              </div>

              {/* Chapter navigator */}
              <div className="flex gap-2 mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <button
                  onClick={() => { const prev = chapters.find((c) => c.id === activeChapter.id - 1); if (prev) setActiveChapter(prev); }}
                  disabled={activeChapter.id === 1}
                  className="text-xs px-3 py-1.5 rounded-lg transition-all"
                  style={{
                    background: activeChapter.id === 1 ? 'rgba(255,255,255,0.02)' : 'rgba(79,209,197,0.06)',
                    color: activeChapter.id === 1 ? '#334155' : '#94a3b8',
                    border: '1px solid rgba(79,209,197,0.12)',
                    cursor: activeChapter.id === 1 ? 'not-allowed' : 'pointer'
                  }}>
                  ← Précédent
                </button>
                <button
                  onClick={() => { const next = chapters.find((c) => c.id === activeChapter.id + 1); if (next) setActiveChapter(next); }}
                  disabled={activeChapter.id === 20}
                  className="text-xs px-3 py-1.5 rounded-lg transition-all"
                  style={{
                    background: activeChapter.id === 20 ? 'rgba(255,255,255,0.02)' : 'rgba(79,209,197,0.06)',
                    color: activeChapter.id === 20 ? '#334155' : '#94a3b8',
                    border: '1px solid rgba(79,209,197,0.12)',
                    cursor: activeChapter.id === 20 ? 'not-allowed' : 'pointer'
                  }}>
                  Suivant →
                </button>
              </div>
            </div>

            {/* Tab content */}
            {activeTab === 'cours' && <ChapterContent chapter={activeChapter} />}
            {activeTab === 'exercices' && <ExerciseDatabase chapter={activeChapter} />}
          </main>
        </div>
      }

      <BackToTop />

      {/* Footer */}
      <footer className="text-center py-8 px-4" style={{ color: '#475569', fontSize: '0.75rem', borderTop: '1px solid rgba(79,209,197,0.1)', marginTop: '4rem', fontFamily: 'JetBrains Mono, monospace' }}>
        <p className="gradient-text font-bold mb-1" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.8rem' }}>⚛ PHYSCHIM·X</p>
        <p>Révision interactive Physique-Chimie Spécialité Terminale · Cours · Quiz · Flashcards · Annales Bac</p>
      </footer>
    </div>);
}