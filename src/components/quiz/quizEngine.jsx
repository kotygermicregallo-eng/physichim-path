// Quiz Engine — types, correction structure, utilities

export const QUESTION_TYPES = {
  1: { label: 'QCM', icon: '🔘', color: '#38bdf8' },
  2: { label: 'Vrai/Faux', icon: '✅', color: '#34d399' },
  3: { label: 'Rédaction courte', icon: '✍️', color: '#a78bfa' },
  4: { label: 'Calcul Flash', icon: '⚡', color: '#fbbf24' },
  5: { label: 'Piège', icon: '🪤', color: '#f87171' },
  6: { label: 'Compléter la formule', icon: '📐', color: '#fb923c' },
  7: { label: 'Mise en situation Bac', icon: '🎓', color: '#c8902f' },
  8: { label: 'Remettre dans l\'ordre', icon: '🔢', color: '#818cf8' },
  9: { label: 'Identifier l\'erreur', icon: '🔍', color: '#f472b6' },
  10: { label: 'Association', icon: '🔗', color: '#2dd4bf' },
  11: { label: 'Graphe à interpréter', icon: '📈', color: '#4ade80' },
  12: { label: 'Mini démonstration', icon: '🧮', color: '#e879f9' },
  13: { label: 'Schéma à compléter', icon: '🗺️', color: '#fb7185' },
  14: { label: 'Convertir & unités', icon: '📏', color: '#60a5fa' },
  15: { label: 'Bonne méthode', icon: '🎯', color: '#a3e635' },
  16: { label: 'Définir avec précision', icon: '📖', color: '#f9a8d4' },
  17: { label: 'Condition d\'application', icon: '⚠️', color: '#fde68a' },
  18: { label: 'Contexte inédit', icon: '🌍', color: '#6ee7b7' },
  19: { label: 'Raisonnement qualitatif', icon: '🧠', color: '#c4b5fd' },
  20: { label: 'Synthèse de chapitre', icon: '🔭', color: '#fdba74' },
  21: { label: 'Interpréter le résultat', icon: '💡', color: '#fca5a5' },
};

// Correction has 6 layers:
// answer, explanation, memo, trap, technique, bacLink
export function buildCorrection({ answer, explanation, memo, trap, technique, bacLink }) {
  return { answer, explanation, memo, trap, technique, bacLink };
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}