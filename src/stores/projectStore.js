import { writable } from "svelte/store";
import { projects } from "../data";

const store = writable(null);

function setProject(name) {
  const project = projects.filter((project) => project.name === name)[0];
  store.set(project);
}

function setNext(id) {
  const project = projects.filter((project) => project.id === id + 1)[0];
  store.set(project);
}
function setPrev(id) {
  const project = projects.filter((project) => project.id === id - 1)[0];
  store.set(project);
}

export default { setProject, setNext, setPrev, ...store };
