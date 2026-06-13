import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';

export default function Account() {
  const navigate = useNavigate();
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    if (!confirming) { setConfirming(true); return; }
    setDeleting(true);
    try {
      // Clear local data
      localStorage.clear();
      // Log out after clearing
      await base44.auth.logout('/');
    } catch {
      setDeleting(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 max-w-lg mx-auto" style={{ paddingBottom: 'calc(80px + env(safe-area-inset-bottom))' }}>
      <button onClick={() => navigate(-1)} className="text-xs mb-6 flex items-center gap-2 select-none"
        style={{ color: '#4fd1c5', fontFamily: 'JetBrains Mono, monospace' }}>
        ← Retour
      </button>

      <div className="glass rounded-2xl p-6 mb-4" style={{ border: '1px solid rgba(79,209,197,0.2)' }}>
        <h1 className="text-xl font-bold mb-1 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Mon compte
        </h1>
        <p className="text-xs" style={{ color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
          Gestion de ton compte PHYSCHIM·X
        </p>
      </div>

      <div className="glass rounded-2xl p-6" style={{ border: '1px solid rgba(239,68,68,0.2)' }}>
        <h2 className="text-base font-bold mb-2" style={{ color: '#ef4444', fontFamily: 'Space Grotesk, sans-serif' }}>
          Supprimer mon compte
        </h2>
        <p className="text-xs leading-relaxed mb-5" style={{ color: '#94a3b8' }}>
          Cette action supprime toutes tes données de progression locale (planning, historique de conversation, chapitres visités) et te déconnecte. Cette action est irréversible.
        </p>

        {confirming && (
          <div className="rounded-xl px-4 py-3 mb-4 text-xs leading-relaxed"
            style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5' }}>
            ⚠️ Es-tu sûr(e) ? Toutes tes données seront effacées définitivement.
          </div>
        )}

        <button
          onClick={handleDeleteAccount}
          disabled={deleting}
          className="w-full py-3 rounded-xl font-semibold text-sm transition-all select-none"
          style={{
            background: confirming ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(239,68,68,0.4)',
            color: '#ef4444',
          }}>
          {deleting ? 'Suppression…' : confirming ? '⚠️ Confirmer la suppression' : '🗑️ Supprimer mon compte'}
        </button>

        {confirming && !deleting && (
          <button onClick={() => setConfirming(false)} className="w-full mt-2 py-2.5 rounded-xl text-sm select-none"
            style={{ color: '#64748b', border: '1px solid rgba(255,255,255,0.07)' }}>
            Annuler
          </button>
        )}
      </div>
    </div>
  );
}