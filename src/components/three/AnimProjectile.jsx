import React from 'react';
import ThreeScene from './ThreeScene';

// Trajectoire parabolique 3D avec vecteur vitesse
function build(THREE) {
  const group = new THREE.Group();
  const g = 9.8, v0 = 8, alpha = Math.PI / 4; // 45°
  const vx = v0 * Math.cos(alpha), vy0 = v0 * Math.sin(alpha);
  const tVol = 2 * vy0 / g;

  // Sol (grille)
  const grid = new THREE.GridHelper(14, 14, 0x22d3ee, 0x164e63);
  grid.material.transparent = true;
  grid.material.opacity = 0.35;
  grid.position.set(0, -0.01, 0);
  group.add(grid);

  // Trajectoire (ligne)
  const pts = [];
  for (let i = 0; i <= 60; i++) {
    const t = (i / 60) * tVol;
    pts.push(new THREE.Vector3(-5 + vx * t, vy0 * t - 0.5 * g * t * t, 0));
  }
  group.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.7 })
  ));

  // Projectile
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(0.35, 24, 24),
    new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x0e7490, emissiveIntensity: 0.8 })
  );
  group.add(ball);

  // Vecteur vitesse (flèche)
  const arrow = new THREE.ArrowHelper(new THREE.Vector3(1, 1, 0).normalize(), new THREE.Vector3(), 2, 0xf472b6, 0.45, 0.25);
  group.add(arrow);

  const animate = (time) => {
    const t = (time % (tVol + 0.6));
    const tc = Math.min(t, tVol);
    const x = -5 + vx * tc;
    const y = Math.max(0, vy0 * tc - 0.5 * g * tc * tc);
    ball.position.set(x, y + 0.35, 0);
    // vitesse instantanée
    const vyt = vy0 - g * tc;
    const v = new THREE.Vector3(vx, vyt, 0);
    arrow.position.set(x, y + 0.35, 0);
    arrow.setDirection(v.clone().normalize());
    arrow.setLength(Math.max(0.8, v.length() * 0.22), 0.4, 0.22);
  };
  return { group, animate };
}

export default function AnimProjectile({ height = 300 }) {
  return <ThreeScene build={build} height={height} camera={[0, 4, 12]} autoRotate={false} />;
}