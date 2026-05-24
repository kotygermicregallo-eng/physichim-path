import React, { useState } from 'react';

const TOPICS = [
  {
    id: 1,
    label: "Circuits RC",
    icon: "⚡",
    num: "01",
    desc: "Charge/décharge, constante de temps, équation différentielle, énergie du condensateur.",
    color: "#c8902f",
    border: "rgba(200,144,47,0.35)",
    bg: "rgba(200,144,47,0.07)",
    exercises: [
      {
        source: "Bac 2025 · Asie · Jour 2",
        title: "Paiement sans contact",
        desc: "RC, équation différentielle de la charge. Sujet court et bien calibré pour démarrer.",
        points: 5,
        duration: "53 min",
        hasCorrection: true,
        url: "https://www.labolycee.org/paiement-sans-contact",
        type: "labolycee",
      },
      {
        source: "Bac 2025 · Métropole · Jour 2",
        title: "Mesure de l'épaisseur d'un film alimentaire",
        desc: "Charge condensateur, équation diff, constante de temps, géométrie du condensateur, interférences.",
        points: 11,
        duration: "1h15",
        hasCorrection: true,
        url: "https://www.labolycee.org/mesure-de-lepaisseur-dun-film-alimentaire",
        type: "labolycee",
      },
      {
        source: "Bac 2022 · Métropole · Jour 1",
        title: "Défibrillateur cardiaque",
        desc: "Décharge d'un condensateur. Sujet classique, bon pour valider la maîtrise.",
        points: 5,
        duration: "53 min",
        hasCorrection: true,
        url: "https://www.labolycee.org/defibrillateur-cardiaque-0",
        type: "labolycee",
      },
      {
        source: "Bac 2021 · Liban",
        title: "Les supercondensateurs",
        desc: "Charge dipôle RC, géométrie/capacité, écriture d'un résultat avec son incertitude type.",
        points: 5,
        duration: "55 min",
        hasCorrection: true,
        url: "https://www.labolycee.org/les-supercondensateurs",
        type: "labolycee",
      },
      {
        source: "Bac 2022 · Polynésie · Jour 2",
        title: "Un capteur capacitif",
        desc: "Circuit RC classique, sujet court et propre.",
        points: 5,
        duration: "53 min",
        hasCorrection: true,
        url: "https://www.labolycee.org/un-capteur-capacitif",
        type: "labolycee",
      },
      {
        source: "Bac 2022 · Nouvelle Calédonie · Jour 2",
        title: "Anatomie d'un condensateur",
        desc: "Charge, constante de temps, influence géométrie sur la capacité.",
        points: 5,
        duration: "53 min",
        hasCorrection: true,
        url: "https://www.labolycee.org/anatomie-dun-condensateur",
        type: "labolycee",
      },
    ],
  },
  {
    id: 2,
    label: "Force Acide-Base",
    icon: "🧪",
    num: "02",
    desc: "Couples acide/base, pH, espèces majoritaires, diagrammes de prédominance, Ka/pKa.",
    color: "#8b1e2d",
    border: "rgba(139,30,45,0.45)",
    bg: "rgba(139,30,45,0.08)",
    exercises: [
      {
        source: "VecteurBac · ECE 2026",
        title: "Force des acides",
        desc: "Sujet ECE (TP) avec corrigé. Travail expérimental + raisonnement.",
        points: null,
        duration: "1h",
        hasCorrection: true,
        url: "https://www.vecteurbac.fr/force-des-acides/",
        note: "Format ECE/TP, pas écrit classique",
        type: "vecteurbac",
      },
      {
        source: "Métropole septembre 2025 · Jour 2",
        title: "Les pluies acides",
        desc: "Acide-base, diagramme de distribution, pKa, Ka, dilution, acide fort. + Cinétique, loi des gaz parfaits, t½.",
        points: 9,
        duration: "1h35",
        hasCorrection: true,
        url: "https://www.labolycee.org/les-pluies-acides-0",
        type: "labolycee",
      },
      {
        source: "Bac 2024 septembre · Métropole · Jour 1",
        title: "L'acide citrique comme produit ménager",
        desc: "Spectro IR, solubilité, diagramme de distribution, constante d'acidité, titrage pH-métrique, choix indicateur coloré.",
        points: 9,
        duration: "1h35",
        hasCorrection: false,
        url: "https://www.labolycee.org/lacide-citrique-comme-produit-menager",
        type: "labolycee",
      },
      {
        source: "Bac 2025 · Asie · Jour 1",
        title: "Pollution ammoniacale",
        desc: "Acide/base, schéma de Lewis, diagramme de prédominance, titrage conductimétrique.",
        points: 5,
        duration: "53 min",
        hasCorrection: true,
        url: "https://www.labolycee.org/pollution-ammoniacale",
        type: "labolycee",
      },
      {
        source: "Bac 2025 · Métropole · Jour 1",
        title: "Un emballage intelligent au rayon poissonnerie",
        desc: "Synthèse, CCM, spectres, Ka/pKa, titrage pH-métrique, demi-équivalence, incertitudes, z-score, dilution.",
        points: 9,
        duration: "1h35",
        hasCorrection: true,
        url: "https://www.labolycee.org/un-emballage-intelligent-au-rayon-poissonnerie",
        type: "labolycee",
      },
      {
        source: "Métropole septembre 2025 · Jour 1",
        title: "Étude d'une lessive « multi-usages »",
        desc: "Acide-base, diagramme de prédominance, titrage pH-métrique. Sujet court et bien ciblé.",
        points: 4,
        duration: "42 min",
        hasCorrection: true,
        url: "https://www.labolycee.org/etude-dune-lessive-multi-usages",
        type: "labolycee",
      },
    ],
  },
  {
    id: 3,
    label: "Électrolyse",
    icon: "⚗️",
    num: "03",
    desc: "Sens des réactions, électrodes (anode/cathode), calculs de matière déposée.",
    color: "#3d5641",
    border: "rgba(61,86,65,0.5)",
    bg: "rgba(61,86,65,0.1)",
    exercises: [
      {
        source: "VecteurBac · Métropole STI2D juin 2021",
        title: "L'électrolyse au sel",
        desc: "Oxydoréduction, quantité de matière, acide-base. Sujet + corrigé en PDF.",
        points: 6,
        duration: "54 min",
        hasCorrection: true,
        url: "https://www.vecteurbac.fr/lelectrolyse-au-sel/",
        note: "Sujet STI2D — pas Spé Physique-Chimie",
        type: "vecteurbac",
      },
      {
        source: "Métropole septembre 2025 · Jour 1",
        title: "Traitement de surface d'une pièce de jeu d'échecs",
        desc: "Oxydoréduction, électrolyse, masse du dépôt métallique. Sujet récent et représentatif.",
        points: 5,
        duration: "53 min",
        hasCorrection: true,
        url: "https://www.labolycee.org/traitement-de-surface-dune-piece-de-jeu-dechecs",
        type: "labolycee",
      },
      {
        source: "Vidéo YouTube · Correction d'annales",
        title: "Correction BAC (2015-2020) : Piles & électrolyse",
        desc: "Vidéo de révision sur le thème piles/électrolyse.",
        points: null,
        duration: null,
        hasCorrection: false,
        url: "https://www.youtube.com/watch?v=L1Faczw4dYI",
        note: "BAC option SM (tunisien) — pas le programme français",
        type: "video",
      },
      {
        source: "Vidéo YouTube · ECE Terminale Spé",
        title: "ÉLECTROLYSE TP de BAC — ECE",
        desc: "Correction d'un ECE d'électrodéposition. Utile pour visualiser le protocole et les calculs.",
        points: null,
        duration: null,
        hasCorrection: false,
        url: "https://www.youtube.com/watch?v=6OjfR7UlQiU",
        note: "Programme français Tale Spé",
        type: "video",
      },
    ],
  },
];

function SourceBadge({ type }) {
  const config = {
    labolycee: { label: "LaboLycée", color: "#c8902f" },
    vecteurbac: { label: "VecteurBac", color: "#8b1e2d" },
    video: { label: "▶ Vidéo", color: "#3d5641" },
  };
  const c = config[type] || config.labolycee;
  return (
    <span style={{
      fontSize: '0.65rem',
      fontFamily: 'JetBrains Mono, monospace',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: c.color,
      background: `${c.color}18`,
      border: `1px solid ${c.color}40`,
      borderRadius: '0.3rem',
      padding: '0.15rem 0.45rem',
    }}>
      {c.label}
    </span>
  );
}

function ExerciseCard({ ex, topicColor }) {
  return (
    <div style={{
      background: 'rgba(14,20,24,0.55)',
      border: `1px solid rgba(200,144,47,0.12)`,
      borderRadius: '0.875rem',
      padding: '1.1rem 1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
      transition: 'border-color 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = `${topicColor}55`}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(200,144,47,0.12)'}
    >
      {/* Source line */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <SourceBadge type={ex.type} />
        <span style={{ fontSize: '0.7rem', color: '#78716c', fontFamily: 'JetBrains Mono, monospace' }}>{ex.source}</span>
      </div>

      {/* Title */}
      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e7dcc8', fontFamily: 'Fraunces, serif', lineHeight: 1.3 }}>
        {ex.title}
      </div>

      {/* Desc */}
      <p style={{ fontSize: '0.78rem', color: '#a8a29e', lineHeight: 1.55 }}>{ex.desc}</p>

      {/* Note */}
      {ex.note && (
        <p style={{ fontSize: '0.7rem', color: '#78716c', fontStyle: 'italic' }}>{ex.note}</p>
      )}

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {ex.points && (
            <span style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', color: '#a8a29e', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.3rem', padding: '0.1rem 0.45rem' }}>
              {ex.points} pts
            </span>
          )}
          {ex.duration && (
            <span style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', color: '#a8a29e', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.3rem', padding: '0.1rem 0.45rem' }}>
              ⏱ {ex.duration}
            </span>
          )}
          {ex.hasCorrection && (
            <span style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', color: '#3d8f47', background: 'rgba(61,143,71,0.1)', border: '1px solid rgba(61,143,71,0.3)', borderRadius: '0.3rem', padding: '0.1rem 0.45rem' }}>
              ✓ Correction
            </span>
          )}
        </div>
        <a
          href={ex.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            fontFamily: 'JetBrains Mono, monospace',
            color: topicColor,
            background: `${topicColor}14`,
            border: `1px solid ${topicColor}55`,
            borderRadius: '0.5rem',
            padding: '0.35rem 0.85rem',
            textDecoration: 'none',
            transition: 'background 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => e.currentTarget.style.background = `${topicColor}28`}
          onMouseLeave={e => e.currentTarget.style.background = `${topicColor}14`}
        >
          Ouvrir →
        </a>
      </div>
    </div>
  );
}

export default function BacEntrainement() {
  const [openTopic, setOpenTopic] = useState(0);

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>📋</span>
          <h2 style={{
            fontFamily: 'Fraunces, serif',
            fontSize: '1.6rem',
            fontWeight: 900,
            color: '#e7dcc8',
            letterSpacing: '-0.01em',
          }}>
            Exercices Bac — Entraînement
          </h2>
        </div>
        <p style={{ fontSize: '0.82rem', color: '#78716c', fontFamily: 'JetBrains Mono, monospace' }}>
          Sujets officiels de baccalauréat triés par thème · Corrections disponibles sur les sites sources
        </p>
      </div>

      {/* Topic blocks */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {TOPICS.map((topic, idx) => {
          const isOpen = openTopic === idx;
          return (
            <div key={topic.id} style={{
              background: isOpen ? topic.bg : 'rgba(14,20,24,0.6)',
              border: `1px solid ${isOpen ? topic.border : 'rgba(200,144,47,0.14)'}`,
              borderRadius: '1rem',
              overflow: 'hidden',
              transition: 'all 0.25s ease',
            }}>
              {/* Topic header */}
              <button
                onClick={() => setOpenTopic(isOpen ? null : idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '1rem 1.25rem',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                {/* Number badge */}
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: topic.color,
                  background: `${topic.color}14`,
                  border: `1px solid ${topic.border}`,
                  borderRadius: '0.5rem',
                  padding: '0.3rem 0.7rem',
                  minWidth: '3rem',
                  textAlign: 'center',
                }}>
                  {topic.num}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1rem' }}>{topic.icon}</span>
                    <span style={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#e7dcc8',
                    }}>
                      {topic.label}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#78716c', marginTop: '0.2rem' }}>{topic.desc}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.68rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    color: topic.color,
                    background: `${topic.color}14`,
                    border: `1px solid ${topic.border}`,
                    borderRadius: '999px',
                    padding: '0.15rem 0.6rem',
                    whiteSpace: 'nowrap',
                  }}>
                    {topic.exercises.length} sujets
                  </span>
                  <span style={{
                    color: '#78716c',
                    fontSize: '0.8rem',
                    transform: isOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s',
                    display: 'inline-block',
                  }}>▼</span>
                </div>
              </button>

              {/* Exercise list */}
              {isOpen && (
                <div style={{
                  padding: '0 1.25rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}>
                  {topic.exercises.map((ex, i) => (
                    <ExerciseCard key={i} ex={ex} topicColor={topic.color} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <div style={{
        marginTop: '2rem',
        padding: '1rem 1.25rem',
        background: 'rgba(200,144,47,0.06)',
        border: '1px solid rgba(200,144,47,0.2)',
        borderRadius: '0.75rem',
        fontSize: '0.78rem',
        color: '#a8a29e',
        fontFamily: 'JetBrains Mono, monospace',
      }}>
        💡 <strong style={{ color: '#c8902f' }}>Conseil :</strong> Commence par les sujets RC (plus directs), enchaîne avec Acide-Base, termine par Électrolyse. Les sujets marqués "Correction dispo" te permettent une auto-correction immédiate.
      </div>
    </div>
  );
}