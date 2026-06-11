import React, { useState } from 'react';
import AnimIons from './AnimIons';
import AnimMolecule from './AnimMolecule';
import AnimRadioactivity from './AnimRadioactivity';
import AnimProjectile from './AnimProjectile';
import AnimKepler from './AnimKepler';
import AnimThermal from './AnimThermal';
import AnimWave from './AnimWave';

// Registry : chapitre → animation 3D
const ANIM3D = {
  2: { C: AnimIons, title: 'Pile en fonctionnement — migration des ions', caption: 'Cations (cyan) → cathode · Anions (rose) → anode. Glisse pour tourner la scène.' },
  6: { C: AnimMolecule, title: 'Molécule 3D — éthanol CH₃–CH₂–OH', caption: 'Modèle boules-bâtonnets : C (gris), O (rouge), H (blanc). Glisse pour tourner.' },
  7: { C: AnimMolecule, title: 'Molécule 3D — éthanol CH₃–CH₂–OH', caption: 'Repère les sites donneurs/accepteurs : le O porte des doublets non liants.' },
  8: { C: AnimRadioactivity, title: 'Désintégration α — éjection d\'une particule', caption: 'Le noyau instable éjecte une particule α (2 protons + 2 neutrons).' },
  10: { C: AnimProjectile, title: 'Trajectoire parabolique — vecteur vitesse', caption: 'Le vecteur vitesse (rose) est tangent à la trajectoire. Au sommet : v⃗ horizontal.' },
  11: { C: AnimProjectile, title: 'Trajectoire parabolique — vecteur vitesse', caption: 'MRU horizontal + MRUA vertical = parabole. Observe v⃗ au sommet.' },
  12: { C: AnimProjectile, title: 'Chute libre 2D — lancer à 45°', caption: 'Portée maximale pour α = 45°. Le vecteur vitesse change de direction, pas vx.' },
  13: { C: AnimKepler, title: 'Orbite elliptique — 2ème loi de Kepler', caption: 'La planète accélère au périhélie (proche du Soleil) et ralentit à l\'aphélie.' },
  16: { C: AnimThermal, title: 'Agitation thermique — chaud vs froid', caption: 'Compartiment chaud (rouge) : agitation forte. Froid (bleu) : agitation faible.' },
  17: { C: AnimWave, title: 'Interférences — superposition de deux ondes', caption: 'Deux sources synchrones : zones d\'amplitude max (constructives) et nulles (destructives).' },
  18: { C: AnimWave, title: 'Surface d\'onde — propagation et superposition', caption: 'Visualise la propagation circulaire depuis chaque source.' },
};

export function hasAnim3D(chapterId) {
  return !!ANIM3D[chapterId];
}

export default function Anim3DBlock({ chapterId }) {
  const conf = ANIM3D[chapterId];
  const [show, setShow] = useState(false);
  if (!conf) return null;
  const { C, title, caption } = conf;

  return (
    <div className="rounded-2xl overflow-hidden mb-4" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(34,211,238,0.25)', boxShadow: '0 0 24px rgba(34,211,238,0.06)' }}>
      <div className="px-4 py-2.5 flex items-center justify-between gap-2" style={{ background: 'rgba(34,211,238,0.06)', borderBottom: show ? '1px solid rgba(34,211,238,0.15)' : 'none' }}>
        <span className="text-xs font-semibold" style={{ color: '#22d3ee', fontFamily: 'JetBrains Mono, monospace' }}>
          🧊 Animation 3D — {title}
        </span>
        <button
          onClick={() => setShow(!show)}
          className="text-xs px-3 py-1 rounded-lg font-semibold transition-all shrink-0"
          style={{
            background: show ? 'rgba(255,255,255,0.06)' : 'linear-gradient(135deg, #22d3ee, #a855f7)',
            color: show ? '#94a3b8' : '#05080f',
          }}>
          {show ? 'Masquer' : '▶ Lancer'}
        </button>
      </div>
      {show && (
        <>
          <C height={300} />
          <div className="px-4 py-2 text-xs" style={{ color: '#64748b', borderTop: '1px solid rgba(34,211,238,0.1)' }}>
            {caption}
          </div>
        </>
      )}
    </div>
  );
}