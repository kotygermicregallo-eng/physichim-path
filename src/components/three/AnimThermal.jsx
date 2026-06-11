import React from 'react';
import ThreeScene from './ThreeScene';

// Agitation thermique : compartiment chaud (rouge, agité) vs froid (bleu, calme)
function build(THREE) {
  const group = new THREE.Group();

  // Boîte
  group.add(new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(10, 4.5, 4)),
    new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.4 })
  ));
  // Paroi centrale
  const wall = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 4.5, 4),
    new THREE.MeshStandardMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35 })
  );
  group.add(wall);

  const hotMat = new THREE.MeshStandardMaterial({ color: 0xf87171, emissive: 0xb91c1c, emissiveIntensity: 0.8 });
  const coldMat = new THREE.MeshStandardMaterial({ color: 0x60a5fa, emissive: 0x1d4ed8, emissiveIntensity: 0.6 });

  const particles = [];
  for (let i = 0; i < 30; i++) {
    const hot = i < 15;
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 14), hot ? hotMat : coldMat);
    particles.push({
      p, hot,
      x0: hot ? -2.5 : 2.5,
      ax: (Math.random() - 0.5) * 4, ay: (Math.random() - 0.5) * 3.6, az: (Math.random() - 0.5) * 3.2,
      f1: 1 + Math.random() * 2, f2: 1 + Math.random() * 2, f3: 1 + Math.random() * 2,
      ph: Math.random() * 6,
    });
    group.add(p);
  }

  const animate = (t) => {
    particles.forEach(o => {
      const amp = o.hot ? 1 : 0.3;       // chaud = forte agitation
      const speed = o.hot ? 4.5 : 1.6;   // chaud = rapide
      o.p.position.set(
        o.x0 + o.ax * 0.45 + Math.sin(t * speed * o.f1 + o.ph) * amp * 0.55,
        o.ay * 0.5 + Math.cos(t * speed * o.f2 + o.ph) * amp * 0.5,
        o.az * 0.45 + Math.sin(t * speed * o.f3 + o.ph * 2) * amp * 0.45
      );
    });
  };
  return { group, animate };
}

export default function AnimThermal({ height = 300 }) {
  return <ThreeScene build={build} height={height} camera={[0, 3, 11]} />;
}