import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

const CHAPTERS = [
  'Cinétique chimique (vitesses, ordre 1, t½)',
  "Évolution spontanée d'un système chimique (Qr, K, piles)",
  'Réactions acido-basiques (Brønsted, pH)',
  'Force des acides et des bases (Ka, pKa, prédominance)',
  'Dosage par titrage (conductimétrie, pH-métrie)',
  'Stratégie en synthèse organique (rendement, purification)',
  'Mécanismes réactionnels (actes élémentaires, catalyseur)',
  'Radioactivité (loi de décroissance, datation)',
  "Évolution forcée d'un système chimique (électrolyse)",
  'Cinématique du point (vecteurs vitesse et accélération, Frenet)',
  'Mouvements et forces (lois de Newton, PFD)',
  'Mouvement dans un champ uniforme (parabole, condensateur)',
  'Mouvement des planètes et satellites (lois de Kepler)',
  'Mécanique des fluides (Bernoulli, Venturi, Torricelli)',
  'Thermodynamique : premier principe (ΔU = W + Q, gaz parfait)',
  'Thermodynamique : transferts thermiques (Rth, loi de Newton)',
  'Phénomènes ondulatoires (diffraction, interférences, Doppler)',
  'Lunette astronomique (système afocal, grossissement)',
  'Interaction lumière-matière (effet photoélectrique)',
  "Dynamique d'un système électrique (circuit RC, τ = RC)",
];

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (user?.role !== 'admin') {
      return Response.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    let payload = {};
    try { payload = await req.json(); } catch { /* empty body */ }

    // Rotation : un chapitre différent chaque jour
    const dayIndex = Math.floor(Date.now() / 86400000) % CHAPTERS.length;
    const chapitre = CHAPTERS[dayIndex];

    const content = await base44.asServiceRole.integrations.Core.InvokeLLM({
      prompt: `Tu es professeur de Physique-Chimie en Terminale spécialité (programme français, préparation Bac). Rédige le contenu d'un email quotidien de révision sur le chapitre : "${chapitre}".
Structure exigée :
1) ⭐ LA FORMULE DU JOUR : une formule clé du chapitre avec ses unités et conditions d'application
2) ❓ 3 QUESTIONS FLASH de niveau Bac (numérotées)
3) ✅ RÉPONSES COURTES aux 3 questions à la fin
Ton : motivant et concis. Texte brut lisible dans un email (pas de markdown). Termine par une phrase d'encouragement.`,
      response_json_schema: {
        type: 'object',
        properties: {
          sujet: { type: 'string', description: 'Titre court et accrocheur de l\'email' },
          corps: { type: 'string', description: 'Corps complet de l\'email en texte brut' },
        },
      },
    });

    // Mode test : ne pas envoyer, juste prévisualiser
    if (payload.dryRun) {
      return Response.json({ dryRun: true, chapitre, ...content });
    }

    const users = await base44.asServiceRole.entities.User.list();
    let sent = 0;
    for (const u of users) {
      if (!u.email) continue;
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: u.email,
        subject: `⚛ Révision du jour — ${content.sujet}`,
        body: content.corps,
        from_name: 'PHYSCHIM·X',
      });
      sent++;
    }
    return Response.json({ sent, chapitre });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});