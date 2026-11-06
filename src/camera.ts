import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function createCamera(canvas: HTMLCanvasElement) {
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);

  camera.position.set(0, 6, 9);

  const controls = new OrbitControls(camera, canvas);

  controls.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE,
  };

  controls.target.set(0, 0, 0);
  controls.enableDamping = true;
  controls.minDistance = 2;
  controls.maxDistance = 15;
  controls.maxPolarAngle = Math.PI / 2 - 0.05;

  return { camera, controls };
}
