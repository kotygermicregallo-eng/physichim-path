import React from 'react';
import ThreeScene from './ThreeScene';

// Orbite elliptique de Kepler : planète plus rapide au périhélie
function build(THREE) {
  const group = new THREE.Group();
  const a = 5, b = 3.2, c = Math.sqrt(a * a - b * b); // Soleil au foyer

  // Soleil
  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(0.9, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0xfbbf24, emissive: 0xf59e0b, emissiveIntensity: 1.4 })
  );
  sun.position.set(-c, 0, 0);
  group.add(sun);
  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(1.25, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.15 })
  );
  halo.position.copy(sun.position);
  group.add(halo);

  // Orbite
  const pts = new THREE.EllipseCurve(0, 0, a, b).getPoints(120).map(p => new THREE.Vector3(p.x, 0, p.y));
  group.add(new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.5 })
  ));

  // Planète
  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 24, 24),
    new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x0e7490, emissiveIntensity: 0.7 })
  );
  group.add(planet);

  // Rayon vecteur (loi des aires)
  const radiusLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([sun.position.clone(), new THREE.Vector3(a, 0, 0)]),
    new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.7 })
  );
  group.add(radiusLine);

  let theta = 0;
  const animate = () => {
    // vitesse angulaire ∝ 1/r² (2e loi de Kepler)
    const x = a * Math.cos(theta), z = b * Math.sin(theta);
    const r = Math.hypot(x + c, z); // distance au Soleil (foyer)
    theta += 0.045 / (r * r / (b * b));
    planet.position.set(x, 0, z);
    radiusLine.geometry.setFromPoints([sun.position.clone(), planet.position.clone()]);
  };
  return { group, animate };
}

export default function AnimKepler({ height = 300 }) {
  return <ThreeScene build={build} height={height} camera={[0, 6, 10]} />;
}