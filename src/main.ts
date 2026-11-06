import * as THREE from "three";
import { createCamera } from "./camera";
import { loadLayout } from "./layout";
import { createLights } from "./lights";
import { createRenderer, getCanvas } from "./renderer";
import { buildFloor } from "./room";

const canvas = getCanvas("#scene");
const renderer = createRenderer(canvas);
const { camera, controls } = createCamera(canvas);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1b1f22);
createLights(scene);

const layout = await loadLayout("/layout.json");
scene.add(buildFloor(layout.dimensions));

function resize() {
  const { clientWidth, clientHeight } = canvas;

  renderer.setSize(clientWidth, clientHeight, false);
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();
}

window.addEventListener("resize", resize);
resize();
renderer.setAnimationLoop(() => {
  controls.update();
  renderer.render(scene, camera);
});
