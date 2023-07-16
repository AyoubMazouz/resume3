export const CIRCLES_CANVAS_W = window.innerWidth;
export const CIRCLES_CANVAS_H = window.innerHeight;
export const EFFECT_DEFAULT_OPTIONS = {
  zoom: 0.44,
  curve: 1.7,
  cellSize: 25,
  numOfParticles: 500,
};
export const EFFECT_PARAMS = [
  { id: "zoom", name: "zoom", desc: "", min: 0.01, max: 1, step: 0.01 },
  { id: "curve", name: "curve", desc: "", min: 0.1, max: 2.3, step: 0.05 },
  { id: "cellSize", name: "cell size", desc: "", min: 5, max: 25, step: 1 },
  { id: "numOfParticles", name: "number of particles", desc: "", min: 100, max: 8000, step: 10 },
];
