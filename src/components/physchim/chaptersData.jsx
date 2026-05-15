export const chapters = [
  {
    id: 1,
    title: "Cinétique chimique",
    icon: "⏱️",
    color: "#38bdf8",
    definition: "La cinétique chimique étudie la vitesse des transformations chimiques et les facteurs qui l'influencent. Une transformation est dite lente si on peut mesurer l'évolution des quantités de matière au cours du temps, rapide (quasi-instantanée) sinon.",
    formulas: [
      { name: "Vitesse volumique d'apparition d'un produit", expr: "$v_P(t) = \\dfrac{d[P]}{dt}$", desc: "en mol·L⁻¹·s⁻¹" },
      { name: "Vitesse volumique moyenne d'apparition", expr: "$\\bar{v}_P = \\dfrac{[P](t_2)-[P](t_1)}{t_2 - t_1}$", desc: "" },
      { name: "Vitesse volumique de disparition d'un réactif", expr: "$v_R(t) = -\\dfrac{d[R]}{dt}$", desc: "Signe – car [R] décroît" },
      { name: "Réaction d'ordre 1 — équation différentielle", expr: "$-\\dfrac{d[A]}{dt} = k[A](t)$", desc: "$k$ en s⁻¹" },
      { name: "Loi d'évolution ordre 1", expr: "$[A](t) = [A]_0\\,e^{-kt}$", desc: "Solution de l'EDO" },
      { name: "Identification graphique ordre 1", expr: "$\\ln([A](t)) = \\ln([A]_0) - kt$", desc: "Droite de pente $-k$" },
    ],
    demonstrations: [
      "La vitesse est la dérivée de la concentration : $v_P = d[P]/dt$ (tangente à la courbe).",
      "Ordre 1 : $d[A]/dt + k[A] = 0$ → solution $[A](t)=[A]_0 e^{-kt}$.",
      "Si $\\ln([A])$ en fonction de $t$ est une droite de pente $-k$ → réaction d'ordre 1.",
      "Le temps de demi-réaction $t_{1/2}$ se lit graphiquement : abscisse pour laquelle $[R] = [R]_0/2$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Facteurs cinétiques et leurs effets',
        headers: ['Facteur cinétique', 'Action', 'Mécanisme'],
        rows: [
          ['Température ↑', 'Accélère la réaction', 'Augmente l\'agitation moléculaire → plus de chocs efficaces'],
          ['Concentration des réactifs ↑', 'Accélère la réaction', 'Augmente la probabilité de rencontre entre réactifs'],
          ['Catalyseur', 'Accélère sans figurer dans le bilan', 'Fournit un chemin réactionnel d\'énergie d\'activation plus basse'],
        ],
      },
      {
        type: 'table',
        caption: 'Catalyse homogène vs hétérogène',
        headers: ['Type de catalyse', 'Définition', 'Exemple'],
        rows: [
          ['Homogène', 'Catalyseur et réactifs dans le même état physique', 'Ions H⁺ en solution aqueuse'],
          ['Hétérogène', 'Catalyseur et réactifs dans des états différents', 'Pt solide + réactifs gazeux'],
        ],
      },
    ],
    tips: [
      "La pente de la tangente en $t=0$ donne la vitesse initiale (maximale).",
      "Pour vérifier l'ordre 1 : tracer $\\ln([A])$ vs $t$ — si c'est une droite, ordre 1 confirmé.",
      "Un catalyseur n'apparaît pas dans l'équation bilan. Il est ni réactif ni produit.",
    ],
    remember: [
      "$v_P = d[P]/dt > 0$ et $v_R = -d[R]/dt > 0$ : les vitesses sont toujours positives.",
      "Ordre 1 : $[A](t) = [A]_0 e^{-kt}$, pente de $\\ln([A])$ vs $t$ vaut $-k$.",
      "$t_{1/2}$ : temps pour lequel la moitié du réactif limitant est consommée.",
    ],
    extras: [],
  },
  {
    id: 2,
    title: "Évolution spontanée d'un système chimique",
    icon: "⚖️",
    color: "#a78bfa",
    definition: "Une réaction totale consomme entièrement au moins un réactif. Une réaction non totale (équilibrée) atteint un état d'équilibre dynamique où réactifs et produits coexistent. Le sens d'évolution est prédit par comparaison du quotient de réaction Qr à la constante d'équilibre K(T).",
    formulas: [
      { name: "Taux d'avancement", expr: "$\\tau = \\dfrac{x_f}{x_{\\max}}$", desc: "$0 < \\tau \\leq 1$; $\\tau=1$ si totale" },
      { name: "Activité d'un soluté", expr: "$a(A) = \\dfrac{[A]}{C_0}$", desc: "$C_0 = 1$ mol·L⁻¹; solide ou solvant : $a=1$" },
      { name: "Quotient de réaction", expr: "$Q_r = \\dfrac{\\prod a(\\text{produits})^{\\nu}}{\\prod a(\\text{réactifs})^{\\nu}}$", desc: "Sans unité" },
      { name: "Constante d'équilibre", expr: "$Q_{r,\\text{éq}} = K(T)$", desc: "Ne dépend que de $T$" },
      { name: "Capacité d'une pile", expr: "$Q = I \\cdot \\Delta t = n(e^-)\\, x_f\\, F$", desc: "$F = 96500$ C·mol⁻¹" },
    ],
    demonstrations: [
      "Si $Q_r < K(T)$ → évolution dans le sens direct (→ produits) jusqu'à l'équilibre.",
      "Si $Q_r > K(T)$ → évolution dans le sens indirect (← réactifs) jusqu'à l'équilibre.",
      "Si $Q_r = K(T)$ → équilibre atteint, la réaction n'évolue plus.",
      "Pile Daniell : anode (oxydation) = borne −, cathode (réduction) = borne +.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Critère d\'évolution spontanée',
        chart: `graph LR
    A["Qr calculé\nà l'état initial"] --> B{"Comparer\nQr et K(T)"}
    B -->|"Qr < K(T)"| C["Sens direct →\nFormation des produits"]
    B -->|"Qr = K(T)"| D["Équilibre atteint\nPas d'évolution"]
    B -->|"Qr > K(T)"| E["Sens indirect ←\nFormation des réactifs"]
    style C fill:#1a3a2a,stroke:#34d399,color:#34d399
    style D fill:#1e293b,stroke:#fbbf24,color:#fbbf24
    style E fill:#3a1a1a,stroke:#f87171,color:#f87171`,
      },
      {
        type: 'mermaid',
        caption: 'Fonctionnement d\'une pile électrochimique (Pile Daniell)',
        chart: `graph LR
    A["Anode Zn\n(oxydation)\nborne −"] -->|"e⁻ dans le fil"| B["Cathode Cu\n(réduction)\nborne +"]
    A -->|"Zn → Zn²⁺ + 2e⁻"| A
    B -->|"Cu²⁺ + 2e⁻ → Cu"| B
    C["Pont salin\n(ions K⁺ / NO₃⁻)"] -.->|"neutralité électrique"| A
    C -.-> B
    style A fill:#1e3a5f,stroke:#38bdf8,color:#e2e8f0
    style B fill:#1a3a2a,stroke:#34d399,color:#e2e8f0
    style C fill:#1e293b,stroke:#a78bfa,color:#a78bfa`,
      },
    ],
    tips: [
      "Si $K(T) > 10^4$ : réaction totale dans le sens direct. Si $K < 10^{-4}$ : totale dans le sens indirect.",
      "Le pont salin assure la neutralité électrique des solutions (ions spectateurs).",
      "La capacité $Q = I \\cdot \\Delta t = n(e^-)\\,x_f\\,F$ : ne pas oublier $n(e^-)$ de l'équation redox.",
    ],
    remember: [
      "Critère : $Q_r < K$ → sens direct ; $Q_r > K$ → sens indirect ; $Q_r = K$ → équilibre.",
      "Anode = oxydation = borne − de la pile. Cathode = réduction = borne +.",
      "Taux d'avancement $\\tau = x_f/x_{\\max}$ ; $\\tau = 1$ si totale.",
    ],
    extras: [],
  },
  {
    id: 3,
    title: "Réactions acido-basiques",
    icon: "🧪",
    color: "#34d399",
    definition: "Au sens de Brønsted, un acide est un donneur de proton H⁺, une base est un accepteur de H⁺. Les réactions acido-basiques sont des transferts de proton entre l'acide d'un couple et la base d'un autre couple.",
    formulas: [
      { name: "pH d'une solution aqueuse", expr: "$\\text{pH} = -\\log\\left(\\dfrac{[\\text{H}_3\\text{O}^+]}{C_0}\\right)$", desc: "$[\\text{H}_3\\text{O}^+] = C_0 \\cdot 10^{-\\text{pH}}$" },
      { name: "Demi-équation acide-base", expr: "$\\text{AH} \\rightleftharpoons \\text{A}^- + \\text{H}^+$", desc: "Couple AH/A⁻" },
      { name: "Autoprotolyse de l'eau", expr: "$2\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{HO}^-$", desc: "" },
      { name: "Réaction acido-basique générale", expr: "$\\text{A}_1\\text{H} + \\text{A}_2^- \\rightleftharpoons \\text{A}_1^- + \\text{A}_2\\text{H}$", desc: "" },
    ],
    demonstrations: [
      "Acide = liaison polarisée X–H (X plus électronégatif) → cède H⁺ facilement.",
      "Base = atome avec doublet non-liant (ex : N dans NH₃) → capte H⁺.",
      "L'eau est amphotère : couple H₃O⁺/H₂O et H₂O/HO⁻.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Échelle de pH dans l\'eau à 25°C',
        headers: ['pH', 'Nature de la solution', 'Comparaison des ions'],
        rows: [
          ['0 < pH < 7', 'Acide', '[H₃O⁺] > [HO⁻]'],
          ['pH = 7', 'Neutre', '[H₃O⁺] = [HO⁻]'],
          ['7 < pH < 14', 'Basique', '[H₃O⁺] < [HO⁻]'],
        ],
      },
      {
        type: 'table',
        caption: 'Espèces amphotères (ampholytes) importantes',
        headers: ['Espèce', 'Acide conjugué', 'Base conjuguée'],
        rows: [
          ['H₂O', 'H₃O⁺ (couple H₃O⁺/H₂O)', 'HO⁻ (couple H₂O/HO⁻)'],
          ['HCO₃⁻', 'H₂CO₃ (couple H₂CO₃/HCO₃⁻)', 'CO₃²⁻ (couple HCO₃⁻/CO₃²⁻)'],
        ],
      },
    ],
    tips: [
      "Un acide fort se dissocie TOTALEMENT : HCl → H₃O⁺ + Cl⁻ (les Cl⁻ sont spectateurs).",
      "Pour écrire une réaction acido-basique : l'acide d'un couple donne H⁺ à la base de l'autre.",
      "pH mesurable avec papier pH (approximatif) ou pH-mètre (précis).",
    ],
    remember: [
      "Acide (Brønsted) = donneur H⁺. Base = accepteur H⁺.",
      "$\\text{pH} = -\\log([\\text{H}_3\\text{O}^+]/C_0)$, soit $[\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}}$ mol·L⁻¹.",
      "H₂O est amphotère : couples H₃O⁺/H₂O et H₂O/HO⁻.",
    ],
    extras: [],
  },
  {
    id: 4,
    title: "Force des acides et des bases",
    icon: "📊",
    color: "#f472b6",
    definition: "La force d'un acide ou d'une base est caractérisée par sa constante d'acidité Ka (ou pKa). Un acide fort réagit totalement avec l'eau ; un acide faible réagit partiellement. Le diagramme de prédominance permet de visualiser les espèces majoritaires en fonction du pH.",
    formulas: [
      { name: "Constante d'acidité", expr: "$K_A = \\dfrac{[\\text{A}^-]_{eq}[\\text{H}_3\\text{O}^+]_{eq}}{[\\text{AH}]_{eq}\\,C_0}$", desc: "Pour AH + H₂O ⇌ A⁻ + H₃O⁺" },
      { name: "pKa", expr: "$pK_A = -\\log(K_A)$", desc: "$K_A = 10^{-pK_A}$" },
      { name: "Relation pH – pKa", expr: "$\\text{pH} = pK_A + \\log\\left(\\dfrac{[\\text{A}^-]_{eq}}{[\\text{AH}]_{eq}}\\right)$", desc: "Henderson-Hasselbalch" },
      { name: "Produit ionique de l'eau", expr: "$K_e = \\dfrac{[\\text{H}_3\\text{O}^+]_{eq}[\\text{HO}^-]_{eq}}{C_0^2}$", desc: "$pK_e = 14$ à 25°C" },
      { name: "pH acide fort (concentration $c$)", expr: "$\\text{pH} = -\\log(c/C_0)$", desc: "Dissociation totale" },
      { name: "pH acide faible", expr: "$[\\text{H}_3\\text{O}^+]_{eq} = \\sqrt{K_A \\cdot c}$", desc: "Approximation $[\\text{AH}]_{eq} \\approx c$" },
    ],
    demonstrations: [
      "Acide fort : dissociation totale → $[\\text{H}_3\\text{O}^+]_{eq} = c$ → $\\text{pH} = -\\log(c)$.",
      "Acide faible : $K_A = x^2/(c - x) \\approx x^2/c$ → $x = \\sqrt{K_A \\cdot c}$.",
      "Diagramme de prédominance : si $\\text{pH} < pK_A$ alors [AH] > [A⁻] ; si $\\text{pH} > pK_A$ alors [A⁻] > [AH].",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Diagramme de prédominance d\'un couple AH/A⁻',
        chart: `graph LR
    A["pH < pKA\n[AH] > [A⁻]\nForme acide prédomine"] -- "pH = pKA\n[AH] = [A⁻]" --> B["pH > pKA\n[A⁻] > [AH]\nForme basique prédomine"]
    style A fill:#3a1a1a,stroke:#f87171,color:#fca5a5
    style B fill:#1a3a2a,stroke:#34d399,color:#6ee7b7`,
      },
      {
        type: 'table',
        caption: 'Acide fort vs Acide faible',
        headers: ['Caractéristique', 'Acide fort', 'Acide faible'],
        rows: [
          ['Réaction avec l\'eau', 'Totale (→)', 'Équilibrée (⇌)'],
          ['[AH] à l\'état final', '0', 'c − [H₃O⁺]ₑq > 0'],
          ['Formule pH', 'pH = −log(c)', 'pH = −½log(Ka·c)'],
          ['Taux d\'avancement τ', '1 (100%)', '< 1'],
          ['pKa', '< 0 (très négatif)', '0 à 14'],
        ],
      },
    ],
    tips: [
      "Plus le $pK_A$ est faible, plus l'acide est FORT (et la base conjuguée est faible).",
      "Vérifier l'approximation $[\\text{AH}]_{eq} \\approx c$ : valide si taux d'avancement < 5%.",
      "À $\\text{pH} = pK_A$ : [AH] = [A⁻] → point de demi-neutralisation.",
    ],
    remember: [
      "$\\text{pH} = pK_A + \\log([\\text{A}^-]/[\\text{AH}])$ : formule de Henderson-Hasselbalch.",
      "Prédominance : $\\text{pH} < pK_A$ → AH prédomine ; $\\text{pH} > pK_A$ → A⁻ prédomine.",
      "$pK_e = 14$ à 25°C : $[\\text{H}_3\\text{O}^+][\\text{HO}^-] = 10^{-14}$ mol²·L⁻².",
    ],
    extras: [],
  },
  {
    id: 5,
    title: "Dosage par titrage",
    icon: "🔬",
    color: "#fbbf24",
    definition: "Le titrage permet de déterminer la concentration d'une espèce titrée en la faisant réagir avec une espèce titrante de concentration connue. La réaction doit être unique, totale et rapide. On suit l'évolution par conductimétrie ou pH-métrie.",
    formulas: [
      { name: "Relation à l'équivalence", expr: "$\\dfrac{n_A}{a} = \\dfrac{n_B}{b}$", desc: "$a, b$ : coefficients stœchiométriques" },
      { name: "Conductance", expr: "$G = \\dfrac{I}{U}$", desc: "En siemens (S), inverse de la résistance" },
      { name: "Conductivité", expr: "$\\sigma = G\\dfrac{l}{S}$", desc: "En S·m⁻¹" },
      { name: "Loi de Kohlrausch", expr: "$\\sigma = \\displaystyle\\sum_i \\lambda_i [X_i]$", desc: "$\\lambda_i$ : conductivité molaire ionique (S·m²·mol⁻¹)" },
    ],
    demonstrations: [
      "À l'équivalence : $n_A/a = n_B/b$ → $c_A V_A/a = c_B V_E/b$ → $c_A = b c_B V_E/(a V_A)$.",
      "Titrage conductimétrique : avant l'éq., la courbe suit une droite ; après l'éq., autre droite. Point d'intersection = équivalence.",
      "Titrage pH-métrique : courbe en S avec saut de pH à l'équivalence. Méthode des tangentes ou dérivée.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Protocole d\'un titrage',
        chart: `graph TD
    A["Préparer la burette\navec la solution titrante cB connue"] --> B["Verser un volume VA\nde solution titrée cA inconnue"]
    B --> C["Ajouter goutte à goutte\nen mesurant σ ou pH"]
    C --> D["Détecter l'équivalence\nVE versé"]
    D --> E["Calculer cA\ncA·VA/a = cB·VE/b"]
    style A fill:#1e293b,stroke:#fbbf24,color:#e2e8f0
    style D fill:#3a2a00,stroke:#fbbf24,color:#fbbf24
    style E fill:#1a3a2a,stroke:#34d399,color:#34d399`,
      },
      {
        type: 'table',
        caption: 'Conductivités molaires ioniques à 25°C (en mS·m²·mol⁻¹)',
        headers: ['Ion', 'λᵢ', 'Ion', 'λᵢ'],
        rows: [
          ['H₃O⁺', '35,0', 'HO⁻', '19,8'],
          ['K⁺', '7,4', 'Cl⁻', '7,6'],
          ['Na⁺', '5,0', 'CH₃COO⁻', '4,1'],
          ['NH₄⁺', '7,4', 'SO₄²⁻', '8,0'],
        ],
      },
      {
        type: 'table',
        caption: 'Comparaison titrage conductimétrique vs pH-métrique',
        headers: ['Critère', 'Conductimétrique', 'pH-métrique'],
        rows: [
          ['Grandeur mesurée', 'Conductivité σ (S·m⁻¹)', 'pH'],
          ['Allure courbe', '2 demi-droites (point V)', 'Courbe en S'],
          ['Détermination VE', 'Intersection des 2 droites', 'Méthode dérivée ou tangentes'],
          ['Applicable à', 'Toute réaction ionique', 'Réactions acido-basiques'],
        ],
      },
    ],
    tips: [
      "Réaction de titrage : UNIQUE, TOTALE (K grand), RAPIDE.",
      "Titrage conductimétrique : recaler les droites avant et après l'équivalence puis lire l'abscisse du point d'intersection.",
      "H₃O⁺ et HO⁻ ont les conductivités molaires les plus élevées → leur disparition/apparition change fortement la pente.",
    ],
    remember: [
      "Équivalence : $n_A/a = n_B/b$, i.e. les réactifs sont en proportions stœchiométriques.",
      "Loi de Kohlrausch : $\\sigma = \\sum_i \\lambda_i [X_i]$.",
      "Conductivité ≠ Conductance : $\\sigma = G \\cdot l/S$.",
    ],
    extras: [],
  },
  {
    id: 6,
    title: "Stratégie en synthèse organique",
    icon: "🧫",
    color: "#38bdf8",
    definition: "La synthèse organique traite des transformations faisant intervenir des molécules organiques. On cherche à optimiser la vitesse de réaction et le rendement, en choisissant judicieusement les conditions expérimentales.",
    formulas: [
      { name: "Rendement", expr: "$\\eta = \\dfrac{n_f}{n_{\\max}}$", desc: "$n_f$ obtenu, $n_{\\max}$ si réaction totale" },
      { name: "Formule topologique", expr: "C implicites aux intersections, H sur C implicites, autres atomes explicites", desc: "" },
    ],
    demonstrations: [
      "Rendement : $\\eta = m_{\\text{obtenu}}/(n_{\\text{théo}} \\times M_{\\text{produit}})$.",
      "Augmenter le rendement : mettre un réactif en excès OU éliminer un produit au fur et à mesure.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Stratégie d\'optimisation d\'une synthèse organique',
        chart: `graph TD
    A["Choisir la réaction\net les réactifs"] --> B["Optimiser la VITESSE\n(T°, concentration, catalyseur)"]
    A --> C["Optimiser le RENDEMENT\n(excès réactif, élimination produit)"]
    B --> D["Réaliser la synthèse\n(montage adapté)"]
    C --> D
    D --> E["Purifier le produit brut\n(distillation, recristallisation...)"]
    E --> F["Identifier et caractériser\n(CCM, IR, RMN)"]
    style A fill:#1e293b,stroke:#38bdf8,color:#e2e8f0
    style D fill:#1e3a5f,stroke:#38bdf8,color:#38bdf8
    style F fill:#1a3a2a,stroke:#34d399,color:#34d399`,
      },
      {
        type: 'table',
        caption: 'Principales familles fonctionnelles organiques',
        headers: ['Famille', 'Groupe fonctionnel', 'Exemple'],
        rows: [
          ['Alcool', '–OH', 'Éthanol CH₃CH₂OH'],
          ['Aldéhyde', '–CHO', 'Éthanal CH₃CHO'],
          ['Cétone', '>C=O', 'Propanone CH₃COCH₃'],
          ['Acide carboxylique', '–COOH', 'Acide éthanoïque CH₃COOH'],
          ['Ester', '–COO–', 'Éthanoate d\'éthyle'],
          ['Amine', '–NH₂', 'Méthylamine CH₃NH₂'],
          ['Amide', '–CONH₂', 'Éthanamide CH₃CONH₂'],
          ['Halogénoalcane', '–X (F,Cl,Br,I)', 'Chloroéthane CH₃CH₂Cl'],
        ],
      },
    ],
    tips: [
      "Mettre un réactif en excès déplace l'équilibre dans le sens direct → augmente le rendement.",
      "Éliminer un produit au fur et à mesure (ex : distiller l'eau formée) → augmente aussi le rendement.",
      "CCM : $R_f = d_{\\text{composé}}/d_{\\text{front}}$. Même $R_f$ = même composé.",
    ],
    remember: [
      "Rendement $\\eta = n_f/n_{\\max}$, toujours < 100% en pratique.",
      "Optimisation vitesse : température, concentration, catalyseur.",
      "Optimisation rendement : excès réactif ou élimination produit.",
    ],
    extras: [],
  },
  {
    id: 7,
    title: "Cinétique chimique (seconde partie)",
    icon: "🔗",
    color: "#a78bfa",
    definition: "Un mécanisme réactionnel décrit à l'échelle microscopique les actes élémentaires (chocs efficaces) constituant la transformation globale. Les intermédiaires réactionnels apparaissent et disparaissent au cours du mécanisme sans figurer dans l'équation bilan.",
    formulas: [
      { name: "Loi de vitesse générale", expr: "$v = k \\cdot [R_1]^{\\alpha_1} \\cdot [R_2]^{\\alpha_2} \\cdots$", desc: "$\\alpha_i$ : ordres partiels" },
      { name: "Flèche courbe", expr: "Site donneur (D) → Site accepteur (A)", desc: "Modélise le mouvement d'un doublet" },
    ],
    demonstrations: [
      "En additionnant tous les actes élémentaires, les intermédiaires réactionnels et le catalyseur se compensent → on obtient l'équation bilan.",
      "Catalyseur : apparaît comme réactif d'un AE, puis comme produit d'un autre (restitué).",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Structure d\'un mécanisme réactionnel',
        chart: `graph TD
    R["Réactifs"] -->|"Acte élémentaire 1\n(choc efficace)"| IR1["Intermédiaire\nréactionnel 1"]
    IR1 -->|"Acte élémentaire 2"| IR2["Intermédiaire\nréactionnel 2"]
    IR2 -->|"Acte élémentaire 3"| P["Produits"]
    Cat["Catalyseur\n(introduit au début)"] -->|"Consommé AE1"| IR1
    IR2 -->|"Restitué AE3"| Cat
    style R fill:#1e293b,stroke:#a78bfa,color:#e2e8f0
    style P fill:#1e293b,stroke:#34d399,color:#e2e8f0
    style Cat fill:#3a2a00,stroke:#fbbf24,color:#fbbf24
    style IR1 fill:#1e3a5f,stroke:#a78bfa,color:#a78bfa
    style IR2 fill:#1e3a5f,stroke:#a78bfa,color:#a78bfa`,
      },
      {
        type: 'table',
        caption: 'Sites donneurs et accepteurs',
        headers: ['Type de site', 'Définition', 'Exemples'],
        rows: [
          ['Donneur (D:)', 'Excédent électronique', 'Doublet non-liant, liaison π, charge négative, charge partielle δ⁻'],
          ['Accepteur (A)', 'Défaut électronique (lacune)', 'Charge positive, charge partielle δ⁺, liaison polarisée sur l\'atome δ⁺'],
        ],
      },
    ],
    tips: [
      "Flèche courbe : part du site riche en électrons (D), pointe vers le site pauvre (A).",
      "Un intermédiaire réactionnel (IR) est formé lors d'un AE puis consommé dans un AE suivant.",
      "Pour construire le bilan : sommer les AE. IR et catalyseur s'éliminent.",
    ],
    remember: [
      "Mécanisme = suite d'actes élémentaires (chocs efficaces).",
      "IR n'apparaissent pas dans l'équation bilan.",
      "Catalyseur : consommé puis restitué → absent du bilan.",
    ],
    extras: [],
  },
  {
    id: 8,
    title: "Radioactivité",
    icon: "☢️",
    color: "#f472b6",
    definition: "Un noyau radioactif est un isotope instable qui se désintègre spontanément en émettant des particules et de l'énergie. La loi de décroissance radioactive est une loi exponentielle décroissante caractérisée par la constante radioactive λ ou le temps de demi-vie t₁/₂.",
    formulas: [
      { name: "Activité", expr: "$A(t) = -\\dfrac{dN(t)}{dt} = \\lambda N(t)$", desc: "En becquerels (Bq = s⁻¹)" },
      { name: "Loi de décroissance radioactive", expr: "$N(t) = N_0\\,e^{-\\lambda t}$", desc: "$A(t) = A_0\\,e^{-\\lambda t}$" },
      { name: "Temps de demi-vie", expr: "$t_{1/2} = \\dfrac{\\ln 2}{\\lambda}$", desc: "$N(t_{1/2}) = N_0/2$" },
      { name: "Temps caractéristique", expr: "$\\tau = \\dfrac{1}{\\lambda} = \\dfrac{t_{1/2}}{\\ln 2}$", desc: "" },
      { name: "Conservation (désintégration)", expr: "$A = Z + N$, charge conservée", desc: "$A$ et $Z$ conservés" },
    ],
    demonstrations: [
      "EDO : $dN/dt = -\\lambda N(t)$ → solution $N(t) = N_0 e^{-\\lambda t}$.",
      "$t_{1/2}$ : $N_0 e^{-\\lambda t_{1/2}} = N_0/2$ → $e^{-\\lambda t_{1/2}} = 1/2$ → $t_{1/2} = \\ln 2 / \\lambda$.",
      "Datation C14 : taux de C14 constant dans les organismes vivants, décroît après la mort.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Types de désintégrations radioactives',
        headers: ['Type', 'Particule émise', 'Effet sur Z', 'Effet sur A', 'Exemple'],
        rows: [
          ['Radioactivité α', '⁴He (α)', 'Z → Z−2', 'A → A−4', '²¹⁰Po → ²⁰⁶Pb + ⁴He'],
          ['Radioactivité β⁻', 'e⁻ (β⁻)', 'Z → Z+1', 'A inchangé', '⁴⁰K → ⁴⁰Ca + e⁻'],
          ['Radioactivité β⁺', 'e⁺ (β⁺, positron)', 'Z → Z−1', 'A inchangé', '¹⁸F → ¹⁸O + e⁺'],
          ['Désexcitation γ', 'photon γ', 'inchangé', 'inchangé', 'Noyau fils excité → fondamental'],
        ],
      },
      {
        type: 'mermaid',
        caption: 'Datation au Carbone 14',
        chart: `graph LR
    A["Organisme vivant\ntaux ¹⁴C constant\n(échanges avec atm.)"] -->|"mort"| B["Taux ¹⁴C décroît\nN(t) = N₀ e^{−λt}"]
    B --> C["Mesure de l'activité A\n(ou taux ¹⁴C actuel)"]
    C --> D["Calcul de t\nt = −ln(A/A₀)/λ"]
    style A fill:#1a3a2a,stroke:#34d399,color:#e2e8f0
    style D fill:#3a2a00,stroke:#fbbf24,color:#fbbf24`,
      },
    ],
    tips: [
      "t₁/₂ du carbone 14 ≈ 5730 ans → utile pour datation 0–50 000 ans.",
      "Conservation : nombre de masse A et numéro atomique Z conservés dans toute désintégration.",
      "À $t = \\tau = 1/\\lambda$ : il reste $e^{-1} \\approx 37\\%$ des noyaux initiaux.",
    ],
    remember: [
      "$N(t) = N_0 e^{-\\lambda t}$ et $A(t) = A_0 e^{-\\lambda t}$.",
      "$t_{1/2} = \\ln 2 / \\lambda$ : temps pour que la moitié des noyaux se désintègre.",
      "Lois de conservation : A et Z conservés dans toute réaction nucléaire.",
    ],
    extras: [],
  },
  {
    id: 9,
    title: "Évolution forcée d'un système chimique",
    icon: "⚡",
    color: "#34d399",
    definition: "Une électrolyse force une réaction d'oxydoréduction dans le sens inverse de l'évolution spontanée, en apportant de l'énergie électrique via un générateur. Les rôles de l'anode et de la cathode sont inversés par rapport à une pile.",
    formulas: [
      { name: "Bilan quantitatif d'électrolyse", expr: "$Q = I \\cdot \\Delta t = n(e^-)\\, x_f\\, F$", desc: "$F = 96500$ C·mol⁻¹ (Faraday)" },
      { name: "Rendement cellule photovoltaïque", expr: "$\\eta = \\dfrac{P_{\\text{él}}}{P_l} = \\dfrac{P_{\\text{él}}}{\\varepsilon \\cdot S}$", desc: "$\\varepsilon$ : éclairement (W·m⁻²)" },
    ],
    demonstrations: [
      "Électrolyse de la pile Daniell inversée : en appliquant une tension extérieure, Cu se redépose sur la cathode et Zn se dissout à l'anode, mais maintenant c'est le générateur qui fournit les électrons.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Comparaison Pile vs Électrolyse',
        chart: `graph LR
    subgraph Pile["🔋 Pile (spontanée)"]
      P_A["Anode − (oxydation)"] -->|"e⁻ spontanés"| P_C["Cathode + (réduction)"]
    end
    subgraph Elec["⚡ Électrolyse (forcée)"]
      E_G["Générateur"] -->|"impose e⁻"| E_C["Cathode − (réduction)"]
      E_A["Anode + (oxydation)"] --> E_G
    end
    style P_A fill:#1e3a5f,stroke:#38bdf8,color:#e2e8f0
    style E_G fill:#3a2a00,stroke:#fbbf24,color:#fbbf24`,
      },
      {
        type: 'table',
        caption: 'Systèmes de stockage et conversion d\'énergie',
        headers: ['Système', 'Mode générateur', 'Mode récepteur', 'Exemple'],
        rows: [
          ['Accumulateur', 'Pile (énergie chim. → élec.)', 'Électrolyseur (élec. → chim.)', 'Batterie Li-ion, Pb'],
          ['Cellule photovoltaïque', 'Énergie lumineuse → élec.', '—', 'Panneau solaire'],
          ['DEL', '—', 'Énergie élec. → lumineuse', 'Ampoule LED'],
          ['Photosynthèse', '—', 'Lumière → glucose (stockage)', 'Plantes vertes'],
          ['Respiration', 'Glucose → énergie', '—', 'Êtres vivants'],
        ],
      },
    ],
    tips: [
      "Électrolyse : cathode = borne − du générateur (réduction), anode = borne + (oxydation).",
      "$Q = I \\cdot \\Delta t$ : vérifier que $\\Delta t$ est en secondes !",
      "$n(e^-)$ = nombre d'électrons échangés dans la demi-équation redox × avancement $x_f$.",
    ],
    remember: [
      "Électrolyse = transformation forcée (énergie fournie) ; sens inverse de la pile.",
      "$Q = I \\cdot \\Delta t = n(e^-) \\cdot x_f \\cdot F$, $F = 96500$ C·mol⁻¹.",
      "Accumulateur : pile rechargeable — générateur ou récepteur selon le mode.",
    ],
    extras: [],
  },
  {
    id: 10,
    title: "Cinématique du point",
    icon: "📍",
    color: "#38bdf8",
    definition: "La cinématique décrit le mouvement sans en chercher les causes. On étudie la position, la vitesse et l'accélération d'un point matériel dans un référentiel choisi, en utilisant les équations horaires et le repère de Frenet pour les mouvements circulaires.",
    formulas: [
      { name: "Vecteur position", expr: "$\\overrightarrow{OM}(t) = \\begin{pmatrix} x(t) \\\\ y(t) \\end{pmatrix}$", desc: "Équations horaires" },
      { name: "Vecteur vitesse", expr: "$\\vec{v}(t) = \\dfrac{d\\overrightarrow{OM}}{dt} = \\begin{pmatrix} \\dot{x}(t) \\\\ \\dot{y}(t) \\end{pmatrix}$", desc: "Tangent à la trajectoire" },
      { name: "Vecteur accélération", expr: "$\\vec{a}(t) = \\dfrac{d\\vec{v}}{dt} = \\begin{pmatrix} \\ddot{x}(t) \\\\ \\ddot{y}(t) \\end{pmatrix}$", desc: "" },
      { name: "Norme de la vitesse", expr: "$v(t) = \\sqrt{v_x^2(t)+v_y^2(t)}$", desc: "" },
      { name: "Vitesse (chronophoto)", expr: "$\\vec{v}(t) \\approx \\dfrac{\\overrightarrow{M_{n-1}M_{n+1}}}{2\\Delta t}$", desc: "" },
      { name: "Accélération centripète (MCU)", expr: "$\\vec{a} = \\dfrac{v^2}{R}\\,\\vec{n}$", desc: "Dirigée vers le centre" },
    ],
    demonstrations: [
      "Vitesse = dérivée de la position : $v_x = dx/dt$ = pente de la tangente à $x(t)$.",
      "MCU : $a_T = dv/dt = 0$ (uniforme) → seule accélération centripète $a_n = v^2/R$.",
      "Chronophotographie : $\\vec{v}(t) \\approx \\overrightarrow{M_{n-1}M_{n+1}}/(2\\Delta t)$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Types de mouvements et leurs caractéristiques',
        headers: ['Mouvement', 'Trajectoire', 'v(t)', 'a(t)', 'Caractéristique'],
        rows: [
          ['MRU (rectiligne uniforme)', 'Droite', 'constante', '0', 'ΣF = 0'],
          ['MRUA (uniformément accéléré)', 'Droite', 'croissante', 'constante ≠ 0', 'a = cste'],
          ['MCU (circulaire uniforme)', 'Cercle', '||v|| = cste', 'centripète', 'aT = 0'],
          ['Chute libre', 'Parabole (2D)', 'vx cste, vy varie', 'g vertical', 'θ = 0 ou oblique'],
        ],
      },
    ],
    tips: [
      "Toujours préciser le référentiel et le repère (O, $\\vec{i}$, $\\vec{j}$).",
      "Repère de Frenet pour mouvement circulaire : $\\vec{t}$ tangent au sens du mouvement, $\\vec{n}$ vers le centre.",
      "$a_n = v^2/R$ en MCU : plus v est grande ou R est petit, plus l'accélération centripète est grande.",
    ],
    remember: [
      "$\\vec{v} = d\\overrightarrow{OM}/dt$ et $\\vec{a} = d\\vec{v}/dt$.",
      "MCU : $||\\vec{v}|| = \\text{cste}$ mais $\\vec{v}$ change de direction → $\\vec{a} \\neq \\vec{0}$, centripète.",
      "Équations horaires : expressions de $x(t)$, $y(t)$, $v_x(t)$, $v_y(t)$.",
    ],
    extras: [],
  },
  {
    id: 11,
    title: "Mouvements et forces",
    icon: "🍎",
    color: "#a78bfa",
    definition: "La dynamique relie les forces aux mouvements. Les trois lois de Newton définissent la mécanique classique : principe d'inertie, principe fondamental de la dynamique (PFD), et principe d'action-réaction.",
    formulas: [
      { name: "1ère loi (inertie)", expr: "$\\sum\\vec{F}_{\\text{ext}} = \\vec{0} \\Leftrightarrow \\vec{v} = \\text{cste}$", desc: "Référentiel galiléen" },
      { name: "2ème loi (PFD)", expr: "$m\\,\\vec{a}(t) = \\sum\\vec{F}_{\\text{ext}}$", desc: "Référentiel galiléen, $m$ constante" },
      { name: "3ème loi (action-réaction)", expr: "$\\vec{F}_{A/B} = -\\vec{F}_{B/A}$", desc: "" },
      { name: "Poids", expr: "$\\vec{P} = m\\,\\vec{g}$", desc: "$g \\approx 9{,}81$ m·s⁻²" },
    ],
    demonstrations: [
      "Plan incliné angle $\\alpha$ : axe $x$ (↗) → $ma_x = mg\\sin\\alpha - f$ ; axe $y$ (↑⊥) → $N = mg\\cos\\alpha$.",
      "Si ΣF = 0 → $a = 0$ → MRU ou immobile (cas particulier de la 2ème loi).",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Méthode de résolution d\'un problème de mécanique',
        chart: `graph TD
    A["1. Définir le système\n(point matériel)"] --> B["2. Choisir le référentiel\ngaliléen + repère"]
    B --> C["3. Bilan des forces extérieures\n(P, N, f, T, F...)"]
    C --> D["4. Schéma des forces\n(diagramme corps libre)"]
    D --> E["5. Appliquer PFD\nmΣa = ΣFext"]
    E --> F["6. Projeter sur les axes\n(une équation par axe)"]
    F --> G["7. Résoudre l'EDO\n(primitives + C.I.)"]
    style A fill:#1e293b,stroke:#a78bfa,color:#e2e8f0
    style E fill:#1e3a5f,stroke:#a78bfa,color:#a78bfa
    style G fill:#1a3a2a,stroke:#34d399,color:#34d399`,
      },
    ],
    tips: [
      "Toujours dessiner le diagramme corps libre AVANT d'écrire le PFD.",
      "Choisir les axes intelligemment : un axe selon la direction du mouvement.",
      "La 3ème loi : forces égales, opposées, mais sur des corps DIFFÉRENTS (ne se compensent pas).",
    ],
    remember: [
      "PFD : $m\\vec{a} = \\sum\\vec{F}_{\\text{ext}}$ dans un référentiel galiléen.",
      "Immobile ou MRU → $\\sum\\vec{F} = \\vec{0}$ (principe d'inertie).",
      "Projeter sur chaque axe donne autant d'équations scalaires.",
    ],
    extras: [],
  },
  {
    id: 12,
    title: "Mouvement dans un champ uniforme",
    icon: "🪂",
    color: "#34d399",
    definition: "Dans un champ uniforme (pesanteur ou électrique), la seule force est constante. Le PFD donne une accélération constante, le mouvement est la superposition d'un MRU perpendiculaire et d'un MRUA parallèle au champ : trajectoire parabolique.",
    formulas: [
      { name: "Chute libre — équations horaires de v", expr: "$v_x = v_0\\cos\\alpha$ (cste)\\\\ $v_y(t) = v_0\\sin\\alpha - g t$", desc: "" },
      { name: "Chute libre — équations horaires de position", expr: "$x(t) = v_0\\cos\\alpha \\cdot t$\\\\ $y(t) = h - \\tfrac{1}{2}gt^2 + v_0\\sin\\alpha \\cdot t$", desc: "" },
      { name: "Équation de la trajectoire", expr: "$y(x) = -\\dfrac{g}{2v_0^2\\cos^2\\alpha}x^2 + x\\tan\\alpha + h$", desc: "Parabole" },
      { name: "Champ électrique condensateur plan", expr: "$E = U/d$", desc: "$d$ distance inter-plaques (m)" },
      { name: "Accélération dans E", expr: "$a_y = qE/m$", desc: "$q$ charge, $m$ masse" },
      { name: "Énergie cinétique / travail", expr: "$\\Delta E_c = W = q U_{\\text{acc}}$", desc: "Théorème énergie-travail" },
    ],
    demonstrations: [
      "Chute libre : PFD → $ma_y = -mg$ → $a_y = -g$, $a_x = 0$ → primitives → équations horaires.",
      "Trajectoire : $t = x/(v_0\\cos\\alpha)$ → substituer dans $y(t)$ → parabole.",
      "Condensateur : analogie complète avec la chute libre en remplaçant $g$ par $qE/m$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Analogie Champ de pesanteur ↔ Champ électrique uniforme',
        headers: ['Pesanteur', 'Champ électrique'],
        rows: [
          ['Force : P = mg', 'Force : F = qE'],
          ['Accélération : g (constant)', 'Accélération : qE/m (constant)'],
          ['MRU horizontal', 'MRU perpendiculaire au champ'],
          ['MRUA vertical', 'MRUA parallèle au champ'],
          ['Trajectoire parabolique', 'Trajectoire parabolique'],
          ['Portée maximale θ = 45°', 'Déviation ∝ tension U'],
        ],
      },
    ],
    tips: [
      "Lancer horizontal ($\\alpha = 0$) : $x = v_0 t$, $y = h - \\frac{1}{2}gt^2$.",
      "Pour particule chargée négative (électron) : $\\vec{F}$ opposée à $\\vec{E}$.",
      "Flèche maximale : $v_y(t_S) = 0$ → $t_S = v_0\\sin\\alpha/g$ → calculer $y(t_S)$.",
    ],
    remember: [
      "Chute libre : MRU horizontal + MRUA vertical ($a_y = -g$).",
      "Trajectoire $y(x)$ : parabole obtenue en éliminant $t$.",
      "Condensateur : remplacer $g$ par $qE/m$, avec $E = U/d$.",
    ],
    extras: [],
  },
  {
    id: 13,
    title: "Mouvement des planètes et satellites",
    icon: "🛸",
    color: "#fbbf24",
    definition: "Les lois de Kepler décrivent les orbites planétaires. Newton les unifie avec la gravitation universelle. Pour une orbite circulaire, le PFD appliqué à la force gravitationnelle donne vitesse et période orbitales, et redémontre la 3ème loi de Kepler.",
    formulas: [
      { name: "Gravitation universelle", expr: "$F = G\\dfrac{mM}{r^2}$", desc: "$G = 6{,}674 \\times 10^{-11}$ N·m²·kg⁻²" },
      { name: "3ème loi de Kepler", expr: "$\\dfrac{T^2}{a^3} = \\dfrac{4\\pi^2}{GM} = \\text{cste}$", desc: "$M$ = masse corps central" },
      { name: "Vitesse orbitale circulaire", expr: "$v = \\sqrt{\\dfrac{GM}{r}}$", desc: "" },
      { name: "Période orbitale circulaire", expr: "$T = \\dfrac{2\\pi r}{v} = 2\\pi\\sqrt{\\dfrac{r^3}{GM}}$", desc: "" },
    ],
    demonstrations: [
      "PFD (repère Frenet) : $m\\vec{a} = \\vec{F}_{\\text{grav}}$ → composante $\\vec{n}$ : $mv^2/r = GmM/r^2$ → $v = \\sqrt{GM/r}$.",
      "Composante $\\vec{t}$ : $dv/dt = 0$ → mouvement circulaire UNIFORME.",
      "3ème loi : $v = 2\\pi r/T$ et $v = \\sqrt{GM/r}$ → par égalité → $T^2/r^3 = 4\\pi^2/(GM)$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: '3 lois de Kepler',
        headers: ['Loi', 'Énoncé', 'Formule / Conséquence'],
        rows: [
          ['1ère — Orbites', 'Orbites = ellipses ; astre central à un foyer', 'Cercle si e = 0'],
          ['2ème — Aires', 'Le rayon balaie des aires égales en temps égaux', 'Vitesse ↑ au périhélie, ↓ à l\'aphélie'],
          ['3ème — Périodes', 'T²/a³ = cste pour tous les corps autour du même astre', 'T²/a³ = 4π²/(GM)'],
        ],
      },
      {
        type: 'mermaid',
        caption: 'Calcul de l\'altitude d\'un satellite géostationnaire',
        chart: `graph LR
    A["T = 24 h\n= 86 400 s"] --> B["3ème loi de Kepler\nT²/r³ = 4π²/(GM_Terre)"]
    B --> C["r³ = GMT²/(4π²)\nr ≈ 42 164 km"]
    C --> D["Altitude h = r − R_Terre\nR_Terre ≈ 6 371 km\nh ≈ 35 786 km"]
    style A fill:#1e293b,stroke:#fbbf24,color:#e2e8f0
    style D fill:#3a2a00,stroke:#fbbf24,color:#fbbf24`,
      },
    ],
    tips: [
      "$r$ = rayon de l'orbite = $R_{\\text{planète}}$ + altitude. Ne pas confondre avec le rayon de la planète.",
      "La 3ème loi permet de comparer : $T_1^2/a_1^3 = T_2^2/a_2^3$ (même astre central).",
      "Satellite géostationnaire : $T = 24$ h, orbite équatoriale, toujours au-dessus du même point.",
    ],
    remember: [
      "3 lois : ellipses / aires égales / $T^2/a^3 = \\text{cste}$.",
      "Orbite circulaire : $v = \\sqrt{GM/r}$ et $T^2 = 4\\pi^2 r^3/(GM)$.",
      "MCU car $dv/dt = 0$ (2ème loi de Kepler confirme aussi).",
    ],
    extras: [],
  },
  {
    id: 14,
    title: "Mécanique des fluides",
    icon: "🌊",
    color: "#38bdf8",
    definition: "La mécanique des fluides étudie les fluides au repos (statique) et en écoulement (dynamique). La loi de Bernoulli traduit la conservation de l'énergie volumique le long d'une ligne de courant pour un fluide parfait, incompressible en régime permanent.",
    formulas: [
      { name: "Loi statique des fluides", expr: "$P_1 + \\rho g z_1 = P_2 + \\rho g z_2$", desc: "$\\Delta P = -\\rho g \\Delta z$" },
      { name: "Poussée d'Archimède", expr: "$\\Pi = \\rho_f V g$", desc: "$\\rho_f$ : masse volumique du fluide, $V$ : volume de l'objet" },
      { name: "Débit volumique", expr: "$D_V = v \\times S$", desc: "Conservé pour fluide incompressible" },
      { name: "Loi de Bernoulli", expr: "$P + \\tfrac{1}{2}\\rho v^2 + \\rho g z = \\text{cste}$", desc: "Le long d'une ligne de courant" },
      { name: "Formule de Torricelli", expr: "$v = \\sqrt{2g h}$", desc: "Vitesse de sortie d'un orifice à hauteur $h$" },
    ],
    demonstrations: [
      "Poussée d'Archimède : bilan des forces pressantes sur objet cylindrique → $\\Pi = \\rho_f V g$ (poids du fluide déplacé).",
      "Conservation du débit : $D_V = v_1 S_1 = v_2 S_2$ → si $S_2 < S_1$ alors $v_2 > v_1$.",
      "Torricelli : Bernoulli entre surface libre (A) et orifice (B) avec $s \\ll S$ → $v_B = \\sqrt{2gh}$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Loi de Bernoulli — conservation d\'énergie volumique',
        chart: `graph LR
    A["Énergie cinétique\n½ρv²"] --- B["+ Énergie potentielle\nρgz"]
    B --- C["+ Énergie pressante\nP"]
    C --> D["= Constante\nle long d'une\nligne de courant"]
    E["Si v ↑\n(tube rétréci)"] -->|"Bernoulli"| F["P ↓\n(Effet Venturi)"]
    style D fill:#1e3a5f,stroke:#38bdf8,color:#38bdf8
    style F fill:#3a1a1a,stroke:#f472b6,color:#f472b6`,
      },
      {
        type: 'table',
        caption: 'Résumé des formules de statique et dynamique des fluides',
        headers: ['Situation', 'Formule', 'Condition'],
        rows: [
          ['Fluide au repos', 'P + ρgz = cste', 'Fluide statique incompressible'],
          ['Poussée d\'Archimède', 'Π = ρf·V·g', 'Objet immergé dans un fluide'],
          ['Conservation débit', 'v₁S₁ = v₂S₂', 'Fluide incompressible'],
          ['Bernoulli', 'P + ½ρv² + ρgz = cste', 'Fluide parfait incompressible permanent'],
          ['Torricelli', 'v = √(2gh)', 'Bernoulli + s << S'],
        ],
      },
    ],
    tips: [
      "Si $\\rho_{\\text{objet}} < \\rho_f$ : objet flotte (poussée d'Archimède > poids).",
      "Effet Venturi : tube qui rétrécit → $v$ augmente → $P$ diminue (Bernoulli).",
      "Torricelli : $v = \\sqrt{2gh}$ indépendant de $\\rho$ (à condition $s \\ll S$).",
    ],
    remember: [
      "Archimède : $\\Pi = \\rho_f V g$ = poids du fluide déplacé, dirigé vers le haut.",
      "Bernoulli : $P + \\frac{1}{2}\\rho v^2 + \\rho g z = \\text{cste}$ (énergie volumique conservée).",
      "Débit volumique $D_V = vS$ conservé : tube fin → vitesse grande.",
    ],
    extras: [],
  },
  {
    id: 15,
    title: "Thermodynamique : énergie interne et premier principe",
    icon: "🔥",
    color: "#a78bfa",
    definition: "Le premier principe est la loi de conservation de l'énergie pour un système thermodynamique fermé : ΔU = W + Q. Il généralise le théorème de l'énergie mécanique en tenant compte des échanges d'énergie thermique à l'échelle microscopique.",
    formulas: [
      { name: "Équation d'état du gaz parfait", expr: "$PV = nRT$", desc: "$R = 8{,}314$ J·K⁻¹·mol⁻¹, $T$ en Kelvin !" },
      { name: "Premier principe", expr: "$\\Delta U = W + Q$", desc: "$W, Q > 0$ si reçus par le système" },
      { name: "Système incompressible", expr: "$\\Delta U = Q = mc\\Delta T = C\\Delta T$", desc: "$W = 0$ (pas de variation de volume)" },
      { name: "Capacité thermique massique", expr: "$C = mc$", desc: "$c$ en J·K⁻¹·kg⁻¹, $C$ en J·K⁻¹" },
      { name: "Conversion température", expr: "$T(\\text{K}) = \\theta(°\\text{C}) + 273{,}15$", desc: "" },
    ],
    demonstrations: [
      "Gaz parfait : entités sans interaction, volume propre négligeable → $PV = nRT$.",
      "Premier principe : $\\Delta E = \\Delta E_m + \\Delta U = W_{\\text{ext}} + Q$ (conservation énergie totale).",
      "Système incompressible ($\\Delta V = 0$) : $W = -P_{\\text{ext}}\\Delta V = 0$ → $\\Delta U = Q = mc\\Delta T$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Bilan pour transformations classiques (gaz parfait)',
        headers: ['Transformation', 'Condition', 'W', 'Q', 'ΔU'],
        rows: [
          ['Isotherme', 'T = cste', 'W = −Q', 'Q ≠ 0', '0'],
          ['Isobare', 'P = cste', '−PΔV', 'Q = ΔU + PΔV', 'nCvΔT'],
          ['Isochore', 'V = cste', '0', 'Q = ΔU', 'nCvΔT'],
          ['Adiabatique', 'Q = 0', 'W = ΔU', '0', 'nCvΔT'],
        ],
      },
    ],
    tips: [
      "OBLIGATOIRE : convertir en Kelvin ! $T = 25°C \\Rightarrow T = 298$ K.",
      "Convention : $W > 0$ et $Q > 0$ si le système les REÇOIT de l'extérieur.",
      "Solide ou liquide incompressible : $\\Delta U = Q = mc\\Delta T$ (W négligeable).",
    ],
    remember: [
      "$PV = nRT$ : toujours $T$ en Kelvin, $R = 8{,}314$ J·K⁻¹·mol⁻¹.",
      "$\\Delta U = W + Q$ : premier principe (conservation d'énergie).",
      "Incompressible : $W \\approx 0$ → $\\Delta U = Q = C\\Delta T$.",
    ],
    extras: [],
  },
  {
    id: 16,
    title: "Thermodynamique : transferts thermiques",
    icon: "♨️",
    color: "#f472b6",
    definition: "Les transferts thermiques se font toujours de la source chaude vers la source froide. Trois mécanismes : conduction (contact solide), convection (fluide en mouvement), rayonnement (photons). La loi de Newton décrit le refroidissement d'un solide dans un fluide.",
    formulas: [
      { name: "Flux thermique (conduction)", expr: "$\\phi_{th} = \\dfrac{T_1 - T_2}{R_{th}}$", desc: "Analogie loi d'Ohm" },
      { name: "Résistance thermique", expr: "$R_{th} = \\dfrac{e}{\\lambda S}$", desc: "$e$ épaisseur (m), $\\lambda$ conductivité (W·K⁻¹·m⁻¹)" },
      { name: "Loi de Newton (conducto-convectif)", expr: "$\\phi(t) = hS(T_{\\text{ext}} - T(t))$", desc: "$h$ : coeff. conducto-convectif (W·K⁻¹·m⁻²)" },
      { name: "Loi d'évolution (thermostat)", expr: "$T(t) = T_{\\text{ext}} + (T_0 - T_{\\text{ext}})\\,e^{-t/\\tau}$", desc: "$\\tau = C/(hS)$" },
      { name: "Équation différentielle", expr: "$\\dfrac{dT}{dt} + \\dfrac{hS}{C}T(t) = \\dfrac{hS}{C}T_{\\text{ext}}$", desc: "" },
    ],
    demonstrations: [
      "Loi de Newton : $\\Delta U = Q = C(T(t+\\Delta t) - T(t)) = \\phi(t)\\cdot\\Delta t$ → division par $\\Delta t$ → EDO.",
      "Solution EDO : $T(t) = T_{\\text{ext}} + (T_0 - T_{\\text{ext}})e^{-t/\\tau}$ avec $\\tau = C/(hS)$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Les 3 modes de transfert thermique',
        chart: `graph TD
    A["Transfert thermique\n(source chaude → froide)"] --> B["Conduction\n(contact solide-solide)\nφ = (T₁−T₂)/Rth"]
    A --> C["Convection\n(solide-fluide)\nφ = hS(Text−T)"]
    A --> D["Rayonnement\n(photons)\n(hors programme BAC)"]
    style B fill:#1e3a5f,stroke:#38bdf8,color:#e2e8f0
    style C fill:#3a1a2a,stroke:#f472b6,color:#e2e8f0
    style D fill:#1e293b,stroke:#475569,color:#64748b`,
      },
      {
        type: 'table',
        caption: 'Analogie thermique-électrique',
        headers: ['Électricité', 'Thermique'],
        rows: [
          ['Tension U (V)', 'Différence de T : T₁−T₂ (K)'],
          ['Intensité I (A)', 'Flux thermique φ (W)'],
          ['Résistance R (Ω)', 'Résistance thermique Rth (K·W⁻¹)'],
          ['Loi d\'Ohm : U = RI', 'φ = (T₁−T₂)/Rth'],
        ],
      },
    ],
    tips: [
      "Loi de Newton : l'objet tend exponentiellement vers $T_{\\text{ext}}$ avec la constante $\\tau = C/(hS)$.",
      "Pour augmenter l'isolation : augmenter $e$ ou diminuer $\\lambda$ → augmente $R_{th}$ → diminue $\\phi$.",
      "Tangente à l'origine de $T(t)$ donne $\\tau$ graphiquement.",
    ],
    remember: [
      "Transfert : source chaude → source froide. Jamais l'inverse spontanément.",
      "Conduction : $\\phi = (T_1-T_2)/R_{th}$ avec $R_{th} = e/(\\lambda S)$.",
      "Refroidissement Newton : $T(t) = T_{\\text{ext}} + (T_0 - T_{\\text{ext}})e^{-t/\\tau}$, $\\tau = C/(hS)$.",
    ],
    extras: [],
  },
  {
    id: 17,
    title: "Phénomènes ondulatoires",
    icon: "🎵",
    color: "#34d399",
    definition: "Les ondes mécaniques et électromagnétiques présentent des propriétés communes : diffraction (déviation par un obstacle de taille ≈ λ), interférences (superposition de deux ondes cohérentes synchrones), et effet Doppler (variation de fréquence selon le mouvement source-observateur).",
    formulas: [
      { name: "Niveau sonore", expr: "$L = 10\\log\\left(\\dfrac{I}{I_0}\\right)$", desc: "$I_0 = 10^{-12}$ W·m⁻², $L$ en dB" },
      { name: "Atténuation sonore", expr: "$A = L' - L = 10\\log\\left(\\dfrac{I'}{I}\\right)$", desc: "En dB" },
      { name: "Écart angulaire de diffraction", expr: "$\\theta = \\dfrac{\\lambda}{a}$", desc: "$a$ : taille de l'obstacle/fente" },
      { name: "Largeur tache centrale (fente)", expr: "$L = \\dfrac{2D\\lambda}{a}$", desc: "$D$ : distance fente-écran" },
      { name: "Interférences constructives", expr: "$\\delta = n\\lambda$ ($n \\in \\mathbb{Z}$)", desc: "Trous de Young" },
      { name: "Interférences destructives", expr: "$\\delta = (n + \\tfrac{1}{2})\\lambda$", desc: "" },
      { name: "Différence de marche (Young)", expr: "$\\delta = \\dfrac{bx}{D}$", desc: "$b$ : écart entre trous, $x$ : position sur écran" },
      { name: "Interfrange", expr: "$i = \\dfrac{\\lambda D}{b}$", desc: "$i$ : écart entre deux franges brillantes" },
    ],
    demonstrations: [
      "Diffraction visible si $\\lambda \\approx a$ (ou $a$ jusqu'à $100\\lambda$ pour EM).",
      "Interfrange : frange brillante en $x_n = n\\lambda D/b$ → $i = x_{n+1} - x_n = \\lambda D/b$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Dispositif des trous de Young',
        chart: `graph LR
    S["Source\nmonochromatique\nλ"] --> F1["Trou S₁"]
    S --> F2["Trou S₂\n(séparation b)"]
    F1 -->|"δ = bx/D"| E["Écran à distance D\nfranges d'interférence"]
    F2 --> E
    I["Interfrange\ni = λD/b"] -.-> E
    style S fill:#1e293b,stroke:#34d399,color:#e2e8f0
    style E fill:#1e293b,stroke:#fbbf24,color:#e2e8f0
    style I fill:#1a3a2a,stroke:#34d399,color:#34d399`,
      },
      {
        type: 'table',
        caption: 'Comparaison Diffraction / Interférences',
        headers: ['Phénomène', 'Cause', 'Formule', 'Conséquence si λ ↑'],
        rows: [
          ['Diffraction', '1 fente de largeur a', 'θ = λ/a', 'θ ↑ (plus étalé)'],
          ['Interférences', '2 sources séparées de b', 'i = λD/b', 'i ↑ (plus espacé)'],
        ],
      },
    ],
    tips: [
      "Lumière blanche → frange centrale blanche, autres franges irisées (chaque λ donne sa frange).",
      "$a \\downarrow$ → $\\theta \\uparrow$ : fente plus étroite → diffraction plus large.",
      "Augmenter $D$ ou diminuer $b$ → interfrange plus grand (franges plus espacées).",
    ],
    remember: [
      "Constructives : $\\delta = n\\lambda$. Destructives : $\\delta = (n+\\frac{1}{2})\\lambda$.",
      "Interfrange Young : $i = \\lambda D/b$.",
      "Niveau sonore : $L = 10\\log(I/I_0)$ avec $I_0 = 10^{-12}$ W·m⁻².",
    ],
    extras: [],
  },
  {
    id: 18,
    title: "Lunette astronomique",
    icon: "🔭",
    color: "#fbbf24",
    definition: "La lunette astronomique est un système afocal formé de deux lentilles convergentes : l'objectif (grande focale f'₁) qui collecte la lumière, et l'oculaire (petite focale f'₂) qui grossit. En réglage afocal : objet à l'infini → image à l'infini.",
    formulas: [
      { name: "Relation de conjugaison (lentille)", expr: "$\\dfrac{1}{\\overline{OA'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f'}$", desc: "" },
      { name: "Grossissement", expr: "$G = \\dfrac{\\alpha'}{\\alpha} = \\dfrac{f_1'}{f_2'}$", desc: "$\\alpha$, $\\alpha'$ : diamètres apparents" },
      { name: "Longueur de la lunette", expr: "$L = f_1' + f_2'$", desc: "Réglage afocal" },
      { name: "Condition afocale", expr: "$F_1' \\equiv F_2$", desc: "Foyer image obj. = foyer objet oculaire" },
    ],
    demonstrations: [
      "Condition afocale : $A_1B_1$ dans le plan focal image de L1 (objet à ∞) et dans le plan focal de L2 → image à ∞.",
      "$G = f_1'/f_2'$ : dans le triangle $O_1A_1B_1$ : $\\tan\\alpha = A_1B_1/f_1'$ ; dans $O_2A_1B_1$ : $\\tan\\alpha' = A_1B_1/f_2'$ → $G = \\alpha'/\\alpha = f_1'/f_2'$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Trajet des rayons dans une lunette astronomique afocale',
        chart: `graph LR
    O["Objet à l'infini\n(rayons parallèles, angle α)"] --> L1["Objectif L₁\nfocale f'₁ (grande)"]
    L1 -->|"image intermédiaire\nA₁B₁ dans F'₁ ≡ F₂"| Inter["Plan focal\n(F'₁ = F₂)"]
    Inter --> L2["Oculaire L₂\nfocale f'₂ (petite)"]
    L2 --> I["Image finale à l'infini\n(rayons parallèles, angle α')"]
    G["G = f'₁/f'₂\nL = f'₁ + f'₂"] -.-> Inter
    style O fill:#1e293b,stroke:#fbbf24,color:#e2e8f0
    style Inter fill:#3a2a00,stroke:#fbbf24,color:#fbbf24
    style I fill:#1e293b,stroke:#34d399,color:#e2e8f0`,
      },
    ],
    tips: [
      "Pour augmenter $G$ : diminuer $f_2'$ (oculaire de plus courte focale) ou augmenter $f_1'$.",
      "Objectif = grande $f'$ (collecte lumière, grossissement 1). Oculaire = petite $f'$ (loupe).",
      "$G$ est sans unité ; $\\alpha$ et $\\alpha'$ en radians (petits angles).",
    ],
    remember: [
      "$G = f_1'/f_2'$ et $L = f_1' + f_2'$ en réglage afocal.",
      "Condition afocale : $F_1' \\equiv F_2$ (foyers confondus).",
      "Objet à ∞ → image à ∞ : l'œil est au repos (accommodation nulle).",
    ],
    extras: [],
  },
  {
    id: 19,
    title: "Interaction lumière-matière",
    icon: "💡",
    color: "#38bdf8",
    definition: "Un photon d'énergie $E = h\\nu$ peut arracher un électron d'un métal (effet photoélectrique) si $h\\nu \\geq W_e$. L'effet photovoltaïque dans les semi-conducteurs et le fonctionnement des DEL reposent sur ces interactions lumière-matière.",
    formulas: [
      { name: "Énergie d'un photon", expr: "$E = h\\nu = \\dfrac{hc}{\\lambda}$", desc: "$h = 6{,}626 \\times 10^{-34}$ J·s" },
      { name: "Travail d'extraction", expr: "$W_e = h\\nu_s$", desc: "$\\nu_s$ : fréquence seuil du métal" },
      { name: "Énergie cinétique de l'électron", expr: "$E_c = \\dfrac{1}{2}mv^2 = h(\\nu - \\nu_s) = h\\nu - W_e$", desc: "" },
      { name: "Condition d'émission", expr: "$h\\nu \\geq W_e \\Leftrightarrow \\nu \\geq \\nu_s$", desc: "" },
      { name: "Rendement cellule photovoltaïque", expr: "$\\eta = \\dfrac{P_{\\text{él}}}{P_l} = \\dfrac{P_{\\text{él}}}{\\varepsilon S}$", desc: "$\\varepsilon$ : éclairement (W·m⁻²)" },
      { name: "Conversion", expr: "$1 \\text{ eV} = 1{,}6 \\times 10^{-19}$ J", desc: "" },
    ],
    demonstrations: [
      "1 photon → 1 électron. Énergie $h\\nu$ fournie : $W_e$ pour arracher + $E_c$ pour l'électron libre.",
      "Graphe $E_c = f(\\nu)$ : droite de pente $h$, coupant l'axe à $\\nu_s$, ordonnée = $-W_e$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Mécanisme de l\'effet photoélectrique',
        chart: `graph TD
    P["Photon\nhν"] --> C{"hν ≥ We ?"}
    C -->|"OUI\nhν ≥ hνs"| E["Électron arraché\nEc = hν − We"]
    C -->|"NON\nquelle que soit\nl'intensité"| N["Aucun électron\némis"]
    E --> T["Tension d'arrêt\neUa = Ec,max"]
    style P fill:#1e293b,stroke:#38bdf8,color:#e2e8f0
    style C fill:#3a2a00,stroke:#fbbf24,color:#fbbf24
    style E fill:#1a3a2a,stroke:#34d399,color:#34d399
    style N fill:#3a1a1a,stroke:#f87171,color:#f87171`,
      },
      {
        type: 'table',
        caption: 'Comparaison Effet photoélectrique / Photovoltaïque / DEL',
        headers: ['Effet', 'Matériau', 'Conversion', 'Application'],
        rows: [
          ['Photoélectrique', 'Métal', 'Lumière → énergie cinétique e⁻', 'Cellule photoélectrique'],
          ['Photovoltaïque', 'Semi-conducteur', 'Lumière → électricité', 'Panneau solaire'],
          ['DEL (inverse)', 'Semi-conducteur', 'Électricité → lumière', 'Ampoule LED'],
        ],
      },
    ],
    tips: [
      "Convertir $W_e$ en J : $W_e(\\text{J}) = W_e(\\text{eV}) \\times 1{,}6 \\times 10^{-19}$.",
      "L'intensité lumineuse = nombre de photons/s. Elle n'affecte pas $E_c$ mais le courant.",
      "Graphe $E_c = f(\\nu)$ : pente = $h$, abscisse à l'origine = $\\nu_s$.",
    ],
    remember: [
      "$E_{\\text{photon}} = h\\nu = hc/\\lambda$. Condition : $h\\nu \\geq W_e = h\\nu_s$.",
      "$E_c = h\\nu - W_e$ : énergie cinétique de l'électron arraché.",
      "DEL = inverse du photovoltaïque : énergie électrique → photon.",
    ],
    extras: [],
  },
  {
    id: 20,
    title: "Dynamique d'un système électrique",
    icon: "🔌",
    color: "#a78bfa",
    definition: "Le circuit RC est un système du 1er ordre dont l'évolution est régie par une équation différentielle linéaire. La charge et la décharge du condensateur suivent des lois exponentielles caractérisées par la constante de temps τ = RC.",
    formulas: [
      { name: "Relation charge-tension condensateur", expr: "$q(t) = C\\,u_C(t)$", desc: "$C$ en Farads (F)" },
      { name: "Relation tension-intensité condensateur", expr: "$i(t) = C\\,\\dfrac{du_C}{dt}$", desc: "" },
      { name: "Constante de temps", expr: "$\\tau = RC$", desc: "$R$ (Ω), $C$ (F) → $\\tau$ (s)" },
      { name: "Charge du condensateur", expr: "$u_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$", desc: "CI : $u_C(0) = 0$" },
      { name: "Décharge du condensateur", expr: "$u_C(t) = E\\,e^{-t/\\tau}$", desc: "CI : $u_C(0) = E$" },
      { name: "Équation différentielle (charge)", expr: "$RC\\dfrac{du_C}{dt} + u_C = E$", desc: "Loi des mailles + loi d'Ohm + relation C" },
    ],
    demonstrations: [
      "Loi des mailles charge : $u_R + u_C = E$ → $Ri + u_C = E$ → $RC\\,du_C/dt + u_C = E$.",
      "Solution complète : $u_C(t) = Ae^{-t/\\tau} + E$. CI $u_C(0)=0$ → $A = -E$ → $u_C = E(1-e^{-t/\\tau})$.",
      "Décharge : second membre nul → $u_C(t) = Ae^{-t/\\tau}$. CI $u_C(0) = E$ → $u_C = Ee^{-t/\\tau}$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Comportement du condensateur selon le régime',
        headers: ['Instant / Régime', 'uC', 'i (courant)', 'Comportement équivalent'],
        rows: [
          ['t = 0 (condensateur déchargé)', '0 V', 'E/R (maximum)', 'Court-circuit'],
          ['t = τ (charge)', '0,63 E', '0,37 E/R', '—'],
          ['t = 5τ (régime permanent)', '≈ E', '≈ 0', 'Interrupteur ouvert'],
          ['t = τ (décharge)', '0,37 E', '−0,37 E/R', '—'],
        ],
      },
      {
        type: 'mermaid',
        caption: 'Circuit RC — charge et décharge',
        chart: `graph LR
    A["t = 0\nFermeture interrupteur\nuC(0) = 0"] -->|"Charge\nτ = RC"| B["t → ∞\nuC → E\ni → 0"]
    C["uC(0) = E\nOuverture générateur"] -->|"Décharge\nτ = RC"| D["t → ∞\nuC → 0\ni → 0"]
    E["Méthode tangente origine\nintersecte asymptote en t = τ"] -.-> B
    style A fill:#1e3a5f,stroke:#a78bfa,color:#e2e8f0
    style B fill:#1a3a2a,stroke:#34d399,color:#34d399
    style D fill:#1e293b,stroke:#475569,color:#64748b`,
      },
    ],
    tips: [
      "Méthode graphique de τ : tangente à l'origine de $u_C(t)$ coupe l'asymptote horizontale en $t = \\tau$.",
      "En régime permanent (continu) : condensateur = interrupteur ouvert ($i = 0$).",
      "Pour $t \\geq 5\\tau$ : on considère que le régime permanent est atteint (erreur < 1%).",
    ],
    remember: [
      "$\\tau = RC$ en secondes.",
      "Charge : $u_C(t) = E(1-e^{-t/\\tau})$. Décharge : $u_C(t) = Ee^{-t/\\tau}$.",
      "À $t = \\tau$ : 63% de la valeur finale (charge) ou 37% (décharge).",
    ],
    extras: [],
  },
];