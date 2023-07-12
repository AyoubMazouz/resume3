import { writable } from "svelte/store";
import { projects } from "../data";

const store = writable(null);

function setProject(name) {
  const project = projects.filter((project) => project.name === name)[0];
  store.set(project);
  console.log(project);
}

export default { setProject, ...store };
