import React from 'react';
import ThreeScene from './ThreeScene';

function build(THREE) {
  const group = new THREE.Group();

  // Nucleus: cluster of protons/neutrons
  const protonMat = new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x0e7490, emissiveIntensity: 0.7 });
  const neutronMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x6b21a8, emissiveIntensity: 0.5 });
  const positions = [
    [0, 0, 0], [0.5, 0.2, 0.1], [-0.4, 0.3, -0.2], [0.2, -0.45, 0.3],
    [-0.3, -0.3, 0.35], [0.35, 0.1, -0.45], [-0.15, 0.5, 0.25], [0.1, -0.2, -0.5],
  ];
  positions.forEach((p, i) => {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.42, 24, 24), i % 2 ? protonMat : neutronMat);
    s.position.set(...p);
    group.add(s);
  });

  // Orbits + electrons
  const electrons = [];
  const orbitMat = new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.3 });
  const eMat = new THREE.MeshStandardMaterial({ color: 0xf472b6, emissive: 0xbe185d, emissiveIntensity: 1.2 });
  [[0.5, 0.3], [Math.PI / 3, -0.5], [-Math.PI / 3, 1.2]].forEach(([rx, rz], i) => {
    const r = 2.8 + i * 0.35;
    const pts = new THREE.EllipseCurve(0, 0, r, r * 0.55).getPoints(90).map(p => new THREE.Vector3(p.x, p.y, 0));
    const orbit = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), orbitMat);
    orbit.rotation.set(rx, 0, rz);
    group.add(orbit);
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), eMat);
    group.add(e);
    electrons.push({ e, r, rx, rz, speed: 1.1 + i * 0.45, phase: i * 2.1 });
  });

  const animate = (t) => {
    electrons.forEach(({ e, r, rx, rz, speed, phase }) => {
      const a = t * speed + phase;
      const v = new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r * 0.55, 0);
      v.applyEuler(new THREE.Euler(rx, 0, rz));
      e.position.copy(v);
    });
  };
  return { group, animate };
}

export default function Atom3D({ height = 210 }) {
  return <ThreeScene build={build} height={height} camera={[0, 1.5, 8.5]} />;
}