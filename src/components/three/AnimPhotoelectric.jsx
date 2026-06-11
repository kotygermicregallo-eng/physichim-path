import React from 'react';
import ThreeScene from './ThreeScene';

// Effet photoélectrique : photons (jaunes) frappent un métal, électrons (teal) arrachés
function build(THREE) {
  const group = new THREE.Group();

  // Plaque métallique
  const metal = new THREE.Mesh(
    new THREE.BoxGeometry(8, 0.8, 4),
    new THREE.MeshStandardMaterial({ color: 0xb8b0a0, metalness: 0.9, roughness: 0.25 })
  );
  metal.position.y = -2.2;
  group.add(metal);
  const label = new THREE.Mesh(
    new THREE.BoxGeometry(8.05, 0.1, 4.05),
    new THREE.MeshStandardMaterial({ color: 0xe8b44a, metalness: 0.8, roughness: 0.3, transparent: true, opacity: 0.5 })
  );
  label.position.y = -1.78;
  group.add(label);

  const N = 5;
  const photons = [];
  const electrons = [];
  const photonMat = new THREE.MeshStandardMaterial({ color: 0xe8b44a, emissive: 0xd4980a, emissiveIntensity: 1.6, transparent: true });
  const electronMat = new THREE.MeshStandardMaterial({ color: 0x4fd1c5, emissive: 0x1f8f84, emissiveIntensity: 1.2, transparent: true });

  for (let i = 0; i < N; i++) {
    // Photon : petite sphère brillante + trainée
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.18, 14, 14), photonMat.clone());
    group.add(p);
    // Trainée du photon (segment)
    const trail = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.1, 8), photonMat.clone());
    trail.material.opacity = 0.45;
    group.add(trail);
    // Électron éjecté
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 14), electronMat.clone());
    group.add(e);
    photons.push({ p, trail, x0: -5.5 + i * 1.9, z: (i % 2 ? 0.9 : -0.9), phase: i * 0.55 });
    electrons.push({ e, vx: 0.5 + (i % 3) * 0.4, vy: 2.4 + (i % 2) * 0.8 });
  }

  // Direction du photon : diagonale descendante (45°)
  const dir = new THREE.Vector3(1, -1, 0).normalize();
  const CYCLE = 2.6;

  const animate = (t) => {
    photons.forEach((o, i) => {
      const phase = ((t + o.phase * CYCLE) % CYCLE) / CYCLE;
      // 0 → 0.55 : photon descend vers le métal ; impact à 0.55
      const impact = { x: o.x0 + 3.2, y: -1.7 };
      if (phase < 0.55) {
        const k = phase / 0.55;
        const x = o.x0 + 3.2 * k;
        const y = -1.7 + 3.2 * (1 - k);
        o.p.position.set(x, y, o.z);
        o.p.material.opacity = 1;
        o.trail.position.set(x - dir.x * 0.65, y + 0.65, o.z);
        o.trail.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().negate());
        o.trail.material.opacity = 0.45;
        // Électron caché dans le métal
        const el = electrons[i];
        el.e.position.set(impact.x, -1.95, o.z);
        el.e.material.opacity = 0.15;
      } else {
        // Photon absorbé
        o.p.material.opacity = 0;
        o.trail.material.opacity = 0;
        // Électron éjecté : parabole vers le haut
        const k = (phase - 0.55) / 0.45;
        const el = electrons[i];
        el.e.position.set(impact.x + el.vx * k * 2.2, -1.7 + el.vy * k * 1.6 - 1.2 * k * k, o.z);
        el.e.material.opacity = k > 0.85 ? (1 - k) / 0.15 : 1;
      }
    });
  };
  return { group, animate };
}

export default function AnimPhotoelectric({ height = 300 }) {
  return <ThreeScene build={build} height={height} camera={[0, 1.5, 10.5]} />;
}