import React from 'react';
import ThreeScene from './ThreeScene';

function build(THREE) {
  const group = new THREE.Group();

  // Nucleus: cluster of protons/neutrons
  const protonMat = new THREE.MeshStandardMaterial({ color: 0xe8e4dc, roughness: 0.35, metalness: 0.1 });
  const neutronMat = new THREE.MeshStandardMaterial({ color: 0xcfc8bd, roughness: 0.4, metalness: 0.1 });
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
  const ringColors = [0xee7f9d, 0xe8b44a, 0x4fd1c5]; // rose, or, teal — comme le logo
  [[0.5, 0.3], [Math.PI / 3, -0.5], [-Math.PI / 3, 1.2]].forEach(([rx, rz], i) => {
    const orbitMat = new THREE.LineBasicMaterial({ color: ringColors[i], transparent: true, opacity: 0.55 });
    const eMat = new THREE.MeshStandardMaterial({ color: ringColors[i], emissive: ringColors[i], emissiveIntensity: 0.8 });
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