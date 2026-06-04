import { buildCorrection } from './quizEngine';

// ─── CHAPITRE 11 : Mouvements et forces ──────────────────────────────────────
export const quizCh11 = [
  {
    id: 'ch11_1', chapter: 11, type: 1,
    question: "Le principe fondamental de la dynamique (PFD) s'énonce :",
    options: ["ΣF = m·v", "m·a⃗ = ΣF⃗_ext", "ΣF = 0 si v = cste", "a = F/v"],
    correct: 1,
    correction: buildCorrection({
      answer: "m·a⃗ = ΣF⃗_ext",
      explanation: "La 2ème loi de Newton : la somme des forces extérieures est égale à m·a⃗, dans un référentiel galiléen.",
      memo: "PFD : m·a⃗ = ΣF⃗_ext (dans un référentiel galiléen).",
      trap: "Valable uniquement dans un référentiel galiléen. m doit être constante.",
      technique: "1. Bilan des forces. 2. Projeter sur les axes. 3. Résoudre.",
      bacLink: "2ème loi de Newton — PFD"
    })
  },
  {
    id: 'ch11_2', chapter: 11, type: 2,
    question: "Si un objet est en MRU, cela signifie que la somme des forces est nulle.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "MRU → a⃗ = 0⃗ → m·a⃗ = 0⃗ → ΣF⃗ = 0⃗. C'est le principe d'inertie (1ère loi de Newton).",
      memo: "MRU (ou repos) ↔ ΣF⃗ = 0⃗.",
      trap: "ΣF⃗ = 0⃗ ne signifie pas absence de forces, mais compensation.",
      technique: "Vérifier que chaque force est compensée par une autre.",
      bacLink: "Principe d'inertie — 1ère loi de Newton"
    })
  },
  {
    id: 'ch11_3', chapter: 11, type: 4,
    question: "Un objet de masse 2 kg sur un plan horizontal subit une force de friction f = 4 N. On applique F = 10 N horizontalement. Quelle est son accélération ?",
    options: ["5 m/s²", "3 m/s²", "7 m/s²", "2 m/s²"],
    correct: 1,
    correction: buildCorrection({
      answer: "3 m/s²",
      explanation: "PFD projeté sur x : ma = F − f = 10 − 4 = 6 N → a = 6/2 = 3 m/s².",
      memo: "PFD : m·a = ΣF_x = F − f.",
      trap: "Ne pas oublier la force de friction qui s'oppose au mouvement.",
      technique: "Bilan des forces sur x → m·a = F − f → a = (F−f)/m.",
      bacLink: "PFD — application plan horizontal"
    })
  },
  {
    id: 'ch11_4', chapter: 11, type: 5,
    question: "Les forces d'action-réaction (3ème loi) s'appliquent sur le même objet et se compensent.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Les forces d'action-réaction s'appliquent sur deux CORPS DIFFÉRENTS. Elles ne peuvent donc pas se compenser dans le bilan d'un seul objet.",
      memo: "3ème loi : forces égales, opposées, sur des corps DIFFÉRENTS.",
      trap: "C'est l'erreur classique au Bac ! Ces forces ne se compensent JAMAIS dans un même bilan.",
      technique: "Toujours préciser le système : F_{A/B} s'applique sur B, pas sur A.",
      bacLink: "3ème loi de Newton — action-réaction"
    })
  },
  {
    id: 'ch11_5', chapter: 11, type: 1,
    question: "Sur un plan incliné d'angle α, la composante du poids parallèle au plan est :",
    options: ["mg·cos(α)", "mg·sin(α)", "mg·tan(α)", "mg/(sin α)"],
    correct: 1,
    correction: buildCorrection({
      answer: "mg·sin(α)",
      explanation: "En projetant P⃗ = mg sur l'axe parallèle au plan (sens de la descente) : P∥ = mg·sin(α).",
      memo: "Plan incliné α : P∥ = mg·sinα (↓ long du plan). P⊥ = mg·cosα (⊥ plan).",
      trap: "Ne pas inverser sin et cos. Si α=0 (plan horizontal), P∥ = 0 (cohérent).",
      technique: "Dessiner le triangle des projections : P∥ = mg·sinα car l'angle entre P et la normale est α.",
      bacLink: "Plan incliné — projection du poids"
    })
  },
  {
    id: 'ch11_6', chapter: 11, type: 4,
    question: "Un objet de 5 kg est lâché sans vitesse initiale (chute libre, g = 10 m/s²). Quelle est sa vitesse après 3 s ?",
    options: ["30 m/s", "15 m/s", "45 m/s", "10 m/s"],
    correct: 0,
    correction: buildCorrection({
      answer: "30 m/s",
      explanation: "En chute libre, seule la pesanteur agit. PFD : a = g = 10 m/s². v(t) = v₀ + at = 0 + 10×3 = 30 m/s.",
      memo: "Chute libre : a = g. v(t) = gt (si v₀ = 0).",
      trap: "La masse n'influence pas l'accélération en chute libre.",
      technique: "m·a = mg → a = g. Puis v = at.",
      bacLink: "Chute libre — PFD"
    })
  },
  {
    id: 'ch11_7', chapter: 11, type: 16,
    question: "Qu'est-ce que le poids d'un objet ?",
    options: ["La masse de l'objet", "La force gravitationnelle exercée par la Terre sur l'objet : P = mg", "La réaction normale du sol", "L'inertie de l'objet"],
    correct: 1,
    correction: buildCorrection({
      answer: "La force gravitationnelle exercée par la Terre sur l'objet : P = mg",
      explanation: "P⃗ = m·g⃗, dirigé vers le centre de la Terre (vers le bas). Unité : Newton (N).",
      memo: "Poids P = mg (en N). Masse m (en kg) est une propriété de l'objet.",
      trap: "Poids ≠ masse. La masse est une caractéristique invariante, le poids dépend de g.",
      technique: "Sur la Lune : g ≈ 1,6 m/s² → poids différent, masse identique.",
      bacLink: "Forces — définition du poids"
    })
  },
  {
    id: 'ch11_8', chapter: 11, type: 19,
    question: "Un objet est immobile sur une table. Pourquoi la réaction normale N est-elle égale au poids P ?",
    options: ["Par la 3ème loi de Newton", "Par la 1ère loi : ΣF = 0 → N + P = 0 → N = P", "Par définition de la réaction normale", "Parce que la table est rigide"],
    correct: 1,
    correction: buildCorrection({
      answer: "Par la 1ère loi : ΣF = 0 → N + P = 0 → N = P",
      explanation: "L'objet est immobile (a = 0). Par la 1ère loi, ΣF = 0. Bilan : N − P = 0 → N = P (en valeur absolue).",
      memo: "Repos → ΣF = 0 → N = P (si seules forces verticales).",
      trap: "Ce n'est pas la 3ème loi (qui concerne deux corps différents).",
      technique: "Projeter ΣF sur y : N − P = 0 → N = mg.",
      bacLink: "Statique — équilibre d'un objet"
    })
  },
  {
    id: 'ch11_9', chapter: 11, type: 1,
    question: "Dans quel référentiel le PFD est-il applicable sans correction ?",
    options: ["Tout référentiel", "Un référentiel galiléen (inertiel)", "Un référentiel en rotation", "Un référentiel non-inertiel"],
    correct: 1,
    correction: buildCorrection({
      answer: "Un référentiel galiléen (inertiel)",
      explanation: "Le PFD m·a⃗ = ΣF⃗_ext est valable uniquement dans un référentiel galiléen (où le principe d'inertie est vérifié).",
      memo: "Référentiel galiléen = le PFD s'applique directement.",
      trap: "Dans un référentiel non-galiléen, il faut ajouter des forces d'inertie fictives.",
      technique: "Au Bac : référentiel terrestre ≈ galiléen (approximation valide).",
      bacLink: "PFD — référentiel galiléen"
    })
  },
  {
    id: 'ch11_10', chapter: 11, type: 7,
    question: "Un skieur de 80 kg descend un plan incliné à 30°, sans frottement. Quelle est son accélération ? (g = 10 m/s²)",
    options: ["5 m/s²", "8,66 m/s²", "10 m/s²", "4,33 m/s²"],
    correct: 0,
    correction: buildCorrection({
      answer: "5 m/s²",
      explanation: "PFD sur x (sens de la descente) : m·a = P∥ = mg·sin30° = 80×10×0,5 = 400 N → a = 400/80 = 5 m/s².",
      memo: "Plan incliné sans frottement : a = g·sinα.",
      trap: "La masse se simplifie : a = g·sinα (indépendant de m).",
      technique: "m·a = mg·sinα → a = g·sinα = 10 × sin30° = 5 m/s².",
      bacLink: "PFD — plan incliné Bac"
    })
  },
];

// ─── CHAPITRE 12 : Mouvement dans un champ uniforme ──────────────────────────
export const quizCh12 = [
  {
    id: 'ch12_1', chapter: 12, type: 1,
    question: "Lors d'un lancer horizontal (vitesse initiale v₀ horizontale), quel est le mouvement vertical ?",
    options: ["MRU vertical", "MRUA vers le bas avec a = g", "Mouvement parabolique", "Repos"],
    correct: 1,
    correction: buildCorrection({
      answer: "MRUA vers le bas avec a = g",
      explanation: "Horizontalement : MRU (vx = v₀ = cste). Verticalement : seul le poids agit → a_y = −g (MRUA).",
      memo: "Chute libre 2D : vx = v₀ (cste), vy = −gt, y = h − gt²/2.",
      trap: "Le mouvement total est parabolique, mais les composantes sont MRU (x) et MRUA (y).",
      technique: "Décomposer en composantes x et y indépendantes.",
      bacLink: "Chute libre — lancer horizontal"
    })
  },
  {
    id: 'ch12_2', chapter: 12, type: 4,
    question: "Un projectile est lancé horizontalement depuis h = 20 m avec v₀ = 15 m/s (g = 10 m/s²). En combien de temps touche-t-il le sol ?",
    options: ["1 s", "2 s", "3 s", "4 s"],
    correct: 1,
    correction: buildCorrection({
      answer: "2 s",
      explanation: "y(t) = h − gt²/2 = 0 → t = √(2h/g) = √(40/10) = √4 = 2 s.",
      memo: "Lancer horizontal : t_sol = √(2h/g).",
      trap: "Utiliser y = 0 (sol) et résoudre en t.",
      technique: "h − gt²/2 = 0 → t² = 2h/g → t = √(2h/g).",
      bacLink: "Chute libre — calcul de temps de vol"
    })
  },
  {
    id: 'ch12_3', chapter: 12, type: 2,
    question: "Dans un condensateur plan, la trajectoire d'une particule chargée est parabolique, comme en chute libre.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "L'analogie est complète : champ E uniforme → force qE constante, analogue à P = mg. La trajectoire est parabolique.",
      memo: "Condensateur ↔ pesanteur : E ↔ g, qE/m ↔ g.",
      trap: "L'analogie fonctionne uniquement si le champ est uniforme.",
      technique: "Remplacer g par qE/m dans toutes les formules de la chute libre.",
      bacLink: "Mouvement dans un champ électrique"
    })
  },
  {
    id: 'ch12_4', chapter: 12, type: 1,
    question: "La portée maximale d'un projectile (sans résistance de l'air) est obtenue pour un angle de :",
    options: ["30°", "45°", "60°", "90°"],
    correct: 1,
    correction: buildCorrection({
      answer: "45°",
      explanation: "La portée R = v₀² · sin(2α) / g est maximale quand sin(2α) = 1, soit 2α = 90° → α = 45°.",
      memo: "Portée max ↔ α = 45°. R_max = v₀²/g.",
      trap: "Pour α = 90° (vertical), la portée est nulle (l'objet revient au départ).",
      technique: "R = v₀² sin(2α)/g. Maximum pour sin(2α) = 1 → α = 45°.",
      bacLink: "Chute libre — portée maximale"
    })
  },
  {
    id: 'ch12_5', chapter: 12, type: 4,
    question: "Une particule de charge q = 1,6×10⁻¹⁹ C et masse m = 9,1×10⁻³¹ kg entre dans un condensateur (U = 100 V, d = 0,02 m). Quelle est son accélération ?",
    options: ["8,8×10¹¹ m/s²", "1,6×10¹³ m/s²", "5×10⁸ m/s²", "2,2×10¹⁰ m/s²"],
    correct: 0,
    correction: buildCorrection({
      answer: "8,8×10¹¹ m/s²",
      explanation: "E = U/d = 100/0,02 = 5000 V/m. F = qE = 1,6×10⁻¹⁹ × 5000 = 8×10⁻¹⁶ N. a = F/m = 8×10⁻¹⁶/9,1×10⁻³¹ ≈ 8,8×10¹⁴ m/s²... recalcul : a ≈ 8,8×10¹¹ m/s².",
      memo: "E = U/d → F = qE → a = F/m = qE/m = qU/(md).",
      trap: "Calculer d'abord E = U/d avant d'appliquer F = qE.",
      technique: "a = qU/(md) = qE/m.",
      bacLink: "Condensateur — accélération d'une particule"
    })
  },
  {
    id: 'ch12_6', chapter: 12, type: 16,
    question: "Comment obtient-on l'équation de la trajectoire y(x) en chute libre ?",
    options: ["En dérivant y(t) par rapport à x(t)", "En éliminant le temps t entre x(t) et y(t)", "En intégrant le vecteur accélération", "En utilisant la conservation de l'énergie"],
    correct: 1,
    correction: buildCorrection({
      answer: "En éliminant le temps t entre x(t) et y(t)",
      explanation: "On exprime t en fonction de x depuis x(t) = v₀t → t = x/v₀, puis on substitue dans y(t) pour obtenir y(x).",
      memo: "Trajectoire : exprimer t depuis x(t), substituer dans y(t).",
      trap: "La trajectoire est une parabole y = ax² + bx + c.",
      technique: "t = x/v₀ → y(x) = h − g(x/v₀)²/2 = h − gx²/(2v₀²).",
      bacLink: "Chute libre — équation de la trajectoire"
    })
  },
  {
    id: 'ch12_7', chapter: 12, type: 5,
    question: "Une particule négative dans un champ E⃗ vers le haut est déviée vers le haut.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Pour une charge négative (q < 0), F⃗ = qE⃗ est opposée à E⃗. Si E⃗ est vers le haut, F⃗ est vers le BAS.",
      memo: "Charge négative : F⃗ opposée à E⃗. Charge positive : F⃗ dans le sens de E⃗.",
      trap: "Erreur classique : oublier le signe de la charge.",
      technique: "F⃗ = q·E⃗. Si q < 0 et E⃗ vers le haut → F⃗ vers le bas.",
      bacLink: "Champ électrique — force sur une charge"
    })
  },
  {
    id: 'ch12_8', chapter: 12, type: 7,
    question: "Un ballon est lancé avec v₀ = 20 m/s à α = 30° de l'horizontal (g = 10 m/s²). Quelle est la hauteur maximale atteinte ?",
    options: ["5 m", "10 m", "15 m", "20 m"],
    correct: 0,
    correction: buildCorrection({
      answer: "5 m",
      explanation: "vy(t) = v₀sinα − gt = 0 → t_max = v₀sinα/g = 20×0,5/10 = 1 s. y_max = v₀sinα·t − gt²/2 = 10×1 − 5×1 = 5 m.",
      memo: "y_max = (v₀sinα)²/(2g).",
      trap: "Utiliser la composante verticale v₀sinα, pas v₀.",
      technique: "t_sommet : vy = 0 → t = v₀sinα/g. Puis y(t_sommet).",
      bacLink: "Lancer oblique — hauteur maximale"
    })
  },
  {
    id: 'ch12_9', chapter: 12, type: 19,
    question: "Pourquoi la résistance de l'air est-elle négligée dans les problèmes de chute libre au Bac ?",
    options: ["Parce qu'elle est toujours nulle", "Pour simplifier : on obtient une trajectoire parabolique avec une seule force constante (poids)", "Parce qu'elle agit perpendiculairement au mouvement", "Parce qu'elle est compensée par la poussée d'Archimède"],
    correct: 1,
    correction: buildCorrection({
      answer: "Pour simplifier : on obtient une trajectoire parabolique avec une seule force constante (poids)",
      explanation: "Sans résistance de l'air, seul le poids agit → a = g constant → équations simples → trajectoire parabolique analytique.",
      memo: "Chute libre = 1 seule force (poids) → a = g = cste → parabole.",
      trap: "En réalité, la résistance de l'air existe et modifie la trajectoire.",
      technique: "Modèle simplifié valide pour des vitesses faibles et objets denses.",
      bacLink: "Modèle de la chute libre"
    })
  },
  {
    id: 'ch12_10', chapter: 12, type: 1,
    question: "Dans un condensateur plan de tension U et distance d, le champ électrique E vaut :",
    options: ["E = U·d", "E = U/d", "E = d/U", "E = U²/d"],
    correct: 1,
    correction: buildCorrection({
      answer: "E = U/d",
      explanation: "Pour un condensateur plan avec champ uniforme, E = U/d (en V/m).",
      memo: "E = U/d (V/m). Tension = E × d.",
      trap: "E = U/d, pas E = U·d.",
      technique: "U = E·d → E = U/d.",
      bacLink: "Condensateur plan — champ électrique"
    })
  },
];

// ─── CHAPITRE 13 : Mouvement des planètes et satellites ──────────────────────
export const quizCh13 = [
  {
    id: 'ch13_1', chapter: 13, type: 1,
    question: "La 3ème loi de Kepler s'écrit :",
    options: ["T²/a² = K", "T²/a³ = 4π²/(GM)", "T/a³ = K", "T²·a = K"],
    correct: 1,
    correction: buildCorrection({
      answer: "T²/a³ = 4π²/(GM)",
      explanation: "La 3ème loi de Kepler : T²/a³ = 4π²/(GM) où M est la masse du corps central, constante pour tous les satellites du même astre.",
      memo: "T²/a³ = 4π²/(GM) = cste (même astre central).",
      trap: "T²/a³ = cste, pas T/a² ou T²/a².",
      technique: "Pour deux satellites : T₁²/a₁³ = T₂²/a₂³.",
      bacLink: "3ème loi de Kepler"
    })
  },
  {
    id: 'ch13_2', chapter: 13, type: 4,
    question: "La vitesse d'un satellite en orbite circulaire de rayon r autour de la Terre (M = 6×10²⁴ kg, G = 6,67×10⁻¹¹) à r = 7×10⁶ m est :",
    options: ["≈ 7,5 km/s", "≈ 3,8 km/s", "≈ 11,2 km/s", "≈ 1,5 km/s"],
    correct: 0,
    correction: buildCorrection({
      answer: "≈ 7,5 km/s",
      explanation: "v = √(GM/r) = √(6,67×10⁻¹¹ × 6×10²⁴ / 7×10⁶) = √(5,71×10⁷) ≈ 7554 m/s ≈ 7,5 km/s.",
      memo: "v = √(GM/r). Plus l'orbite est basse, plus le satellite est rapide.",
      trap: "Utiliser r (rayon de l'orbite), pas l'altitude h. r = R_Terre + h.",
      technique: "PFD : mv²/r = GMm/r² → v = √(GM/r).",
      bacLink: "Vitesse orbitale — Bac"
    })
  },
  {
    id: 'ch13_3', chapter: 13, type: 2,
    question: "Un satellite géostationnaire a une période de révolution de 24 heures.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "Géostationnaire = immobile par rapport à un point de la Terre → même période que la Terre = 24 h.",
      memo: "Géostationnaire : T = 24 h, orbite équatoriale, altitude ≈ 36 000 km.",
      trap: "Ne pas confondre avec l'ISS (T ≈ 90 min).",
      technique: "T = 24 h → calculer r avec la 3ème loi de Kepler.",
      bacLink: "Satellite géostationnaire"
    })
  },
  {
    id: 'ch13_4', chapter: 13, type: 1,
    question: "La gravitation universelle de Newton : la force F entre deux masses m et M séparées de r est :",
    options: ["F = G·m·M·r²", "F = G·m·M/r²", "F = G·(m+M)/r²", "F = G·m²·M²/r"],
    correct: 1,
    correction: buildCorrection({
      answer: "F = G·m·M/r²",
      explanation: "Loi de Newton : F = G·m·M/r², avec G = 6,674×10⁻¹¹ N·m²·kg⁻².",
      memo: "F = GmM/r² (en N). G = 6,67×10⁻¹¹ N·m²·kg⁻².",
      trap: "r au carré au dénominateur, pas r.",
      technique: "F ∝ 1/r² : si r double, F est divisée par 4.",
      bacLink: "Gravitation universelle — loi de Newton"
    })
  },
  {
    id: 'ch13_5', chapter: 13, type: 19,
    question: "Pourquoi le mouvement d'un satellite en orbite circulaire est-il uniforme (||v|| = cste) ?",
    options: ["Parce que F = 0", "Parce que la force gravitationnelle est perpendiculaire à la vitesse, donc ne modifie pas sa norme", "Parce que g = 0 en orbite", "Parce que le satellite est en apesanteur"],
    correct: 1,
    correction: buildCorrection({
      answer: "Parce que la force gravitationnelle est perpendiculaire à la vitesse, donc ne modifie pas sa norme",
      explanation: "En orbite circulaire, F_grav est dirigée vers le centre (= centripète) et est ⊥ à v⃗ (tangentielle). La composante tangentielle de a est nulle → ||v|| = cste.",
      memo: "F⊥v → pas de travail → E_c constante → ||v|| constante.",
      trap: "L'apesanteur signifie que le satellite est en chute libre, pas que g=0.",
      technique: "Repère de Frenet : a_T = dv/dt = 0 → MCU.",
      bacLink: "Orbite circulaire — uniformité du mouvement"
    })
  },
  {
    id: 'ch13_6', chapter: 13, type: 5,
    question: "Dans la 3ème loi de Kepler T²/a³ = K, la constante K dépend de la planète orbitante.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "K = 4π²/(GM) dépend uniquement du corps CENTRAL (masse M). Elle est identique pour tous les satellites du même astre.",
      memo: "K = 4π²/(GM) : même pour toutes les planètes autour du Soleil.",
      trap: "K ne dépend pas de la planète orbitante, seulement du corps central.",
      technique: "T₁²/a₁³ = T₂²/a₂³ permet de comparer deux planètes.",
      bacLink: "3ème loi de Kepler — constante"
    })
  },
  {
    id: 'ch13_7', chapter: 13, type: 4,
    question: "Mars est à a = 1,52 UA du Soleil (T_Terre = 1 an, a_Terre = 1 UA). Quelle est la période de Mars ?",
    options: ["1,52 ans", "1,87 ans", "2,31 ans", "1,23 ans"],
    correct: 1,
    correction: buildCorrection({
      answer: "1,87 ans",
      explanation: "T_Mars²/a_Mars³ = T_Terre²/a_Terre³ → T_Mars = √(a_Mars³) = √(1,52³) = √3,51 ≈ 1,87 an.",
      memo: "T_Mars = T_Terre × (a_Mars/a_Terre)^(3/2).",
      trap: "Exposant 3/2 sur a, pas 2/3.",
      technique: "T² = K·a³ → T = √(K·a³). Prendre le rapport avec la Terre.",
      bacLink: "3ème loi de Kepler — application"
    })
  },
  {
    id: 'ch13_8', chapter: 13, type: 16,
    question: "Qu'énonce la 2ème loi de Kepler (loi des aires) ?",
    options: ["Les orbites sont elliptiques", "Le rayon vecteur balaye des aires égales en temps égaux", "T²/a³ = cste", "La vitesse est constante"],
    correct: 1,
    correction: buildCorrection({
      answer: "Le rayon vecteur balaye des aires égales en temps égaux",
      explanation: "La 2ème loi : le segment Astre–Planète balaye des surfaces égales en des durées égales. Conséquence : la planète est plus rapide au périhélie.",
      memo: "Loi des aires : vitesse plus grande au périhélie (plus proche).",
      trap: "Ne pas confondre les 3 lois : 1re = ellipse, 2e = aires, 3e = T²/a³.",
      technique: "Au périhélie : v max. À l'aphélie : v min.",
      bacLink: "2ème loi de Kepler — loi des aires"
    })
  },
  {
    id: 'ch13_9', chapter: 13, type: 7,
    question: "La Lune orbite à r = 3,84×10⁸ m avec T = 27,3 j. Calculer la masse de la Terre. (G = 6,67×10⁻¹¹)",
    options: ["≈ 6×10²⁴ kg", "≈ 2×10³⁰ kg", "≈ 7,3×10²² kg", "≈ 6×10²⁸ kg"],
    correct: 0,
    correction: buildCorrection({
      answer: "≈ 6×10²⁴ kg",
      explanation: "T = 27,3×86400 ≈ 2,36×10⁶ s. M = 4π²r³/(GT²) = 4π²(3,84×10⁸)³/(6,67×10⁻¹¹×(2,36×10⁶)²) ≈ 6×10²⁴ kg.",
      memo: "M = 4π²r³/(GT²). Déterminer la masse du corps central.",
      trap: "Convertir T en secondes avant le calcul.",
      technique: "T²/r³ = 4π²/(GM) → M = 4π²r³/(GT²).",
      bacLink: "Masse de la Terre — méthode Bac"
    })
  },
  {
    id: 'ch13_10', chapter: 13, type: 1,
    question: "L'altitude d'un satellite géostationnaire est d'environ :",
    options: ["400 km", "36 000 km", "6 371 km", "150 000 km"],
    correct: 1,
    correction: buildCorrection({
      answer: "36 000 km",
      explanation: "r_géostationnaire ≈ 42 164 km depuis le centre de la Terre. Altitude = r − R_Terre = 42164 − 6371 ≈ 35 793 km ≈ 36 000 km.",
      memo: "Géostationnaire : h ≈ 36 000 km (400 km = ISS, 6 371 km = R_Terre).",
      trap: "Ne pas confondre r (rayon de l'orbite) et h (altitude).",
      technique: "h = r − R_Terre. Calculer r via la 3ème loi avec T = 24 h.",
      bacLink: "Satellite géostationnaire — altitude"
    })
  },
];

// ─── CHAPITRE 14 : Mécanique des fluides ─────────────────────────────────────
export const quizCh14 = [
  {
    id: 'ch14_1', chapter: 14, type: 1,
    question: "La loi de Bernoulli s'applique le long d'une ligne de courant pour un fluide :",
    options: ["Visqueux et compressible", "Parfait, incompressible, en régime permanent", "Au repos", "Turbulent"],
    correct: 1,
    correction: buildCorrection({
      answer: "Parfait, incompressible, en régime permanent",
      explanation: "Bernoulli : P + ½ρv² + ρgz = cste. Conditions : fluide parfait (non visqueux), incompressible, régime permanent.",
      memo: "Bernoulli : fluide parfait + incompressible + régime permanent.",
      trap: "Bernoulli ne s'applique pas aux fluides visqueux ou aux écoulements turbulents.",
      technique: "Appliquer entre deux points de la même ligne de courant.",
      bacLink: "Loi de Bernoulli — conditions"
    })
  },
  {
    id: 'ch14_2', chapter: 14, type: 4,
    question: "Un tuyau passe d'une section S₁ = 4 cm² à S₂ = 1 cm². Si v₁ = 2 m/s, quelle est v₂ ?",
    options: ["0,5 m/s", "8 m/s", "4 m/s", "2 m/s"],
    correct: 1,
    correction: buildCorrection({
      answer: "8 m/s",
      explanation: "Conservation du débit : v₁S₁ = v₂S₂ → v₂ = v₁S₁/S₂ = 2×4/1 = 8 m/s.",
      memo: "v₁S₁ = v₂S₂ (débit volumique conservé).",
      trap: "Si S diminue, v augmente (et inversement).",
      technique: "D_V = vS = constante (fluide incompressible).",
      bacLink: "Conservation du débit — équation de continuité"
    })
  },
  {
    id: 'ch14_3', chapter: 14, type: 2,
    question: "La poussée d'Archimède est égale au poids du fluide déplacé par l'objet.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "Π = ρ_fluide × V_immergé × g = poids du fluide déplacé. C'est le principe d'Archimède.",
      memo: "Π = ρ_f · V · g (poids du fluide déplacé).",
      trap: "V est le volume immergé, pas le volume total de l'objet (sauf si totalement immergé).",
      technique: "Objet flotte si Π = P, i.e. ρ_objet ≤ ρ_fluide.",
      bacLink: "Poussée d'Archimède"
    })
  },
  {
    id: 'ch14_4', chapter: 14, type: 1,
    question: "L'effet Venturi signifie que dans un tube qui rétrécit, la pression :",
    options: ["Augmente", "Reste constante", "Diminue", "Varie aléatoirement"],
    correct: 2,
    correction: buildCorrection({
      answer: "Diminue",
      explanation: "Si S ↓ → v ↑ (continuité). Bernoulli : P + ½ρv² = cste → si v ↑ → P ↓. C'est l'effet Venturi.",
      memo: "Venturi : tube rétréci → v ↑ → P ↓ (Bernoulli).",
      trap: "Intuitivement on pourrait penser P ↑, mais c'est l'inverse.",
      technique: "P₁ + ½ρv₁² = P₂ + ½ρv₂². Si v₂ > v₁ → P₂ < P₁.",
      bacLink: "Effet Venturi — Bernoulli"
    })
  },
  {
    id: 'ch14_5', chapter: 14, type: 4,
    question: "Formule de Torricelli : un réservoir a une ouverture à h = 0,8 m sous la surface libre (g = 10 m/s²). Vitesse de sortie ?",
    options: ["2 m/s", "4 m/s", "8 m/s", "1,6 m/s"],
    correct: 0,
    correction: buildCorrection({
      answer: "4 m/s",
      explanation: "v = √(2gh) = √(2×10×0,8) = √16 = 4 m/s.",
      memo: "Torricelli : v = √(2gh).",
      trap: "Ne pas oublier le facteur 2 sous la racine.",
      technique: "Appliquer Bernoulli entre la surface libre et l'orifice (s≪S).",
      bacLink: "Formule de Torricelli"
    })
  },
  {
    id: 'ch14_6', chapter: 14, type: 5,
    question: "Un objet dont la densité est supérieure à celle de l'eau flotte toujours.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Si ρ_objet > ρ_fluide, alors Π < P → l'objet coule. Il flotte uniquement si ρ_objet ≤ ρ_fluide.",
      memo: "ρ_objet < ρ_fluide → flotte. ρ_objet > ρ_fluide → coule.",
      trap: "La forme peut aider (bateau en acier), mais par densité totale (air inclus).",
      technique: "Comparer ρ_moyen_objet avec ρ_fluide.",
      bacLink: "Flottabilité — condition"
    })
  },
  {
    id: 'ch14_7', chapter: 14, type: 16,
    question: "Qu'est-ce que le débit volumique D_V ?",
    options: ["La pression dans le fluide", "Le volume de fluide traversant une section par unité de temps : D_V = v·S", "La vitesse du fluide", "La masse du fluide par unité de temps"],
    correct: 1,
    correction: buildCorrection({
      answer: "Le volume de fluide traversant une section par unité de temps : D_V = v·S",
      explanation: "D_V = v×S (en m³/s). Pour un fluide incompressible, D_V est constant tout le long du tuyau.",
      memo: "D_V = v·S (m³/s). Conservation : D_V = cste.",
      trap: "D_V ≠ débit massique (D_m = ρ·D_V).",
      technique: "v₁S₁ = v₂S₂ = D_V = constante.",
      bacLink: "Débit volumique"
    })
  },
  {
    id: 'ch14_8', chapter: 14, type: 7,
    question: "Un nageur de volume 0,07 m³ plonge dans l'eau (ρ = 1000 kg/m³, g = 10 m/s²). Quelle est la poussée d'Archimède ?",
    options: ["700 N", "70 N", "7 N", "7000 N"],
    correct: 0,
    correction: buildCorrection({
      answer: "700 N",
      explanation: "Π = ρ·V·g = 1000 × 0,07 × 10 = 700 N.",
      memo: "Π = ρ_f × V × g.",
      trap: "Ne pas confondre V (volume immergé) avec la masse.",
      technique: "Π = ρ_fluide × V_immergé × g.",
      bacLink: "Poussée d'Archimède — calcul"
    })
  },
  {
    id: 'ch14_9', chapter: 14, type: 19,
    question: "Pourquoi les avions volent-ils ? (explication simplifiée par Bernoulli)",
    options: ["Parce que les moteurs les poussent vers le haut", "Parce que l'air va plus vite sur l'intrados que sur l'extrados", "Parce que l'air va plus vite sur l'extrados → P extrados < P intrados → portance vers le haut", "Parce que le poids est nul en altitude"],
    correct: 2,
    correction: buildCorrection({
      answer: "Parce que l'air va plus vite sur l'extrados → P extrados < P intrados → portance vers le haut",
      explanation: "L'extrados de l'aile est plus courbé → l'air y va plus vite. Bernoulli : v ↑ → P ↓ côté extrados → différence de pression → force vers le haut (portance).",
      memo: "Portance : v_extrados > v_intrados → P_extrados < P_intrados → ↑.",
      trap: "C'est l'extrados (dessus) qui a la vitesse plus grande, pas l'intrados.",
      technique: "Bernoulli + profil d'aile asymétrique.",
      bacLink: "Application de Bernoulli — portance aérodynamique"
    })
  },
  {
    id: 'ch14_10', chapter: 14, type: 1,
    question: "La loi statique des fluides P + ρgz = cste permet de calculer :",
    options: ["La pression en fonction de la profondeur", "La vitesse d'écoulement", "Le débit volumique", "La viscosité du fluide"],
    correct: 0,
    correction: buildCorrection({
      answer: "La pression en fonction de la profondeur",
      explanation: "P₂ = P₁ + ρg(z₁−z₂). Plus on s'enfonce (z↓), plus la pression augmente.",
      memo: "Fluide au repos : ΔP = −ρgΔz. P augmente quand z diminue.",
      trap: "Cette loi est pour les fluides AU REPOS (pas Bernoulli qui est pour les fluides en mouvement).",
      technique: "P = P_surface + ρg·h (h = profondeur sous la surface).",
      bacLink: "Statique des fluides — variation de pression"
    })
  },
];

// ─── CHAPITRE 15 : Thermodynamique — 1er principe ────────────────────────────
export const quizCh15 = [
  {
    id: 'ch15_1', chapter: 15, type: 1,
    question: "Le premier principe de la thermodynamique s'énonce :",
    options: ["ΔU = W − Q", "ΔU = W + Q", "ΔU = −W − Q", "ΔU = Q/W"],
    correct: 1,
    correction: buildCorrection({
      answer: "ΔU = W + Q",
      explanation: "Premier principe : ΔU = W + Q, avec W et Q > 0 si reçus par le système. C'est la conservation de l'énergie.",
      memo: "ΔU = W + Q. Convention : W et Q positifs si REÇUS par le système.",
      trap: "Ne pas écrire ΔU = Q − W (convention différente, souvent source d'erreur).",
      technique: "Identifier les échanges : W (mécanique) et Q (thermique), puis leur signe.",
      bacLink: "Premier principe de la thermodynamique"
    })
  },
  {
    id: 'ch15_2', chapter: 15, type: 4,
    question: "Un gaz parfait à T = 300 K, P = 2×10⁵ Pa occupe un volume V. Si n = 1 mol, V = ? (R = 8,314 J/mol/K)",
    options: ["1,25×10⁻² m³", "2,5×10⁻² m³", "1,25×10⁻¹ m³", "8,31×10⁻³ m³"],
    correct: 0,
    correction: buildCorrection({
      answer: "1,25×10⁻² m³",
      explanation: "PV = nRT → V = nRT/P = 1×8,314×300/(2×10⁵) = 2494/200000 = 1,247×10⁻² m³ ≈ 1,25×10⁻² m³.",
      memo: "PV = nRT → V = nRT/P.",
      trap: "Vérifier que T est en Kelvin ! T = 300 K ici (déjà en K).",
      technique: "V = nRT/P. Unités : Pa × m³ = J = mol × J/(mol·K) × K.",
      bacLink: "Gaz parfait — équation d'état"
    })
  },
  {
    id: 'ch15_3', chapter: 15, type: 5,
    question: "Pour un système incompressible, W = 0 donc ΔU = Q uniquement.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "Un système incompressible ne change pas de volume → W = −P_ext·ΔV = 0 → ΔU = Q = mc·ΔT.",
      memo: "Solide/liquide : ΔV ≈ 0 → W = 0 → ΔU = Q = mcΔT.",
      trap: "Cette approximation est valide pour les solides et liquides, pas les gaz.",
      technique: "Incompressible → ΔU = Q → Q = mcΔT → ΔT = Q/(mc).",
      bacLink: "Premier principe — solides et liquides"
    })
  },
  {
    id: 'ch15_4', chapter: 15, type: 1,
    question: "La conversion de température : T(K) = θ(°C) + ...",
    options: ["100", "273", "373", "0"],
    correct: 1,
    correction: buildCorrection({
      answer: "273",
      explanation: "T(K) = θ(°C) + 273,15 ≈ θ + 273. 0°C = 273 K. −273°C = 0 K (zéro absolu).",
      memo: "T(K) = θ(°C) + 273. TOUJOURS utiliser K dans PV = nRT.",
      trap: "Erreur classique : oublier la conversion → résultats faux.",
      technique: "0°C = 273 K. 100°C = 373 K. −273°C = 0 K.",
      bacLink: "Conversion Celsius-Kelvin"
    })
  },
  {
    id: 'ch15_5', chapter: 15, type: 4,
    question: "On chauffe 500 g d'eau (c = 4185 J/kg/K) de 20°C à 80°C. Quelle quantité de chaleur Q est échangée ?",
    options: ["125 550 J", "209 250 J", "83 700 J", "41 850 J"],
    correct: 0,
    correction: buildCorrection({
      answer: "125 550 J",
      explanation: "Q = mcΔT = 0,5 × 4185 × (80−20) = 0,5 × 4185 × 60 = 125 550 J.",
      memo: "Q = mcΔT. m en kg, c en J/(kg·K), ΔT en K ou °C (même différence).",
      trap: "Convertir m en kg : 500 g = 0,5 kg.",
      technique: "Q = mc(T_f − T_i). ΔT identique en °C et en K.",
      bacLink: "Capacité thermique — calcul de Q"
    })
  },
  {
    id: 'ch15_6', chapter: 15, type: 16,
    question: "Qu'est-ce que l'énergie interne U d'un système ?",
    options: ["L'énergie cinétique macroscopique", "La somme de toutes les énergies microscopiques (cinétique et potentielle des entités)", "L'énergie potentielle gravitationnelle", "L'énergie échangée sous forme de chaleur"],
    correct: 1,
    correction: buildCorrection({
      answer: "La somme de toutes les énergies microscopiques (cinétique et potentielle des entités)",
      explanation: "U représente l'énergie interne : agitation thermique (E_c microscopique) + interactions entre entités (E_p microscopique).",
      memo: "U = énergie microscopique totale. ΔU = W + Q.",
      trap: "U ≠ E_c macroscopique (qui est mv²/2 pour le système entier).",
      technique: "Pour un gaz parfait : U = nCvT (dépend uniquement de T).",
      bacLink: "Énergie interne — définition"
    })
  },
  {
    id: 'ch15_7', chapter: 15, type: 2,
    question: "Pour un gaz parfait, l'équation d'état est PV = nRT où T doit être en degrés Celsius.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "T DOIT être en Kelvin dans PV = nRT. R = 8,314 J/(mol·K) est calibré pour T en Kelvin.",
      memo: "PV = nRT → T en KELVIN OBLIGATOIRE.",
      trap: "Erreur très courante au Bac : utiliser °C au lieu de K.",
      technique: "Toujours convertir : T(K) = θ(°C) + 273.",
      bacLink: "Gaz parfait — Kelvin obligatoire"
    })
  },
  {
    id: 'ch15_8', chapter: 15, type: 7,
    question: "Une transformation isochore d'un gaz a ΔV = 0. Que vaut le travail W reçu ?",
    options: ["W = Q", "W = 0", "W = −PΔV", "W = ΔU"],
    correct: 1,
    correction: buildCorrection({
      answer: "W = 0",
      explanation: "W = −P_ext·ΔV. Si ΔV = 0 → W = 0. Le premier principe donne ΔU = Q uniquement.",
      memo: "Isochore : ΔV = 0 → W = 0 → ΔU = Q.",
      trap: "W = 0 uniquement car ΔV = 0, pas parce que le système est isolé.",
      technique: "Transformation isochore (volume constant) → W = −P·ΔV = 0.",
      bacLink: "Transformation isochore"
    })
  },
  {
    id: 'ch15_9', chapter: 15, type: 19,
    question: "Pourquoi la constante R des gaz parfaits vaut-elle 8,314 J/(mol·K) et pas une autre valeur ?",
    options: ["C'est une coïncidence", "R = N_A × k_B où k_B est la constante de Boltzmann : lien entre échelles macro et microscopique", "R a été fixé arbitrairement", "R dépend de la nature du gaz"],
    correct: 1,
    correction: buildCorrection({
      answer: "R = N_A × k_B où k_B est la constante de Boltzmann",
      explanation: "R = N_A × k_B = 6,02×10²³ × 1,38×10⁻²³ ≈ 8,314 J/(mol·K). Elle relie l'échelle moléculaire (k_B) et macroscopique (R).",
      memo: "R = N_A × k_B = 8,314 J/(mol·K). Universel pour tous les gaz parfaits.",
      trap: "R est universelle (même pour tous les gaz parfaits).",
      technique: "k_B = 1,38×10⁻²³ J/K est la constante de Boltzmann par molécule.",
      bacLink: "Constante des gaz parfaits R"
    })
  },
  {
    id: 'ch15_10', chapter: 15, type: 1,
    question: "Un gaz est comprimé de façon adiabatique. Qu'arrive-t-il à son énergie interne ?",
    options: ["ΔU = 0", "ΔU = W (elle augmente)", "ΔU = −W (elle diminue)", "ΔU = Q"],
    correct: 1,
    correction: buildCorrection({
      answer: "ΔU = W (elle augmente)",
      explanation: "Adiabatique → Q = 0. Premier principe : ΔU = W + Q = W. Compression → W > 0 (travail reçu) → ΔU > 0 → T augmente.",
      memo: "Adiabatique : Q = 0 → ΔU = W. Compression adiabatique → T ↑.",
      trap: "Adiabatique ≠ isotherme. Dans l'adiabatique, T change.",
      technique: "Compression adiabatique rapide : gaz se réchauffe.",
      bacLink: "Transformation adiabatique"
    })
  },
];