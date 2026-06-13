import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TABS = [
  { id: 'cours', path: '/cours', icon: '📚', label: 'Cours' },
  { id: 'quiz', path: '/quiz', icon: '🧠', label: 'Quiz' },
  { id: 'flashcards', path: '/flashcards', icon: '🃏', label: 'Cartes' },
  { id: 'bac', path: '/bac', icon: '🎯', label: 'Bac' },
  { id: 'agent', path: '/agent', icon: '🤖', label: 'Prof IA' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-end justify-around px-1"
      style={{
        background: 'rgba(10,12,34,0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(79,209,197,0.15)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}>
      {TABS.map((tab) => {
        const active = location.pathname === tab.path || location.pathname.startsWith(tab.path + '/');
        return (
          <button
            key={tab.id}
            onClick={() => {
              if (active) {
                // Re-tap on active tab: replace current history entry to reset
                // the tab's stack back to its root, then scroll to top
                navigate(tab.path, { replace: true, state: { reset: Date.now() } });
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate(tab.path);
              }
            }}
            className="flex flex-col items-center justify-center py-2.5 px-2 min-w-0 flex-1 transition-all select-none"
            style={{ color: active ? '#4fd1c5' : '#475569', WebkitUserSelect: 'none', userSelect: 'none' }}>
            <span className="text-xl leading-none mb-0.5">{tab.icon}</span>
            <span className="text-[10px] font-medium leading-none" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {tab.label}
            </span>
            {active && (
              <span className="absolute bottom-0 w-6 h-0.5 rounded-full" style={{ background: '#4fd1c5', bottom: 'env(safe-area-inset-bottom)' }} />
            )}
          </button>
        );
      })}
    </nav>
  );
}