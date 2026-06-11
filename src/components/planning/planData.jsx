// Plan de révision stratégique janvier → juin (Bac Physique-Chimie)
export const PHASES = [
  {
    id: 1,
    period: 'Janvier – Février',
    title: 'Consolidation & Mécanique',
    icon: '🏗️',
    color: '#4fd1c5',
    intro: "Période idéale pour verrouiller les gros morceaux du programme, en particulier la mécanique qui demande du temps de digestion.",
    objectives: [
      { label: 'Physique', text: "Mécanique de Newton (mouvements rectilignes, paraboliques, satellites), énergétique, premiers chapitres sur les ondes." },
      { label: 'Chimie', text: "Transformations acido-basiques (pH, Ka), cinétique chimique (vitesse, temps de demi-réaction), dosages (spectrophotométrie, conductimétrie)." },
    ],
    weeks: [
      { id: 'w1-2', label: 'Semaines 1-2', text: "Fiches de synthèse sur les 3 lois de Newton et les équations horaires. Refaire les exercices de base sur le projectile dans un champ de pesanteur uniforme.", chapters: [10, 11, 12] },
      { id: 'w3-4', label: 'Semaines 3-4', text: "Révision de la chimie des solutions (pH, diagrammes de prédominance). Maîtriser pH = pKa + log([A⁻]/[AH]).", chapters: [3, 4] },
      { id: 'w5-6', label: 'Semaines 5-6', text: "Suivi temporel d'une réaction (cinétique). Tracer et exploiter une vitesse volumique de disparition ou d'apparition.", chapters: [1, 5] },
      { id: 'w7-8', label: 'Semaines 7-8', text: "Mécanique céleste (lois de Kepler) et conservation / non-conservation de l'énergie mécanique.", chapters: [13] },
    ],
  },
  {
    id: 2,
    period: 'Mars – Avril',
    title: 'Diversification & Automatismes',
    icon: '⚙️',
    color: '#ee7f9d',
    intro: "On attaque les concepts plus spécifiques et on commence à lier les chapitres entre eux.",
    objectives: [
      { label: 'Physique', text: "Thermodynamique (premier principe, transferts thermiques), électricité (circuit RC), physique quantique (dualité onde-particule, niveaux d'énergie)." },
      { label: 'Chimie', text: "Évolution spontanée (Qr, critère d'évolution), piles et électrolyse, chimie organique (synthèses, mécanismes réactionnels)." },
    ],
    weeks: [
      { id: 'w9-10', label: 'Semaines 9-10', text: "Le dipôle RC (charge et décharge, équations différentielles). ⭐ Classique du Bac à maîtriser absolument.", chapters: [20] },
      { id: 'w11-12', label: 'Semaines 11-12', text: "Thermodynamique (bilans énergétiques, loi de refroidissement de Newton) et modèle ondulatoire de la lumière (interférences, diffraction).", chapters: [15, 16, 17] },
      { id: 'w13-14', label: 'Semaines 13-14', text: "Fonctionnement d'une pile (capacité maximale Qmax) vs Électrolyse (système forcé).", chapters: [2, 9] },
      { id: 'w15-16', label: 'Semaines 15-16', text: "Chimie organique (groupes caractéristiques, mécanismes : nucléophile/électrophile) et spectroscopie (IR, RMN).", chapters: [6, 7] },
    ],
  },
  {
    id: 3,
    period: 'Mai',
    title: 'Intensification & Sujets Types',
    icon: '🔥',
    color: '#e8b44a',
    intro: "Le programme est presque entièrement vu. On arrête de réviser chapitre par chapitre et on passe en mode transversal : la méthode des annales. Au moins 2 sujets de Bac complets (3h30) par semaine en conditions réelles (sans téléphone, calculatrice en mode examen).",
    objectives: [
      { label: 'Analyse de documents', text: "S'entraîner à extraire les données utiles des annexes (graphiques, textes historiques, tableaux de données)." },
      { label: 'Rédaction', text: "La rigueur paie : citer les lois utilisées (« D'après la 2ème loi de Newton appliquée au système... »), définir ses repères, soigner les unités." },
      { label: 'ECE', text: "Relire ses TP : spectrophotomètre, pH-mètre, burette graduée, estimation d'une incertitude-type." },
    ],
    weeks: [
      { id: 'w17', label: 'Mai · Semaine 1', text: "2 sujets complets en conditions réelles + correction active (refaire les questions ratées).", chapters: [] },
      { id: 'w18', label: 'Mai · Semaine 2', text: "2 sujets complets + focus analyse de documents et extraction de données.", chapters: [] },
      { id: 'w19', label: 'Mai · Semaine 3', text: "2 sujets complets + travail de la rédaction (lois citées, unités, chiffres significatifs).", chapters: [] },
      { id: 'w20', label: 'Mai · Semaine 4', text: "2 sujets complets + préparation ECE (TP, matériel, incertitudes).", chapters: [] },
    ],
  },
  {
    id: 4,
    period: 'Juin',
    title: 'Sprint Final & Réglages Fins',
    icon: '🏁',
    color: '#34d399',
    intro: "Le mois de la confiance et du maintien des connaissances.",
    objectives: [],
    weeks: [
      { id: 'w21', label: 'Juin · Semaine 1', text: "Relecture exclusive des fiches (formules clés, définitions, schémas de montages). Blindage sur l'incertitude et les chiffres significatifs.", chapters: [] },
      { id: 'w22', label: 'Juin · Semaine 2', text: "Refaire uniquement les « questions types » qui tombent chaque année : trouver une équation différentielle, établir une équation horaire, justifier le choix d'un indicateur coloré.", chapters: [] },
      { id: 'w23', label: 'Veille de l\'épreuve', text: "On pose les stylos. 😌 Détente, sommeil, préparation du matériel : convocation, pièce d'identité, calculatrice chargée + piles de rechange, stylos.", chapters: [] },
    ],
  },
];

export const BONUS_TIPS = [
  { icon: '📓', title: 'Le carnet d\'erreurs', text: "Dès janvier, note toutes tes erreurs récurrentes d'exercices ou de DS (ex : « oublier de convertir les km en m », « confondre quantité de matière et concentration »). Relis-le avant chaque session de révision." },
  { icon: '🧮', title: 'Maîtrise ta calculatrice', text: "Tu dois rentrer des formules complexes avec des puissances de 10 sans erreur de parenthèses. Crée des programmes ou utilise le mode mémoire, mais sache le faire vite." },
  { icon: '🧪', title: 'Ne néglige pas la chimie organique', text: "Elle représente une part importante des points de chimie et repose sur la logique et le par-cœur (mécanismes, familles de molécules). Des points « faciles » à glaner." },
];