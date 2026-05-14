import React from 'react';

const subjects = Array.from({ length: 10 }, (_, i) => i + 1);

export default function CompleteSubjects() {
  return (
    <div className="glass p-6 rounded-2xl space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold gradient-text mb-2">📄 Sujets Complets</h2>
        <p className="text-sm" style={{ color: '#94a3b8' }}>
          Sujets d'examen transversaux (plusieurs chapitres) — Cliquez sur un lien pour le modifier.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {subjects.map((i) => (
          <div
            key={i}
            className="rounded-xl p-4"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(167,139,250,0.2))', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.3)' }}
              >
                {i}
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: '#e2e8f0' }}>Annale Complète #{i}</div>
                <div className="text-xs" style={{ color: '#64748b' }}>Sujet transversal multi-chapitres</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: '#64748b', fontSize: '0.75rem' }}>→</span>
              <span
                className="editable-link"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {`https://example.com/annale-complete-${i}`}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div
        className="rounded-xl p-4 text-sm"
        style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.2)', color: '#fbbf24' }}
      >
        💡 <strong>Comment utiliser :</strong> Cliquez directement sur une URL pour la modifier. Les liens sont éditables sans rechargement.
      </div>
    </div>
  );
}