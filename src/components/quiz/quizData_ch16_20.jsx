import { buildCorrection } from './quizEngine';

// ─── CHAPITRE 16 : Transferts thermiques ─────────────────────────────────────
export const quizCh16 = [
  {
    id: 'ch16_1', chapter: 16, type: 1,
    question: "La loi de refroidissement de Newton (en régime conducto-convectif) s'écrit :",
    options: ["φ = hS(T − T_ext)", "φ = hS(T_ext − T)", "φ = e/(λS)", "φ = mcΔT"],
    correct: 1,
    correction: buildCorrection({
      answer: "φ = hS(T_ext − T)",
      explanation: "Le flux thermique reçu par le système est φ = hS(T_ext − T). Si T > T_ext, φ < 0 (l'objet perd de l'énergie).",
      memo: "φ = hS(T_ext − T). Positif si T_ext > T (l'objet se réchauffe).",
      trap: "Ne pas inverser T et T_ext : si T > T_ext, φ < 0 (refroidissement).",
      technique: "Loi de Newton : flux ∝ différence de température.",
      bacLink: "Refroidissement de Newton"
    })
  },
  {
    id: 'ch16_2', chapter: 16, type: 4,
    question: "Un objet se refroidit selon T(t) = T_ext + (T₀ − T_ext)e^(−t/τ). Si T₀ = 80°C, T_ext = 20°C, τ = 10 min, quelle est T à t = 10 min ?",
    options: ["62°C", "42,1°C", "50°C", "20°C"],
    correct: 1,
    correction: buildCorrection({
      answer: "42,1°C",
      explanation: "T(τ) = 20 + (80−20)e⁻¹ = 20 + 60 × 0,368 = 20 + 22,1 = 42,1°C.",
      memo: "À t = τ : T = T_ext + (T₀−T_ext)/e ≈ T_ext + 0,368×(T₀−T_ext).",
      trap: "e⁻¹ ≈ 0,368, pas 0,5 (ce serait t = t₁/₂ = τ×ln2).",
      technique: "T(τ) = T_ext + (T₀−T_ext)×e⁻¹.",
      bacLink: "Refroidissement — calcul à t = τ"
    })
  },
  {
    id: 'ch16_3', chapter: 16, type: 2,
    question: "Le transfert thermique se fait spontanément du corps froid vers le corps chaud.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Spontanément, la chaleur passe toujours du corps CHAUD vers le corps FROID. C'est le 2ème principe de la thermodynamique.",
      memo: "Chaleur spontanée : chaud → froid. Jamais l'inverse sans travail.",
      trap: "Les réfrigérateurs transfèrent du froid vers du chaud mais en consommant de l'énergie.",
      technique: "2ème principe : irréversibilité naturelle.",
      bacLink: "Transferts thermiques — sens spontané"
    })
  },
  {
    id: 'ch16_4', chapter: 16, type: 1,
    question: "La résistance thermique d'une paroi d'épaisseur e, conductivité λ et surface S est :",
    options: ["R_th = λS/e", "R_th = e/(λS)", "R_th = eλ/S", "R_th = e/(λ)"],
    correct: 1,
    correction: buildCorrection({
      answer: "R_th = e/(λS)",
      explanation: "R_th = e/(λS) en K/W. Analogie avec R électrique = ρL/S.",
      memo: "R_th = e/(λS). Flux : φ = (T₁−T₂)/R_th.",
      trap: "e au numérateur, λS au dénominateur.",
      technique: "Analogie loi d'Ohm : U = RI ↔ ΔT = R_th × φ.",
      bacLink: "Résistance thermique — conduction"
    })
  },
  {
    id: 'ch16_5', chapter: 16, type: 19,
    question: "Comment déterminer graphiquement la constante de temps τ de refroidissement ?",
    options: ["Lecture de la valeur maximale", "La tangente à l'origine de T(t) coupe l'asymptote T_ext en t = τ", "La valeur de T à t = 5 min", "En cherchant T = T_ext/2"],
    correct: 1,
    correction: buildCorrection({
      answer: "La tangente à l'origine de T(t) coupe l'asymptote T_ext en t = τ",
      explanation: "Méthode graphique standard : tracer la tangente en t = 0 à la courbe T(t). Elle intercepte l'asymptote horizontale T_ext à t = τ.",
      memo: "τ : tangente origine ∩ asymptote T_ext.",
      trap: "Ne pas lire τ comme le temps pour atteindre T_ext (jamais atteint en théorie).",
      technique: "Ou lire t pour T = T_ext + (T₀−T_ext)/e ≈ T_ext + 0,368(T₀−T_ext).",
      bacLink: "Détermination graphique de τ"
    })
  },
  {
    id: 'ch16_6', chapter: 16, type: 16,
    question: "Quels sont les trois modes de transfert thermique ?",
    options: ["Conduction, convection, diffusion", "Conduction, convection, rayonnement", "Advection, conduction, rayonnement", "Convection, rayonnement, induction"],
    correct: 1,
    correction: buildCorrection({
      answer: "Conduction, convection, rayonnement",
      explanation: "Conduction (solide-solide), convection (solide-fluide en mouvement), rayonnement (photons, sans milieu matériel).",
      memo: "3 modes : CON-duction, CON-vection, RAY-onnement.",
      trap: "La diffusion est un processus de transport de matière, pas un transfert thermique.",
      technique: "Au Bac : conduction et convection sont les plus étudiées.",
      bacLink: "Transferts thermiques — 3 modes"
    })
  },
  {
    id: 'ch16_7', chapter: 16, type: 4,
    question: "τ = C/(hS). Un objet a C = 500 J/K, h = 20 W/(m²·K), S = 0,05 m². Quelle est τ ?",
    options: ["500 s", "250 s", "1000 s", "2 s"],
    correct: 0,
    correction: buildCorrection({
      answer: "500 s",
      explanation: "τ = C/(hS) = 500/(20 × 0,05) = 500/1 = 500 s.",
      memo: "τ = C/(hS). C = mc en J/K.",
      trap: "Ne pas confondre C (capacité thermique totale, J/K) et c (massique, J/kg/K).",
      technique: "τ = C/(hS). Si τ grand → refroidissement lent.",
      bacLink: "Constante de temps de refroidissement"
    })
  },
  {
    id: 'ch16_8', chapter: 16, type: 5,
    question: "Augmenter l'épaisseur d'isolant d'un mur diminue le flux thermique qui le traverse.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "R_th = e/(λS) : si e ↑ → R_th ↑ → φ = ΔT/R_th ↓. Plus l'isolant est épais, moins de chaleur passe.",
      memo: "e ↑ → R_th ↑ → φ ↓ (meilleure isolation).",
      trap: "On peut aussi diminuer λ (choisir un matériau moins conducteur).",
      technique: "Isolation : maximiser R_th en augmentant e ou en choisissant un faible λ.",
      bacLink: "Isolation thermique — résistance thermique"
    })
  },
  {
    id: 'ch16_9', chapter: 16, type: 7,
    question: "La pente de la courbe T(t) en t=0 vaut dT/dt|₀. Qu'est-ce que cela donne pour τ ?",
    options: ["τ = T₀/(−dT/dt|₀)", "τ = (T₀−T_ext)/(−dT/dt|₀)", "τ = T_ext·(dT/dt|₀)", "τ = (dT/dt|₀)/T₀"],
    correct: 1,
    correction: buildCorrection({
      answer: "τ = (T₀−T_ext)/(−dT/dt|₀)",
      explanation: "T(t) = T_ext + (T₀−T_ext)e^(−t/τ). dT/dt|₀ = −(T₀−T_ext)/τ → τ = (T₀−T_ext)/(−dT/dt|₀).",
      memo: "Pente initiale = −(T₀−T_ext)/τ → τ = −(T₀−T_ext)/pente.",
      trap: "La pente est négative (refroidissement) → le signe − donne τ positif.",
      technique: "Tracer la tangente en 0, lire la pente, calculer τ.",
      bacLink: "Méthode de la tangente — détermination de τ"
    })
  },
  {
    id: 'ch16_10', chapter: 16, type: 1,
    question: "L'analogie thermique-électrique associe le flux thermique φ à :",
    options: ["La tension U", "L'intensité I", "La résistance R", "La charge Q"],
    correct: 1,
    correction: buildCorrection({
      answer: "L'intensité I",
      explanation: "Analogie : φ (W) ↔ I (A), ΔT (K) ↔ U (V), R_th (K/W) ↔ R (Ω). Loi d'Ohm thermique : ΔT = R_th × φ.",
      memo: "φ ↔ I. ΔT ↔ U. R_th ↔ R. Loi d'Ohm : ΔT = R_th × φ.",
      trap: "Ne pas inverser φ et ΔT dans l'analogie.",
      technique: "ΔT = R_th × φ ↔ U = R × I.",
      bacLink: "Analogie thermique-électrique"
    })
  },
];

// ─── CHAPITRE 17 : Phénomènes ondulatoires ───────────────────────────────────
export const quizCh17 = [
  {
    id: 'ch17_1', chapter: 17, type: 1,
    question: "L'interfrange dans le dispositif des trous de Young est :",
    options: ["i = λb/D", "i = λD/b", "i = bD/λ", "i = D/(λb)"],
    correct: 1,
    correction: buildCorrection({
      answer: "i = λD/b",
      explanation: "L'interfrange i = λD/b, où λ = longueur d'onde, D = distance fentes-écran, b = séparation des fentes.",
      memo: "i = λD/b. Si λ↑ ou D↑ ou b↓ → i↑.",
      trap: "Ne pas inverser b et D.",
      technique: "Franges brillantes : δ = nλ → xₙ = nλD/b → i = λD/b.",
      bacLink: "Trous de Young — interfrange"
    })
  },
  {
    id: 'ch17_2', chapter: 17, type: 4,
    question: "Trous de Young : λ = 600 nm, D = 2 m, b = 0,3 mm. Quelle est l'interfrange i ?",
    options: ["4 mm", "2 mm", "6 mm", "1 mm"],
    correct: 0,
    correction: buildCorrection({
      answer: "4 mm",
      explanation: "i = λD/b = (600×10⁻⁹ × 2)/(0,3×10⁻³) = 1,2×10⁻⁶/3×10⁻⁴ = 4×10⁻³ m = 4 mm.",
      memo: "i = λD/b. Convertir toutes les unités en SI.",
      trap: "Convertir nm en m (×10⁻⁹) et mm en m (×10⁻³).",
      technique: "i = (600e-9 × 2) / (0,3e-3) = 4e-3 m = 4 mm.",
      bacLink: "Calcul d'interfrange — Bac"
    })
  },
  {
    id: 'ch17_3', chapter: 17, type: 2,
    question: "Les interférences constructives se produisent quand la différence de marche δ = nλ.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "δ = nλ (n entier) → les ondes arrivent en phase → interférences constructives (frange brillante).",
      memo: "Constructif : δ = nλ. Destructif : δ = (n+½)λ.",
      trap: "Destructif = (2n+1)λ/2 = (n+½)λ, pas nλ.",
      technique: "δ = bx/D. Frange brillante : x = nλD/b.",
      bacLink: "Conditions d'interférence"
    })
  },
  {
    id: 'ch17_4', chapter: 17, type: 1,
    question: "La diffraction est observable quand :",
    options: ["λ >> a (longueur d'onde très grande devant l'obstacle)", "λ ≈ a (longueur d'onde comparable à la taille de l'obstacle)", "λ << a", "Pour toutes les valeurs de λ"],
    correct: 1,
    correction: buildCorrection({
      answer: "λ ≈ a",
      explanation: "La diffraction est maximale quand λ ≈ a. Si λ << a, la lumière passe presque en ligne droite.",
      memo: "Diffraction : λ ≈ a. Écart angulaire θ = λ/a.",
      trap: "Si a très grand devant λ (ex: porte), pas de diffraction visible.",
      technique: "θ = λ/a. Si a ↓ → θ ↑ (plus étalé).",
      bacLink: "Diffraction — condition d'observation"
    })
  },
  {
    id: 'ch17_5', chapter: 17, type: 4,
    question: "Le niveau sonore passe de L₁ = 60 dB à L₂ = 90 dB. Par combien l'intensité a-t-elle été multipliée ?",
    options: ["30", "3", "1000", "100"],
    correct: 2,
    correction: buildCorrection({
      answer: "1000",
      explanation: "ΔL = 90 − 60 = 30 dB = 10log(I₂/I₁) → log(I₂/I₁) = 3 → I₂/I₁ = 10³ = 1000.",
      memo: "+10 dB → ×10 en intensité. +30 dB → ×1000.",
      trap: "ΔL = 30 dB ne signifie pas ×30 mais ×10^(30/10) = ×1000.",
      technique: "ΔL = 10log(I₂/I₁) → I₂/I₁ = 10^(ΔL/10).",
      bacLink: "Niveau sonore — calcul logarithmique"
    })
  },
  {
    id: 'ch17_6', chapter: 17, type: 5,
    question: "En lumière blanche, toutes les franges d'interférence sont blanches.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "Seule la frange centrale (δ = 0 pour toutes λ) est blanche. Les autres franges sont irisées car chaque λ donne son propre interfrange.",
      memo: "Lumière blanche : frange centrale blanche, autres franges irisées.",
      trap: "Lumière monochromatique → franges de même couleur.",
      technique: "Chaque λ produit son pattern d'interférences décalé.",
      bacLink: "Interférences en lumière blanche"
    })
  },
  {
    id: 'ch17_7', chapter: 17, type: 7,
    question: "Une fente de largeur a = 0,1 mm est éclairée par λ = 500 nm. À D = 3 m, quelle est la largeur de la tache centrale ?",
    options: ["3 mm", "30 mm", "15 mm", "6 mm"],
    correct: 1,
    correction: buildCorrection({
      answer: "30 mm",
      explanation: "Largeur tache centrale L = 2Dλ/a = 2 × 3 × 500×10⁻⁹ / (0,1×10⁻³) = 3×10⁻³/10⁻⁴ = 30×10⁻³ m = 30 mm.",
      memo: "Largeur tache centrale = 2Dλ/a.",
      trap: "Facteur 2 car la tache centrale est 2 fois l'interfrange de diffraction.",
      technique: "L = 2Dθ = 2D(λ/a) = 2Dλ/a.",
      bacLink: "Diffraction — taille de la tache centrale"
    })
  },
  {
    id: 'ch17_8', chapter: 17, type: 16,
    question: "Qu'est-ce que l'effet Doppler ?",
    options: ["La déviation de la lumière par un obstacle", "La variation de fréquence perçue due au mouvement relatif source-observateur", "Les interférences entre deux sources", "L'atténuation du son avec la distance"],
    correct: 1,
    correction: buildCorrection({
      answer: "La variation de fréquence perçue due au mouvement relatif source-observateur",
      explanation: "Si source et observateur se rapprochent → f perçue > f émise. S'ils s'éloignent → f perçue < f émise.",
      memo: "Doppler : rapprochement → f ↑ (son plus aigu). Éloignement → f ↓.",
      trap: "L'effet Doppler change la fréquence perçue, pas la vitesse de l'onde.",
      technique: "Application : radar de vitesse, décalage spectral des galaxies.",
      bacLink: "Effet Doppler"
    })
  },
  {
    id: 'ch17_9', chapter: 17, type: 19,
    question: "Pourquoi augmenter la séparation b entre les fentes diminue-t-elle l'interfrange i ?",
    options: ["Parce que les fentes sont plus éloignées donc les ondes interfèrent moins", "Parce que i = λD/b : b au dénominateur, si b ↑ → i ↓", "Parce que la longueur d'onde change", "Parce que D change"],
    correct: 1,
    correction: buildCorrection({
      answer: "Parce que i = λD/b : b au dénominateur, si b ↑ → i ↓",
      explanation: "i = λD/b. Si b double, i est divisé par 2. Les franges se resserrent quand les fentes s'écartent.",
      memo: "i ∝ 1/b. b ↑ → i ↓ (franges plus serrées).",
      trap: "Intuitivement contre-intuitif mais mathématiquement direct via i = λD/b.",
      technique: "Tracer i en fonction de 1/b pour trouver λ graphiquement.",
      bacLink: "Young — influence de b sur i"
    })
  },
  {
    id: 'ch17_10', chapter: 17, type: 1,
    question: "L'intensité I₀ de référence pour le niveau sonore est :",
    options: ["1 W/m²", "10⁻¹² W/m²", "10⁻⁶ W/m²", "10⁻³ W/m²"],
    correct: 1,
    correction: buildCorrection({
      answer: "10⁻¹² W/m²",
      explanation: "I₀ = 10⁻¹² W/m² est le seuil d'audibilité humain à 1000 Hz. L(dB) = 10log(I/I₀).",
      memo: "I₀ = 10⁻¹² W/m². L = 10log(I/I₀).",
      trap: "Ne pas confondre avec I = 1 W/m² (seuil de douleur, L = 120 dB).",
      technique: "L = 10log(I/10⁻¹²). I = I₀ × 10^(L/10).",
      bacLink: "Niveau sonore — seuil de référence"
    })
  },
];

// ─── CHAPITRE 18 : Lunette astronomique ──────────────────────────────────────
export const quizCh18 = [
  {
    id: 'ch18_1', chapter: 18, type: 1,
    question: "En réglage afocal, le grossissement d'une lunette est :",
    options: ["G = f₂'/f₁'", "G = f₁'/f₂'", "G = f₁' + f₂'", "G = f₁' × f₂'"],
    correct: 1,
    correction: buildCorrection({
      answer: "G = f₁'/f₂'",
      explanation: "G = f₁'/f₂' où f₁' est la focale de l'objectif (grande) et f₂' est la focale de l'oculaire (petite).",
      memo: "G = f_obj/f_ocu = f₁'/f₂'.",
      trap: "Ne pas inverser : objectif au numérateur, oculaire au dénominateur.",
      technique: "Pour augmenter G : augmenter f₁' ou diminuer f₂'.",
      bacLink: "Lunette astronomique — grossissement"
    })
  },
  {
    id: 'ch18_2', chapter: 18, type: 4,
    question: "Lunette afocale : f₁' = 90 cm, f₂' = 3 cm. Quel est le grossissement et la longueur de la lunette ?",
    options: ["G = 30, L = 93 cm", "G = 3, L = 87 cm", "G = 30, L = 87 cm", "G = 0,033, L = 93 cm"],
    correct: 0,
    correction: buildCorrection({
      answer: "G = 30, L = 93 cm",
      explanation: "G = f₁'/f₂' = 90/3 = 30. L = f₁' + f₂' = 90 + 3 = 93 cm.",
      memo: "G = f₁'/f₂'. L = f₁' + f₂'.",
      trap: "Longueur = somme des focales, pas différence.",
      technique: "G = 90/3 = 30. L = 90+3 = 93 cm.",
      bacLink: "Lunette — grossissement et longueur"
    })
  },
  {
    id: 'ch18_3', chapter: 18, type: 2,
    question: "En réglage afocal, l'image intermédiaire formée par l'objectif se trouve dans le plan focal image de l'oculaire.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "Condition afocale : F₁' ≡ F₂. L'image intermédiaire A₁B₁ est dans le plan focal image de L₁ ET dans le plan focal objet de L₂.",
      memo: "Afocal : F₁' = F₂ (foyers confondus). Image intermédiaire dans ce plan.",
      trap: "A₁B₁ est dans le plan focal IMAGE de L₁ et plan focal OBJET de L₂.",
      technique: "Objet à ∞ → L₁ → image dans F₁' = F₂ → L₂ → image à ∞.",
      bacLink: "Condition afocale — réglage"
    })
  },
  {
    id: 'ch18_4', chapter: 18, type: 1,
    question: "La relation de conjugaison pour une lentille mince convergente est :",
    options: ["1/OA' − 1/OA = 1/f'", "1/OA' + 1/OA = 1/f'", "OA' − OA = f'", "1/OA × OA' = f'"],
    correct: 0,
    correction: buildCorrection({
      answer: "1/OA' − 1/OA = 1/f'",
      explanation: "1/OA' − 1/OA = 1/f' (relations algébriques avec O centre de la lentille). À respecter avec les signes.",
      memo: "1/OA' − 1/OA = 1/f'. Attention aux signes (algèbre).",
      trap: "Les distances sont algébriques. OA < 0 pour objet réel à gauche.",
      technique: "OA = distance objet-lentille (signée), OA' = distance lentille-image (signée).",
      bacLink: "Lentille convergente — relation de conjugaison"
    })
  },
  {
    id: 'ch18_5', chapter: 18, type: 5,
    question: "Pour augmenter le grossissement d'une lunette, on doit augmenter la focale de l'oculaire.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "G = f₁'/f₂'. Pour augmenter G : DIMINUER f₂' (oculaire de plus courte focale = loupe plus puissante).",
      memo: "G = f₁'/f₂'. f₂' ↓ → G ↑.",
      trap: "Oculaire de courte focale = fort grossissement.",
      technique: "Ou augmenter f₁' (objectif plus long).",
      bacLink: "Lunette — optimisation du grossissement"
    })
  },
  {
    id: 'ch18_6', chapter: 18, type: 16,
    question: "Qu'est-ce qu'un système optique afocal ?",
    options: ["Un système sans lentille", "Un système qui reçoit un faisceau de rayons parallèles et en sort un faisceau de rayons parallèles", "Un système à focale nulle", "Un système monoculaire"],
    correct: 1,
    correction: buildCorrection({
      answer: "Un système qui reçoit un faisceau de rayons parallèles et en sort un faisceau de rayons parallèles",
      explanation: "Afocal = objet à l'infini donne image à l'infini. L'œil au repos (non accommodé) peut observer confortablement.",
      memo: "Afocal : ∞ → ∞. Œil au repos.",
      trap: "Un système afocal peut grossir (G ≠ 1).",
      technique: "Réglage afocal lunette : F₁' = F₂.",
      bacLink: "Système afocal — définition"
    })
  },
  {
    id: 'ch18_7', chapter: 18, type: 7,
    question: "Un objet réel est placé à 30 cm d'une lentille convergente de focale f' = 10 cm. Où est l'image ?",
    options: ["À 15 cm", "À 30 cm", "À 10 cm", "À −15 cm"],
    correct: 0,
    correction: buildCorrection({
      answer: "À 15 cm de l'autre côté",
      explanation: "1/OA' − 1/OA = 1/f'. OA = −30 cm (objet réel). 1/OA' = 1/10 + 1/(−30) = 1/10 − 1/30 = 2/30 → OA' = 15 cm.",
      memo: "1/OA' = 1/f' + 1/OA. OA' > 0 → image réelle, de l'autre côté.",
      trap: "OA est négatif pour un objet réel à gauche de la lentille.",
      technique: "1/OA' = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 → OA' = 15 cm.",
      bacLink: "Lentille — calcul de position image"
    })
  },
  {
    id: 'ch18_8', chapter: 18, type: 19,
    question: "Pourquoi l'objectif d'une lunette astronomique a-t-il une grande focale ?",
    options: ["Pour grossir directement l'image", "Pour collecter plus de lumière et former une image intermédiaire grande et lumineuse", "Pour réduire la longueur de la lunette", "Pour avoir un plus grand champ de vue"],
    correct: 1,
    correction: buildCorrection({
      answer: "Pour collecter plus de lumière et former une image intermédiaire grande et lumineuse",
      explanation: "Grande f₁' → grand diamètre → collecte plus de lumière. Aussi : image intermédiaire plus grande (meilleur détail).",
      memo: "Objectif : grande focale = grande ouverture = plus de lumière.",
      trap: "C'est l'oculaire qui grossit, pas l'objectif.",
      technique: "G = f₁'/f₂' : grande f₁' contribue aussi au grossissement.",
      bacLink: "Rôle de l'objectif d'une lunette"
    })
  },
  {
    id: 'ch18_9', chapter: 18, type: 1,
    question: "La longueur d'une lunette astronomique en réglage afocal est :",
    options: ["f₁' − f₂'", "f₁' × f₂'", "f₁' + f₂'", "f₁'/f₂'"],
    correct: 2,
    correction: buildCorrection({
      answer: "f₁' + f₂'",
      explanation: "En réglage afocal, les foyers F₁' et F₂ sont confondus → L = OF₁' + F₂O₂ = f₁' + f₂'.",
      memo: "L = f₁' + f₂' (longueur de la lunette afocale).",
      trap: "Additionner, pas soustraire.",
      technique: "L = f₁' + f₂' = 90 + 3 = 93 cm par exemple.",
      bacLink: "Lunette — longueur de l'instrument"
    })
  },
  {
    id: 'ch18_10', chapter: 18, type: 2,
    question: "L'oculaire d'une lunette astronomique fonctionne comme une loupe.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "L'oculaire est une loupe qui grossit l'image intermédiaire A₁B₁ formée par l'objectif.",
      memo: "Objectif = crée l'image intermédiaire. Oculaire = loupe pour observer cette image.",
      trap: "L'objectif agit comme un appareil photo, l'oculaire comme une loupe.",
      technique: "f₂' petite → loupe plus puissante → G plus grand.",
      bacLink: "Rôle de l'oculaire — loupe"
    })
  },
];

// ─── CHAPITRE 19 : Interaction lumière-matière ───────────────────────────────
export const quizCh19 = [
  {
    id: 'ch19_1', chapter: 19, type: 1,
    question: "L'énergie d'un photon est :",
    options: ["E = h/λ", "E = hν = hc/λ", "E = mc²", "E = hν²"],
    correct: 1,
    correction: buildCorrection({
      answer: "E = hν = hc/λ",
      explanation: "E = hν = hc/λ avec h = 6,626×10⁻³⁴ J·s, ν la fréquence, λ la longueur d'onde.",
      memo: "E_photon = hν = hc/λ. h = 6,63×10⁻³⁴ J·s.",
      trap: "E = hν, pas E = hν². λ↑ → E↓ (infrarouge moins énergétique que UV).",
      technique: "1 eV = 1,6×10⁻¹⁹ J. Convertir E en eV si besoin.",
      bacLink: "Énergie d'un photon"
    })
  },
  {
    id: 'ch19_2', chapter: 19, type: 4,
    question: "Quelle est l'énergie (en eV) d'un photon de λ = 500 nm ? (h = 6,63×10⁻³⁴ J·s, c = 3×10⁸ m/s)",
    options: ["2,5 eV", "3,1 eV", "1,2 eV", "4,0 eV"],
    correct: 0,
    correction: buildCorrection({
      answer: "2,5 eV",
      explanation: "E = hc/λ = (6,63×10⁻³⁴ × 3×10⁸)/(500×10⁻⁹) = 1,989×10⁻²⁵/5×10⁻⁷ = 3,98×10⁻¹⁹ J. En eV : 3,98×10⁻¹⁹/1,6×10⁻¹⁹ ≈ 2,49 eV ≈ 2,5 eV.",
      memo: "E(eV) = hc/(λ×e). λ = 500 nm → E ≈ 2,5 eV (visible vert).",
      trap: "Convertir λ en m (500 nm = 5×10⁻⁷ m), puis diviser par 1,6×10⁻¹⁹ pour obtenir eV.",
      technique: "E = hc/λ → en J, puis ÷1,6×10⁻¹⁹ pour eV.",
      bacLink: "Calcul d'énergie de photon — Bac"
    })
  },
  {
    id: 'ch19_3', chapter: 19, type: 2,
    question: "L'effet photoélectrique : doubler l'intensité lumineuse sans changer λ double l'énergie cinétique des électrons.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "E_c = hν − W_e dépend uniquement de la fréquence ν, pas de l'intensité. Doubler l'intensité double le nombre d'électrons émis, pas leur énergie.",
      memo: "E_c = hν − W_e : dépend de ν, PAS de l'intensité.",
      trap: "Intensité ↑ → plus d'électrons (courant ↑), mais même énergie cinétique.",
      technique: "C'est la révolution quantique de Einstein : 1 photon = 1 électron.",
      bacLink: "Effet photoélectrique — rôle de l'intensité"
    })
  },
  {
    id: 'ch19_4', chapter: 19, type: 1,
    question: "La condition pour qu'il y ait effet photoélectrique est :",
    options: ["L'intensité doit être forte", "hν ≥ W_e (énergie du photon ≥ travail d'extraction)", "λ doit être dans le visible", "La durée d'exposition doit être longue"],
    correct: 1,
    correction: buildCorrection({
      answer: "hν ≥ W_e",
      explanation: "hν ≥ W_e = hν_s. Si la fréquence est inférieure au seuil ν_s, aucun électron n'est émis quelle que soit l'intensité.",
      memo: "Condition : hν ≥ W_e ↔ ν ≥ ν_s ↔ λ ≤ λ_s.",
      trap: "L'intensité n'entre pas dans la condition d'émission.",
      technique: "W_e = hν_s. Si hν < W_e → pas d'émission.",
      bacLink: "Condition d'émission photoélectrique"
    })
  },
  {
    id: 'ch19_5', chapter: 19, type: 4,
    question: "W_e = 2,0 eV (1 eV = 1,6×10⁻¹⁹ J, h = 6,63×10⁻³⁴ J·s, c = 3×10⁸ m/s). Quelle est la longueur d'onde seuil λ_s ?",
    options: ["620 nm", "310 nm", "248 nm", "496 nm"],
    correct: 0,
    correction: buildCorrection({
      answer: "620 nm",
      explanation: "W_e = hc/λ_s → λ_s = hc/W_e = (6,63×10⁻³⁴ × 3×10⁸)/(2×1,6×10⁻¹⁹) = 1,989×10⁻²⁵/3,2×10⁻¹⁹ ≈ 6,21×10⁻⁷ m = 621 nm ≈ 620 nm.",
      memo: "λ_s = hc/W_e. λ < λ_s → effet photoélectrique possible.",
      trap: "Convertir W_e en Joules avant le calcul.",
      technique: "λ_s = hc/W_e(J). Si λ < λ_s : émission.",
      bacLink: "Longueur d'onde seuil — Bac"
    })
  },
  {
    id: 'ch19_6', chapter: 19, type: 16,
    question: "Quelle est la différence entre effet photoélectrique et effet photovoltaïque ?",
    options: ["Ils sont identiques", "Photoélectrique : métal → e⁻ libre. Photovoltaïque : semi-conducteur → courant électrique", "Photovoltaïque : métal → e⁻. Photoélectrique : semi-conducteur", "L'un est quantique, l'autre non"],
    correct: 1,
    correction: buildCorrection({
      answer: "Photoélectrique : métal → e⁻ libre. Photovoltaïque : semi-conducteur → courant électrique",
      explanation: "Photoélectrique : photon arrache un e⁻ d'un métal (e⁻ libre dans le vide). Photovoltaïque : photon crée une paire e⁻/trou dans un semi-conducteur → courant.",
      memo: "Photoélectrique : métal, e⁻ arraché. Photovoltaïque : semi-conducteur, courant.",
      trap: "DEL est l'inverse du photovoltaïque : électricité → lumière.",
      technique: "Les trois effets (photoélectrique, photovoltaïque, DEL) reposent sur E = hν.",
      bacLink: "Comparaison photoélectrique/photovoltaïque"
    })
  },
  {
    id: 'ch19_7', chapter: 19, type: 5,
    question: "Plus la longueur d'onde est grande, plus le photon est énergétique.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "E = hc/λ : si λ ↑ → E ↓. Les photons UV (λ petite) sont plus énergétiques que les infrarouges (λ grande).",
      memo: "λ ↑ → E ↓ (inversement proportionnel). UV > visible > IR.",
      trap: "Gamma rays (λ très petite) → énergie très grande.",
      technique: "E = hc/λ. UV : λ ≈ 100-400 nm. IR : λ > 700 nm.",
      bacLink: "Énergie et longueur d'onde"
    })
  },
  {
    id: 'ch19_8', chapter: 19, type: 7,
    question: "Un photon de λ = 200 nm frappe un métal de W_e = 4,5 eV. Quelle est l'énergie cinétique de l'électron émis ? (h = 6,63×10⁻³⁴, c = 3×10⁸, 1eV = 1,6×10⁻¹⁹ J)",
    options: ["≈ 1,7 eV", "≈ 3,1 eV", "≈ 6,2 eV", "≈ 0,8 eV"],
    correct: 0,
    correction: buildCorrection({
      answer: "≈ 1,7 eV",
      explanation: "E_photon = hc/λ = (6,63e-34×3e8)/(200e-9) = 9,94e-19 J = 6,21 eV. E_c = E_photon − W_e = 6,21 − 4,5 = 1,71 eV ≈ 1,7 eV.",
      memo: "E_c = hν − W_e = hc/λ − W_e.",
      trap: "Convertir E_photon en eV avant de soustraire W_e.",
      technique: "1. E = hc/λ (en J). 2. Convertir en eV. 3. E_c = E − W_e.",
      bacLink: "Énergie cinétique — effet photoélectrique Bac"
    })
  },
  {
    id: 'ch19_9', chapter: 19, type: 1,
    question: "Le rendement d'une cellule photovoltaïque est défini par :",
    options: ["η = P_l/P_él", "η = P_él/P_l = P_él/(ε·S)", "η = λ/λ_s", "η = hν/W_e"],
    correct: 1,
    correction: buildCorrection({
      answer: "η = P_él/P_l = P_él/(ε·S)",
      explanation: "η = P_électrique / P_lumineuse = P_él / (ε × S) où ε est l'éclairement en W/m² et S la surface.",
      memo: "η = P_él / (ε·S). Rendement typique : 15-25 %.",
      trap: "Ne pas inverser P_él et P_l.",
      technique: "P_l = ε × S. η = P_él/P_l.",
      bacLink: "Cellule photovoltaïque — rendement"
    })
  },
  {
    id: 'ch19_10', chapter: 19, type: 19,
    question: "Pourquoi la physique classique ne peut-elle pas expliquer l'effet photoélectrique ?",
    options: ["Parce que la lumière n'est pas une onde", "Parce que classiquement, l'énergie dépend de l'intensité : une lumière faible ne pourrait jamais éjecter un électron", "Parce que les électrons ne répondent pas aux ondes", "Parce que les métaux absorbent toute la lumière"],
    correct: 1,
    correction: buildCorrection({
      answer: "Parce que classiquement, l'énergie dépend de l'intensité : une lumière faible ne pourrait jamais éjecter un électron",
      explanation: "Classiquement : E ∝ I (intensité). Avec une lumière UV faible et longue durée, on devrait accumuler assez d'énergie. Or, c'est faux : seule ν compte. Einstein (1905) : quantification en photons.",
      memo: "Classique : E ∝ I. Quantique : E = hν (photon individuel).",
      trap: "L'effet photoélectrique a valu le prix Nobel d'Einstein (pas la relativité).",
      technique: "Révolution quantique : 1 photon interagit avec 1 électron.",
      bacLink: "Effet photoélectrique — révolution quantique"
    })
  },
];

// ─── CHAPITRE 20 : Dynamique électrique (circuit RC) ─────────────────────────
export const quizCh20 = [
  {
    id: 'ch20_1', chapter: 20, type: 1,
    question: "La constante de temps d'un circuit RC est :",
    options: ["τ = R/C", "τ = RC", "τ = √(RC)", "τ = 1/(RC)"],
    correct: 1,
    correction: buildCorrection({
      answer: "τ = RC",
      explanation: "τ = RC avec R en ohms (Ω) et C en farads (F). τ est en secondes (s).",
      memo: "τ = RC (s). R (Ω) × C (F) = s.",
      trap: "R × C (pas R/C ni 1/(RC)).",
      technique: "Plus τ est grand, plus la charge/décharge est lente.",
      bacLink: "Circuit RC — constante de temps"
    })
  },
  {
    id: 'ch20_2', chapter: 20, type: 1,
    question: "Lors de la charge d'un condensateur (u_C(0) = 0), la tension est :",
    options: ["u_C(t) = E·e^(−t/τ)", "u_C(t) = E(1 − e^(−t/τ))", "u_C(t) = E·(1 + e^(−t/τ))", "u_C(t) = E·t/τ"],
    correct: 1,
    correction: buildCorrection({
      answer: "u_C(t) = E(1 − e^(−t/τ))",
      explanation: "Charge : u_C part de 0 et tend vers E. Solution : u_C(t) = E(1 − e^(−t/τ)).",
      memo: "Charge : u_C = E(1 − e^(−t/τ)). Décharge : u_C = E·e^(−t/τ).",
      trap: "Ne pas confondre charge (1 − exp) et décharge (exp décroissant).",
      technique: "CI : u_C(0) = 0 → A = −E → u_C = E(1 − e^(−t/τ)).",
      bacLink: "Circuit RC — charge du condensateur"
    })
  },
  {
    id: 'ch20_3', chapter: 20, type: 4,
    question: "R = 10 kΩ, C = 100 μF. Quelle est la constante de temps τ ?",
    options: ["0,1 s", "1 s", "10 s", "0,01 s"],
    correct: 1,
    correction: buildCorrection({
      answer: "1 s",
      explanation: "τ = RC = 10×10³ × 100×10⁻⁶ = 10⁴ × 10⁻⁴ = 1 s.",
      memo: "τ = RC. 10 kΩ × 100 μF = 10⁴ × 10⁻⁴ = 1 s.",
      trap: "Convertir kΩ en Ω (×10³) et μF en F (×10⁻⁶).",
      technique: "τ = (10×10³)×(100×10⁻⁶) = 10⁴ × 10⁻⁴ = 1 s.",
      bacLink: "RC — calcul de τ"
    })
  },
  {
    id: 'ch20_4', chapter: 20, type: 2,
    question: "À t = 5τ, on considère que le condensateur est pratiquement chargé.",
    options: ["Vrai", "Faux"],
    correct: 0,
    correction: buildCorrection({
      answer: "Vrai",
      explanation: "À t = 5τ : u_C = E(1 − e⁻⁵) = E(1 − 0,0067) ≈ 0,993E soit 99,3% de E. Par convention, régime permanent atteint.",
      memo: "5τ → 99,3% de la valeur finale. Régime permanent ≈ atteint.",
      trap: "En théorie, jamais exactement E (asymptote). En pratique : 5τ suffit.",
      technique: "e⁻⁵ ≈ 0,007 → 1 − e⁻⁵ ≈ 0,993.",
      bacLink: "RC — régime permanent"
    })
  },
  {
    id: 'ch20_5', chapter: 20, type: 5,
    question: "À t = 0 (condensateur déchargé, fermeture du circuit), le condensateur se comporte comme un circuit ouvert.",
    options: ["Vrai", "Faux"],
    correct: 1,
    correction: buildCorrection({
      answer: "Faux",
      explanation: "À t = 0⁺ (condensateur déchargé), u_C = 0, ce qui est équivalent à un court-circuit. Le courant initial est maximal : i(0) = E/R.",
      memo: "t=0, condensateur déchargé → court-circuit (i max = E/R). t→∞ → circuit ouvert (i=0).",
      trap: "C'est l'INVERSE : en régime permanent, le condensateur = circuit ouvert.",
      technique: "t=0⁺ : u_C = 0 → court-circuit. t=∞ : i = 0 → circuit ouvert.",
      bacLink: "Comportement initial du condensateur"
    })
  },
  {
    id: 'ch20_6', chapter: 20, type: 4,
    question: "À t = τ lors d'une charge de 0 à E = 10 V, quelle est la valeur de u_C ?",
    options: ["6,32 V", "3,68 V", "5 V", "10 V"],
    correct: 0,
    correction: buildCorrection({
      answer: "6,32 V",
      explanation: "u_C(τ) = E(1 − e⁻¹) = 10 × (1 − 0,368) = 10 × 0,632 = 6,32 V.",
      memo: "À t = τ : u_C = E(1 − 1/e) ≈ 0,632 × E (63,2% de E).",
      trap: "C'est 63,2% de E, pas 50%.",
      technique: "1 − e⁻¹ = 1 − 0,368 = 0,632.",
      bacLink: "RC charge — valeur à t = τ"
    })
  },
  {
    id: 'ch20_7', chapter: 20, type: 16,
    question: "Comment déterminer graphiquement τ à partir de la courbe u_C(t) de charge ?",
    options: ["Lire t quand u_C = E/2", "Tracer la tangente en t=0, lire l'abscisse de son intersection avec u_C = E", "Lire t quand u_C = 0,9E", "Calculer la pente maximale"],
    correct: 1,
    correction: buildCorrection({
      answer: "Tracer la tangente en t=0, lire l'abscisse de son intersection avec u_C = E",
      explanation: "La tangente à l'origine a une pente E/τ. Elle coupe l'asymptote u_C = E exactement en t = τ.",
      memo: "Méthode tangente : tangente(0) ∩ asymptote = point t = τ.",
      trap: "Ne pas lire τ quand u_C = E/2 (ce serait t_{1/2} = τ × ln2 ≈ 0,693τ).",
      technique: "Pente tangente = E/τ → τ = E/(pente).",
      bacLink: "Méthode graphique — détermination de τ"
    })
  },
  {
    id: 'ch20_8', chapter: 20, type: 7,
    question: "L'équation différentielle du circuit RC en charge est :",
    options: ["RC·du_C/dt + u_C = 0", "RC·du_C/dt + u_C = E", "du_C/dt + RC·u_C = E", "RC·du_C/dt = E"],
    correct: 1,
    correction: buildCorrection({
      answer: "RC·du_C/dt + u_C = E",
      explanation: "Loi des mailles : u_R + u_C = E → Ri + u_C = E → RC·du_C/dt + u_C = E.",
      memo: "Charge : RC·du_C/dt + u_C = E. Décharge : RC·du_C/dt + u_C = 0.",
      trap: "Remplacer i = C·du_C/dt et u_R = Ri = RC·du_C/dt.",
      technique: "1. Loi des mailles. 2. i = C·du_C/dt. 3. Substituer.",
      bacLink: "Équation différentielle RC — démonstration"
    })
  },
  {
    id: 'ch20_9', chapter: 20, type: 19,
    question: "Pourquoi le courant diminue-t-il lors de la charge d'un condensateur ?",
    options: ["Parce que R diminue", "Parce que u_C augmente, donc u_R = E − u_C diminue, donc i = u_R/R diminue", "Parce que E diminue", "Parce que la capacité C change"],
    correct: 1,
    correction: buildCorrection({
      answer: "Parce que u_C augmente, donc u_R = E − u_C diminue, donc i = u_R/R diminue",
      explanation: "Loi des mailles : E = u_R + u_C → u_R = E − u_C. Comme u_C ↑, u_R ↓ → i = u_R/R ↓.",
      memo: "u_C ↑ → u_R = E − u_C ↓ → i = u_R/R ↓.",
      trap: "R et E ne changent pas. C'est la répartition de la tension qui change.",
      technique: "i(t) = (E/R)e^(−t/τ). À t=0 : i = E/R. À t→∞ : i → 0.",
      bacLink: "Courant lors de la charge RC — raisonnement"
    })
  },
  {
    id: 'ch20_10', chapter: 20, type: 1,
    question: "En régime permanent continu, un condensateur se comporte comme :",
    options: ["Un résistor de valeur C", "Un court-circuit (i = E/R)", "Un interrupteur ouvert (i = 0)", "Une source de tension"],
    correct: 2,
    correction: buildCorrection({
      answer: "Un interrupteur ouvert (i = 0)",
      explanation: "En régime permanent, du_C/dt = 0 → i = C·du_C/dt = 0. Plus aucun courant ne circule : le condensateur est « plein ».",
      memo: "Régime permanent DC : condensateur = circuit ouvert (i = 0).",
      trap: "C'est l'état final, pas l'état initial.",
      technique: "t → ∞ : u_C = E, i = 0 → condensateur = circuit ouvert.",
      bacLink: "Régime permanent — condensateur"
    })
  },
];