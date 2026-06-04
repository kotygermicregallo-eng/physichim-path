import { buildCorrection } from './quizEngine';

// ─── CHAPITRE 6 : Stratégie en synthèse organique ───────────────────────────
export const quizCh6 = [
  {
    id: 'ch6_1', chapter: 6, type: 1,
    question: "Quel est le rendement d'une synthèse si on obtient 4,5 g de produit alors que la valeur théorique est 6,0 g ?",
    options: ["50 %", "60 %", "75 %", "80 %"],
    correct: 2,
    correction: buildCorrection({
      answer: "75 %",
      explanation: "η = m_obtenu / m_théo = 4,5 / 6,0 = 0,75 soit 75 %.",
      memo: "Rendement = obtenu ÷ théorique × 100.",
      trap: "Ne pas confondre masse obtenue et masse théorique.",
      technique: "Calculer n_théo (réactif limitant), puis m_théo = n_théo × M_produit.",
      bacLink: "Synthèse organique — calcul de rendement"
    })
  },
  {
    id: 'ch6_2', chapter: 6, type: 2,
    question: "Un catalyseur apparaît dans l'équation bilan de la réaction.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Le catalyseur est consommé puis restitué : il n'apparaît pas dans le bilan global.",
      memo: "Catalyseur = absent du bilan, présent dans le mécanisme.",
      trap: "On peut le voir dans les actes élémentaires mais pas dans l'équation globale.",
      technique: "Sommer les actes élémentaires : le catalyseur se simplifie.",
      bacLink: "Mécanisme réactionnel — rôle du catalyseur"
    })
  },
  {
    id: 'ch6_3', chapter: 6, type: 1,
    question: "Pour augmenter le rendement d'un équilibre, quelle stratégie est correcte ?",
    options: ["Diminuer la température", "Mettre un réactif en excès", "Utiliser un solvant différent", "Augmenter la pression"],
    correct: 1,
    correction: buildCorrection({
      answer: "Mettre un réactif en excès",
      explanation: "Un réactif en excès déplace l'équilibre vers les produits (loi de Le Chatelier), augmentant ainsi le rendement.",
      memo: "Excès réactif → déplacement équilibre → ↑ rendement.",
      trap: "La température accélère la réaction mais ne garantit pas un meilleur rendement.",
      technique: "Identifier le réactif limitant et mettre l'autre en excès.",
      bacLink: "Synthèse organique — optimisation du rendement"
    })
  },
  {
    id: 'ch6_4', chapter: 6, type: 4,
    question: "On réalise une estérification entre 0,1 mol d'acide éthanoïque et 0,15 mol d'éthanol. Le rendement est 65 %. Quelle masse d'ester obtient-on ? (M ester = 88 g/mol)",
    options: ["3,74 g", "5,72 g", "8,8 g", "6,5 g"],
    correct: 1,
    correction: buildCorrection({
      answer: "5,72 g",
      explanation: "Réactif limitant = acide (0,1 mol). n_théo = 0,1 mol. m_théo = 0,1 × 88 = 8,8 g. m_obtenu = 0,65 × 8,8 = 5,72 g.",
      memo: "m = η × n_limitant × M_produit.",
      trap: "Toujours identifier le réactif limitant avant le calcul.",
      technique: "1. Tableau d'avancement → x_max. 2. m_théo. 3. × η.",
      bacLink: "Estérification — calcul de rendement"
    })
  },
  {
    id: 'ch6_5', chapter: 6, type: 5,
    question: "On dit qu'un rendement de 100 % est facilement atteignable en synthèse organique. C'est...",
    options: ["Vrai, avec un bon catalyseur", "Faux, toujours inférieur à 100 % en pratique", "Vrai, si la réaction est totale", "Faux uniquement pour les réactions d'équilibre"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux, toujours inférieur à 100 % en pratique",
      explanation: "Pertes lors du filtrage, de la distillation, de l'extraction... Le rendement est toujours < 100 % en pratique.",
      memo: "η < 100 % : pertes inévitables lors des étapes de purification.",
      trap: "Même si la réaction est totale, les étapes de purification causent des pertes.",
      technique: "Minimiser les étapes de purification pour maximiser η.",
      bacLink: "Synthèse organique — rendement et pertes"
    })
  },
  {
    id: 'ch6_6', chapter: 6, type: 16,
    question: "Qu'est-ce que la CCM (chromatographie sur couche mince) permet de faire ?",
    options: ["Mesurer la masse d'un composé", "Identifier et suivre l'avancement d'une réaction", "Calculer le rendement", "Mesurer le pH d'une solution"],
    correct: 1,
    correction: buildCorrection({
      answer: "Identifier et suivre l'avancement d'une réaction",
      explanation: "La CCM sépare les composés selon leur affinité avec la phase mobile/stationnaire. Même Rf = même composé.",
      memo: "CCM : Rf = d_composé / d_front. Identifier réactifs restants et produits formés.",
      trap: "La CCM ne donne pas de quantités, seulement des identités.",
      technique: "Comparer les Rf avec des étalons connus.",
      bacLink: "Synthèse organique — suivi par CCM"
    })
  },
  {
    id: 'ch6_7', chapter: 6, type: 1,
    question: "Quel groupe fonctionnel caractérise un ester ?",
    options: ["–OH", "–COOH", "–COO–", "–CHO"],
    correct: 2,
    correction: buildCorrection({
      answer: "–COO–",
      explanation: "L'ester contient la liaison –COO– formée par condensation d'un acide carboxylique et d'un alcool.",
      memo: "Ester = –COO– (entre acide et alcool, perte d'eau).",
      trap: "–COOH est l'acide carboxylique, pas l'ester.",
      technique: "Acide + alcool → ester + eau (estérification).",
      bacLink: "Familles fonctionnelles — esters"
    })
  },
  {
    id: 'ch6_8', chapter: 6, type: 3,
    question: "Expliquer pourquoi on utilise un montage à reflux en synthèse organique.",
    options: ["Pour éviter la perte des réactifs volatils par évaporation", "Pour augmenter la pression", "Pour refroidir le milieu réactionnel", "Pour filtrer le produit"],
    correct: 0,
    correction: buildCorrection({
      answer: "Pour éviter la perte des réactifs volatils par évaporation",
      explanation: "Le réfrigérant à eau condense les vapeurs qui retombent dans le ballon, évitant les pertes et permettant le chauffage prolongé.",
      memo: "Reflux = chauffage sans perte → augmente vitesse sans perte de matière.",
      trap: "Le reflux ne purifie pas, il retient uniquement les vapeurs.",
      technique: "Monter le réfrigérant verticalement au-dessus du ballon.",
      bacLink: "Techniques expérimentales — montage à reflux"
    })
  },
  {
    id: 'ch6_9', chapter: 6, type: 2,
    question: "En formule topologique, les atomes de carbone aux intersections et extrémités sont implicites.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "En formule topologique, C et H sur C sont implicites. Seuls N, O, halogènes, etc. sont notés explicitement.",
      memo: "Topologique : C implicite aux coins, H sur C implicite.",
      trap: "Les atomes d'hydrogène sur les hétéroatomes (–OH, –NH₂) sont explicites.",
      technique: "Compter les liaisons autour d'un C implicite pour déduire le nombre de H.",
      bacLink: "Représentation des molécules organiques"
    })
  },
  {
    id: 'ch6_10', chapter: 6, type: 7,
    question: "Lors d'une synthèse d'arôme, on obtient 12 g d'ester (M = 116 g/mol) à partir de 0,15 mol de réactif limitant. Quel est le rendement ?",
    options: ["55 %", "69 %", "75 %", "82 %"],
    correct: 1,
    correction: buildCorrection({
      answer: "69 %",
      explanation: "n_obtenu = 12/116 = 0,1034 mol. η = n_obtenu/n_limitant = 0,1034/0,15 = 0,689 ≈ 69 %.",
      memo: "η = n_obtenu / n_théorique (réactif limitant).",
      trap: "Diviser n_obtenu par n_limitant, pas par n_excès.",
      technique: "Calculer n_obtenu = m/M, puis diviser par n_limitant.",
      bacLink: "Synthèse organique — calcul de rendement Bac"
    })
  },
];

// ─── CHAPITRE 7 : Mécanismes réactionnels ────────────────────────────────────
export const quizCh7 = [
  {
    id: 'ch7_1', chapter: 7, type: 1,
    question: "Qu'est-ce qu'un intermédiaire réactionnel ?",
    options: ["Un composé qui figure dans l'équation bilan", "Une espèce formée puis consommée au cours du mécanisme", "Un catalyseur", "Un produit final"],
    correct: 1,
    correction: buildCorrection({
      answer: "Une espèce formée puis consommée au cours du mécanisme",
      explanation: "Un IR est créé lors d'un acte élémentaire et détruit dans un acte suivant. Il n'apparaît pas dans le bilan global.",
      memo: "IR = transitoire, absent du bilan.",
      trap: "Ne pas confondre IR et catalyseur (restitué) ou produit final.",
      technique: "Sommer les AE : les IR se simplifient des deux membres.",
      bacLink: "Mécanismes réactionnels — intermédiaires"
    })
  },
  {
    id: 'ch7_2', chapter: 7, type: 2,
    question: "Une flèche courbe en chimie organique représente le déplacement d'un proton H⁺.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Une flèche courbe représente le déplacement d'un doublet d'électrons (paire d'électrons), pas d'un proton.",
      memo: "Flèche courbe = déplacement de doublet électronique (site D → site A).",
      trap: "Le proton se déplace, mais c'est le doublet qui est modélisé par la flèche.",
      technique: "La flèche part du site riche en e⁻ (D) vers le site pauvre (A).",
      bacLink: "Mécanismes réactionnels — flèches courbes"
    })
  },
  {
    id: 'ch7_3', chapter: 7, type: 1,
    question: "Dans un mécanisme réactionnel, le catalyseur est :",
    options: ["Consommé sans être restitué", "Absent de tous les actes élémentaires", "Consommé dans un AE puis restitué dans un autre", "Toujours un solide"],
    correct: 2,
    correction: buildCorrection({
      answer: "Consommé dans un AE puis restitué dans un autre",
      explanation: "Le catalyseur apparaît comme réactif dans un acte élémentaire puis comme produit dans un autre, c'est pourquoi il n'est pas dans le bilan.",
      memo: "Catalyseur : consommé puis restitué → absent du bilan.",
      trap: "Il est bien présent dans le mécanisme, juste pas dans le bilan global.",
      technique: "Identifier l'espèce qui disparaît et réapparaît dans les AE.",
      bacLink: "Catalyse — mécanisme"
    })
  },
  {
    id: 'ch7_4', chapter: 7, type: 5,
    question: "Le site donneur dans une réaction organique est un site riche en protons.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Le site donneur est riche en ÉLECTRONS (doublet libre, liaison π, charge négative, δ⁻), pas en protons.",
      memo: "D = riche en e⁻ (doublet, π, δ⁻). A = pauvre en e⁻ (δ⁺, lacune).",
      trap: "Confusion électrons/protons fréquente au Bac.",
      technique: "Analyser la polarité des liaisons pour identifier D et A.",
      bacLink: "Sites donneurs et accepteurs"
    })
  },
  {
    id: 'ch7_5', chapter: 7, type: 3,
    question: "Comment obtient-on l'équation bilan à partir d'un mécanisme réactionnel ?",
    options: ["En sélectionnant l'acte élémentaire le plus lent", "En additionnant tous les actes élémentaires", "En multipliant les vitesses des actes élémentaires", "En prenant le dernier acte élémentaire"],
    correct: 1,
    correction: buildCorrection({
      answer: "En additionnant tous les actes élémentaires",
      explanation: "On somme toutes les équations des AE. Les IR et le catalyseur se simplifient, donnant l'équation bilan nette.",
      memo: "Bilan = somme des AE. IR et catalyseur se simplifient.",
      trap: "Ne pas oublier de simplifier les espèces qui apparaissent des deux côtés.",
      technique: "Écrire chaque AE, additionner, simplifier les espèces communes.",
      bacLink: "Mécanismes — obtention de l'équation bilan"
    })
  },
  {
    id: 'ch7_6', chapter: 7, type: 16,
    question: "Qu'est-ce qu'un acte élémentaire (AE) ?",
    options: ["Une réaction globale entre deux molécules", "Un choc efficace entre entités à l'échelle microscopique", "Une étape de purification", "Une mesure expérimentale"],
    correct: 1,
    correction: buildCorrection({
      answer: "Un choc efficace entre entités à l'échelle microscopique",
      explanation: "Un AE est une transformation élémentaire décrivant un choc efficace à l'échelle moléculaire, avec formation/rupture de liaisons.",
      memo: "AE = choc efficace à l'échelle microscopique.",
      trap: "Un AE n'est pas la réaction globale observée macroscopiquement.",
      technique: "Chaque AE est concerté (une seule étape de réorganisation électronique).",
      bacLink: "Mécanismes réactionnels — définitions"
    })
  },
  {
    id: 'ch7_7', chapter: 7, type: 4,
    question: "Un mécanisme comporte 3 actes élémentaires. Le premier produit un IR₁, le second consomme IR₁ et produit IR₂, le troisième consomme IR₂ et produit P. Combien d'IR apparaissent dans l'équation bilan ?",
    options: ["0", "1", "2", "3"],
    correct: 0,
    correction: buildCorrection({
      answer: "0",
      explanation: "IR₁ et IR₂ sont créés puis consommés dans des AE différents. En sommant les AE, ils disparaissent. Le bilan ne contient que réactifs et produits.",
      memo: "Les IR se simplifient toujours dans le bilan global.",
      trap: "Les IR sont présents dans les AE mais pas dans le bilan.",
      technique: "Sommer les AE et simplifier les espèces des deux côtés.",
      bacLink: "Mécanismes réactionnels — bilan"
    })
  },
  {
    id: 'ch7_8', chapter: 7, type: 1,
    question: "Dans une liaison C–O, quel atome est le site donneur (δ⁻) ?",
    options: ["C", "O", "Les deux également", "Aucun des deux"],
    correct: 1,
    correction: buildCorrection({
      answer: "O",
      explanation: "L'oxygène est plus électronégatif que le carbone, donc la liaison C–O est polarisée Cδ⁺–Oδ⁻. L'oxygène est le site donneur.",
      memo: "Électronégativité : O > N > C > H. Le plus électronégatif = δ⁻ = donneur.",
      trap: "C est le site accepteur (δ⁺), O est le donneur (δ⁻).",
      technique: "Utiliser l'échelle d'électronégativité : F > O > N > C > H.",
      bacLink: "Polarité des liaisons — sites D et A"
    })
  },
  {
    id: 'ch7_9', chapter: 7, type: 2,
    question: "Dans une catalyse hétérogène, le catalyseur et les réactifs sont dans le même état physique.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Catalyse hétérogène = catalyseur et réactifs dans des états physiques différents (ex : Pt solide + réactifs gazeux).",
      memo: "Homogène = même phase. Hétérogène = phases différentes.",
      trap: "Ne pas inverser homogène et hétérogène.",
      technique: "Exemples : Pt/H₂ (hétérogène), H⁺ aqueux (homogène).",
      bacLink: "Catalyse — types"
    })
  },
  {
    id: 'ch7_10', chapter: 7, type: 7,
    question: "Lors de l'addition d'HBr sur une liaison C=C, la flèche courbe part de :",
    options: ["L'atome H vers la liaison π", "La liaison π (site D) vers H⁺ (site A)", "L'atome Br vers le carbone", "Le carbone vers H"],
    correct: 1,
    correction: buildCorrection({
      answer: "La liaison π (site D) vers H⁺ (site A)",
      explanation: "La liaison π est riche en électrons (site donneur). H⁺ est déficient en électrons (site accepteur). La flèche courbe part de π vers H.",
      memo: "π = site D (riche). H⁺ = site A (lacune). Flèche : D → A.",
      trap: "La flèche va toujours du site riche vers le site pauvre en e⁻.",
      technique: "1. Identifier sites D et A. 2. Tracer la flèche D → A.",
      bacLink: "Mécanismes — addition électrophile"
    })
  },
];

// ─── CHAPITRE 8 : Radioactivité ──────────────────────────────────────────────
export const quizCh8 = [
  {
    id: 'ch8_1', chapter: 8, type: 1,
    question: "La loi de décroissance radioactive est :",
    options: ["N(t) = N₀ + λt", "N(t) = N₀ · e^(−λt)", "N(t) = N₀ · (1 − e^(−λt))", "N(t) = λ · N₀ · t"],
    correct: 1,
    correction: buildCorrection({
      answer: "N(t) = N₀ · e^(−λt)",
      explanation: "La décroissance radioactive est exponentielle décroissante, solution de l'EDO dN/dt = −λN.",
      memo: "N(t) = N₀ e^(−λt). Même forme que A(t) = A₀ e^(−λt).",
      trap: "Ne pas confondre avec la charge du condensateur (1 − e^(−t/τ)).",
      technique: "Résoudre dN/dt = −λN → N = N₀ e^(−λt).",
      bacLink: "Radioactivité — loi de décroissance"
    })
  },
  {
    id: 'ch8_2', chapter: 8, type: 4,
    question: "Le carbone 14 a une demi-vie t₁/₂ = 5730 ans. Quelle est sa constante radioactive λ (en an⁻¹) ?",
    options: ["1,21 × 10⁻⁴", "8,26 × 10³", "5730", "0,693"],
    correct: 0,
    correction: buildCorrection({
      answer: "1,21 × 10⁻⁴ an⁻¹",
      explanation: "λ = ln2 / t₁/₂ = 0,693 / 5730 = 1,21 × 10⁻⁴ an⁻¹.",
      memo: "λ = ln2 / t₁/₂.",
      trap: "Ne pas oublier que λ = ln2/t₁/₂, pas λ = 1/t₁/₂.",
      technique: "t₁/₂ = ln2/λ ↔ λ = ln2/t₁/₂.",
      bacLink: "Radioactivité — constante radioactive"
    })
  },
  {
    id: 'ch8_3', chapter: 8, type: 1,
    question: "Lors d'une désintégration α, le noyau fils a :",
    options: ["Z−1 et A inchangé", "Z−2 et A−4", "Z+1 et A inchangé", "Z et A−1"],
    correct: 1,
    correction: buildCorrection({
      answer: "Z−2 et A−4",
      explanation: "La particule α est ⁴₂He. Conservation de Z : Z_fils = Z−2. Conservation de A : A_fils = A−4.",
      memo: "α = ⁴He : perd 2 protons et 2 neutrons.",
      trap: "Ne pas confondre avec β⁻ (Z+1, A constant) ou β⁺ (Z−1, A constant).",
      technique: "Conservation de A et Z : A_fils = A−4, Z_fils = Z−2.",
      bacLink: "Radioactivité — types de désintégration"
    })
  },
  {
    id: 'ch8_4', chapter: 8, type: 2,
    question: "Lors d'une désintégration β⁻, le nombre de masse A est conservé.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "En β⁻, un neutron se transforme en proton + électron. A (= Z+N) reste constant car on transforme n en p, sans changer A.",
      memo: "β⁻ : A inchangé, Z+1. β⁺ : A inchangé, Z−1.",
      trap: "Seul α modifie A (A−4).",
      technique: "Règles de conservation : A et Z conservés dans toute équation nucléaire.",
      bacLink: "Radioactivité β⁻ — conservation"
    })
  },
  {
    id: 'ch8_5', chapter: 8, type: 4,
    question: "Un échantillon a une activité initiale A₀ = 800 Bq. Après 3 demi-vies, son activité est :",
    options: ["100 Bq", "200 Bq", "400 Bq", "50 Bq"],
    correct: 0,
    correction: buildCorrection({
      answer: "100 Bq",
      explanation: "Après chaque t₁/₂, l'activité est divisée par 2. Après 3 t₁/₂ : A = 800 / 2³ = 800 / 8 = 100 Bq.",
      memo: "Après n demi-vies : A = A₀ / 2ⁿ.",
      trap: "Ne pas diviser par 3 mais par 2³ = 8.",
      technique: "A(n·t₁/₂) = A₀ × (1/2)ⁿ.",
      bacLink: "Radioactivité — calcul d'activité"
    })
  },
  {
    id: 'ch8_6', chapter: 8, type: 16,
    question: "Quelle est l'unité de l'activité radioactive ?",
    options: ["Hertz (Hz)", "Becquerel (Bq)", "Gray (Gy)", "Sievert (Sv)"],
    correct: 1,
    correction: buildCorrection({
      answer: "Becquerel (Bq)",
      explanation: "1 Bq = 1 désintégration par seconde. A = |dN/dt| = λN.",
      memo: "Activité en Bq (becquerels) = désintégrations/s.",
      trap: "Gray et Sievert mesurent la dose absorbée, pas l'activité.",
      technique: "A = λN (en Bq si λ en s⁻¹ et N en nombre de noyaux).",
      bacLink: "Radioactivité — unités"
    })
  },
  {
    id: 'ch8_7', chapter: 8, type: 7,
    question: "Un fossile contient 25 % de carbone 14 par rapport à un organisme vivant. t₁/₂(¹⁴C) = 5730 ans. Quel est son âge ?",
    options: ["5730 ans", "11460 ans", "17190 ans", "2865 ans"],
    correct: 1,
    correction: buildCorrection({
      answer: "11460 ans",
      explanation: "25 % = 1/4 = (1/2)². Après 2 demi-vies, il reste 25 %. Âge = 2 × 5730 = 11460 ans.",
      memo: "Activité réduite de moitié à chaque t₁/₂. 25 % = 2 demi-vies.",
      trap: "25 % = (1/2)² donc 2 demi-vies, pas 4.",
      technique: "Résoudre A/A₀ = (1/2)^(t/t₁/₂) → t = (ln(A/A₀)/ln(1/2)) × t₁/₂.",
      bacLink: "Datation au ¹⁴C — Bac"
    })
  },
  {
    id: 'ch8_8', chapter: 8, type: 5,
    question: "Plus la demi-vie est longue, plus le noyau est instable.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Plus la demi-vie est LONGUE, plus le noyau est STABLE (se désintègre lentement). Ex : ²³⁸U a t₁/₂ ≈ 4,5 milliards d'années.",
      memo: "t₁/₂ long = noyau stable. t₁/₂ court = noyau très instable.",
      trap: "Instabilité ↔ désintégration rapide ↔ t₁/₂ court.",
      technique: "λ = ln2/t₁/₂ : si t₁/₂ grand → λ petit → désintégration lente.",
      bacLink: "Radioactivité — stabilité et demi-vie"
    })
  },
  {
    id: 'ch8_9', chapter: 8, type: 1,
    question: "Le temps caractéristique τ = 1/λ est relié à t₁/₂ par :",
    options: ["τ = t₁/₂ × ln2", "τ = t₁/₂ / ln2", "τ = t₁/₂ × 2", "τ = t₁/₂ / 2"],
    correct: 1,
    correction: buildCorrection({
      answer: "τ = t₁/₂ / ln2",
      explanation: "t₁/₂ = ln2/λ et τ = 1/λ → τ = t₁/₂/ln2 ≈ 1,44 × t₁/₂.",
      memo: "τ = t₁/₂ / ln2 ≈ 1,44 t₁/₂. À t = τ, il reste e⁻¹ ≈ 37 % des noyaux.",
      trap: "τ ≠ t₁/₂. τ > t₁/₂.",
      technique: "t₁/₂ = τ × ln2.",
      bacLink: "Radioactivité — temps caractéristique"
    })
  },
  {
    id: 'ch8_10', chapter: 8, type: 19,
    question: "Pourquoi la datation au ¹⁴C est-elle limitée à environ 50 000 ans ?",
    options: ["Parce que le ¹⁴C disparaît complètement après 50 000 ans", "Parce que l'activité devient trop faible pour être mesurée avec précision", "Parce que le ¹⁴C se transforme en autre chose après 50 000 ans", "Parce que la méthode est trop coûteuse"],
    correct: 1,
    correction: buildCorrection({
      answer: "Parce que l'activité devient trop faible pour être mesurée avec précision",
      explanation: "Après ~9 demi-vies (≈ 50 000 ans), il reste moins de 0,2 % du ¹⁴C initial. L'activité devient inférieure au seuil de détection.",
      memo: "Limite datation ¹⁴C : activité trop faible < 50 000 ans.",
      trap: "Le ¹⁴C ne disparaît pas totalement, il diminue exponentiellement.",
      technique: "Calculer (1/2)^(50000/5730) ≈ 0,002 soit 0,2 % restant.",
      bacLink: "Datation — limites de la méthode"
    })
  },
];

// ─── CHAPITRE 9 : Évolution forcée ───────────────────────────────────────────
export const quizCh9 = [
  {
    id: 'ch9_1', chapter: 9, type: 1,
    question: "Lors d'une électrolyse, à la cathode se produit :",
    options: ["Une oxydation", "Une réduction", "Une neutralisation", "Une précipitation"],
    correct: 1,
    correction: buildCorrection({
      answer: "Une réduction",
      explanation: "La cathode est reliée à la borne − du générateur. Les électrons fournis permettent la réduction (gain d'e⁻).",
      memo: "Électrolyse : cathode − = réduction. Anode + = oxydation.",
      trap: "C'est l'inverse d'une pile : en pile, cathode = + (réduction).",
      technique: "Retenir : RED-OX à l'Anode (REDOX). Cathode = réduction (toujours).",
      bacLink: "Électrolyse — électrodes"
    })
  },
  {
    id: 'ch9_2', chapter: 9, type: 4,
    question: "Une électrolyse est effectuée pendant 30 min avec un courant de 2 A. F = 96500 C/mol. Combien de moles d'électrons sont échangées ?",
    options: ["0,0373 mol", "1800 mol", "3600 mol", "0,5 mol"],
    correct: 0,
    correction: buildCorrection({
      answer: "0,0373 mol",
      explanation: "Q = I × Δt = 2 × 1800 = 3600 C. n(e⁻) = Q/F = 3600/96500 = 0,0373 mol.",
      memo: "Q = I·Δt (en C), n(e⁻) = Q/F.",
      trap: "Convertir Δt en secondes : 30 min = 1800 s.",
      technique: "Q = I·Δt → n(e⁻) = Q/F = I·Δt/F.",
      bacLink: "Électrolyse — calcul quantitatif"
    })
  },
  {
    id: 'ch9_3', chapter: 9, type: 2,
    question: "L'électrolyse est une transformation spontanée.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "L'électrolyse est une transformation FORCÉE. Elle nécessite un apport d'énergie électrique (générateur) pour se produire.",
      memo: "Électrolyse = forcée (énergie reçue). Pile = spontanée (énergie fournie).",
      trap: "La pile est spontanée, l'électrolyse est son inverse forcé.",
      technique: "Sans générateur, pas d'électrolyse possible.",
      bacLink: "Électrolyse vs pile"
    })
  },
  {
    id: 'ch9_4', chapter: 9, type: 1,
    question: "Un accumulateur en mode charge se comporte comme :",
    options: ["Une pile", "Un électrolyseur", "Un résistor", "Un condensateur"],
    correct: 1,
    correction: buildCorrection({
      answer: "Un électrolyseur",
      explanation: "En charge, on impose un courant pour forcer une réaction inverse : c'est une électrolyse. En décharge, il se comporte comme une pile.",
      memo: "Accumulateur : charge = électrolyseur. Décharge = pile.",
      trap: "Ne pas confondre les deux modes de fonctionnement.",
      technique: "Charge → énergie stockée (électrolyse). Décharge → énergie libérée (pile).",
      bacLink: "Accumulateurs — modes de fonctionnement"
    })
  },
  {
    id: 'ch9_5', chapter: 9, type: 5,
    question: "Lors de l'électrolyse de CuSO₄ avec des électrodes de platine, du cuivre se dépose à l'anode.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Le cuivre Cu²⁺ se réduit à la CATHODE (Cu²⁺ + 2e⁻ → Cu). À l'anode (Pt inerte), il y a oxydation de l'eau.",
      memo: "Cathode = réduction → dépôt de métal. Anode = oxydation.",
      trap: "Le dépôt de métal se fait toujours à la cathode, jamais à l'anode.",
      technique: "Cu²⁺ + 2e⁻ → Cu (réduction, cathode).",
      bacLink: "Électrolyse CuSO₄ — dépôt de cuivre"
    })
  },
  {
    id: 'ch9_6', chapter: 9, type: 4,
    question: "On veut déposer 0,64 g de cuivre (M = 64 g/mol) par électrolyse. n(e⁻) échangés = ? (Cu²⁺ + 2e⁻ → Cu)",
    options: ["0,01 mol", "0,02 mol", "0,04 mol", "0,005 mol"],
    correct: 1,
    correction: buildCorrection({
      answer: "0,02 mol",
      explanation: "n(Cu) = 0,64/64 = 0,01 mol. L'équation montre 2e⁻ par Cu. n(e⁻) = 2 × 0,01 = 0,02 mol.",
      memo: "n(e⁻) = n(e⁻/métal) × n(métal). Lire le coefficient de e⁻.",
      trap: "Ne pas oublier le coefficient stœchiométrique de e⁻ (ici 2).",
      technique: "Lire la demi-équation : Cu²⁺ + 2e⁻ → Cu → 2 mol e⁻ / mol Cu.",
      bacLink: "Électrolyse — calcul stœchiométrique"
    })
  },
  {
    id: 'ch9_7', chapter: 9, type: 7,
    question: "Le rendement d'une cellule photovoltaïque est de 15 %. Elle reçoit un éclairement ε = 800 W/m² sur une surface S = 2 m². Quelle puissance électrique produit-elle ?",
    options: ["120 W", "240 W", "1600 W", "960 W"],
    correct: 1,
    correction: buildCorrection({
      answer: "240 W",
      explanation: "P_lumineuse = ε × S = 800 × 2 = 1600 W. P_électrique = η × P_l = 0,15 × 1600 = 240 W.",
      memo: "η = P_él / P_l → P_él = η × ε × S.",
      trap: "Ne pas oublier de multiplier ε par S pour obtenir P_lumineuse.",
      technique: "P_l = ε·S → P_él = η·P_l.",
      bacLink: "Cellule photovoltaïque — puissance"
    })
  },
  {
    id: 'ch9_8', chapter: 9, type: 19,
    question: "Pourquoi l'électrolyse de l'eau produit-elle de l'hydrogène à la cathode ?",
    options: ["Parce que H⁺ est oxydé", "Parce que 2H₂O + 2e⁻ → H₂ + 2HO⁻ (réduction)", "Parce que O₂ est réduit", "Parce que H₂O est neutre"],
    correct: 1,
    correction: buildCorrection({
      answer: "Parce que 2H₂O + 2e⁻ → H₂ + 2HO⁻ (réduction)",
      explanation: "À la cathode (−), les molécules d'eau captent des électrons et se réduisent en H₂ et HO⁻.",
      memo: "Cathode (eau) : 2H₂O + 2e⁻ → H₂ + 2HO⁻.",
      trap: "C'est une réduction, pas une oxydation.",
      technique: "Anode : 2H₂O → O₂ + 4H⁺ + 4e⁻. Cathode : 4H₂O + 4e⁻ → 2H₂ + 4HO⁻.",
      bacLink: "Électrolyse de l'eau"
    })
  },
  {
    id: 'ch9_9', chapter: 9, type: 1,
    question: "La constante de Faraday F vaut :",
    options: ["8,314 J/(mol·K)", "96500 C/mol", "6,02 × 10²³ mol⁻¹", "1,6 × 10⁻¹⁹ C"],
    correct: 1,
    correction: buildCorrection({
      answer: "96500 C/mol",
      explanation: "F = charge d'une mole d'électrons = N_A × e = 6,02×10²³ × 1,6×10⁻¹⁹ ≈ 96500 C/mol.",
      memo: "F = 96500 C/mol (constante de Faraday).",
      trap: "R = 8,314 est la constante des gaz parfaits. N_A = 6,02×10²³ est la constante d'Avogadro.",
      technique: "Q = n(e⁻) × F = I × Δt.",
      bacLink: "Constante de Faraday"
    })
  },
  {
    id: 'ch9_10', chapter: 9, type: 2,
    question: "Dans une pile Daniell, l'électrode de zinc est l'anode.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "À l'anode de la pile Daniell, le zinc s'oxyde : Zn → Zn²⁺ + 2e⁻. L'anode est la borne − de la pile.",
      memo: "Zn → Zn²⁺ + 2e⁻ (oxydation) → anode → borne −.",
      trap: "L'anode d'une pile est la borne − (inverse d'un électrolyseur où anode = +).",
      technique: "Pile : anode − (oxydation), cathode + (réduction).",
      bacLink: "Pile Daniell — anode et cathode"
    })
  },
];

// ─── CHAPITRE 10 : Cinématique du point ──────────────────────────────────────
export const quizCh10 = [
  {
    id: 'ch10_1', chapter: 10, type: 1,
    question: "Le vecteur vitesse est toujours :",
    options: ["Perpendiculaire à la trajectoire", "Tangent à la trajectoire dans le sens du mouvement", "Dirigé vers le centre de courbure", "Constant en direction"],
    correct: 1,
    correction: buildCorrection({
      answer: "Tangent à la trajectoire dans le sens du mouvement",
      explanation: "v = dOM/dt est tangent à la trajectoire et orienté dans le sens du mouvement.",
      memo: "v⃗ tangent à la trajectoire, dans le sens du mouvement.",
      trap: "L'accélération centripète est perpendiculaire à v⃗ (vers le centre), pas v⃗.",
      technique: "v⃗ est la dérivée temporelle du vecteur position.",
      bacLink: "Cinématique — vecteur vitesse"
    })
  },
  {
    id: 'ch10_2', chapter: 10, type: 4,
    question: "Un point M a pour vecteur vitesse v⃗(t) = (3t, −2) m/s. Quelle est la norme de la vitesse à t = 2 s ?",
    options: ["6 m/s", "√40 m/s ≈ 6,3 m/s", "8 m/s", "4 m/s"],
    correct: 1,
    correction: buildCorrection({
      answer: "√40 m/s ≈ 6,3 m/s",
      explanation: "À t=2 : vx = 6 m/s, vy = −2 m/s. ||v|| = √(6² + 2²) = √(36+4) = √40 ≈ 6,32 m/s.",
      memo: "||v|| = √(vx² + vy²).",
      trap: "Ne pas additionner vx et vy directement, utiliser la norme.",
      technique: "||v|| = √(vx² + vy²) à l'instant t donné.",
      bacLink: "Cinématique — norme de la vitesse"
    })
  },
  {
    id: 'ch10_3', chapter: 10, type: 2,
    question: "En mouvement circulaire uniforme (MCU), le vecteur accélération est nul.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "En MCU, ||v|| = cste mais la direction change → a⃗ ≠ 0⃗. L'accélération est centripète (vers le centre), a = v²/R.",
      memo: "MCU : vitesse constante en norme MAIS direction change → a⃗ centripète ≠ 0⃗.",
      trap: "Uniforme = ||v|| constant, pas a⃗ = 0⃗.",
      technique: "En MCU : aT = 0 mais aN = v²/R ≠ 0.",
      bacLink: "MCU — accélération centripète"
    })
  },
  {
    id: 'ch10_4', chapter: 10, type: 1,
    question: "En chronophotographie, le vecteur vitesse en Mₙ est approximé par :",
    options: ["(MₙMₙ₊₁)/(Δt)", "(Mₙ₋₁Mₙ₊₁)/(2Δt)", "(Mₙ₋₂Mₙ₊₂)/(4Δt)", "(Mₙ₋₁Mₙ)/(Δt)"],
    correct: 1,
    correction: buildCorrection({
      answer: "(Mₙ₋₁Mₙ₊₁)/(2Δt)",
      explanation: "La dérivée est approchée par la méthode des différences centrées : v(tn) ≈ (OM_{n+1} − OM_{n-1})/(2Δt).",
      memo: "Chronophoto : v⃗(Mₙ) ≈ Mₙ₋₁Mₙ₊₁ / (2Δt).",
      trap: "Utiliser les points voisins Mₙ₋₁ et Mₙ₊₁, pas Mₙ et Mₙ₊₁.",
      technique: "Méthode des différences centrées pour une meilleure précision.",
      bacLink: "Chronophotographie — calcul de vitesse"
    })
  },
  {
    id: 'ch10_5', chapter: 10, type: 4,
    question: "En MCU de rayon R = 0,5 m et v = 4 m/s, l'accélération centripète est :",
    options: ["8 m/s²", "32 m/s²", "2 m/s²", "16 m/s²"],
    correct: 1,
    correction: buildCorrection({
      answer: "32 m/s²",
      explanation: "aₙ = v²/R = 4²/0,5 = 16/0,5 = 32 m/s².",
      memo: "aₙ = v²/R (centripète, vers le centre).",
      trap: "Diviser v² par R, pas v par R.",
      technique: "aₙ = v²/R. Toujours vers le centre.",
      bacLink: "MCU — accélération centripète Bac"
    })
  },
  {
    id: 'ch10_6', chapter: 10, type: 16,
    question: "Qu'est-ce que les équations horaires d'un mouvement ?",
    options: ["Les équations de la trajectoire y(x)", "Les expressions x(t) et y(t) donnant la position en fonction du temps", "La vitesse en fonction de la position", "La relation entre force et accélération"],
    correct: 1,
    correction: buildCorrection({
      answer: "Les expressions x(t) et y(t) donnant la position en fonction du temps",
      explanation: "Les équations horaires sont x(t) et y(t), obtenues en intégrant les composantes de la vitesse.",
      memo: "Équations horaires : x(t), y(t). Trajectoire : y en fonction de x.",
      trap: "Ne pas confondre équations horaires et équation de la trajectoire y(x).",
      technique: "Intégrer vx(t) → x(t), intégrer vy(t) → y(t).",
      bacLink: "Cinématique — équations horaires"
    })
  },
  {
    id: 'ch10_7', chapter: 10, type: 1,
    question: "Pour un MRUA (mouvement rectiligne uniformément accéléré) de vitesse initiale v₀ et accélération a, la vitesse est :",
    options: ["v(t) = v₀ + at²/2", "v(t) = v₀ + at", "v(t) = v₀ · e^(at)", "v(t) = v₀ / (1 + at)"],
    correct: 1,
    correction: buildCorrection({
      answer: "v(t) = v₀ + at",
      explanation: "En MRUA, a est constant → intégration de a = dv/dt → v(t) = v₀ + at.",
      memo: "MRUA : v(t) = v₀ + at. x(t) = x₀ + v₀t + at²/2.",
      trap: "at²/2 est pour x(t), pas v(t).",
      technique: "Intégrer dv/dt = a (constante) → v = at + C = at + v₀.",
      bacLink: "MRUA — équations du mouvement"
    })
  },
  {
    id: 'ch10_8', chapter: 10, type: 19,
    question: "Pourquoi dit-on qu'en MCU le mouvement est à la fois uniforme et accéléré ?",
    options: ["Car la vitesse augmente", "Car la norme de v est constante mais sa direction change, nécessitant une accélération", "Car a = 0", "Car la trajectoire est une droite"],
    correct: 1,
    correction: buildCorrection({
      answer: "Car la norme de v est constante mais sa direction change, nécessitant une accélération",
      explanation: "Uniforme = ||v|| constant. Accéléré car la direction de v⃗ change → dv⃗/dt ≠ 0⃗. C'est l'accélération centripète.",
      memo: "MCU : vitesse constante en norme (uniforme) + direction variable (accéléré).",
      trap: "Uniforme ≠ non accéléré en MCU.",
      technique: "Analyser les composantes tangentielle (aT = 0) et normale (aN = v²/R).",
      bacLink: "MCU — nature du mouvement"
    })
  },
  {
    id: 'ch10_9', chapter: 10, type: 5,
    question: "En MRU (mouvement rectiligne uniforme), l'accélération est nulle donc aucune force ne s'exerce.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "En MRU, ΣF = 0 (les forces se compensent), mais des forces peuvent exister. Exemples : poids compensé par poussée d'Archimède.",
      memo: "MRU → ΣF = 0⃗, pas F = 0⃗. Les forces se compensent.",
      trap: "ΣF = 0⃗ ≠ absence de force. Il peut y avoir des forces qui s'annulent.",
      technique: "Principe d'inertie : ΣF = 0⃗ ↔ mouvement uniforme.",
      bacLink: "MRU — principe d'inertie"
    })
  },
  {
    id: 'ch10_10', chapter: 10, type: 7,
    question: "Un cycliste parcourt un virage circulaire de rayon R = 20 m à v = 6 m/s. Quelle est son accélération centripète ?",
    options: ["0,3 m/s²", "1,8 m/s²", "7,2 m/s²", "3,6 m/s²"],
    correct: 1,
    correction: buildCorrection({
      answer: "1,8 m/s²",
      explanation: "aₙ = v²/R = 36/20 = 1,8 m/s².",
      memo: "aₙ = v²/R.",
      trap: "Ne pas confondre v²/R avec v/R.",
      technique: "aₙ = v²/R = 6²/20 = 36/20 = 1,8 m/s².",
      bacLink: "MCU — application Bac"
    })
  },
];