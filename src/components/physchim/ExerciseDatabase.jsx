import React, { useState } from 'react';

const levels = [
  { id: 1, label: "Niveau 1", sublabel: "FACILE et COMPLET", color: "#34d399", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.25)" },
  { id: 2, label: "Niveau 2", sublabel: "MOYEN et COMPLET", color: "#38bdf8", bg: "rgba(56,189,248,0.08)", border: "rgba(56,189,248,0.25)" },
  { id: 3, label: "Niveau 3", sublabel: "MOYEN et CIBLÉ", color: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.25)" },
  { id: 4, label: "Niveau 4", sublabel: "DIFFICILE et COMPLET", color: "#fbbf24", bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.25)" },
  { id: 5, label: "Niveau 5", sublabel: "DIFFICILE et CIBLÉ", color: "#f97316", bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.25)" },
  { id: 6, label: "Niveau 6", sublabel: "TRÈS DIFFICILE (Synthèse)", color: "#f472b6", bg: "rgba(244,114,182,0.08)", border: "rgba(244,114,182,0.25)" },
];

function EditableLink({ href, label }) {
  return (
    <div className="flex items-center gap-2 py-1">
      <span style={{ color: '#64748b', fontSize: '0.75rem' }}>→</span>
      <span
        className="editable-link"
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        {href}
      </span>
    </div>
  );
}

export default function ExerciseDatabase({ chapter }) {
  const [openLevel, setOpenLevel] = useState(null);

  return (
    <div className="space-y-3">
      <p className="text-sm" style={{ color: '#94a3b8' }}>
        Cliquez sur un lien pour le modifier directement. Remplacez les liens de substitution par vos URLs.
      </p>
      {levels.map((level) => (
        <div
          key={level.id}
          style={{ background: openLevel === level.id ? level.bg : 'rgba(255,255,255,0.04)', border: `1px solid ${openLevel === level.id ? level.border : 'rgba(255,255,255,0.08)'}`, borderRadius: '0.75rem', overflow: 'hidden', transition: 'all 0.2s ease' }}
        >
          <button
            className="w-full text-left px-4 py-3 flex items-center justify-between"
            onClick={() => setOpenLevel(openLevel === level.id ? null : level.id)}
          >
            <div className="flex items-center gap-3">
              <span
                style={{ background: level.bg, border: `1px solid ${level.border}`, color: level.color, borderRadius: '0.5rem', padding: '0.2rem 0.6rem', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}
              >
                {level.label}
              </span>
              <span style={{ color: level.color, fontSize: '0.875rem', fontWeight: 500 }}>{level.sublabel}</span>
            </div>
            <span style={{ color: '#64748b', transition: 'transform 0.2s', transform: openLevel === level.id ? 'rotate(180deg)' : 'none' }}>▼</span>
          </button>
          {openLevel === level.id && (
            <div className="px-4 pb-4">
              <EditableLink href={`https://example.com/exercice-chapitre${chapter.id}-niveau${level.id}-ex1`} />
              <EditableLink href={`https://example.com/exercice-chapitre${chapter.id}-niveau${level.id}-ex2`} />
              <EditableLink href={`https://example.com/exercice-chapitre${chapter.id}-niveau${level.id}-ex3`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}