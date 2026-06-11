import React from 'react';
import ThreeScene from './ThreeScene';

// Surface d'onde : interférences de deux sources ponctuelles
function build(THREE) {
  const group = new THREE.Group();

  const SIZE = 12, SEG = 70;
  const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x22d3ee,
    emissive: 0x0e7490,
    emissiveIntensity: 0.35,
    wireframe: true,
    transparent: true,
    opacity: 0.85,
  });
  const mesh = new THREE.Mesh(geo, mat);
  group.add(mesh);

  // Deux sources S1, S2
  const srcMat = new THREE.MeshStandardMaterial({ color: 0xf472b6, emissive: 0xbe185d, emissiveIntensity: 1.3 });
  const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), srcMat);
  const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), srcMat);
  const S1 = [-2.2, 0], S2 = [2.2, 0];
  s1.position.set(S1[0], 0.5, S1[1]);
  s2.position.set(S2[0], 0.5, S2[1]);
  group.add(s1, s2);

  const posAttr = geo.attributes.position;
  const base = [];
  for (let i = 0; i < posAttr.count; i++) base.push([posAttr.getX(i), posAttr.getZ(i)]);

  const k = 2.2, omega = 3.5, A = 0.32;
  const animate = (t) => {
    for (let i = 0; i < posAttr.count; i++) {
      const [x, z] = base[i];
      const r1 = Math.hypot(x - S1[0], z - S1[1]);
      const r2 = Math.hypot(x - S2[0], z - S2[1]);
      // superposition de deux ondes circulaires amorties
      const y = A * (Math.sin(k * r1 - omega * t) / (1 + 0.3 * r1) + Math.sin(k * r2 - omega * t) / (1 + 0.3 * r2));
      posAttr.setY(i, y);
    }
    posAttr.needsUpdate = true;
    geo.computeVertexNormals();
  };
  return { group, animate };
}

export default function AnimWave({ height = 300 }) {
  return <ThreeScene build={build} height={height} camera={[0, 6.5, 10]} />;
}