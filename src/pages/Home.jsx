import React, { useState, useEffect } from 'react';
import { chapters } from '../components/physchim/chaptersData';
import ChapterContent from '../components/physchim/ChapterContent';
import ExerciseDatabase from '../components/physchim/ExerciseDatabase';
import CompleteSubjects from '../components/physchim/CompleteSubjects';

const TABS = [
{ id: 'cours', label: '📚 Cours', desc: 'Fiches complètes' },
{ id: 'exercices', label: '✏️ Exercices', desc: 'Base d\'exercices' },
{ id: 'sujets', label: '📄 Sujets', desc: 'Annales complètes' }];


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
  const [activeTab, setActiveTab] = useState('cours');
  const [activeChapter, setActiveChapter] = useState(chapters[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 35%, #0a1628 65%, #060d1a 100%)' }}>
      {/* Header */}
      <header style={{ background: 'rgba(10,15,30,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="max-w-screen-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg glass"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ color: '#38bdf8' }}>
              
              ☰
            </button>
            <div>
              <h1 className="text-lg md:text-2xl font-bold gradient-text">⚗️ Physic-Chimie Bac Spé</h1>
              <p className="text-xs hidden md:block" style={{ color: '#64748b' }}>Révision Baccalauréat — Physique-Chimie Spécialité</p>
            </div>
          </div>

          {/* Tab selector */}
          <div className="flex gap-1 p-1 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {TABS.map((tab) =>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`section-tab px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${activeTab === tab.id ? 'active' : ''}`}
              style={activeTab !== tab.id ? { color: '#94a3b8' } : {}}>
              
                {tab.label}
              </button>
            )}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(56,189,248,0.1)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.2)' }}>
              20 chapitres
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

      {/* Chapters tabs (cours + exercices) */}
      {activeTab !== 'sujets' &&
      <div className="max-w-screen-2xl mx-auto flex gap-0">
          {/* Sidebar */}
          <aside
          style={{
            width: '280px',
            minWidth: '280px',
            background: 'rgba(10,15,30,0.7)',
            backdropFilter: 'blur(12px)',
            borderRight: '1px solid rgba(255,255,255,0.06)',
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
              <div className="text-xs font-semibold uppercase tracking-wider mb-3 px-2" style={{ color: '#475569' }}>
                Chapitres
              </div>
              <div className="space-y-1">
                {chapters.map((ch) =>
              <button
                key={ch.id}
                onClick={() => {setActiveChapter(ch);setSidebarOpen(false);window.scrollTo({ top: 0, behavior: 'smooth' });}}
                className={`chapter-nav-item w-full text-left px-3 py-2.5 rounded-xl flex items-start gap-2.5 glass`}
                style={{
                  border: activeChapter.id === ch.id ? `1px solid rgba(56,189,248,0.4)` : '1px solid transparent',
                  background: activeChapter.id === ch.id ? 'linear-gradient(135deg, rgba(56,189,248,0.12), rgba(167,139,250,0.08))' : 'transparent'
                }}>
                
                    <span className="text-base shrink-0 mt-0.5">{ch.icon}</span>
                    <div className="min-w-0">
                      <div
                    className="text-xs font-semibold truncate"
                    style={{ color: activeChapter.id === ch.id ? '#38bdf8' : '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
                    
                        Ch. {ch.id}
                      </div>
                      <div
                    className="text-xs leading-tight mt-0.5"
                    style={{ color: activeChapter.id === ch.id ? '#e2e8f0' : '#64748b' }}>
                    
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
            <div className="glass rounded-2xl p-6 mb-8" style={{ border: `1px solid rgba(255,255,255,0.10)` }}>
              <div className="flex items-start gap-4">
                <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: `linear-gradient(135deg, ${activeChapter.color}22, ${activeChapter.color}11)`, border: `1px solid ${activeChapter.color}44` }}>
                
                  {activeChapter.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: activeChapter.color, fontFamily: 'JetBrains Mono, monospace' }}>
                    Chapitre {activeChapter.id} / 20
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold" style={{ color: '#f1f5f9' }}>
                    {activeChapter.title}
                  </h2>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(56,189,248,0.1)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.2)' }}>
                      {activeChapter.formulas.length} formules
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(244,114,182,0.1)', color: '#f472b6', border: '1px solid rgba(244,114,182,0.2)' }}>
                      {activeChapter.demonstrations.length} démonstrations
                    </span>
                  </div>
                </div>
              </div>

              {/* Chapter navigator */}
              <div className="flex gap-2 mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <button
                onClick={() => {const prev = chapters.find((c) => c.id === activeChapter.id - 1);if (prev) setActiveChapter(prev);}}
                disabled={activeChapter.id === 1}
                className="text-xs px-3 py-1.5 rounded-lg transition-all"
                style={{
                  background: activeChapter.id === 1 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.06)',
                  color: activeChapter.id === 1 ? '#334155' : '#94a3b8',
                  border: '1px solid rgba(255,255,255,0.06)',
                  cursor: activeChapter.id === 1 ? 'not-allowed' : 'pointer'
                }}>
                
                  ← Précédent
                </button>
                <button
                onClick={() => {const next = chapters.find((c) => c.id === activeChapter.id + 1);if (next) setActiveChapter(next);}}
                disabled={activeChapter.id === 20}
                className="text-xs px-3 py-1.5 rounded-lg transition-all"
                style={{
                  background: activeChapter.id === 20 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.06)',
                  color: activeChapter.id === 20 ? '#334155' : '#94a3b8',
                  border: '1px solid rgba(255,255,255,0.06)',
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
      <footer className="text-center py-8 px-4" style={{ color: '#334155', fontSize: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.04)', marginTop: '4rem' }}>
        <p>⚗️ PhysChim Bac Spé — Application de révision interactive • Physique-Chimie Spécialité Terminale</p>
        <p className="mt-1">Liens éditables directement en cliquant dessus 🖊️</p>
      </footer>
    </div>);

}