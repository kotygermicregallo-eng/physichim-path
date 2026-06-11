import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// Base scene: renderer + lights + drag rotation + auto-rotate + cleanup
export default function ThreeScene({ build, height = 300, camera: camPos = [0, 3, 11], autoRotate = true }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth || 300;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(...camPos);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const d1 = new THREE.DirectionalLight(0x9ee8de, 1.3);
    d1.position.set(5, 8, 6);
    scene.add(d1);
    const d2 = new THREE.DirectionalLight(0xee7f9d, 0.9);
    d2.position.set(-6, -4, -5);
    scene.add(d2);

    const { group, animate } = build(THREE);
    scene.add(group);

    // Drag to rotate
    let dragging = false, px = 0, py = 0, rotY = 0, rotX = 0;
    const el = renderer.domElement;
    const getXY = (e) => e.touches ? [e.touches[0].clientX, e.touches[0].clientY] : [e.clientX, e.clientY];
    const onDown = (e) => { dragging = true; [px, py] = getXY(e); el.style.cursor = 'grabbing'; };
    const onMove = (e) => {
      if (!dragging) return;
      const [x, y] = getXY(e);
      rotY += (x - px) * 0.008;
      rotX = Math.max(-0.9, Math.min(0.9, rotX + (y - py) * 0.006));
      px = x; py = y;
    };
    const onUp = () => { dragging = false; el.style.cursor = 'grab'; };
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    el.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);

    let raf;
    const clock = new THREE.Clock();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const t = clock.getElapsedTime();
      if (autoRotate && !dragging) rotY += 0.0025;
      group.rotation.y = rotY;
      group.rotation.x = rotX;
      if (animate) animate(t);
      renderer.render(scene, camera);
    };
    loop();

    const onResize = () => {
      const w = mount.clientWidth || 300;
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
      renderer.setSize(w, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      el.removeEventListener('touchstart', onDown);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
      renderer.dispose();
      if (el.parentNode === mount) mount.removeChild(el);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height, cursor: 'grab', touchAction: 'none' }} />;
}

// Helper: cylinder between two points (for bonds, axes...)
export function cylinderBetween(THREE, a, b, radius, material) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, 12), material);
  mesh.position.copy(a).add(dir.clone().multiplyScalar(0.5));
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  return mesh;
}