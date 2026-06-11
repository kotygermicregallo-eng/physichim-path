import React from 'react';
import ThreeScene from './ThreeScene';

// Ions migrant en solution entre deux électrodes (pile / électrolyse)
function build(THREE) {
  const group = new THREE.Group();

  // Solution (boîte translucide)
  const tank = new THREE.Mesh(
    new THREE.BoxGeometry(9, 4, 4),
    new THREE.MeshStandardMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.1 })
  );
  tank.position.y = -0.5;
  group.add(tank);
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(9, 4, 4)),
    new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.35 })
  );
  edges.position.y = -0.5;
  group.add(edges);

  // Électrodes
  const elecL = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4.6, 2.2), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.3 }));
  elecL.position.set(-3.6, 0, 0);
  const elecR = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4.6, 2.2), new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.8, roughness: 0.3 }));
  elecR.position.set(3.6, 0, 0);
  group.add(elecL, elecR);

  // Polarités (sphères lumineuses au-dessus)
  const plus = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), new THREE.MeshStandardMaterial({ color: 0xf87171, emissive: 0xb91c1c, emissiveIntensity: 1 }));
  plus.position.set(3.6, 2.8, 0);
  const minus = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), new THREE.MeshStandardMaterial({ color: 0x60a5fa, emissive: 0x1d4ed8, emissiveIntensity: 1 }));
  minus.position.set(-3.6, 2.8, 0);
  group.add(plus, minus);

  // Ions : cations (cyan) → cathode − / anions (rose) → anode +
  const cationMat = new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x0e7490, emissiveIntensity: 0.8 });
  const anionMat = new THREE.MeshStandardMaterial({ color: 0xf472b6, emissive: 0xbe185d, emissiveIntensity: 0.8 });
  const ions = [];
  for (let i = 0; i < 14; i++) {
    const isCation = i % 2 === 0;
    const ion = new THREE.Mesh(new THREE.SphereGeometry(isCation ? 0.22 : 0.28, 14, 14), isCation ? cationMat : anionMat);
    ions.push({
      ion, isCation,
      x: (Math.random() - 0.5) * 6,
      y: -0.5 + (Math.random() - 0.5) * 3,
      z: (Math.random() - 0.5) * 3,
      speed: 0.5 + Math.random() * 0.6,
      wob: Math.random() * 6,
    });
    group.add(ion);
  }

  const animate = (t) => {
    ions.forEach(o => {
      const dir = o.isCation ? -1 : 1;
      let x = o.x + dir * ((t * o.speed) % 6.5);
      if (x < -3.2) x += 6.5;
      if (x > 3.2) x -= 6.5;
      o.ion.position.set(x, o.y + Math.sin(t * 2 + o.wob) * 0.18, o.z + Math.cos(t * 1.5 + o.wob) * 0.15);
    });
  };
  return { group, animate };
}

export default function AnimIons({ height = 300 }) {
  return <ThreeScene build={build} height={height} camera={[0, 3.5, 11]} />;
}