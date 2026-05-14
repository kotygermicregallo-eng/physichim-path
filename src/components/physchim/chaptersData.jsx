export const chapters = [
  {
    id: 1,
    title: "Constitution de la matière - La mole",
    icon: "⚛️",
    color: "#38bdf8",
    definition: "La chimie quantitative s'appuie sur le concept de mole : une unité de comptage des entités chimiques (atomes, molécules, ions). Ces formules servent dans TOUS les autres chapitres de chimie.",
    formulas: [
      { name: "Nombre de moles (masse)", expr: "$n = \\dfrac{m}{M}$", desc: "$n$ (mol), $m$ (g), $M$ (g/mol)" },
      { name: "Nombre de moles (concentration)", expr: "$n = C \\times V$", desc: "$C$ (mol/L), $V$ en LITRES" },
      { name: "Nombre d'entités", expr: "$N = n \\times N_A$", desc: "$N_A = 6{,}022 \\times 10^{23}$ mol⁻¹" },
      { name: "Concentration molaire", expr: "$C = \\dfrac{n}{V} = \\dfrac{m}{M \\cdot V}$", desc: "$C$ (mol/L)" },
      { name: "Concentration massique", expr: "$C_m = \\dfrac{m}{V} = C \\times M$", desc: "$C_m$ (g/L)" },
      { name: "Pourcentage massique", expr: "$w\\% = \\dfrac{m_{\\text{soluté}}}{m_{\\text{solution}}} \\times 100$", desc: "" },
      { name: "C depuis w% et densité d", expr: "$C = \\dfrac{w\\% \\times d \\times 1000}{M \\times 100}$", desc: "Exercice classique concours !" },
      { name: "Dilution", expr: "$C_1 V_1 = C_2 V_2$", desc: "Conservation des moles de soluté" },
    ],
    demonstrations: [
      "Établissement de $n = m/M$ : $M$ est la masse d'une mole, donc $n = m/M$.",
      "Calcul du nombre d'entités : $N = (m/M) \\times N_A$. Ex : 36 g de glucose ($M=180$) $\\Rightarrow n = 0{,}2$ mol.",
      "Loi de dilution : $n_1 = n_2 \\Rightarrow C_1 V_1 = C_2 V_2$.",
      "Calcul de $C$ depuis $w\\%$ et $d$ : $m_{\\text{sol}}/1\\text{L} = d \\times 1000$ g $\\Rightarrow C = (w\\% \\times d \\times 1000)/(M \\times 100)$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Grandeurs et unités',
        headers: ['Symbole', 'Grandeur', 'Unité', 'Remarque'],
        rows: [
          ['n', 'Quantité de matière', 'mol', ''],
          ['m', 'Masse', 'g', ''],
          ['M', 'Masse molaire', 'g/mol', 'Somme des masses atomiques'],
          ['C', 'Concentration molaire', 'mol/L', 'V en LITRES'],
          ['Cm', 'Concentration massique', 'g/L', 'Cm = C × M'],
          ['NA', 'Constante d\'Avogadro', '6,022×10²³ mol⁻¹', ''],
        ],
      },
      {
        type: 'mermaid',
        caption: 'Tableau d\'avancement — réaction aA + bB → cC + dD',
        chart: `graph LR
    A["État initial<br/>n(A)₀ · n(B)₀<br/>0 · 0"] -->|"avancement x"| B["État en cours<br/>n(A)₀−ax · n(B)₀−bx<br/>cx · dx"]
    B -->|"x = xmax"| C["État final<br/>n(A)f · n(B)f<br/>n(C)f · n(D)f"]
    style A fill:#1e293b,stroke:#38bdf8,color:#e2e8f0
    style B fill:#1e293b,stroke:#a78bfa,color:#e2e8f0
    style C fill:#1e293b,stroke:#34d399,color:#e2e8f0`,
      },
    ],
    tips: [
      "PIÈGE N°1 : toujours convertir mL en L avant tout calcul (250 mL → 0,250 L).",
      "Pour $w\\%$ avec densité : Ex : HCl 37%, $d=1{,}19$, $M=36{,}5$ $\\Rightarrow C = 12$ mol/L.",
      "Ne pas confondre $C_m$ (g/L) et $C$ (mol/L) : $C_m = C \\times M$.",
    ],
    remember: [
      "Les 3 formules de base : $n = m/M$ ; $n = C \\times V$ ; $N = n \\times N_A$.",
      "Dilution : $C_1 V_1 = C_2 V_2$. Les moles de soluté se conservent.",
      "Réactif limitant : celui pour qui $n/\\text{coeff stœchio}$ est minimal.",
    ],
    extras: [
      {
        title: "Exemple numérique (concours)",
        content: "CH₄ + 2O₂ → CO₂ + 2H₂O avec 3 mol CH₄ et 4 mol O₂ :\nxmax(CH₄) = 3/1 = 3 mol | xmax(O₂) = 4/2 = 2 mol → xmax = 2 mol, O₂ limitant\nÉtat final : CH₄ = 1 mol (excès), O₂ = 0, CO₂ = 2 mol, H₂O = 4 mol",
      },
    ],
  },
  {
    id: 2,
    title: "Suivi temporel - Cinétique chimique",
    icon: "⏱️",
    color: "#a78bfa",
    definition: "La cinétique chimique étudie la vitesse à laquelle se déroulent les réactions chimiques. Elle permet de suivre l'évolution d'un système au cours du temps et d'identifier les facteurs qui influencent cette vitesse.",
    formulas: [
      { name: "Vitesse volumique de réaction", expr: "$v = \\dfrac{1}{V}\\dfrac{dx}{dt}$", desc: "$x$ : avancement (mol), $V$ : volume (L)" },
      { name: "Vitesse en concentration", expr: "$v = \\dfrac{d[P]}{dt} = -\\dfrac{d[R]}{dt}$", desc: "Pour coefficients stœchio = 1" },
      { name: "Temps de demi-réaction", expr: "$[A](t_{1/2}) = \\dfrac{[A]_0}{2}$", desc: "Lecture graphique" },
      { name: "Loi de vitesse (ordre 1)", expr: "$[A](t) = [A]_0 \\cdot e^{-kt}$", desc: "$k$ : constante de vitesse (s⁻¹)" },
      { name: "Loi d'Arrhénius", expr: "$k = A \\cdot e^{-E_a/RT}$", desc: "$E_a$ : énergie d'activation, $R = 8{,}314$ J/mol/K" },
    ],
    demonstrations: [
      "Vitesse instantanée : pente de la tangente à la courbe $[P](t)$ ou $[R](t)$.",
      "$t_{1/2}$ : sur le graphe $[R](t)$, lire $t$ pour laquelle $[R] = [R]_0/2$.",
      "Arrhénius : $\\ln(k) = -E_a/(RT) + \\ln(A)$ — si $\\ln(k) = f(1/T)$ est une droite, sa pente vaut $-E_a/R$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Facteurs influençant la cinétique chimique',
        chart: `graph TD
    A["Vitesse de réaction"] --> B["Température T"]
    A --> C["Concentration"]
    A --> D["Catalyseur"]
    A --> E["Surface de contact"]
    B -->|"T ↑"| F["k ↑ (Arrhénius)"]
    C -->|"[R] ↑"| G["v ↑"]
    D -->|"abaisse Eₐ"| H["k ↑ sans changer K"]
    style A fill:#1e293b,stroke:#a78bfa,color:#e2e8f0
    style B fill:#0f172a,stroke:#38bdf8,color:#94a3b8
    style C fill:#0f172a,stroke:#38bdf8,color:#94a3b8
    style D fill:#0f172a,stroke:#38bdf8,color:#94a3b8
    style E fill:#0f172a,stroke:#38bdf8,color:#94a3b8
    style F fill:#0f172a,stroke:#34d399,color:#34d399
    style G fill:#0f172a,stroke:#34d399,color:#34d399
    style H fill:#0f172a,stroke:#34d399,color:#34d399`,
      },
    ],
    tips: [
      "La tangente en $t=0$ donne la vitesse initiale (maximale).",
      "Pour identifier l'ordre : si $t_{1/2}$ est constant $\\Rightarrow$ ordre 1. Si $t_{1/2} \\propto 1/[A]_0 \\Rightarrow$ ordre 2.",
      "Loi d'Arrhénius : augmenter $T$ de 10°C double souvent $k$.",
    ],
    remember: [
      "La vitesse de réaction est toujours positive et diminue au cours du temps.",
      "Le temps de demi-réaction $t_{1/2}$ est lu sur le graphe quand $[R] = [R]_0/2$.",
      "Facteurs cinétiques : $T \\uparrow \\Rightarrow v \\uparrow$ ; catalyseur $\\Rightarrow$ abaisse $E_a$.",
    ],
    extras: [],
  },
  {
    id: 3,
    title: "Équilibres chimiques - Acide/Base",
    icon: "⚖️",
    color: "#34d399",
    definition: "Un équilibre chimique est un état dynamique où les vitesses des réactions directe et inverse sont égales. En chimie acido-basique (Brønsted), un acide donne H⁺ et une base accepte H⁺. Chapitre incontournable.",
    formulas: [
      { name: "pH", expr: "$\\text{pH} = -\\log[\\text{H}_3\\text{O}^+]$", desc: "$[\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}}$" },
      { name: "Produit ionique de l'eau", expr: "$K_e = [\\text{H}_3\\text{O}^+][\\text{OH}^-] = 10^{-14}$", desc: "À 25°C, $pK_e = 14$" },
      { name: "Constante d'acidité", expr: "$K_a = \\dfrac{[A^-][\\text{H}_3\\text{O}^+]}{[HA]}$", desc: "Pour $HA + H_2O \\rightleftharpoons A^- + H_3O^+$" },
      { name: "pKa", expr: "$pK_a = -\\log(K_a)$", desc: "$K_a = 10^{-pK_a}$" },
      { name: "Acide fort $C_a$", expr: "$\\text{pH} = -\\log(C_a)$", desc: "Dissociation totale" },
      { name: "Base forte $C_b$", expr: "$\\text{pH} = 14 + \\log(C_b)$", desc: "Dissociation totale" },
      { name: "Acide faible", expr: "$\\text{pH} = \\dfrac{1}{2}(pK_a - \\log C_a)$", desc: "Valable si $\\alpha \\ll 1$" },
      { name: "Base faible", expr: "$\\text{pH} = 7 + \\dfrac{1}{2}(pK_a + \\log C_b)$", desc: "" },
      { name: "Solution tampon", expr: "$\\text{pH} = pK_a + \\log\\dfrac{[A^-]}{[HA]}$", desc: "" },
      { name: "Mi-titrage acide faible", expr: "$\\text{pH} = pK_a$", desc: "Quand $V_{\\text{ajouté}} = V_{\\text{éq}}/2$" },
    ],
    demonstrations: [
      "Acide fort : dissociation totale $\\Rightarrow [\\text{H}_3\\text{O}^+] = C_a \\Rightarrow \\text{pH} = -\\log(C_a)$.",
      "Acide faible : $K_a = x^2/(C_a - x) \\approx x^2/C_a \\Rightarrow x = \\sqrt{K_a C_a} \\Rightarrow \\text{pH} = \\frac{1}{2}(pK_a - \\log C_a)$.",
      "Titrage : à l'équivalence $C_a V_a = C_b V_{\\text{éq}}$.",
      "Mi-titrage : $n(A^-) = n(HA) \\Rightarrow \\log(1) = 0 \\Rightarrow \\text{pH} = pK_a$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Les 4 formules de pH selon le type de solution',
        headers: ['Type de solution', 'Formule du pH', 'Condition'],
        rows: [
          ['Acide fort Ca', 'pH = −log(Ca)', 'Dissociation totale'],
          ['Base forte Cb', 'pH = 14 + log(Cb)', 'Dissociation totale'],
          ['Acide faible Ca, pKa', 'pH = ½(pKa − log Ca)', 'α << 1'],
          ['Base faible Cb, pKa', 'pH = 7 + ½(pKa + log Cb)', ''],
          ['Tampon (Henderson)', 'pH = pKa + log([A⁻]/[HA])', ''],
          ['Mi-titrage acide faible', 'pH = pKa', 'V ajouté = Véq/2'],
        ],
      },
      {
        type: 'table',
        caption: 'pH à l\'équivalence selon le type de titrage',
        headers: ['Type de titrage', 'pH à l\'équivalence', 'Explication'],
        rows: [
          ['Acide fort + Base forte', 'pH = 7', 'Sel neutre'],
          ['Acide faible + Base forte', 'pH > 7', 'A⁻ est une base'],
          ['Base faible + Acide fort', 'pH < 7', 'BH⁺ est un acide'],
        ],
      },
      {
        type: 'mermaid',
        caption: 'Diagramme de prédominance acide/base',
        chart: `graph LR
    A["pH < pKa<br/>HA prédominant"] -- "pH = pKa<br/>[HA] = [A⁻]" --> B["pH > pKa<br/>A⁻ prédominant"]
    style A fill:#1e3a5f,stroke:#38bdf8,color:#e2e8f0
    style B fill:#1a3a2a,stroke:#34d399,color:#e2e8f0`,
      },
    ],
    tips: [
      "PIÈGE : pH d'un acide FAIBLE $\\neq -\\log(C_a)$. Utiliser : $\\text{pH} = \\frac{1}{2}(pK_a - \\log C_a)$.",
      "PIÈGE : pH à l'équivalence acide faible + base forte est $> 7$.",
      "Sommer les volumes : $V_{\\text{total}} = V_a + V_{\\text{ajouté}}$.",
    ],
    remember: [
      "Acide = donneur $H^+$ / Base = accepteur $H^+$ (Brønsted).",
      "$\\text{pH} = pK_a \\Leftrightarrow [HA] = [A^-]$ : mi-titrage d'un acide faible.",
      "Titrage : $C_a V_a = C_b V_{\\text{éq}}$ à l'équivalence.",
    ],
    extras: [
      {
        title: "Titrage conductimétrique (complément)",
        content: "Principe : mesure de la conductance G en fonction du volume ajouté. Courbe = droites qui se croisent au point équivalent (pas une courbe en S).\n\nConductivités molaires ioniques :\nH₃O⁺ (35,0) >> HO⁻ (19,8) >> K⁺ (7,4) > Cl⁻ (7,6) > Na⁺ (5,0) > CH₃COO⁻ (4,1) [mS·m²/mol]",
      },
    ],
  },
  {
    id: 4,
    title: "Stratégies en synthèse organique",
    icon: "🧪",
    color: "#f472b6",
    definition: "La synthèse organique construit des molécules par transformations chimiques contrôlées. Elle requiert de choisir réactions (substitution, addition, élimination), conditions opératoires, et méthodes de purification/identification.",
    formulas: [
      { name: "Rendement", expr: "$\\eta = \\dfrac{n_{\\text{obtenu}}}{n_{\\text{théorique}}} \\times 100\\%$", desc: "$n$ en moles" },
      { name: "Substitution nucléophile", expr: "$R{-}X + Nu^- \\rightarrow R{-}Nu + X^-$", desc: "$Nu$ : nucléophile, $X$ : groupe partant" },
      { name: "Règle de Markovnikov", expr: "$\\text{alcène} + HX \\rightarrow$ carbocation stable", desc: "$H$ sur le C le plus hydrogéné" },
      { name: "Rf (CCM)", expr: "$R_f = \\dfrac{d_{\\text{composé}}}{d_{\\text{front solvant}}}$", desc: "$0 < R_f < 1$" },
    ],
    demonstrations: [
      "Règle de Markovnikov : en addition $HX$ sur alcène asymétrique, $H$ sur le C le plus H-substitué.",
      "Calcul du rendement : $\\eta = m_{\\text{obtenu}} / (n_{\\text{théo}} \\times M_{\\text{produit}}) \\times 100\\%$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Étapes d\'une synthèse organique',
        chart: `graph TD
    A["🧪 Matières premières"] --> B["⚗️ Réaction\n(Solvant · T° · Catalyseur)"]
    B --> C["🫧 Produit brut\n(mélange)"]
    C --> D["🔬 Purification\n(CCM · Distillation · Recristallisation)"]
    D --> E["✅ Produit pur"]
    E --> F["📊 Identification\n(IR · RMN · CCM)"]
    style A fill:#1e293b,stroke:#f472b6,color:#e2e8f0
    style B fill:#1e293b,stroke:#38bdf8,color:#e2e8f0
    style C fill:#1e293b,stroke:#fbbf24,color:#e2e8f0
    style D fill:#1e293b,stroke:#a78bfa,color:#e2e8f0
    style E fill:#1e293b,stroke:#34d399,color:#e2e8f0
    style F fill:#1e293b,stroke:#34d399,color:#e2e8f0`,
      },
      {
        type: 'table',
        caption: 'Nucléophiles vs Électrophiles',
        headers: ['Type', 'Définition', 'Exemples'],
        rows: [
          ['Nucléophile (Nu:)', 'Donneur de doublet, riche en e⁻', 'H₂O, NH₃, HO⁻, Cl⁻, CN⁻'],
          ['Électrophile (E⁺)', 'Accepteur de doublet, pauvre en e⁻', 'H⁺, C portant δ+, BF₃, AlCl₃'],
        ],
      },
    ],
    tips: [
      "$R_f$ identique à un témoin = même composé.",
      "Flèche courbe : part du doublet (riche), arrive sur l'atome pauvre.",
      "Rendement $< 100\\%$ toujours en pratique.",
    ],
    remember: [
      "Identifier la transformation : addition, substitution, élimination, oxydation ou réduction.",
      "Purification obligatoire avant identification.",
      "IR : groupes fonctionnels. RMN $^1H$ : environnement des protons.",
    ],
    extras: [],
  },
  {
    id: 5,
    title: "Description d'un mouvement",
    icon: "🏃",
    color: "#fbbf24",
    definition: "La cinématique décrit le mouvement sans s'intéresser à ses causes. Elle définit la position, la vitesse et l'accélération d'un objet dans un référentiel donné.",
    formulas: [
      { name: "Vecteur position", expr: "$\\vec{OM} = x(t)\\,\\vec{i} + y(t)\\,\\vec{j}$", desc: "En 2D" },
      { name: "Vecteur vitesse", expr: "$\\vec{v} = \\dfrac{d\\vec{OM}}{dt}$", desc: "$v_x = \\dot{x}$, $v_y = \\dot{y}$" },
      { name: "Norme de la vitesse", expr: "$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$", desc: "m/s" },
      { name: "Vecteur accélération", expr: "$\\vec{a} = \\dfrac{d\\vec{v}}{dt}$", desc: "" },
      { name: "MRU", expr: "$x(t) = x_0 + v_0 t$", desc: "$v = \\text{cste}$, $a = 0$" },
      { name: "MRUA", expr: "$x(t) = x_0 + v_0 t + \\tfrac{1}{2}at^2$", desc: "$v(t) = v_0 + at$" },
      { name: "Accélération centripète", expr: "$a_n = \\dfrac{v^2}{R}$", desc: "MCU — dirigée vers le centre" },
    ],
    demonstrations: [
      "Passage de $x(t)$ à $v(t)$ : $v_x = dx/dt$ = pente de la tangente.",
      "Trajectoire : exprimer $t$ depuis $x(t)$, substituer dans $y(t)$ pour obtenir $y = f(x)$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Types de mouvements et leurs caractéristiques',
        headers: ['Type', 'Condition', 'v(t)', 'x(t)', 'Trajectoire'],
        rows: [
          ['MRU', 'a = 0', 'v = cste', 'droite', 'rectiligne'],
          ['MRUA', 'a = cste ≠ 0', 'droite', 'parabole', 'parabolique (2D)'],
          ['MCU', '|v| = cste, a⊥v', '|v| = cste', 'sinusoïde', 'circulaire'],
        ],
      },
    ],
    tips: [
      "La pente de $v(t)$ donne l'accélération $a$.",
      "Trajectoire parabolique : $t = x/(v_0 \\cos\\theta)$, substituer dans $y(t)$.",
      "Toujours préciser le référentiel et le repère.",
    ],
    remember: [
      "$\\vec{v} = d\\vec{OM}/dt$ et $\\vec{a} = d\\vec{v}/dt$.",
      "MRU : $v = \\text{cste}$. MRUA : $a = \\text{cste}$.",
      "Trajectoire $y = f(x)$ obtenue en éliminant $t$.",
    ],
    extras: [],
  },
  {
    id: 6,
    title: "Deuxième loi de Newton",
    icon: "🍎",
    color: "#38bdf8",
    definition: "La deuxième loi de Newton (PFD) relie la somme des forces extérieures à l'accélération du centre de masse, dans un référentiel galiléen.",
    formulas: [
      { name: "PFD", expr: "$\\sum \\vec{F}_{\\text{ext}} = m\\,\\vec{a}$", desc: "Référentiel galiléen" },
      { name: "Poids", expr: "$\\vec{P} = m\\,\\vec{g}$", desc: "$g \\approx 9{,}81$ m/s² vers le bas" },
      { name: "Force de frottement", expr: "$f \\leq \\mu N$", desc: "$\\mu$ : coeff. de frottement" },
      { name: "Projection axe $x$", expr: "$m\\,a_x = \\sum F_x$", desc: "Une équation par axe" },
    ],
    demonstrations: [
      "Plan incliné (angle $\\alpha$) : axe $x$ $\\Rightarrow ma = mg\\sin\\alpha - f$ ; axe $y$ $\\Rightarrow N = mg\\cos\\alpha$.",
      "Système Atwood : PFD pour chaque solide, additionner pour trouver $a$, isoler $T$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Démarche d\'application du PFD',
        chart: `graph TD
    A["1. Identifier le système"] --> B["2. Lister toutes les forces\n(Poids, N, T, f...)"]
    B --> C["3. Choisir un repère\n(axe ∥ mouvement)"]
    C --> D["4. Projeter ΣF = ma\nsur chaque axe"]
    D --> E["5. Résoudre le système\nd'équations"]
    E --> F["6. Vérifier les unités\net le signe de a"]
    style A fill:#1e293b,stroke:#38bdf8,color:#e2e8f0
    style D fill:#1e3a5f,stroke:#38bdf8,color:#38bdf8
    style F fill:#1a3a2a,stroke:#34d399,color:#34d399`,
      },
    ],
    tips: [
      "Toujours faire un schéma des forces (diagramme corps libre) AVANT d'écrire le PFD.",
      "Choisir les axes intelligemment : un axe dans la direction du mouvement.",
      "En équilibre : $\\sum \\vec{F} = \\vec{0}$.",
    ],
    remember: [
      "$\\sum \\vec{F}_{\\text{ext}} = m\\vec{a}$ dans un référentiel galiléen.",
      "Projeter sur les axes : autant d'équations que d'axes.",
      "Si $a = 0$ : immobile ou MRU.",
    ],
    extras: [],
  },
  {
    id: 7,
    title: "Mouvement dans un champ de pesanteur",
    icon: "🪂",
    color: "#a78bfa",
    definition: "Dans un champ de pesanteur uniforme, la seule force est le poids (frottements négligés). Le mouvement est la superposition d'un MRU horizontal et d'un MRUA vertical. Trajectoire parabolique.",
    formulas: [
      { name: "Équations horaires", expr: "$x(t) = v_0\\cos\\theta \\cdot t$\n$y(t) = v_0\\sin\\theta \\cdot t - \\tfrac{1}{2}gt^2$", desc: "" },
      { name: "Composantes de vitesse", expr: "$v_x = v_0\\cos\\theta$ (cste)\n$v_y(t) = v_0\\sin\\theta - gt$", desc: "" },
      { name: "Équation de trajectoire", expr: "$y = x\\tan\\theta - \\dfrac{gx^2}{2v_0^2\\cos^2\\theta}$", desc: "Parabole" },
      { name: "Hauteur maximale", expr: "$h_{\\max} = \\dfrac{v_0^2\\sin^2\\theta}{2g}$", desc: "Quand $v_y = 0$" },
      { name: "Portée", expr: "$x_{\\max} = \\dfrac{v_0^2\\sin(2\\theta)}{g}$", desc: "Maximale pour $\\theta = 45°$" },
      { name: "Temps de chute libre", expr: "$t_{\\text{chute}} = \\sqrt{\\dfrac{2h}{g}}$", desc: "" },
    ],
    demonstrations: [
      "Trajectoire parabolique : $t = x/(v_0\\cos\\theta) \\Rightarrow y = x\\tan\\theta - gx^2/(2v_0^2\\cos^2\\theta)$.",
      "Portée maximale pour $\\theta = 45°$ : $d(x_{\\max})/d\\theta = 0 \\Rightarrow \\cos(2\\theta) = 0 \\Rightarrow \\theta = 45°$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Cas particuliers importants',
        headers: ['Cas', 'θ', 'Équations simplifiées', 'Trajectory'],
        rows: [
          ['Lancer oblique', 'θ quelconque', 'x = v₀cosθ·t ; y = v₀sinθ·t − ½gt²', 'Parabole'],
          ['Lancer horizontal', 'θ = 0°', 'x = v₀t ; y = −½gt²', 'Parabole y = −gx²/(2v₀²)'],
          ['Chute libre', 'θ = 90°, v₀=0', 'y = −½gt² ; t = √(2h/g)', 'Verticale'],
        ],
      },
    ],
    tips: [
      "Lancer horizontal ($\\theta=0°$) : $x = v_0 t$, $y = -\\frac{1}{2}gt^2$.",
      "Symétrie : angles $\\theta$ et $(90°-\\theta)$ donnent la même portée.",
    ],
    remember: [
      "Horizontalement : MRU. Verticalement : MRUA ($a_y = -g$).",
      "Trajectoire = parabole.",
      "Portée maximale pour $\\theta = 45°$.",
    ],
    extras: [],
  },
  {
    id: 8,
    title: "Mouvement dans un champ électrostatique uniforme",
    icon: "⚡",
    color: "#f472b6",
    definition: "Dans un condensateur plan, une particule chargée subit F = qE. Le mouvement est rigoureusement analogue au projectile dans la pesanteur.",
    formulas: [
      { name: "Force électrique", expr: "$\\vec{F} = q\\,\\vec{E}$", desc: "$q$ (C), $E$ (V/m)" },
      { name: "Champ entre les plaques", expr: "$E = \\dfrac{U_{AB}}{d}$", desc: "$d$ : distance inter-plaques (m)" },
      { name: "Accélération", expr: "$a = \\dfrac{qE}{m}$", desc: "Selon l'axe du champ" },
      { name: "Équations horaires", expr: "$x(t) = v_0 t$\n$y(t) = \\tfrac{1}{2}\\dfrac{qE}{m}t^2$", desc: "" },
      { name: "Déviation", expr: "$y = \\dfrac{qE}{2mv_0^2}\\,x^2$", desc: "Parabole" },
      { name: "Énergie cinétique gagnée", expr: "$\\Delta E_c = q\\,U_{\\text{acc}}$", desc: "" },
    ],
    demonstrations: [
      "Trajectoire : PFD $\\Rightarrow a_y = qE/m$, $a_x = 0$ $\\Rightarrow$ éliminer $t$ $\\Rightarrow y = qEx^2/(2mv_0^2)$.",
      "Théorème énergie-travail : $W = qU_{\\text{acc}} \\Rightarrow \\Delta E_c = qU_{\\text{acc}}$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Analogie Pesanteur ↔ Champ électrique',
        headers: ['Pesanteur', 'Champ électrique'],
        rows: [
          ['Force : P = mg', 'Force : F = qE'],
          ['Accélération : g', 'Accélération : qE/m'],
          ['Lancer horizontal dans g', 'Entrée horizontale dans E'],
          ['Trajectoire parabolique', 'Trajectoire parabolique'],
          ['MRU horizontal + MRUA vertical', 'MRU ⊥ champ + MRUA ∥ champ'],
        ],
      },
    ],
    tips: [
      "Analogie TOTALE avec le projectile : $g \\leftrightarrow qE/m$.",
      "Si $q < 0$ (électron) : la force est OPPOSÉE au champ $\\vec{E}$.",
    ],
    remember: [
      "$\\vec{F} = q\\vec{E}$. $E = U/d$.",
      "MRU $\\perp$ champ, MRUA $\\parallel$ champ.",
    ],
    extras: [],
  },
  {
    id: 9,
    title: "Mouvement des satellites - Lois de Kepler",
    icon: "🛸",
    color: "#34d399",
    definition: "Les lois de Kepler décrivent le mouvement des planètes et satellites. Newton les unifie avec la gravitation universelle.",
    formulas: [
      { name: "Gravitation universelle", expr: "$F = G\\dfrac{m_1 m_2}{r^2}$", desc: "$G = 6{,}674 \\times 10^{-11}$ N·m²/kg²" },
      { name: "3ème loi de Kepler", expr: "$\\dfrac{T^2}{a^3} = \\dfrac{4\\pi^2}{GM}$", desc: "$M$ = masse corps central" },
      { name: "Vitesse orbitale circulaire", expr: "$v = \\sqrt{\\dfrac{GM}{r}}$", desc: "$r$ = rayon de l'orbite" },
      { name: "Période orbitale", expr: "$T = 2\\pi\\sqrt{\\dfrac{r^3}{GM}}$", desc: "" },
      { name: "Vitesse de libération", expr: "$v_{\\text{lib}} = \\sqrt{\\dfrac{2GM}{R}}$", desc: "" },
    ],
    demonstrations: [
      "3ème loi : $GMm/r^2 = m(2\\pi r/T)^2/r \\Rightarrow T^2 = 4\\pi^2 r^3/(GM)$.",
      "Vitesse orbitale : $v = \\sqrt{GM/r}$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: '3 lois de Kepler',
        headers: ['Loi', 'Énoncé', 'Formule clé'],
        rows: [
          ['1ère — Orbites', 'Les orbites sont des ellipses dont l\'astre central occupe un foyer', 'e = 0 → cercle'],
          ['2ème — Aires', 'Aires balayées en temps égaux sont égales', 'Vitesse ↑ au périhélie'],
          ['3ème — Périodes', 'T²/a³ = constante pour tous les corps du même système', 'T²/a³ = 4π²/(GM)'],
        ],
      },
      {
        type: 'mermaid',
        caption: 'Satellite géostationnaire — calcul de l\'altitude',
        chart: `graph LR
    A["T = 24h = 86 400 s"] --> B["3ème loi de Kepler\nT²/r³ = 4π²/(GM)"]
    B --> C["r³ = GMT²/(4π²)"]
    C --> D["r ≈ 42 164 km\n(depuis centre Terre)"]
    D --> E["Altitude h = r − R_Terre\nh ≈ 35 786 km"]
    style A fill:#1e293b,stroke:#34d399,color:#e2e8f0
    style E fill:#1a3a2a,stroke:#34d399,color:#34d399`,
      },
    ],
    tips: [
      "$r$ = $R_{\\text{planète}}$ + altitude. Ne pas confondre avec le rayon de la planète.",
      "La 3ème loi permet de comparer : $T_1^2/a_1^3 = T_2^2/a_2^3$.",
    ],
    remember: [
      "3 lois : ellipses / aires égales / $T^2/a^3 = \\text{cste}$.",
      "Orbite circulaire : $v = \\sqrt{GM/r}$ et $T^2 = 4\\pi^2 r^3/(GM)$.",
    ],
    extras: [],
  },
  {
    id: 10,
    title: "Description d'un système thermodynamique - Gaz parfait",
    icon: "🌡️",
    color: "#fbbf24",
    definition: "Le modèle du gaz parfait suppose des molécules ponctuelles sans interactions. Il décrit bien les gaz réels à basse pression et haute température.",
    formulas: [
      { name: "Équation d'état", expr: "$PV = nRT$", desc: "$R = 8{,}314$ J/(mol·K), $T$ en Kelvin !" },
      { name: "Conversion température", expr: "$T(\\text{K}) = \\theta(°C) + 273{,}15$", desc: "" },
      { name: "Boyle-Mariotte (isotherme)", expr: "$P_1 V_1 = P_2 V_2$", desc: "$T$ et $n$ constants" },
      { name: "Gay-Lussac (isochore)", expr: "$\\dfrac{P_1}{T_1} = \\dfrac{P_2}{T_2}$", desc: "$V$ et $n$ constants" },
      { name: "Charles (isobare)", expr: "$\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$", desc: "$P$ et $n$ constants" },
      { name: "Loi générale", expr: "$\\dfrac{P_1 V_1}{T_1} = \\dfrac{P_2 V_2}{T_2}$", desc: "$n$ constant" },
    ],
    demonstrations: [
      "Les lois de Boyle, Gay-Lussac et Charles se déduisent de $PV = nRT$ en fixant une variable.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Les 3 lois dérivées de PV = nRT',
        headers: ['Loi', 'Variable fixe', 'Relation', 'Type de transformation'],
        rows: [
          ['Boyle-Mariotte', 'T et n', 'P₁V₁ = P₂V₂', 'Isotherme'],
          ['Gay-Lussac', 'V et n', 'P₁/T₁ = P₂/T₂', 'Isochore'],
          ['Charles', 'P et n', 'V₁/T₁ = V₂/T₂', 'Isobare'],
        ],
      },
    ],
    tips: [
      "OBLIGATOIRE : convertir en Kelvin ! $T = 25°C \\Rightarrow T = 298$ K.",
      "Si deux variables changent : $P_1 V_1 / T_1 = P_2 V_2 / T_2$.",
    ],
    remember: [
      "$PV = nRT$. $R = 8{,}314$ J/(mol·K). $T$ TOUJOURS en Kelvin.",
      "Gaz parfait : $U$ dépend uniquement de $T$.",
    ],
    extras: [],
  },
  {
    id: 11,
    title: "Bilans d'énergie - Premier principe",
    icon: "🔥",
    color: "#38bdf8",
    definition: "Le premier principe est la loi de conservation de l'énergie : $\\Delta U = W + Q$. W et Q algébriques (positifs si reçus par le système).",
    formulas: [
      { name: "Premier principe", expr: "$\\Delta U = W + Q$", desc: "$W, Q > 0$ si REÇUS" },
      { name: "Travail isobare", expr: "$W = -P_{\\text{ext}} \\Delta V$", desc: "" },
      { name: "Capacité thermique massique", expr: "$Q = m\\,c\\,\\Delta T$", desc: "$c$ (J/kg/K)" },
      { name: "Capacité molaire", expr: "$Q = n\\,C_P\\,\\Delta T$", desc: "À $P$ constant" },
      { name: "Gaz parfait", expr: "$\\Delta U = n\\,C_V\\,\\Delta T$", desc: "$C_P - C_V = R$" },
      { name: "Enthalpie", expr: "$\\Delta H = Q_P$", desc: "Chaleur à $P$ constant" },
    ],
    demonstrations: [
      "Adiabatique ($Q=0$) : $\\Delta U = W$.",
      "Isochore ($\\Delta V=0$) : $W=0 \\Rightarrow \\Delta U = Q$.",
      "Gaz parfait : $\\Delta U = nC_V\\Delta T$ pour toute transformation.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Résumé des 4 transformations thermodynamiques',
        headers: ['Transformation', 'Condition', 'W', 'Q', 'ΔU'],
        rows: [
          ['Isotherme (GP)', 'T = cste', 'W = −Q', 'Q = −W', 'ΔU = 0'],
          ['Isobare', 'P = cste', '−PΔV', 'nCpΔT', 'nCvΔT'],
          ['Isochore', 'V = cste', '0', 'ΔU = Q', 'nCvΔT'],
          ['Adiabatique', 'Q = 0', 'ΔU = W', '0', 'W'],
        ],
      },
    ],
    tips: [
      "Convention : $W$ et $Q$ positifs si le système les REÇOIT.",
      "Gaz parfait : $\\Delta U = nC_V \\Delta T$ pour TOUTE transformation.",
    ],
    remember: [
      "$\\Delta U = W + Q$.",
      "Gaz parfait : $C_P - C_V = R$.",
      "Isotherme (GP) : $\\Delta U=0$. Isochore : $W=0$. Adiabatique : $Q=0$.",
    ],
    extras: [],
  },
  {
    id: 12,
    title: "Ondes mécaniques",
    icon: "🌊",
    color: "#a78bfa",
    definition: "Une onde mécanique est une perturbation qui se propage dans un milieu sans transport de matière, mais avec transport d'énergie.",
    formulas: [
      { name: "Relation fondamentale", expr: "$v = \\lambda f = \\dfrac{\\lambda}{T}$", desc: "$v$ (m/s), $\\lambda$ (m), $f$ (Hz)" },
      { name: "Période et fréquence", expr: "$T = \\dfrac{1}{f}$", desc: "" },
      { name: "Retard temporel", expr: "$\\tau = \\dfrac{d}{v}$", desc: "$d$ : distance de propagation" },
      { name: "Déphasage", expr: "$\\varphi = \\dfrac{2\\pi d}{\\lambda} = \\dfrac{2\\pi\\tau}{T}$", desc: "$\\varphi$ en radians" },
      { name: "En phase", expr: "$\\varphi = 2k\\pi$", desc: "$k \\in \\mathbb{Z}$" },
      { name: "En opposition de phase", expr: "$\\varphi = (2k+1)\\pi$", desc: "" },
    ],
    demonstrations: [
      "Mesure de $v$ : deux capteurs à distance $d$ connue, retard $\\tau$ mesuré $\\Rightarrow v = d/\\tau$.",
      "En phase si $d = k\\lambda$. En opposition si $d = (k+\\frac{1}{2})\\lambda$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Célérités typiques des ondes',
        headers: ['Milieu', 'Célérité (m/s)', 'Remarque'],
        rows: [
          ['Air (son)', '≈ 340', 'Dépend de T'],
          ['Eau (son)', '≈ 1500', ''],
          ['Acier (son)', '> 5000', ''],
          ['Vide (lumière)', '3×10⁸', 'c = constante universelle'],
        ],
      },
    ],
    tips: [
      "$v = \\lambda f$ : relation fondamentale.",
      "L'onde transporte de l'ÉNERGIE, pas de la matière.",
    ],
    remember: [
      "$v = \\lambda f$. $T = 1/f$.",
      "Retard $\\tau = d/v$. Déphasage $\\varphi = 2\\pi d/\\lambda$.",
    ],
    extras: [],
  },
  {
    id: 13,
    title: "Interférences et diffraction",
    icon: "🔬",
    color: "#34d399",
    definition: "La diffraction est l'étalement d'une onde au passage d'une ouverture. Les interférences résultent de la superposition de deux ondes cohérentes.",
    formulas: [
      { name: "Angle de diffraction", expr: "$\\theta \\approx \\dfrac{\\lambda}{a}$", desc: "$a$ : largeur de la fente" },
      { name: "Largeur tache centrale", expr: "$L = \\dfrac{2D\\lambda}{a}$", desc: "$D$ : distance fente-écran" },
      { name: "Interfranges (Young)", expr: "$i = \\dfrac{\\lambda D}{d}$", desc: "$d$ : distance inter-fentes" },
      { name: "Interférences constructives", expr: "$\\delta = k\\lambda$", desc: "$k \\in \\mathbb{Z}$" },
      { name: "Interférences destructives", expr: "$\\delta = \\left(k + \\tfrac{1}{2}\\right)\\lambda$", desc: "" },
      { name: "Différence de marche", expr: "$\\delta \\approx \\dfrac{d\\,y}{D}$", desc: "Petits angles" },
    ],
    demonstrations: [
      "Interfrange : $\\delta = k\\lambda \\Rightarrow y_k = k\\lambda D/d \\Rightarrow i = \\lambda D/d$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Fentes de Young — principe',
        chart: `graph LR
    S["Source\nmonochromatique"] --> F1["Fente S₁"]
    S --> F2["Fente S₂"]
    F1 -->|"δ = d·y/D"| E["Écran\nfranges d'interférence"]
    F2 --> E
    note1["Brillant : δ = kλ\ni = λD/d"] -.-> E
    note2["Sombre : δ = (k+½)λ"] -.-> E
    style S fill:#1e293b,stroke:#34d399,color:#e2e8f0
    style E fill:#1e293b,stroke:#fbbf24,color:#e2e8f0
    style F1 fill:#0f172a,stroke:#38bdf8,color:#94a3b8
    style F2 fill:#0f172a,stroke:#38bdf8,color:#94a3b8
    style note1 fill:#1a3a2a,stroke:#34d399,color:#34d399
    style note2 fill:#3a1a2a,stroke:#f472b6,color:#f472b6`,
      },
      {
        type: 'table',
        caption: 'Comparaison diffraction / interférences',
        headers: ['Phénomène', 'Cause', 'Formule clé', 'Effet si λ ou a varient'],
        rows: [
          ['Diffraction', '1 fente de largeur a', 'θ = λ/a', 'a ↓ → θ ↑ (plus étalé)'],
          ['Interférences', '2 fentes séparées de d', 'i = λD/d', 'd ↓ → i ↑ (plus espacé)'],
        ],
      },
    ],
    tips: [
      "Lumière blanche : frange centrale BLANCHE, autres franges irisées.",
      "Diffraction visible si $\\lambda \\approx a$.",
    ],
    remember: [
      "Constructives : $\\delta = k\\lambda$. Destructives : $\\delta = (k+\\frac{1}{2})\\lambda$.",
      "Interfrange : $i = \\lambda D/d$.",
    ],
    extras: [],
  },
  {
    id: 14,
    title: "Lunette astronomique",
    icon: "🔭",
    color: "#fbbf24",
    definition: "La lunette astronomique est formée d'un objectif (grande focale) et d'un oculaire (petite focale). En réglage afocal : objet à l'infini → image à l'infini.",
    formulas: [
      { name: "Grossissement (afocal)", expr: "$G = \\dfrac{f'_{\\text{obj}}}{f'_{\\text{oc}}}$", desc: "" },
      { name: "Longueur de la lunette", expr: "$L = f'_{\\text{obj}} + f'_{\\text{oc}}$", desc: "" },
      { name: "Vergence", expr: "$V = \\dfrac{1}{f'}$ (dioptries)", desc: "$f'$ en MÈTRES" },
      { name: "Conjugaison", expr: "$\\dfrac{1}{\\overline{OA'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f'}$", desc: "" },
    ],
    demonstrations: [
      "Réglage afocal : $F'_{\\text{obj}}$ coïncide avec $F_{\\text{oc}}$ $\\Rightarrow G = f'_{\\text{obj}}/f'_{\\text{oc}}$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Trajet des rayons en réglage afocal',
        chart: `graph LR
    O["Objet à l'infini\n(rayons parallèles)"] --> Obj["Objectif\n(grande focale f'obj)"]
    Obj -->|"image intermédiaire\nen F'obj = Foc"| Inter["F'obj ≡ Foc"]
    Inter --> Oc["Oculaire\n(petite focale f'oc)"]
    Oc --> I["Image finale\nà l'infini"]
    G["G = f'obj / f'oc"] -.-> Oc
    L["L = f'obj + f'oc"] -.-> Inter
    style O fill:#1e293b,stroke:#fbbf24,color:#e2e8f0
    style Inter fill:#3a2a00,stroke:#fbbf24,color:#fbbf24
    style I fill:#1e293b,stroke:#34d399,color:#e2e8f0`,
      },
    ],
    tips: [
      "Objectif : grande focale (collecte lumière). Oculaire : petite focale (grossit).",
      "Pour augmenter $G$ : oculaire de focale plus petite.",
    ],
    remember: [
      "$G = f'_{\\text{obj}} / f'_{\\text{oc}}$ (afocal).",
      "Condition afocale : $F'_{\\text{obj}} = F_{\\text{oc}}$.",
    ],
    extras: [],
  },
  {
    id: 15,
    title: "Modèle du photon - Effet photoélectrique",
    icon: "💡",
    color: "#38bdf8",
    definition: "Le modèle corpusculaire décrit la lumière comme des photons d'énergie E = hf. L'effet photoélectrique ne s'explique que par ce modèle (Einstein, 1905).",
    formulas: [
      { name: "Énergie d'un photon", expr: "$E = hf = \\dfrac{hc}{\\lambda}$", desc: "$h = 6{,}626 \\times 10^{-34}$ J·s" },
      { name: "Effet photoélectrique", expr: "$E_{c,\\max} = hf - W_s$", desc: "$W_s$ : travail de sortie" },
      { name: "Condition d'émission", expr: "$hf \\geq W_s \\Leftrightarrow f \\geq f_s$", desc: "" },
      { name: "Fréquence seuil", expr: "$f_s = \\dfrac{W_s}{h}$", desc: "" },
      { name: "Tension d'arrêt", expr: "$eU_a = E_{c,\\max}$", desc: "$e = 1{,}6 \\times 10^{-19}$ C" },
      { name: "Conversion", expr: "$1\\,\\text{eV} = 1{,}6 \\times 10^{-19}$ J", desc: "" },
    ],
    demonstrations: [
      "1 photon donne $hf$ à 1 électron. Si $hf \\geq W_s \\Rightarrow E_{c,\\max} = hf - W_s$.",
      "Graphe $E_{c,\\max} = f(f)$ → droite de pente $h$, ordonnée $= -W_s$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Mécanisme de l\'effet photoélectrique',
        chart: `graph TD
    P["Photon hf"] --> C{"hf ≥ Ws ?"}
    C -->|"Oui"| E["Électron émis\nEc,max = hf − Ws"]
    C -->|"Non (f < fs)"| N["Aucun électron\nmême avec forte intensité"]
    E --> UA["Tension d'arrêt\neUa = Ec,max"]
    style P fill:#1e293b,stroke:#38bdf8,color:#e2e8f0
    style C fill:#3a2a00,stroke:#fbbf24,color:#fbbf24
    style E fill:#1a3a2a,stroke:#34d399,color:#34d399
    style N fill:#3a1a1a,stroke:#f87171,color:#f87171`,
      },
    ],
    tips: [
      "Convertir $W_s$ en J : $W_s(\\text{J}) = W_s(\\text{eV}) \\times 1{,}6 \\times 10^{-19}$.",
      "Graphe $E_{c,\\max} = f(f)$ : pente $= h$.",
    ],
    remember: [
      "$E_{\\text{photon}} = hf = hc/\\lambda$.",
      "1 photon $\\rightarrow$ 1 électron. Intensité = nombre de photons/s.",
    ],
    extras: [],
  },
  {
    id: 16,
    title: "Circuit RC - Dynamique d'un système électrique",
    icon: "🔌",
    color: "#a78bfa",
    definition: "Un circuit RC est un système du premier ordre. La charge/décharge suit une loi exponentielle caractérisée par la constante de temps τ = RC.",
    formulas: [
      { name: "Constante de temps", expr: "$\\tau = R \\times C$", desc: "$R$ (Ω), $C$ (F) $\\Rightarrow \\tau$ (s)" },
      { name: "Charge", expr: "$u_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$", desc: "" },
      { name: "Décharge", expr: "$u_C(t) = U_0\\,e^{-t/\\tau}$", desc: "" },
      { name: "Courant (charge)", expr: "$i(t) = \\dfrac{E}{R}\\,e^{-t/\\tau}$", desc: "" },
      { name: "Équation différentielle", expr: "$RC\\,\\dfrac{du_C}{dt} + u_C = E$", desc: "" },
      { name: "Énergie stockée", expr: "$E_C = \\dfrac{1}{2}\\,C\\,u_C^2$", desc: "" },
    ],
    demonstrations: [
      "Loi des mailles : $E = RC\\,du_C/dt + u_C$.",
      "Solution : $u_C(t) = E(1-e^{-t/\\tau})$ avec CI $u_C(0) = 0$.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Comportement du condensateur selon le régime',
        headers: ['Instant / Régime', 'uC', 'i (courant)', 'Comportement équivalent'],
        rows: [
          ['t = 0 (déchargé)', '0', 'E/R (max)', 'Court-circuit'],
          ['t = τ', '0,63 E', '0,37 E/R', '—'],
          ['t = 5τ (permanent)', '≈ E', '≈ 0', 'Interrupteur ouvert'],
        ],
      },
    ],
    tips: [
      "Tangente à l'origine intersecte l'asymptote en $t = \\tau$ : méthode graphique.",
      "En régime permanent : condensateur = interrupteur ouvert.",
    ],
    remember: [
      "$\\tau = RC$ en secondes.",
      "À $t = \\tau$ : 63% de la valeur finale. À $t = 5\\tau$ : régime permanent.",
    ],
    extras: [],
  },
  {
    id: 17,
    title: "Transferts quantiques d'énergie",
    icon: "⚛️",
    color: "#f472b6",
    definition: "Dans le modèle de Bohr, les électrons occupent des niveaux d'énergie discrets. Les transitions entre niveaux s'accompagnent d'émission ou d'absorption de photons.",
    formulas: [
      { name: "Énergie du photon", expr: "$hf = |E_f - E_i|$", desc: "$\\lambda = hc/|\\Delta E|$" },
      { name: "Niveaux de l'hydrogène", expr: "$E_n = \\dfrac{-13{,}6}{n^2}$ eV", desc: "$n = 1, 2, 3, \\ldots$" },
      { name: "Énergie d'ionisation", expr: "$E_{\\text{ion}} = 13{,}6$ eV", desc: "Pour l'hydrogène" },
      { name: "Conversion", expr: "$1\\,\\text{eV} = 1{,}6 \\times 10^{-19}$ J", desc: "" },
    ],
    demonstrations: [
      "Émission : $n_i \\to n_f$ ($n_i > n_f$) $\\Rightarrow$ photon émis $hf = E_{n_i} - E_{n_f}$.",
      "Séries : Lyman ($n_f=1$, UV), Balmer ($n_f=2$, visible).",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Niveaux d\'énergie de l\'hydrogène',
        headers: ['n', 'Énergie (eV)', 'Série émise (transition vers ce niveau)', 'Domaine'],
        rows: [
          ['1', '−13,6', 'Lyman (depuis n≥2)', 'UV'],
          ['2', '−3,40', 'Balmer (depuis n≥3)', 'Visible'],
          ['3', '−1,51', 'Paschen (depuis n≥4)', 'IR'],
          ['4', '−0,85', 'Brackett (depuis n≥5)', 'IR'],
          ['∞', '0', '— (ionisation)', '—'],
        ],
      },
    ],
    tips: [
      "Balmer (visible) : transitions vers $n=2$, longueurs d'onde dans 400–700 nm.",
      "Convertir : $\\Delta E(\\text{J}) = \\Delta E(\\text{eV}) \\times 1{,}6 \\times 10^{-19}$.",
    ],
    remember: [
      "$hf = |\\Delta E|$. $\\lambda = hc/|\\Delta E|$.",
      "Niveaux H : $E_n = -13{,}6/n^2$ eV.",
    ],
    extras: [],
  },
  {
    id: 18,
    title: "Analyse spectrale",
    icon: "🌈",
    color: "#34d399",
    definition: "L'analyse spectrale étudie la lumière émise ou absorbée pour déduire la composition d'une substance. La loi de Beer-Lambert permet le dosage par spectrophotométrie.",
    formulas: [
      { name: "Relation f et λ", expr: "$c = \\lambda f$", desc: "$c = 3 \\times 10^8$ m/s" },
      { name: "Loi de Wien", expr: "$\\lambda_{\\max} \\times T = 2{,}898 \\times 10^{-3}$ m·K", desc: "" },
      { name: "Beer-Lambert", expr: "$A = \\varepsilon \\cdot l \\cdot C$", desc: "$A$ : absorbance" },
      { name: "Absorbance", expr: "$A = \\log\\dfrac{I_0}{I}$", desc: "" },
    ],
    demonstrations: [
      "Beer-Lambert : $A = f(C)$ est une droite (courbe d'étalonnage).",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Types de spectres',
        headers: ['Type', 'Source', 'Aspect', 'Utilisation'],
        rows: [
          ['Continu', 'Corps incandescent', 'Arc-en-ciel complet', 'Loi de Wien (T de l\'étoile)'],
          ['Émission', 'Atome excité', 'Raies brillantes sur fond sombre', 'Identification d\'éléments'],
          ['Absorption', 'Lumière blanche + atomes froids', 'Raies sombres sur fond continu', 'Composition atmosphère stellaire'],
        ],
      },
    ],
    tips: [
      "Choisir $\\lambda_{\\max}$ (max d'absorption) pour maximiser la sensibilité.",
      "Courbe d'étalonnage : $A = f(C)$ droite si $A < 1$.",
    ],
    remember: [
      "Chaque élément a un spectre unique (signature spectrale).",
      "Beer-Lambert : $A = \\varepsilon l C$. $A \\propto C$.",
    ],
    extras: [],
  },
  {
    id: 19,
    title: "Méthodes physiques d'analyse",
    icon: "🔍",
    color: "#fbbf24",
    definition: "Les méthodes physiques d'analyse permettent d'identifier et de doser des composés. Au programme : spectroscopie IR, RMN ¹H, chromatographie CCM.",
    formulas: [
      { name: "Déplacement chimique (RMN)", expr: "$\\delta\\,(\\text{ppm}) = \\dfrac{\\nu_{\\text{obs}} - \\nu_{\\text{ref}}}{\\nu_{\\text{spectro}}} \\times 10^6$", desc: "Référence TMS = 0 ppm" },
      { name: "Multiplicité ($n+1$)", expr: "$\\text{multiplet} = n+1$ raies", desc: "$n$ = H voisins" },
      { name: "Rf (CCM)", expr: "$R_f = \\dfrac{d_{\\text{composé}}}{d_{\\text{front}}}$", desc: "$0 < R_f < 1$" },
      { name: "Nombre d'onde (IR)", expr: "$\\tilde{\\nu} = \\dfrac{1}{\\lambda}$ (cm⁻¹)", desc: "" },
    ],
    demonstrations: [
      "IR : identifier un groupe fonctionnel par les bandes d'absorption.",
      "RMN : structure depuis $\\delta$, multiplicité ($n+1$), intégration.",
    ],
    schemas: [
      {
        type: 'table',
        caption: 'Spectroscopie IR — Bandes caractéristiques',
        headers: ['ν̃ (cm⁻¹)', 'Liaison', 'Groupe fonctionnel'],
        rows: [
          ['3200–3600', 'O–H (large)', 'Alcool'],
          ['2500–3300', 'O–H (très large)', 'Acide carboxylique'],
          ['2850–2960', 'C–H', 'Alcane'],
          ['1700–1750', 'C=O (fine)', 'Cétone, aldéhyde, ester, acide'],
          ['1600–1680', 'C=C', 'Alcène'],
          ['1000–1200', 'C–O', 'Alcool, ester'],
        ],
      },
      {
        type: 'table',
        caption: 'RMN ¹H — Déplacements chimiques typiques',
        headers: ['Environnement', 'δ (ppm)', 'Exemple'],
        rows: [
          ['TMS (référence)', '0', '—'],
          ['CH₃ (alkyle)', '0,9 – 1,0', 'CH₃-R'],
          ['CH₂ (alkyle)', '1,2 – 1,4', '-CH₂-'],
          ['C=C–H (alcène)', '4,5 – 6,5', 'H₂C=CH₂'],
          ['Ar–H (aromatique)', '6,5 – 8,5', 'Benzène'],
          ['CHO (aldéhyde)', '9 – 10', 'RCHO'],
          ['COOH', '10 – 12', 'Acide carboxylique'],
        ],
      },
    ],
    tips: [
      "IR : bande LARGE $\\approx 3300$ cm⁻¹ $\\Rightarrow$ O–H (alcool). Fine $\\approx 1700$ cm⁻¹ $\\Rightarrow$ C=O.",
      "RMN : triplet = 2 voisins H. Intégration $\\propto$ nombre de H.",
    ],
    remember: [
      "IR : C=O $\\approx 1700$ cm⁻¹, O–H $\\approx 3300$ cm⁻¹.",
      "RMN $^1H$ : $\\delta$, multiplicité ($n+1$), intégration.",
      "$R_f$ identique = même composé (même éluant).",
    ],
    extras: [],
  },
  {
    id: 20,
    title: "Utilisation de Python pour la modélisation",
    icon: "🐍",
    color: "#38bdf8",
    definition: "Python (numpy, matplotlib, scipy) est utilisé pour modéliser des phénomènes physiques, résoudre numériquement des EDO, et analyser des données expérimentales.",
    formulas: [
      { name: "Méthode d'Euler", expr: "$y(t+h) = y(t) + h \\cdot f(t,\\,y(t))$", desc: "$h$ : pas de temps" },
      { name: "Régression linéaire", expr: "np.polyfit(x, y, 1)", desc: "Retourne [pente, ordonnée]" },
    ],
    demonstrations: [
      "Euler : $v(t+h) = v(t) + h \\cdot a(t)$, puis $x(t+h) = x(t) + h \\cdot v(t)$.",
    ],
    schemas: [
      {
        type: 'mermaid',
        caption: 'Workflow de modélisation numérique en Python',
        chart: `graph TD
    A["Définir le problème\n(EDO, conditions initiales)"] --> B["Choisir le pas h\n(compromis précision/vitesse)"]
    B --> C["Boucle d'Euler\ny(t+h) = y(t) + h·f(t,y)"]
    C --> D["Stocker les résultats\nt_list, y_list, v_list"]
    D --> E["Tracer avec matplotlib\nplt.plot(t, y)"]
    E --> F["Valider\n(comparer solution analytique)"]
    style A fill:#1e293b,stroke:#38bdf8,color:#e2e8f0
    style C fill:#1e3a5f,stroke:#38bdf8,color:#38bdf8
    style F fill:#1a3a2a,stroke:#34d399,color:#34d399`,
      },
      {
        type: 'text',
        text: `Algorithme d'Euler (chute libre) :\n\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ng = 9.81    # m/s²\nh = 0.01    # pas de temps (s)\n\nt_list = [0.0]\ny_list = [0.0]   # position initiale\nv_list = [0.0]   # vitesse initiale\n\nfor i in range(1000):\n    a = -g\n    v_list.append(v_list[-1] + h * a)\n    y_list.append(y_list[-1] + h * v_list[-2])\n    t_list.append(t_list[-1] + h)\n\nplt.plot(t_list, y_list)\nplt.xlabel('t (s)') ; plt.ylabel('y (m)')\nplt.show()`,
      },
    ],
    tips: [
      "Plus $h$ est petit $\\Rightarrow$ plus précis mais plus lent.",
      "scipy.integrate.odeint est plus précis qu'Euler.",
    ],
    remember: [
      "$y(t+h) = y(t) + h \\cdot f(t, y)$ : méthode d'Euler.",
      "numpy : calculs. matplotlib : graphiques. scipy : méthodes avancées.",
    ],
    extras: [],
  },
];