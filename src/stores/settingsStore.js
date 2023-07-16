import { writable } from "svelte/store";
import { EFFECT_DEFAULT_OPTIONS } from "../constants";

const store = writable(EFFECT_DEFAULT_OPTIONS);

export default { ...store };
