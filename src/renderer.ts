import * as THREE from "three";

export function getCanvas(selector: string) {
  const canvas = document.querySelector<HTMLCanvasElement>(selector);
  if (!canvas) {
    throw new Error(`Canvas "${selector}" not found`);
  }

  return canvas;
}

export function createRenderer(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;

  return renderer;
}
