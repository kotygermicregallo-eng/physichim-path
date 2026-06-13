import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { chapters } from '../components/physchim/chaptersData';
import ChapterContent from '../components/physchim/ChapterContent';
import ExerciseDatabase from '../components/physchim/ExerciseDatabase';
import CompleteSubjects from '../components/physchim/CompleteSubjects';
import BacEntrainement from '../components/physchim/BacEntrainement';
import QuizSection from '../components/quiz/QuizSection';
import Flashcards from '../components/quiz/Flashcards';
import WelcomeScreen from '../components/home/WelcomeScreen';
import AgentChat from '../components/assistant/AgentChat';
import RevisionPlan from '../components/planning/RevisionPlan';
import BottomNav from '../components/layout/BottomNav';
import ChapterDrawer from '../components/layout/ChapterDrawer';
import PullToRefresh from '../components/layout/PullToRefresh';

const TABS = [
  { id: 'cours', label: '📚 Cours' },
  { id: 'exercices', label: '✏️ Exercices' },
  { id: 'quiz', label: '🧠 Quiz' },
  { id: 'flashcards', label: '🃏 Cartes' },
  { id: 'bac', label: '🎯 Bac' },
  { id: 'sujets', label: '📄 Sujets' },
  { id: 'planning', label: '🗓️ Planning' },
  { id: 'agent', label: '🤖 Prof IA' },
];

const totalFormulas = chapters.reduce((s, c) => s + c.formulas.length, 0);

const pageVariants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};
const pageTransition = { duration: 0.22, ease: 'easeOut' };

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button className="back-to-top select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Retour en haut">↑</button>
  );
}

export default function Home({ tab: propTab }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { chapterId } = useParams();

  // When BottomNav re-taps the active route it passes { reset: timestamp } in state.
  // Using it as a key on the content re-mounts and resets all child state.
  const resetKey = location.state?.reset ?? 0;

  const activeTab = propTab || null;

  const [activeChapter, setActiveChapter] = useState(() => {
    if (chapterId) return chapters.find(c => c.id === parseInt(chapterId)) || chapters[0];
    try {
      const last = JSON.parse(localStorage.getItem('px_last'));
      return last ? (chapters.find(c => c.id === last.chapterId) || chapters[0]) : chapters[0];
    } catch { return chapters[0]; }
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Persist last position
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
    const ch = chapters.find(c => c.id === last.chapterId);
    if (ch) setActiveChapter(ch);
    navigate('/' + last.tab);
  };

  const setTab = (id) => navigate('/' + id);

  const handleChapterSelect = (ch) => {
    setActiveChapter(ch);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRefresh = async () => {
    await new Promise(r => setTimeout(r, 600));
    setRefreshKey(k => k + 1);
  };

  if (!activeTab) {
    return (
      <AnimatePresence mode="wait">
        <motion.div key="welcome" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}>
          <WelcomeScreen onSelect={setTab} onResume={handleResume} />
        </motion.div>
      </AnimatePresence>
    );
  }

  const isChapterTab = activeTab === 'cours' || activeTab === 'exercices';

  return (
    <div className="min-h-screen relative" style={{ zIndex: 1 }}>
      {/* Header */}
      <header style={{
        background: 'rgba(10,12,34,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(79,209,197,0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 4px 30px rgba(79,209,197,0.05)',
        paddingTop: 'env(safe-area-inset-top)',
      }}>
        <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            {isChapterTab && (
              <button
                className="md:hidden p-2 rounded-lg glass select-none"
                onClick={() => setDrawerOpen(true)}
                style={{ color: '#4fd1c5', WebkitUserSelect: 'none', userSelect: 'none' }}>
                ☰
              </button>
            )}
            <button
              onClick={() => navigate('/')}
              className="px-3 py-2 rounded-lg text-sm transition-all glass glass-hover select-none"
              style={{ color: '#4fd1c5', border: '1px solid rgba(79,209,197,0.25)', WebkitUserSelect: 'none', userSelect: 'none' }}>
              ⌂
            </button>
            <div>
              <h1 className="text-lg md:text-2xl font-bold gradient-text select-none" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.04em', WebkitUserSelect: 'none', userSelect: 'none' }}>
                ⚛ PHYSCHIM·X
              </h1>
              <p className="text-xs hidden md:block" style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>
                Terminale Spé · Révision Bac nouvelle génération
              </p>
            </div>
          </div>

          {/* Desktop tabs */}
          <div className="hidden md:flex gap-1 p-1 rounded-xl flex-wrap" style={{ background: 'rgba(10,12,34,0.8)', border: '1px solid rgba(79,209,197,0.18)' }}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTab(tab.id)}
                className={`section-tab px-2.5 md:px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 select-none ${activeTab === tab.id ? 'active' : ''}`}
                style={{ ...activeTab !== tab.id ? { color: '#64748b' } : {}, WebkitUserSelect: 'none', userSelect: 'none' }}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <span className="text-xs px-2 py-1 rounded-full animate-pulse-glow select-none"
              style={{ background: 'rgba(79,209,197,0.08)', color: '#4fd1c5', border: '1px solid rgba(79,209,197,0.3)', fontFamily: 'JetBrains Mono, monospace' }}>
              20 chapitres · {totalFormulas} formules · 600+ questions
            </span>
            <button onClick={() => navigate('/account')}
              className="text-xs px-2 py-1 rounded-full select-none"
              style={{ color: '#64748b', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
              👤
            </button>
          </div>
        </div>
      </header>

      {/* Animated page content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}>

          {activeTab === 'sujets' && (
            <div className="max-w-4xl mx-auto px-4 py-8" style={{ paddingBottom: 'calc(80px + env(safe-area-inset-bottom))' }}>
              <CompleteSubjects key={`${refreshKey}-${resetKey}`} />
            </div>
          )}
          {activeTab === 'quiz' && <QuizSection key={`${refreshKey}-${resetKey}`} />}
          {activeTab === 'agent' && <AgentChat key={resetKey} />}
          {activeTab === 'planning' && (
            <PullToRefresh onRefresh={handleRefresh}>
              <RevisionPlan key={`${refreshKey}-${resetKey}`} />
            </PullToRefresh>
          )}
          {activeTab === 'flashcards' && <Flashcards key={`${refreshKey}-${resetKey}`} />}
          {activeTab === 'bac' && (
            <div className="max-w-4xl mx-auto px-4 py-8" style={{ paddingBottom: 'calc(80px + env(safe-area-inset-bottom))' }}>
              <BacEntrainement key={`${refreshKey}-${resetKey}`} />
            </div>
          )}

          {/* Chapter tabs */}
          {isChapterTab && (
            <div className="max-w-screen-2xl mx-auto flex gap-0">
              {/* Desktop sidebar */}
              <aside
                className="hidden md:block"
                style={{
                  width: '280px',
                  minWidth: '280px',
                  background: 'rgba(10,12,34,0.7)',
                  backdropFilter: 'blur(12px)',
                  borderRight: '1px solid rgba(79,209,197,0.1)',
                  height: 'calc(100vh - 65px)',
                  overflowY: 'auto',
                  position: 'sticky',
                  top: '65px',
                }}>
                <div className="p-3">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-3 px-2 select-none"
                    style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>
                    ◢ Chapitres
                  </div>
                  <div className="space-y-1">
                    {chapters.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => handleChapterSelect(ch)}
                        className="chapter-nav-item w-full text-left px-3 py-2.5 rounded-xl flex items-start gap-2.5 select-none"
                        style={{
                          border: activeChapter.id === ch.id ? '1px solid rgba(79,209,197,0.4)' : '1px solid transparent',
                          background: activeChapter.id === ch.id ? 'linear-gradient(135deg, rgba(79,209,197,0.12), rgba(238,127,157,0.08))' : 'transparent',
                          WebkitUserSelect: 'none', userSelect: 'none',
                        }}>
                        <span className="text-base shrink-0 mt-0.5">{ch.icon}</span>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold truncate"
                            style={{ color: activeChapter.id === ch.id ? '#4fd1c5' : '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
                            Ch. {ch.id}
                          </div>
                          <div className="text-xs leading-tight mt-0.5"
                            style={{ color: activeChapter.id === ch.id ? '#e2e8f0' : '#475569' }}>
                            {ch.title}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Mobile bottom sheet */}
              <ChapterDrawer
                open={drawerOpen}
                onOpenChange={setDrawerOpen}
                activeId={activeChapter.id}
                onSelect={handleChapterSelect}
              />

              {/* Main content with PullToRefresh */}
              <div className="flex-1 min-w-0 flex flex-col">
                <PullToRefresh onRefresh={handleRefresh}>
                  <main className="px-4 md:px-8 py-8" style={{ paddingBottom: 'calc(80px + env(safe-area-inset-bottom))' }}>
                    {/* Chapter header */}
                    <div className="glass rounded-2xl p-5 md:p-6 mb-8 animate-fade-in" style={{ border: '1px solid rgba(79,209,197,0.18)' }}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 animate-float"
                          style={{ background: `linear-gradient(135deg, ${activeChapter.color}22, ${activeChapter.color}08)`, border: `1px solid ${activeChapter.color}44`, boxShadow: `0 0 20px ${activeChapter.color}22` }}>
                          {activeChapter.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold mb-1 select-none"
                            style={{ color: activeChapter.color, fontFamily: 'JetBrains Mono, monospace' }}>
                            ◢ Chapitre {activeChapter.id} / 20
                          </div>
                          <h2 className="text-lg md:text-2xl font-bold leading-tight" style={{ color: '#e2e8f0', fontFamily: 'Space Grotesk, sans-serif' }}>
                            {activeChapter.title}
                          </h2>
                          <div className="flex gap-2 mt-2 flex-wrap">
                            <span className="text-xs px-2 py-0.5 rounded-full select-none"
                              style={{ background: 'rgba(79,209,197,0.08)', color: '#4fd1c5', border: '1px solid rgba(79,209,197,0.25)', fontFamily: 'JetBrains Mono, monospace' }}>
                              {activeChapter.formulas.length} formules
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded-full select-none"
                              style={{ background: 'rgba(238,127,157,0.08)', color: '#ee7f9d', border: '1px solid rgba(238,127,157,0.25)', fontFamily: 'JetBrains Mono, monospace' }}>
                              {activeChapter.demonstrations.length} démos
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <button
                          onClick={() => { const prev = chapters.find(c => c.id === activeChapter.id - 1); if (prev) handleChapterSelect(prev); }}
                          disabled={activeChapter.id === 1}
                          className="text-xs px-3 py-1.5 rounded-lg transition-all select-none"
                          style={{
                            background: activeChapter.id === 1 ? 'rgba(255,255,255,0.02)' : 'rgba(79,209,197,0.06)',
                            color: activeChapter.id === 1 ? '#334155' : '#94a3b8',
                            border: '1px solid rgba(79,209,197,0.12)',
                            cursor: activeChapter.id === 1 ? 'not-allowed' : 'pointer',
                            WebkitUserSelect: 'none', userSelect: 'none',
                          }}>
                          ← Précédent
                        </button>
                        <button
                          onClick={() => { const next = chapters.find(c => c.id === activeChapter.id + 1); if (next) handleChapterSelect(next); }}
                          disabled={activeChapter.id === 20}
                          className="text-xs px-3 py-1.5 rounded-lg transition-all select-none"
                          style={{
                            background: activeChapter.id === 20 ? 'rgba(255,255,255,0.02)' : 'rgba(79,209,197,0.06)',
                            color: activeChapter.id === 20 ? '#334155' : '#94a3b8',
                            border: '1px solid rgba(79,209,197,0.12)',
                            cursor: activeChapter.id === 20 ? 'not-allowed' : 'pointer',
                            WebkitUserSelect: 'none', userSelect: 'none',
                          }}>
                          Suivant →
                        </button>
                        {/* Mobile: open chapter drawer */}
                        <button
                          onClick={() => setDrawerOpen(true)}
                          className="md:hidden ml-auto text-xs px-3 py-1.5 rounded-lg transition-all select-none"
                          style={{ background: 'rgba(79,209,197,0.06)', color: '#4fd1c5', border: '1px solid rgba(79,209,197,0.2)' }}>
                          ☰ Chapitres
                        </button>
                      </div>
                    </div>

                    {activeTab === 'cours' && <ChapterContent chapter={activeChapter} />}
                    {activeTab === 'exercices' && <ExerciseDatabase chapter={activeChapter} />}
                  </main>
                </PullToRefresh>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <BackToTop />
      <BottomNav />

      <footer className="hidden md:block text-center py-8 px-4"
        style={{ color: '#475569', fontSize: '0.75rem', borderTop: '1px solid rgba(79,209,197,0.1)', marginTop: '4rem', fontFamily: 'JetBrains Mono, monospace' }}>
        <p className="gradient-text font-bold mb-1 select-none" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.8rem' }}>⚛ PHYSCHIM·X</p>
        <p>Révision interactive Physique-Chimie Spécialité Terminale · Cours · Quiz · Flashcards · Annales Bac</p>
      </footer>
    </div>
  );
}