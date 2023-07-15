import { writable } from "svelte/store";

const store = writable(null);

function setAlert(type, msg) {
  store.set({ type, msg });
  setTimeout(() => store.set(null), 8000);
}

export default { setAlert, ...store };
