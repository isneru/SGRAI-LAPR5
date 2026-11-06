import * as THREE from "three";
import type { Layout } from "./layout";

export function buildFloor({ width, depth }: Layout["dimensions"]) {
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(width, depth),
    new THREE.MeshStandardMaterial({ color: 0x303030, roughness: 0.9 }),
  );

  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;

  return floor;
}
