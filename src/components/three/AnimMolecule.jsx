import React from 'react';
import ThreeScene, { cylinderBetween } from './ThreeScene';

// Éthanol CH3-CH2-OH en modèle boules-bâtonnets
function build(THREE) {
  const group = new THREE.Group();
  const mat = {
    C: new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.4 }),
    O: new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.4, emissive: 0x7f1d1d, emissiveIntensity: 0.3 }),
    H: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.5 }),
  };
  const R = { C: 0.55, O: 0.5, H: 0.32 };

  // Atomes : [type, x, y, z]
  const atoms = [
    ['C', -1.5, 0, 0],          // C1 (CH3)
    ['C', 0, 0.4, 0],           // C2 (CH2)
    ['O', 1.4, -0.4, 0],        // O
    ['H', 2.3, 0.1, 0],         // H (OH)
    ['H', -1.6, -0.7, 0.85],    // H sur C1
    ['H', -1.6, -0.7, -0.85],
    ['H', -2.4, 0.7, 0],
    ['H', 0.1, 1.1, 0.85],      // H sur C2
    ['H', 0.1, 1.1, -0.85],
  ];
  const pos = atoms.map(([type, x, y, z]) => {
    const s = new THREE.Mesh(new THREE.SphereGeometry(R[type], 28, 28), mat[type]);
    s.position.set(x, y, z);
    group.add(s);
    return new THREE.Vector3(x, y, z);
  });

  // Liaisons [i, j]
  const bondMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.5 });
  [[0, 1], [1, 2], [2, 3], [0, 4], [0, 5], [0, 6], [1, 7], [1, 8]].forEach(([i, j]) => {
    group.add(cylinderBetween(THREE, pos[i], pos[j], 0.09, bondMat));
  });

  group.position.x = -0.2;
  group.scale.setScalar(1.25);
  return { group, animate: null };
}

export default function AnimMolecule({ height = 300 }) {
  return <ThreeScene build={build} height={height} camera={[0, 1.5, 7]} />;
}