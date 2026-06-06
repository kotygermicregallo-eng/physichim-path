// Chapter 1 — Cinétique chimique — 30 questions, 21 types
import { buildCorrection } from './quizEngine';

export const quizCh1 = [
  {
    id: 'ch1_q1', type: 1, chapter: 1,
    question: "La vitesse volumique d'apparition d'un produit P est :",
    options: [
      "v(t) = −d[P]/dt",
      "v(t) = d[P]/dt",
      "v(t) = [P](t₂)−[P](t₁)",
      "v(t) = Δ[P]/Δt × volume"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "v(t) = d[P]/dt",
      explanation: "La vitesse d'apparition est la dérivée de la concentration en produit par rapport au temps. Elle est toujours positive car [P] augmente.",
      memo: "Produit → Positive → d[P]/dt > 0",
      trap: "Pour un réactif, il faut mettre un signe − car [R] décroît : v = −d[R]/dt",
      technique: "Tracer la tangente à la courbe [P](t) au point t considéré → pente = vitesse",
      bacLink: "Ch.1 — Vitesse volumique"
    })
  },
  {
    id: 'ch1_q2', type: 2, chapter: 1,
    question: "Vrai ou Faux : Un catalyseur apparaît dans l'équation bilan de la réaction.",
    options: ["Vrai", "Faux"],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Un catalyseur accélère la réaction mais est consommé puis restitué au cours du mécanisme. Il n'apparaît donc PAS dans l'équation bilan.",
      memo: "Catalyseur = fantôme → absent du bilan",
      trap: "Il peut apparaître dans les actes élémentaires intermédiaires, mais se compense au final.",
      technique: "Vérifier dans le mécanisme : somme des AE → les catalyseurs s'éliminent",
      bacLink: "Ch.1 — Catalyse"
    })
  },
  {
    id: 'ch1_q3', type: 4, chapter: 1,
    question: "Une réaction d'ordre 1 a une constante de vitesse k = 0,02 s⁻¹. Quelle est la concentration [A](t) après 50 s si [A]₀ = 0,5 mol/L ?",
    options: [
      "[A] = 0,5 × e⁻¹ ≈ 0,184 mol/L",
      "[A] = 0,5 × e⁻⁰·⁰²ˣ⁵⁰ ≈ 0,184 mol/L",
      "[A] = 0,5 − 0,02×50 = −0,5 mol/L",
      "[A] = 0,5/50 = 0,01 mol/L"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "[A] = 0,5 × e^(−0,02×50) = 0,5 × e^(−1) ≈ 0,184 mol/L",
      explanation: "Ordre 1 : [A](t) = [A]₀ × e^(−kt). Ici kt = 0,02 × 50 = 1. Donc [A] = 0,5 × e⁻¹ ≈ 0,184 mol/L.",
      memo: "Ordre 1 : exponentielle décroissante — comme la radioactivité !",
      trap: "Ne pas confondre avec une loi linéaire. La loi d'ordre 1 est EXPONENTIELLE, pas affine.",
      technique: "kt = 0,02 × 50 = 1 → e^(-1) ≈ 0,368 → 0,5 × 0,368 = 0,184",
      bacLink: "Ch.1 — Loi d'ordre 1"
    })
  },
  {
    id: 'ch1_q4', type: 5, chapter: 1,
    question: "PIÈGE : Pour vérifier qu'une réaction est d'ordre 1, on trace ln([A]) en fonction du temps. Si c'est une droite, alors la pente vaut :",
    options: [
      "+k (positive)",
      "−k (négative)",
      "1/k",
      "k²"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "−k (négative)",
      explanation: "ln([A](t)) = ln([A]₀) − kt. La pente vaut −k, qui est NÉGATIVE. Beaucoup d'élèves oublient le signe moins et calculent un k négatif.",
      memo: "Pente = −k → k = −pente (on prend la valeur absolue)",
      trap: "Le piège est de lire la pente directement comme k. Or pente = −k → k > 0 toujours !",
      technique: "Lire Δy/Δx = (ln[A]₂ − ln[A]₁)/(t₂ − t₁) < 0 → k = valeur absolue de ce résultat",
      bacLink: "Ch.1 — Identification graphique ordre 1"
    })
  },
  {
    id: 'ch1_q5', type: 11, chapter: 1,
    question: "Sur la courbe [A](t) ci-dessous (ordre 1), comment lit-on graphiquement le temps de demi-réaction t½ ?",
    graphData: {
      type: 'exponential_decay',
      label: '[A] en mol/L',
      A0: 1.0,
      k: 0.1,
      xLabel: 'temps (s)',
      yLabel: '[A] (mol/L)'
    },
    options: [
      "Abscisse du point où [A] = [A]₀/4",
      "Abscisse du point où [A] = [A]₀/2",
      "Abscisse du point d'inflexion",
      "Abscisse où la tangente coupe l'axe"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "t½ = abscisse du point où [A] = [A]₀/2",
      explanation: "Par définition, t½ est le temps nécessaire pour que [A] diminue de moitié. On repère [A]₀/2 sur l'axe y, on trace une horizontale jusqu'à la courbe, puis une verticale vers l'axe t.",
      memo: "t½ : mi-hauteur sur la courbe [A](t)",
      trap: "Ne pas confondre avec le temps caractéristique τ = 1/k ≠ t½ = ln(2)/k",
      technique: "t½ = ln(2)/k = 0,693/k. Vérifier : à t = t½, [A] = [A]₀ × e^(-k×ln2/k) = [A]₀/2 ✓",
      bacLink: "Ch.1 — Temps de demi-réaction"
    })
  },
  {
    id: 'ch1_q6', type: 6, chapter: 1,
    question: "Complète la loi d'évolution d'ordre 1 : [A](t) = ...",
    options: [
      "[A]₀ × e^(+kt)",
      "[A]₀ × e^(−kt)",
      "[A]₀ − k×t",
      "[A]₀ / (1 + kt)"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "[A](t) = [A]₀ × e^(−kt)",
      explanation: "Solution de l'EDO d[A]/dt = −k[A]. C'est une décroissance exponentielle avec exposant négatif.",
      memo: "Exposant NÉGATIF : la concentration DÉCROÎT",
      trap: "e^(+kt) serait une croissance — l'erreur de signe change tout !",
      technique: "Vérifier par dérivation : d/dt([A]₀e^(−kt)) = −k[A]₀e^(−kt) = −k[A](t) ✓",
      bacLink: "Ch.1 — Loi d'ordre 1"
    })
  },
  {
    id: 'ch1_q7', type: 3, chapter: 1,
    question: "Qu'est-ce que la catalyse hétérogène ? Donne un exemple.",
    options: null,
    isOpen: true,
    correction: buildCorrection({
      answer: "La catalyse hétérogène est une catalyse où le catalyseur et les réactifs ne sont pas dans le même état physique. Exemple : Pt solide avec des réactifs gazeux (pot catalytique).",
      explanation: "Contrairement à la catalyse homogène (même phase), le catalyseur hétérogène agit à l'interface entre phases. La réaction se passe à la surface du solide.",
      memo: "Hétéro = différent → solide + gaz/liquide",
      trap: "Ne pas dire 'le catalyseur ne participe pas à la réaction' — il y participe mais est restitué.",
      technique: "Citer TOUJOURS : état du catalyseur ≠ état des réactifs + un exemple précis",
      bacLink: "Ch.1 — Types de catalyse"
    })
  },
  {
    id: 'ch1_q8', type: 19, chapter: 1,
    question: "QUALITATIF : Si on augmente la température d'une réaction, que se passe-t-il sur k et sur t½ ? (pas de calcul)",
    options: [
      "k augmente → t½ augmente",
      "k augmente → t½ diminue",
      "k diminue → t½ diminue",
      "k et t½ ne changent pas"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "k augmente (plus de chocs efficaces) → t½ = ln2/k diminue (réaction plus rapide)",
      explanation: "Température ↑ → agitation moléculaire ↑ → plus de chocs efficaces → k ↑. Comme t½ = ln2/k, si k ↑ alors t½ ↓.",
      memo: "T↑ → k↑ → réaction plus rapide → t½ ↓ (relation inverse)",
      trap: "On pourrait croire que t½ augmente car 'il se passe plus de choses'. Mais t½ est une durée → si ça va plus vite, t½ diminue.",
      technique: "Raisonnement en chaîne : T↑ → Ea plus souvent franchie → k↑ → t½ = ln2/k ↓",
      bacLink: "Ch.1 — Facteurs cinétiques"
    })
  },
  {
    id: 'ch1_q9', type: 9, chapter: 1,
    question: "Un élève écrit : 'La vitesse de disparition du réactif A est v = d[A]/dt'. Quelle est l'erreur ?",
    options: [
      "Pas d'erreur, c'est correct",
      "Il manque un signe −, car v = −d[A]/dt",
      "Il faut diviser par le volume",
      "La vitesse se calcule avec Δ[A]/Δt pas une dérivée"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Il manque le signe −. La vitesse de disparition est v = −d[A]/dt",
      explanation: "[A] diminue donc d[A]/dt < 0. Pour que la vitesse soit positive, on ajoute un signe −. Une vitesse est TOUJOURS positive par définition.",
      memo: "Réactif = disparition = signe − pour garder v > 0",
      trap: "Sans le signe −, la vitesse serait négative, ce qui est impossible physiquement.",
      technique: "Règle : v > 0 toujours. Réactif → v = −d[R]/dt. Produit → v = +d[P]/dt.",
      bacLink: "Ch.1 — Définition vitesse volumique"
    })
  },
  {
    id: 'ch1_q10', type: 12, chapter: 1,
    question: "MONTRER QUE : À partir de l'équation différentielle d[A]/dt = −k[A], montrer que la solution est [A](t) = [A]₀e^(−kt). Ordonner les étapes.",
    options: [
      "1) Séparer variables 2) Intégrer 3) Appliquer CI [A](0)=[A]₀ 4) Exponentier",
      "1) Exponentier 2) Intégrer 3) Séparer 4) CI",
      "1) Dériver [A]₀e^(−kt) 2) Vérifier égalité 3) Conclure",
      "Les étapes A et C sont toutes deux correctes"
    ],
    correctIndex: 3,
    correction: buildCorrection({
      answer: "Deux méthodes valides : (A) résolution EDO directe, ou (C) vérification par dérivation.",
      explanation: "Méthode A : d[A]/[A] = −k dt → ∫ = −kt + cste → ln[A] = ln[A]₀ − kt → [A] = [A]₀e^(−kt). Méthode C (Bac souvent 'vérifier') : dériver [A]₀e^(−kt) = −k[A]₀e^(−kt) = −k[A] ✓",
      memo: "Au Bac : 'vérifier que' = substituer et dériver. 'Montrer que' = résoudre l'EDO.",
      trap: "La méthode C ne 'prouve' pas que c'est la seule solution — mais au Bac 'vérifier que' suffit.",
      technique: "d[A]/dt + k[A] = 0 → équation homogène → solution A×e^(−kt) → CI → A = [A]₀",
      bacLink: "Ch.1 — Démonstration loi d'ordre 1"
    })
  },
  {
    id: 'ch1_q11', type: 14, chapter: 1,
    question: "UNITÉS : k = 2,3 × 10⁻³ min⁻¹. Convertir en s⁻¹ et calculer t½.",
    options: [
      "k = 2,3 × 10⁻³ s⁻¹ ; t½ = 301 s",
      "k = 3,83 × 10⁻⁵ s⁻¹ ; t½ = 18 100 s",
      "k = 1,38 × 10⁻¹ s⁻¹ ; t½ = 5 s",
      "k = 2,3 × 10⁻³ s⁻¹ ; t½ = 5 s"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "k = 2,3×10⁻³ / 60 = 3,83×10⁻⁵ s⁻¹ → t½ = ln2 / k = 0,693 / 3,83×10⁻⁵ ≈ 18 100 s",
      explanation: "1 min = 60 s donc pour passer de min⁻¹ à s⁻¹ : diviser par 60. Puis t½ = ln(2)/k.",
      memo: "min⁻¹ → s⁻¹ : ÷ 60 (pas × 60 !)",
      trap: "Multiplier par 60 au lieu de diviser est l'erreur la plus fréquente. min⁻¹ signifie 'par minute' → plus lent → k plus petit en s⁻¹.",
      technique: "Vérification dimensionnelle : [k] = min⁻¹ = (1/60 s)⁻¹ ÷ 60... attention au sens.",
      bacLink: "Ch.1 — Constante de vitesse, conversions"
    })
  },
  {
    id: 'ch1_q12', type: 16, chapter: 1,
    question: "Définir avec PRÉCISION le temps de demi-réaction t½ (tous les mots importants).",
    options: null,
    isOpen: true,
    correction: buildCorrection({
      answer: "t½ est la durée nécessaire pour que la concentration du réactif limitant diminue de moitié par rapport à sa valeur initiale.",
      explanation: "Les mots obligatoires : 'durée' (pas instant), 'réactif limitant', 'diminue de moitié', 'valeur initiale'. Toute définition incomplète perd des points.",
      memo: "t½ = durée / réactif limitant / moitié / initiale → 4 mots-clés",
      trap: "Dire 'temps pour que la réaction soit à moitié finie' est imprécis et peut être faux.",
      technique: "Au Bac, une définition = 1 phrase, tous les mots du programme présents.",
      bacLink: "Ch.1 — Définitions fondamentales"
    })
  },
  {
    id: 'ch1_q13', type: 7, chapter: 1,
    question: "BAC 2024 : On étudie la décomposition du peroxyde d'hydrogène H₂O₂ catalysée par des ions Fe³⁺. La courbe [H₂O₂](t) montre une décroissance exponentielle. On mesure t½ ≈ 200 s. Quelle est la valeur de k ?",
    options: [
      "k = 200 s⁻¹",
      "k = 1/200 = 5×10⁻³ s⁻¹",
      "k = ln(2)/200 ≈ 3,47×10⁻³ s⁻¹",
      "k = 200/ln(2) ≈ 289 s⁻¹"
    ],
    correctIndex: 2,
    correction: buildCorrection({
      answer: "k = ln(2)/t½ = 0,693/200 ≈ 3,47×10⁻³ s⁻¹",
      explanation: "Relation : t½ = ln(2)/k → k = ln(2)/t½. C'est la relation clé de l'ordre 1.",
      memo: "t½ = ln2/k ↔ k = ln2/t½",
      trap: "k = 1/t½ est FAUX. C'est τ = 1/k qui vaut le temps caractéristique, pas t½.",
      technique: "Mémoriser : t½ = 0,693/k (0,693 ≈ ln2)",
      bacLink: "Ch.1 — Relation k et t½"
    })
  },
  {
    id: 'ch1_q14', type: 17, chapter: 1,
    question: "CONDITION D'APPLICATION : Pour utiliser l'approximation [A]eq ≈ c₀ (acide faible), quelle condition faut-il vérifier ?",
    options: [
      "pH < 7",
      "Taux d'avancement < 5% (τ < 0,05)",
      "Ka < 10⁻⁷",
      "Concentration c₀ > 1 mol/L"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Taux d'avancement τ = [H₃O⁺]/c₀ < 5%",
      explanation: "L'approximation [AH]eq ≈ c₀ n'est valide que si la réaction avance peu, c'est-à-dire si le taux d'avancement est inférieur à 5%. On calcule τ après avoir trouvé [H₃O⁺] et on vérifie.",
      memo: "Vérifier τ < 5% APRÈS le calcul — sinon recommencer sans approximation",
      trap: "L'approximation est valide pour les acides FAIBLES (Ka petit) mais il faut TOUJOURS la vérifier numériquement.",
      technique: "τ = [H₃O⁺]eq / c₀ < 0,05 → approximation valide",
      bacLink: "Ch.4 — Approximations acide faible"
    })
  },
  {
    id: 'ch1_q15', type: 20, chapter: 1,
    question: "SYNTHÈSE : Quel lien y a-t-il entre l'ordre d'une réaction, la loi de vitesse et la méthode graphique de vérification ?",
    options: null,
    isOpen: true,
    correction: buildCorrection({
      answer: "L'ordre définit comment la vitesse dépend des concentrations. Ordre 1 : v = k[A] → [A](t) = [A]₀e^(−kt) → ln[A] vs t est une droite de pente −k. Ordre 2 : v = k[A]² → 1/[A] vs t est une droite.",
      explanation: "Chaque ordre donne une loi de vitesse différente, dont la résolution analytique donne une forme fonctionnelle différente, et donc un graphe linéarisé différent.",
      memo: "Ordre 1 → ln[A] = droite. Ordre 2 → 1/[A] = droite. Ordre 0 → [A] = droite.",
      trap: "Ordre 0 existe aussi : [A](t) = [A]₀ − kt, droite directe.",
      technique: "Tester chaque linéarisation et regarder laquelle donne R² ≈ 1",
      bacLink: "Ch.1 — Ordres de réaction et méthodes graphiques"
    })
  },
  {
    id: 'ch1_q16', type: 21, chapter: 1,
    question: "On obtient k = 1,2 × 10⁻² s⁻¹ pour une réaction d'ordre 1. Un élève conclut : 'La réaction est lente.' Est-ce correct ?",
    options: [
      "Oui, k < 1 donc réaction lente",
      "Non, on ne peut pas conclure sur la vitesse à partir de k seul",
      "Oui, car t½ > 1 s",
      "Non, k est grand donc la réaction est rapide"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Non — k seul ne suffit pas à qualifier de 'lente' ou 'rapide'. Il faut calculer t½ et comparer à l'échelle de temps de l'expérience.",
      explanation: "t½ = ln2/k = 0,693/0,012 ≈ 58 s. Une réaction peut être 'lente' à l'échelle humaine (minutes) mais 'rapide' en chimie (microsecondes). Il faut toujours replacer dans le contexte.",
      memo: "Interprétation = valeur + unité + contexte",
      trap: "Un k numérique petit ne signifie rien sans connaître ses unités et le système étudié.",
      technique: "Calculer t½, puis comparer : t½ << durée expérience → quasi-total. t½ >> durée → quasi nul.",
      bacLink: "Ch.1 — Interprétation des résultats cinétiques"
    })
  },
  {
    id: 'ch1_q17', type: 10, chapter: 1,
    question: "Associe chaque grandeur à son unité correcte :",
    matchLeft: ["Vitesse volumique v", "Constante k (ordre 1)", "Constante k (ordre 0)", "Temps de demi-réaction t½"],
    matchRight: ["s⁻¹", "mol·L⁻¹·s⁻¹", "s", "mol·L⁻¹·s⁻¹"],
    correctPairs: [[0,3],[1,0],[2,1],[3,2]],
    options: [
      "v: mol·L⁻¹·s⁻¹ / k(1): s⁻¹ / k(0): mol·L⁻¹·s⁻¹ / t½: s",
      "v: s⁻¹ / k(1): mol·L⁻¹·s⁻¹ / k(0): s / t½: mol·L⁻¹·s⁻¹",
      "v: mol·L⁻¹·s⁻¹ / k(1): mol·L⁻¹·s⁻¹ / k(0): s⁻¹ / t½: s",
      "Toutes en s⁻¹"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "v: mol·L⁻¹·s⁻¹ | k(ord.1): s⁻¹ | k(ord.0): mol·L⁻¹·s⁻¹ | t½: s",
      explanation: "Les unités de k dépendent de l'ordre : ordre 0 → mol·L⁻¹·s⁻¹ (idem v), ordre 1 → s⁻¹, ordre 2 → L·mol⁻¹·s⁻¹.",
      memo: "k(0) = même que v. k(1) = s⁻¹. k(2) = L·mol⁻¹·s⁻¹.",
      trap: "Souvent au Bac, k a des unités données et on demande d'en déduire l'ordre !",
      technique: "v = k[A]^n → [v] = [k]×[mol/L]^n → résoudre pour [k]",
      bacLink: "Ch.1 — Unités de la constante de vitesse"
    })
  },
  {
    id: 'ch1_q18', type: 18, chapter: 1,
    question: "CONTEXTE INÉDIT : Des chercheurs étudient la dégradation d'un médicament dans le sang. La concentration suit une loi d'ordre 1 avec k = 0,115 h⁻¹. La dose thérapeutique minimale est 0,5 mg/L et la dose toxique est 2 mg/L. Si on injecte 1,8 mg/L, la concentration sera-t-elle thérapeutique après 3h ?",
    options: [
      "Non, [méd](3h) ≈ 0,25 mg/L < 0,5 mg/L",
      "Oui, [méd](3h) ≈ 1,3 mg/L (entre 0,5 et 2)",
      "Non, [méd](3h) ≈ 2,5 mg/L > 2 mg/L (toxique)",
      "Oui, [méd](3h) ≈ 0,9 mg/L (entre 0,5 et 2)"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "[méd](3h) = 1,8 × e^(−0,115×3) = 1,8 × e^(−0,345) ≈ 1,8 × 0,708 ≈ 1,3 mg/L. Oui, thérapeutique.",
      explanation: "Application directe de [A](t) = [A]₀e^(−kt) dans un contexte médical. kt = 0,115×3 = 0,345 → e^(−0,345) ≈ 0,708.",
      memo: "Même formule, contexte différent → même méthode",
      trap: "Ne pas se laisser perturber par le contexte médical. Les unités sont différentes (mg/L) mais la formule est identique.",
      technique: "kt = 0,115 × 3 = 0,345 → e^(−0,345) ≈ 0,71 → 1,8 × 0,71 = 1,28 ≈ 1,3 mg/L",
      bacLink: "Ch.1 — Application loi d'ordre 1"
    })
  },
  {
    id: 'ch1_q19', type: 8, chapter: 1,
    question: "Remettre dans l'ordre la démonstration de t½ = ln(2)/k pour une réaction d'ordre 1 :",
    steps: [
      "A) N(t½) = N₀/2",
      "B) N₀e^(−k×t½) = N₀/2",
      "C) −k×t½ = ln(1/2) = −ln2",
      "D) t½ = ln2/k",
      "E) e^(−k×t½) = 1/2"
    ],
    correctOrder: "A → B → E → C → D",
    options: [
      "A → B → E → C → D",
      "B → A → C → E → D",
      "A → E → B → D → C",
      "D → C → E → B → A"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "A → B → E → C → D",
      explanation: "1) Définition de t½ : [A](t½) = [A]₀/2. 2) Substituer la loi. 3) Simplifier par [A]₀. 4) Appliquer ln des deux côtés. 5) Isoler t½.",
      memo: "Définition → loi → simplification → ln → isoler",
      trap: "Partir de la formule finale pour 'vérifier' est valable pour 'montrer que', mais la démonstration vraie part de la définition.",
      technique: "Structure : définition → expression → transformation → résolution",
      bacLink: "Ch.1 — Démonstration t½"
    })
  },
  {
    id: 'ch1_q20', type: 15, chapter: 1,
    question: "Pour déterminer t½ d'une réaction, un élève propose 3 méthodes. Laquelle est INCORRECTE ?",
    options: [
      "Lire graphiquement l'abscisse du point [A] = [A]₀/2 sur la courbe [A](t)",
      "Calculer t½ = ln(2)/k à partir de la pente du graphe ln[A] vs t",
      "Utiliser t½ = [A]₀/(2k) valable pour toute réaction",
      "Mesurer directement sur la courbe semi-logarithmique"
    ],
    correctIndex: 2,
    correction: buildCorrection({
      answer: "La méthode C est incorrecte : t½ = [A]₀/(2k) n'est valable que pour l'ordre 0, pas en général.",
      explanation: "Pour l'ordre 0 : [A](t) = [A]₀ − kt → t½ = [A]₀/(2k). Pour l'ordre 1 : t½ = ln2/k (indépendant de [A]₀ !). Ces formules ne sont PAS interchangeables.",
      memo: "Ordre 1 : t½ INDÉPENDANT de [A]₀. Ordre 0 : t½ DÉPEND de [A]₀.",
      trap: "La propriété 'indépendant de [A]₀' est spécifique à l'ordre 1 et souvent testée au Bac.",
      technique: "Vérifier : pour ordre 1, doubler [A]₀ ne change pas t½. C'est unique à l'ordre 1.",
      bacLink: "Ch.1 — Propriétés ordre 1 vs ordre 0"
    })
  },
  {
    id: 'ch1_q21', type: 13, chapter: 1,
    question: "Sur un graphe [A](t) et ln[A](t), quels éléments faut-il légender pour une réponse complète au Bac ?",
    schemaPrompt: 'kinetique_graphe',
    options: [
      "Axes x et y seulement",
      "Axes (nom + unité), valeur [A]₀, t½ marqué, droite tangente à t=0 pour v₀",
      "Juste la courbe avec une flèche",
      "Les axes et la formule de la courbe"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Axes (nom + unité), [A]₀ sur axe y, t½ repéré par des pointillés, tangente à l'origine pour v₀",
      explanation: "Une figure de Bac bien notée inclut : axes nommés avec unités, valeurs importantes reportées, construction graphique visible (pointillés, tangente). Chaque élément manquant peut coûter 0,5 point.",
      memo: "Graphe = axes + unités + valeurs clés + constructions",
      trap: "Oublier les unités sur les axes = perte de points systématique.",
      technique: "Check-list : nom axe x, unité x, nom axe y, unité y, [A]₀, t½, v₀ si demandé",
      bacLink: "Ch.1 — Exploitation graphique"
    })
  },
  {
    id: 'ch1_q22', type: 2, chapter: 1,
    question: "Vrai ou Faux : Pour une réaction d'ordre 1, t½ est indépendant de la concentration initiale [A]₀.",
    options: ["Vrai", "Faux"],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "t½ = ln(2)/k ne contient pas [A]₀. C'est une propriété EXCLUSIVE de l'ordre 1. Pour l'ordre 0 : t½ = [A]₀/(2k), et pour l'ordre 2 : t½ = 1/(k[A]₀) — tous deux dépendent de [A]₀.",
      memo: "Ordre 1 : t½ = constante (indépendant de [A]₀) → signature de l'ordre 1",
      trap: "Cette propriété est souvent utilisée au Bac pour CONFIRMER qu'une réaction est d'ordre 1.",
      technique: "Si on mesure le même t½ à différentes concentrations initiales → ordre 1 confirmé",
      bacLink: "Ch.1 — Propriété distinctive ordre 1"
    })
  },
  {
    id: 'ch1_q23', type: 4, chapter: 1,
    question: "Vitesse initiale : [A]₀ = 0,8 mol/L, k = 0,05 s⁻¹ (ordre 1). Calculer v₀.",
    options: [
      "v₀ = 0,8 × 0,05 = 0,04 mol·L⁻¹·s⁻¹",
      "v₀ = 0,05 / 0,8 = 0,0625 s⁻¹",
      "v₀ = 0,8 + 0,05 = 0,85 mol/L",
      "v₀ = 0,8² × 0,05 = 0,032 mol·L⁻¹·s⁻¹"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "v₀ = k × [A]₀ = 0,05 × 0,8 = 0,04 mol·L⁻¹·s⁻¹",
      explanation: "Loi de vitesse ordre 1 : v = k[A]. En t=0, [A] = [A]₀ → v₀ = k[A]₀.",
      memo: "v₀ = k × [A]₀ (loi de vitesse à t=0)",
      trap: "Ne pas calculer [A](t) puis dériver. Simplement appliquer la loi de vitesse en t=0.",
      technique: "v₀ = k × [A]₀ → vérifier unités : s⁻¹ × mol·L⁻¹ = mol·L⁻¹·s⁻¹ ✓",
      bacLink: "Ch.1 — Vitesse initiale"
    })
  },
  {
    id: 'ch1_q24', type: 5, chapter: 1,
    question: "PIÈGE CLASSIQUE : Un élève dit que doubler [A]₀ double t½ pour une réaction d'ordre 1. Est-ce vrai ?",
    options: [
      "Oui, t½ est proportionnel à [A]₀",
      "Non, t½ est indépendant de [A]₀ pour l'ordre 1",
      "Oui, si la réaction est lente",
      "Non, t½ est divisé par 2"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Non — t½ = ln2/k est indépendant de [A]₀. Doubler [A]₀ ne change pas t½.",
      explanation: "C'est le PIÈGE classique du Bac sur ce chapitre. Pour l'ordre 0, t½ dépend de [A]₀ ; pour l'ordre 1, NON.",
      memo: "Ordre 1 : t½ ne change pas si on change [A]₀",
      trap: "On confond avec : doubler [A]₀ double v₀. Oui la vitesse initiale double, mais t½ reste identique.",
      technique: "La formule t½ = ln2/k ne contient que k — aucune concentration.",
      bacLink: "Ch.1 — Propriétés ordre 1"
    })
  },
  {
    id: 'ch1_q25', type: 1, chapter: 1,
    question: "Parmi ces facteurs, lequel N'est PAS un facteur cinétique ?",
    options: [
      "La température",
      "La concentration des réactifs",
      "La présence d'un catalyseur",
      "La pression atmosphérique pour les réactions en solution"
    ],
    correctIndex: 3,
    correction: buildCorrection({
      answer: "La pression atmosphérique n'influence pas la cinétique des réactions en solution aqueuse.",
      explanation: "Les facteurs cinétiques sont : T, concentration, catalyseur, (surface de contact pour solides). La pression atmosphérique n'agit que sur les gaz. En solution, elle est négligeable.",
      memo: "Facteurs cinétiques : T + concentration + catalyseur (+ surface pour solides)",
      trap: "La pression est un facteur important pour les réactions en PHASE GAZEUSE. Ne pas généraliser.",
      technique: "Retenir la liste exacte du programme, sans en ajouter d'autres.",
      bacLink: "Ch.1 — Facteurs cinétiques"
    })
  },
  {
    id: 'ch1_q26', type: 3, chapter: 1,
    question: "Expliquer la différence entre catalyse homogène et hétérogène.",
    options: null,
    isOpen: true,
    correction: buildCorrection({
      answer: "Homogène : catalyseur et réactifs dans le même état physique (ex: H⁺ en solution aqueuse). Hétérogène : états différents (ex: Pt solide + gaz).",
      explanation: "La différence fondamentale est l'état physique. Elle détermine le mécanisme d'action : en solution (homogène) ou à l'interface (hétérogène).",
      memo: "Homo = même état. Hétéro = états différents.",
      trap: "Un exemple seul sans la définition ne suffit pas au Bac.",
      technique: "Répondre en 2 temps : définir + exemple pour chaque type",
      bacLink: "Ch.1 — Types de catalyse"
    })
  },
  {
    id: 'ch1_q27', type: 6, chapter: 1,
    question: "La vitesse volumique MOYENNE d'apparition de P entre t₁ et t₂ est :",
    options: [
      "v̄ = [P](t₁) − [P](t₂) / (t₂ − t₁)",
      "v̄ = ([P](t₂) − [P](t₁)) / (t₂ − t₁)",
      "v̄ = d[P]/dt",
      "v̄ = k × [P]"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "v̄ = Δ[P]/Δt = ([P](t₂) − [P](t₁)) / (t₂ − t₁)",
      explanation: "La vitesse moyenne est le rapport de la variation de concentration sur l'intervalle de temps. Pour un produit, [P] augmente donc numérateur > 0.",
      memo: "Vitesse moyenne = Δ[P]/Δt (comme une vitesse moyenne en cinématique)",
      trap: "L'ordre t₂ − t₁ au dénominateur : toujours t final − t initial > 0.",
      technique: "Analogie : vitesse moyenne = distance/temps. Ici concentration/temps.",
      bacLink: "Ch.1 — Vitesse volumique moyenne"
    })
  },
  {
    id: 'ch1_q28', type: 19, chapter: 1,
    question: "QUALITATIF : Si on ajoute un catalyseur, que se passe-t-il sur l'énergie d'activation Ea, sur k, et sur t½ ?",
    options: [
      "Ea ↓ → k ↑ → t½ ↓",
      "Ea ↑ → k ↓ → t½ ↑",
      "Ea inchangée → k ↑ → t½ ↓",
      "Ea ↓ → k inchangé → t½ ↓"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "Ea diminue → k augmente → t½ diminue (réaction plus rapide)",
      explanation: "Le catalyseur fournit une voie réactionnelle avec une énergie d'activation plus basse. Donc plus de chocs efficaces → k augmente → t½ = ln2/k diminue.",
      memo: "Catalyseur : Ea↓ → k↑ → t½↓",
      trap: "Le catalyseur ne modifie pas l'état initial ou final, ni le ΔH de la réaction. Il abaisse seulement Ea.",
      technique: "Raisonnement en chaîne : catalyseur → Ea↓ → chocs efficaces↑ → k↑ → t½↓",
      bacLink: "Ch.1 — Catalyse et énergie d'activation"
    })
  },
  {
    id: 'ch1_q29', type: 21, chapter: 1,
    question: "On mesure t½ = 10 s pour [A]₀ = 0,5 mol/L et t½ = 10 s pour [A]₀ = 1,0 mol/L. Qu'en conclure sur l'ordre ?",
    options: [
      "La réaction est d'ordre 0 car t½ est constant",
      "La réaction est d'ordre 1 car t½ est indépendant de [A]₀",
      "La réaction est d'ordre 2 car t½ double quand [A]₀ double",
      "On ne peut pas conclure"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "La réaction est d'ordre 1 : la propriété t½ indépendant de [A]₀ est caractéristique de l'ordre 1.",
      explanation: "C'est précisément la signature de l'ordre 1 : t½ = ln2/k, indépendant de [A]₀. Si t½ était proportionnel à [A]₀ → ordre 0. Si t½ inversement proportionnel → ordre 2.",
      memo: "t½ constante quelque soit [A]₀ → ordre 1 confirmé",
      trap: "Ne pas confondre avec l'ordre 0 où t½ = [A]₀/2k augmente avec [A]₀.",
      technique: "Tester : doubler [A]₀ : t½ ordre 0 double, t½ ordre 1 inchangé, t½ ordre 2 diminue de moitié.",
      bacLink: "Ch.1 — Détermination de l'ordre"
    })
  },
  // ── Questions graphiques Ch.1 ───────────────────────────────────────────
  {
    id: 'ch1_g1', type: 11, chapter: 1,
    question: "Sur ce graphe de ln[A] en fonction du temps, la droite a une pente de −0,05 s⁻¹. Quelle est la valeur de k et de t½ ?",
    graphData: { type: 'ln_decay', A0: 1, k: 0.05, xLabel: 't (s)', yLabel: 'ln[A]' },
    options: [
      "k = 0,05 s⁻¹ et t½ = ln2/0,05 ≈ 13,9 s",
      "k = −0,05 s⁻¹ et t½ = 20 s",
      "k = 0,05 s⁻¹ et t½ = 1/0,05 = 20 s",
      "k = 0,05 s⁻¹ et t½ = 0,05/ln2 ≈ 0,072 s"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "k = |pente| = 0,05 s⁻¹. t½ = ln2/k = 0,693/0,05 ≈ 13,9 s",
      explanation: "Pente de ln[A] vs t = −k → k = 0,05 s⁻¹. Puis t½ = ln(2)/k ≈ 13,9 s. Ne pas confondre t½ et τ = 1/k = 20 s.",
      memo: "Pente = −k. t½ = 0,693/k ≠ 1/k.",
      trap: "τ = 1/k = 20 s ≠ t½ = ln2/k ≈ 13,9 s. Les deux diffèrent d'un facteur ln2.",
      technique: "Pente graphe ln[A] = −k → k positif = valeur absolue.",
      bacLink: "Ch.1 — Lecture graphique ln[A] vs t"
    })
  },
  {
    id: 'ch1_g2', type: 11, chapter: 1,
    question: "Sur ce graphe de [A](t), identifier graphiquement le temps de demi-réaction t½. Que vaut [A] au point de t½ ?",
    graphData: { type: 'exponential_decay', A0: 0.8, k: 0.08, xLabel: 't (s)', yLabel: '[A] (mol/L)' },
    options: [
      "[A](t½) = 0 mol/L",
      "[A](t½) = [A]₀/2 = 0,4 mol/L — lecture à mi-hauteur",
      "[A](t½) = [A]₀ × e⁻¹ ≈ 0,29 mol/L",
      "[A](t½) = [A]₀ × 0,63 ≈ 0,50 mol/L"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "[A](t½) = [A]₀/2 = 0,4 mol/L — on repère la mi-hauteur sur l'axe y, puis on lit t½ sur l'axe t.",
      explanation: "Méthode graphique : 1) Repérer [A]₀/2 sur l'axe y. 2) Tracer horizontale jusqu'à la courbe. 3) Descendre verticalement sur l'axe t → t½.",
      memo: "t½ = lecture graphique à mi-hauteur de [A]₀.",
      trap: "[A]₀×e⁻¹ correspond au temps caractéristique τ = 1/k, pas à t½.",
      technique: "Construire les pointillés : horizontal à [A]₀/2 puis vertical → t½.",
      bacLink: "Ch.1 — Lecture graphique t½"
    })
  },
  {
    id: 'ch1_g3', type: 11, chapter: 1,
    question: "Sur ce graphe [A](t), la tangente à l'origine a une certaine pente. Qu'est-ce qu'elle représente physiquement ?",
    graphData: { type: 'exponential_decay', A0: 1.0, k: 0.1, xLabel: 't (s)', yLabel: '[A] (mol/L)' },
    options: [
      "La constante k",
      "−v₀ : la vitesse initiale de disparition du réactif (valeur absolue = v₀)",
      "Le temps de demi-réaction t½",
      "L'avancement final x_f"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "La pente de la tangente en t=0 vaut d[A]/dt|₀ = −k[A]₀ = −v₀ (négative). Sa valeur absolue = vitesse initiale v₀.",
      explanation: "La tangente à l'origine d'une courbe [A](t) donne la vitesse instantanée en t=0. Pour l'ordre 1 : pente = −k[A]₀.",
      memo: "Pente tangente à l'origine = −v₀ (négative car [A] décroît).",
      trap: "La pente est négative (réactif qui disparaît). v₀ = |pente| = k[A]₀.",
      technique: "Tracer la tangente en t=0, lire Δy/Δx = −v₀.",
      bacLink: "Ch.1 — Vitesse initiale, tangente à l'origine"
    })
  },
  {
    id: 'ch1_q30', type: 7, chapter: 1,
    question: "BAC 2025 TYPE : On donne le graphe de ln([H₂O₂]) vs t, qui est une droite de pente −4,5×10⁻³ s⁻¹. Donner k, t½ et [H₂O₂](100s) si [H₂O₂]₀ = 0,3 mol/L.",
    options: [
      "k=4,5×10⁻³ s⁻¹, t½≈154s, [H₂O₂](100s)≈0,19 mol/L",
      "k=−4,5×10⁻³ s⁻¹, t½=222s, [H₂O₂](100s)=0,3 mol/L",
      "k=4,5×10⁻³ s⁻¹, t½≈154s, [H₂O₂](100s)≈0,13 mol/L",
      "k=4,5×10⁻³ s⁻¹, t½≈100s, [H₂O₂](100s)≈0,15 mol/L"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "k = 4,5×10⁻³ s⁻¹ | t½ = ln2/k = 154s | [H₂O₂](100s) = 0,3×e^(−0,45) ≈ 0,19 mol/L",
      explanation: "Pente = −k → k = 4,5×10⁻³ (valeur absolue). t½ = 0,693/4,5×10⁻³ ≈ 154s. [H₂O₂](100s) = 0,3×e^(−4,5×10⁻³×100) = 0,3×e^(−0,45) ≈ 0,3×0,638 ≈ 0,19 mol/L.",
      memo: "Pente graphe ln[A] = −k → k = |pente|",
      trap: "k = 4,5×10⁻³ et NON −4,5×10⁻³. La constante de vitesse est TOUJOURS positive.",
      technique: "Étapes : k = |pente| → t½ = ln2/k → [A](t) = [A]₀e^(−kt)",
      bacLink: "Ch.1 — Exploitation graphe ln[A] vs t"
    })
  },
];