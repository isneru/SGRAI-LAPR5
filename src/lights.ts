import * as THREE from "three";

export function createLights(scene: THREE.Scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  const sun = new THREE.DirectionalLight(0xffffff, 1.5);

  sun.position.set(-2, 10, 7);
  sun.castShadow = true;

  scene.add(ambient, sun);
  return { ambient, sun };
}
