import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

// Lazy-load all top-level page components for optimal mobile bundle splitting
const Home    = React.lazy(() => import('./pages/Home'));
const Account = React.lazy(() => import('./pages/Account'));

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ background: '#0a0c22' }}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 animate-spin"
          style={{ borderColor: 'rgba(79,209,197,0.2)', borderTopColor: '#4fd1c5' }} />
        <span className="text-xs" style={{ color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>
          PHYSCHIM·X
        </span>
      </div>
    </div>
  );
}

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) return <LoadingSpinner />;

  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    else if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Welcome */}
        <Route path="/" element={<Home />} />

        {/* Chapter tabs — nested so each preserves its own navigation state */}
        <Route path="/cours" element={<Home tab="cours" />} />
        <Route path="/cours/:chapterId" element={<Home tab="cours" />} />
        <Route path="/exercices" element={<Home tab="exercices" />} />
        <Route path="/exercices/:chapterId" element={<Home tab="exercices" />} />

        {/* Standalone tabs */}
        <Route path="/quiz" element={<Home tab="quiz" />} />
        <Route path="/flashcards" element={<Home tab="flashcards" />} />
        <Route path="/bac" element={<Home tab="bac" />} />
        <Route path="/sujets" element={<Home tab="sujets" />} />
        <Route path="/planning" element={<Home tab="planning" />} />
        <Route path="/agent" element={<Home tab="agent" />} />

        {/* Account */}
        <Route path="/account" element={<Account />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App