// Chapters 3, 4, 5 — Acido-basique, Force acides/bases, Titrage
import { buildCorrection } from './quizEngine';

export const quizCh3 = [
  {
    id: 'ch3_q1', type: 1, chapter: 3,
    question: "Au sens de Brønsted, un acide est :",
    options: ["Un accepteur de proton H⁺", "Un donneur de proton H⁺", "Un donneur d'électrons", "Une espèce qui libère OH⁻"],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Un donneur de proton H⁺",
      explanation: "Définition de Brønsted : Acide = donneur H⁺. Base = accepteur H⁺. Ne pas confondre avec Lewis (donneur/accepteur de paires d'électrons).",
      memo: "Brønsted : Acide → donne H⁺. Base → prend H⁺.",
      trap: "La définition de Lewis est différente. Au Bac Spé, c'est toujours Brønsted.",
      technique: "Identifier : la molécule perd un H⁺ → acide. Gagne un H⁺ → base.",
      bacLink: "Ch.3 — Définitions acide-base Brønsted"
    })
  },
  {
    id: 'ch3_q2', type: 4, chapter: 3,
    question: "pH = 3,5. Calculer [H₃O⁺].",
    options: ["3,16×10⁻⁴ mol/L", "3,5×10⁻³ mol/L", "10^3,5 mol/L", "0,35 mol/L"],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "[H₃O⁺] = 10^(-pH) = 10^(-3,5) = 3,16×10⁻⁴ mol/L",
      explanation: "pH = −log([H₃O⁺]/C₀) → [H₃O⁺] = C₀ × 10^(−pH) = 1 × 10^(−3,5) ≈ 3,16×10⁻⁴ mol/L",
      memo: "pH → [H₃O⁺] : inverser le log → 10^(−pH)",
      trap: "10^(−3,5) ≠ 3,5×10⁻³. Calculer correctement : 10^(−3,5) = 10^(−4) × 10^(0,5) ≈ 3,16×10⁻⁴.",
      technique: "Calculatrice : 10^(−3,5) → ou utiliser 10^(−4) × √10 ≈ 10⁻⁴ × 3,16",
      bacLink: "Ch.3 — Calcul [H₃O⁺] depuis pH"
    })
  },
  {
    id: 'ch3_q3', type: 2, chapter: 3,
    question: "Vrai ou Faux : L'eau est une espèce amphotère.",
    options: ["Vrai", "Faux"],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "Vrai — H₂O appartient au couple H₃O⁺/H₂O (base) ET au couple H₂O/HO⁻ (acide).",
      explanation: "L'eau peut céder un H⁺ (couple H₂O/HO⁻) ou en accepter un (couple H₃O⁺/H₂O). Elle est à la fois acide et base → amphotère.",
      memo: "H₂O : amphotère → base du couple H₃O⁺/H₂O et acide du couple H₂O/HO⁻",
      trap: "Ne pas confondre 'neutre' (pH = 7) et 'amphotère' (double comportement).",
      technique: "Amphotère = peut jouer les deux rôles selon le partenaire réactionnel.",
      bacLink: "Ch.3 — Ampholytes, eau"
    })
  },
  {
    id: 'ch3_q4', type: 9, chapter: 3,
    question: "Un élève écrit : 'HCl est une base car il libère Cl⁻ en solution.' Identifier l'erreur.",
    options: [
      "Pas d'erreur, HCl est une base",
      "HCl est un acide fort (donneur H⁺), pas une base. Cl⁻ est la base conjuguée.",
      "HCl ne se dissocie pas en solution",
      "Cl⁻ est bien une base, donc c'est correct"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "HCl est un ACIDE FORT. Il donne H⁺ à l'eau : HCl + H₂O → H₃O⁺ + Cl⁻. Cl⁻ est la BASE CONJUGUÉE de HCl.",
      explanation: "HCl → H⁺ + Cl⁻ : HCl donne H⁺ → c'est un acide. Cl⁻ reçoit H⁺ → c'est une base. Le couple est HCl/Cl⁻.",
      memo: "HCl : acide fort. Cl⁻ : base conjuguée (très faible car HCl fort).",
      trap: "Confondre 'l'acide se dissocie et donne une base conjuguée' avec 'c'est une base'.",
      technique: "Identifier le couple : l'acide perd H⁺ → son conjugué est la base.",
      bacLink: "Ch.3 — Couples acide-base, acides forts"
    })
  },
  {
    id: 'ch3_q5', type: 21, chapter: 3,
    question: "On mesure pH = 11,5 pour une solution. Que peut-on conclure sur sa nature ?",
    options: [
      "Solution acide ([H₃O⁺] > [HO⁻])",
      "Solution neutre",
      "Solution basique ([HO⁻] > [H₃O⁺]), [H₃O⁺] ≈ 3,16×10⁻¹² mol/L",
      "Solution amphotère"
    ],
    correctIndex: 2,
    correction: buildCorrection({
      answer: "pH > 7 → solution basique. [H₃O⁺] = 10^(−11,5) ≈ 3,16×10⁻¹² mol/L. [HO⁻] = Ke/[H₃O⁺] ≈ 3,16×10⁻³ mol/L.",
      explanation: "pH > 7 → basique. On peut calculer [HO⁻] = 10^(−(14−11,5)) = 10^(−2,5) ≈ 3,16×10⁻³ mol/L.",
      memo: "pH > 7 = basique. pH < 7 = acide. pH = 7 = neutre (à 25°C).",
      trap: "Ces règles s'appliquent UNIQUEMENT à 25°C. À d'autres températures, pKe change.",
      technique: "[HO⁻] = 10^(−pOH) avec pOH = 14 − pH = 2,5",
      bacLink: "Ch.3 — Interprétation du pH"
    })
  },
];

export const quizCh4 = [
  {
    id: 'ch4_q1', type: 1, chapter: 4,
    question: "Plus le pKa d'un acide est petit, plus l'acide est :",
    options: ["Faible", "Fort", "Amphotère", "Neutre"],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Fort — pKa petit = Ka grand = acide fort",
      explanation: "Ka = 10^(−pKa). pKa petit → Ka grand → acide se dissocie beaucoup → fort. Exemple : HCl a pKa < 0 (très fort), CH₃COOH a pKa = 4,8 (faible).",
      memo: "pKa↓ → Ka↑ → acide plus fort",
      trap: "On confond souvent : grand pKa = acide faible (pas fort). C'est l'inverse de ce qu'on pense intuitivement.",
      technique: "Classement : pKa(HCl) < 0 < pKa(CH₃COOH) = 4,8 < pKa(H₂O) = 15,7",
      bacLink: "Ch.4 — pKa et force des acides"
    })
  },
  {
    id: 'ch4_q2', type: 11, chapter: 4,
    question: "Sur un diagramme de prédominance du couple CH₃COOH/CH₃COO⁻ (pKa = 4,8), quelle espèce prédomine à pH = 3 ?",
    graphData: {
      type: 'predominance_diagram',
      pKa: 4.8,
      acidName: 'CH₃COOH',
      baseName: 'CH₃COO⁻',
      xLabel: 'pH',
    },
    options: [
      "CH₃COO⁻ car pH > pKa",
      "CH₃COOH car pH < pKa",
      "Les deux en proportions égales",
      "H₃O⁺ car la solution est acide"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "pH = 3 < pKa = 4,8 → CH₃COOH (forme acide) prédomine.",
      explanation: "Règle de prédominance : pH < pKa → forme acide majoritaire. pH > pKa → forme basique majoriatire. pH = pKa → [AH] = [A⁻].",
      memo: "pH < pKa → acide. pH > pKa → base. pH = pKa → égalité.",
      trap: "La 'prédominance' parle de l'espèce majoritaire dans le couple, pas de l'acidité de la solution.",
      technique: "Diagramme : ligne à pH = pKa sépare les deux zones. À gauche : acide. À droite : base.",
      bacLink: "Ch.4 — Diagramme de prédominance"
    })
  },
  {
    id: 'ch4_q3', type: 4, chapter: 4,
    question: "Calculer le pH d'une solution d'acide acétique (pKa = 4,8) à c = 0,1 mol/L (acide faible).",
    options: [
      "pH = 4,8",
      "pH = ½(pKa − log c) = ½(4,8 + 1) = 2,9",
      "pH = −log(0,1) = 1",
      "pH = ½(pKa + log c) = ½(4,8 − 1) = 1,9"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "pH = ½(pKa − log c) = ½(4,8 − log(0,1)) = ½(4,8 + 1) = ½ × 5,8 = 2,9",
      explanation: "Pour acide faible : [H₃O⁺] = √(Ka × c). Donc pH = ½(pKa − log c) = ½(4,8 − (−1)) = 2,9.",
      memo: "pH acide faible = ½(pKa − log c). Vérifier approximation : τ < 5%.",
      trap: "log(0,1) = −1. Donc −log(c) = +1. pH = ½(pKa + 1) car −log(0,1) = +1.",
      technique: "Ka = 10^(−4,8) ≈ 1,58×10⁻⁵. [H₃O⁺] = √(1,58×10⁻⁵ × 0,1) = √(1,58×10⁻⁶) ≈ 1,26×10⁻³. pH ≈ 2,9.",
      bacLink: "Ch.4 — pH acide faible"
    })
  },
  {
    id: 'ch4_q4', type: 5, chapter: 4,
    question: "PIÈGE : Pour une solution de base faible (pKa = 9,2, c = 0,05 mol/L), le pH est :",
    options: [
      "pH = 9,2 (le pKa)",
      "pH = ½(pKa + pKe + log c)",
      "pH = 14 − ½(pKa − log c + log(c×Kb))",
      "pH = ½(pKe + pKa + log c)"
    ],
    correctIndex: 3,
    correction: buildCorrection({
      answer: "pH = ½(pKe + pKa + log c) = ½(14 + 9,2 + log(0,05)) = ½(14 + 9,2 − 1,3) = ½(21,9) = 10,95",
      explanation: "Pour une base faible B (couple BH⁺/B avec pKa) : pH = ½(pKe + pKa + log c).",
      memo: "Base faible : pH = ½(14 + pKa + log c)",
      trap: "Ne pas utiliser la formule de l'acide faible pour une base faible !",
      technique: "Identifier d'abord : acide faible → ½(pKa − log c). Base faible → ½(14 + pKa + log c).",
      bacLink: "Ch.4 — pH base faible"
    })
  },
  {
    id: 'ch4_q5', type: 6, chapter: 4,
    question: "La formule de Henderson-Hasselbalch est :",
    options: [
      "pH = pKa × log([A⁻]/[AH])",
      "pH = pKa + log([A⁻]/[AH])",
      "pH = pKa − log([AH]/[A⁻])",
      "B et C sont équivalentes"
    ],
    correctIndex: 3,
    correction: buildCorrection({
      answer: "pH = pKa + log([A⁻]/[AH]). Les formes B et C sont mathématiquement identiques.",
      explanation: "log([A⁻]/[AH]) = −log([AH]/[A⁻]). Les deux expressions sont équivalentes. C'est la formule fondamentale de la chimie acide-base.",
      memo: "Henderson : pH = pKa + log(base/acide)",
      trap: "La fraction est TOUJOURS forme basique / forme acide (ordre alphabétique du couple : B/A).",
      technique: "Dérivation rapide : Ka = [A⁻][H₃O⁺]/[AH] → log → pH = pKa + log([A⁻]/[AH])",
      bacLink: "Ch.4 — Henderson-Hasselbalch"
    })
  },
];

export const quizCh5 = [
  {
    id: 'ch5_q1', type: 1, chapter: 5,
    question: "La condition sur la réaction de titrage est qu'elle doit être :",
    options: [
      "Lente et réversible",
      "Unique, totale et rapide",
      "Unique, à l'équilibre et lente",
      "Exothermique et totale"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Unique, totale et rapide",
      explanation: "3 conditions obligatoires : 1) Unique (pas de réaction parasite). 2) Totale (K très grand, avancement quasi-complet). 3) Rapide (équilibre atteint instantanément à chaque ajout).",
      memo: "UTR : Unique, Totale, Rapide",
      trap: "Oublier une des 3 conditions. Chaque condition a son rôle spécifique.",
      technique: "Mémo : UTR comme 'Ultra Turbo Rapide'",
      bacLink: "Ch.5 — Conditions de la réaction de titrage"
    })
  },
  {
    id: 'ch5_q2', type: 12, chapter: 5,
    question: "MONTRER QUE la relation à l'équivalence pour A + B → Produits est : cA×VA = cB×VE",
    options: null,
    isOpen: true,
    correction: buildCorrection({
      answer: "À l'équivalence, les réactifs sont en proportions stœchiométriques : nA = nB (pour 1:1). Donc cA×VA = cB×VE. Pour a×A + b×B : cA×VA/a = cB×VE/b.",
      explanation: "Définition de l'équivalence : nA_versé / a = nB_titré / b. D'où : cB×VE / b = cA×VA / a → cA = b×cB×VE / (a×VA).",
      memo: "Équivalence : nA/a = nB/b (stœchiométrie respectée)",
      trap: "Si coefficients a ≠ b, ne pas oublier de diviser par les coefficients stœchiométriques.",
      technique: "Tableau ICE à l'équivalence : les deux réactifs sont totalement consommés.",
      bacLink: "Ch.5 — Relation à l'équivalence"
    })
  },
  {
    id: 'ch5_q3', type: 4, chapter: 5,
    question: "Titrage de 20 mL d'HCl par NaOH (c_NaOH = 0,1 mol/L). VE = 15 mL. Calculer c(HCl).",
    options: [
      "c(HCl) = 0,075 mol/L",
      "c(HCl) = 0,1 × 15/20 = 0,075 mol/L",
      "c(HCl) = 0,1 × 20/15 = 0,133 mol/L",
      "A et B sont identiques"
    ],
    correctIndex: 3,
    correction: buildCorrection({
      answer: "c(HCl) × 20 = 0,1 × 15 → c(HCl) = 0,1 × 15/20 = 0,075 mol/L",
      explanation: "HCl + NaOH → NaCl + H₂O (1:1). nHCl = nNaOH,eq → c(HCl)×V(HCl) = cNaOH×VE → c(HCl) = 0,1×15/20.",
      memo: "c_inconnue = c_connue × VE / V_titré",
      trap: "Ne pas inverser le rapport VE/V_titré. c(HCl) < c(NaOH) car VE < V_titré.",
      technique: "nHCl = c×V = 0,075×0,020 = 1,5×10⁻³ mol. nNaOH = 0,1×0,015 = 1,5×10⁻³ mol ✓",
      bacLink: "Ch.5 — Calcul de concentration par titrage"
    })
  },
  {
    id: 'ch5_q4', type: 11, chapter: 5,
    question: "Sur une courbe de titrage pH-métrique, comment déterminer VE par la méthode des tangentes parallèles ?",
    graphData: {
      type: 'titration_curve',
      xLabel: 'Volume versé (mL)',
      yLabel: 'pH',
    },
    options: [
      "VE = abscisse du point d'inflexion de la courbe en S",
      "VE = abscisse du pH maximum",
      "VE = milieu du saut de pH repéré par deux tangentes parallèles",
      "A et C sont identiques"
    ],
    correctIndex: 3,
    correction: buildCorrection({
      answer: "VE est l'abscisse du point d'inflexion (milieu du saut). Les méthodes du point d'inflexion et des tangentes parallèles donnent le même résultat.",
      explanation: "Le saut de pH est centré sur VE. La méthode des tangentes : tracer 2 droites parallèles tangentes à la courbe de part et d'autre du saut → la médiatrice des deux points de contact donne VE.",
      memo: "VE = point d'inflexion = milieu du saut de pH",
      trap: "Le pH à l'équivalence n'est PAS forcément 7 (dépend des espèces titrées).",
      technique: "Méthode dérivée : maximum de dpH/dV = VE. Méthode tangentes : tracé géométrique.",
      bacLink: "Ch.5 — Détermination de VE par pH-métrie"
    })
  },
  {
    id: 'ch5_q5', type: 5, chapter: 5,
    question: "PIÈGE : Lors d'un titrage conductimétrique HCl par NaOH, pourquoi la conductivité DIMINUE avant l'équivalence ?",
    options: [
      "Parce que NaOH est non conducteur",
      "Parce que H₃O⁺ (λ = 35,0 mS·m²/mol) est remplacé par Na⁺ (λ = 5,0) de conductivité bien inférieure",
      "Parce qu'on dilue la solution",
      "Parce que NaCl précipite"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Les H₃O⁺ très conducteurs (λ = 35,0) sont consommés et remplacés par des Na⁺ peu conducteurs (λ = 5,0) → σ globale diminue.",
      explanation: "Avant l'équivalence : H₃O⁺ + OH⁻ → H₂O. Les H₃O⁺ disparaissent (λ très élevé) et sont remplacés par Na⁺ (λ faible). Donc σ diminue.",
      memo: "H₃O⁺ (35) → Na⁺ (5) : conductivité chute avant l'équivalence",
      trap: "On pourrait penser que l'ajout de NaOH (ions supplémentaires) augmente σ. Mais c'est la consommation de H₃O⁺ très conducteur qui domine.",
      technique: "Comparer les λ : H₃O⁺ = 35,0 >> Na⁺ = 5,0. Perte de conductivité nette.",
      bacLink: "Ch.5 — Titrage conductimétrique acide fort/base forte"
    })
  },
];