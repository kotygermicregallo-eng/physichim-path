import React from 'react';
import ThreeScene from './ThreeScene';

// Noyau instable qui éjecte périodiquement une particule alpha (2p + 2n)
function build(THREE) {
  const group = new THREE.Group();

  const protonMat = new THREE.MeshStandardMaterial({ color: 0xf87171, emissive: 0x991b1b, emissiveIntensity: 0.6, transparent: true });
  const neutronMat = new THREE.MeshStandardMaterial({ color: 0x60a5fa, emissive: 0x1e40af, emissiveIntensity: 0.5, transparent: true });

  // Gros noyau
  const nucleus = new THREE.Group();
  for (let i = 0; i < 26; i++) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.45, 18, 18), (i % 2 ? protonMat : neutronMat).clone());
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    const r = Math.cbrt(Math.random()) * 1.3;
    s.position.set(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
    nucleus.add(s);
  }
  group.add(nucleus);

  // Particule alpha (2 protons + 2 neutrons)
  const alpha = new THREE.Group();
  [[0.25, 0.25, 0], [-0.25, 0.25, 0], [0.25, -0.25, 0], [-0.25, -0.25, 0]].forEach((p, i) => {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), (i < 2 ? protonMat : neutronMat).clone());
    s.position.set(...p);
    alpha.add(s);
  });
  group.add(alpha);

  // Trajectoire (pointillés)
  const trail = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(1.3, 0.6, 0), new THREE.Vector3(7, 3.2, 0)]),
    new THREE.LineDashedMaterial({ color: 0xfbbf24, dashSize: 0.3, gapSize: 0.2, transparent: true, opacity: 0.6 })
  );
  trail.computeLineDistances();
  group.add(trail);

  const CYCLE = 3.2;
  const animate = (t) => {
    const phase = (t % CYCLE) / CYCLE;
    const d = phase * 7;
    alpha.position.set(1.3 + d * 0.82, 0.6 + d * 0.37, 0);
    alpha.rotation.z = t * 2;
    const fade = phase > 0.85 ? (1 - phase) / 0.15 : 1;
    alpha.children.forEach(c => { c.material.opacity = fade; });
    // tremblement du noyau avant éjection
    const shake = phase < 0.15 ? (0.15 - phase) * 0.6 : 0.02;
    nucleus.position.set(Math.sin(t * 31) * shake, Math.cos(t * 27) * shake, 0);
  };
  return { group, animate };
}

export default function AnimRadioactivity({ height = 300 }) {
  return <ThreeScene build={build} height={height} camera={[0, 2, 10]} />;
}