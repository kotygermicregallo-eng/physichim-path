// Chapter 2 — Évolution spontanée — 30 questions
import { buildCorrection } from './quizEngine';

export const quizCh2 = [
  {
    id: 'ch2_q1', type: 1, chapter: 2,
    question: "Un système chimique évolue dans le sens direct (→) lorsque :",
    options: [
      "Qr > K(T)",
      "Qr = K(T)",
      "Qr < K(T)",
      "K(T) = 0"
    ],
    correctIndex: 2,
    correction: buildCorrection({
      answer: "Qr < K(T) → sens direct",
      explanation: "Si Qr < K, le système doit produire plus de produits pour atteindre l'équilibre → sens direct. Si Qr > K → sens indirect. Si Qr = K → équilibre.",
      memo: "Qr < K → direct (manque de produits) | Qr > K → indirect (excès de produits)",
      trap: "Ne pas confondre : Qr calculé à l'état INITIAL, K(T) est la constante d'équilibre (ne dépend que de T).",
      technique: "Calculer Qr,i avec les concentrations initiales → comparer à K(T)",
      bacLink: "Ch.2 — Critère d'évolution spontanée"
    })
  },
  {
    id: 'ch2_q2', type: 2, chapter: 2,
    question: "Vrai ou Faux : La constante d'équilibre K(T) dépend des concentrations initiales des réactifs.",
    options: ["Vrai", "Faux"],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Faux — K(T) ne dépend QUE de la température.",
      explanation: "K(T) est une propriété thermodynamique intrinsèque de la réaction à une température donnée. Elle est la même quelles que soient les concentrations initiales.",
      memo: "K(T) = fonction de T uniquement",
      trap: "Qr dépend des concentrations (il varie). K(T) ne dépend pas des concentrations.",
      technique: "Si T change → K change. Si [réactif] change → Qr change mais K reste identique.",
      bacLink: "Ch.2 — Constante d'équilibre K(T)"
    })
  },
  {
    id: 'ch2_q3', type: 16, chapter: 2,
    question: "Définir avec précision le taux d'avancement τ d'une réaction.",
    options: null,
    isOpen: true,
    correction: buildCorrection({
      answer: "τ = x_f / x_max est le rapport de l'avancement final sur l'avancement maximal (si la réaction était totale). 0 < τ ≤ 1.",
      explanation: "τ = 1 : réaction totale (réactif limitant entièrement consommé). τ < 1 : réaction équilibrée. τ s'exprime sans unité.",
      memo: "τ = avancement réel / avancement max. τ=1 → totale",
      trap: "τ n'est pas un pourcentage directement (τ = 0,8 ≠ 80% si mal exprimé).",
      technique: "Calculer x_max : trouver le réactif limitant → x_max = n_limitant/ν. Puis τ = x_f/x_max",
      bacLink: "Ch.2 — Taux d'avancement"
    })
  },
  {
    id: 'ch2_q4', type: 4, chapter: 2,
    question: "Pour A + 2B ⇌ C, avec K = 4×10² et des concentrations initiales [A]₀ = [B]₀ = 0,5 mol/L, [C]₀ = 0. Calculer Qr,i.",
    options: [
      "Qr,i = 0 (pas de produit initialement)",
      "Qr,i = 0,5 / (0,5 × 0,25) = 4",
      "Qr,i = 0 car [C]₀ = 0 → numérateur = 0",
      "Qr,i = K = 400"
    ],
    correctIndex: 2,
    correction: buildCorrection({
      answer: "Qr,i = [C]₀ / ([A]₀[B]₀²) = 0 / (0,5 × 0,25) = 0",
      explanation: "Qr = activité(C) / (activité(A) × activité(B)²). Comme [C]₀ = 0, le numérateur vaut 0 → Qr,i = 0.",
      memo: "Si aucun produit initialement → Qr,i = 0 → évolution dans le sens direct",
      trap: "Ne pas calculer les activités des réactifs si le numérateur est nul.",
      technique: "Qr = Π(produits)/Π(réactifs). Si [produit] = 0 → Qr = 0 < K → sens direct automatiquement.",
      bacLink: "Ch.2 — Calcul du quotient de réaction"
    })
  },
  {
    id: 'ch2_q5', type: 5, chapter: 2,
    question: "PIÈGE : Dans une pile électrochimique, l'anode est la borne _____ et il s'y produit une _____ .",
    options: [
      "positive / réduction",
      "négative / oxydation",
      "positive / oxydation",
      "négative / réduction"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Anode = borne négative / oxydation",
      explanation: "Dans une PILE (fonctionnement spontané) : Anode = oxydation = borne −. Cathode = réduction = borne +. Dans une électrolyse, c'est INVERSÉ pour les polarités.",
      memo: "Pile : Anode − / Oxydation | Cathode + / Réduction (mémo: OxA RedC)",
      trap: "En électrolyse, l'anode est la borne POSITIVE du générateur. Le mot 'anode' garde le même sens (oxydation) mais la polarité change !",
      technique: "Retenir : AnOde = Oxydation (lettres communes). CathOde = réduCtiOn.",
      bacLink: "Ch.2 — Pile électrochimique, polarités"
    })
  },
  {
    id: 'ch2_q6', type: 11, chapter: 2,
    question: "Sur un graphe d'avancement x(t) pour une réaction d'équilibre, qu'observe-t-on à t → ∞ ?",
    graphData: {
      type: 'equilibrium_advance',
      label: 'avancement x',
      xLabel: 'temps (s)',
      yLabel: 'x (mol)'
    },
    options: [
      "x continue d'augmenter indéfiniment",
      "x atteint un palier x_eq < x_max",
      "x atteint exactement x_max",
      "x oscille autour de x_eq"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "x atteint un palier x_eq < x_max → état d'équilibre dynamique",
      explanation: "Pour une réaction d'équilibre (K < ∞), l'avancement se stabilise avant que le réactif limitant soit totalement consommé. Le palier correspond à l'état d'équilibre.",
      memo: "Palier = équilibre. Palier = x_max → totale.",
      trap: "Un palier à x_max indiquerait une réaction totale (K très grand). Un palier avant x_max = équilibre.",
      technique: "Lire x_eq sur le palier, calculer τ = x_eq/x_max",
      bacLink: "Ch.2 — Réaction d'équilibre vs totale"
    })
  },
  {
    id: 'ch2_q7', type: 12, chapter: 2,
    question: "MONTRER QUE : Pour la pile Daniell (Zn/Zn²⁺ // Cu²⁺/Cu), écrire les demi-équations et la réaction globale.",
    options: null,
    isOpen: true,
    correction: buildCorrection({
      answer: "Anode: Zn → Zn²⁺ + 2e⁻ (oxydation) | Cathode: Cu²⁺ + 2e⁻ → Cu (réduction) | Bilan: Zn + Cu²⁺ → Zn²⁺ + Cu",
      explanation: "L'anode s'oxyde (perd des électrons) et la cathode se réduit (gagne des électrons). Le nombre d'électrons échangés doit être identique dans les deux demi-équations.",
      memo: "Zn se dissout (anode −), Cu se dépose (cathode +)",
      trap: "Ne pas mettre les électrons dans la réaction globale — ils se compensent.",
      technique: "1) Identifier anode (metal qui s'oxyde = moins noble) 2) Écrire les demi-équations 3) Ajuster les e⁻ 4) Additionner",
      bacLink: "Ch.2 — Pile Daniell, demi-équations"
    })
  },
  {
    id: 'ch2_q8', type: 4, chapter: 2,
    question: "Une pile débite I = 0,5 A pendant Δt = 2 h. Calculer la charge Q et l'avancement x_f si la réaction échange n(e⁻) = 2 électrons par avancement.",
    options: [
      "Q = 3600 C, x_f = Q/(n(e⁻)F) = 0,019 mol",
      "Q = 3600 C, x_f = 0,037 mol",
      "Q = 1800 C, x_f = 0,009 mol",
      "Q = 3600 C, x_f = 3600/2 = 1800 mol"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "Q = I×Δt = 0,5 × 7200 = 3600 C. x_f = Q/(n(e⁻)×F) = 3600/(2×96500) ≈ 0,0187 mol",
      explanation: "Δt = 2h = 7200s. Q = I×Δt = 3600 C. Puis x_f = Q/(n(e⁻)×F) avec F = 96500 C/mol.",
      memo: "Q = IΔt → x_f = Q/(n(e⁻)F). Toujours convertir t en secondes !",
      trap: "2h = 7200s et non 120s. L'oubli de conversion heures→secondes est une erreur classique.",
      technique: "Q = 0,5 × 2 × 3600 = 3600 C → x_f = 3600/(2 × 96500) = 0,01866 mol",
      bacLink: "Ch.2 — Capacité d'une pile, Faraday"
    })
  },
  {
    id: 'ch2_q9', type: 9, chapter: 2,
    question: "Un élève calcule Qr = [C]²/([A][B]) pour A + B ⇌ 2C. Il obtient Qr = 0,25 et conclut 'la réaction n'a pas lieu car Qr < 1'. Identifier l'erreur.",
    options: [
      "Le calcul de Qr est faux",
      "La conclusion est fausse : Qr < K → réaction dans le sens direct",
      "Il faut comparer Qr à 0,5 pas à 1",
      "La formule de Qr est incorrecte, il manque les exposants"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "L'erreur est dans la conclusion : Qr doit être comparé à K(T), pas à 1. Qr < K → sens direct.",
      explanation: "Qr = 0,25 ne dit rien sans connaître K. Si K = 10, alors Qr << K → réaction rapide dans le sens direct. Si K = 0,1, alors Qr > K → sens indirect.",
      memo: "Comparer toujours Qr à K(T), JAMAIS à 1.",
      trap: "K = 1 est une valeur parmi d'autres, pas une référence absolue.",
      technique: "Étape 1 : calculer Qr,i. Étape 2 : lire K(T) dans l'énoncé. Étape 3 : comparer.",
      bacLink: "Ch.2 — Critère d'évolution"
    })
  },
  {
    id: 'ch2_q10', type: 20, chapter: 2,
    question: "SYNTHÈSE : Expliquer le lien entre Qr, K(T), le taux d'avancement et le sens d'évolution.",
    options: null,
    isOpen: true,
    correction: buildCorrection({
      answer: "Qr compare l'état actuel du système à l'état d'équilibre. Si Qr < K → manque de produits → sens direct → τ augmente vers τ_eq. Si Qr = K → équilibre → τ = τ_eq.",
      explanation: "Ces trois grandeurs sont liées : K fixe l'état d'équilibre, Qr mesure l'écart à l'équilibre, τ quantifie l'avancement. Le système évolue toujours pour réduire l'écart Qr−K.",
      memo: "Qr → K : le système 'cherche' l'équilibre. τ mesure le chemin parcouru.",
      trap: "τ = 1 ne signifie pas Qr = K. τ = 1 signifie réaction totale (réactif limitant épuisé).",
      technique: "Construction tableau ICE : Initiale, Change, Équilibre → trouver x_eq → τ = x_eq/x_max",
      bacLink: "Ch.2 — Synthèse évolution spontanée"
    })
  },
  {
    id: 'ch2_q11', type: 14, chapter: 2,
    question: "UNITÉS : L'activité d'un soluté [A] = 0,5 mol/L est :",
    options: [
      "a(A) = 0,5 (sans unité)",
      "a(A) = 0,5 mol/L",
      "a(A) = 0,5 × C₀ = 0,5 L/mol",
      "a(A) = 0,5 M"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "a(A) = [A]/C₀ = 0,5/1 = 0,5 (sans unité)",
      explanation: "L'activité est adimensionnelle. a(soluté) = [A]/C₀ avec C₀ = 1 mol/L. Pour un solide ou solvant pur : a = 1.",
      memo: "Activité = sans unité. a = [A]/C₀ où C₀ = 1 mol·L⁻¹",
      trap: "Qr est SANS unité grâce aux activités adimensionnelles.",
      technique: "Qr = Π des activités → sans unité car a(i) = [i]/C₀ ou P(i)/P₀",
      bacLink: "Ch.2 — Activité chimique"
    })
  },
  {
    id: 'ch2_q12', type: 18, chapter: 2,
    question: "CONTEXTE INÉDIT : Le sang humain maintient un pH ≈ 7,4 grâce à l'équilibre CO₂/HCO₃⁻. Si on hyperventile (CO₂ diminue dans le sang), dans quel sens évolue l'équilibre CO₂ + H₂O ⇌ H⁺ + HCO₃⁻ ?",
    options: [
      "Sens direct → plus de H⁺ → pH diminue (acidose)",
      "Sens indirect ← moins de H⁺ → pH augmente (alcalose)",
      "Équilibre non perturbé",
      "Sens direct → pH augmente"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Si [CO₂] diminue → Qr augmente (numérateur inchangé, dénominateur diminue) → Qr > K → sens indirect → [H⁺] diminue → pH augmente → alcalose respiratoire.",
      explanation: "C'est une application du critère d'évolution dans un contexte biologique. Diminuer un réactif fait augmenter Qr (car il est au dénominateur) → sens indirect.",
      memo: "Réactif diminue → Qr ↑ → si Qr > K → sens indirect → compense la perte",
      trap: "Ne pas penser 'moins de CO₂ = moins de H⁺ directement'. Passer par Qr vs K.",
      technique: "Calculer : si [CO₂]↓ → Qr = [H⁺][HCO₃⁻]/[CO₂] ↑ → Qr > K → sens ← ",
      bacLink: "Ch.2 — Évolution spontanée, Le Chatelier"
    })
  },
  {
    id: 'ch2_q13', type: 1, chapter: 2,
    question: "La constante d'équilibre K(T) = 10⁻⁸. On peut conclure que :",
    options: [
      "La réaction est totale dans le sens direct",
      "La réaction est totale dans le sens indirect",
      "La réaction est très peu avancée (τ ≈ 0) dans le sens direct",
      "La réaction n'évolue pas"
    ],
    correctIndex: 2,
    correction: buildCorrection({
      answer: "K très petit → τ très faible dans le sens direct → la réaction ne produit quasiment rien.",
      explanation: "Règle : K > 10⁴ → quasi-totale (sens direct). K < 10⁻⁴ → quasi-totale (sens indirect). 10⁻⁸ << 10⁻⁴ → équilibre très déplacé vers les réactifs → τ ≈ 0.",
      memo: "K >> 1 → totale directe. K << 1 → totale inverse. K ≈ 1 → équilibre notable.",
      trap: "K = 10⁻⁸ ne signifie pas 'pas de réaction' mais 'très peu de produits à l'équilibre'.",
      technique: "Seuils : K > 10⁴ → totale directe | 10⁻⁴ < K < 10⁴ → équilibre | K < 10⁻⁴ → totale inverse",
      bacLink: "Ch.2 — Interprétation de K(T)"
    })
  },
  {
    id: 'ch2_q14', type: 3, chapter: 2,
    question: "Qu'est-ce qu'un pont salin dans une pile ? Quel est son rôle ?",
    options: null,
    isOpen: true,
    correction: buildCorrection({
      answer: "Un pont salin est un dispositif contenant une solution d'électrolytes (ex: KNO₃) qui relie les deux demi-cellules d'une pile. Son rôle est d'assurer la neutralité électrique des solutions en permettant la migration des ions.",
      explanation: "Sans pont salin, les charges s'accumulent dans les demi-cellules (excès de cations à l'anode, excès d'anions à la cathode) → la réaction s'arrête. Le pont compense ces déséquilibres.",
      memo: "Pont salin = autoroute à ions pour compenser les charges",
      trap: "Le pont salin NE conduit PAS l'électricité comme un fil. Il laisse passer les IONS pas les électrons.",
      technique: "Les électrons circulent dans le fil. Les ions migrent dans le pont salin. Ce sont deux circuits distincts.",
      bacLink: "Ch.2 — Pont salin, pile électrochimique"
    })
  },
  {
    id: 'ch2_q15', type: 13, chapter: 2,
    question: "Sur un schéma de pile électrochimique, légender : anode, cathode, sens des électrons, sens du courant conventionnel, pont salin.",
    schemaPrompt: 'pile_daniell',
    options: [
      "Electrons : anode → cathode dans le fil | Courant : cathode → anode dans le fil",
      "Electrons : cathode → anode | Courant : anode → cathode",
      "Electrons et courant dans le même sens",
      "Electrons : anode → cathode | Courant : anode → cathode dans le fil"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "Électrons : anode (−) → cathode (+) dans le fil extérieur. Courant conventionnel : cathode (+) → anode (−).",
      explanation: "Les électrons sont libérés par oxydation à l'anode et consommés par réduction à la cathode. Le courant conventionnel est opposé au sens des électrons.",
      memo: "e⁻ : anode → cathode. I : cathode → anode (sens opposé aux e⁻)",
      trap: "Courant conventionnel = sens OPPOSÉ aux électrons. Ne pas confondre !",
      technique: "Règle : e⁻ vont de − vers + (anode vers cathode). Courant I = de + vers − à l'extérieur.",
      bacLink: "Ch.2 — Sens des courants dans une pile"
    })
  },
  {
    id: 'ch2_q16', type: 8, chapter: 2,
    question: "Remettre dans l'ordre les étapes pour déterminer le sens d'évolution d'un système :",
    steps: [
      "A) Comparer Qr,i à K(T)",
      "B) Écrire l'expression de Qr",
      "C) Calculer Qr,i avec les concentrations initiales",
      "D) Conclure sur le sens (direct/indirect/équilibre)"
    ],
    correctOrder: "B → C → A → D",
    options: [
      "A → B → C → D",
      "B → C → A → D",
      "C → B → A → D",
      "D → A → B → C"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "B → C → A → D : Écrire Qr → Calculer Qr,i → Comparer à K → Conclure",
      explanation: "Méthode rigoureuse : 1) écrire l'expression générale de Qr 2) numériser avec les valeurs initiales 3) comparer à K(T) 4) conclure.",
      memo: "Expression → Calcul → Comparaison → Conclusion",
      trap: "Ne pas sauter l'étape 'écrire Qr' : elle permet de vérifier qu'on utilise les bons exposants stœchiométriques.",
      technique: "Qr = Π(a_produits)^ν / Π(a_réactifs)^ν",
      bacLink: "Ch.2 — Méthode d'analyse du sens d'évolution"
    })
  },
  {
    id: 'ch2_q17', type: 21, chapter: 2,
    question: "On calcule τ = 0,03 pour une réaction à l'équilibre. Que peut-on conclure ?",
    options: [
      "La réaction n'a pratiquement pas eu lieu (3% d'avancement) → réaction quasi-inexistante",
      "La réaction est totale à 97%",
      "τ = 0,03 est impossible car τ doit être > 0,5",
      "La réaction a eu lieu à 30%"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "τ = 0,03 = 3% : seulement 3% du réactif limitant est consommé à l'équilibre → réaction très peu avancée, K(T) est très petit.",
      explanation: "τ = x_f/x_max = 0,03 signifie que l'avancement final est seulement 3% de l'avancement maximum possible. Le système est très proche de l'état initial.",
      memo: "τ petit → réaction peu avancée → K petit",
      trap: "τ = 0,03 n'est pas une erreur. On peut avoir des valeurs de τ très proches de 0.",
      technique: "τ → 0 : réaction quasi-nulle (K << 1). τ → 1 : réaction quasi-totale (K >> 1).",
      bacLink: "Ch.2 — Interprétation du taux d'avancement"
    })
  },
  {
    id: 'ch2_q18', type: 19, chapter: 2,
    question: "QUALITATIF : Si on dilue les deux demi-cellules d'une pile (concentrations divisées par 2), la pile s'arrête-t-elle ?",
    options: [
      "Oui, la pile ne peut plus fonctionner",
      "Non, la pile continue mais avec une force électromotrice légèrement modifiée",
      "Non, la pile fonctionne exactement pareil",
      "Oui mais seulement si K < 1"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Non — la pile continue de fonctionner. La dilution modifie Qr, donc la fem, mais pas le principe de fonctionnement.",
      explanation: "La pile fonctionne tant que Qr ≠ K. La dilution modifie les concentrations donc Qr mais ne stoppe pas la réaction. La force électromotrice (fem) diminue légèrement.",
      memo: "Pile s'arrête uniquement quand Qr → K (équilibre atteint)",
      trap: "La pile s'arrête quand l'équilibre est atteint, pas quand on dilue.",
      technique: "Raisonner sur Qr : dilution → Qr change → le système se réajuste",
      bacLink: "Ch.2 — Fonctionnement d'une pile"
    })
  },
  {
    id: 'ch2_q19', type: 15, chapter: 2,
    question: "Pour savoir si une réaction est totale, quelle méthode est la plus rigoureuse ?",
    options: [
      "Vérifier que l'équation est écrite avec une flèche simple →",
      "Calculer K et vérifier K > 10⁴ (ou K < 10⁻⁴)",
      "Goûter le produit pour vérifier qu'il y a bien eu réaction",
      "Attendre 5 minutes et observer"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Calculer K(T) : si K > 10⁴ → totale sens direct. Si K < 10⁻⁴ → totale sens inverse.",
      explanation: "La notation (→) vs (⇌) est une convention pédagogique, pas une preuve. La seule méthode rigoureuse est de calculer K ou τ.",
      memo: "Critère quantitatif : K > 10⁴ → totale. Règle des 10 puissances 4.",
      trap: "Une réaction notée → n'est pas forcément totale à 100%. C'est une approximation.",
      technique: "Dans un exercice : chercher K ou calculer τ. τ > 0,99 → quasi-totale.",
      bacLink: "Ch.2 — Réaction totale vs équilibre"
    })
  },
  {
    id: 'ch2_q20', type: 6, chapter: 2,
    question: "L'expression du quotient de réaction pour : aA + bB ⇌ cC + dD est :",
    options: [
      "Qr = (a×[A] + b×[B]) / (c×[C] + d×[D])",
      "Qr = [C]^c × [D]^d / ([A]^a × [B]^b) (en activités)",
      "Qr = [C][D] / [A][B]",
      "Qr = ([C]+[D]) / ([A]+[B])"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Qr = a(C)^c × a(D)^d / (a(A)^a × a(B)^b) avec a(X) = [X]/C₀",
      explanation: "Les exposants sont les COEFFICIENTS STŒCHIOMÉTRIQUES, pas les concentrations multipliées par les coefficients. Et on utilise des activités (sans unité).",
      memo: "Exposants = coefficients stœchio. OBLIGATOIRE.",
      trap: "Oublier les exposants est l'erreur la plus fréquente : Qr = [C][D]/[A][B] est faux pour aA + bB ⇌ cC + dD si a,b,c,d ≠ 1.",
      technique: "Lire l'équation : les coefficients devant les formules → exposants dans Qr.",
      bacLink: "Ch.2 — Expression du quotient de réaction"
    })
  },
  {
    id: 'ch2_q21', type: 7, chapter: 2,
    question: "BAC 2023 : Une pile Zn/Zn²⁺//Ag⁺/Ag débite I = 10 mA pendant 1000 s. La réaction Zn + 2Ag⁺ → Zn²⁺ + 2Ag échange 2 e⁻. Calculer x_f et la masse de Ag déposée.",
    options: [
      "Q=10 C, x_f=5,18×10⁻⁵ mol, m(Ag)=1,12×10⁻² g",
      "Q=10 C, x_f=1,04×10⁻⁴ mol, m(Ag)=2,24×10⁻² g",
      "Q=10 000 C, x_f=0,052 mol, m(Ag)=5,6 g",
      "Q=10 C, x_f=10/(96500) mol, m(Ag)=0,01 g"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "Q = 10×10⁻³ × 1000 = 10 C. x_f = Q/(n(e⁻)F) = 10/(2×96500) = 5,18×10⁻⁵ mol. n(Ag) = 2x_f = 1,04×10⁻⁴ mol. m(Ag) = 1,04×10⁻⁴ × 108 = 0,0112 g.",
      explanation: "Attention : I = 10 mA = 0,01 A. Q = 0,01×1000 = 10 C. n(Ag) = 2×x_f car 2 Ag par avancement.",
      memo: "mA → A : ÷1000. n(Ag) = 2×x_f (stœchiométrie 2)",
      trap: "Oublier le facteur 2 de la stœchiométrie pour Ag : 2 mol Ag par mol d'avancement.",
      technique: "Q → x_f = Q/(n(e⁻)F) → n(produit) = ν × x_f → m = n × M",
      bacLink: "Ch.2 — Bilan quantitatif d'une pile"
    })
  },
  {
    id: 'ch2_q22', type: 2, chapter: 2,
    question: "Vrai ou Faux : L'activité d'un solide pur vaut toujours 1.",
    options: ["Vrai", "Faux"],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "Vrai — par convention, a(solide pur) = 1 et a(solvant pur, eau) = 1.",
      explanation: "Les solides purs et les solvants en grande quantité ont une activité conventionnellement fixée à 1. Ils n'apparaissent donc pas dans Qr ou K.",
      memo: "Solide pur → a = 1 → absent de Qr",
      trap: "Un solide dissous ou en solution a une activité ≠ 1. Seul le solide PUR a a = 1.",
      technique: "Identifier l'état physique dans l'équation : (s) ou (l) pur → a = 1",
      bacLink: "Ch.2 — Activité des espèces pures"
    })
  },
  {
    id: 'ch2_q23', type: 1, chapter: 2,
    question: "Dans le circuit extérieur d'une pile, les porteurs de charge sont :",
    options: [
      "Des ions positifs (cations)",
      "Des ions négatifs (anions)",
      "Des électrons",
      "Des protons"
    ],
    correctIndex: 2,
    correction: buildCorrection({
      answer: "Des électrons — dans le fil métallique (circuit extérieur).",
      explanation: "Dans le fil (métal), ce sont les électrons libres qui se déplacent. Dans la solution et le pont salin, ce sont les ions. Ces deux circuits sont distincts mais complémentaires.",
      memo: "Fil = électrons. Solution = ions.",
      trap: "Dans l'électrolyte, le courant est assuré par les ions (Na⁺, Cl⁻...) — pas dans le fil !",
      technique: "Circuit extérieur (fil) = e⁻. Circuit intérieur (solution) = ions.",
      bacLink: "Ch.2 — Porteurs de charge"
    })
  },
  {
    id: 'ch2_q24', type: 17, chapter: 2,
    question: "CONDITION D'APPLICATION : Peut-on négliger l'activité de l'eau dans Qr pour une réaction en solution aqueuse diluée ?",
    options: [
      "Non, a(H₂O) doit toujours être calculée",
      "Oui, a(H₂O) ≈ 1 car c'est le solvant pur en grande quantité",
      "Non, a(H₂O) = [H₂O]/C₀ = 55,5",
      "Oui mais seulement si pH > 7"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "Oui — en solution diluée, l'eau est en très grande quantité → a(H₂O) ≈ 1 par convention.",
      explanation: "La concentration de l'eau pure est ≈ 55,5 mol/L, quasi-constante en solution diluée. On pose a(H₂O) = 1 par convention, comme pour un solvant pur.",
      memo: "Eau = solvant pur → a(H₂O) = 1 → absent de Qr",
      trap: "Cette approximation n'est valide qu'en solution DILUÉE. En solution concentrée ou en milieu non-aqueux, c'est différent.",
      technique: "Vérifier : [H₂O] >> [soluté] → approximation valide",
      bacLink: "Ch.2 — Activité de l'eau"
    })
  },
  {
    id: 'ch2_q25', type: 5, chapter: 2,
    question: "PIÈGE : K(T) et Qr ont la même expression. La seule différence est :",
    options: [
      "K est calculé avec des concentrations molaires, Qr avec des activités",
      "K est évalué à l'ÉQUILIBRE, Qr est évalué à n'importe quel état",
      "K est toujours plus grand que Qr",
      "K s'exprime en mol/L, Qr est sans unité"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "K = Qr évalué à l'état d'équilibre. Qr peut être calculé à tout instant.",
      explanation: "K et Qr ont la même formule mathématique. La différence est l'état auquel on calcule : Qr à l'état initial (ou tout instant), K à l'état d'équilibre.",
      memo: "K = Qr à l'équilibre. Même formule, état différent.",
      trap: "K n'est pas 'plus grand' que Qr en général. Qr peut être > K ou < K selon l'état du système.",
      technique: "K = Qr,eq — c'est la définition même de K",
      bacLink: "Ch.2 — Relation K et Qr"
    })
  },
  {
    id: 'ch2_q26', type: 4, chapter: 2,
    question: "Pour A + B ⇌ C avec K = 100, [A]₀ = [B]₀ = 1 mol/L, [C]₀ = 0. Calculer Qr,i et déterminer le sens d'évolution.",
    options: [
      "Qr,i = 0 < K = 100 → sens direct",
      "Qr,i = 100 = K → équilibre",
      "Qr,i = 1 > K=100 → sens indirect",
      "Qr,i = 0,01 < K → sens direct"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "Qr,i = [C]₀/([A]₀[B]₀) = 0/(1×1) = 0 < K=100 → sens direct.",
      explanation: "Puisque [C]₀ = 0, le numérateur est 0 → Qr,i = 0. Comme 0 < 100 = K → évolution dans le sens direct.",
      memo: "[produit] = 0 initialement → Qr,i = 0 → sens direct automatique",
      trap: "Inutile de calculer le dénominateur si le numérateur est nul.",
      technique: "Règle rapide : pas de produit initialement → toujours sens direct",
      bacLink: "Ch.2 — Calcul Qr et sens d'évolution"
    })
  },
  {
    id: 'ch2_q27', type: 3, chapter: 2,
    question: "Expliquer le fonctionnement d'un accumulateur (pile rechargeable).",
    options: null,
    isOpen: true,
    correction: buildCorrection({
      answer: "Un accumulateur fonctionne comme une pile (générateur, réaction spontanée) lors de la décharge, et comme un électrolyseur (récepteur, réaction forcée) lors de la charge. La réaction redox est réversible.",
      explanation: "Mode générateur : réaction spontanée libère de l'énergie électrique. Mode récepteur (charge) : on force la réaction inverse grâce à un apport d'énergie électrique.",
      memo: "Accumulateur = pile (décharge) + électrolyseur (charge)",
      trap: "Un accumulateur ne stocke pas d'électricité directement mais de l'énergie chimique.",
      technique: "Décharge : Qr diminue vers K. Charge : Qr augmente au-delà de K (forcé par le générateur).",
      bacLink: "Ch.9 — Accumulateur, double fonctionnement"
    })
  },
  {
    id: 'ch2_q28', type: 10, chapter: 2,
    question: "Associer : Anode (pile) / Cathode (pile) / Anode (électrolyse) / Cathode (électrolyse)",
    options: [
      "Pile: Anode=oxydation/borne− | Cathode=réduction/borne+ | Électrolyse: Anode=oxydation/borne+ | Cathode=réduction/borne−",
      "Pile: Anode=réduction/borne+ | Cathode=oxydation/borne− | Électrolyse: inverse",
      "Anode=réduction partout. Cathode=oxydation partout",
      "Pile et électrolyse ont les mêmes polarités"
    ],
    correctIndex: 0,
    correction: buildCorrection({
      answer: "Pile: Anode(−)=oxydation / Cathode(+)=réduction | Électrolyse: Anode(+)=oxydation / Cathode(−)=réduction",
      explanation: "Le processus chimique reste le même (anode=oxydation, cathode=réduction) MAIS les polarités s'inversent entre pile et électrolyse.",
      memo: "Anode = TOUJOURS oxydation. Cathode = TOUJOURS réduction. Les polarités +/− changent.",
      trap: "La confusion pile/électrolyse sur les polarités est UN DES pièges les plus fréquents du Bac.",
      technique: "Mémo : Pile = spontanée (énergie libérée). Électrolyse = forcée (énergie reçue). Polarités inversées.",
      bacLink: "Ch.2 et Ch.9 — Pile vs Électrolyse"
    })
  },
  {
    id: 'ch2_q29', type: 21, chapter: 2,
    question: "Après calcul, on trouve K(T) = 2,5×10² à 25°C. Comment interpréter cette valeur ?",
    options: [
      "Réaction totale dans le sens direct (K > 10⁴ ✓)",
      "Réaction d'équilibre notable : les deux sens coexistent. Les produits sont majoritaires à l'équilibre.",
      "Réaction totale dans le sens inverse",
      "Réaction impossible car K devrait être entier"
    ],
    correctIndex: 1,
    correction: buildCorrection({
      answer: "K = 250 : ni totale directe (K < 10⁴), ni totale inverse (K > 10⁻⁴). Les produits dominent mais les réactifs existent à l'équilibre.",
      explanation: "Règle des seuils : K > 10⁴ → totale directe | 10⁻⁴ < K < 10⁴ → équilibre → 10⁻⁴ ← totale inverse. Ici K = 250 → zone d'équilibre, produits majoritaires.",
      memo: "K=250 : équilibre. Produits > réactifs mais les deux coexistent.",
      trap: "K = 250 n'est pas 'assez grand' pour être total. Le seuil est 10⁴ = 10 000.",
      technique: "Ordre de grandeur : log(K) = log(250) ≈ 2,4. Seuils : log(K) > 4 ou < −4.",
      bacLink: "Ch.2 — Interprétation de K"
    })
  },
  {
    id: 'ch2_q30', type: 7, chapter: 2,
    question: "BAC 2025 TYPE : Une pile Cu/Cu²⁺//Fe³⁺/Fe²⁺ a K = 3,5×10¹². Décrire qualitativement ce qui se passe à l'anode et à la cathode, et justifier que c'est une pile (pas un électrolyseur).",
    options: null,
    isOpen: true,
    correction: buildCorrection({
      answer: "K = 3,5×10¹² >> 10⁴ → réaction totale spontanée dans le sens direct. Anode (Cu, borne −) : oxydation Cu → Cu²⁺ + 2e⁻. Cathode (borne +) : réduction Fe³⁺ + e⁻ → Fe²⁺. C'est une pile car la réaction est spontanée (évolue spontanément vers l'équilibre).",
      explanation: "Une pile = réaction spontanée = énergie chimique → électrique. K >> 1 confirme que la réaction directe est spontanée. Si K << 1, ce serait le sens inverse qui serait spontané.",
      memo: "K >> 10⁴ → pile spontanée. K << 10⁻⁴ → pile dans l'autre sens.",
      trap: "Anode = oxydation = borne − en pile. Ne pas inverser !",
      technique: "1) K >> 1 → spontané → pile. 2) Identifier oxydation/réduction. 3) Nommer anode/cathode et polarités.",
      bacLink: "Ch.2 — Pile électrochimique complète"
    })
  },
];